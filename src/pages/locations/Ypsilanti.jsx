import { useEffect } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Ypsilanti Website Design",
    description:
      "Custom business websites designed to improve credibility, explain services clearly, and guide visitors toward contacting your company.",
    to: "/services/website-development",
  },
  {
    number: "02",
    title: "Small Business Website Development",
    description:
      "Responsive websites for local companies that need a professional online presence without unnecessary complexity.",
    to: "/services/website-development",
  },
  {
    number: "03",
    title: "Landing Page Design",
    description:
      "Focused pages for local promotions, paid advertising, event registration, appointment requests, and lead-generation campaigns.",
    to: "/services/landing-pages",
  },
  {
    number: "04",
    title: "Website Redesign",
    description:
      "Replace an outdated or difficult-to-use website with a cleaner structure, stronger messaging, and modern mobile performance.",
    to: "/services/website-development",
  },
  {
    number: "05",
    title: "Brand Identity",
    description:
      "Create a consistent visual direction using typography, color, layout, and reusable brand elements.",
    to: "/services/brand-identity",
  },
  {
    number: "06",
    title: "Digital Automation",
    description:
      "Connect forms, lead tracking, booking tools, email workflows, and other systems that support daily business operations.",
    to: "/services/automation-systems",
  },
];

const industries = [
  "Restaurants, cafés, and food-service businesses",
  "Contractors and home-service companies",
  "Barbers, salons, and personal-care businesses",
  "Education programs and tutoring services",
  "Healthcare and care-service providers",
  "Retail stores and local product businesses",
  "Automotive and transportation companies",
  "Real estate and property-service businesses",
  "Nonprofits and community organizations",
  "Creative professionals and independent founders",
];

const processSteps = [
  {
    number: "01",
    title: "Business discovery",
    description:
      "We identify your services, audience, current challenges, local competition, and the actions your website should encourage.",
  },
  {
    number: "02",
    title: "Content and page planning",
    description:
      "We organize the pages, headings, service information, local content, calls to action, and navigation structure.",
  },
  {
    number: "03",
    title: "Responsive design",
    description:
      "The visual direction is created to remain professional and easy to use across mobile phones, tablets, and desktop screens.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "The approved design is built into a responsive website with reusable components and search-friendly structure.",
  },
  {
    number: "05",
    title: "Testing and launch",
    description:
      "The website is reviewed across devices, connected to your domain, and prepared for real visitors and future growth.",
  },
];

const frequentlyAskedQuestions = [
  {
    question: "How much does a small business website cost in Ypsilanti?",
    answer:
      "Website pricing depends on the number of pages, content requirements, design complexity, integrations, and ongoing support. Techuvo can build focused landing pages, smaller business websites, and larger custom website systems based on the actual project.",
  },
  {
    question: "Can Techuvo redesign my current website?",
    answer:
      "Yes. Techuvo can redesign an outdated, confusing, slow, or poorly organized website with stronger messaging, responsive layouts, clearer navigation, and improved calls to action.",
  },
  {
    question: "Can you help a new Ypsilanti business launch online?",
    answer:
      "Yes. Techuvo can help establish the website structure, visual direction, service messaging, inquiry process, domain connection, and other digital foundations needed for a new business launch.",
  },
  {
    question: "Will my website be optimized for mobile devices?",
    answer:
      "Yes. Every Techuvo website is designed responsively so visitors can navigate, read content, submit forms, and contact the business across smaller and larger screens.",
  },
  {
    question: "Can you help my business appear in local Ypsilanti searches?",
    answer:
      "Techuvo can build strong local-search foundations through useful city-specific content, descriptive page titles, service pages, internal links, responsive performance, and technical structure. Search visibility also depends on competition, reviews, links, business prominence, and ongoing activity.",
  },
  {
    question: "Can you connect booking, forms, analytics, or customer-management tools?",
    answer:
      "Yes. Depending on the project, Techuvo can connect inquiry forms, scheduling systems, analytics, email workflows, payment tools, and customer-management platforms.",
  },
];

const nearbyLocations = [
  {
    city: "Ann Arbor",
    description:
      "Modern website design and development for businesses serving Ann Arbor.",
    to: "/locations/ann-arbor",
  },
  {
    city: "Detroit",
    description:
      "Website design, landing pages, branding, and digital systems for Detroit businesses.",
    to: "/locations/detroit",
  },
  {
    city: "Dearborn",
    description:
      "Professional website development for businesses serving Dearborn and nearby communities.",
    to: "/locations/dearborn",
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

function Ypsilanti() {
  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      "Ypsilanti Website Design Company | Web Development | Techuvo";

    const description =
      "Techuvo provides custom website design, website development, landing pages, redesigns, branding, and digital automation for Ypsilanti businesses.";

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
      "https://techuvo.dev/locations/ypsilanti",
    );

    const structuredData = document.createElement("script");

    structuredData.id = "ypsilanti-location-structured-data";
    structuredData.type = "application/ld+json";

    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ProfessionalService",
          name: "Techuvo",
          url: "https://techuvo.dev/locations/ypsilanti",
          email: "hello@techuvo.dev",
          description,
          areaServed: {
            "@type": "City",
            name: "Ypsilanti",
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
            "Digital Automation",
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
              name: "Ypsilanti",
              item: "https://techuvo.dev/locations/ypsilanti",
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
                Ypsilanti, Michigan
              </div>

              <h1 className="page-heading mt-6">
                Ypsilanti website design for businesses ready to grow.
              </h1>

              <p className="body-large mt-6">
                Techuvo creates modern websites, landing pages, brand systems,
                and digital workflows for Ypsilanti businesses that need a
                stronger and more professional online presence.
              </p>

              <p className="body-copy mt-5 max-w-2xl">
                From new local companies to established service providers,
                Techuvo builds websites around clear communication, mobile
                usability, customer trust, and the actions that matter most to
                the business.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="button button-primary"
                >
                  Start your Ypsilanti project
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
                  "Custom local strategy",
                  "Responsive website design",
                  "Clear customer journeys",
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
                      Ypsilanti digital system
                    </p>

                    <span className="inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-slate-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      Online
                    </span>
                  </div>

                  <h2 className="mt-8 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
                    Make it easier for local customers to choose your business.
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                    Your website should clearly communicate what you offer,
                    where you work, what makes your company credible, and how a
                    customer can contact you.
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {[
                      "Professional first impression",
                      "Clear service explanations",
                      "Local business relevance",
                      "Mobile contact options",
                      "Focused calls to action",
                      "Expandable page structure",
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
                      Serving businesses throughout Ypsilanti and surrounding
                      Washtenaw County communities.
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
                Ypsilanti Website Services
              </span>

              <h2 className="section-heading">
                Digital services built around the needs of local businesses.
              </h2>
            </div>

            <p className="section-header-description">
              Techuvo can build a complete website system or solve a focused
              digital problem, from a new landing page to a full business
              redesign.
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
                Local Business Focus
              </span>

              <h2 className="section-heading mt-5">
                Designed for the businesses and organizations serving
                Ypsilanti.
              </h2>

              <p className="body-large mt-6">
                Different customers look for different signals before deciding
                which local company to contact.
              </p>

              <p className="body-copy mt-5">
                A restaurant needs clear menus and ordering information. A
                contractor needs service descriptions and estimate requests. A
                care provider needs trust and reassurance. Techuvo shapes the
                page structure around how customers evaluate your industry.
              </p>

              <Link
                to="/contact"
                className="button button-primary mt-8"
              >
                Discuss your business
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
                A clear process from planning to launch.
              </h2>
            </div>

            <p className="section-header-description">
              Every stage keeps the strategy, content, design, development, and
              customer journey connected.
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
                Ypsilanti Search Visibility
              </span>

              <h2 className="section-heading mt-5">
                Local pages should answer real customer questions.
              </h2>

              <p className="body-large mt-6">
                Search visibility begins with useful content, strong technical
                structure, and a business that clearly serves the market.
              </p>

              <p className="body-copy mt-5">
                This page combines city relevance with service information,
                industry context, internal links, frequently asked questions,
                responsive structure, metadata, and clear calls to action.
                Those foundations can support your reviews, Google Business
                Profile, local citations, backlinks, and future content.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Unique Ypsilanti content",
                  "Descriptive title and description",
                  "Local service information",
                  "Search-friendly headings",
                  "Nearby city links",
                  "FAQ structured data",
                  "Responsive page design",
                  "Clear inquiry opportunities",
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
                  Build useful local authority instead of duplicate city pages.
                </h3>

                <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                  Each city page should serve a real market with distinct
                  content, relevant services, nearby locations, and useful
                  answers for potential customers.
                </p>

                <div className="mt-8 space-y-3">
                  {[
                    "Ypsilanti website design",
                    "Ypsilanti web development",
                    "Ypsilanti small business websites",
                    "Ypsilanti landing page design",
                    "Ypsilanti website redesign",
                    "Ypsilanti responsive web design",
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
                Ypsilanti Website FAQ
              </span>

              <h2 className="section-heading">
                Common questions from local business owners.
              </h2>
            </div>

            <p className="section-header-description">
              Learn what to expect before beginning a website or redesign
              project with Techuvo.
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
                Explore website services in nearby Michigan markets.
              </h2>
            </div>

            <p className="section-header-description">
              Techuvo works with businesses throughout Washtenaw County, Metro
              Detroit, and surrounding Michigan communities.
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
                  Ypsilanti project intake
                </p>

                <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-[-0.055em] sm:text-5xl">
                  Build a website that gives your Ypsilanti business a stronger
                  first impression.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                  Tell Techuvo what your business offers, what your current
                  website is missing, and what you want customers to do next.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-extrabold text-slate-950 transition hover:-translate-y-1 hover:bg-blue-50 sm:w-auto"
              >
                Start your Ypsilanti website
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ypsilanti;