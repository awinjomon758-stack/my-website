import type { LucideIcon } from "lucide-react"
import {
  Cloud,
  Code2,
  FileCode,
  Braces,
  GitBranch,
  Clapperboard,
  Film,
  Palette,
  Camera,
  BookOpen,
  Scissors,
  MonitorPlay,
  Share2,
  Globe,
  Sparkles,
  Instagram,
  Linkedin,
  MessageCircle,
  Mail,
} from "lucide-react"

export type Skill = {
  name: string
  icon: LucideIcon
  category: "tech" | "creative"
  level: number
}

export const skills: Skill[] = [
  { name: "Cloud Computing", icon: Cloud, category: "tech", level: 82 },
  { name: "HTML", icon: FileCode, category: "tech", level: 90 },
  { name: "CSS", icon: Code2, category: "tech", level: 85 },
  { name: "JavaScript", icon: Braces, category: "tech", level: 78 },
  { name: "Git & GitHub", icon: GitBranch, category: "tech", level: 80 },
  { name: "Final Cut Pro", icon: Clapperboard, category: "creative", level: 92 },
  { name: "Video Editing", icon: Scissors, category: "creative", level: 94 },
  { name: "Color Grading", icon: Palette, category: "creative", level: 86 },
  { name: "Cinematography", icon: Camera, category: "creative", level: 88 },
  { name: "Storytelling", icon: BookOpen, category: "creative", level: 90 },
]

export type Project = {
  title: string
  description: string
  category: "Video Editing" | "Filmmaking" | "Web Development" | "Creative Works"
  tech: string[]
  image: string
  href: string
}

export const projects: Project[] = [
  {
    title: "Neon Nights — Short Film",
    description:
      "A moody urban short exploring solitude, edited and color graded entirely in Final Cut Pro.",
    category: "Filmmaking",
    tech: ["Final Cut Pro", "Color Grading", "Sound Design"],
    image: "/projects/neon-nights.png",
    href: "#",
  },
  {
    title: "Campus Life Reel",
    description:
      "High-energy social reel capturing university culture with dynamic cuts and rhythmic transitions.",
    category: "Video Editing",
    tech: ["Final Cut Pro", "Motion Graphics"],
    image: "/projects/campus-reel.png",
    href: "#",
  },
  {
    title: "Cloud Deploy Dashboard",
    description:
      "A responsive front-end concept for a cloud deployment monitor built with vanilla JS.",
    category: "Web Development",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/projects/cloud-dashboard.png",
    href: "#",
  },
  {
    title: "Golden Hour — Cinematic Cut",
    description:
      "A travel montage graded with warm cinematic tones and smooth speed ramps.",
    category: "Filmmaking",
    tech: ["Cinematography", "Color Grading"],
    image: "/projects/golden-hour.png",
    href: "#",
  },
  {
    title: "Brand Promo Edit",
    description:
      "Punchy 30-second product promo edited for social media with kinetic typography.",
    category: "Video Editing",
    tech: ["Final Cut Pro", "Typography"],
    image: "/projects/brand-promo.png",
    href: "#",
  },
  {
    title: "Frame & Light — Photo Series",
    description:
      "A creative stills series experimenting with composition, contrast, and negative space.",
    category: "Creative Works",
    tech: ["Photography", "Composition"],
    image: "/projects/frame-light.png",
    href: "#",
  },
]

export const projectCategories = [
  "All",
  "Video Editing",
  "Filmmaking",
  "Web Development",
  "Creative Works",
] as const

export type Service = {
  title: string
  description: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    title: "Video Editing",
    description:
      "Professional edits with seamless pacing, transitions, and audio sync using Final Cut Pro.",
    icon: Scissors,
  },
  {
    title: "Short Film Editing",
    description:
      "Narrative-driven edits that build emotion, rhythm, and cinematic atmosphere.",
    icon: Film,
  },
  {
    title: "Social Media Content",
    description:
      "Scroll-stopping reels and shorts tailored for Instagram, YouTube, and beyond.",
    icon: MonitorPlay,
  },
  {
    title: "Website Development",
    description:
      "Clean, responsive websites built with modern HTML, CSS, and JavaScript.",
    icon: Globe,
  },
  {
    title: "Creative Media Production",
    description:
      "End-to-end creative direction, from concept and shooting to the final polished cut.",
    icon: Sparkles,
  },
]

export type Testimonial = {
  quote: string
  name: string
  role: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Awin turned raw footage into something that genuinely moved people. The pacing and color work were exceptional.",
    name: "Rahul Menon",
    role: "Independent Creator",
  },
  {
    quote:
      "Reliable, creative, and detail-obsessed. Our brand reel exceeded every expectation and performed great online.",
    name: "Sneha Nair",
    role: "Marketing Lead",
  },
  {
    quote:
      "A rare mix of technical skill and true storytelling instinct. Working with Awin was effortless.",
    name: "David Thomas",
    role: "Filmmaker",
  },
]

export type Stat = { value: number; suffix: string; label: string }

export const stats: Stat[] = [
  { value: 50, suffix: "+", label: "Projects Edited" },
  { value: 3, suffix: "+", label: "Years Creating" },
  { value: 20, suffix: "+", label: "Happy Clients" },
  { value: 100, suffix: "K+", label: "Views Generated" },
]

export type Social = {
  name: string
  icon: LucideIcon
  href: string
  handle: string
}

export const socials: Social[] = [
  { name: "Instagram", icon: Instagram, href: "https://instagram.com", handle: "@awin.jomon" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com", handle: "Awin Jomon" },
  { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/910000000000", handle: "Chat now" },
  { name: "Email", icon: Mail, href: "mailto:awinjomon@example.com", handle: "awinjomon@example.com" },
]

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
]

export { Share2 }
