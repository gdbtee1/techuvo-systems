import { Link } from "react-router-dom";

const projects = [
  {
    number: "01",
    title: "Carolina Brake & Diagnostics",
    category: "Automotive services",
    description:
      "A modern service website structured to improve credibility, explain core services clearly, and make customer inquiries easier.",
    result: "Stronger local presentation",
    accent: "blue",
  },
  {
    number: "02",
    title: "Golden Cares",
    category: "Care services",
    description:
      "A warm and professional digital experience designed to communicate services clearly and build confidence with families.",
    result: "Clearer service communication",
    accent: "sky",
  },
  {
    number: "03",
    title: "Kids First",
    category: "Education",
    description:
      "A responsive website system that helps families understand programs, values, and enrollment information across every device.",
    result: "Simplified family journey",
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

function ProjectInterface({ accent }) {
  const styles = {
    blue: {
      background: "from-blue-100 via-white to-blue-50",
      primary: "bg-blue-600",
      secondary: "bg-blue-200",
      soft: "bg-blue-50",
      text: "text-blue-700",
    },
    sky: {
      background: "from-sky-100 via-white to-cyan-50",
      primary: "bg-sky-500",
      secondary: "bg-sky-200",
      soft: "bg-sky-50",
      text: "text-sky-700",
    },
    slate: {
      background: "from-slate-200 via-white to-slate-100",
      primary: "bg-slate-950",
      secondary: "bg-slate-300",
      soft: "bg-slate-100",
      text: "text-slate-700",
    },
  };

  const current = styles[accent];

  return (
    <div
      className={`relative aspect-[1.3/1] overflow-hidden rounded-[1.35rem] border border-slate-200 bg-gradient-to-br ${current.background}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37,99,235,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.045) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="absolute inset-x-[6%] bottom-[7%] top-[8%] overflow-hidden rounded-[1.1rem] border border-white/90 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.14)]">
        <div className="flex h-10 items-center justify-between border-b border-slate-200 px-3">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-slate-300" />
            <span className="h-2 w-2 rounded-full bg-slate-300" />
            <span className="h-2 w-2 rounded-full bg-slate-300" />
          </div>

          <span className="h-1.5 w-20 rounded-full bg-slate-200" />
        </div>

        <div className="p-4 sm:p-5">
          <div className="flex items-center justify-between gap-4">
            <span className={`h-8 w-8 rounded-lg ${current.primary}`} />

            <div className="flex gap-2">
              <span className="h-2 w-10 rounded-full bg-slate-200" />
              <span className="h-2 w-10 rounded-full bg-slate-200" />
              <span className="h-2 w-10 rounded-full bg-slate-200" />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-[1.1fr_0.9fr] items-center gap-4">
            <div>
              <span className="block h-4 w-full rounded-full bg-slate-950" />
              <span className="mt-2 block h-4 w-4/5 rounded-full bg-slate-950" />

              <span className="mt-4 block h-2 w-full rounded-full bg-slate-200" />
              <span className="mt-2 block h-2 w-5/6 rounded-full bg-slate-200" />

              <div className="mt-5 flex gap-2">
                <span className={`h-8 w-20 rounded-full ${current.primary}`} />
                <span className="h-8 w-20 rounded-full border border-slate-200 bg-white" />
              </div>
            </div>

            <div className={`h-28 rounded-2xl ${current.secondary}`} />
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2">
            <span className={`h-14 rounded-xl ${current.soft}`} />
            <span className="h-14 rounded-xl bg-slate-100" />
            <span className={`h-14 rounded-xl ${current.soft}`} />
          </div>
        </div>
      </div>

      <div className="absolute bottom-[8%] right-[3%] h-[45%] w-[19%] rounded-[1rem] border border-white/90 bg-white p-1.5 shadow-[0_18px_45px_rgba(15,23,42,0.16)]">
        <div className="h-full rounded-[0.72rem] bg-slate-50 p-2">
          <span className={`block h-5 w-5 rounded-md ${current.primary}`} />

          <span className="mt-3 block h-2 w-full rounded-full bg-slate-200" />
          <span className="mt-1.5 block h-2 w-4/5 rounded-full bg-slate-200" />

          <span className={`mt-4 block h-12 rounded-lg ${current.secondary}`} />
          <span className="mt-3 block h-6 rounded-full bg-slate-950" />
        </div>
      </div>
    </div>
  );
}

function FeaturedProjects() {
  return (
    <section
      aria-labelledby="featured-projects-heading"
      className="section relative overflow-hidden bg-white"
    >
      <div
        aria-hidden="true"
        className="absolute left-[-9rem] top-1/3 h-[24rem] w-[24rem] rounded-full bg-blue-100/60 blur-[110px]"
      />

      <div className="site-container relative">
        <div className="section-header">
          <div className="section-header-copy">
            <span className="eyebrow">Selected Work</span>

            <h2
              id="featured-projects-heading"
              className="section-heading"
            >
              Real businesses. Clearer digital experiences.
            </h2>
          </div>

          <p className="section-header-description">
            Each project is shaped around the client’s services, audience, and
            business goals. The design changes, but the standard remains the
            same: clarity, credibility, responsiveness, and action.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-12">
          <article className="group rounded-[1.75rem] border border-slate-200 bg-slate-50 p-4 shadow-[0_18px_55px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_75px_rgba(15,23,42,0.13)] sm:p-5 lg:col-span-7">
            <ProjectInterface accent={projects[0].accent} />

            <div className="grid gap-6 p-2 pt-6 sm:p-4 sm:pt-7 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-extrabold uppercase tracking-[0.15em] text-blue-700">
                    Project {projects[0].number}
                  </span>

                  <span className="h-px w-10 bg-blue-200" />

                  <span className="text-xs font-bold text-slate-500">
                    {projects[0].category}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-bold tracking-[-0.04em] text-slate-950 sm:text-3xl">
                  {projects[0].title}
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                  {projects[0].description}
                </p>

                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-2 text-xs font-extrabold text-blue-700">
                  Result: {projects[0].result}
                </div>
              </div>

              <Link
                to="/portfolio"
                className="button button-secondary shrink-0"
              >
                View project
                <ArrowIcon />
              </Link>
            </div>
          </article>

          <div className="grid gap-5 lg:col-span-5">
            {projects.slice(1).map((project) => (
              <article
                key={project.title}
                className="group rounded-[1.65rem] border border-slate-200 bg-white p-4 shadow-[0_14px_45px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_65px_rgba(15,23,42,0.12)]"
              >
                <ProjectInterface accent={project.accent} />

                <div className="px-1 pb-1 pt-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-blue-700">
                      Project {project.number}
                    </span>

                    <span className="text-[0.68rem] font-bold text-slate-400">
                      /
                    </span>

                    <span className="text-[0.68rem] font-bold uppercase tracking-[0.1em] text-slate-500">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="mt-3 text-xl font-bold tracking-[-0.035em] text-slate-950">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-xs font-bold text-slate-500">
                      {project.result}
                    </span>

                    <Link
                      to="/portfolio"
                      className="inline-flex items-center gap-2 text-sm font-extrabold text-blue-700 transition group-hover:gap-3"
                    >
                      Explore
                      <ArrowIcon />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 rounded-[1.6rem] border border-slate-200 bg-slate-950 p-6 text-white sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-blue-300">
              Portfolio directory
            </p>

            <h3 className="mt-3 max-w-3xl text-2xl font-bold tracking-[-0.04em] sm:text-3xl">
              Explore more client websites, industries, and project directions.
            </h3>
          </div>

          <Link
            to="/portfolio"
            className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-extrabold text-slate-950 transition hover:-translate-y-1 hover:bg-blue-50 sm:w-auto"
          >
            View full portfolio
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;