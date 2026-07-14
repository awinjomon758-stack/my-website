"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowDown, Download, Play } from "lucide-react"
import { useEffect, useState } from "react"
import { Particles } from "./particles"

const roles = ["Video Editor", "Filmmaker", "Cloud Computing Student", "Content Creator"]

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    const speed = deleting ? 45 : 90
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1))
        if (text.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1200)
        }
      } else {
        setText(current.slice(0, text.length - 1))
        if (text.length === 0) {
          setDeleting(false)
          setRoleIndex((i) => (i + 1) % roles.length)
        }
      }
    }, speed)
    return () => clearTimeout(timeout)
  }, [text, deleting, roleIndex])

  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-grid pt-28"
    >
      <Particles className="absolute inset-0 h-full w-full" />
      {/* cinematic glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-accent/10 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-xs text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for freelance projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m <span className="text-gradient">Awin Jomon</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 flex h-8 items-center font-display text-xl text-muted-foreground sm:text-2xl"
          >
            <span className="text-foreground">{text}</span>
            <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-primary" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground"
          >
            A BCA Cloud Computing student at Kristu Jayanti University, driven by a
            passion for technology and cinematic storytelling. I craft compelling
            visuals — from precision edits to atmospheric short films.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => scrollTo("#portfolio")}
              className="group flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              <Play className="h-4 w-4 fill-current" />
              View Portfolio
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="rounded-xl border border-border bg-muted/40 px-6 py-3 font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Contact Me
            </button>
            <a
              href="/awin-jomon-resume.pdf"
              className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="animate-float relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-primary/40 to-accent/20 opacity-60 blur-2xl" />
            <div className="glass relative overflow-hidden rounded-[2rem] p-2">
              <Image
                src="/awin.jpg"
                alt="Portrait of Awin Jomon"
                width={520}
                height={640}
                priority
                className="h-full w-full rounded-[1.5rem] object-cover"
              />
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            <div className="glass absolute -bottom-4 -left-4 rounded-2xl px-4 py-3">
              <p className="font-display text-2xl font-bold text-gradient">3+</p>
              <p className="text-xs text-muted-foreground">Years Creating</p>
            </div>
            <div className="glass absolute -right-4 top-8 rounded-2xl px-4 py-3">
              <p className="font-display text-2xl font-bold text-gradient">50+</p>
              <p className="text-xs text-muted-foreground">Projects</p>
            </div>
          </div>
        </motion.div>
      </div>

      <button
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Scroll to about"
      >
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </button>
    </section>
  )
}
