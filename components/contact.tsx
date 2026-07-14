"use client"

import { motion } from "framer-motion"
import { socials } from "@/lib/data"
import { Reveal, SectionHeading } from "./reveal"
import { InquiryForm } from "./inquiry-form"

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's create something great"
          description="Have a project in mind or just want to say hello? Reach out through the form or connect with me directly."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div className="flex flex-col gap-4">
            <Reveal>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                I&apos;m always open to freelance work, collaborations, and creative
                conversations. Pick whichever channel works best for you.
              </p>
            </Reveal>
            <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {socials.map((social, i) => (
                <Reveal key={social.name} delay={i * 0.08}>
                  <motion.a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4 }}
                    className="glass group flex items-center gap-3 rounded-2xl p-4 transition-colors hover:border-primary/40"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <social.icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-sm font-semibold">
                        {social.name}
                      </span>
                      <span className="block truncate text-xs text-muted-foreground">
                        {social.handle}
                      </span>
                    </span>
                  </motion.a>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.15}>
            <InquiryForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
