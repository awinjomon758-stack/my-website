"use client"

import { navLinks, socials } from "@/lib/data"

export function Footer() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })

  return (
    <footer className="relative border-t border-border bg-muted/20">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <button
              onClick={() => scrollTo("#home")}
              className="font-display text-2xl font-bold"
            >
              Awin<span className="text-primary">.</span>
            </button>
            <p className="mt-4 max-w-sm text-pretty leading-relaxed text-muted-foreground">
              Video editor, filmmaker, and cloud computing student crafting stories where
              technology meets cinema.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold">Connect</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary hover:text-primary-foreground"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            Copyright &copy; 2026 Awin Jomon. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Designed &amp; built with a love for storytelling.
          </p>
        </div>
      </div>
    </footer>
  )
}
