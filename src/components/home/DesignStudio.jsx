import { Link } from "react-router-dom";

const projects = [
  {
    title: "Carolina Brake & Diagnostics",
    category: "Automotive website",
    description:
      "A professional service website designed to make the company easier to trust, understand, and contact.",
    tags: ["Responsive", "Lead focused", "Service pages"],
    accent: "blue",
  },
  {
    title: "Golden Cares",
    category: "Care services website",
    description:
      "A warm, credible digital experience built to communicate services clearly and support family decision-making.",
    tags: ["Trust building", "Mobile first", "Clear navigation"],
    accent: "sky",
  },
  {
    title: "Kids First",
    category: "Education website",
    description:
      "A structured website experience designed to help families understand programs, values, and enrollment options.",
    tags: ["Education", "Accessible", "Conversion paths"],
    accent: "slate",
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

function ProjectVisual({ accent, title }) {
  const accentStyles = {
    blue: {
      shell: "from-blue-100 via-white to-blue-50",
      primary: "bg-blue-600",
      secondary: "bg-blue-200",
      soft: "bg-blue-50",
    },
    sky: {
      shell: "from-sky-100 via-white to-cyan-50",
      primary: "bg-sky-500",
      secondary: "bg-sky-200",
      soft: "bg-sky-50",
    },
    slate: {
      shell: "from-slate-200 via-white to-slate-100",
      primary: "bg-slate-900",
      secondary: "bg-slate-300",
      soft: "bg-slate-100",
    },
  };

  const styles = accentStyles[accent];

  return (
    <div
      className={`relative aspect-[1.18/1] overflow-hidden rounded-[1.35rem] border border-slate-200 bg-gradient-to-br ${styles.shell}`}
      aria-label={`${title} project preview`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37,99,235,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.045) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="absolute inset-x-[7%] bottom-[7%] top-[8%] overflow-hidden rounded-[1.15rem] border border-white/80 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.14)]">
        <div className="flex h-10 items-center justify-between border-b border-slate-200 px-3">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-slate-300" />
            <span className="h-2 w-2 rounded-full bg-slate-300" />
            <span className="h-2 w-2 rounded-full bg-slate-300" />
          </div>

          <span className="h-1.5 w-20 rounded-full bg-slate-200" />
        </div>

        <div className="grid h-[calc(100%-2.5rem)] grid-cols-[0.34fr_0.66fr]">
          <div className="border-r border-slate-200 p-3">
            <div className={`h-7 w-7 rounded-lg ${styles.primary}`} />

            <div className="mt-5 space-y-2">
              <span className="block h-2 w-full rounded-full bg-slate-200" />
              <span className="block h-2 w-4/5 rounded-full bg-slate-200" />
              <span className="block h-2 w-3/5 rounded-full bg-slate-200" />
            </div>

            <div className="mt-6 space-y-2">
              <span className={`block h-7 rounded-lg ${styles.soft}`} />
              <span className="block h-7 rounded-lg bg-slate-100" />
              <span className="block h-7 rounded-lg bg-slate-100" />
            </div>
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between">
              <span className="h-2 w-20 rounded-full bg-slate-200" />
              <span className={`h-7 w-16 rounded-full ${styles.primary}`} />
            </div>

            <div className="mt-5">
              <span className="block h-4 w-4/5 rounded-full bg-slate-950" />
              <span className="mt-2 block h-4 w-3/5 rounded-full bg-slate-950" />
              <span className="mt-3 block h-2 w-full rounded-full bg-slate-200" />
              <span className="mt-2 block h-2 w-5/6 rounded-full bg-slate-200" />
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2">
              <div className={`col-span-2 h-20 rounded-xl ${styles.secondary}`} />
              <div className="h-20 rounded-xl bg-slate-100" />
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="h-12 rounded-xl bg-slate-100" />
              <div className={`h-12 rounded-xl ${styles.soft}`} />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[11%] right-[4%] h-[32%] w-[19%] rounded-[1rem] border border-white/80 bg-white p-1.5 shadow-[0_18px_40px_rgba(15,23,42,0.16)]">
        <div className="h-full rounded-[0.7rem] bg-slate-50 p-2">
          <div className={`h-5 w-5 rounded-md ${styles.primary}`} />
          <div className="mt-3 h-2 w-full rounded-full bg-slate-200" />
          <div className="mt-1.5 h-2 w-3/4 rounded-full bg-slate-200" />
          <div className={`mt-4 h-14 rounded-lg ${styles.secondary}`} />
          <div className="mt-3 h-6 rounded-full bg-slate-900" />
        </div>
      </div>
    </div>
  );
}

function DesignStudio() {
  return (
    <section
      id="creative-studio"
      aria-labelledby="creative-studio-heading"
      className="section relative overflow-hidden bg-white"
    >
      <div
        aria-hidden="true"
        className="absolute left-[-8rem] top-1/3 h-[24rem] w-[24rem] rounded-full bg-sky-100/60 blur-[110px]"
      />

      <div className="site-container relative">
        <div className="section-header">
          <div className="section-header-copy">
            <div className="flex items-center gap-3">
              <span className="room-number">ROOM 04</span>
              <span className="h-px w-12 bg-gradient-to-r from-blue-600 to-transparent" />
              <span className="room-status">Projects displayed</span>
            </div>

            <span className="eyebrow">Creative Studio</span>

            <h2 id="creative-studio-heading" className="section-heading">
              Proof should be experienced, not just described.
            </h2>
          </div>

          <p className="section-header-description">
            The portfolio is where strategy becomes visible. Each project is
            shaped around the client’s industry, audience, services, and the
            impression the business needs to create.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-12">
          <article className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 p-4 shadow-[0_18px_55px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_75px_rgba(15,23,42,0.13)] sm:p-5 lg:col-span-8">
            <ProjectVisual
              accent={projects[0].accent}
              title={projects[0].title}
            />

            <div className="grid gap-6 p-2 pt-6 sm:p-4 sm:pt-7 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-blue-700">
                  {projects[0].category}
                </p>

                <h3 className="mt-3 text-2xl font-bold tracking-[-0.04em] text-slate-950 sm:text-3xl">
                  {projects[0].title}
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                  {projects[0].description}
                </p>

                <div className="tag-list mt-5">
                  {projects[0].tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                to="/portfolio"
                className="button button-secondary shrink-0"
              >
                View case study
                <ArrowIcon />
              </Link>
            </div>
          </article>

          <div className="grid gap-5 lg:col-span-4">
            {projects.slice(1).map((project) => (
              <article
                key={project.title}
                className="group rounded-[1.65rem] border border-slate-200 bg-white p-4 shadow-[0_14px_45px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_65px_rgba(15,23,42,0.12)]"
              >
                <ProjectVisual accent={project.accent} title={project.title} />

                <div className="px-1 pb-1 pt-5">
                  <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-blue-700">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-xl font-bold tracking-[-0.035em] text-slate-950">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {project.description}
                  </p>

                  <Link
                    to="/portfolio"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-blue-700 transition group-hover:gap-3"
                  >
                    Explore project
                    <ArrowIcon />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <article className="rounded-[1.35rem] border border-slate-200 bg-slate-50 p-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-blue-700">
              Industry awareness
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Every design direction should reflect how customers evaluate
              trust and credibility within that specific market.
            </p>
          </article>

          <article className="rounded-[1.35rem] border border-slate-200 bg-slate-50 p-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-blue-700">
              Responsive presentation
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Every visual system is planned to remain clear and intentional
              across phones, tablets, laptops, and larger displays.
            </p>
          </article>

          <article className="rounded-[1.35rem] border border-slate-200 bg-slate-50 p-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-blue-700">
              Business-focused design
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Strong visuals support real outcomes: better first impressions,
              stronger service clarity, and more confident inquiries.
            </p>
          </article>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-[1.6rem] border border-slate-200 bg-slate-950 p-6 text-white sm:p-8 lg:flex-row lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-blue-300">
              Explore the full portfolio
            </p>

            <h3 className="mt-3 text-2xl font-bold tracking-[-0.04em] sm:text-3xl">
              See how Techuvo approaches different industries and business
              needs.
            </h3>
          </div>

          <Link
            to="/portfolio"
            className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-extrabold text-slate-950 transition hover:-translate-y-1 hover:bg-blue-50 sm:w-auto"
          >
            View all projects
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default DesignStudio;