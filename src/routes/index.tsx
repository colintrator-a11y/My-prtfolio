import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ArrowRight,
  Code2,
  Layers,
  Server,
  Gauge,
  Compass,
  PenLine,
  Hammer,
  Rocket,
  Quote,
  ArrowUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { useReveal } from "@/hooks/use-reveal";

import heroVisual from "@/assets/hero-visual.jpg";
import projSakura from "@/assets/project-sakura.jpg";
import projFlowboard from "@/assets/project-flowboard.jpg";
import projTokyoEats from "@/assets/project-tokyoeats.jpg";
import projInkwell from "@/assets/project-inkwell.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        property: "og:image",
        content:
          "https://id-preview--a3f07b5b-fca3-42c9-87eb-2a219856c520.lovable.app/og.jpg",
      },
    ],
  }),
  component: Portfolio,
});

const nav = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const stack = [
  "React", "Next.js", "TypeScript", "JavaScript", "Node.js", "Express",
  "PostgreSQL", "MongoDB", "Prisma", "REST APIs", "GraphQL", "Tailwind CSS",
  "Docker", "Git & GitHub", "Vercel", "AWS",
];

const services = [
  {
    icon: Layers,
    title: "Full-Stack Web Development",
    desc: "End-to-end web applications built with modern frontend frameworks, reliable APIs, databases, authentication, and deployment.",
  },
  {
    icon: Code2,
    title: "Frontend Development",
    desc: "Responsive, accessible, high-performance interfaces using React, Next.js, TypeScript, Tailwind CSS, and modern UI patterns.",
  },
  {
    icon: Server,
    title: "Backend & API Development",
    desc: "Secure Node.js services, REST or GraphQL APIs, database design, integrations, authentication, and scalable architecture.",
  },
  {
    icon: Gauge,
    title: "Performance & Product Improvements",
    desc: "Audits and improvements for speed, SEO, UX, Core Web Vitals, maintainability, and conversion-focused user flows.",
  },
];

const projects = [
  {
    n: "01",
    title: "Sakura Commerce",
    year: "2025",
    tags: ["E-commerce", "Full Stack", "Payments"],
    stack: "Next.js · TypeScript · Node.js · PostgreSQL · Prisma · Stripe",
    desc: "A modern headless e-commerce platform for independent Japanese lifestyle brands. Built a fast shopping experience with a product catalog, secure checkout, customer accounts, and a lightweight merchant dashboard.",
    metric: "42% faster page loads · 28% higher mobile conversion",
    image: projSakura,
  },
  {
    n: "02",
    title: "Flowboard",
    year: "2025",
    tags: ["SaaS", "Real-time", "Collaboration"],
    stack: "React · Node.js · Express · MongoDB · Socket.io · Docker",
    desc: "A collaborative project-management workspace for distributed product teams. Real-time task boards, team workspaces, comments, notifications, role-based access, and analytics.",
    metric: "Real-time sync · 35% less manual status reporting",
    image: projFlowboard,
  },
  {
    n: "03",
    title: "Tokyo Eats",
    year: "2024",
    tags: ["Discovery", "Maps", "SEO"],
    stack: "Next.js · TypeScript · PostgreSQL · Prisma · Mapbox · Vercel",
    desc: "A curated restaurant discovery platform focused on local neighborhoods in Tokyo. Searchable guides, saved lists, map views, editorial content, and a mobile-first experience.",
    metric: "Lighthouse 95+ · Excellent SEO foundations",
    image: projTokyoEats,
  },
  {
    n: "04",
    title: "Inkwell AI",
    year: "2026",
    tags: ["AI", "Editor", "Productivity"],
    stack: "Next.js · TypeScript · Node.js · PostgreSQL · OpenAI · tRPC",
    desc: "A focused AI writing workspace for long-form drafting. Structured document trees, inline suggestions, revision history, and a distraction-free editor tuned for deep work.",
    metric: "Sub-200ms streaming · 3× faster first drafts in user tests",
    image: projInkwell,
    latest: true,
  },
];

const process = [
  { icon: Compass, title: "Discover", desc: "Clarify goals, users, requirements, and priorities." },
  { icon: PenLine, title: "Plan", desc: "Define the product structure, technical approach, and delivery milestones." },
  { icon: Hammer, title: "Build", desc: "Develop, test, refine, and communicate progress clearly." },
  { icon: Rocket, title: "Launch & Improve", desc: "Deploy confidently, monitor results, and iterate on what matters." },
];

const reviews = [
  {
    quote:
      "Kiioni quickly understood our product goals and delivered a much more polished platform than we expected. The application is fast, easy to use, and the development process was incredibly smooth.",
    name: "Maya Tanaka",
    role: "Founder, Nami Studio",
  },
  {
    quote:
      "From frontend detail to backend reliability, Kiioni handled every part of our project with real care. Communication was clear, timelines were respected, and our team loved the result.",
    name: "Daniel Wong",
    role: "Product Lead, Northstar Labs",
  },
  {
    quote:
      "Kiioni transformed a slow, difficult-to-maintain website into a fast and flexible product. We saw a noticeable improvement in performance and user engagement shortly after launch.",
    name: "Aiko Sato",
    role: "Marketing Director, Kumo Collective",
  },
];

function Portfolio() {
  useReveal();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-clip">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 bg-grid opacity-60" aria-hidden />
      <div
        className="pointer-events-none fixed inset-x-0 top-0 h-[70vh]"
        style={{ background: "var(--gradient-radial)" }}
        aria-hidden
      />

      <Header />

      <main className="relative">
        <Hero />
        <About />
        <Stack />
        <Services />
        <Work />
        <Process />
        <Reviews />
        <Contact />
      </main>

      <Footer />

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-50 grid h-11 w-11 place-items-center rounded-full border border-border bg-surface-elevated/80 backdrop-blur transition-all duration-300 hover:border-primary hover:text-primary ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp className="h-4 w-4" />
      </button>

      <Toaster />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-5">
        <div className="flex items-center justify-between rounded-full border border-hairline bg-background/60 backdrop-blur-md pl-5 pr-2 py-2">
          <a href="#top" className="flex items-center gap-2 text-sm font-medium tracking-tight">
            <span className="grid h-6 w-6 place-items-center rounded-sm bg-primary text-primary-foreground font-mono text-[11px]">
              辰
            </span>
            <span className="hidden sm:inline">Kiioni Cersa</span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            Get in touch
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 lg:pt-44 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/50 px-3 py-1 text-xs text-muted-foreground font-mono">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-dot" />
              Available for new work · 2026
            </div>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.02]">
              Kiioni <span className="text-gradient-red">Cersa</span>
              <span className="block text-muted-foreground font-light text-3xl sm:text-4xl lg:text-5xl mt-3">
                Full-Stack Developer
              </span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
              I build fast, scalable, and thoughtful web products—from polished
              interfaces to reliable backend systems.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground font-mono">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              日本 · Based in Japan
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:brightness-110 transition-all glow-red"
              >
                View My Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-foreground/40 hover:bg-surface transition-all"
              >
                Let's Work Together
              </a>
            </div>

            <div className="mt-12 flex items-center gap-5 text-muted-foreground">
              <a href="#" aria-label="GitHub" className="hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:hello@kiionicersa.dev" aria-label="Email" className="hover:text-foreground transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <span className="h-px w-16 bg-hairline" />
              <span className="font-mono text-xs">v.2026.01</span>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative animate-fade-in">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-transparent blur-2xl" aria-hidden />
            <div className="relative rounded-2xl border border-hairline bg-surface overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-hairline">
                <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/50" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/50" />
                <span className="ml-3 font-mono text-[11px] text-muted-foreground">
                  ~/kiioni/portfolio — zsh
                </span>
              </div>
              <div className="relative aspect-square">
                <img
                  src={heroVisual}
                  alt="Abstract developer workspace visual"
                  width={1280}
                  height={1280}
                  className="absolute inset-0 h-full w-full object-cover animate-float"
                />
              </div>
              <div className="border-t border-hairline p-4 font-mono text-xs text-muted-foreground space-y-1">
                <div><span className="text-primary">$</span> whoami</div>
                <div className="pl-3 text-foreground">kiioni.cersa — full-stack developer</div>
                <div><span className="text-primary">$</span> status</div>
                <div className="pl-3">shipping something new →</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: React.ReactNode;
  desc?: string;
}) {
  return (
    <div className="reveal max-w-3xl">
      <div className="font-mono text-xs uppercase tracking-widest text-primary flex items-center gap-2">
        <span className="h-px w-8 bg-primary" />
        {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
        {title}
      </h2>
      {desc && <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{desc}</p>}
    </div>
  );
}

function About() {
  const highlights = [
    "Based in Japan",
    "Full-stack web development",
    "Product-minded engineering",
    "Performance & scalability focused",
    "Remote collaboration friendly",
  ];
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader eyebrow="About · 紹介" title="A developer who cares about the details—and the outcome." />
        <div className="mt-14 grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="reveal space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm <span className="text-foreground">Kiioni Cersa</span>, a full-stack
              developer based in Japan. I turn ideas into production-ready digital
              products, combining clean frontend experiences with scalable backend
              architecture. I enjoy solving complex problems, refining performance,
              and building software people genuinely enjoy using.
            </p>
            <p>
              My background sits at the intersection of engineering discipline and
              product taste. I've partnered with founders, product teams, and
              agencies to ship interfaces that feel effortless and systems that stay
              reliable long after launch. I care about small details—loading states,
              empty states, the exact easing of a transition—because they add up to
              how software feels.
            </p>
            <p>
              When I'm not writing code, you'll find me in the mountains outside
              Tokyo, sketching architecture diagrams over coffee, or studying how
              great products age well.
            </p>
          </div>
          <div className="reveal">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((h, i) => (
                <li
                  key={h}
                  className="flex items-start gap-3 rounded-xl border border-hairline bg-surface/60 p-4 hover:border-primary/40 hover:bg-surface transition-colors"
                >
                  <span className="mt-1 font-mono text-[10px] text-primary">
                    0{i + 1}
                  </span>
                  <span className="text-sm">{h}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl border border-hairline bg-surface/60 p-6">
              <div className="grid grid-cols-3 divide-x divide-hairline">
                {[
                  ["30+", "Projects shipped"],
                  ["6+", "Years building"],
                  ["12+", "Happy clients"],
                ].map(([n, l]) => (
                  <div key={l} className="px-4 first:pl-0 last:pr-0 text-center">
                    <div className="text-2xl font-semibold">{n}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stack() {
  const row = [...stack, ...stack];
  return (
    <section id="stack" className="relative py-24 lg:py-32 border-y border-hairline bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Stack · 技術"
          title="Tools I reach for."
          desc="I choose practical tools that make products fast, maintainable, and ready to grow."
        />
      </div>

      <div className="mt-14 relative overflow-hidden reveal">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex gap-3 animate-marquee w-max">
          {row.map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="whitespace-nowrap rounded-full border border-hairline bg-surface px-5 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors font-mono"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 mt-10 reveal">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
          {stack.map((t) => (
            <div
              key={t}
              className="rounded-lg border border-hairline bg-surface/60 px-3 py-3 text-center text-xs text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Services · 提供"
          title="How I can help."
          desc="Focused offerings tuned for teams that want a reliable, product-minded partner."
        />
        <div className="mt-14 grid md:grid-cols-2 gap-4">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="reveal group relative rounded-2xl border border-hairline bg-surface/60 p-8 hover:border-primary/40 hover:bg-surface transition-all overflow-hidden"
            >
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-lg border border-hairline bg-background text-primary">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    0{i + 1} / 04
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="relative py-24 lg:py-32 border-t border-hairline">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between gap-8 flex-wrap">
          <SectionHeader
            eyebrow="Selected Work · 作品"
            title="Recent projects."
            desc="A selection of products I've designed, engineered, or shipped end-to-end."
          />
          <a
            href="#contact"
            className="reveal inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Have a project? <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 space-y-6">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="reveal group relative rounded-3xl border border-hairline bg-surface/60 overflow-hidden hover:border-primary/40 transition-all"
            >
              <div className={`grid lg:grid-cols-2 gap-0 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden bg-background">
                  <img
                    src={p.image}
                    alt={`${p.title} project preview`}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {p.latest && (
                    <span className="absolute top-4 left-4 rounded-full bg-primary text-primary-foreground px-3 py-1 text-[10px] font-mono uppercase tracking-widest">
                      Latest
                    </span>
                  )}
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
                    <span className="text-primary">{p.n}</span>
                    <span className="h-px w-8 bg-hairline" />
                    <span>{p.year}</span>
                  </div>
                  <h3 className="mt-4 text-3xl lg:text-4xl font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{p.desc}</p>
                  <div className="mt-6 rounded-xl border border-hairline bg-background/60 p-4">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                      Outcome
                    </div>
                    <div className="mt-1 text-sm text-foreground">{p.metric}</div>
                  </div>
                  <div className="mt-5 text-xs font-mono text-muted-foreground">{p.stack}</div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-hairline px-3 py-1 text-[11px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <button className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-foreground/90 transition-colors">
                      Live Demo <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>
                    <button className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm hover:bg-surface transition-colors">
                      Case Study
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="relative py-24 lg:py-32 bg-surface/30 border-y border-hairline">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader eyebrow="Process · 工程" title="A calm, considered way of building." />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {process.map((s, i) => (
            <div
              key={s.title}
              className="reveal relative rounded-2xl border border-hairline bg-background p-6 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                  <s.icon className="h-4.5 w-4.5" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader eyebrow="Client Reviews · 声" title="Words from people I've worked with." />
        <div className="mt-14 grid md:grid-cols-3 gap-4">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="reveal rounded-2xl border border-hairline bg-surface/60 p-8 flex flex-col hover:border-primary/40 transition-colors"
            >
              <Quote className="h-6 w-6 text-primary" />
              <blockquote className="mt-6 text-foreground/90 leading-relaxed flex-1">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-hairline">
                <div className="text-sm font-medium">{r.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{r.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [loading, setLoading] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent — I'll get back to you within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 border-t border-hairline">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20">
          <div className="reveal">
            <div className="font-mono text-xs uppercase tracking-widest text-primary flex items-center gap-2">
              <span className="h-px w-8 bg-primary" />
              Contact · 連絡
            </div>
            <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.05]">
              Have a product idea?{" "}
              <span className="text-gradient-red">Let's build it well.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Whether you need a new web application, a frontend partner, or help
              improving an existing product, I'd love to hear about it.
            </p>

            <dl className="mt-10 space-y-4">
              <div className="flex items-center gap-4">
                <dt className="grid h-10 w-10 place-items-center rounded-lg border border-hairline bg-surface">
                  <Mail className="h-4 w-4 text-primary" />
                </dt>
                <dd>
                  <div className="text-xs text-muted-foreground">Email</div>
                  <a href="mailto:hello@kiionicersa.dev" className="text-sm hover:text-primary">
                    hello@kiionicersa.dev
                  </a>
                </dd>
              </div>
              <div className="flex items-center gap-4">
                <dt className="grid h-10 w-10 place-items-center rounded-lg border border-hairline bg-surface">
                  <MapPin className="h-4 w-4 text-primary" />
                </dt>
                <dd>
                  <div className="text-xs text-muted-foreground">Location</div>
                  <div className="text-sm">Japan · Remote-friendly</div>
                </dd>
              </div>
            </dl>

            <div className="mt-10 flex items-center gap-4">
              <a href="#" aria-label="GitHub" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="reveal rounded-2xl border border-hairline bg-surface/60 p-6 lg:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name">
                <Input required name="name" placeholder="Your name" className="bg-background border-hairline h-11" />
              </Field>
              <Field label="Email">
                <Input required type="email" name="email" placeholder="you@company.com" className="bg-background border-hairline h-11" />
              </Field>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Project Type">
                <select
                  name="type"
                  required
                  defaultValue=""
                  className="w-full h-11 rounded-md bg-background border border-hairline px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="" disabled>Select…</option>
                  <option>Full-Stack Web App</option>
                  <option>Frontend</option>
                  <option>Backend / API</option>
                  <option>Performance Audit</option>
                  <option>Other</option>
                </select>
              </Field>
              <Field label="Budget Range">
                <select
                  name="budget"
                  required
                  defaultValue=""
                  className="w-full h-11 rounded-md bg-background border border-hairline px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="" disabled>Select…</option>
                  <option>&lt; $5k</option>
                  <option>$5k – $15k</option>
                  <option>$15k – $40k</option>
                  <option>$40k+</option>
                </select>
              </Field>
            </div>
            <Field label="Message">
              <Textarea
                required
                name="message"
                rows={5}
                placeholder="Tell me about your project, timeline, and goals…"
                className="bg-background border-hairline resize-none"
              />
            </Field>
            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 rounded-full bg-primary hover:brightness-110 text-primary-foreground font-medium text-sm glow-red"
            >
              {loading ? "Sending…" : "Start a Conversation"}
              {!loading && <ArrowRight className="h-4 w-4 ml-1" />}
            </Button>
            <p className="text-[11px] text-muted-foreground text-center">
              I usually reply within 24 hours (JST).
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-mono uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-hairline bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span className="grid h-6 w-6 place-items-center rounded-sm bg-primary text-primary-foreground font-mono text-[11px]">
            辰
          </span>
          <span>Kiioni Cersa © 2026</span>
          <span className="hidden sm:inline text-hairline">·</span>
          <span className="hidden sm:inline">Built with Next.js and care.</span>
        </div>
        <div className="flex items-center gap-5 text-muted-foreground">
          <a href="#" aria-label="GitHub" className="hover:text-foreground transition-colors">
            <Github className="h-4 w-4" />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-foreground transition-colors">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="mailto:hello@kiionicersa.dev" aria-label="Email" className="hover:text-foreground transition-colors">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
