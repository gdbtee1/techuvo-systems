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
  CreditCard,
  CalendarDays,
  Zap,
  Star,
  MousePointerClick,
} from "lucide-react";

const products = [
  {
    title: "Premium Website System",
    category: "Web Presence",
    description:
      "A custom business website designed to make your company look established, trusted, and ready for customers.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
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
    micro: "Split into $100 down + $99 at launch",
    bestFor: "New businesses that need a clean online presence without a large upfront cost.",
    highlight: false,
    badge: "Fast Start",
    hosting: "1 year hosting included",
    support: "30 days post-launch support",
    payInFull: "$199 one-time",
    splitPay: "$100 upfront + $99 when the site is ready",
    monthly: "$39/month for 6 months",
    totalNote: "Monthly total: $234",
    valueNote: "Best when you need to get online quickly and keep cash flow protected.",
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
    micro: "Less than $2/day on monthly plan",
    bestFor: "Businesses ready to look more professional, generate more leads, and build trust faster.",
    highlight: true,
    badge: "Most Popular",
    hosting: "1 year hosting included",
    support: "60 days post-launch support",
    payInFull: "$499 one-time",
    splitPay: "$250 upfront + $249 at launch",
    monthly: "$100 setup + $59/month for 12 months",
    totalNote: "Monthly total: $808",
    valueNote: "Designed to be the obvious upgrade for businesses that want a stronger online presence.",
    includes: [
      "Custom premium website design",
      "Up to 3 professionally designed pages",
      "Fully mobile responsive experience",
      "Lead generation contact forms",
      "Trust-building conversion layout",
      "Google Maps + social media integration",
      "SEO-ready website foundation",
      "Premium typography and brand styling",
      "30 days of post-launch support",
    ],
  },
  {
    name: "Premium OS",
    price: "$799",
    micro: "Full foundation + 2 years hosting",
    bestFor: "Businesses ready for a complete digital foundation with portal, booking, and automation.",
    highlight: false,
    badge: "Full Build",
    hosting: "2 years hosting included",
    support: "90 days post-launch support",
    payInFull: "$799 one-time",
    splitPay: "$400 upfront + $399 at launch",
    monthly: "$150 setup + $99/month for 12 months",
    totalNote: "Monthly total: $1,338",
    valueNote: "For serious businesses that want a premium system instead of just a basic website.",
    includes: [
      "Everything in Growth System",
      "Up to 5 premium pages",
      "Business portal access for 2 months",
      "Client dashboard / portal setup",
      "Booking or lead intake flow",
      "Premium brand polish",
      "Basic automation setup",
      "Priority project delivery",
    ],
  },
];

const categories = [
  "Website Templates",
  "AI Business Systems",
  "Automation Workflows",
  "Business Toolkits",
  "Branding Kits",
  "Lead Generation Resources",
];

const labs = ["LeadOS", "AI Workforce", "Investor Smart", "Content Engine", "Website Auditor", "Client Intelligence"];

const stats = [
  ["24–72h", "Fast launch options"],
  ["100%", "Mobile responsive"],
  ["Built-in", "Lead capture focus"],
];

export default function Shop() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#020403] text-white">
      {/* HERO */}
      <section className="relative px-4 pb-10 pt-16 sm:px-6 sm:pt-20 md:pb-16 md:pt-28">
        <div className="absolute inset-x-0 top-0 h-[620px] bg-[radial-gradient(circle_at_top,rgba(110,231,183,0.26),transparent_45%)]" />
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-300/20 blur-3xl sm:h-96 sm:w-96 md:h-[560px] md:w-[560px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/30 backdrop-blur sm:p-8 md:rounded-[2.75rem] md:p-10"
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-200 sm:text-xs">
                <Sparkles size={14} />
                Techuvo Marketplace
              </div>

              <h1 className="max-w-4xl text-4xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl md:text-7xl">
                Digital systems built to make businesses look premium.
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg">
                Choose websites, automation, AI tools, brand upgrades, and launch systems designed to help businesses gain trust, capture leads, and grow smarter.
              </p>

              <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-300 px-7 py-4 text-sm font-black text-black shadow-xl shadow-emerald-500/20 transition hover:-translate-y-1 hover:bg-emerald-200"
                >
                  Get a Custom Quote
                  <ArrowUpRight size={16} />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-7 py-4 text-sm font-black text-white transition hover:bg-white hover:text-black"
                >
                  Explore Services
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {stats.map(([value, label]) => (
                  <div key={label} className="rounded-3xl border border-white/10 bg-black/30 p-4">
                    <p className="text-xl font-black text-emerald-300">{value}</p>
                    <p className="mt-1 text-xs font-bold text-gray-400">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl shadow-black/40 md:rounded-[2.75rem]"
            >
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=80"
                alt="Featured digital system"
                className="absolute inset-0 h-full w-full object-cover opacity-35"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/10" />

              <div className="relative z-10 flex min-h-[420px] flex-col justify-between p-5 sm:min-h-[500px] sm:p-8">
                <div className="flex items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs font-black text-emerald-200">
                    <ShieldCheck size={14} />
                    Featured Build
                  </div>
                  <div className="rounded-full bg-white px-4 py-2 text-xs font-black text-black">From $499</div>
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-emerald-300">Signature System</p>
                  <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-5xl">Premium Website System</h2>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-300">
                    A full business website experience built for credibility, speed, trust, mobile performance, and lead generation.
                  </p>

                  <div className="mt-6 grid grid-cols-3 gap-2">
                    {["Responsive", "Fast", "Lead Ready"].map((tag) => (
                      <span key={tag} className="rounded-2xl border border-white/10 bg-white/10 px-3 py-3 text-center text-[11px] font-bold text-gray-200">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link to="/website-development" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-300 px-6 py-4 text-sm font-black text-black transition hover:bg-emerald-200 sm:w-auto">
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
        <div className="mx-auto max-w-7xl">
          <div className="flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((item, i) => (
              <button
                key={item}
                className={`shrink-0 rounded-full border px-5 py-3 text-xs font-black uppercase tracking-[0.14em] transition ${
                  i === 0
                    ? "border-emerald-300 bg-emerald-300 text-black"
                    : "border-white/10 bg-white/[0.06] text-gray-300 hover:bg-white hover:text-black"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="px-4 py-10 sm:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-5 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-emerald-300">Digital Products</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl md:text-6xl">
                Choose your next business system.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-gray-300 md:justify-self-end md:text-base">
              Every product is customized around your brand, offer, audience, and growth goal — like a premium store, but built personally for your business.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product, i) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className={`group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-xl shadow-black/20 transition hover:-translate-y-2 hover:bg-white/[0.07] ${i === 0 ? "md:col-span-2 xl:col-span-1" : ""}`}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img src={product.image} alt={product.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
                    <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black">
                      <Icon size={21} />
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center justify-between gap-2">
                      <span className="rounded-full bg-emerald-300 px-4 py-2 text-xs font-black text-black">{product.badge}</span>
                      <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-black text-black backdrop-blur">{product.price}</span>
                    </div>
                  </div>

                  <div className="flex min-h-[310px] flex-col p-5 sm:p-6">
                    <p className="text-xs font-black uppercase tracking-[0.25em] text-emerald-300/80">{product.category}</p>
                    <h3 className="mt-3 text-2xl font-black tracking-[-0.03em] text-white">{product.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-gray-300">{product.description}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {["Custom", "Premium", "Growth Ready"].map((tag) => (
                        <span key={tag} className="rounded-full bg-white/10 px-3 py-2 text-[11px] font-bold text-gray-300">{tag}</span>
                      ))}
                    </div>

                    <div className="mt-auto grid gap-3 pt-7 sm:grid-cols-[1fr_auto]">
                      <Link to={product.link} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-black transition hover:bg-emerald-300">
                        Learn More <ArrowUpRight size={15} />
                      </Link>
                      <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-white/10 px-5 py-3 text-sm font-black text-white transition hover:bg-white hover:text-black">
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
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 text-white shadow-2xl shadow-black/20 sm:p-5 md:rounded-[2.75rem] md:p-8">
          <div className="mb-8 grid gap-5 md:grid-cols-2 md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-emerald-300">Website Packages</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] sm:text-4xl md:text-6xl">Simple packages. Flexible ways to start.</h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-gray-300 md:justify-self-end">
              Choose the package that fits your stage. Pay in full for the cleanest price, split it around launch, or use monthly payments when you want to protect cash flow.
            </p>
          </div>

          <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [CreditCard, "Split payments", "Start without paying everything today"],
              [CalendarDays, "Hosting included", "1–2 years included depending on package"],
              [ShieldCheck, "Launch support", "Help after your site goes live"],
              [TrendingUp, "Lead focused", "Built around trust, action, and growth"],
            ].map(([Icon, title, text]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-black/25 p-4">
                <Icon className="text-emerald-300" size={20} />
                <p className="mt-3 text-sm font-black text-white">{title}</p>
                <p className="mt-1 text-xs leading-relaxed text-gray-400">{text}</p>
              </div>
            ))}
          </div>

          <div className="grid items-stretch gap-5 lg:grid-cols-3">
            {bundles.map((bundle, i) => (
              <motion.div
                key={bundle.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`relative flex h-full flex-col overflow-hidden rounded-[2rem] border p-5 sm:p-6 ${
                  bundle.highlight
                    ? "border-emerald-300 bg-emerald-300 text-black shadow-2xl shadow-emerald-500/20 lg:-translate-y-4"
                    : "border-white/10 bg-black/30 text-white"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] ${bundle.highlight ? "bg-black text-white" : "bg-white/10 text-emerald-300"}`}>
                    <Package size={14} />
                    {bundle.badge}
                  </div>
                  {bundle.highlight && <div className="rounded-full bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-black">Best Value</div>}
                </div>

                <h3 className="mt-5 text-2xl font-black tracking-[-0.03em]">{bundle.name}</h3>
                <p className={`mt-2 text-sm font-bold leading-relaxed md:min-h-[64px] ${bundle.highlight ? "text-black/70" : "text-gray-400"}`}>{bundle.bestFor}</p>

                <div className="mt-6 rounded-[1.5rem] border border-current/10 bg-white/10 p-4">
                  <div className="flex items-end gap-2">
                    <p className="text-5xl font-black tracking-tight">{bundle.price}</p>
                    <p className={`mb-2 text-sm font-bold ${bundle.highlight ? "text-black/65" : "text-gray-400"}`}>starting</p>
                  </div>
                  <p className={`mt-2 text-xs font-black uppercase tracking-[0.16em] ${bundle.highlight ? "text-black/60" : "text-emerald-300"}`}>{bundle.micro}</p>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <div className={`rounded-3xl p-4 ${bundle.highlight ? "bg-black/10" : "bg-white/[0.06]"}`}>
                    <p className="text-xs font-black uppercase tracking-[0.18em] opacity-60">Included</p>
                    <p className="mt-2 text-sm font-black">{bundle.hosting}</p>
                    <p className={`mt-1 text-xs font-semibold ${bundle.highlight ? "text-black/60" : "text-gray-400"}`}>{bundle.support}</p>
                  </div>
                  <div className={`rounded-3xl p-4 ${bundle.highlight ? "bg-black text-white" : "bg-emerald-300 text-black"}`}>
                    <p className="text-xs font-black uppercase tracking-[0.18em] opacity-70">Best option</p>
                    <p className="mt-2 text-sm font-black">Pay in full and save</p>
                    <p className="mt-1 text-xs font-semibold opacity-70">No financing markup</p>
                  </div>
                </div>

                <div className="mt-6 flex-1 space-y-3">
                  {bundle.includes.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle size={17} className="mt-0.5 shrink-0" />
                      <span className="text-sm font-semibold leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                <div className={`mt-7 rounded-[1.5rem] p-4 ${bundle.highlight ? "bg-black/10" : "bg-white/[0.06]"}`}>
                  <p className="text-xs font-black uppercase tracking-[0.2em] opacity-60">Payment Options</p>
                  <div className="mt-4 space-y-3">
                    {[
                      ["Pay in full", bundle.payInFull],
                      ["Split payment", bundle.splitPay],
                      ["Monthly", bundle.monthly],
                    ].map(([label, value]) => (
                      <div key={label} className="flex flex-col gap-1 rounded-2xl border border-current/10 bg-white/10 p-3 sm:flex-row sm:items-center sm:justify-between">
                        <span className="text-xs font-black uppercase tracking-[0.14em] opacity-60">{label}</span>
                        <span className="text-sm font-black">{value}</span>
                      </div>
                    ))}
                  </div>
                  <p className={`mt-3 text-xs font-semibold ${bundle.highlight ? "text-black/60" : "text-gray-400"}`}>{bundle.totalNote}</p>
                </div>

                <p className={`mt-4 text-xs font-semibold leading-relaxed ${bundle.highlight ? "text-black/65" : "text-gray-400"}`}>{bundle.valueNote}</p>

                <Link to="/contact" className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-4 text-sm font-black transition hover:-translate-y-1 ${bundle.highlight ? "bg-black text-white" : "bg-white text-black hover:bg-emerald-300"}`}>
                  Request {bundle.name}
                  <ArrowUpRight size={15} />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 rounded-[2rem] border border-white/10 bg-black/30 p-5 sm:p-6">
            <div className="grid gap-4 md:grid-cols-[0.85fr_1.15fr] md:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.3em] text-emerald-300">Simple policy</p>
                <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] text-white">Monthly plans require a setup payment before work begins.</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-300">
                This protects the project, keeps delivery serious, and gives clients a lower upfront path without making Techuvo carry all the risk. Hosting renewals after the included period can be billed yearly or monthly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STORE PROMISE */}
      <section className="px-4 py-10 sm:px-6 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            [Zap, "Scalable Systems", "Built to support growth beyond the first launch."],
            [MousePointerClick, "Conversion Focused", "Structured to generate leads, trust, and action."],
            [Star, "Future Ready", "Designed around modern web, automation, and AI tools."],
          ].map(([Icon, title, text]) => (
            <div key={title} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/10">
              <Icon className="text-emerald-300" size={24} />
              <h3 className="mt-5 text-2xl font-black text-white">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TECHUVO LABS */}
      <section className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="lg:sticky lg:top-8">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-emerald-300">Techuvo Labs</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-7xl">Experimental products currently in development.</h2>
              <p className="mt-5 text-sm leading-relaxed text-gray-300 md:text-base">
                A preview of the software systems Techuvo is building next — designed to create more value beyond websites.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {labs.map((item) => (
                <div key={item} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:bg-white/[0.07]">
                  <span className="rounded-full bg-emerald-300/10 px-3 py-2 text-xs font-black text-emerald-300">COMING SOON</span>
                  <h3 className="mt-5 text-2xl font-black text-white">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BUILT FOR MODERN BUSINESS */}
      <section className="px-4 py-10 sm:px-6 md:py-16">
        <div className="mx-auto max-w-7xl rounded-[2.75rem] bg-emerald-300 p-8 text-black shadow-2xl shadow-emerald-500/20 md:p-16">
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <h2 className="text-4xl font-black tracking-[-0.05em] md:text-7xl">Built for modern business.</h2>
            <p className="max-w-3xl text-base font-semibold leading-relaxed text-black/70 md:text-lg">
              Every Techuvo product is designed to save time, generate leads, improve customer experience, and increase operational efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-16 pt-4 sm:px-6 md:pb-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white text-black shadow-2xl shadow-black/30 md:rounded-[2.5rem]">
          <div className="grid items-stretch lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-7 sm:p-10 md:p-14">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-black/50">Not sure what to choose?</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.05em] sm:text-5xl md:text-6xl">Invest in systems that scale.</h2>
              <p className="mt-5 max-w-xl text-base font-medium leading-relaxed text-black/70 md:text-lg">
                Whether you need a website, funnel, automation, AI tool, or full digital upgrade, Techuvo can help you choose the right starting point.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-8 py-4 text-sm font-black text-white transition hover:-translate-y-1">
                  Get Your Quote
                  <ArrowUpRight size={16} />
                </Link>
                <Link to="/portfolio" className="inline-flex items-center justify-center rounded-full border border-black/10 px-8 py-4 text-sm font-black text-black transition hover:bg-black hover:text-white">
                  View Work
                </Link>
              </div>
            </div>

            <div className="bg-black p-6 text-white sm:p-8 md:p-10">
              <div className="grid h-full content-center gap-4">
                {["Website", "Automation", "AI", "Branding"].map((item) => (
                  <div key={item} className="group flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.06] px-6 py-5 text-xl font-black text-emerald-300 transition hover:bg-emerald-300 hover:text-black">
                    {item}
                    <ArrowUpRight size={18} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#020403] px-4 py-12 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-black text-white">Techuvo</h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-400">
              Websites, brand systems, automation tools, and digital infrastructure for businesses that want to look more established online.
            </p>
          </div>

          <div>
            <p className="font-black text-white">Pages</p>
            <div className="mt-4 space-y-3 text-sm text-gray-400">
              <Link to="/" className="block hover:text-emerald-300">Home</Link>
              <Link to="/services" className="block hover:text-emerald-300">Services</Link>
              <Link to="/portfolio" className="block hover:text-emerald-300">Portfolio</Link>
              <Link to="/shop" className="block hover:text-emerald-300">Shop</Link>
              <Link to="/contact" className="block hover:text-emerald-300">Contact</Link>
            </div>
          </div>

          <div>
            <p className="font-black text-white">Services</p>
            <div className="mt-4 space-y-3 text-sm text-gray-400">
              <p>Website Development</p>
              <p>Brand Identity</p>
              <p>Automation Systems</p>
              <p>AI Business Tools</p>
            </div>
          </div>

          <div>
            <p className="font-black text-white">Contact</p>
            <div className="mt-4 space-y-3 text-sm text-gray-400">
              <Link to="/contact" className="block hover:text-emerald-300">Get a Quote</Link>
              <a href="tel:3130000000" className="flex items-center gap-2 hover:text-emerald-300">
                <Phone size={15} />
                Add your phone number
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs text-gray-500 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Techuvo. All rights reserved.</p>
          <p>Digital systems for modern businesses.</p>
        </div>
      </footer>
    </div>
  );
}
