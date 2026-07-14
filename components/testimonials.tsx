"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { testimonials } from "@/lib/data"
import { Reveal, SectionHeading } from "./reveal"

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="Kind words from collaborators"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.1}>
              <motion.figure
                whileHover={{ y: -6 }}
                className="glass flex h-full flex-col rounded-2xl p-6"
              >
                <Quote className="h-8 w-8 text-primary/60" />
                <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-muted-foreground">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 font-display text-sm font-bold text-primary">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.role}</p>
                  </div>
                </figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
