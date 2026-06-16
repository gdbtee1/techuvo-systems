import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Star,
  Quote,
  CheckCircle,
  Sparkles,
} from "lucide-react";

const reviews = [
  {
    name: "Marcus J.",
    role: "Service Business Owner",
    text: "Techuvo made our business look more established instantly.",
  },
  {
    name: "Alicia R.",
    role: "Consulting Founder",
    text: "The design made my brand feel premium and trustworthy.",
  },
  {
    name: "David K.",
    role: "Startup Operator",
    text: "Sharp layout, clean process, and a stronger online presence.",
  },
];

const projects = [
  {
    title: "Tech Startup Website",
    category: "Website Development",
    result: "A high-converting web experience built for trust, speed, and clarity.",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d",
    tags: ["React", "UX", "Performance"],
  },
  {
    title: "Automation Dashboard",
    category: "Business Systems",
    result: "A streamlined dashboard for managing operations with confidence.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    tags: ["Dashboard", "Automation", "Systems"],
  },
  {
    title: "Brand Identity System",
    category: "Brand Strategy",
    result: "A cleaner identity system designed to raise perceived value.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    tags: ["Branding", "Design", "Trust"],
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f5ef] text-black">
      {/* HERO */}
      <section className="relative px-4 pb-12 pt-20 sm:px-6 md:pb-20 md:pt-28">
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-black/10 blur-3xl md:h-[420px] md:w-[420px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-gray-500 shadow-sm">
                <Sparkles size={14} />
                Techuvo Portfolio
              </div>

              <h1 className="max-w-4xl text-5xl font-black leading-[0.92] tracking-tight sm:text-6xl md:text-8xl">
                Premium digital presence for serious brands.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg">
                Websites, brand systems, and automation tools designed to make
                businesses look sharper, more trusted, and ready for growth.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-7 py-4 text-sm font-black text-white shadow-xl shadow-black/20 transition hover:-translate-y-1"
                >
                  Start a Project
                  <ArrowUpRight size={16} />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-7 py-4 text-sm font-black text-black shadow-sm transition hover:bg-gray-100"
                >
                  View Services
                </Link>
              </div>
            </div>

            {/* EYE-CATCHING VISUAL */}
            <motion.div
              initial={{ opacity: 0, y: 35, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-black shadow-2xl shadow-black/20 md:rounded-[3rem]">
                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
                  alt="Premium workspace"
                  className="h-[340px] w-full object-cover opacity-90 sm:h-[440px] lg:h-[560px]"
                />

                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-black/80 via-black/20 to-transparent md:rounded-[3rem]" />

                <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/10 bg-white/10 p-5 text-white backdrop-blur-xl md:bottom-7 md:left-7 md:right-7">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-300">
                    Global Standard
                  </p>

                  <h2 className="mt-2 text-2xl font-black leading-tight md:text-4xl">
                    Design that makes the business feel bigger.
                  </h2>
                </div>
              </div>

              <div className="absolute -right-2 -top-5 rounded-2xl bg-white px-4 py-3 shadow-xl sm:-right-5">
                <p className="text-xs font-black text-gray-500">Built for</p>
                <p className="text-sm font-black">Trust + Conversion</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-xl shadow-black/5"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        size={15}
                        fill="currentColor"
                        strokeWidth={0}
                      />
                    ))}
                  </div>
                  <Quote size={22} className="text-gray-300" />
                </div>

                <p className="text-lg font-black leading-snug">
                  “{review.text}”
                </p>

                <div className="mt-6 border-t border-black/10 pt-4">
                  <p className="font-black">{review.name}</p>
                  <p className="mt-1 text-sm text-gray-500">{review.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE STRIP */}
      <section className="px-4 py-8 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-4 rounded-[2rem] bg-black p-4 text-white sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Premium visual hierarchy",
            "Mobile-first design",
            "Conversion-focused pages",
            "Clean digital systems",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-[1.5rem] border border-white/10 bg-white/5 p-4 text-sm font-bold"
            >
              <CheckCircle size={17} />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">
              Selected Work
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">
              Project systems built to look expensive.
            </h2>
          </div>

          <div className="grid gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`group grid overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-xl shadow-black/5 md:grid-cols-2 md:rounded-[2.5rem] ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative h-72 overflow-hidden sm:h-96 md:h-auto">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-5 left-5 rounded-full bg-white px-4 py-2 text-xs font-black">
                    {project.category}
                  </div>
                </div>

                <div className="flex flex-col justify-center p-7 md:p-12">
                  <h3 className="text-3xl font-black tracking-tight md:text-5xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600 md:text-base">
                    {project.result}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gray-100 px-4 py-2 text-xs font-black text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-black text-white transition hover:-translate-y-1"
                  >
                    Discuss Similar Work
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-16 sm:px-6">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-black text-white">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_0.8fr]">
            <div className="p-8 md:p-14">
              <h2 className="max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
                Make your business look premium from the first click.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-300 md:text-base">
                Techuvo creates the digital foundation your business needs to
                look cleaner, sharper, and more trusted online.
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-black text-black transition hover:-translate-y-1"
              >
                Start Your Project
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="hidden h-full min-h-[360px] md:block">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
                alt="Business meeting"
                className="h-full w-full object-cover opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/10 bg-white px-4 py-12 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <h3 className="text-2xl font-black">Techuvo</h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-600">
              Websites, brand systems, and automation tools for businesses that
              want to look more established online.
            </p>
          </div>

          <div>
            <p className="font-black">Pages</p>
            <div className="mt-4 space-y-3 text-sm text-gray-600">
              <Link to="/" className="block hover:text-black">Home</Link>
              <Link to="/services" className="block hover:text-black">Services</Link>
              <Link to="/portfolio" className="block hover:text-black">Portfolio</Link>
              <Link to="/contact" className="block hover:text-black">Contact</Link>
            </div>
          </div>

          <div>
            <p className="font-black">Services</p>
            <div className="mt-4 space-y-3 text-sm text-gray-600">
              <p>Website Development</p>
              <p>Brand Identity</p>
              <p>Automation Systems</p>
              <p>AI Business Tools</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-black/10 pt-6 text-xs text-gray-500 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Techuvo. All rights reserved.</p>
          <p>Digital systems for modern businesses.</p>
        </div>
      </footer>
    </div>
  );
}