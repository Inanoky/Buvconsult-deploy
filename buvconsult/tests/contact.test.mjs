import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { test } from "node:test";
import { runInNewContext } from "node:vm";

const require = createRequire(import.meta.url);
const ts = require("typescript");
const routeSource = ts.transpileModule(
	readFileSync(new URL("../app/api/contact/route.ts", import.meta.url), "utf8"),
	{ compilerOptions: { module: ts.ModuleKind.CommonJS } },
).outputText;
const validEnquiry = {
	firstName: "Tracking",
	lastName: "Test",
	email: "test@example.com",
	subject: "Contact form test",
	message: "A test enquiry",
	hp: "",
	submissionId: "dc774697-881e-44d3-8873-542593ef15bc",
};

function loadRoute(fetch, apiKey = "test-key") {
	const exports = {};
	runInNewContext(routeSource, {
		exports,
		process: { env: { RESEND_API_KEY: apiKey } },
		fetch,
		Response,
		URL,
		AbortSignal,
		console: { error() {} },
	});
	return exports.POST;
}

function request(payload = validEnquiry, origin = "https://buvconsult.com") {
	return new Request("https://buvconsult.com/api/contact", {
		method: "POST",
		headers: { "Content-Type": "application/json", Origin: origin },
		body: JSON.stringify(payload),
	});
}

test("successful enquiries use the fixed company recipient and a stable retry key", async () => {
	const calls = [];
	const post = loadRoute(async (url, options) => {
		calls.push({ url, options });
		return Response.json({ id: "email-receipt-1" });
	});
	for (let attempt = 0; attempt < 2; attempt++) {
		const response = await post(request());
		assert.equal(response.status, 200);
		assert.deepEqual(await response.json(), {
			ok: true,
			accepted: true,
			id: "email-receipt-1",
		});
		assert.equal(response.headers.get("cache-control"), "no-store");
	}
	assert.equal(calls[0].url, "https://api.resend.com/emails");
	assert.equal(calls[0].options.headers["Idempotency-Key"], calls[1].options.headers["Idempotency-Key"]);
	assert.equal(calls[0].options.headers["Idempotency-Key"], `buvconsult-contact/${validEnquiry.submissionId}`);
	const email = JSON.parse(calls[0].options.body);
	assert.deepEqual(email.to, ["vjaceslavs.gromatovics@buvconsult.com"]);
	assert.equal(email.reply_to, validEnquiry.email);
	assert.equal(email.from, "Buvconsult <enquiries@no-reply.buvconsult.com>");
	assert.match(email.text, /A test enquiry/);
});

test("honeypot requests are never sent or accepted as leads", async () => {
	const response = await loadRoute(() => assert.fail("Email must not be sent"))(
		request({ ...validEnquiry, hp: "spam" }),
	);
	assert.equal(response.status, 202);
	assert.deepEqual(await response.json(), { ok: true, accepted: false });
});

test("invalid enquiries and foreign origins cannot send email", async () => {
	const post = loadRoute(() => assert.fail("Email must not be sent"));
	for (const payload of [
		{ ...validEnquiry, email: "invalid" },
		{ ...validEnquiry, subject: "Header\r\nInjection" },
		{ ...validEnquiry, firstName: " " },
		{ ...validEnquiry, message: "a".repeat(10_001) },
		{ ...validEnquiry, submissionId: "" },
		null,
		[],
	]) {
		assert.equal((await post(request(payload))).status, 400);
	}
	assert.equal((await post(request(validEnquiry, "https://example.com"))).status, 403);
});

test("malformed and oversized bodies are rejected before email delivery", async () => {
	const post = loadRoute(() => assert.fail("Email must not be sent"));
	for (const [body, status] of [["{", 400], ["a".repeat(16_385), 413]]) {
		const response = await post(new Request("https://buvconsult.com/api/contact", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body,
		}));
		assert.equal(response.status, status);
	}
});

test("provider failures and missing receipts never report a successful enquiry", async () => {
	for (const providerResponse of [
		Response.json({ message: "Unavailable" }, { status: 503 }),
		Response.json({}),
		Response.json({ id: "" }),
	]) {
		const response = await loadRoute(async () => providerResponse)(request());
		assert.equal(response.status, 502);
		assert.equal((await response.json()).accepted, undefined);
	}
	const networkFailure = await loadRoute(async () => { throw new Error("Network failure"); })(request());
	assert.equal(networkFailure.status, 502);
	const missingConfiguration = await loadRoute(() => assert.fail("No key configured"), "")(request());
	assert.equal(missingConfiguration.status, 503);
});

test("completed lead tracking sends one event per email receipt without contact details", () => {
	const events = [];
	const exports = {};
	const source = ts.transpileModule(
		readFileSync(new URL("../lib/analytics/marketing-events.ts", import.meta.url), "utf8"),
		{ compilerOptions: { module: ts.ModuleKind.CommonJS } },
	).outputText;
	runInNewContext(source, {
		exports,
		require: () => ({ sendGTMEvent: (event) => events.push(event) }),
	});
	assert.equal(exports.trackGenerateLeadOnce(""), false);
	assert.equal(exports.trackGenerateLeadOnce("email-receipt-1"), true);
	assert.equal(exports.trackGenerateLeadOnce("email-receipt-1"), false);
	assert.equal(events.length, 1);
	assert.deepEqual(JSON.parse(JSON.stringify(events[0])), {
		event: "generate_lead",
		eventModel: {
			currency: "EUR",
			event_id: "email-receipt-1",
			event_name: "generate_lead",
			transaction_id: "email-receipt-1",
			value: 1,
		},
	});
});
