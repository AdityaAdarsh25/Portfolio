'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Check,
  Code2,
  GraduationCap,
  Mail,
  Menu,
  MapPin,
  Send,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react'

const navItems = ['About', 'Projects', 'Skills', 'Contact']

const projects = [
  {
    title: 'ShopHub',
    eyebrow: 'E-commerce platform',
    description:
      'A full-stack marketplace built as a microservices system, with secure auth, service discovery, and containerized local development.',
    tags: ['React.js', 'Spring Boot', 'JWT', 'Docker', 'MySQL'],
    icon: BriefcaseBusiness,
    tone: 'amber',
    href: 'https://github.com/AdityaAdarsh25/ShopHub',
  },
  {
    title: 'Traffic Intelligence',
    eyebrow: 'Real-time spatial analytics',
    description:
      'A live traffic visualization platform that processes incoming events and turns 295,000+ coordinates into 750+ congestion hotspots.',
    tags: ['Kafka', 'PostgreSQL', 'DBSCAN', 'Spring Boot', 'Docker'],
    icon: Sparkles,
    tone: 'blue',
    href: 'https://github.com/AdityaAdarsh25/traffic-intelligence-platform',
  },
]

const skills = [
  ['Languages', 'Java · JavaScript · SQL'],
  ['Backend', 'Spring Boot · Spring Security · Spring Cloud'],
  ['Frontend', 'React.js · Responsive UI · REST APIs'],
  ['Data', 'MySQL · PostgreSQL · Apache Kafka'],
  ['Tooling', 'Docker · Maven · Git · Postman'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6 lg:px-10">
          <a href="#top" className="font-mono text-sm font-semibold tracking-tight" aria-label="Aditya Adarsh home">
            <span className="text-primary">A</span><span className="text-muted-foreground">.</span><span>ADARSH</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground">{item}</a>)}
          </nav>
          <a href="mailto:aditya18adarsh@gmail.com" className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary md:flex">Let&apos;s talk <ArrowUpRight size={15} /></a>
          <button className="rounded-md p-2 text-muted-foreground md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="flex flex-col gap-5 border-t border-border/70 px-6 py-6 md:hidden" aria-label="Mobile navigation">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">{item}</a>)}</nav>}
      </header>

      <section id="top" className="relative mx-auto flex min-h-[calc(100svh-72px)] max-w-6xl flex-col justify-center px-6 py-20 lg:px-10">
        <div className="hero-grid absolute inset-0 -z-10 opacity-40" />
        <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-primary"><span className="size-2 rounded-full bg-primary shadow-[0_0_18px_var(--primary)]" /> Available for software development internships</div>
        <h1 className="max-w-4xl text-balance font-mono text-5xl font-bold leading-[0.98] tracking-[-0.07em] sm:text-7xl lg:text-8xl">Building systems<br /><span className="text-primary">that move.</span></h1>
        <div className="mt-10 flex max-w-2xl flex-col gap-8 border-l border-primary/50 pl-5 sm:flex-row sm:items-end sm:gap-12">
          <p className="text-pretty text-base leading-7 text-muted-foreground sm:text-lg">I&apos;m Aditya Adarsh, a Computer Engineering undergraduate focused on Java, Spring Boot, and thoughtful full-stack products.</p>
          <a href="#projects" className="flex shrink-0 items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.16em] text-foreground transition-colors hover:text-primary">Explore work <ArrowUpRight size={16} /></a>
        </div>
        <div className="mt-20 flex flex-wrap gap-x-10 gap-y-4 text-xs text-muted-foreground"><span className="flex items-center gap-2"><MapPin size={14} /> Ghaziabad, India</span><span className="flex items-center gap-2"><Code2 size={14} /> Java · React · Cloud</span><span className="flex items-center gap-2"><GraduationCap size={14} /> Class of 2027</span></div>
      </section>

      <section id="about" className="border-t border-border/70 bg-card/30">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-32">
          <div><p className="section-kicker">01 / About</p><h2 className="mt-5 max-w-sm text-3xl font-semibold tracking-tight sm:text-4xl">Curious by default.<br /><span className="text-muted-foreground">Precise by practice.</span></h2></div>
          <div className="max-w-2xl"><p className="text-pretty text-xl leading-9 text-foreground/90">I enjoy working at the seam between clean interfaces and reliable backend systems. From discovering services to protecting APIs, I care about the details that make software feel effortless.</p><p className="mt-8 leading-7 text-muted-foreground">Currently pursuing a B.Tech in Computer Science at ABES Engineering College with a CGPA of 8.1. My coursework spans algorithms, operating systems, networks, and databases — the foundations I bring to every project.</p><div className="mt-10 flex flex-wrap gap-3"><span className="tag">DSA · 500+ problems</span><span className="tag">LeetCode Knight</span><span className="tag">Top 10 Hackathon finalist</span></div></div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="section-kicker">02 / Selected work</p><h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">Projects with a pulse.</h2></div><p className="max-w-xs text-sm leading-6 text-muted-foreground">Systems, experiments, and products built to solve real problems.</p></div><div className="mt-14 grid gap-5 lg:grid-cols-2">{projects.map((project) => { const Icon = project.icon; return <article key={project.title} className={`project-card ${project.tone}`}><div className="flex items-start justify-between"><div className="icon-box"><Icon size={22} /></div><span className="font-mono text-xs text-muted-foreground">2025—26</span></div><p className="mt-16 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">{project.eyebrow}</p><h3 className="mt-3 text-3xl font-semibold tracking-tight">{project.title}</h3><p className="mt-5 max-w-md text-sm leading-6 text-muted-foreground">{project.description}</p><div className="mt-8 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div><a href={project.href} target="_blank" rel="noreferrer" className="mt-10 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-foreground hover:text-primary">View project <ArrowUpRight size={15} /></a></article> })}</div></section>

      <section id="skills" className="border-y border-border/70 bg-card/30"><div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-32"><div><p className="section-kicker">03 / Toolkit</p><h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">The stack behind<br /><span className="text-muted-foreground">the ideas.</span></h2></div><div className="grid gap-0">{skills.map(([label, value]) => <div key={label} className="grid gap-2 border-t border-border py-5 sm:grid-cols-[0.7fr_1.3fr] sm:gap-8"><span className="font-mono text-xs uppercase tracking-[0.16em] text-primary">{label}</span><span className="text-sm text-muted-foreground">{value}</span></div>)}</div></div></section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32"><div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]"><div><p className="section-kicker">04 / Contact</p><h2 className="mt-5 max-w-md text-4xl font-semibold tracking-tight sm:text-5xl">Have a good problem?</h2><p className="mt-6 max-w-sm leading-7 text-muted-foreground">I&apos;m always open to conversations about internships, backend systems, and ambitious ideas.</p><div className="mt-10 flex flex-col gap-4 text-sm"><a href="mailto:aditya18adarsh@gmail.com" className="flex items-center gap-3 hover:text-primary"><Mail size={16} /> aditya18adarsh@gmail.com</a><a href="https://github.com/AdityaAdarsh25" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary"><Code2 size={16} /> github.com/AdityaAdarsh25</a><a href="https://linkedin.com/in/aditya-adarsh" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary"><ArrowUpRight size={16} /> linkedin.com/in/aditya-adarsh</a></div></div><form onSubmit={handleSubmit} className="flex flex-col gap-5 border border-border bg-card p-6 sm:p-8"><label className="flex flex-col gap-2 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">Your name<input required name="name" className="field" placeholder="Jane Smith" /></label><label className="flex flex-col gap-2 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">Email<input required type="email" name="email" className="field" placeholder="jane@company.com" /></label><label className="flex flex-col gap-2 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">Message<textarea required name="message" className="field min-h-32 resize-y" placeholder="Tell me what you&apos;re building..." /></label><button type="submit" className="flex items-center justify-center gap-2 bg-primary px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground transition-transform hover:-translate-y-0.5">{submitted ? <><Check size={16} /> Message noted</> : <><Send size={16} /> Send message</>}</button>{submitted && <p className="flex items-center gap-2 text-sm text-primary"><ShieldCheck size={15} /> Thanks — I&apos;ll get back to you soon.</p>}</form></div></section>
      <footer className="border-t border-border/70"><div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-10"><span>© 2026 Aditya Adarsh</span><span className="font-mono">Designed & built with intent.</span></div></footer>
    </main>
  )
}
