import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  CheckCircle,
  Sparkles,
  Layers,
  Bot,
  Globe2,
  Palette,
  TrendingUp,
  Workflow,
  ShieldCheck,
  Zap,
} from "lucide-react";

const services = [
  {
    title: "Conversion Websites",
    text: "High-end websites engineered to create trust, explain the offer, and convert serious visitors.",
    icon: Globe2,
  },
  {
    title: "Automation Systems",
    text: "Smart lead flows, booking systems, follow-ups, and dashboards that remove manual work.",
    icon: Workflow,
  },
  {
    title: "Landing Page Engines",
    text: "Campaign-specific pages built for paid traffic, fast decisions, and measurable growth.",
    icon: TrendingUp,
  },
  {
    title: "AI Business Tools",
    text: "Custom AI assistants, chat systems, and workflow intelligence connected to your business.",
    icon: Bot,
  },
  {
    title: "Brand & Interface Design",
    text: "Premium brand systems and UI direction that make the business feel modern and established.",
    icon: Palette,
  },
  {
    title: "Growth Infrastructure",
    text: "The digital foundation: website, systems, tracking, automation, and scalable structure.",
    icon: Layers,
  },
];

const pillars = [
  "Premium Design Systems",
  "Conversion Architecture",
  "AI-Powered Workflows",
  "Scalable Digital Infrastructure",
];

export default function Services() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#050816] text-white">
      {/* HERO */}
      <section className="relative px-4 pb-14 pt-20 sm:px-6 sm:pb-20 md:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#0ea5e955,transparent_35%),radial-gradient(circle_at_top_right,#8b5cf655,transparent_30%),radial-gradient(circle_at_bottom,#14b8a655,transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#050816cc,#050816_70%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-200 shadow-lg shadow-cyan-500/10 sm:text-xs sm:tracking-[0.25em]">
                <Sparkles size={14} />
                Techuvo Global Services
              </div>

              <h1 className="max-w-5xl text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl md:text-7xl lg:text-8xl">
                Digital systems for companies ready to look global.
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base md:text-lg">
                Techuvo builds premium websites, automation systems, AI tools,
                and brand experiences that make businesses feel sharper,
                stronger, and more trusted online.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-7 py-4 text-sm font-black text-black shadow-2xl shadow-cyan-500/20 transition hover:-translate-y-1"
                >
                  Start Your System
                  <ArrowUpRight size={16} />
                </Link>

                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-black text-white backdrop-blur-xl transition hover:bg-white hover:text-black"
                >
                  View Work
                </Link>
              </div>
            </div>

            {/* ORBIT VISUAL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto flex h-[320px] w-full max-w-[520px] items-center justify-center sm:h-[420px] md:h-[520px]"
            >
              <div className="absolute h-60 w-60 rounded-full border border-cyan-300/20 sm:h-80 sm:w-80 md:h-96 md:w-96" />
              <div className="absolute h-44 w-44 rounded-full border border-purple-300/20 sm:h-60 sm:w-60 md:h-72 md:w-72" />
              <div className="absolute h-28 w-28 rounded-full bg-cyan-300/20 blur-3xl sm:h-36 sm:w-36" />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                className="absolute h-60 w-60 rounded-full sm:h-80 sm:w-80 md:h-96 md:w-96"
              >
                <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-2xl border border-white/10 bg-white/10 px-3 py-2 text-[10px] font-black backdrop-blur-xl sm:px-4 sm:py-3 sm:text-xs">
                  AI Systems
                </div>
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                className="absolute h-44 w-44 rounded-full sm:h-60 sm:w-60 md:h-72 md:w-72"
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-2xl border border-white/10 bg-white/10 px-3 py-2 text-[10px] font-black backdrop-blur-xl sm:px-4 sm:py-3 sm:text-xs">
                  Websites
                </div>
              </motion.div>

              <div className="relative z-10 w-[230px] rounded-[2rem] border border-white/10 bg-white/10 p-5 text-center shadow-2xl shadow-cyan-500/10 backdrop-blur-2xl sm:w-[280px] sm:p-6 md:w-[310px] md:p-7">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300 text-black sm:h-16 sm:w-16">
                  <Zap size={26} />
                </div>

                <h2 className="mt-5 text-2xl font-black tracking-tight sm:text-3xl md:text-4xl">
                  Techuvo OS
                </h2>

                <p className="mt-3 text-xs leading-relaxed text-slate-300 sm:text-sm">
                  Websites, automation, AI, and branding working together as one
                  digital growth system.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="relative px-4 pb-12 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl"
            >
              <p className="text-xs font-black text-cyan-300">0{i + 1}</p>
              <h3 className="mt-4 text-base font-black sm:text-lg">{item}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative px-4 py-14 sm:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-6 md:grid-cols-[0.8fr_1fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-300">
                Capabilities
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl md:text-6xl">
                Services designed like infrastructure.
              </h2>
            </div>

            <p className="self-end text-sm leading-relaxed text-slate-400 md:text-base">
              Every service is built to connect with the rest of the business:
              the website, the brand, the leads, the automation, and the
              customer experience.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {services.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-300/40 sm:p-6 md:rounded-[2.25rem] ${
                    i === 0 || i === 5 ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-cyan-300/10 blur-3xl transition group-hover:bg-cyan-300/20" />

                  <div className="relative z-10 grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
                    <div>
                      <div className="mb-6 flex items-center justify-between sm:mb-8">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300 text-black sm:h-14 sm:w-14">
                          <Icon size={22} />
                        </div>

                        <p className="text-xs font-black text-slate-500">
                          0{i + 1}
                        </p>
                      </div>

                      <h3 className="text-2xl font-black tracking-tight sm:text-3xl md:text-5xl">
                        {item.title}
                      </h3>
                    </div>

                    <div>
                      <p className="text-sm leading-relaxed text-slate-300 md:text-base">
                        {item.text}
                      </p>

                      <Link
                        to="/contact"
                        className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-black transition hover:bg-cyan-300 hover:text-black"
                      >
                        Explore Service
                        <ArrowUpRight size={15} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GLOBAL SECTION */}
      <section className="relative px-4 py-14 sm:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] backdrop-blur-xl md:grid-cols-[1fr_0.9fr] md:rounded-[2.75rem]">
          <div className="p-6 sm:p-7 md:p-12">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-300">
              Techuvo Standard
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl md:text-6xl">
              Built to make smaller companies look like serious players.
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
              The best companies do not just have websites. They have digital
              systems: clear positioning, premium visuals, fast pages,
              automated flows, and a brand experience people can trust.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Premium first impression",
                "Clear conversion structure",
                "Mobile-ready experience",
                "Scalable system thinking",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm font-bold text-slate-300"
                >
                  <CheckCircle size={17} className="text-cyan-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[320px] overflow-hidden sm:min-h-[420px]">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
              alt="Premium workspace"
              className="h-full w-full object-cover opacity-70"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#05081655] to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 rounded-[1.5rem] border border-white/10 bg-black/40 p-4 backdrop-blur-xl sm:bottom-6 sm:left-6 sm:right-6 sm:rounded-[2rem] sm:p-5">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-cyan-300" size={22} />
                <p className="text-sm font-black">
                  Designed for trust, speed, and perceived value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative px-4 py-14 sm:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-300">
              Process
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl md:text-6xl">
              Strategy first. Then design. Then systems.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Diagnose", "Understand the business, offer, market, and customer journey."],
              ["02", "Architect", "Plan the pages, systems, structure, and conversion paths."],
              ["03", "Design", "Create the premium interface and visual experience."],
              ["04", "Launch", "Build, test, refine, and prepare the system for growth."],
            ].map(([num, title, text]) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl"
              >
                <p className="text-sm font-black text-cyan-300">{num}</p>
                <h3 className="mt-6 text-2xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-4 pb-16 pt-8 sm:px-6 md:pb-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-cyan-300 text-black shadow-2xl shadow-cyan-500/20 md:rounded-[3rem]">
          <div className="grid items-center md:grid-cols-[1fr_0.75fr]">
            <div className="p-6 sm:p-8 md:p-14">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-black/60">
                Build With Techuvo
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl md:text-6xl">
                Build a digital system that makes your company feel global.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-relaxed text-black/70 md:text-base">
                Start with a premium website. Expand into automation, AI,
                branding, and infrastructure as your business grows.
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-7 py-4 text-sm font-black text-white transition hover:-translate-y-1"
              >
                Start Your Project
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="hidden h-full min-h-[440px] md:block">
              <div className="flex h-full items-center justify-center bg-black/10 p-10">
                <div className="aspect-square w-full max-w-sm rounded-full border border-black/20 p-8">
                  <div className="flex h-full items-center justify-center rounded-full bg-black text-cyan-300">
                    <p className="text-center text-5xl font-black tracking-tight">
                      Techuvo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
}