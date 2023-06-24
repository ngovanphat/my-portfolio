import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();
  const { subject, phoneNumber, message } = body as any;
  // Configure your email service provider's SMTP settings
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  } as any);

  try {
    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: "1753082.17clc@gmail.com",
      subject: subject,
      text: `
        Phone number: ${phoneNumber}
        Message: ${message}
      `,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Something went wrong" });
  }
}
