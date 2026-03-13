import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

export const runtime = "nodejs";

const payloadSchema = z.object({
  name: z.string().trim().min(2, "Name is required"),
  email: z.string().trim().email("A valid email is required"),
  jobTitle: z.string().trim().optional(),
  jobSlug: z.string().trim().optional(),
});

export async function POST(req: Request) {
  const parsed = payloadSchema.safeParse(await req.json());

  if (!parsed.success) {
    return NextResponse.json(
      {
        error:
          parsed.error.issues[0]?.message ??
          "Please provide a valid name and email",
      },
      { status: 400 },
    );
  }

  const { name, email, jobTitle, jobSlug } = parsed.data;

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT ?? 587);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const fromEmail = process.env.SMTP_FROM;
  const notifyEmail = process.env.CAREERS_NOTIFY_EMAIL;

  if (!smtpHost || !smtpUser || !smtpPass || !fromEmail) {
    return NextResponse.json(
      {
        error:
          "SMTP is not fully configured. Required: SMTP_HOST, SMTP_USER, SMTP_PASS, SMTP_FROM",
      },
      { status: 500 },
    );
  }

  if (Number.isNaN(smtpPort)) {
    return NextResponse.json(
      { error: "SMTP_PORT must be a valid number" },
      { status: 500 },
    );
  }

  const roleLine = jobTitle ? `for ${jobTitle}` : "for your selected role";
  const applicationRef = jobSlug ? ` (ref: ${jobSlug})` : "";

  const applicantHtml = `
    <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #172b4d;">
      <h2 style="margin-bottom: 12px;">Thanks for applying, ${name}.</h2>
      <p>We received your application ${roleLine}${applicationRef}.</p>
      <p>Our recruiting team will review your details and contact you shortly.</p>
      <p style="margin-top: 20px;">XCIS AI Team</p>
    </div>
  `;

  const applicantText = [
    `Thanks for applying, ${name}.`,
    `We received your application ${roleLine}${applicationRef}.`,
    "Our recruiting team will review your details and contact you shortly.",
    "",
    "XCIS AI Team",
  ].join("\n");

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: fromEmail,
      to: email,
      subject: `Application received${jobTitle ? `: ${jobTitle}` : ""}`,
      html: applicantHtml,
      text: applicantText,
    });

    if (notifyEmail) {
      try {
        await transporter.sendMail({
          from: fromEmail,
          to: notifyEmail,
          subject: `New Career Application${jobTitle ? `: ${jobTitle}` : ""}`,
          text: [
            "A new application was submitted.",
            `Name: ${name}`,
            `Email: ${email}`,
            jobTitle ? `Role: ${jobTitle}` : null,
            jobSlug ? `Slug: ${jobSlug}` : null,
          ]
            .filter(Boolean)
            .join("\n"),
        });
      } catch (notifyError) {
        console.error("Notify email failed", notifyError);
      }
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Unexpected server error while sending email" },
      { status: 500 },
    );
  }
}
