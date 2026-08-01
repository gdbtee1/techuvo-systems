import { Link } from "react-router-dom";

const receptionHighlights = [
  {
    number: "01",
    title: "Clear positioning",
    description:
      "Visitors should understand what your business does, who it serves, and why it matters within seconds.",
  },
  {
    number: "02",
    title: "Premium presentation",
    description:
      "Every page is designed to make your company feel established, trustworthy, and ready for larger opportunities.",
  },
  {
    number: "03",
    title: "Built for action",
    description:
      "Strong structure, responsive design, and clear calls to action guide visitors toward becoming real leads.",
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

function ReceptionRoom() {
  return (
    <section
      id="reception"
      aria-labelledby="reception-heading"
      className="section relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute left-[-10rem] top-20 h-[24rem] w-[24rem] rounded-full bg-blue-100/70 blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-[-8rem] right-[-8rem] h-[22rem] w-[22rem] rounded-full bg-sky-100/60 blur-[110px]"
      />

      <div className="site-container relative">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <span className="room-number">ROOM 01</span>

              <span className="h-px w-12 bg-gradient-to-r from-blue-600 to-transparent" />

              <span className="room-status">Open</span>
            </div>

            <span className="eyebrow mt-7">Reception</span>

            <h2
              id="reception-heading"
              className="section-heading mt-5"
            >
              Welcome to a better way to present your business online.
            </h2>

            <p className="body-large mt-6">
              Techuvo creates modern digital experiences that help businesses
              communicate clearly, earn trust faster, and turn online attention
              into meaningful opportunities.
            </p>

            <p className="body-copy mt-5 max-w-2xl">
              We combine strategy, design, development, and practical business
              thinking to create websites that do more than look polished. Every
              project is built around your audience, your offer, and the next
              action you want visitors to take.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="button button-primary">
                Start a project
                <ArrowIcon />
              </Link>

              <Link to="/portfolio" className="button button-secondary">
                Explore our work
                <ArrowIcon />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {[
                "Custom strategy",
                "Responsive design",
                "Direct communication",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm font-semibold text-slate-600"
                >
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-blue-50 text-blue-700">
                    <CheckIcon />
                  </span>

                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="surface-card relative overflow-hidden p-3 sm:p-4">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-60"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(37,99,235,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.045) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              <div className="relative overflow-hidden rounded-[1.4rem] border border-slate-200 bg-white">
                <div className="flex min-h-14 items-center justify-between border-b border-slate-200 px-4 sm:px-5">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  </div>

                  <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.14em] text-slate-400">
                    Reception interface
                  </span>
                </div>

                <div className="p-4 sm:p-6">
                  <div className="rounded-[1.35rem] bg-slate-950 p-5 text-white sm:p-7">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[0.65rem] font-extrabold uppercase tracking-[0.15em] text-blue-300">
                        Techuvo entry point
                      </span>

                      <span className="inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-slate-400">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        Live
                      </span>
                    </div>

                    <h3 className="mt-8 max-w-md text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
                      Your website should make the right first impression before
                      you ever speak.
                    </h3>

                    <div className="mt-8 grid gap-3 sm:grid-cols-3">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-2xl font-black tracking-[-0.04em]">
                          01
                        </p>
                        <p className="mt-2 text-xs font-semibold leading-5 text-slate-300">
                          Clarify your offer
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-2xl font-black tracking-[-0.04em]">
                          02
                        </p>
                        <p className="mt-2 text-xs font-semibold leading-5 text-slate-300">
                          Strengthen trust
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-2xl font-black tracking-[-0.04em]">
                          03
                        </p>
                        <p className="mt-2 text-xs font-semibold leading-5 text-slate-300">
                          Create action
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-4 md:grid-cols-3">
                    {receptionHighlights.map((item) => (
                      <article
                        key={item.number}
                        className="group rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50/60 hover:shadow-md"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-extrabold text-blue-700">
                            {item.number}
                          </span>

                          <span className="h-2 w-2 rounded-full bg-blue-500 opacity-60 transition group-hover:opacity-100" />
                        </div>

                        <h3 className="mt-5 text-base font-bold tracking-[-0.025em] text-slate-950">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {item.description}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="absolute -bottom-5 left-1/2 h-10 w-[75%] -translate-x-1/2 rounded-full bg-blue-500/10 blur-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReceptionRoom;