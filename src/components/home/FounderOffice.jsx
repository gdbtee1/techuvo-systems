import { Link } from "react-router-dom";
import founderImage from "../../assets/images/founder.jpg";

const founderValues = [
  {
    number: "01",
    title: "Direct involvement",
    description:
      "Every project receives hands-on attention across strategy, structure, design, and implementation.",
  },
  {
    number: "02",
    title: "Long-term thinking",
    description:
      "The goal is not just to launch a website, but to build a stronger foundation the business can continue using.",
  },
  {
    number: "03",
    title: "High personal standard",
    description:
      "Every detail should communicate professionalism, clarity, and respect for the client’s company.",
  },
];

const founderMilestones = [
  {
    year: "2026",
    title: "Techuvo founded",
    description:
      "Created to help businesses improve how they present themselves, communicate online, and use modern technology.",
  },
  {
    year: "Now",
    title: "Growing client portfolio",
    description:
      "Building websites, digital systems, and brand experiences for businesses across multiple industries.",
  },
  {
    year: "Next",
    title: "Expanding beyond websites",
    description:
      "Developing practical software, automation tools, and digital products that help businesses operate more effectively.",
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

function QuoteIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-7 w-7"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M9.5 7H6.8A2.8 2.8 0 0 0 4 9.8v2.7A2.5 2.5 0 0 0 6.5 15H9v2.2A2.8 2.8 0 0 1 6.2 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M20 7h-2.7a2.8 2.8 0 0 0-2.8 2.8v2.7A2.5 2.5 0 0 0 17 15h2.5v2.2a2.8 2.8 0 0 1-2.8 2.8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function FounderOffice() {
  return (
    <section
      id="founder-office"
      aria-labelledby="founder-office-heading"
      className="section architecture-grid relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute left-[-10rem] top-24 h-[28rem] w-[28rem] rounded-full bg-blue-100/70 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-[-8rem] right-[-8rem] h-[24rem] w-[24rem] rounded-full bg-sky-100/60 blur-[110px]"
      />

      <div className="site-container relative">
        <div className="grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
          <div className="relative">
            <div className="founder-image-shell">
              <img
                src={founderImage}
                alt="Luan Hunt, founder of Techuvo"
                loading="lazy"
              />

              <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-7">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[0.66rem] font-extrabold uppercase tracking-[0.15em] text-blue-200">
                      Founder Office
                    </p>

                    <h3 className="mt-2 text-2xl font-bold tracking-[-0.04em] text-white sm:text-3xl">
                      Luan Hunt
                    </h3>

                    <p className="mt-1 text-sm font-semibold text-slate-200">
                      Founder, Techuvo
                    </p>
                  </div>

                  <span className="hidden rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[0.62rem] font-extrabold uppercase tracking-[0.12em] text-white backdrop-blur-md sm:inline-flex">
                    Michigan
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-3 z-20 hidden max-w-[15rem] rounded-[1.3rem] border border-slate-200 bg-white p-4 shadow-[0_20px_55px_rgba(15,23,42,0.15)] sm:block">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-700">
                  <QuoteIcon />
                </span>

                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                  Founder principle
                </p>
              </div>

              <p className="mt-3 text-sm font-bold leading-6 text-slate-950">
                Build every project like the client’s reputation depends on it.
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <span className="room-number">ROOM 05</span>

              <span className="h-px w-12 bg-gradient-to-r from-blue-600 to-transparent" />

              <span className="room-status">Founder present</span>
            </div>

            <span className="eyebrow mt-7">Founder Office</span>

            <h2
              id="founder-office-heading"
              className="section-heading mt-5"
            >
              Building a company that helps businesses compete with confidence.
            </h2>

            <p className="body-large mt-6">
              I started Techuvo to give businesses access to strong design,
              modern development, and practical digital systems without the
              distance and confusion that often come with traditional agencies.
            </p>

            <p className="body-copy mt-5 max-w-2xl">
              My role is not limited to managing projects. I stay involved in
              the strategy, page structure, design direction, development
              decisions, and final launch quality. That direct involvement helps
              each project stay connected to the client’s actual goals.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {founderValues.map((value) => (
                <article
                  key={value.number}
                  className="rounded-[1.35rem] border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                >
                  <span className="text-xs font-extrabold text-blue-700">
                    {value.number}
                  </span>

                  <h3 className="mt-4 text-base font-bold tracking-[-0.025em] text-slate-950">
                    {value.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/about" className="button button-primary">
                Read the full story
                <ArrowIcon />
              </Link>

              <Link to="/contact" className="button button-secondary">
                Work with Techuvo
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.08)] lg:mt-24">
          <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
            <div className="relative overflow-hidden bg-slate-950 p-6 text-white sm:p-8 lg:p-10">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/30 blur-[80px]"
              />

              <div className="relative">
                <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-blue-300">
                  Founder timeline
                </p>

                <h3 className="mt-4 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
                  Building the foundation for a larger technology company.
                </h3>

                <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                  Techuvo begins with websites and digital systems, but the
                  long-term direction extends into software, automation, and
                  technology products that solve larger business problems.
                </p>
              </div>
            </div>

            <div className="p-5 sm:p-7 lg:p-10">
              <div className="space-y-4">
                {founderMilestones.map((milestone, index) => (
                  <article
                    key={milestone.title}
                    className="grid gap-4 rounded-[1.35rem] border border-slate-200 bg-slate-50 p-5 sm:grid-cols-[5rem_1fr]"
                  >
                    <div>
                      <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-extrabold text-blue-700">
                        {milestone.year}
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-[0.66rem] font-extrabold uppercase tracking-[0.14em] text-slate-400">
                          Stage 0{index + 1}
                        </span>

                        <span className="h-px flex-1 bg-slate-200" />
                      </div>

                      <h4 className="mt-3 text-lg font-bold tracking-[-0.025em] text-slate-950">
                        {milestone.title}
                      </h4>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {milestone.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FounderOffice;