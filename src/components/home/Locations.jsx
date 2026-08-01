import { Link } from "react-router-dom";

const locations = [
  {
    number: "01",
    city: "Detroit",
    region: "Wayne County",
    description:
      "Website design and digital systems for Detroit businesses that need a stronger, more professional online presence.",
    to: "/locations/detroit",
    size: "lg:col-span-7",
    theme: "blue",
  },
  {
    number: "02",
    city: "Ypsilanti",
    region: "Washtenaw County",
    description:
      "Modern websites for local service businesses, organizations, and growing companies across Ypsilanti.",
    to: "/locations/ypsilanti",
    size: "lg:col-span-5",
    theme: "slate",
  },
  {
    number: "03",
    city: "Ann Arbor",
    region: "Washtenaw County",
    description:
      "Clean, responsive digital experiences for Ann Arbor companies that value strong design and clear communication.",
    to: "/locations/ann-arbor",
    size: "lg:col-span-5",
    theme: "sky",
  },
  {
    number: "04",
    city: "Dearborn",
    region: "Wayne County",
    description:
      "Professional website development for Dearborn businesses serving competitive local and regional markets.",
    to: "/locations/dearborn",
    size: "lg:col-span-7",
    theme: "dark",
  },
  {
    number: "05",
    city: "Livonia",
    region: "Wayne County",
    description:
      "Responsive business websites designed to improve trust, service clarity, and customer inquiries in Livonia.",
    to: "/locations/livonia",
    size: "lg:col-span-6",
    theme: "slate",
  },
  {
    number: "06",
    city: "Southfield",
    region: "Oakland County",
    description:
      "Modern digital solutions for Southfield companies, professionals, and service-based organizations.",
    to: "/locations/southfield",
    size: "lg:col-span-6",
    theme: "blue",
  },
];

const searchTopics = [
  "Website design",
  "Website development",
  "Landing pages",
  "Business branding",
  "Responsive redesigns",
  "Digital automation",
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

function LocationIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 21s6-5.3 6-11a6 6 0 1 0-12 0c0 5.7 6 11 6 11Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <circle
        cx="12"
        cy="10"
        r="2.2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function getTheme(theme) {
  const themes = {
    blue: {
      card:
        "border-blue-200 bg-gradient-to-br from-white via-white to-blue-50/90",
      icon: "border-blue-200 bg-blue-50 text-blue-700",
      label: "text-blue-700",
      title: "text-slate-950",
      body: "text-slate-600",
      status: "bg-blue-600",
      link: "text-blue-700",
    },
    sky: {
      card:
        "border-sky-200 bg-gradient-to-br from-white via-white to-sky-50/90",
      icon: "border-sky-200 bg-sky-50 text-sky-700",
      label: "text-sky-700",
      title: "text-slate-950",
      body: "text-slate-600",
      status: "bg-sky-500",
      link: "text-sky-700",
    },
    slate: {
      card:
        "border-slate-200 bg-gradient-to-br from-white via-white to-slate-100",
      icon: "border-slate-200 bg-slate-100 text-slate-700",
      label: "text-slate-600",
      title: "text-slate-950",
      body: "text-slate-600",
      status: "bg-slate-500",
      link: "text-slate-900",
    },
    dark: {
      card:
        "border-slate-800 bg-gradient-to-br from-slate-950 via-slate-950 to-blue-950",
      icon: "border-white/10 bg-white/10 text-blue-200",
      label: "text-blue-300",
      title: "text-white",
      body: "text-slate-300",
      status: "bg-emerald-400",
      link: "text-white",
    },
  };

  return themes[theme];
}

function Locations() {
  return (
    <section
      aria-labelledby="locations-heading"
      className="section architecture-grid relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute left-[-9rem] top-24 h-[28rem] w-[28rem] rounded-full bg-blue-100/60 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-[-10rem] right-[-8rem] h-[24rem] w-[24rem] rounded-full bg-sky-100/60 blur-[110px]"
      />

      <div className="site-container relative">
        <div className="section-header">
          <div className="section-header-copy">
            <span className="eyebrow">Michigan Service Areas</span>

            <h2 id="locations-heading" className="section-heading">
              Local city pages built for visibility and relevance.
            </h2>
          </div>

          <p className="section-header-description">
            Techuvo serves businesses across Southeast Michigan. Each location
            page is built around the city, nearby industries, local search
            intent, and the services businesses in that market commonly need.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-12">
          {locations.map((location) => {
            const styles = getTheme(location.theme);
            const isDark = location.theme === "dark";

            return (
              <Link
                key={location.to}
                to={location.to}
                className={`${location.size} group relative min-h-[20rem] overflow-hidden rounded-[1.65rem] border p-0 shadow-[0_16px_50px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_75px_rgba(15,23,42,0.13)] ${styles.card}`}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-55"
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

                <div className="relative flex h-full min-h-[20rem] flex-col p-5 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={`grid h-12 w-12 place-items-center rounded-2xl border shadow-sm ${styles.icon}`}
                    >
                      <LocationIcon />
                    </span>

                    <span className="inline-flex items-center gap-2 text-[0.65rem] font-extrabold uppercase tracking-[0.14em]">
                      <span
                        className={`h-2 w-2 rounded-full ${styles.status}`}
                      />

                      <span
                        className={
                          isDark ? "text-slate-400" : "text-slate-500"
                        }
                      >
                        Service area
                      </span>
                    </span>
                  </div>

                  <div className="mt-8 max-w-xl">
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={`text-[0.68rem] font-extrabold uppercase tracking-[0.16em] ${styles.label}`}
                      >
                        Location {location.number}
                      </span>

                      <span
                        className={`text-xs font-bold ${
                          isDark ? "text-slate-500" : "text-slate-400"
                        }`}
                      >
                        {location.region}
                      </span>
                    </div>

                    <h3
                      className={`mt-4 text-3xl font-bold tracking-[-0.045em] sm:text-4xl ${styles.title}`}
                    >
                      Web Design in {location.city}
                    </h3>

                    <p
                      className={`mt-5 max-w-2xl text-sm leading-7 sm:text-base ${styles.body}`}
                    >
                      {location.description}
                    </p>
                  </div>

                  <div className="mt-auto flex items-end justify-between gap-5 pt-8">
                    <span
                      className={`inline-flex items-center gap-2 text-sm font-extrabold transition group-hover:gap-3 ${styles.link}`}
                    >
                      Explore {location.city}
                      <ArrowIcon />
                    </span>

                    <span
                      className={`hidden text-[0.62rem] font-bold uppercase tracking-[0.14em] sm:block ${
                        isDark ? "text-slate-500" : "text-slate-400"
                      }`}
                    >
                      Techuvo // MI
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 grid gap-5 rounded-[1.7rem] border border-slate-200 bg-white p-5 shadow-[0_16px_50px_rgba(15,23,42,0.07)] sm:p-7 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:p-9">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-blue-700">
              Local search coverage
            </p>

            <h3 className="mt-4 text-2xl font-bold tracking-[-0.04em] text-slate-950 sm:text-3xl">
              Each city page targets real services, not just a city name.
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Strong local pages should explain the service, show relevant
              work, answer common questions, include nearby service areas, and
              guide visitors toward a clear project inquiry.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {searchTopics.map((topic, index) => (
              <div
                key={topic}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-blue-50 text-xs font-extrabold text-blue-700">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-sm font-bold text-slate-700">
                  {topic}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5 rounded-[1.65rem] border border-slate-200 bg-slate-950 p-6 text-white sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-blue-300">
              Outside these cities?
            </p>

            <h3 className="mt-3 max-w-3xl text-2xl font-bold tracking-[-0.04em] sm:text-3xl">
              Techuvo can still work with businesses throughout Michigan and
              beyond.
            </h3>
          </div>

          <Link
            to="/contact"
            className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-extrabold text-slate-950 transition hover:-translate-y-1 hover:bg-blue-50 sm:w-auto"
          >
            Check your area
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Locations;