import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  CalendarCheck,
  ChartSpline,
  CircleCheck,
  Command,
  Cpu,
  DatabaseZap,
  Globe2,
  Layers3,
  LockKeyhole,
  Network,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

const osModules = [
  { name: "Website", value: "Live", icon: Globe2, detail: "Premium digital storefront" },
  { name: "Lead Engine", value: "+42%", icon: ChartSpline, detail: "Forms, funnels, and follow-up" },
  { name: "AI Assistant", value: "24/7", icon: Bot, detail: "Support and qualification" },
  { name: "Client Portal", value: "Secure", icon: LockKeyhole, detail: "Private customer access" },
  { name: "Automation", value: "Active", icon: Workflow, detail: "Less manual work" },
  { name: "Analytics", value: "Live", icon: Cpu, detail: "Clear business visibility" },
];

const signals = [
  "Your website looks outdated",
  "Leads fall through the cracks",
  "Follow-up is manual",
  "Customers ask the same questions",
  "Booking feels messy",
  "Your tools do not connect",
];

const buildItems = [
  {
    num: "01",
    title: "Premium Websites",
    text: "High-trust websites built to make your business look established, credible, and easy to contact.",
    icon: Globe2,
  },
  {
    num: "02",
    title: "AI Workforce",
    text: "AI assistants that can answer questions, qualify leads, guide customers, and support your team.",
    icon: BrainCircuit,
  },
  {
    num: "03",
    title: "Automation Infrastructure",
    text: "Connected workflows for lead capture, booking, reminders, intake, and follow-up.",
    icon: Workflow,
  },
  {
    num: "04",
    title: "Lead Generation Systems",
    text: "Campaign-ready pages and funnels designed to turn interest into real business opportunities.",
    icon: ChartSpline,
  },
  {
    num: "05",
    title: "Client Portals",
    text: "Private dashboards that help customers, teams, and owners stay connected in one place.",
    icon: LockKeyhole,
  },
];

const projects = [
  {
    name: "Golden Cares LLC",
    type: "Healthcare service platform",
    desc: "Built for trust, service clarity, and inquiry flow.",
  },
  {
    name: "Carolina Brake & Diagnostics",
    type: "Premium mobile auto service",
    desc: "Designed for credibility, local service demand, and booking intent.",
  },
  {
    name: "Kids First Learning Centers",
    type: "Education website",
    desc: "Structured for clarity, confidence, and enrollment interest.",
  },
];

const process = [
  ["Discover", "We identify your offer, customer, and the system your business actually needs."],
  ["Build", "We design the website, funnel, AI, portal, or automation around real business outcomes."],
  ["Launch", "We help you go live with a clean, mobile-ready system that looks professional."],
  ["Improve", "We keep the system ready for upgrades as your business grows."],
];

const commandMetrics = [
  ["Active Leads", "48", "+12 this week"],
  ["AI Replies", "214", "24/7 coverage"],
  ["Bookings", "18", "Auto-routed"],
  ["Automations", "09", "Running"],
];

const activityFeed = [
  "New quote request captured",
  "AI assistant qualified a lead",
  "Follow-up reminder scheduled",
  "Client portal access prepared",
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#020403] text-white">
      {/* HERO */}
      <section className="relative px-4 pb-16 pt-20 sm:px-6 sm:pt-24 md:pb-24 md:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(16,185,129,.28),transparent_30%),radial-gradient(circle_at_88%_22%,rgba(59,130,246,.2),transparent_28%),linear-gradient(to_bottom,#020403,#050b09_48%,#020403)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.055)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />
        <div className="absolute left-1/2 top-16 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-300/20 blur-3xl sm:h-96 sm:w-96" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_.98fr] lg:gap-14">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-300/20 bg-white/[0.05] px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-200 shadow-2xl shadow-emerald-400/10 backdrop-blur-xl sm:text-xs"
              >
                <Sparkles size={14} />
                Premium Digital Systems for Growing Businesses
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
                className="max-w-6xl text-4xl font-black leading-[0.92] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
              >
                Your business should feel bigger before they ever call.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16 }}
                className="mt-7 max-w-2xl text-base leading-8 text-slate-300 md:text-lg"
              >
                Techuvo builds premium websites, AI assistants, automation systems,
                lead engines, and client portals that turn your online presence
                into a connected growth system.
              </motion.p>

              <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-300 px-7 py-4 text-sm font-black text-black shadow-2xl shadow-emerald-400/20 transition hover:-translate-y-1 hover:bg-emerald-200"
                >
                  Start My Digital System <ArrowUpRight size={17} />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-black text-white backdrop-blur-xl transition hover:bg-white hover:text-black"
                >
                  See What We Build <ArrowRight size={16} />
                </Link>
              </div>

              <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
                {[
                  ["24/7", "AI ready"],
                  ["Mobile", "first design"],
                  ["Growth", "focused"],
                ].map(([big, small]) => (
                  <div key={big} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl">
                    <p className="text-xl font-black text-emerald-300 sm:text-2xl">{big}</p>
                    <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">{small}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* TECHUVO OS VISUAL */}
            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.22 }}
              className="relative"
            >
              <div className="absolute -inset-5 rounded-[3rem] bg-emerald-400/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#07110d]/90 p-3 shadow-2xl shadow-black/40 backdrop-blur-2xl sm:rounded-[2.5rem] sm:p-4">
                <div className="flex items-center justify-between border-b border-white/10 px-3 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400/80" />
                    <span className="h-3 w-3 rounded-full bg-yellow-300/80" />
                    <span className="h-3 w-3 rounded-full bg-emerald-300/80" />
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500 sm:text-xs">
                    Techuvo OS Preview
                  </p>
                </div>

                <div className="grid gap-4 p-2 pt-5 md:grid-cols-[.85fr_1.15fr]">
                  <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5">
                    <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-emerald-300/10 blur-2xl" />
                    <div className="relative">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-300 text-black">
                        <Command size={24} />
                      </div>

                      <h3 className="mt-5 text-2xl font-black tracking-tight">
                        Business Command Center
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-400">
                        One connected foundation for your website, leads,
                        customer conversations, automation, and growth.
                      </p>

                      <div className="mt-6 space-y-3">
                        {[
                          "New lead captured",
                          "AI follow-up prepared",
                          "Booking request created",
                        ].map((item) => (
                          <div key={item} className="flex items-center gap-2 rounded-2xl bg-black/30 px-3 py-3 text-xs font-bold text-slate-300">
                            <CircleCheck size={15} className="text-emerald-300" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {osModules.map(({ name, value, icon: Icon, detail }) => (
                      <div
                        key={name}
                        className="rounded-[1.4rem] border border-white/10 bg-black/30 p-4 transition hover:-translate-y-1 hover:border-emerald-300/30"
                      >
                        <div className="mb-4 flex items-start justify-between gap-2">
                          <Icon size={22} className="text-emerald-300" />
                          <span className="rounded-full bg-emerald-300/10 px-3 py-1 text-[11px] font-black text-emerald-300">
                            {value}
                          </span>
                        </div>
                        <h4 className="font-black">{name}</h4>
                        <p className="mt-2 text-xs leading-5 text-slate-500">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CURIOSITY STRIP */}
      <section className="px-4 py-8 sm:px-6">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">
          <div className="grid gap-3 md:grid-cols-3">
            {[
              ["Question", "How many leads never hear back fast enough?"],
              ["Signal", "Your website should explain, qualify, and guide."],
              ["Shift", "Stop buying pages. Start building systems."],
            ].map(([label, text]) => (
              <div key={label} className="rounded-[1.5rem] bg-black/25 p-5">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-emerald-300">{label}</p>
                <p className="mt-3 text-lg font-black leading-snug text-white">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY TECHUVO EXISTS */}
      <section className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[.92fr_1.08fr]">
          <div className="rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl sm:p-10 md:rounded-[2.75rem] md:p-12">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-emerald-300">
              Why Techuvo Exists
            </p>

            <h2 className="mt-5 text-4xl font-black leading-[0.95] tracking-[-0.055em] md:text-6xl">
              Most businesses do not have a website problem.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              They have a systems problem. Disconnected tools. Slow responses.
              Lost leads. Weak customer experiences. Techuvo exists to give
              businesses one sharper digital foundation.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["More trust", "Cleaner follow-up", "Better first impression", "Stronger conversion"].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm font-bold text-slate-300">
                  <ShieldCheck size={16} className="text-emerald-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* DASHBOARD PREVIEW REPLACES FOUNDER VIDEO */}
          <div className="relative overflow-hidden rounded-[2.25rem] border border-emerald-300/20 bg-[radial-gradient(circle_at_center,rgba(16,185,129,.22),transparent_42%),rgba(255,255,255,.04)] p-4 sm:p-5 md:rounded-[2.75rem] md:p-6">
            <div className="absolute inset-x-8 top-8 h-28 rounded-full bg-emerald-300/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/40 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-4 sm:px-5">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.28em] text-emerald-300">
                    Live System Preview
                  </p>
                  <h3 className="mt-2 text-xl font-black tracking-tight sm:text-2xl">
                    Techuvo Growth Dashboard
                  </h3>
                </div>
                <span className="hidden rounded-full bg-emerald-300 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-black sm:inline-flex">
                  Online
                </span>
              </div>

              <div className="grid gap-4 p-4 sm:p-5 lg:grid-cols-[.9fr_1.1fr]">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {commandMetrics.map(([label, value, sub]) => (
                    <div key={label} className="rounded-[1.4rem] border border-white/10 bg-white/[0.05] p-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">{label}</p>
                      <div className="mt-3 flex items-end justify-between gap-3">
                        <p className="text-3xl font-black text-white sm:text-4xl">{value}</p>
                        <p className="mb-1 text-xs font-bold text-emerald-300">{sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.05] p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">Revenue Path</p>
                      <Zap size={18} className="text-emerald-300" />
                    </div>
                    <div className="mt-5 space-y-3">
                      {[
                        ["Website trust", "85%"],
                        ["Lead response", "72%"],
                        ["Booking flow", "64%"],
                      ].map(([name, width]) => (
                        <div key={name}>
                          <div className="mb-2 flex justify-between text-xs font-bold text-slate-400">
                            <span>{name}</span>
                            <span>{width}</span>
                          </div>
                          <div className="h-2 overflow-hidden rounded-full bg-white/10">
                            <div className="h-full rounded-full bg-emerald-300" style={{ width }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.05] p-4">
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">Recent System Activity</p>
                    <div className="mt-4 space-y-3">
                      {activityFeed.map((item) => (
                        <div key={item} className="flex items-center gap-3 rounded-2xl bg-black/30 px-3 py-3 text-xs font-bold text-slate-300">
                          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-300 shadow-lg shadow-emerald-300/40" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-emerald-300">The Hidden Cost</p>
              <h2 className="mt-4 max-w-5xl text-4xl font-black leading-[0.95] tracking-[-0.055em] md:text-7xl">
                Disconnected tools quietly slow down growth.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slate-400">
              A business can have a website, social media, booking link, CRM,
              and email — but if they do not work together, customers feel the
              friction and leads get missed.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {signals.map((item, i) => (
              <div
                key={item}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-300/5 blur-2xl" />
                <p className="text-sm font-black text-slate-600">0{i + 1}</p>
                <h3 className="relative mt-10 text-xl font-black leading-tight">{item}</h3>
                <p className="relative mt-3 text-sm leading-6 text-slate-500">A connected system turns this into a cleaner customer journey.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHUVO OS */}
      <section className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-emerald-300 text-black md:rounded-[2.75rem]">
          <div className="grid gap-10 p-7 sm:p-10 md:grid-cols-[.9fr_1.1fr] md:p-14">
            <div>
              <Network size={44} />
              <h2 className="mt-8 text-4xl font-black leading-[0.95] tracking-[-0.06em] md:text-7xl">
                Techuvo OS connects the entire growth system.
              </h2>
              <p className="mt-6 max-w-xl text-base font-semibold leading-8 text-black/70 md:text-lg">
                Website. AI assistant. Leads. Booking. Automation. Portal.
                Analytics. One connected infrastructure.
              </p>
            </div>

            <div className="grid content-center gap-4 sm:grid-cols-2">
              {[
                ["Website", Globe2],
                ["AI Assistant", Bot],
                ["Leads", ChartSpline],
                ["Booking", CalendarCheck],
                ["Portal", LockKeyhole],
                ["Analytics", Cpu],
              ].map(([item, Icon]) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-black px-5 py-5 text-base font-black text-emerald-300 shadow-xl shadow-black/10 sm:text-lg"
                >
                  <Icon size={20} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-emerald-300">
            What We Build
          </p>

          <h2 className="mt-4 max-w-5xl text-4xl font-black leading-[0.95] tracking-[-0.055em] md:text-7xl">
            Infrastructure for businesses that want to look bigger and move faster.
          </h2>

          <div className="mt-12 grid gap-4 lg:grid-cols-5">
            {buildItems.map(({ num, title, text, icon: Icon }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-emerald-300/30"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-black text-slate-600">{num}</p>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-300/10 text-emerald-300 group-hover:bg-emerald-300 group-hover:text-black">
                    <Icon size={21} />
                  </div>
                </div>
                <h3 className="mt-12 text-2xl font-black tracking-tight">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-7xl rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl md:rounded-[2.75rem] md:p-12">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-emerald-300">How It Works</p>
              <h2 className="mt-4 text-4xl font-black leading-[0.95] tracking-[-0.055em] md:text-6xl">
                Simple process. Premium outcome.
              </h2>
            </div>
            <p className="text-base leading-8 text-slate-400">
              Clients do not need to understand every tool. They just need a
              clear path from idea to launch.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {process.map(([title, text], i) => (
              <div key={title} className="rounded-[1.75rem] bg-black/30 p-5">
                <p className="text-xs font-black text-emerald-300">0{i + 1}</p>
                <h3 className="mt-6 text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-emerald-300">
                Featured Client Projects
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-7xl">
                Systems in the real world.
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-black text-white transition hover:bg-white hover:text-black"
            >
              View Portfolio <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.04] transition hover:-translate-y-1 hover:border-emerald-300/30"
              >
                <div className="relative min-h-[230px] bg-[radial-gradient(circle_at_center,rgba(16,185,129,.28),transparent_35%),linear-gradient(135deg,rgba(255,255,255,.08),rgba(255,255,255,.02))] p-6">
                  <div className="absolute inset-6 rounded-[2rem] border border-white/10 bg-black/30 backdrop-blur-xl" />
                  <div className="relative z-10 flex h-full min-h-[180px] flex-col justify-between">
                    <p className="w-fit rounded-full bg-emerald-300/10 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-300">
                      Deployed
                    </p>
                    <div>
                      <div className="h-2 rounded-full bg-white/10">
                        <div className="h-2 w-3/4 rounded-full bg-emerald-300" />
                      </div>
                      <p className="mt-4 text-sm font-black text-slate-300">Digital system built</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-300">{project.type}</p>
                  <h3 className="mt-4 text-3xl font-black tracking-[-0.04em]">{project.name}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 pb-24 pt-8 sm:px-6">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] border border-emerald-300/20 bg-[radial-gradient(circle_at_top,rgba(16,185,129,.18),transparent_35%),rgba(255,255,255,.04)] p-8 text-center md:rounded-[2.75rem] md:p-16">
          <DatabaseZap className="mx-auto text-emerald-300" size={44} />

          <h2 className="mx-auto mt-8 max-w-5xl text-4xl font-black leading-[0.95] tracking-[-0.06em] md:text-7xl">
            Build the digital foundation your business will run on.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">
            Stop buying disconnected tools. Start with one clean system that
            makes your business easier to trust, contact, and grow.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-300 px-8 py-4 text-sm font-black text-black transition hover:-translate-y-1 hover:bg-emerald-200"
            >
              Build My System <ArrowUpRight size={17} />
            </Link>
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-8 py-4 text-sm font-black text-white transition hover:bg-white hover:text-black"
            >
              View Packages <Layers3 size={17} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
