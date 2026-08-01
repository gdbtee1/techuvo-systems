import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Custom responsive websites designed around your audience, services, and business goals.",
    to: "/services/website-development",
    status: "Core system",
  },
  {
    number: "02",
    title: "Landing Pages",
    description:
      "Focused campaign pages built to turn ad traffic, offers, and promotions into clear actions.",
    to: "/services/landing-pages",
    status: "Conversion system",
  },
  {
    number: "03",
    title: "Brand Identity",
    description:
      "Visual direction, typography, color, and brand consistency that make your business feel established.",
    to: "/services/brand-identity",
    status: "Identity system",
  },
  {
    number: "04",
    title: "Automation Systems",
    description:
      "Practical digital workflows that reduce repetitive work and help your business operate more efficiently.",
    to: "/services/automation-systems",
    status: "Operations system",
  },
];

const processSteps = [
  {
    number: "01",
    label: "Discover",
  },
  {
    number: "02",
    label: "Structure",
  },
  {
    number: "03",
    label: "Design",
  },
  {
    number: "04",
    label: "Develop",
  },
  {
    number: "05",
    label: "Launch",
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

function CodeIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
    >
      <rect
        x="3.5"
        y="4.5"
        width="17"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M8 20h8M12 16.5V20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function MobileIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
    >
      <rect
        x="7"
        y="2.5"
        width="10"
        height="19"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M10.5 5h3M11 18.5h2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="m13 2-8 11h6l-1 9 9-12h-6V2Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function TechLab() {
  return (
    <section
      id="development-lab"
      aria-labelledby="development-lab-heading"
      className="section architecture-grid relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute right-[-10rem] top-16 h-[28rem] w-[28rem] rounded-full bg-blue-100/70 blur-[120px]"
      />

      <div className="site-container relative">
        <div className="section-header">
          <div className="section-header-copy">
            <div className="flex items-center gap-3">
              <span className="room-number">ROOM 03</span>

              <span className="h-px w-12 bg-gradient-to-r from-blue-600 to-transparent" />

              <span className="room-status">Systems online</span>
            </div>

            <span className="eyebrow">Development Lab</span>

            <h2
              id="development-lab-heading"
              className="section-heading"
            >
              Digital systems built to look polished and work reliably.
            </h2>
          </div>

          <p className="section-header-description">
            Techuvo combines business strategy, responsive design, front-end
            development, and practical automation to create tools that support
            real operations—not just visual presentation.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.to}
                to={service.to}
                className="group room-card min-h-[22rem]"
              >
                <div className="room-card-content">
                  <div className="room-card-header">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl border border-blue-200 bg-blue-50 text-xs font-extrabold text-blue-700">
                      {service.number}
                    </span>

                    <span className="room-status">
                      {service.status}
                    </span>
                  </div>

                  <div className="mt-6">
                    <h3 className="card-heading">
                      {service.title}
                    </h3>

                    <p className="body-copy mt-4">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-8">
                    <span className="inline-flex items-center gap-2 text-sm font-extrabold text-blue-700 transition group-hover:gap-3">
                      Explore service
                      <ArrowIcon />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="surface-card overflow-hidden p-3 sm:p-4">
            <div className="relative h-full min-h-[35rem] overflow-hidden rounded-[1.5rem] bg-slate-950 p-5 text-white sm:p-7">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.075) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.075) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />

              <div
                aria-hidden="true"
                className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/30 blur-[90px]"
              />

              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/10 text-blue-200">
                    <CodeIcon />
                  </div>

                  <div className="flex items-center gap-2 text-[0.64rem] font-extrabold uppercase tracking-[0.14em] text-slate-400">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    Build environment active
                  </div>
                </div>

                <div className="mt-10">
                  <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-blue-300">
                    Full project system
                  </p>

                  <h3 className="mt-4 max-w-xl text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
                    From idea to launch, every stage stays connected.
                  </h3>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                    A stronger website comes from a stronger process. We connect
                    the business strategy, page structure, design system,
                    responsive development, and launch preparation into one
                    organized workflow.
                  </p>
                </div>

                <div className="mt-8 space-y-3">
                  {processSteps.map((step, index) => (
                    <div
                      key={step.number}
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.055] p-4 backdrop-blur-sm transition hover:bg-white/[0.09]"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-blue-500/20 text-xs font-extrabold text-blue-200">
                        {step.number}
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-sm font-bold text-white">
                            {step.label}
                          </span>

                          <span className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-slate-500">
                            Stage {index + 1}
                          </span>
                        </div>

                        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-sky-400"
                            style={{
                              width: `${35 + index * 14}%`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-4">
                    <MonitorIcon />

                    <p className="mt-4 text-sm font-bold">
                      Desktop-ready
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      Structured for large displays and professional browsing.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-4">
                    <MobileIcon />

                    <p className="mt-4 text-sm font-bold">
                      Mobile-first
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      Built to remain clear and usable on smaller screens.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-4">
                    <BoltIcon />

                    <p className="mt-4 text-sm font-bold">
                      Performance-minded
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      Clean architecture without unnecessary visual clutter.
                    </p>
                  </div>
                </div>

                <div className="mt-auto pt-8">
                  <Link
                    to="/contact"
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-extrabold text-slate-950 transition hover:-translate-y-1 hover:bg-blue-50 sm:w-auto"
                  >
                    Build your system
                    <ArrowIcon />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <article className="rounded-[1.35rem] border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-blue-700">
              Responsive architecture
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Layouts are planned across mobile, tablet, laptop, and large
              desktop sizes instead of being patched after development.
            </p>
          </article>

          <article className="rounded-[1.35rem] border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-blue-700">
              Reusable systems
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Shared components and consistent styling make the website easier
              to expand as your company adds pages, services, or locations.
            </p>
          </article>

          <article className="rounded-[1.35rem] border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-blue-700">
              Business alignment
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Every feature must support trust, communication, lead generation,
              content management, or operational efficiency.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default TechLab;