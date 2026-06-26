import { EmailTemplate } from "@/app/Landing/ContactForm/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z, ZodError } from "zod";

const ContactSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1),
  hp: z.string().optional(),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = ContactSchema.parse(body);

    if (parsed.hp && parsed.hp.length > 0) {
      return NextResponse.json({ ok: true });
    }

    const { firstName, lastName, email, subject, message } = parsed;
    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM ?? "Buvconsult <onboarding@resend.dev>",
      to: ["hello@buvconsult.com"],
      replyTo: email,
      subject: `[Contact] ${subject}`,
      react: EmailTemplate({ firstName, lastName, email, subject, message }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (err) {
    if (err instanceof ZodError) {
      return NextResponse.json(
        { error: "Validation failed", issues: err.flatten() },
        { status: 400 }
      );
    }

    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
