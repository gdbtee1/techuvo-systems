import { Link } from "react-router-dom";

const principles = [
  {
    number: "01",
    title: "Clarity before complexity",
    description:
      "Every project begins with the business goal, target audience, and action the website needs to create.",
  },
  {
    number: "02",
    title: "Design with purpose",
    description:
      "Visual decisions should strengthen trust, guide attention, and make the company easier to understand.",
  },
  {
    number: "03",
    title: "Build for growth",
    description:
      "The finished system should support future content, services, campaigns, and operational needs.",
  },
];

const metrics = [
  {
    value: "100%",
    label: "Responsive by default",
  },
  {
    value: "1:1",
    label: "Direct project communication",
  },
  {
    value: "24/7",
    label: "Digital presence working",
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

function StrategyIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        cx="12"
        cy="12"
        r="8.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle
        cx="12"
        cy="12"
        r="3.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="m14.5 9.5 4-4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function Boardroom() {
  return (
    <section
      id="boardroom"
      aria-labelledby="boardroom-heading"
      className="section relative overflow-hidden bg-white"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"
      />

      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="relative">
            <div className="surface-card overflow-hidden p-4 sm:p-5">
              <div className="relative overflow-hidden rounded-[1.45rem] bg-slate-950 p-5 text-white sm:p-7 lg:p-8">
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
                  className="absolute right-[-5rem] top-[-6rem] h-52 w-52 rounded-full bg-blue-500/25 blur-[80px]"
                />

                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/10 text-blue-200">
                      <StrategyIcon />
                    </div>

                    <div className="flex items-center gap-2 text-[0.66rem] font-extrabold uppercase tracking-[0.14em] text-slate-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      Strategy session active
                    </div>
                  </div>

                  <div className="mt-10">
                    <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-blue-300">
                      Executive direction
                    </p>

                    <h3 className="mt-4 max-w-xl text-3xl font-bold tracking-[-0.045em] sm:text-4xl lg:text-5xl">
                      Every digital decision should support a real business
                      objective.
                    </h3>

                    <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
                      We do not start with decoration. We start with the
                      customer, the offer, the competition, and the result the
                      business needs.
                    </p>
                  </div>

                  <div className="mt-10 grid gap-3 sm:grid-cols-3">
                    {metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-sm"
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

                  <div className="mt-8">
                    <div className="flex items-center justify-between text-[0.66rem] font-bold uppercase tracking-[0.12em] text-slate-500">
                      <span>Project alignment</span>
                      <span>Complete</span>
                    </div>

                    <div className="mt-3 flex gap-2">
                      <span className="h-2 flex-1 rounded-full bg-blue-500" />
                      <span className="h-2 flex-1 rounded-full bg-sky-400" />
                      <span className="h-2 flex-1 rounded-full bg-blue-300" />
                      <span className="h-2 flex-1 rounded-full bg-white/20" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="absolute -bottom-6 left-1/2 h-10 w-[72%] -translate-x-1/2 rounded-full bg-slate-950/10 blur-2xl"
            />
          </div>

          <div>
            <div className="flex items-center gap-3">
              <span className="room-number">ROOM 02</span>
              <span className="h-px w-12 bg-gradient-to-r from-blue-600 to-transparent" />
              <span className="room-status">In session</span>
            </div>

            <span className="eyebrow mt-7">Executive Boardroom</span>

            <h2
              id="boardroom-heading"
              className="section-heading mt-5"
            >
              Strategy that keeps the website connected to the business.
            </h2>

            <p className="body-large mt-6">
              The best website is not simply the one with the most effects. It
              is the one that makes the business easier to trust, understand,
              and choose.
            </p>

            <div className="mt-8 space-y-4">
              {principles.map((principle) => (
                <article
                  key={principle.number}
                  className="group rounded-[1.35rem] border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-md"
                >
                  <div className="flex gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-blue-200 bg-blue-50 text-xs font-extrabold text-blue-700">
                      {principle.number}
                    </span>

                    <div>
                      <h3 className="text-lg font-bold tracking-[-0.025em] text-slate-950">
                        {principle.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/about" className="button button-primary">
                Learn about Techuvo
                <ArrowIcon />
              </Link>

              <Link to="/pricing" className="button button-secondary">
                Review pricing
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-3 lg:mt-20">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-blue-700">
              Mission
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Help businesses compete more confidently through strong digital
              presentation and practical technology.
            </p>
          </div>

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-blue-700">
              Standard
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Every project should feel clear, intentional, responsive, and
              aligned with the company it represents.
            </p>
          </div>

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-blue-700">
              Direction
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Build systems that can evolve as the client gains customers,
              services, content, and larger opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Boardroom;