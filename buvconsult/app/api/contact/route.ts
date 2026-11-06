export const runtime = "nodejs";
export const maxDuration = 20;

function json(body: Record<string, unknown>, status = 200) {
	return Response.json(body, {
		status,
		headers: { "Cache-Control": "no-store" },
	});
}

export async function POST(request: Request) {
	const origin = request.headers.get("origin");
	const allowedOrigins = [
		new URL(request.url).origin,
		"https://buvconsult.com",
		"https://www.buvconsult.com",
	];
	if (origin && !allowedOrigins.includes(origin)) {
		return json({ error: "Invalid origin" }, 403);
	}
	if (!request.headers.get("content-type")?.includes("application/json")) {
		return json({ error: "JSON request required" }, 415);
	}

	let body: Record<string, unknown>;
	try {
		const text = await request.text();
		if (text.length > 16_384) {
			return json({ error: "Request is too large" }, 413);
		}
		body = JSON.parse(text);
		if (!body || typeof body !== "object" || Array.isArray(body)) {
			return json({ error: "Invalid enquiry" }, 400);
		}
	} catch {
		return json({ error: "Invalid JSON" }, 400);
	}

	if (body.hp) {
		return json({ ok: true, accepted: false }, 202);
	}

	const fields: Record<string, string> = {};
	const limits = {
		firstName: 100,
		lastName: 100,
		email: 254,
		subject: 200,
		message: 10_000,
	};
	for (const [name, maximum] of Object.entries(limits)) {
		const value = body[name];
		if (typeof value !== "string" || !value.trim() || value.length > maximum) {
			return json({ error: "Invalid enquiry", field: name }, 400);
		}
		fields[name] = value.trim();
	}
	if (
		!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email) ||
		/[\r\n]/.test(fields.subject) ||
		typeof body.submissionId !== "string" ||
		!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
			body.submissionId,
		)
	) {
		return json({ error: "Invalid enquiry" }, 400);
	}

	const apiKey = process.env.RESEND_API_KEY;
	if (!apiKey) {
		console.error("Contact delivery is missing its email configuration");
		return json({ error: "Email delivery unavailable" }, 503);
	}

	try {
		const response = await fetch("https://api.resend.com/emails", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${apiKey}`,
				"Content-Type": "application/json",
				"Idempotency-Key": `buvconsult-contact/${body.submissionId}`,
			},
			body: JSON.stringify({
				from: "Buvconsult <enquiries@no-reply.buvconsult.com>",
				to: ["vjaceslavs.gromatovics@buvconsult.com"],
				reply_to: fields.email,
				subject: `[Buvconsult] ${fields.subject}`,
				text: [
					`Name: ${fields.firstName} ${fields.lastName}`,
					`Email: ${fields.email}`,
					"",
					fields.message,
				].join("\n"),
			}),
			signal: AbortSignal.timeout(15_000),
		});
		const result = await response.json();
		if (!response.ok || typeof result?.id !== "string" || !result.id) {
			console.error("Contact email was not accepted", { status: response.status });
			return json({ error: "Email delivery unavailable" }, 502);
		}

		return json({ ok: true, accepted: true, id: result.id });
	} catch {
		console.error("Contact email request failed");
		return json({ error: "Email delivery unavailable" }, 502);
	}
}
