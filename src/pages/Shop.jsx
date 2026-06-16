import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Sparkles,
  CheckCircle,
  Globe2,
  Bot,
  Layers,
  Palette,
  TrendingUp,
  Workflow,
  ShieldCheck,
  Package,
  Phone,
} from "lucide-react";

const products = [
  {
    title: "Premium Website System",
    category: "Web Presence",
    description:
      "A custom business website designed to make your company look established, trusted, and ready for customers.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    link: "/website-development",
    icon: Globe2,
    badge: "Best Seller",
    price: "From $499",
  },
  {
    title: "Automation Command Center",
    category: "Operations",
    description:
      "Lead capture, booking, follow-ups, and workflow systems built to save time and reduce manual work.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    link: "/automation-systems",
    icon: Workflow,
    badge: "Scale System",
    price: "Custom Quote",
  },
  {
    title: "Ad Landing Page Engine",
    category: "Growth",
    description:
      "High-converting landing pages for campaigns, offers, service ads, and paid traffic funnels.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
    link: "/landing-pages",
    icon: TrendingUp,
    badge: "For Ads",
    price: "From $299",
  },
  {
    title: "AI Business Assistant",
    category: "AI Tools",
    description:
      "AI chat, support assistants, lead qualification, and workflow intelligence for your business.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    link: "/ai-integrations",
    icon: Bot,
    badge: "Future Ready",
    price: "Custom Quote",
  },
  {
    title: "Brand Identity Kit",
    category: "Branding",
    description:
      "Visual direction, brand feel, typography, colors, and identity elements to raise perceived value.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    link: "/brand-identity",
    icon: Palette,
    badge: "Premium Look",
    price: "From $199",
  },
  {
    title: "Startup Launch Suite",
    category: "Launch",
    description:
      "Website, offer structure, brand direction, and launch assets for founders getting started.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    link: "/startup-launch",
    icon: Layers,
    badge: "Founder Kit",
    price: "Custom Quote",
  },
];

const bundles = [
  {
    name: "Starter Presence",
    price: "$199",
    bestFor: "New businesses that need a clean online presence",
    highlight: false,
    includes: [
      "1-page premium website",
      "Mobile-responsive design",
      "Contact section or contact form",
      "Basic service/offer section",
      "Call-to-action buttons",
      "Basic SEO structure",
      "Fast launch foundation",
    ],
  },
  {
    name: "Growth System",
    price: "$499",
    bestFor: "Businesses ready for a stronger brand and more trust",
    highlight: true,
    includes: [
      "3-page premium website",
      "Mobile-responsive design",
      "Logo direction or simple logo concept",
      "Home, Services, and Contact pages",
      "Brand color and font direction",
      "Lead-focused page structure",
      "Contact form integration",
      "Basic SEO setup",
      "Social media link setup",
    ],
  },
  {
    name: "Premium OS",
    price: "$799",
    bestFor: "Businesses ready for a full digital foundation",
    highlight: false,
    includes: [
      "Everything in Growth System",
      "Up to 5 premium pages",
      "Business portal access for 2 months",
      "Client dashboard / portal setup",
      "Booking or lead intake flow",
      "Premium brand polish",
      "Basic automation setup",
      "Launch support",
      "Priority project delivery",
    ],
  },
];

const categories = [
  "All Systems",
  "Websites",
  "Automation",
  "AI Tools",
  "Branding",
  "Funnels",
];

export default function Shop() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f5ef] text-black">
      {/* HERO */}
      <section className="relative px-4 pb-12 pt-16 sm:px-6 sm:pt-20 md:pb-20 md:pt-28">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/30 blur-3xl sm:h-96 sm:w-96 md:h-[560px] md:w-[560px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-gray-500 shadow-sm sm:text-xs sm:tracking-[0.18em]">
                <Sparkles size={14} />
                Techuvo Store
              </div>

              <h1 className="max-w-4xl text-3xl font-black leading-[0.98] tracking-tight sm:text-5xl md:text-7xl">
                Shop digital systems built for serious growth.
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-gray-600 sm:mt-6 sm:text-base md:text-lg">
                Choose premium website packages, automation systems, AI tools,
                and brand upgrades designed to make your business look more
                established online.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-7 py-4 text-sm font-black text-white shadow-xl shadow-black/20 transition hover:-translate-y-1 sm:w-auto"
                >
                  Get a Custom Quote
                  <ArrowUpRight size={16} />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex w-full items-center justify-center rounded-full border border-black/10 bg-white px-7 py-4 text-sm font-black text-black shadow-sm transition hover:bg-gray-100 sm:w-auto"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="relative overflow-hidden rounded-[2rem] bg-black text-white shadow-2xl shadow-black/20 md:rounded-[2.5rem]"
            >
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
                alt="Featured digital system"
                className="absolute inset-0 h-full w-full object-cover opacity-35"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/10" />

              <div className="relative z-10 flex min-h-[330px] flex-col justify-between p-5 sm:min-h-[420px] sm:p-8">
                <div className="w-fit inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-black text-cyan-200">
                  <ShieldCheck size={14} />
                  Featured Build
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300 sm:tracking-[0.3em]">
                    Signature System
                  </p>

                  <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
                    Premium Website System
                  </h2>

                  <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-300">
                    A full business website experience built for credibility,
                    mobile performance, trust, and lead generation.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Responsive", "Fast", "Lead Ready"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-[11px] font-bold text-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/website-development"
                    className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-black text-black sm:w-auto"
                  >
                    View Product
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CATEGORY RAIL */}
      <section className="px-4 pb-8 sm:px-6">
        <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((item, i) => (
            <button
              key={item}
              className={`shrink-0 rounded-full border px-5 py-3 text-xs font-black uppercase tracking-[0.15em] transition ${
                i === 0
                  ? "border-black bg-black text-white"
                  : "border-black/10 bg-white text-gray-600 hover:bg-black hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="px-4 py-8 sm:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-5 md:grid-cols-2">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-gray-500">
                Digital Products
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl md:text-6xl">
                Choose your next business system.
              </h2>
            </div>

            <p className="self-end text-sm leading-relaxed text-gray-600 md:text-base">
              Every product is customized around your brand, offer, audience,
              and growth goal — like a store, but built personally for your
              business.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product, i) => {
              const Icon = product.icon;

              return (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-xl shadow-black/5 transition hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="relative h-60 overflow-hidden sm:h-64">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                    <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-black sm:h-12 sm:w-12">
                      <Icon size={21} />
                    </div>

                    <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center justify-between gap-2">
                      <span className="rounded-full bg-cyan-300 px-4 py-2 text-xs font-black text-black">
                        {product.badge}
                      </span>

                      <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-black text-black backdrop-blur">
                        {product.price}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <p className="text-xs font-black uppercase tracking-[0.25em] text-gray-500">
                      {product.category}
                    </p>

                    <h3 className="mt-3 text-2xl font-black tracking-tight">
                      {product.title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-gray-600">
                      {product.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {["Custom", "Premium", "Growth Ready"].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-gray-100 px-3 py-2 text-[11px] font-bold text-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-col gap-3 pt-7 sm:flex-row">
                      <Link
                        to={product.link}
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-black text-white transition hover:bg-gray-800"
                      >
                        Learn More
                        <ArrowUpRight size={15} />
                      </Link>

                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center rounded-full border border-black/10 px-5 py-3 text-sm font-black text-gray-600 transition hover:bg-black hover:text-white"
                      >
                        Quote
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRICING BUNDLES */}
      <section className="px-4 py-12 sm:px-6 md:py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-black p-5 text-white md:rounded-[2.5rem] md:p-8">
          <div className="mb-8 grid gap-5 md:grid-cols-2">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-300">
                Website Packages
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl md:text-6xl">
                Clear packages for serious businesses.
              </h2>
            </div>

            <p className="self-end text-sm leading-relaxed text-gray-400">
              These packages give clients a clear starting point. Custom systems,
              advanced automation, and AI tools can be added based on the project.
            </p>
          </div>

          <div className="grid items-stretch gap-5 md:grid-cols-3">
            {bundles.map((bundle, i) => (
              <motion.div
                key={bundle.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`flex h-full flex-col rounded-[2rem] border p-5 sm:p-6 ${
                  bundle.highlight
                    ? "border-cyan-300 bg-cyan-300 text-black shadow-2xl shadow-cyan-500/20"
                    : "border-white/10 bg-white/[0.06]"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <Package size={24} />

                  {bundle.highlight && (
                    <div className="rounded-full bg-black px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white">
                      Best Value
                    </div>
                  )}
                </div>

                <h3 className="mt-5 text-2xl font-black">{bundle.name}</h3>

                <p
                  className={`mt-2 text-sm font-bold md:min-h-[44px] ${
                    bundle.highlight ? "text-black/60" : "text-gray-400"
                  }`}
                >
                  {bundle.bestFor}
                </p>

                <div className="mt-6 flex items-end gap-2">
                  <p className="text-5xl font-black tracking-tight">
                    {bundle.price}
                  </p>
                  <p
                    className={`mb-2 text-sm font-bold ${
                      bundle.highlight ? "text-black/60" : "text-gray-400"
                    }`}
                  >
                    starting
                  </p>
                </div>

                <div className="mt-7 flex-1 space-y-3">
                  {bundle.includes.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle size={17} className="mt-0.5 shrink-0" />
                      <span className="text-sm font-semibold leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-4 text-sm font-black ${
                    bundle.highlight ? "bg-black text-white" : "bg-white text-black"
                  }`}
                >
                  Request {bundle.name}
                  <ArrowUpRight size={15} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STORE PROMISE */}
      <section className="px-4 py-10 sm:px-6 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            ["Scalable Systems", "Built to support growth beyond the first launch."],
            ["Conversion Focused", "Structured to generate leads, trust, and action."],
            ["Future Ready", "Designed around modern web, automation, and AI tools."],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-xl shadow-black/5"
            >
              <CheckCircle className="text-black" size={24} />
              <h3 className="mt-5 text-2xl font-black">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-16 pt-4 sm:px-6 md:pb-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-cyan-300 text-black shadow-2xl shadow-cyan-500/20 md:rounded-[2.5rem]">
          <div className="grid items-center md:grid-cols-2">
            <div className="p-7 sm:p-10 md:p-14">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-black/60">
                Not sure what to choose?
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl md:text-6xl">
                Tell us your goal. We will recommend the right system.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-relaxed text-black/70 md:text-base">
                Whether you need a website, funnel, automation, AI tool, or full
                digital upgrade, Techuvo can help you choose the right starting
                point.
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-8 py-4 text-sm font-black text-white transition hover:-translate-y-1 sm:w-auto"
              >
                Get Your Quote
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="hidden h-full min-h-[420px] md:block">
              <div className="flex h-full items-center justify-center bg-black/10 p-10">
                <div className="grid w-full max-w-sm gap-4">
                  {["Website", "Automation", "AI", "Branding"].map((item) => (
                    <div
                      key={item}
                      className="rounded-3xl bg-black px-6 py-5 text-xl font-black text-cyan-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/10 bg-white px-4 py-12 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-black">Techuvo</h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-600">
              Websites, brand systems, automation tools, and digital
              infrastructure for businesses that want to look more established
              online.
            </p>
          </div>

          <div>
            <p className="font-black">Pages</p>
            <div className="mt-4 space-y-3 text-sm text-gray-600">
              <Link to="/" className="block hover:text-black">
                Home
              </Link>
              <Link to="/services" className="block hover:text-black">
                Services
              </Link>
              <Link to="/portfolio" className="block hover:text-black">
                Portfolio
              </Link>
              <Link to="/shop" className="block hover:text-black">
                Shop
              </Link>
              <Link to="/contact" className="block hover:text-black">
                Contact
              </Link>
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

          <div>
            <p className="font-black">Contact</p>
            <div className="mt-4 space-y-3 text-sm text-gray-600">
              <Link to="/contact" className="block hover:text-black">
                Get a Quote
              </Link>
              <a href="tel:3130000000" className="flex items-center gap-2 hover:text-black">
                <Phone size={15} />
                313-000-0000
              </a>
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