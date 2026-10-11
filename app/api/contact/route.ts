import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT_EMAIL } from "@/lib/contact";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Batas anti-spam sederhana: maks 3 pesan per 10 menit per IP.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 3;
const hits = new Map<string, number[]>();

function getIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  const real = req.headers.get("x-real-ip");
  if (real) return real.trim();
  return "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  let data: unknown = null;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  const { name, email, subject, message, company } = (data ?? {}) as Record<string, unknown>;

  // Honeypot: field tersembunyi "company" hanya diisi bot.
  // Pura-pura sukses agar bot tidak tahu ia terdeteksi.
  if (typeof company === "string" && company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const vName = typeof name === "string" ? name.trim() : "";
  const vEmail = typeof email === "string" ? email.trim() : "";
  const vSubject = typeof subject === "string" ? subject.trim() : "";
  const vMessage = typeof message === "string" ? message.trim() : "";

  if (
    vName.length < 2 || vName.length > 100 ||
    !EMAIL_RE.test(vEmail) || vEmail.length > 254 ||
    vSubject.length < 3 || vSubject.length > 150 ||
    vMessage.length < 10 || vMessage.length > 5000
  ) {
    return NextResponse.json({ error: "validation" }, { status: 400 });
  }

  if (isRateLimited(getIp(req))) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("[contact] RESEND_API_KEY belum diset");
    return NextResponse.json({ error: "server_misconfigured" }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const text = `${vMessage}\n\n—\n${vName}\n${vEmail}`;
  const html = `<p>${escapeHtml(vMessage).replace(/\n/g, "<br />")}</p><hr /><p><b>${escapeHtml(vName)}</b><br />${escapeHtml(vEmail)}</p>`;

  const { error } = await resend.emails.send({
    // Mode test Resend (tanpa verifikasi domain) hanya bisa kirim dari
    // alamat ini. Jangan diganti kecuali Anda sudah verifikasi domain sendiri.
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: CONTACT_EMAIL,
    replyTo: vEmail,
    subject: `[Portfolio] ${vSubject}`,
    text,
    html,
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
