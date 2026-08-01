import { Link } from "react-router-dom";
import servicesOfficeImage from "../../assets/images/services-office.jpg";

const services = [
  {
    number: "01",
    title: "Website Development",
    shortTitle: "Websites",
    statement:
      "Custom websites designed to make your business look established and turn attention into inquiries.",
    description:
      "Responsive design, clear service communication, strategic calls to action, local search foundations, and scalable development.",
    to: "/services/website-development",
  },
  {
    number: "02",
    title: "Landing Pages",
    shortTitle: "Campaigns",
    statement:
      "Focused campaign experiences built around one audience, one offer, and one important action.",
    description:
      "Landing pages for paid ads, appointments, events, service promotions, lead generation, and product launches.",
    to: "/services/landing-pages",
  },
  {
    number: "03",
    title: "Brand Identity",
    shortTitle: "Identity",
    statement:
      "A connected visual direction that makes your company easier to recognize, remember, and trust.",
    description:
      "Logo direction, typography, color systems, digital assets, and practical brand standards for consistent presentation.",
    to: "/services/brand-identity",
  },
  {
    number: "04",
    title: "Automation Systems",
    shortTitle: "Systems",
    statement:
      "Digital workflows that reduce repetitive work and help opportunities move through your business faster.",
    description:
      "Lead routing, scheduling, CRM connections, notifications, follow-up systems, and custom operational workflows.",
    to: "/services/automation-systems",
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        d="M4.5 10h11m-4.25-4.25L15.5 10l-4.25 4.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function ServiceRow({ service, index }) {
  return (
    <article className="group relative border-t border-white/30 first:border-t-0">
      <div className="absolute inset-0 bg-white/0 transition-colors duration-500 group-hover:bg-white/10" />

      <div className="relative grid gap-8 py-9 sm:py-11 lg:grid-cols-[7rem_1fr_auto] lg:items-center lg:gap-10">
        <span className="text-sm font-black tracking-[0.2em] text-blue-700">
          {service.number}
        </span>

        <div className="max-w-4xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.17em] text-slate-600">
            {service.shortTitle}
          </p>

          <h3 className="mt-3 text-3xl font-black tracking-[-0.05em] text-slate-950 sm:text-4xl lg:text-5xl">
            {service.title}
          </h3>

          <p className="mt-4 max-w-3xl text-lg font-bold leading-8 tracking-[-0.015em] text-slate-900 sm:text-xl">
            {service.statement}
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-700 sm:text-base">
            {service.description}
          </p>
        </div>

        <Link
          to={service.to}
          aria-label={`Explore ${service.title}`}
          className="group/link inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-slate-950 bg-white/60 text-slate-950 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white lg:justify-self-end"
        >
          <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}

function OfficeMap() {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
      {/* Background photograph */}
      <img
        src={servicesOfficeImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Light atmospheric treatment */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-white/72 backdrop-blur-[1px]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-blue-50/55"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37,99,235,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.12) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto max-w-[100rem] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        {/* Section introduction */}
        <div className="grid gap-10 pb-16 lg:grid-cols-[1.1fr_0.7fr] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-blue-600" />

              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-700">
                What Techuvo Builds
              </p>
            </div>

            <h2 className="mt-6 max-w-5xl text-5xl font-black tracking-[-0.065em] text-slate-950 sm:text-6xl lg:text-[5.5rem] lg:leading-[0.94]">
              Digital systems shaped around your business.
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-xl text-base leading-8 text-slate-700 sm:text-lg">
              We connect design, development, branding, and automation to
              strengthen the complete customer experience—not just one screen.
            </p>

            <Link
              to="/portfolio"
              className="group mt-6 inline-flex items-center gap-3 text-sm font-extrabold text-blue-700"
            >
              View selected work
              <ArrowIcon />
            </Link>
          </div>
        </div>

        {/* Large editorial service directory */}
        <div className="border-y border-slate-950/25">
          {services.map((service, index) => (
            <ServiceRow
              key={service.number}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-12 grid gap-8 border border-white/60 bg-white/55 p-6 shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.17em] text-blue-700">
              One connected project
            </p>

            <p className="mt-3 max-w-3xl text-xl font-black tracking-[-0.035em] text-slate-950 sm:text-2xl">
              Combine your website, identity, campaign pages, and business
              workflows into one organized digital system.
            </p>
          </div>

          <Link
            to="/contact"
            className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-blue-600 px-6 text-sm font-extrabold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
          >
            Discuss your project
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default OfficeMap;