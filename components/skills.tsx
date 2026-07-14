"use client"

import { motion } from "framer-motion"
import { skills } from "@/lib/data"
import { Reveal, SectionHeading } from "./reveal"

export function Skills() {
  const marqueeItems = [...skills, ...skills]

  return (
    <section id="skills" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="A toolkit for tech & craft"
          description="Balancing engineering fundamentals with the creative tools that bring stories to life."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill, i) => (
            <Reveal key={skill.name} delay={(i % 5) * 0.06}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass group relative h-full overflow-hidden rounded-2xl p-5 transition-colors hover:border-primary/40"
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
                    skill.category === "tech"
                      ? "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground"
                      : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                  }`}
                >
                  <skill.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-sm font-semibold leading-tight">
                  {skill.name}
                </h3>
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-border">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className={`h-full rounded-full ${
                      skill.category === "tech" ? "bg-accent" : "bg-primary"
                    }`}
                  />
                </div>
                <span className="mt-2 block text-right font-mono text-xs text-muted-foreground">
                  {skill.level}%
                </span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="relative mt-16 flex overflow-hidden border-y border-border py-5">
        <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10">
          {marqueeItems.map((skill, i) => (
            <span
              key={i}
              className="flex items-center gap-2 whitespace-nowrap font-display text-lg font-medium text-muted-foreground"
            >
              <skill.icon className="h-5 w-5 text-primary" />
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
