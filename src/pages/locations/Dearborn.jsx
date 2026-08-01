import { useEffect } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Dearborn Website Design",
    description:
      "Custom website design built to improve credibility, explain services clearly, and help customers take action.",
    to: "/services/website-development",
  },
  {
    number: "02",
    title: "Business Website Development",
    description:
      "Responsive website systems for companies that need a professional, organized, and scalable digital presence.",
    to: "/services/website-development",
  },
  {
    number: "03",
    title: "Landing Page Design",
    description:
      "Focused pages for promotions, advertising campaigns, service offers, consultation requests, and lead generation.",
    to: "/services/landing-pages",
  },
  {
    number: "04",
    title: "Website Redesign",
    description:
      "Modernize an outdated or underperforming website with stronger messaging, navigation, responsive design, and visual consistency.",
    to: "/services/website-development",
  },
  {
    number: "05",
    title: "Brand Identity",
    description:
      "Create a consistent visual system using typography, color, layout, and reusable brand standards.",
    to: "/services/brand-identity",
  },
  {
    number: "06",
    title: "Business Automation",
    description:
      "Connect forms, lead tracking, scheduling, customer workflows, and other systems that reduce repetitive tasks.",
    to: "/services/automation-systems",
  },
];

const industries = [
  "Automotive and transportation companies",
  "Manufacturing and industrial businesses",
  "Restaurants and hospitality businesses",
  "Healthcare and care-service providers",
  "Contractors and home-service companies",
  "Professional-service firms",
  "Real estate and property businesses",
  "Retail and local product companies",
  "Education and training organizations",
  "Nonprofits and community organizations",
];

const processSteps = [
  {
    number: "01",
    title: "Business discovery",
    description:
      "We identify your services, target customers, current website issues, local competitors, and the goals the new website should support.",
  },
  {
    number: "02",
    title: "Content and page strategy",
    description:
      "We organize the site structure, service hierarchy, local relevance, calls to action, navigation, and internal links.",
  },
  {
    number: "03",
    title: "Responsive design",
    description:
      "The visual direction is created to communicate professionalism while remaining easy to use across phones, tablets, laptops, and larger screens.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "The approved design is developed into a scalable website using reusable components and organized page systems.",
  },
  {
    number: "05",
    title: "Testing and launch",
    description:
      "The website is reviewed across devices, connected to your domain, checked for usability, and prepared for future growth.",
  },
];

const frequentlyAskedQuestions = [
  {
    question: "How much does website design cost in Dearborn?",
    answer:
      "Website pricing depends on the number of pages, design requirements, content needs, custom functionality, integrations, and ongoing support. Techuvo offers focused landing pages, smaller business websites, redesigns, and larger custom projects.",
  },
  {
    question: "Can Techuvo redesign my existing Dearborn business website?",
    answer:
      "Yes. Techuvo can rebuild an outdated, confusing, slow, or poorly structured website with clearer messaging, responsive layouts, better navigation, stronger calls to action, and a more professional visual system.",
  },
  {
    question: "Can you help a new Dearborn business launch online?",
    answer:
      "Yes. Techuvo can help establish the page structure, service messaging, visual direction, inquiry process, responsive design, domain connection, and other digital foundations needed for launch.",
  },
  {
    question: "Can you build a multilingual website?",
    answer:
      "Yes. Multilingual support can be included depending on the project scope, content requirements, and the languages the business needs to serve.",
  },
  {
    question: "Can Techuvo help my website appear in Dearborn searches?",
    answer:
      "Techuvo can build local-search foundations through useful Dearborn-specific content, descriptive titles, strong service pages, internal links, responsive design, and organized technical structure. Rankings also depend on competition, reviews, links, business prominence, and ongoing activity.",
  },
  {
    question: "Can you connect forms, booking, analytics, or a CRM?",
    answer:
      "Yes. Depending on the project, Techuvo can connect inquiry forms, booking tools, analytics, customer-management systems, email workflows, payment tools, and other business software.",
  },
];

const nearbyLocations = [
  {
    city: "Detroit",
    description:
      "Website design, landing pages, branding, and digital systems for Detroit businesses.",
    to: "/locations/detroit",
  },
  {
    city: "Livonia",
    description:
      "Responsive website development for businesses serving Livonia and nearby communities.",
    to: "/locations/livonia",
  },
  {
    city: "Southfield",
    description:
      "Professional websites and digital systems for Southfield companies and organizations.",
    to: "/locations/southfield",
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

function Dearborn() {
  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      "Dearborn Website Design Company | Web Development | Techuvo";

    const description =
      "Techuvo provides custom website design, responsive development, landing pages, redesigns, branding, multilingual support, and automation for Dearborn businesses.";

    let metaDescription = document.querySelector(
      'meta[name="description"]',
    );

    const createdDescription = !metaDescription;

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    const previousDescription =
      metaDescription.getAttribute("content");

    metaDescription.setAttribute("content", description);

    let canonical = document.querySelector(
      'link[rel="canonical"]',
    );

    const createdCanonical = !canonical;

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    const previousCanonical = canonical.getAttribute("href");

    canonical.setAttribute(
      "href",
      "https://techuvo.dev/locations/dearborn",
    );

    const structuredData = document.createElement("script");

    structuredData.id = "dearborn-location-structured-data";
    structuredData.type = "application/ld+json";

    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ProfessionalService",
          name: "Techuvo",
          url: "https://techuvo.dev/locations/dearborn",
          email: "hello@techuvo.dev",
          description,
          areaServed: {
            "@type": "City",
            name: "Dearborn",
            containedInPlace: {
              "@type": "State",
              name: "Michigan",
            },
          },
          serviceType: [
            "Website Design",
            "Website Development",
            "Website Redesign",
            "Landing Page Design",
            "Brand Identity",
            "Business Automation",
          ],
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://techuvo.dev/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Locations",
              item: "https://techuvo.dev/#locations",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Dearborn",
              item: "https://techuvo.dev/locations/dearborn",
            },
          ],
        },
        {
          "@type": "FAQPage",
          mainEntity: frequentlyAskedQuestions.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        },
      ],
    });

    document.head.appendChild(structuredData);

    return () => {
      document.title = previousTitle;

      if (createdDescription) {
        metaDescription.remove();
      } else if (previousDescription !== null) {
        metaDescription.setAttribute(
          "content",
          previousDescription,
        );
      } else {
        metaDescription.removeAttribute("content");
      }

      if (createdCanonical) {
        canonical.remove();
      } else if (previousCanonical !== null) {
        canonical.setAttribute("href", previousCanonical);
      } else {
        canonical.removeAttribute("href");
      }

      structuredData.remove();
    };
  }, []);

  return (
    <>
      <section className="hero-section architecture-grid">
        <div
          aria-hidden="true"
          className="glow-orb"
          style={{
            left: "-8rem",
            top: "9rem",
          }}
        />

        <div
          aria-hidden="true"
          className="glow-orb glow-orb-secondary"
          style={{
            right: "-10rem",
            top: "10rem",
          }}
        />

        <div className="site-container">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-white/85 px-3.5 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-blue-700 shadow-sm backdrop-blur-xl">
                <LocationIcon />
                Dearborn, Michigan
              </div>

              <h1 className="page-heading mt-6">
                Dearborn website design for businesses that need to stand out.
              </h1>

              <p className="body-large mt-6">
                Techuvo creates modern websites, landing pages, brand systems,
                multilingual experiences, and digital workflows for Dearborn
                businesses that need stronger presentation and clearer customer
                communication.
              </p>

              <p className="body-copy mt-5 max-w-2xl">
                Whether you serve local residents, regional customers,
                business clients, or multiple language communities, Techuvo
                builds around the audience, services, and goals that matter to
                your company.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="button button-primary"
                >
                  Start your Dearborn project
                  <ArrowIcon />
                </Link>

                <Link
                  to="/portfolio"
                  className="button button-secondary"
                >
                  View our work
                  <ArrowIcon />
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                {[
                  "Responsive business websites",
                  "Clear service communication",
                  "Multilingual-ready structure",
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

            <div className="surface-card overflow-hidden p-3 sm:p-4">
              <div className="relative min-h-[34rem] overflow-hidden rounded-[1.5rem] bg-slate-950 p-5 text-white sm:p-7">
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
                  className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/30 blur-[90px]"
                />

                <div className="relative flex h-full min-h-[30rem] flex-col">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-blue-300">
                      Dearborn digital system
                    </p>

                    <span className="inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-slate-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      Active
                    </span>
                  </div>

                  <h2 className="mt-8 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
                    Communicate clearly across competitive and diverse markets.
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                    Your website should quickly explain what your company does,
                    who it serves, why it is credible, and how customers can
                    contact or purchase from you.
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {[
                      "Professional presentation",
                      "Clear service hierarchy",
                      "Local market relevance",
                      "Mobile inquiry paths",
                      "Brand consistency",
                      "Expandable content system",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/[0.055] p-4"
                      >
                        <span className="text-xs font-extrabold text-blue-200">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <p className="mt-3 text-sm font-bold text-white">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto border-t border-white/10 pt-6">
                    <p className="text-xs font-semibold leading-6 text-slate-400">
                      Serving businesses throughout Dearborn and surrounding
                      Wayne County communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="site-container">
          <div className="section-header">
            <div className="section-header-copy">
              <span className="eyebrow">
                Dearborn Website Services
              </span>

              <h2 className="section-heading">
                Digital services built around your audience and business goals.
              </h2>
            </div>

            <p className="section-header-description">
              Techuvo can create a complete website system or solve one focused
              problem, from modernizing an outdated site to building a landing
              page for a new campaign.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.number}
                to={service.to}
                className="group room-card min-h-[20rem]"
              >
                <div className="room-card-content">
                  <div className="room-card-header">
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-blue-200 bg-blue-50 text-xs font-extrabold text-blue-700">
                      {service.number}
                    </span>

                    <span className="room-status">
                      Available
                    </span>
                  </div>

                  <h3 className="card-heading mt-6">
                    {service.title}
                  </h3>

                  <p className="body-copy mt-4">
                    {service.description}
                  </p>

                  <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-extrabold text-blue-700 transition group-hover:gap-3">
                    Explore service
                    <ArrowIcon />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section architecture-grid">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
            <div>
              <span className="eyebrow">
                Dearborn Industries
              </span>

              <h2 className="section-heading mt-5">
                Designed around the expectations of your market.
              </h2>

              <p className="body-large mt-6">
                Different businesses need different trust signals, content,
                language options, calls to action, and customer journeys.
              </p>

              <p className="body-copy mt-5">
                An automotive company may need service clarity and scheduling.
                A manufacturer may need capabilities and business credibility.
                A restaurant may need menus, ordering, and location details.
                Techuvo shapes the website around how customers evaluate your
                specific business.
              </p>

              <Link
                to="/contact"
                className="button button-primary mt-8"
              >
                Discuss your industry
                <ArrowIcon />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {industries.map((industry, index) => (
                <article
                  key={industry}
                  className="flex items-center gap-4 rounded-[1.35rem] border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-xs font-extrabold text-blue-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-sm font-bold leading-6 text-slate-800">
                    {industry}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="site-container">
          <div className="section-header">
            <div className="section-header-copy">
              <span className="eyebrow">
                Project Process
              </span>

              <h2 className="section-heading">
                A structured path from strategy to launch.
              </h2>
            </div>

            <p className="section-header-description">
              Every stage keeps the business goals, content, visual direction,
              development, and final launch connected.
            </p>
          </div>

          <div className="space-y-5">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="grid gap-5 rounded-[1.55rem] border border-slate-200 bg-slate-50 p-5 sm:grid-cols-[4rem_1fr] sm:p-7"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-blue-200 bg-blue-50 text-sm font-extrabold text-blue-700">
                  {step.number}
                </span>

                <div>
                  <h3 className="text-xl font-bold tracking-[-0.035em] text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section architecture-grid">
        <div className="site-container">
          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="surface-card p-5 sm:p-7 lg:p-9">
              <span className="eyebrow">
                Dearborn Search Visibility
              </span>

              <h2 className="section-heading mt-5">
                Local relevance should be built around useful information.
              </h2>

              <p className="body-large mt-6">
                Search visibility begins with helpful content, clear service
                relevance, strong technical structure, and genuine business
                presence.
              </p>

              <p className="body-copy mt-5">
                This page combines Dearborn-specific positioning, service
                information, industry context, internal links, frequently asked
                questions, responsive design, metadata, and structured data.
                Those foundations can support your reviews, Google Business
                Profile, citations, links, and future content.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Unique Dearborn content",
                  "Descriptive page metadata",
                  "Service-focused internal links",
                  "Responsive page structure",
                  "Nearby city connections",
                  "FAQ structured data",
                  "Search-friendly headings",
                  "Clear calls to action",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
                  >
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-700">
                      <CheckIcon />
                    </span>

                    <span className="text-sm font-bold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

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

              <div className="relative">
                <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-blue-300">
                  Local search foundation
                </p>

                <h3 className="mt-4 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
                  Build local authority around the services you actually
                  provide.
                </h3>

                <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                  Strong location pages should explain the service, audience,
                  process, local relevance, and reasons customers should choose
                  the business.
                </p>

                <div className="mt-8 space-y-3">
                  {[
                    "Dearborn website design",
                    "Dearborn web development",
                    "Dearborn business websites",
                    "Dearborn landing page design",
                    "Dearborn website redesign",
                    "Dearborn multilingual website design",
                  ].map((topic, index) => (
                    <div
                      key={topic}
                      className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-4"
                    >
                      <span className="text-sm font-bold text-white">
                        {topic}
                      </span>

                      <span className="text-xs font-extrabold text-blue-200">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-extrabold text-slate-950 transition hover:-translate-y-1 hover:bg-blue-50 sm:w-auto"
                >
                  Strengthen your local presence
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="site-container">
          <div className="section-header">
            <div className="section-header-copy">
              <span className="eyebrow">
                Dearborn Website FAQ
              </span>

              <h2 className="section-heading">
                Common questions before beginning a project.
              </h2>
            </div>

            <p className="section-header-description">
              Clear answers help business owners understand the scope,
              process, and available options.
            </p>
          </div>

          <div className="space-y-4">
            {frequentlyAskedQuestions.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-[1.4rem] border border-slate-200 bg-slate-50 p-5 open:bg-white open:shadow-md sm:p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5">
                  <span className="flex items-center gap-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-blue-50 text-xs font-extrabold text-blue-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-base font-bold text-slate-950 sm:text-lg">
                      {faq.question}
                    </span>
                  </span>

                  <span className="text-xl font-light text-blue-700 transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-5 border-t border-slate-200 pt-5 text-sm leading-7 text-slate-600 sm:ml-[3.25rem] sm:text-base">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section architecture-grid">
        <div className="site-container">
          <div className="section-header">
            <div className="section-header-copy">
              <span className="eyebrow">
                Nearby Service Areas
              </span>

              <h2 className="section-heading">
                Explore website services across Metro Detroit.
              </h2>
            </div>

            <p className="section-header-description">
              Techuvo works with businesses throughout Dearborn, Detroit, and
              surrounding Southeast Michigan communities.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {nearbyLocations.map((location) => (
              <Link
                key={location.city}
                to={location.to}
                className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >
                <span className="text-xs font-extrabold uppercase tracking-[0.15em] text-blue-700">
                  Michigan location
                </span>

                <h3 className="mt-4 text-2xl font-bold tracking-[-0.04em] text-slate-950">
                  {location.city}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {location.description}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-blue-700 transition group-hover:gap-3">
                  Explore {location.city}
                  <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
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
                  Dearborn project intake
                </p>

                <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-[-0.055em] sm:text-5xl">
                  Build a website that represents the strength of your Dearborn
                  business.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                  Tell Techuvo what your business offers, who it serves, what
                  your current website is missing, and what you want customers
                  to do next.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-extrabold text-slate-950 transition hover:-translate-y-1 hover:bg-blue-50 sm:w-auto"
              >
                Start your Dearborn website
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dearborn;