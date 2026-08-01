import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Discovery",
    label: "Understand the business",
    description:
      "We begin by learning what your company does, who it serves, what is currently not working, and what the project needs to accomplish.",
    details: [
      "Business goals",
      "Target audience",
      "Competitor review",
      "Project requirements",
    ],
  },
  {
    number: "02",
    title: "Strategy",
    label: "Define the direction",
    description:
      "The site structure, content priorities, conversion path, visual tone, and technical approach are mapped before design begins.",
    details: [
      "Page architecture",
      "User journey",
      "Content hierarchy",
      "Conversion planning",
    ],
  },
  {
    number: "03",
    title: "Design",
    label: "Shape the experience",
    description:
      "The visual system is created around clarity, trust, responsiveness, and the impression your company needs to make.",
    details: [
      "Responsive layouts",
      "Typography",
      "Color system",
      "Interface direction",
    ],
  },
  {
    number: "04",
    title: "Development",
    label: "Build the system",
    description:
      "The approved direction is developed into a responsive, organized, and scalable website using reusable components.",
    details: [
      "Front-end development",
      "Mobile responsiveness",
      "Reusable components",
      "Performance checks",
    ],
  },
  {
    number: "05",
    title: "Launch",
    label: "Prepare for growth",
    description:
      "The project is reviewed, tested, connected, and prepared for real visitors before the final launch.",
    details: [
      "Final review",
      "Device testing",
      "Domain connection",
      "Launch support",
    ],
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

function Process() {
  return (
    <section
      aria-labelledby="process-heading"
      className="section architecture-grid relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute right-[-10rem] top-20 h-[28rem] w-[28rem] rounded-full bg-blue-100/60 blur-[120px]"
      />

      <div className="site-container relative">
        <div className="section-header">
          <div className="section-header-copy">
            <span className="eyebrow">The Process</span>

            <h2 id="process-heading" className="section-heading">
              A clear path from first conversation to final launch.
            </h2>
          </div>

          <p className="section-header-description">
            Every phase has a purpose. The process keeps strategy, content,
            design, development, and launch decisions connected so the final
            website feels intentional rather than assembled.
          </p>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-[2.4rem] top-10 hidden h-[calc(100%-5rem)] w-px bg-gradient-to-b from-blue-300 via-blue-200 to-transparent lg:block"
          />

          <div className="space-y-5">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className="group relative grid gap-5 rounded-[1.65rem] border border-slate-200 bg-white p-5 shadow-[0_14px_45px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_65px_rgba(15,23,42,0.11)] sm:p-7 lg:grid-cols-[5rem_1fr_0.85fr] lg:items-start"
              >
                <div className="relative z-10">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-blue-200 bg-blue-50 text-sm font-extrabold text-blue-700 shadow-sm">
                    {step.number}
                  </span>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.15em] text-blue-700">
                      Stage {step.number}
                    </p>

                    <span className="h-px w-10 bg-blue-200" />

                    <p className="text-xs font-bold text-slate-500">
                      {step.label}
                    </p>
                  </div>

                  <h3 className="mt-4 text-2xl font-bold tracking-[-0.04em] text-slate-950 sm:text-3xl">
                    {step.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                    {step.description}
                  </p>
                </div>

                <div className="rounded-[1.3rem] border border-slate-200 bg-slate-50 p-4 sm:p-5">
                  <p className="text-[0.66rem] font-extrabold uppercase tracking-[0.14em] text-slate-500">
                    Included in this stage
                  </p>

                  <div className="mt-4 space-y-3">
                    {step.details.map((detail) => (
                      <div
                        key={detail}
                        className="flex items-center gap-3 text-sm font-semibold text-slate-700"
                      >
                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-700">
                          <CheckIcon />
                        </span>

                        {detail}
                      </div>
                    ))}
                  </div>

                  <div className="mt-5">
                    <div className="flex items-center justify-between text-[0.62rem] font-bold uppercase tracking-[0.12em] text-slate-400">
                      <span>Progress</span>
                      <span>{20 * (index + 1)}%</span>
                    </div>

                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-200">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-sky-400"
                        style={{
                          width: `${20 * (index + 1)}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 rounded-[1.7rem] border border-slate-200 bg-slate-950 p-6 text-white sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-blue-300">
              Start at stage one
            </p>

            <h3 className="mt-3 max-w-3xl text-2xl font-bold tracking-[-0.04em] sm:text-3xl">
              Bring the business goal. Techuvo will help organize the path from
              idea to launch.
            </h3>
          </div>

          <Link
            to="/contact"
            className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-extrabold text-slate-950 transition hover:-translate-y-1 hover:bg-blue-50 sm:w-auto"
          >
            Begin your project
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Process;