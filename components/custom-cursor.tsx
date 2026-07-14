"use client"

import { useEffect, useRef, useState } from "react"

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    // Only enable on fine pointer (mouse) devices
    const fine = window.matchMedia("(pointer: fine)").matches
    if (!fine) return
    setEnabled(true)
    document.body.classList.add("custom-cursor-active")

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ring = { x: pos.x, y: pos.y }
    let raf: number

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX
      pos.y = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x - 3}px, ${pos.y - 3}px, 0)`
      }
    }

    const onHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const interactive = target.closest("a, button, [data-cursor='hover'], input, textarea")
      if (ringRef.current) {
        ringRef.current.style.width = interactive ? "48px" : "28px"
        ringRef.current.style.height = interactive ? "48px" : "28px"
        ringRef.current.style.borderColor = interactive
          ? "var(--primary)"
          : "color-mix(in oklab, var(--foreground) 40%, transparent)"
      }
    }

    const loop = () => {
      ring.x += (pos.x - ring.x) * 0.18
      ring.y += (pos.y - ring.y) * 0.18
      if (ringRef.current) {
        const w = ringRef.current.offsetWidth / 2
        ringRef.current.style.transform = `translate3d(${ring.x - w}px, ${ring.y - w}px, 0)`
      }
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseover", onHover)
    raf = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseover", onHover)
      cancelAnimationFrame(raf)
      document.body.classList.remove("custom-cursor-active")
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[90] h-1.5 w-1.5 rounded-full bg-primary"
        aria-hidden
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[90] h-7 w-7 rounded-full border transition-[width,height,border-color] duration-200"
        style={{ borderColor: "color-mix(in oklab, var(--foreground) 40%, transparent)" }}
        aria-hidden
      />
    </>
  )
}
