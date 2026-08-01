import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Custom responsive websites designed around your audience, services, and business goals.",
    to: "/services/website-development",
    label: "Core digital presence",
    size: "lg:col-span-7",
    theme: "blue",
  },
  {
    number: "02",
    title: "Landing Pages",
    description:
      "Focused pages built to support campaigns, offers, lead generation, and one clear conversion goal.",
    to: "/services/landing-pages",
    label: "Campaign system",
    size: "lg:col-span-5",
    theme: "slate",
  },
  {
    number: "03",
    title: "Brand Identity",
    description:
      "Typography, color, visual direction, and reusable brand rules that create a more established presence.",
    to: "/services/brand-identity",
    label: "Identity system",
    size: "lg:col-span-5",
    theme: "sky",
  },
  {
    number: "04",
    title: "Automation Systems",
    description:
      "Practical workflows that reduce repetitive tasks, organize information, and help the business operate efficiently.",
    to: "/services/automation-systems",
    label: "Operations system",
    size: "lg:col-span-7",
    theme: "dark",
  },
];

const capabilities = [
  "Responsive design",
  "Clear conversion paths",
  "Reusable components",
  "Local SEO foundations",
  "Performance-minded builds",
  "Scalable page systems",
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

function ServiceIcon({ number }) {
  const icons = {
    "01": (
      <>
        <rect x="3.5" y="4.5" width="17" height="12" rx="2" />
        <path d="M8 20h8M12 16.5V20" />
      </>
    ),
    "02": (
      <>
        <rect x="5" y="3.5" width="14" height="17" rx="2" />
        <path d="M8 8h8M8 12h5M8 16h7" />
      </>
    ),
    "03": (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 3.5v17M3.5 12h17" />
      </>
    ),
    "04": (
      <>
        <path d="M4 8h7V4M20 16h-7v4" />
        <path d="M6 18a8 8 0 0 0 12-6M18 6A8 8 0 0 0 6 12" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.65"
    >
      {icons[number]}
    </svg>
  );
}

function getTheme(theme) {
  const themes = {
    blue: {
      shell:
        "border-blue-200 bg-gradient-to-br from-white via-white to-blue-50/90",
      icon: "border-blue-200 bg-blue-50 text-blue-700",
      label: "text-blue-700",
      text: "text-slate-950",
      body: "text-slate-600",
      status: "bg-blue-600",
      link: "text-blue-700",
    },
    slate: {
      shell:
        "border-slate-200 bg-gradient-to-br from-white via-white to-slate-100",
      icon: "border-slate-200 bg-slate-100 text-slate-700",
      label: "text-slate-600",
      text: "text-slate-950",
      body: "text-slate-600",
      status: "bg-slate-500",
      link: "text-slate-900",
    },
    sky: {
      shell:
        "border-sky-200 bg-gradient-to-br from-white via-white to-sky-50",
      icon: "border-sky-200 bg-sky-50 text-sky-700",
      label: "text-sky-700",
      text: "text-slate-950",
      body: "text-slate-600",
      status: "bg-sky-500",
      link: "text-sky-700",
    },
    dark: {
      shell:
        "border-slate-800 bg-gradient-to-br from-slate-950 via-slate-950 to-blue-950",
      icon: "border-white/10 bg-white/10 text-blue-200",
      label: "text-blue-300",
      text: "text-white",
      body: "text-slate-300",
      status: "bg-emerald-400",
      link: "text-white",
    },
  };

  return themes[theme];
}

function ServicesPreview() {
  return (
    <section
      aria-labelledby="services-preview-heading"
      className="section architecture-grid relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute right-[-10rem] top-24 h-[28rem] w-[28rem] rounded-full bg-blue-100/60 blur-[120px]"
      />

      <div className="site-container relative">
        <div className="section-header">
          <div className="section-header-copy">
            <span className="eyebrow">What Techuvo Builds</span>

            <h2
              id="services-preview-heading"
              className="section-heading"
            >
              Digital services designed as connected business systems.
            </h2>
          </div>

          <p className="section-header-description">
            Each service can stand alone, but they work best together. Strategy,
            design, development, branding, and automation should support one
            clear business direction.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-12">
          {services.map((service) => {
            const styles = getTheme(service.theme);
            const isDark = service.theme === "dark";

            return (
              <Link
                key={service.to}
                to={service.to}
                className={`${service.size} group relative min-h-[23rem] overflow-hidden rounded-[1.7rem] border p-0 shadow-[0_16px_50px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_75px_rgba(15,23,42,0.13)] ${styles.shell}`}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-50"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(37,99,235,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.045) 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                  }}
                />

                <div
                  aria-hidden="true"
                  className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/10 blur-[80px] transition duration-500 group-hover:scale-125 group-hover:bg-blue-500/20"
                />

                <div className="relative flex h-full min-h-[23rem] flex-col p-5 sm:p-7 lg:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`grid h-12 w-12 place-items-center rounded-2xl border shadow-sm ${styles.icon}`}
                    >
                      <ServiceIcon number={service.number} />
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`h-2 w-2 rounded-full ${styles.status}`}
                      />

                      <span
                        className={`text-[0.65rem] font-extrabold uppercase tracking-[0.14em] ${
                          isDark ? "text-slate-400" : "text-slate-500"
                        }`}
                      >
                        Available
                      </span>
                    </div>
                  </div>

                  <div className="mt-9 max-w-2xl">
                    <p
                      className={`text-[0.68rem] font-extrabold uppercase tracking-[0.16em] ${styles.label}`}
                    >
                      Service {service.number} / {service.label}
                    </p>

                    <h3
                      className={`mt-4 text-3xl font-bold tracking-[-0.045em] sm:text-4xl ${styles.text}`}
                    >
                      {service.title}
                    </h3>

                    <p
                      className={`mt-5 max-w-xl text-sm leading-7 sm:text-base ${styles.body}`}
                    >
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-auto flex items-end justify-between gap-6 pt-10">
                    <span
                      className={`inline-flex items-center gap-2 text-sm font-extrabold transition group-hover:gap-3 ${styles.link}`}
                    >
                      Explore service
                      <ArrowIcon />
                    </span>

                    <span
                      className={`hidden text-[0.62rem] font-bold uppercase tracking-[0.14em] sm:block ${
                        isDark ? "text-slate-500" : "text-slate-400"
                      }`}
                    >
                      Techuvo // {service.number}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 grid gap-5 rounded-[1.7rem] border border-slate-200 bg-white p-5 shadow-[0_16px_50px_rgba(15,23,42,0.07)] sm:p-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:p-9">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-blue-700">
              Included across every build
            </p>

            <h3 className="mt-4 text-2xl font-bold tracking-[-0.04em] text-slate-950 sm:text-3xl">
              A strong foundation before optional extras.
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Every project starts with clarity, responsive structure, usable
              navigation, consistent styling, and a clear path for the visitor.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((capability, index) => (
              <div
                key={capability}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-blue-50 text-xs font-extrabold text-blue-700">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-sm font-bold text-slate-700">
                  {capability}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5 rounded-[1.6rem] border border-slate-200 bg-slate-950 p-6 text-white sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-blue-300">
              Not sure which service fits?
            </p>

            <h3 className="mt-3 max-w-3xl text-2xl font-bold tracking-[-0.04em] sm:text-3xl">
              Start with the business problem, and we will help define the right
              project.
            </h3>
          </div>

          <Link
            to="/contact"
            className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-extrabold text-slate-950 transition hover:-translate-y-1 hover:bg-blue-50 sm:w-auto"
          >
            Discuss your needs
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesPreview;