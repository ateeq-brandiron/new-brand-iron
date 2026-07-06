import { NextRequest, NextResponse } from "next/server";

// TODO: wire this up to the real CRM / email destination (e.g. HubSpot, Resend)
// before launch. For now it validates the payload and logs it server-side so
// the forms are fully functional end-to-end during development.
export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body.email !== "string" || !body.email.includes("@")) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  console.log("[lead-form]", {
    formName: body.formName ?? "unknown",
    name: body.name,
    email: body.email,
    company: body.company,
    url: body.url,
    phone: body.phone,
    message: body.message,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
