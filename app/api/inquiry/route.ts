import { NextResponse } from "next/server"

type InquiryPayload = {
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
  company?: string // honeypot
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  let body: InquiryPayload
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }

  // Spam protection: honeypot field must be empty
  if (body.company && body.company.trim().length > 0) {
    // Pretend success to avoid tipping off bots
    return NextResponse.json({ ok: true })
  }

  const name = body.name?.trim() ?? ""
  const email = body.email?.trim() ?? ""
  const subject = body.subject?.trim() ?? ""
  const message = body.message?.trim() ?? ""

  const errors: string[] = []
  if (name.length < 2) errors.push("name")
  if (!emailRegex.test(email)) errors.push("email")
  if (subject.length < 3) errors.push("subject")
  if (message.length < 10) errors.push("message")

  if (errors.length > 0) {
    return NextResponse.json(
      { error: "Validation failed.", fields: errors },
      { status: 422 },
    )
  }

  // NOTE: No database/email integration is connected.
  // Log the inquiry server-side. To persist inquiries and send emails,
  // connect a database (e.g. Supabase) and an email provider.
  console.log("[v0] New inquiry received:", {
    name,
    email,
    phone: body.phone?.trim() ?? "",
    subject,
    message,
    receivedAt: new Date().toISOString(),
  })

  return NextResponse.json({ ok: true })
}
