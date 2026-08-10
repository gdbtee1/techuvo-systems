import { useEffect } from "react";
import { Link } from "react-router-dom";
import founderImage from "../assets/images/founder.jpg";

const values = [
  {
    number: "01",
    title: "Clarity",
    description:
      "Every project should make the business easier to understand, trust, and choose.",
  },
  {
    number: "02",
    title: "Ownership",
    description:
      "Techuvo takes direct responsibility for strategy, design quality, communication, and execution.",
  },
  {
    number: "03",
    title: "Growth",
    description:
      "The goal is to build a digital foundation that can expand as the business adds services, content, and customers.",
  },
  {
    number: "04",
    title: "Consistency",
    description:
      "Professional presentation depends on strong details working together across every page and device.",
  },
];

const timeline = [
  {
    year: "2026",
    title: "Techuvo was founded",
    description:
      "Techuvo began as a Michigan-based digital company focused on helping businesses improve their websites, presentation, and online systems.",
  },
  {
    year: "Today",
    title: "Building across industries",
    description:
      "The company continues creating digital work for automotive, education, care services, publishing, media, and other service-based businesses.",
  },
  {
    year: "Next",
    title: "Expanding into larger systems",
    description:
      "The long-term vision includes software products, automation tools, and practical technology that helps companies operate more effectively.",
  },
];

const capabilities = [
  "Website strategy",
  "Responsive design",
  "Front-end development",
  "Landing pages",
  "Brand identity",
  "Business automation",
  "Local SEO foundations",
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

function About() {
  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      "About Techuvo | Michigan Website Design & Digital Systems Company";

    const description =
      "Learn about Techuvo, a Michigan digital company founded by Luan Hunt to help businesses build stronger websites, brands, and digital systems.";

    let metaDescription = document.querySelector(
      'meta[name="description"]',
    );

    const metaDescriptionWasCreated = !metaDescription;

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    const previousDescription =
      metaDescription.getAttribute("content");

    metaDescription.setAttribute("content", description);

    return () => {
      document.title = previousTitle;

      if (metaDescriptionWasCreated) {
        metaDescription.remove();
        return;
      }

      if (previousDescription !== null) {
        metaDescription.setAttribute(
          "content",
          previousDescription,
        );
      } else {
        metaDescription.removeAttribute("content");
      }
    };
  }, []);

  return (
    <>
      <section className="hero-section architecture-grid lg:!pt-10 lg:!pb-16 xl:!pt-12 xl:!pb-20">
        <div
          aria-hidden="true"
          className="glow-orb"
          style={{
            left: "-8rem",
            top: "8rem",
          }}
        />

        <div
          aria-hidden="true"
          className="glow-orb glow-orb-secondary"
          style={{
            right: "-10rem",
            top: "12rem",
          }}
        />

        <div className="site-container">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3.5 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-blue-700 shadow-sm backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-blue-600" />
                About Techuvo
              </div>

              <h1 className="page-heading mt-6">
                Building digital systems that help businesses compete with
                confidence.
              </h1>

              <p className="body-large mt-6">
                Techuvo is a Michigan-based digital company focused on modern
                websites, brand systems, landing pages, and practical business
                automation.
              </p>

              <p className="body-copy mt-5 max-w-2xl">
                The company was founded to make high-quality digital work more
                direct, understandable, and useful for businesses that need to
                strengthen the way they present themselves online.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/contact" className="button button-primary">
                  Start a project
                  <ArrowIcon />
                </Link>

                <Link to="/portfolio" className="button button-secondary">
                  View our work
                  <ArrowIcon />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="surface-card overflow-hidden p-3 sm:p-4">
                <div className="founder-image-shell min-h-[34rem] lg:min-h-[30rem] xl:min-h-[32rem]">
                  <img
                    src={founderImage}
                    alt="Luan Hunt, founder of Techuvo"
                  />

                  <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-7">
                    <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-blue-200">
                      Founder
                    </p>

                    <h2 className="mt-2 text-3xl font-bold tracking-[-0.045em] text-white">
                      Luan Hunt
                    </h2>

                    <p className="mt-2 max-w-md text-sm leading-6 text-slate-200">
                      Building Techuvo as a long-term digital and technology
                      company rooted in strong work, direct communication, and
                      practical innovation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 left-1/2 h-10 w-[76%] -translate-x-1/2 rounded-full bg-blue-500/10 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="section relative overflow-hidden bg-white">
        <div className="site-container">
          <div className="section-header">
            <div className="section-header-copy">
              <span className="eyebrow">Why Techuvo Exists</span>

              <h2 className="section-heading">
                Strong businesses deserve digital presentation that matches
                their potential.
              </h2>
            </div>

            <p className="section-header-description">
              Many businesses provide valuable services but lose credibility
              online because their website is outdated, unclear, difficult to
              use, or disconnected from the quality of the company itself.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-slate-950 p-6 text-white shadow-[0_28px_75px_rgba(15,23,42,0.16)] sm:p-8 lg:p-10">
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
                className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-blue-500/30 blur-[90px]"
              />

              <div className="relative">
                <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-blue-300">
                  The Mission
                </p>

                <h3 className="mt-4 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
                  Help businesses look as serious online as they are in real
                  life.
                </h3>

                <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                  Techuvo helps close the gap between the quality of a business
                  and the quality of its digital presence. The work is designed
                  to improve clarity, trust, customer action, and long-term
                  growth.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {capabilities.map((capability) => (
                    <div
                      key={capability}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-4"
                    >
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blue-500/20 text-blue-200">
                        <CheckIcon />
                      </span>

                      <span className="text-sm font-bold text-white">
                        {capability}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {values.map((value) => (
                <article
                  key={value.number}
                  className="group rounded-[1.55rem] border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_22px_60px_rgba(15,23,42,0.1)] sm:p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-blue-200 bg-blue-50 text-xs font-extrabold text-blue-700">
                      {value.number}
                    </span>

                    <span className="h-2 w-2 rounded-full bg-blue-500 opacity-60 transition group-hover:opacity-100" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold tracking-[-0.035em] text-slate-950">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section architecture-grid relative overflow-hidden">
        <div className="site-container">
          <div className="section-header">
            <div className="section-header-copy">
              <span className="eyebrow">Founder Story</span>

              <h2 className="section-heading">
                A company being built with a long-term vision.
              </h2>
            </div>

            <p className="section-header-description">
              Techuvo begins with website design and digital systems, but the
              larger direction includes software, automation, and technology
              products that solve more complex business problems.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
            <div className="surface-card p-5 sm:p-7 lg:p-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-blue-700">
                From the founder
              </p>

              <h3 className="mt-4 text-3xl font-bold tracking-[-0.045em] text-slate-950">
                “I want Techuvo to become the company businesses call when
                they need to look stronger, operate better, and use technology
                more effectively.”
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                My goal is to build Techuvo into a respected digital and
                technology company through consistent work, real client
                results, better systems, and a standard that continues rising
                as the company grows.
              </p>

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                That means staying involved, learning continuously, and
                treating every project as part of the larger reputation
                Techuvo is building.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/contact" className="button button-primary">
                  Work with Techuvo
                  <ArrowIcon />
                </Link>

                <Link to="/portfolio" className="button button-secondary">
                  Explore projects
                  <ArrowIcon />
                </Link>
              </div>
            </div>

            <div className="space-y-5">
              {timeline.map((item, index) => (
                <article
                  key={item.title}
                  className="grid gap-5 rounded-[1.55rem] border border-slate-200 bg-white p-5 shadow-[0_14px_45px_rgba(15,23,42,0.06)] sm:grid-cols-[6rem_1fr] sm:p-6"
                >
                  <div>
                    <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-2 text-xs font-extrabold text-blue-700">
                      {item.year}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-[0.66rem] font-extrabold uppercase tracking-[0.14em] text-slate-400">
                        Stage 0{index + 1}
                      </span>

                      <span className="h-px flex-1 bg-slate-200" />
                    </div>

                    <h3 className="mt-3 text-xl font-bold tracking-[-0.035em] text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section relative overflow-hidden bg-white">
        <div className="site-container">
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

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-blue-300">
                  Build with Techuvo
                </p>

                <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-[-0.055em] sm:text-5xl">
                  Ready to strengthen the way your business shows up online?
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                  Share your goals, current challenges, and the kind of
                  presence you want to create. Techuvo will help define the
                  right path forward.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-extrabold text-slate-950 transition hover:-translate-y-1 hover:bg-blue-50 sm:w-auto"
              >
                Start your project
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;