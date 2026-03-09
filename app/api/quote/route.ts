import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function htmlEscape(str: string) {
  return str.replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',''':'&#39;'}[c] as string));
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const entries = Object.fromEntries(formData.entries());

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_PASS },
    });

    const to = process.env.TO_EMAIL || process.env.GMAIL_USER;

    const fields = Object.entries(entries)
      .map(([k, v]) => `<tr><td style="padding:6px 8px;border:1px solid #eee;"><b>${htmlEscape(k)}</b></td><td style="padding:6px 8px;border:1px solid #eee;">${htmlEscape(String(v))}</td></tr>`)
      .join('');

    await transporter.sendMail({
      from: `Website Quote <${process.env.GMAIL_USER}>`,
      to,
      subject: `New Quote Request` ,
      text: JSON.stringify(entries, null, 2),
      html: `<div><h3>New Quote Request</h3><table style="border-collapse:collapse">${fields}</table></div>`,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false, error: 'Failed to send email' }, { status: 500 });
  }
}
