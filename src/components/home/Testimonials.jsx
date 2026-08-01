import { Link } from "react-router-dom";

const clientNames = [
  "Carolina Brake & Diagnostics",
  "Golden Cares",
  "Kids First",
  "Monroe Media TV",
  "Pen Game Press",
  "Hubby Hub",
];

const experienceSignals = [
  {
    number: "01",
    title: "Direct communication",
    description:
      "Clients communicate directly with Techuvo throughout strategy, design, development, revisions, and launch.",
  },
  {
    number: "02",
    title: "Visible progress",
    description:
      "Projects move through clear stages so clients can understand what has been completed and what comes next.",
  },
  {
    number: "03",
    title: "Responsive delivery",
    description:
      "Every website is built to remain usable, readable, and visually consistent across mobile and desktop devices.",
  },
];

const trustMetrics = [
  {
    value: "1:1",
    label: "Project communication",
  },
  {
    value: "100%",
    label: "Responsive builds",
  },
  {
    value: "5",
    label: "Structured project stages",
  },
  {
    value: "6+",
    label: "Industries supported",
  },
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

function StarIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="m10 2.4 2.28 4.62 5.1.74-3.69 3.6.87 5.08L10 14.04l-4.56 2.4.87-5.08-3.69-3.6 5.1-.74L10 2.4Z" />
    </svg>
  );
}

function Testimonials() {
  return (
    <section
      aria-labelledby="client-trust-heading"
      className="section relative overflow-hidden bg-white"
    >
      <div
        aria-hidden="true"
        className="absolute left-[-10rem] top-20 h-[26rem] w-[26rem] rounded-full bg-blue-100/60 blur-[115px]"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-[-9rem] right-[-8rem] h-[24rem] w-[24rem] rounded-full bg-sky-100/60 blur-[110px]"
      />

      <div className="site-container relative">
        <div className="section-header">
          <div className="section-header-copy">
            <span className="eyebrow">Client Confidence</span>

            <h2 id="client-trust-heading" className="section-heading">
              Trust is built through the work and the experience around it.
            </h2>
          </div>

          <p className="section-header-description">
            A professional website matters, but so does the process used to
            create it. Techuvo focuses on clear communication, structured
            delivery, responsive design, and work that reflects the business
            behind it.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
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

            <div className="relative">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-blue-300">
                    Businesses supported
                  </p>

                  <h3 className="mt-3 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
                    Built across different industries and customer journeys.
                  </h3>
                </div>

                <div className="flex shrink-0 items-center gap-1 text-amber-300">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <StarIcon key={index} />
                  ))}
                </div>
              </div>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Techuvo has created digital work for automotive businesses,
                care providers, education organizations, authors, media
                companies, and other service-based organizations.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {clientNames.map((client, index) => (
                  <div
                    key={client}
                    className="flex min-h-16 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3 backdrop-blur-sm"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-blue-500/20 text-xs font-extrabold text-blue-200">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm font-bold leading-5 text-white">
                      {client}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {trustMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.055] p-4"
                  >
                    <p className="text-2xl font-black tracking-[-0.045em]">
                      {metric.value}
                    </p>

                    <p className="mt-2 text-xs font-semibold leading-5 text-slate-400">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            {experienceSignals.map((signal) => (
              <article
                key={signal.number}
                className="group rounded-[1.55rem] border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_22px_60px_rgba(15,23,42,0.1)] sm:p-6"
              >
                <div className="grid gap-5 sm:grid-cols-[3.5rem_1fr]">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-blue-200 bg-blue-50 text-sm font-extrabold text-blue-700">
                    {signal.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-bold tracking-[-0.035em] text-slate-950">
                      {signal.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {signal.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}

            <div className="rounded-[1.55rem] border border-blue-200 bg-blue-50/70 p-5 sm:p-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-blue-700">
                Verified client feedback
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-[-0.04em] text-slate-950">
                Real reviews should remain connected to their original source.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                The website can later connect directly to Techuvo’s verified
                Google Business Profile reviews so visitors can view authentic
                feedback without relying on edited or unattributed quotes.
              </p>

              <div className="mt-5 flex items-center gap-3 text-sm font-bold text-blue-700">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white">
                  <CheckIcon />
                </span>

                Authentic review integration ready
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 rounded-[1.65rem] border border-slate-200 bg-slate-50 p-5 sm:p-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-blue-700">
              Become the next project
            </p>

            <h3 className="mt-3 max-w-3xl text-2xl font-bold tracking-[-0.04em] text-slate-950 sm:text-3xl">
              Give your business a digital presence customers can understand
              and trust.
            </h3>
          </div>

          <Link
            to="/contact"
            className="button button-primary w-full shrink-0 sm:w-auto"
          >
            Start a project
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;