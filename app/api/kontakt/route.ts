import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = "wiktory.kontakt@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, budget, message } = body;

    if (!name || !email || !budget || !message) {
      return NextResponse.json({ error: "Brakujące pola" }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "Formularz wiktory.ai <onboarding@resend.dev>",
      to: [TO_EMAIL],
      replyTo: email,
      subject: `Nowe zapytanie od ${name}`,
      text: [
        `Imię: ${name}`,
        `E-mail: ${email}`,
        `Budżet: ${budget}`,
        ``,
        `Wiadomość:`,
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Błąd wysyłki" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: "Błąd serwera" }, { status: 500 });
  }
}
