import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, ArrowUpRight, Award, BookOpen, Code2, Trophy, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kiran Sree B — Software Engineer & Full-Stack Developer" },
      { name: "description", content: "Portfolio of Kiran Sree B: full-stack development, secure REST APIs, AWS/Docker cloud infrastructure and database optimization." },
      { property: "og:title", content: "Kiran Sree B — Software Engineer & Full-Stack Developer" },
      { property: "og:description", content: "Full-stack developer building secure APIs, data pipelines and cloud infrastructure." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const LINKEDIN = "https://linkedin.com/in/kiran-sree-b-981514257";
const EMAIL = "kiransreee0001@gmail.com";
const PHONE = "+91-8667466725";

const nav = [
  ["About", "about"], ["Skills", "skills"], ["Experience", "experience"],
  ["Projects", "projects"], ["Achievements", "achievements"], ["Contact", "contact"],
];

const skills = [
  { title: "Languages", items: ["Python", "Java", "C/C++", "R", "SQL", "JavaScript", "TypeScript", "HTML5", "CSS3", "Bash", "Tcl"] },
  { title: "Backend & Databases", items: ["Spring Boot", "Node.js", "RESTful APIs", "Microservices", "PostgreSQL", "MySQL", "MongoDB", "SQLite"] },
  { title: "DevOps & Cloud", items: ["AWS", "Docker", "CI/CD Pipelines", "Linux/Unix", "Git/GitHub", "IBM LSF"] },
  { title: "Analytics & QA", items: ["Power BI", "ThoughtSpot", "Data Modeling", "Unit Testing", "Integration Testing"] },
];

const experience = [
  {
    role: "Full Stack Developer Intern", company: "Virtual Tech Services", date: "Jun 2025 – Aug 2025", place: "Chennai, India",
    points: ["Engineered secure Node.js and Java RESTful APIs.", "Built automated data pipelines that increased processing speed by 25%.", "Presented analytics dashboards to stakeholders."],
  },
  {
    role: "Systems & Infrastructure Intern", company: "Revamp Academy", date: "Mar 2025 – Apr 2025", place: "Chennai, India",
    points: ["Deployed full-stack application instances on Linux, AWS and Docker.", "Administered PostgreSQL and MongoDB databases.", "Configured CI/CD automation for release workflows."],
  },
];

const projects = [
  {
    title: "Enterprise Workflow Engine & Automated Data Platform", metric: "−20% batch runtime",
    desc: "Java/Python REST APIs with multi-tiered components containerized on AWS via Docker, plus PostgreSQL index optimization.",
    stack: ["Java", "Python", "AWS", "Docker", "PostgreSQL"],
  },
  {
    title: "High-Throughput Developer Tooling & Web System", metric: "Full regression coverage",
    desc: "Modular web system that parses and displays statistical metrics, backed by comprehensive Python unit and regression test suites.",
    stack: ["Python", "JavaScript", "Unit Testing", "Regression Testing"],
  },
];

const achievements = [
  { icon: BookOpen, title: "IEEE Research Publication", desc: "Published research paper with IEEE." },
  { icon: Award, title: "Approved Patent", desc: "Co-inventor on an approved patent." },
  { icon: Trophy, title: "Paper Presentation Wins", desc: "Winner at technical paper presentation events." },
  { icon: Code2, title: "LeetCode 200+ Badges", desc: "Competitive programming milestones." },
  { icon: GraduationCap, title: "Certifications", desc: "Accenture, NPTEL, Cisco and IIT." },
];

function Section({ id, label, title, children }: { id: string; label: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 py-20">
      <p className="font-mono text-sm text-primary">{label}</p>
      <h2 className="mt-2 text-3xl font-semibold md:text-4xl">{title}</h2>
      <div className="mt-10">{children}</div>
    </section>
  );
}

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[700px] bg-glow" />
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-lg font-semibold">Kiran<span className="text-gradient">.</span></a>
          <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
            {nav.map(([l, id]) => <a key={id} href={`#${id}`} className="transition-colors hover:text-foreground">{l}</a>)}
          </nav>
        </div>
      </header>

      <main id="top" className="relative mx-auto max-w-6xl px-6">
        <section className="flex min-h-[80vh] flex-col justify-center py-20">
          <p className="font-mono text-sm text-primary">Hi, I'm</p>
          <h1 className="mt-3 text-5xl font-bold tracking-tight md:text-7xl">Kiran Sree B</h1>
          <p className="mt-4 text-2xl font-medium text-gradient md:text-3xl">Software Engineer & Full-Stack Developer</p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            I build full-stack web applications, secure REST APIs and automated data pipelines — deployed on AWS and Docker, backed by well-tuned databases.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90">LinkedIn <ArrowUpRight className="h-4 w-4" /></a>
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 font-medium transition-colors hover:border-primary"><Mail className="h-4 w-4" /> Email</a>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 font-medium transition-colors hover:border-primary"><Phone className="h-4 w-4" /> Call</a>
          </div>
        </section>

        <Section id="about" label="01 / About" title="Engineering meets business systems">
          <div className="grid gap-6 md:grid-cols-2">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Computer Science and Business Systems graduate specializing in full-stack development, cloud infrastructure and automated data pipelines. I focus on bridging solid software engineering with scalable business systems — secure APIs, reliable deployments and fast databases.
            </p>
            <div className="card-surface p-6">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">B.Tech, Computer Science and Business Systems</h3>
              <p className="mt-1 text-muted-foreground">Sri Sairam Engineering College</p>
              <div className="mt-4 flex gap-6 font-mono text-sm">
                <span>June 2026</span><span className="text-primary">CGPA 8.6 / 10</span>
              </div>
            </div>
          </div>
        </Section>

        <Section id="skills" label="02 / Skills" title="Toolkit">
          <div className="grid gap-5 sm:grid-cols-2">
            {skills.map((g) => (
              <div key={g.title} className="card-surface p-6">
                <h3 className="font-semibold">{g.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((i) => <span key={i} className="rounded-md bg-secondary px-3 py-1 text-sm text-secondary-foreground">{i}</span>)}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" label="03 / Experience" title="Where I've worked">
          <div className="space-y-5">
            {experience.map((e) => (
              <div key={e.company} className="card-surface p-6 md:p-8">
                <div className="flex flex-col justify-between gap-2 md:flex-row md:items-baseline">
                  <h3 className="text-xl font-semibold">{e.role} <span className="text-primary">@ {e.company}</span></h3>
                  <span className="font-mono text-sm text-muted-foreground">{e.date} · {e.place}</span>
                </div>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  {e.points.map((p) => <li key={p} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" label="04 / Projects" title="Selected work">
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((p) => (
              <div key={p.title} className="card-surface flex flex-col p-6 md:p-8">
                <span className="w-fit rounded-full bg-brand px-3 py-1 font-mono text-xs text-primary-foreground">{p.metric}</span>
                <h3 className="mt-5 text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 flex-1 text-muted-foreground">{p.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2 font-mono text-xs text-primary">
                  {p.stack.map((s) => <span key={s}>#{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="achievements" label="05 / Recognition" title="Certifications & Achievements">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card-surface p-6">
                <Icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" label="06 / Contact" title="Let's build something">
          <div className="grid gap-5 md:grid-cols-4">
            <a href={`mailto:${EMAIL}`} className="card-surface p-6 md:col-span-2"><Mail className="h-5 w-5 text-primary" /><p className="mt-3 break-all font-medium">{EMAIL}</p></a>
            <a href={`tel:${PHONE}`} className="card-surface p-6"><Phone className="h-5 w-5 text-primary" /><p className="mt-3 font-medium">{PHONE}</p></a>
            <div className="card-surface p-6"><MapPin className="h-5 w-5 text-primary" /><p className="mt-3 font-medium">Chennai, India</p></div>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="card-surface flex items-center justify-between p-6 md:col-span-4"><span className="font-medium">Connect on LinkedIn</span><ArrowUpRight className="h-5 w-5 text-primary" /></a>
          </div>
        </Section>
      </main>
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">© 2026 Kiran Sree B</footer>
    </div>
  );
}
