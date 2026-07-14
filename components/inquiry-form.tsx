"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, Loader2, Send, AlertCircle } from "lucide-react"

type FormState = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  company: string // honeypot
}

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  company: "",
}

export function InquiryForm() {
  const [form, setForm] = useState<FormState>(initial)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (form.name.trim().length < 2) next.name = "Please enter your name."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email address."
    if (form.phone && !/^[+\d][\d\s\-()]{6,}$/.test(form.phone))
      next.phone = "Enter a valid phone number."
    if (form.subject.trim().length < 3) next.subject = "Add a short subject."
    if (form.message.trim().length < 10)
      next.message = "Message should be at least 10 characters."
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const update = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }))
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus("loading")
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error("Request failed")
      setStatus("success")
      setForm(initial)
      setTimeout(() => setStatus("idle"), 4000)
    } catch {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 4000)
    }
  }

  const fields: {
    key: keyof FormState
    label: string
    type?: string
    placeholder: string
    full?: boolean
  }[] = [
    { key: "name", label: "Name", placeholder: "Your full name" },
    { key: "email", label: "Email", type: "email", placeholder: "you@example.com" },
    { key: "phone", label: "Phone Number", placeholder: "+91 00000 00000" },
    { key: "subject", label: "Subject", placeholder: "What's this about?" },
  ]

  return (
    <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8" noValidate>
      {/* Honeypot for spam protection */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        value={form.company}
        onChange={(e) => update("company", e.target.value)}
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.key}>
            <label
              htmlFor={field.key}
              className="mb-1.5 block text-sm font-medium text-foreground"
            >
              {field.label}
            </label>
            <input
              id={field.key}
              type={field.type ?? "text"}
              value={form[field.key]}
              onChange={(e) => update(field.key, e.target.value)}
              placeholder={field.placeholder}
              className={`w-full rounded-xl border bg-muted/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary ${
                errors[field.key] ? "border-red-500/70" : "border-border"
              }`}
            />
            {errors[field.key] && (
              <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                <AlertCircle className="h-3 w-3" />
                {errors[field.key]}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Tell me about your project or idea..."
          className={`w-full resize-none rounded-xl border bg-muted/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary ${
            errors.message ? "border-red-500/70" : "border-border"
          }`}
        />
        {errors.message && (
          <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
            <AlertCircle className="h-3 w-3" />
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-[1.01] disabled:opacity-70 sm:w-auto"
      >
        <AnimatePresence mode="wait" initial={false}>
          {status === "loading" ? (
            <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </motion.span>
          ) : status === "success" ? (
            <motion.span key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
              <Check className="h-4 w-4" />
              Message Sent
            </motion.span>
          ) : (
            <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
              <Send className="h-4 w-4" />
              Send Inquiry
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {status === "success" && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 text-sm text-primary"
          >
            Thanks for reaching out — I&apos;ll get back to you soon.
          </motion.p>
        )}
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 flex items-center gap-1 text-sm text-red-400"
          >
            <AlertCircle className="h-4 w-4" />
            Something went wrong. Please try again.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  )
}
