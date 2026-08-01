import { Link } from "react-router-dom";

const reasons = [
  {
    number: "01",
    title: "Strategy before styling",
    description:
      "Every project begins with your audience, offer, goals, and the action your website needs visitors to take.",
  },
  {
    number: "02",
    title: "Built around your business",
    description:
      "Your website should reflect your actual company, not look like a generic template with your logo added.",
  },
  {
    number: "03",
    title: "Responsive from the start",
    description:
      "Layouts are designed for phones, tablets, laptops, and large displays instead of being repaired afterward.",
  },
  {
    number: "04",
    title: "Clear communication",
    description:
      "You receive direct updates, organized next steps, and a clear understanding of where the project stands.",
  },
  {
    number: "05",
    title: "Scalable structure",
    description:
      "Reusable components and organized page systems make it easier to add services, locations, and future features.",
  },
  {
    number: "06",
    title: "Focused on real outcomes",
    description:
      "Every design decision should improve trust, clarity, lead generation, or the way your business operates.",
  },
];

const standards = [
  "Professional first impression",
  "Clear service communication",
  "Strong mobile usability",
  "Consistent visual identity",
  "Conversion-focused structure",
  "Long-term expansion readiness",
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="button-icon"
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

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        d="m5 10.5 3 3L15 6.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function WhyChooseUs() {
  return (
    <section
      aria-labelledby="why-techuvo-heading"
      className="section relative overflow-hidden bg-white"
    >
      <div
        aria-hidden="true"
        className="absolute left-[-10rem] top-24 h-[26rem] w-[26rem] rounded-full bg-blue-100/60 blur-[115px]"
      />

      <div className="site-container relative">
        <div className="section-header">
          <div className="section-header-copy">
            <span className="eyebrow">Why Techuvo</span>

            <h2 id="why-techuvo-heading" className="section-heading">
              A digital partner built around clarity, quality, and growth.
            </h2>
          </div>

          <p className="section-header-description">
            Techuvo combines direct founder involvement, modern development,
            structured design, and practical business thinking to create
            websites that feel professional and remain useful long after launch.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-slate-950 p-6 text-white shadow-[0_28px_75px_rgba(15,23,42,0.16)] sm:p-8 lg:p-10">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                backgroundSize: "34px 34px",
              }}
            />

            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-blue-500/30 blur-[90px]"
            />

            <div className="relative flex h-full flex-col">
              <div className="flex items-center justify-between gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/10 text-blue-200">
                  <CheckIcon />
                </span>

                <span className="inline-flex items-center gap-2 text-[0.65rem] font-extrabold uppercase tracking-[0.14em] text-slate-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Quality standard active
                </span>
              </div>

              <div className="mt-10">
                <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-blue-300">
                  The Techuvo difference
                </p>

                <h3 className="mt-4 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
                  Your website should make your business easier to believe in.
                </h3>

                <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                  A strong digital presence does more than look modern. It
                  reduces uncertainty, answers questions, communicates value,
                  and helps customers feel confident enough to take the next
                  step.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {standards.map((standard, index) => (
                  <div
                    key={standard}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-4"
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-blue-500/20 text-xs font-extrabold text-blue-200">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm font-bold text-white">
                      {standard}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-10">
                <Link
                  to="/about"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-extrabold text-slate-950 transition hover:-translate-y-1 hover:bg-blue-50 sm:w-auto"
                >
                  Learn more about Techuvo
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason) => (
              <article
                key={reason.number}
                className="group rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_20px_55px_rgba(15,23,42,0.1)] sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-blue-200 bg-blue-50 text-xs font-extrabold text-blue-700">
                    {reason.number}
                  </span>

                  <span className="h-2 w-2 rounded-full bg-blue-500 opacity-60 transition group-hover:opacity-100" />
                </div>

                <h3 className="mt-6 text-xl font-bold tracking-[-0.035em] text-slate-950">
                  {reason.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 rounded-[1.65rem] border border-slate-200 bg-slate-50 p-5 sm:p-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-blue-700">
              Built for serious businesses
            </p>

            <h3 className="mt-3 max-w-3xl text-2xl font-bold tracking-[-0.04em] text-slate-950 sm:text-3xl">
              The goal is not just to launch a site. It is to strengthen the
              way your company presents itself everywhere.
            </h3>
          </div>

          <Link
            to="/contact"
            className="button button-primary w-full shrink-0 sm:w-auto"
          >
            Start your project
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;