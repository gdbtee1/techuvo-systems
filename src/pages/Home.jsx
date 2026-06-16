
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import techuvoWallpaper from "../assets/techuvowallpaper.jpeg";
import {
  ArrowUpRight,
  Sparkles,
  CheckCircle,
  Globe2,
  Bot,
  Workflow,
  ShieldCheck,
  Zap,
} from "lucide-react";

const systems = [
  {
    title: "Website Systems",
    text: "Premium websites built to make businesses look established, trusted, and ready to convert.",
    icon: Globe2,
  },
  {
    title: "AI Workforce",
    text: "AI assistants, lead responders, and business automation tools built around real operations.",
    icon: Bot,
  },
  {
    title: "Automation Infrastructure",
    text: "Lead capture, booking, follow-up, dashboards, and workflows connected into one system.",
    icon: Workflow,
  },
];

const signals = [
  "Premium Websites",
  "AI Business Systems",
  "Automation Dashboards",
  "Brand Infrastructure",
  "Lead Generation",
  "Digital Growth",
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#050816] text-white">
      {/* HERO */}
      <section className="relative min-h-[92vh] overflow-hidden px-4 py-20 sm:px-6 md:py-28">
        <img
          src={techuvoWallpaper}
          alt="Techuvo"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#0ea5e955,transparent_35%),radial-gradient(circle_at_bottom_right,#8b5cf655,transparent_35%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/30 via-[#050816]/80 to-[#050816]" />

        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-center">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-200 backdrop-blur-xl sm:text-xs">
                <Sparkles size={14} />
                Future Techuvo
              </div>

              <h1 className="max-w-5xl text-4xl font-black leading-[0.92] tracking-tight sm:text-6xl md:text-8xl">
                Building the digital infrastructure for modern business.
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base md:text-lg">
                Premium websites, AI systems, automation tools, and business
                portals for companies ready to look bigger, move faster, and
                operate smarter online.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-300 px-7 py-4 text-sm font-black text-black shadow-2xl shadow-cyan-500/20 transition hover:-translate-y-1 sm:w-auto"
                >
                  Build With Techuvo
                  <ArrowUpRight size={16} />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/10 px-7 py-4 text-sm font-black text-white backdrop-blur-xl transition hover:bg-white hover:text-black sm:w-auto"
                >
                  Explore Systems
                </Link>
              </div>
            </div>

            {/* COMMAND CENTER */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.08] p-5 shadow-2xl shadow-cyan-500/10 backdrop-blur-2xl md:rounded-[2.5rem]"
            >
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-300/20 blur-3xl" />

              <div className="relative z-10">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
                      Techuvo OS
                    </p>
                    <h2 className="mt-2 text-2xl font-black">
                      Business Command Center
                    </h2>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300 text-black">
                    <Zap size={24} />
                  </div>
                </div>

                <div className="grid gap-3">
                  {[
                    ["Website", "Active", "98%"],
                    ["AI Assistant", "Online", "24/7"],
                    ["Lead Flow", "Running", "+42%"],
                    ["Client Portal", "Ready", "Live"],
                  ].map(([name, status, value]) => (
                    <div
                      key={name}
                      className="grid grid-cols-[1fr_auto] items-center gap-4 rounded-2xl border border-white/10 bg-black/35 p-4"
                    >
                      <div>
                        <p className="font-black">{name}</p>
                        <p className="mt-1 text-xs text-slate-400">{status}</p>
                      </div>

                      <p className="rounded-full bg-cyan-300 px-3 py-2 text-xs font-black text-black">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4">
                  <p className="text-sm font-bold text-cyan-100">
                    One connected system for websites, leads, AI, automation,
                    and client experience.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SIGNAL RAIL */}
      <section className="border-y border-white/10 bg-white/[0.04] py-4">
        <div className="overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            className="flex w-max gap-3 px-4"
          >
            {[...signals, ...signals].map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-slate-300"
              >
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SYSTEMS */}
      <section className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-5 md:grid-cols-2">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-300">
                What We Build
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl md:text-6xl">
                Not just websites. Complete digital systems.
              </h2>
            </div>

            <p className="self-end text-sm leading-relaxed text-slate-400 md:text-base">
              Techuvo is becoming a digital infrastructure company for
              businesses that need presence, systems, automation, and scale.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {systems.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="group rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-300/40"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300 text-black">
                      <Icon size={24} />
                    </div>

                    <p className="text-xs font-black text-slate-500">
                      0{i + 1}
                    </p>
                  </div>

                  <h3 className="text-2xl font-black tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-slate-400">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECHUVO WALLPAPER SHOWCASE */}
      <section className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.06] md:grid-cols-2">
          <div className="p-7 sm:p-10 md:p-14">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-300">
              Techuvo Vision
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl md:text-6xl">
              A platform for the businesses moving America forward.
            </h2>

            <p className="mt-5 text-sm leading-relaxed text-slate-300 md:text-base">
              Imagine thousands of small businesses, creators, service brands,
              and startups running on Techuvo systems — websites, portals,
              automations, AI employees, and digital storefronts working in the
              background.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Local businesses",
                "Service brands",
                "Startups",
                "Digital storefronts",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 p-4 text-sm font-bold text-slate-300"
                >
                  <CheckCircle size={17} className="text-cyan-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden sm:min-h-[460px]">
            <img
              src={techuvoWallpaper}
              alt="Techuvo wallpaper"
              className="h-full w-full object-cover opacity-80"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#05081655] to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 rounded-[2rem] border border-white/10 bg-black/50 p-5 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-cyan-300" size={22} />
                <p className="text-sm font-black">
                  Built to look like the future of business systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPERATING SYSTEM */}
      <section className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-cyan-300 p-6 text-black md:p-10">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-black/60">
                Techuvo Operating System
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl md:text-6xl">
                One system. Many business functions.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Website",
                "AI Assistant",
                "Lead Capture",
                "Booking Flow",
                "Client Portal",
                "Brand System",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-black px-5 py-4 text-lg font-black text-cyan-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20 pt-4 sm:px-6">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-cyan-300/20 bg-white/[0.06] text-white shadow-2xl shadow-black/20">
          <div className="p-7 text-center sm:p-10 md:p-16">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-300">
              Start Your Project
            </p>

            <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-black tracking-tight sm:text-4xl md:text-6xl">
              Build the digital foundation your business will run on.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
              Start with a premium website. Grow into automation, AI systems,
              portals, and full digital infrastructure.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-8 py-4 text-sm font-black text-black transition hover:-translate-y-1"
              >
                Book a Consultation
                <ArrowUpRight size={16} />
              </Link>

              <Link
                to="/shop"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-black text-white transition hover:bg-white hover:text-black"
              >
                View Packages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}