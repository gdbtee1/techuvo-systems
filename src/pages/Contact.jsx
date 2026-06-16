import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Calendar,
  CheckCircle,
  Mail,
  MessageSquare,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#050816] text-white">
      {/* HERO */}
      <section className="relative px-4 pb-14 pt-20 sm:px-6 md:pb-20 md:pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#0ea5e955,transparent_35%),radial-gradient(circle_at_top_right,#8b5cf655,transparent_30%),radial-gradient(circle_at_bottom,#14b8a655,transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#050816dd,#050816_75%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-200 sm:text-xs">
                <Sparkles size={14} />
                Contact Techuvo
              </div>

              <h1 className="max-w-4xl text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl md:text-7xl">
                Let’s build the system your business will run on.
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base md:text-lg">
                Tell us what you’re building. We’ll help you choose the right
                website, automation, AI tool, or digital system for your next
                stage of growth.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  ["24–48h", "Response time"],
                  ["Custom", "Project quote"],
                  ["Remote", "Nationwide build"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl"
                  >
                    <p className="text-xl font-black text-cyan-300">{value}</p>
                    <p className="mt-1 text-xs font-bold text-slate-400">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CONTACT COMMAND CARD */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl md:rounded-[2.5rem] md:p-6"
            >
              <div className="rounded-[1.5rem] bg-black/30 p-5">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-300">
                  Best Next Step
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight">
                  Book a sales call.
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Fastest way to get a clear price, timeline, and build plan for
                  your website or digital system.
                </p>

                <a
                  href="https://calendly.com/techuvo-dev/sales-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-4 text-sm font-black text-black transition hover:-translate-y-1"
                >
                  Open Calendly Booking
                  <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <a
                  href="mailto:techuvo.dev@gmail.com"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-sm font-bold text-slate-300"
                >
                  <Mail size={18} className="text-cyan-300" />
                  Email Techuvo
                </a>

                <a
                  href="tel:3130000000"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-sm font-bold text-slate-300"
                >
                  <Phone size={18} className="text-cyan-300" />
                  313-000-0000
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT MAIN */}
      <section className="px-4 py-12 sm:px-6 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl md:rounded-[2.5rem] md:p-8"
          >
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300 text-black">
                <MessageSquare size={22} />
              </div>

              <div>
                <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
                  Project Form
                </p>
                <h2 className="text-2xl font-black tracking-tight">
                  Send a message
                </h2>
              </div>
            </div>

            <form
              action="https://formspree.io/f/mnjprdge"
              method="POST"
              className="grid gap-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300"
              />

              <select
                name="project"
                className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-white outline-none focus:border-cyan-300"
              >
                <option value="">Project Type</option>
                <option>Website Development</option>
                <option>Business Automation</option>
                <option>AI Business System</option>
                <option>Brand Identity</option>
                <option>Landing Page / Funnel</option>
                <option>Not Sure Yet</option>
              </select>

              <textarea
                name="message"
                placeholder="Tell us about your business, goals, and what you want built..."
                rows="6"
                required
                className="resize-none rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300"
              />

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-7 py-4 text-sm font-black text-black transition hover:-translate-y-1"
              >
                Send Project Request
                <ArrowUpRight size={16} />
              </button>
            </form>
          </motion.div>

          {/* BOOKING + INFO */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl md:rounded-[2.5rem] md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300 text-black">
                  <Calendar size={22} />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
                    Schedule
                  </p>
                  <h3 className="text-2xl font-black tracking-tight">
                    Book directly
                  </h3>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-slate-300">
                Use the calendar below to choose a time that works. This is best
                if you want pricing, a timeline, and a direct build strategy.
              </p>

              <a
                href="https://calendly.com/techuvo-dev/sales-call"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white px-6 py-4 text-sm font-black text-black transition hover:-translate-y-1"
              >
                Open Calendly
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/20 md:rounded-[2.5rem]">
              <iframe
                src="https://calendly.com/techuvo-dev/sales-call"
                title="Schedule a Techuvo sales call"
                className="h-[520px] w-full bg-white sm:h-[650px]"
                frameBorder="0"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["Strategy", "We clarify the right system."],
                ["Pricing", "You get a clear quote."],
                ["Timeline", "You know the next steps."],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-5"
                >
                  <CheckCircle size={20} className="text-cyan-300" />
                  <h4 className="mt-4 font-black">{title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20 pt-4 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-cyan-300 p-7 text-black shadow-2xl shadow-cyan-500/20 md:rounded-[2.5rem] md:p-12">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-black/60">
                Ready when you are
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                Start with a message. Leave with a build plan.
              </h2>
            </div>

            <a
              href="https://calendly.com/techuvo-dev/sales-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-8 py-4 text-sm font-black text-white transition hover:-translate-y-1 md:w-auto"
            >
              Book Sales Call
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}