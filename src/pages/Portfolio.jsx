import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  ChartSpline,
  CheckCircle,
  Cpu,
  DatabaseZap,
  Globe2,
  Layers3,
  MonitorSmartphone,
  Network,
  Search,
  Sparkles,
  Workflow,
} from "lucide-react";

const stats = [
  ["15+", "Projects Delivered"],
  ["8+", "Industries Served"],
  ["100%", "Client Satisfaction"],
  ["24/7", "Active Systems"],
];

const categories = [
  "Web Development",
  "AI Systems",
  "Automation",
  "Branding",
  "Lead Generation",
];

const projects = [
  {
    name: "Carolina Brake & Diagnostics",
    industry: "Mobile Auto Service",
    services: ["Website", "Brand Positioning", "Lead Flow"],
    outcome: "A premium digital presence for a mobile brake and diagnostics company.",
    challenge: "The business needed to look more professional online and communicate trust quickly to vehicle owners.",
    solution: "Techuvo built a sharp service-focused website with clear offers, service areas, trust signals, and booking direction.",
    result: "The company gained a stronger brand image, cleaner customer journey, and a more credible online presence.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
    url: "https://carolinabrakes.com",
  },
  {
    name: "Golden Cares LLC",
    industry: "Healthcare Services",
    services: ["Website", "Careers Page", "Trust System"],
    outcome: "A healthcare platform designed for clarity, trust, and inquiries.",
    challenge: "Golden Cares needed a professional website that explained services clearly and made the company feel established.",
    solution: "Techuvo created a modern multi-section site with service pages, careers direction, FAQs, and contact flow.",
    result: "The brand now presents itself with stronger credibility and a cleaner path for families, applicants, and partners.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    url: "https://mygoldencares.com",
  },
  {
    name: "Hubby Hub",
    industry: "Author Brand / Media",
    services: ["Website", "Shop Experience", "Brand System"],
    outcome: "A content and commerce-ready platform for an author brand.",
    challenge: "The brand needed a central online home for books, content, reviews, and audience connection.",
    solution: "Techuvo built a clean author platform with shop direction, book presentation, blog structure, and contact flow.",
    result: "Hubby Hub gained a stronger digital identity and a more organized platform for future growth.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    url: "https://gdbtee1.github.io/hubbyhub/",
  },
  {
    name: "Monroe Media TV",
    industry: "Media / Entertainment",
    services: ["Website", "Booking Flow", "Content Platform"],
    outcome: "A media website built to support booking, casting, and audience engagement.",
    challenge: "The company needed more than a basic site — it needed a platform for viewers, bookings, and media presence.",
    solution: "Techuvo designed a multi-page digital system with watch, booking, casting, and member-focused sections.",
    result: "The platform now feels more organized, professional, and ready for audience growth.",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    url: "https://gdbtee1.github.io/Monroe-Media/",
  },
  {
    name: "Kids First Educational Learning Centers",
    industry: "Education",
    services: ["Website", "Parent Experience", "Lead Generation"],
    outcome: "An education website built for trust, enrollment, and parent clarity.",
    challenge: "The learning center needed to communicate value quickly to parents and create a smoother inquiry experience.",
    solution: "Techuvo built a polished tutoring and learning center website with service sections, trust points, and contact CTA.",
    result: "The business now has a more professional digital presence built to support parent inquiries and enrollment.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    url: "https://kidsfirstllc.com",
  },
];
const stack = [
  ["React", MonitorSmartphone],
  ["Tailwind CSS", Layers3],
  ["AI Integrations", BrainCircuit],
  ["Automation Systems", Workflow],
  ["SEO Optimization", Search],
  ["Analytics", ChartSpline],
];

export default function Portfolio() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#020403] text-white">
      {/* HERO */}
      <section className="relative px-4 pb-20 pt-24 sm:px-6 md:pb-28 md:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,.25),transparent_34%),radial-gradient(circle_at_85%_25%,rgba(59,130,246,.16),transparent_30%),linear-gradient(to_bottom,#020403,#030712_55%,#020403)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/15 bg-white/[0.04] px-4 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-emerald-200 backdrop-blur-xl sm:text-xs"
          >
            <Sparkles size={14} />
            Techuvo Portfolio
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
                className="max-w-6xl text-5xl font-black leading-[0.88] tracking-[-0.07em] sm:text-7xl md:text-8xl lg:text-9xl"
              >
                Work That Moves Businesses Forward.
              </motion.h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                Explore the websites, digital systems, automation platforms, and
                growth infrastructure built by Techuvo.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {stats.map(([number, label]) => (
                <div
                  key={label}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl"
                >
                  <p className="text-3xl font-black tracking-tight text-emerald-300 md:text-5xl">
                    {number}
                  </p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {categories.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-emerald-300">
              Featured Projects
            </p>
            <h2 className="mt-4 text-4xl font-black leading-[0.95] tracking-[-0.055em] md:text-7xl">
              These are not just websites. They are business systems.
            </h2>
          </div>

          <div className="grid gap-10">
            {projects.map((project, index) => (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl transition hover:border-emerald-300/40 md:rounded-[2.75rem]"
              >
                <div className="grid lg:grid-cols-[1.05fr_.95fr]">
                  <div className="relative min-h-[300px] overflow-hidden sm:min-h-[420px] lg:min-h-full">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020403] via-black/30 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/10 bg-black/35 p-5 backdrop-blur-xl">
                      <p className="text-xs font-black uppercase tracking-[0.25em] text-emerald-300">
                        {project.industry}
                      </p>
                      <h3 className="mt-3 text-3xl font-black tracking-[-0.04em] md:text-5xl">
                        {project.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-7 sm:p-10 md:p-12">
                    <p className="text-sm leading-7 text-slate-300">
                      {project.outcome}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.services.map((service) => (
                        <span
                          key={service}
                          className="rounded-full bg-emerald-300/10 px-4 py-2 text-xs font-black text-emerald-300"
                        >
                          {service}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 grid gap-5">
                      {[
                        ["Challenge", project.challenge],
                        ["Solution", project.solution],
                        ["Result", project.result],
                      ].map(([title, text]) => (
                        <div
                          key={title}
                          className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5"
                        >
                          <p className="text-xs font-black uppercase tracking-[0.25em] text-emerald-300">
                            {title}
                          </p>
                          <p className="mt-3 text-sm leading-7 text-slate-400">
                            {text}
                          </p>
                        </div>
                      ))}
                    </div>
<a
  href={project.url}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-300 px-6 py-3 text-sm font-black text-black transition hover:-translate-y-1"
>
  Launch Project
  <ArrowUpRight size={16} />
</a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY STACK */}
      <section className="px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-emerald-300">
                Technology Stack
              </p>
              <h2 className="mt-4 text-4xl font-black leading-[0.95] tracking-[-0.055em] md:text-7xl">
                Built with modern tools for speed, scale, and growth.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-slate-400">
              Techuvo combines frontend engineering, AI infrastructure,
              automation workflows, SEO strategy, and analytics to create systems
              that businesses can actually use to grow.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stack.map(([name, Icon]) => (
              <div
                key={name}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-2 hover:border-emerald-300/40"
              >
                <Icon className="text-emerald-300" size={28} />
                <h3 className="mt-10 text-2xl font-black">{name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUILT FOR GROWTH */}
      <section className="px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.75rem] bg-emerald-300 text-black">
          <div className="grid gap-10 p-8 md:grid-cols-[.9fr_1.1fr] md:p-14">
            <div>
              <Network size={44} />
              <h2 className="mt-8 text-4xl font-black leading-[0.95] tracking-[-0.06em] md:text-7xl">
                Built for Growth.
              </h2>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-lg font-semibold leading-8 text-black/75">
                Techuvo does not just build websites. We create complete digital
                systems designed to generate leads, improve customer experience,
                support operations, and help businesses grow with confidence.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "More trust",
                  "Cleaner customer flow",
                  "Better lead capture",
                  "Scalable infrastructure",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl bg-black px-5 py-4 text-sm font-black text-emerald-300"
                  >
                    <CheckCircle size={18} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 pb-24 pt-8 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-[2.75rem] border border-emerald-300/20 bg-[radial-gradient(circle_at_top,rgba(16,185,129,.18),transparent_35%),rgba(255,255,255,.04)] p-8 text-center md:p-16">
          <DatabaseZap className="mx-auto text-emerald-300" size={44} />

          <h2 className="mx-auto mt-8 max-w-5xl text-4xl font-black leading-[0.95] tracking-[-0.06em] md:text-7xl">
            Ready to Become Our Next Success Story?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-300">
            Let&apos;s build the digital foundation your business deserves.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-300 px-9 py-4 text-sm font-black text-black transition hover:-translate-y-1"
            >
              Start a Project
              <ArrowUpRight size={17} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-9 py-4 text-sm font-black text-white backdrop-blur-xl transition hover:bg-white hover:text-black"
            >
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}