"use client"

import { motion } from "framer-motion"
import { Cloud, Clapperboard, Camera, GraduationCap } from "lucide-react"
import { Reveal, SectionHeading } from "./reveal"

const highlights = [
  {
    icon: GraduationCap,
    title: "BCA — Cloud Computing",
    text: "Studying at Kristu Jayanti University, Bangalore, building a strong technical foundation.",
  },
  {
    icon: Cloud,
    title: "Cloud & Digital Innovation",
    text: "Passionate about cloud technologies, web development, and modern digital tools.",
  },
  {
    icon: Clapperboard,
    title: "Final Cut Pro Editor",
    text: "Skilled in precision video editing, pacing, and post-production workflows.",
  },
  {
    icon: Camera,
    title: "Visual Storyteller",
    text: "A strong interest in filmmaking, cinematography, and emotive visual storytelling.",
  },
]

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About Me"
          title="Where technology meets storytelling"
          description="I live at the intersection of code and cinema — combining a curiosity for cloud computing with a love for crafting stories that resonate."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="space-y-5 text-pretty leading-relaxed text-muted-foreground">
              <p>
                I&apos;m Awin Jomon, a BCA Cloud Computing student at{" "}
                <span className="text-foreground">Kristu Jayanti University, Bangalore</span>.
                My days are split between exploring cloud technologies and digital
                innovation, and my evenings are spent editing footage into stories worth
                watching.
              </p>
              <p>
                As a{" "}
                <span className="text-foreground">Final Cut Pro editor</span> and
                filmmaker, I care deeply about rhythm, color, and the feeling a frame can
                create. Whether it&apos;s a fast-paced social reel or an atmospheric short
                film, I bring intention to every cut.
              </p>
              <p>
                I&apos;m continuously learning — new frameworks, new techniques, new ways
                to tell a story. My goal is simple: to build things that are both{" "}
                <span className="text-foreground">technically sound and creatively bold</span>.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="glass group h-full rounded-2xl p-5 transition-colors hover:border-primary/40"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
