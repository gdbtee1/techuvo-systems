import { Link } from "react-router-dom";

const actions = [
  "Website strategy",
  "Responsive development",
  "Brand direction",
  "Landing pages",
  "Local visibility",
  "Business automation",
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

function CallToAction() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="section relative overflow-hidden bg-white"
    >
      <div
        aria-hidden="true"
        className="absolute left-[-10rem] top-10 h-[28rem] w-[28rem] rounded-full bg-blue-100/70 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-[-10rem] right-[-8rem] h-[24rem] w-[24rem] rounded-full bg-sky-100/60 blur-[110px]"
      />

      <div className="site-container relative">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 px-5 py-8 text-white shadow-[0_35px_90px_rgba(15,23,42,0.2)] sm:px-8 sm:py-10 lg:px-12 lg:py-14">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />

          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/35 blur-[100px]"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-sky-400/20 blur-[100px]"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-[0.66rem] font-extrabold uppercase tracking-[0.15em] text-blue-200 backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  New projects open
                </span>

                <span className="text-[0.66rem] font-bold uppercase tracking-[0.14em] text-slate-500">
                  Techuvo // Project Intake
                </span>
              </div>

              <h2
                id="final-cta-heading"
                className="mt-6 max-w-4xl text-balance text-4xl font-bold tracking-[-0.055em] sm:text-5xl lg:text-6xl"
              >
                Let’s build something your customers remember.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Bring your business goals, current challenges, and the standard
                you want your company to represent. Techuvo will help shape the
                strategy, design, and digital system around them.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-extrabold text-slate-950 shadow-lg transition hover:-translate-y-1 hover:bg-blue-50 sm:w-auto"
                >
                  Start your project
                  <ArrowIcon />
                </Link>

                <Link
                  to="/portfolio"
                  className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-6 text-sm font-extrabold text-white backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/[0.1] sm:w-auto"
                >
                  View our work
                  <ArrowIcon />
                </Link>
              </div>
            </div>

            <div className="rounded-[1.55rem] border border-white/10 bg-white/[0.055] p-5 backdrop-blur-md sm:p-6">
              <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.15em] text-blue-300">
                Available capabilities
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {actions.map((action) => (
                  <div
                    key={action}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3"
                  >
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blue-500/20 text-blue-200">
                      <CheckIcon />
                    </span>

                    <span className="text-sm font-bold text-white">
                      {action}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-white/10 pt-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start xl:flex-row xl:items-center">
                  <div>
                    <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.14em] text-slate-500">
                      Direct contact
                    </p>

                    <a
                      href="mailto:hello@techuvo.dev"
                      className="mt-2 block text-sm font-bold text-white transition hover:text-blue-200"
                    >
                      hello@techuvo.dev
                    </a>
                  </div>

                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-[0.65rem] font-extrabold uppercase tracking-[0.12em] text-emerald-300">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    Intake active
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-10 border-t border-white/10 pt-6">
            <div className="flex flex-col gap-3 text-xs font-semibold text-slate-500 sm:flex-row sm:items-center sm:justify-between">
              <p>
                Websites, branding, landing pages, and digital systems for
                modern businesses.
              </p>

              <p className="font-extrabold uppercase tracking-[0.13em] text-blue-300">
                Built in Michigan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;