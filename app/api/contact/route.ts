import nodemailer from "nodemailer";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, phone, email, message } = body;

    if (!fullName || !phone || !email || !message) {
      return new Response(JSON.stringify({ error: "Все поля обязательны" }), { status: 400 });
    }

    const to = "mailbox@oversize-group.ru";
    const subject = `Новая заявка с сайта от ${fullName}`;
    const html = `
      <h3>Новая заявка</h3>
      <p><strong>ФИО:</strong> ${fullName}</p>
      <p><strong>Телефон:</strong> ${phone}</p>
      <p><strong>Почта:</strong> ${email}</p>
      <p><strong>Сообщение:</strong><br/>${message}</p>
    `;

    // Use SMTP transport if env vars provided
    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (host && port && user && pass) {
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass },
      });

      await transporter.sendMail({
        from: user,
        to,
        subject,
        html,
      });

      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }

    // Fallback: log to server console if SMTP not configured
    console.log("Contact form submission (SMTP not configured):\n", { fullName, phone, email, message });

    return new Response(JSON.stringify({ ok: true, warning: "SMTP not configured" }), { status: 200 });
  } catch (err: any) {
    console.error(err);
    return new Response(JSON.stringify({ error: err?.message || "Server error" }), { status: 500 });
  }
}
