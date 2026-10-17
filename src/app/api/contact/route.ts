// src/app/api/contact/route.ts
//
// Uses Resend (https://resend.com) — free tier: 100 emails/day
//
// SETUP (takes ~5 minutes):
//   1. Go to resend.com → sign up free
//   2. Dashboard → API Keys → Create API Key → copy it
//   3. Add to your .env.local:
//        RESEND_API_KEY=re_xxxxxxxxxxxx
//   4. In Resend dashboard → Domains → you can use their shared domain
//      (onboarding@resend.dev) for testing, or verify your own domain later
//   5. npm install resend
//   Done.

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Basic rate limiting — max 5 submissions per IP per hour (in-memory)
// For production, swap this with Redis/Upstash
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 });
    return true;
  }

  if (entry.count >= 5) return false;

  entry.count++;
  return true;
}

export async function POST(req: NextRequest) {
  // Rate limit check
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  // Parse + validate body
  let body: { name?: string; email?: string; message?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const { name, email, message } = body;

  if (
    !name ||
    typeof name !== "string" ||
    name.trim().length < 1 ||
    !email ||
    typeof email !== "string" ||
    !email.includes("@") ||
    !message ||
    typeof message !== "string" ||
    message.trim().length < 1
  ) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 },
    );
  }

  // Sanitize — strip HTML tags to prevent injection
  const safe = (str: string) =>
    str
      .replace(/<[^>]*>/g, "")
      .trim()
      .slice(0, 2000);
  const safeName = safe(name);
  const safeEmail = safe(email);
  const safeMessage = safe(message);

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact/route] Missing RESEND_API_KEY");
    return NextResponse.json(
      { error: "Contact service is not configured." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      // Change 'onboarding@resend.dev' to your verified domain once set up
      from: "Portfolio Contact <onboarding@resend.dev>",
      // ⚠️ While using onboarding@resend.dev, this MUST be the email
      // you signed up to Resend with — otherwise Resend silently drops it.
      // Once you verify a domain, you can change this to any address.
      to: "timothy.evan.heriawan@gmail.com",
      replyTo: safeEmail,
      subject: `Portfolio message from ${safeName}`,
      text: [
        `From: ${safeName} <${safeEmail}>`,
        "",
        "Message:",
        safeMessage,
        "",
        "---",
        "Sent via timothy-evan.vercel.app/contact form",
      ].join("\n"),
      // Optional: HTML version for nicer inbox display
      html: `
                <div style="font-family: 'Courier New', monospace; max-width: 600px; padding: 32px; background: #F7F7F5; color: #1A1A1A;">
                    <div style="border-left: 3px solid #7A1E1E; padding-left: 16px; margin-bottom: 24px;">
                        <p style="font-size: 11px; color: #7A1E1E; letter-spacing: 0.3em; text-transform: uppercase; margin: 0 0 4px;">
                            Portfolio Contact
                        </p>
                        <p style="font-size: 18px; font-weight: bold; margin: 0;">${safeName}</p>
                        <p style="font-size: 13px; color: #666666; margin: 4px 0 0;">${safeEmail}</p>
                    </div>
                    <div style="border-top: 1px solid #E8E8E6; padding-top: 24px;">
                        <p style="font-size: 9px; color: #9F9F9F; letter-spacing: 0.3em; text-transform: uppercase; margin: 0 0 12px;">Message</p>
                        <p style="font-size: 14px; color: #4A4A4A; line-height: 1.7; white-space: pre-wrap; margin: 0;">${safeMessage}</p>
                    </div>
                    <div style="border-top: 1px solid #E8E8E6; padding-top: 16px; margin-top: 32px;">
                        <p style="font-size: 10px; color: #BFBFBF; margin: 0;">timothy-evan.vercel.app</p>
                    </div>
                </div>
            `,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("[contact/route] Resend error:", err);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 },
    );
  }
}
