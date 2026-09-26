import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Code2,
  Database,
  Layers3,
  Menu,
  MoveRight,
  X,
} from "lucide-react";
import { useState } from "react";

// Navigation links shown in the desktop and mobile navbar.
const nav = ["Services", "Work", "Process", "About"];

// Service information displayed in the capabilities section.
const services = [
  [
    "01",
    "Custom Web Development",
    "Tailored digital platforms engineered around the way your business actually works.",
  ],
  [
    "02",
    "Frontend Development",
    "Expressive, accessible interfaces that feel as considered as your brand.",
  ],
  [
    "03",
    "Full-Stack Systems",
    "Scalable architecture from the first interaction to the final database query.",
  ],
  [
    "04",
    "E-Commerce Development",
    "High-converting storefronts built for growth, not just launch day.",
  ],
  [
    "05",
    "UI/UX Implementation",
    "Design systems translated precisely into purposeful product experiences.",
  ],
  [
    "06",
    "Website Optimization",
    "Sharper performance, stronger SEO, and experiences that load with intent.",
  ],
];

// Portfolio projects displayed in the selected work section.
const projects = [
  {
    name: "Morrow Goods",
    type: "E-commerce platform",
    tags: ["Next.js", "Shopify"],
    result: "+42% conversion rate",
    theme: "morrow",
  },
  {
    name: "Kinetic",
    type: "SaaS dashboard",
    tags: ["React", "Node.js"],
    result: "3x faster reporting",
    theme: "kinetic",
  },
  {
    name: "Aera Capital",
    type: "Corporate website",
    tags: ["TypeScript", "CMS"],
    result: "Global launch in 6 weeks",
    theme: "aera",
  },
];

// Steps displayed in the process section.
const process = [
  [
    "01",
    "Discover",
    "Business context, audience, technical constraints, and a clear definition of what success means.",
  ],
  [
    "02",
    "Design",
    "A considered experience system that gives every screen, state, and interaction a purpose.",
  ],
  [
    "03",
    "Develop",
    "Precision engineering with fast feedback loops, clear milestones, and room for the good ideas.",
  ],
  [
    "04",
    "Launch",
    "A confident release, performance validation, and a stable foundation for what comes next.",
  ],
];

// Shared animation settings for elements that reveal on scroll.
const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5 },
};

// Reusable call-to-action link button.
function Button({ children, light = false, href = "#contact" }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 border px-5 py-3 text-sm font-bold transition-all duration-300 ${light ? "border-[#b9a6ff] bg-[#b9a6ff] text-[#11112a] hover:border-white hover:bg-white" : "border-white/20 text-white hover:border-[#a893ff] hover:bg-white/5"}`}
    >
      {children}
      <ArrowUpRight size={16} />
    </a>
  );
}

// Decorative product preview displayed in the hero section.
function HeroVisual() {
  return (
    <div className="hero-product hero-canvas relative min-h-[450px] overflow-hidden border border-white/15 bg-[#0d1125] p-4 shadow-[0_30px_80px_rgba(31,22,100,.35)]">
      <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#8066ef]/25 blur-[90px]" />
      <div className="relative flex items-center justify-between font-mono text-[8px] tracking-[.15em] text-white/40">
        <span>NORTHSTAR / DIGITAL CANVAS</span>
        <span className="text-[#aee8ff]">● LIVE</span>
      </div>
      <div className="relative mx-auto mt-10 w-[78%] border border-white/15 bg-[#151b39] p-2 shadow-[0_24px_45px_rgba(0,0,0,.35)]">
        <div className="flex items-center gap-1.5 border-b border-white/10 pb-2">
          {[1, 2, 3].map((i) => (
            <span key={i} className="h-1.5 w-1.5 rounded-full bg-white/25" />
          ))}
          <span className="ml-3 h-3 flex-1 rounded-sm bg-white/[.055]" />
        </div>
        <div className="relative mt-2 h-56 overflow-hidden bg-[#d9e2ff] p-4 text-[#1a2150]">
          <div className="flex justify-between font-mono text-[7px] tracking-[.12em]">
            <span>VENTURE / 01</span>
            <span>MENU</span>
          </div>
          <p className="mt-7 text-2xl font-bold leading-[.9] sm:text-3xl">
            Built for the
            <br />
            <i className="font-medium">next move.</i>
          </p>
          <div className="absolute bottom-0 right-0 h-[65%] w-[43%] bg-[#5345a4]">
            <div className="absolute right-[18%] top-[18%] h-[68%] w-[45%] bg-[#151b4a]" />
            <div className="absolute bottom-[22%] left-[-28%] h-7 w-[132%] -rotate-[28deg] bg-[#a993ff]" />
          </div>
          <div className="absolute bottom-4 left-4 font-mono text-[7px] tracking-[.12em]">
            CLARITY AT SCALE
          </div>
        </div>
      </div>
      <div className="absolute left-[3%] top-[30%] border border-[#a993ff]/40 bg-[#121734]/90 px-3 py-2 font-mono text-[8px] text-[#d4cbff] shadow-lg backdrop-blur">
        01 / STRATEGY
      </div>
      <div className="absolute right-[2%] top-[44%] border border-[#8edbff]/35 bg-[#101b3b]/90 px-3 py-2 font-mono text-[8px] text-[#aee8ff] shadow-lg backdrop-blur">
        02 / DESIGN
      </div>
      <div className="absolute bottom-[10%] left-[11%] border border-[#c9bfff]/30 bg-[#171638]/90 px-3 py-2 font-mono text-[8px] text-white/65 shadow-lg backdrop-blur">
        03 / BUILD
      </div>
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 500 450"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M65 160C135 145 155 128 190 112"
          stroke="rgba(181,162,255,.65)"
          strokeWidth="1"
          strokeDasharray="4 5"
        />
        <path
          d="M420 215C395 210 372 194 352 177"
          stroke="rgba(145,219,255,.62)"
          strokeWidth="1"
          strokeDasharray="4 5"
        />
        <path
          d="M125 375C168 352 185 330 208 300"
          stroke="rgba(193,178,255,.55)"
          strokeWidth="1"
          strokeDasharray="4 5"
        />
      </svg>
      <div className="absolute bottom-5 right-5 flex items-center gap-2 font-mono text-[8px] text-white/45">
        <span className="h-1.5 w-1.5 rounded-full bg-[#a993ff]" />
        FROM IDEA TO IMPACT
      </div>
    </div>
  );
}

// Project-specific visual preview used by each portfolio card.
function ProjectVisual({ theme }) {
  if (theme === "morrow")
    return (
      <div className="relative h-full overflow-hidden bg-[#e8e6dc] p-6 text-[#25262c]">
        <div className="flex justify-between font-mono text-[8px] tracking-[.15em]">
          <span>MORROW / OBJECTS</span>
          <span>SHOP</span>
        </div>
        <div className="absolute left-7 top-[37%] text-3xl leading-[.9] sm:text-5xl">
          Designed
          <br />
          for <i>living.</i>
        </div>
        <div className="absolute bottom-[-16%] right-[11%] h-[89%] w-[33%] rotate-[10deg] rounded-t-[100px] bg-[#b58f68] shadow-2xl">
          <div className="absolute left-[15%] top-[19%] h-[55%] w-[70%] rounded-[50%] border-[13px] border-[#e1be96] bg-[#896147]" />
        </div>
        <div className="absolute bottom-6 left-7 font-mono text-[8px] tracking-[.12em]">
          FORM / FUNCTION / FOREVER
        </div>
      </div>
    );
  if (theme === "kinetic")
    return (
      <div className="relative h-full overflow-hidden bg-[#11193b] p-5 text-white">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#805cff]/20 blur-3xl" />
        <div className="relative flex justify-between border-b border-white/10 pb-4">
          <span className="text-sm font-bold">
            kinetic<span className="text-[#8edbff]">.</span>
          </span>
          <span className="rounded-full border border-[#8edbff]/30 px-2 py-1 font-mono text-[7px] text-[#8edbff]">
            LIVE DATA
          </span>
        </div>
        <div className="relative mt-6">
          <p className="font-mono text-[8px] text-white/40">
            REVENUE INTELLIGENCE
          </p>
          <p className="mt-1 text-3xl font-bold">$284,920</p>
          <div className="mt-6 flex h-24 items-end gap-1">
            {[24, 44, 35, 68, 48, 79, 63, 92, 71, 84, 65, 100].map((h, i) => (
              <span
                key={i}
                className="flex-1 bg-gradient-to-t from-[#7057ee] to-[#8edbff]"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {[
              ["GROWTH", "+18.4%"],
              ["CUSTOMERS", "12,482"],
            ].map(([l, v]) => (
              <div
                key={l}
                className="border border-white/10 bg-white/[.035] p-3"
              >
                <span className="font-mono text-[7px] text-white/40">{l}</span>
                <b className="mt-1 block text-lg">{v}</b>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  return (
    <div className="relative h-full overflow-hidden bg-[#dce2f1] p-6 text-[#182044]">
      <div className="flex justify-between font-mono text-[8px] tracking-[.15em]">
        <span>AERA CAPITAL</span>
        <span>2025</span>
      </div>
      <p className="relative z-10 mt-10 text-3xl font-medium leading-[.9] sm:text-5xl">
        Confidence,
        <br />
        <i>compounded.</i>
      </p>
      <div className="absolute bottom-0 right-0 h-[65%] w-[55%] bg-[#5262a1]">
        <div className="absolute right-[15%] top-[12%] h-[78%] w-[48%] bg-[#202b5d]" />
        <div className="absolute bottom-[22%] left-[-30%] h-12 w-[130%] -rotate-[27deg] bg-[#b9a6ff]" />
      </div>
      <div className="absolute bottom-6 left-7 font-mono text-[8px] tracking-[.12em]">
        INVEST WITH CLARITY
      </div>
    </div>
  );
}

function App() {
  const [open, setOpen] = useState(false);
  return (
    <main className="site-shell overflow-hidden text-[#f5f5f7] selection:bg-[#b9a6ff] selection:text-[#13132a]">
      <div className="pointer-events-none fixed inset-0 z-50 noise opacity-[.02]" />

      {/* Fixed navbar with desktop links and a mobile menu toggle. */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#0b0e1c]/75 backdrop-blur-lg md:backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#top" className="text-lg font-extrabold">
            northstar<span className="text-[#b9a6ff]">.</span>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {nav.map((n) => (
              <a
                key={n}
                href={`#${n.toLowerCase()}`}
                className="text-xs font-semibold text-white/60 transition hover:text-white"
              >
                {n}
              </a>
            ))}
          </nav>
          <div className="hidden md:block ">
            <Button light>Start a Project</Button>
          </div>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="text-white md:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="border-t border-white/10 bg-transparent px-5 py-6 md:hidden">
            {nav.map((n) => (
              <a
                key={n}
                onClick={() => setOpen(false)}
                href={`#${n.toLowerCase()}`}
                className="block py-3 text-lg "
              >
                {n}
              </a>
            ))}
            <Button light>Start a Project</Button>
          </div>
        )}
      </header>

      {/* Hero section with the main message, calls to action, and visual preview. */}
      <section
        id="top"
        className="hero-grid relative min-h-[820px] border-b border-white/10 pt-32"
      >
        <div className="hero-aurora absolute -right-[10%] top-[9%] h-[520px] w-[520px] rounded-full" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-7 inline-flex items-center gap-2 border border-[#b9a6ff]/30 bg-[#a893ff]/[.06] px-3 py-1.5 font-mono text-[10px] tracking-[.15em] text-[#c9bdff]">
              <span className="h-1.5 w-1.5 bg-[#b9a6ff]" />
              WEB DEVELOPMENT AGENCY
            </div>
            <h1 className="max-w-3xl text-balance text-[clamp(3rem,6vw,6.6rem)] font-extrabold leading-[.96] tracking-tight">
              We build digital experiences that move businesses{" "}
              <i className="font-medium text-[#b9a6ff]">forward.</i>
            </h1>
            <p className="mt-7 max-w-lg text-base leading-7 text-white/62">
              Northstar is a development partner for ambitious teams who care
              about how their digital presence performs, feels, and grows.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button light>Start a Project</Button>
              <Button href="#work">View Our Work</Button>
            </div>
            <p className="mt-9 font-mono text-[10px] tracking-wide text-white/40">
              TRUSTED BY STARTUPS, BUSINESSES & GROWING BRANDS.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <HeroVisual />
            <div className="absolute -bottom-5 -left-4 border border-[#9f91f2]/30 bg-[#111534]/90 p-4 font-mono text-[10px] text-white/60 shadow-xl backdrop-blur">
              <span className="text-[#a893ff]">98%</span> CLIENT SATISFACTION
            </div>
          </motion.div>
        </div>
        <div className="mx-auto flex max-w-7xl items-center justify-between border-t border-white/10 px-5 py-5 font-mono text-[10px] text-white/40 lg:px-8">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDownRight size={16} />
          <span>01 / 07</span>
        </div>
      </section>

      {/* Services section listing the studio's main capabilities. */}
      <section id="services" className="mx-auto max-w-7xl px-5 py-28 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="font-mono text-[10px] tracking-[.16em] text-[#b9a6ff]">
              01 / CAPABILITIES
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight">
              The technical depth to make good ideas real.
            </h2>
          </div>
          <div className="grid border-t border-white/15">
            {services.map(([num, title, copy]) => (
              <a
                href="#contact"
                key={num}
                className="group grid grid-cols-[32px_1fr_auto] gap-4 border-b border-white/15 py-5 transition hover:bg-[#6354c3]/[.08] sm:grid-cols-[48px_1fr_120px_auto] sm:px-3"
              >
                <span className="font-mono text-[10px] text-[#b9a6ff]">
                  {num}
                </span>
                <div>
                  <h3 className="text-base font-bold">{title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-6 text-white/50">
                    {copy}
                  </p>
                </div>
                <span className="hidden font-mono text-[9px] text-white/35 sm:block">
                  EXPLORE
                </span>
                <ArrowUpRight
                  className="mt-1 text-white/40 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#b9a6ff]"
                  size={17}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Selected work section showing portfolio projects and results. */}
      <section id="work" className="work-band border-y border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-28 lg:px-8">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="font-mono text-[10px] tracking-[.16em] text-[#b9a6ff]">
                02 / SELECTED WORK
              </p>
              <h2 className="mt-5 text-4xl font-bold">
                Built to be remembered.
              </h2>
            </div>
            <a
              className="hidden items-center gap-2 text-sm font-bold text-white/70 hover:text-[#b9a6ff] sm:flex"
              href="#contact"
            >
              All case studies <MoveRight size={16} />
            </a>
          </div>
          <div className="grid gap-x-7 gap-y-12 lg:grid-cols-12">
            {projects.map((p, i) => (
              <motion.article
                {...fade}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                key={p.name}
                className={`${i === 0 ? "lg:col-span-7" : i === 1 ? "lg:col-span-5" : "lg:col-span-8 lg:col-start-3"} group`}
              >
                <div
                  className={`${i === 2 ? "h-[310px]" : "h-[370px]"} overflow-hidden border border-white/10 bg-[#11162a] p-2 transition duration-500 group-hover:-translate-y-1 group-hover:border-[#a893ff]/70 group-hover:shadow-[0_20px_60px_rgba(44,29,122,.2)]`}
                >
                  <ProjectVisual theme={p.theme} />
                </div>
                <div className="mt-4 grid grid-cols-[auto_1fr] gap-x-4">
                  <span className="font-mono text-[10px] text-[#a893ff]">
                    0{i + 1}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-lg font-bold">{p.name}</p>
                        <p className="mt-1 text-sm text-white/45">{p.type}</p>
                      </div>
                      <div className="flex gap-1.5">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="border border-white/15 bg-white/[.025] px-2 py-1 font-mono text-[9px] text-white/50"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-sm">
                      <span className="text-[#a893ff]">{p.result}</span>
                      <a
                        href="#contact"
                        className="flex items-center gap-1 font-semibold text-white/60 transition hover:text-white"
                      >
                        View case study <ChevronRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Technology section showing the primary stack and supporting tools. */}
      <section className="mx-auto max-w-7xl px-5 py-28 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="font-mono text-[10px] tracking-[.16em] text-[#b9a6ff]">
              03 / TECHNOLOGY
            </p>
            <h2 className="mt-4 text-3xl font-bold">
              A modern stack, without the noise.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/45">
            We choose dependable tools that keep the experience fast today and
            easier to evolve tomorrow.
          </p>
        </div>
        <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-4">
          {[
            ["React", "UI systems", Layers3],
            ["Next.js", "Web platforms", Code2],
            ["Node.js", "Backend services", Database],
            ["TypeScript", "Reliable scale", Check],
          ].map(([n, d, Icon], i) => (
            <div
              key={n}
              className="group relative min-h-52 overflow-hidden bg-[#0c1022] p-6 transition duration-500 hover:bg-[#151a39]"
            >
              <span className="font-mono text-[9px] text-[#a893ff]">
                0{i + 1}
              </span>
              <Icon
                className="absolute right-5 top-5 text-white/25 transition duration-500 group-hover:scale-110 group-hover:text-[#a893ff]"
                size={21}
              />
              <div className="absolute bottom-6">
                <p className="text-xl font-bold">{n}</p>
                <p className="mt-2 text-sm text-white/45">{d}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-px grid grid-cols-2 overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
          {[
            "Express",
            "MongoDB",
            "MySQL",
            "PostgreSQL",
            "Tailwind CSS",
            ".NET",
          ].map((t, i) => (
            <div
              key={t}
              className="flex h-20 items-center justify-between bg-[#0c1022] px-5 transition hover:bg-[#151a39]"
            >
              <span className="text-sm font-semibold">{t}</span>
              <span className="font-mono text-[9px] text-white/30">
                0{i + 5}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Process section explaining how projects move from discovery to launch. */}
      <section
        id="process"
        className="process-band relative overflow-hidden border-y border-white/10"
      >
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#5542a1]/25 blur-[100px]" />
        <div className="relative mx-auto max-w-7xl px-5 py-28 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-mono text-[10px] tracking-[.16em] text-[#c5baff]">
              04 / OUR PROCESS
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight">
              Clear steps. Less friction. Better work.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-6 text-white/55">
              A structured process leaves more room for the thinking that moves
              the project forward.
            </p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-4">
            {process.map(([n, t, c], i) => (
              <motion.div
                {...fade}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                key={n}
                className="group relative border border-white/12 bg-[#111633]/70 p-6 transition hover:-translate-y-1 hover:border-[#a893ff]/60 hover:bg-[#151b40]"
              >
                <span className="font-mono text-[10px] text-[#b9a6ff]">
                  {n}
                </span>
                <div className="my-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/[.035] text-sm font-bold text-[#c8bdff]">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold">{t}</h3>
                <p className="mt-3 text-sm leading-6 text-white/50">{c}</p>
                {i < 3 && (
                  <span className="absolute -right-[18px] top-[50px] z-10 hidden h-px w-9 bg-[#a893ff]/50 md:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About section explaining the studio's working style and strengths. */}
      <section id="about" className="mx-auto max-w-7xl px-5 py-28 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="font-mono text-[10px] tracking-[.16em] text-[#b9a6ff]">
              05 / WHY NORTHSTAR
            </p>
            <h2 className="mt-5 max-w-xl text-4xl font-bold leading-tight text-gray-100">
              Development that respects the details and the bigger picture.
            </h2>
            <p className="mt-7 max-w-lg text-base leading-7 text-white">
              We are a deliberately small, senior team. That means sharper
              thinking, fewer handoffs, and a direct line between the decision
              and the craft.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 border-b border-[#b9a6ff] pb-2 text-sm font-bold text-white"
            >
              Meet the studio <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="border-l border-white/15">
            {[
              [
                "Clean, scalable code",
                "Foundations that make the next feature easier, not harder.",
              ],
              [
                "High-performance builds",
                "Fast loading, responsive interactions, and a lighter footprint.",
              ],
              [
                "Built for every screen",
                "Thoughtful details from the widest desktop to the smallest device.",
              ],
              [
                "Maintainable by design",
                "Clear patterns and documentation your team can pick up with ease.",
              ],
            ].map(([t, c]) => (
              <div
                key={t}
                className="border-b border-white/15 px-5 py-5 sm:px-8"
              >
                <div className="flex gap-3">
                  <Check size={16} className="mt-1 text-[#b9a6ff]" />
                  <div>
                    <h3 className="font-bold text-gray-100">{t}</h3>
                    <p className="mt-1 text-sm leading-6 text-white">{c}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics strip highlighting the studio's experience and results. */}
      <section className="border-y border-white/10 py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 px-5 sm:grid-cols-4 lg:px-8">
          {[
            ["50+", "Projects delivered"],
            ["30+", "Happy clients"],
            ["98%", "Client satisfaction"],
            ["3+", "Years experience"],
          ].map(([n, l]) => (
            <div key={l} className="p-5 first:pl-0 sm:p-8">
              <strong className="text-3xl font-bold text-[#b9a6ff] sm:text-4xl">
                {n}
              </strong>
              <p className="mt-2 text-xs text-white/45">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact section with the final project call to action. */}
      <section
        id="contact"
        className="contact-band relative overflow-hidden border-y border-[#a893ff]/25">
        <div className="absolute inset-0 noise opacity-[.035]" />
        <div className="absolute -right-20 -top-24 h-96 w-96 rounded-full bg-[#6f58dc]/45 blur-[100px]" />
        <div className="relative mx-auto max-w-7xl px-5 py-28 lg:px-8">
          <p className="font-mono text-[10px] tracking-[.16em] text-[#d1c8ff]">
            07 / LET'S TALK
          </p>
          <div className="mt-7 grid gap-10 lg:grid-cols-[1fr_auto]">
            <h2 className="max-w-4xl text-balance text-5xl font-extrabold leading-[.94] sm:text-7xl">
              Have an idea?{" "}
              <i className="font-medium text-[#d8d2ff]">Let's build it.</i>
            </h2>
            <div className="max-w-sm self-end">
              <p className="mb-6 text-sm leading-6 text-white/70">
                Tell us about your project and we'll turn your idea into a fast,
                modern and scalable digital experience.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button light>Start a Project</Button>
                <Button href="mailto:hello@northstar.studio">Contact Us</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer containing navigation, services, contact details, and legal links. */}
      <footer className="bg-[#080a15]">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
          <div className="grid gap-12 border-b border-white/15 pb-12 md:grid-cols-[1.3fr_.7fr_.7fr_.9fr]">
            <div>
              <a href="#top" className="text-2xl font-extrabold">
                northstar<span className="text-[#b9a6ff]">.</span>
              </a>
              <p className="mt-4 max-w-xs text-sm leading-6 text-white/45">
                Independent web development studio for ambitious businesses.
              </p>
            </div>
            <div>
              <p className="mb-4 font-mono text-[9px] tracking-[.14em] text-white/35">
                NAVIGATION
              </p>
              {["Home", "Services", "Work", "Process", "About"].map((x) => (
                <a
                  className="mb-2 block text-sm text-white/60 hover:text-[#b9a6ff]"
                  href={`#${x === "Home" ? "top" : x.toLowerCase()}`}
                  key={x}
                >
                  {x}
                </a>
              ))}
            </div>
            <div>
              <p className="mb-4 font-mono text-[9px] tracking-[.14em] text-white/35">
                SERVICES
              </p>
              {[
                "Web development",
                "E-commerce",
                "Product engineering",
                "Optimization",
              ].map((x) => (
                <a
                  className="mb-2 block text-sm text-white/60 hover:text-[#b9a6ff]"
                  href="#services"
                  key={x}
                >
                  {x}
                </a>
              ))}
            </div>
            <div>
              <p className="mb-4 font-mono text-[9px] tracking-[.14em] text-white/35">
                SAY HELLO
              </p>
              <a
                className="text-sm font-bold text-[#b9a6ff]"
                href="mailto:hello@northstar.studio"
              >
                hello@northstar.studio
              </a>
              <p className="mt-5 text-sm text-white/50">Karachi / Worldwide</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-4 pt-6 font-mono text-[9px] text-white/35">
            <span>© 2025 NORTHSTAR STUDIO</span>
            <div className="flex gap-5">
              <a href="#top">PRIVACY</a>
              <a href="#top">TERMS</a>
              <a href="#top">LINKEDIN</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
export default App;
