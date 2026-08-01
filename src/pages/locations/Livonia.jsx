import { useEffect } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Livonia Website Design",
    description:
      "Custom website design focused on professional presentation, clear service communication, mobile usability, and customer action.",
    to: "/services/website-development",
  },
  {
    number: "02",
    title: "Business Website Development",
    description:
      "Responsive website systems for Livonia companies that need an organized, credible, and scalable online presence.",
    to: "/services/website-development",
  },
  {
    number: "03",
    title: "Website Redesign",
    description:
      "Replace an outdated or underperforming website with stronger messaging, improved navigation, and a more modern visual system.",
    to: "/services/website-development",
  },
  {
    number: "04",
    title: "Landing Page Design",
    description:
      "Focused pages for advertising campaigns, service promotions, appointments, consultations, and lead-generation offers.",
    to: "/services/landing-pages",
  },
  {
    number: "05",
    title: "Brand Identity",
    description:
      "Create a consistent visual direction through typography, color, layout, and reusable brand standards.",
    to: "/services/brand-identity",
  },
  {
    number: "06",
    title: "Business Automation",
    description:
      "Connect forms, scheduling tools, lead tracking, customer workflows, and other systems that reduce repetitive work.",
    to: "/services/automation-systems",
  },
];

const industries = [
  "Contractors and home-service companies",
  "Healthcare and care-service providers",
  "Automotive repair and transportation businesses",
  "Professional-service firms",
  "Manufacturing and industrial companies",
  "Restaurants and hospitality businesses",
  "Real estate and property-service companies",
  "Education and training organizations",
  "Retail and local product businesses",
  "Nonprofits and community organizations",
];

const processSteps = [
  {
    number: "01",
    title: "Business discovery",
    description:
      "We identify your services, customers, current website problems, competitive position, and the actions the new website should encourage.",
  },
  {
    number: "02",
    title: "Page and content strategy",
    description:
      "We organize the service hierarchy, navigation, local relevance, content priorities, internal links, and calls to action.",
  },
  {
    number: "03",
    title: "Responsive design",
    description:
      "The visual direction is designed to remain clear, professional, and easy to use across mobile phones, tablets, laptops, and larger screens.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "The approved design is built into an organized website using reusable components and scalable page systems.",
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
    question: "How much does website design cost in Livonia?",
    answer:
      "Pricing depends on the number of pages, content requirements, design complexity, custom functionality, integrations, and ongoing support. Techuvo offers landing pages, smaller business websites, redesigns, and larger custom website systems.",
  },
  {
    question: "Can Techuvo redesign my current business website?",
    answer:
      "Yes. Techuvo can rebuild an outdated, confusing, slow, or poorly structured website with clearer messaging, responsive layouts, improved navigation, and stronger calls to action.",
  },
  {
    question: "Can you build a website for a new Livonia business?",
    answer:
      "Yes. Techuvo can help establish the page structure, service messaging, brand direction, inquiry process, responsive design, domain connection, and other digital foundations needed for launch.",
  },
  {
    question: "Will my website work well on mobile devices?",
    answer:
      "Yes. Every Techuvo website is designed responsively so navigation, content, forms, calls to action, and imagery remain usable across smaller and larger screens.",
  },
  {
    question: "Can Techuvo help my business appear in Livonia searches?",
    answer:
      "Techuvo can build local-search foundations through useful Livonia-specific content, descriptive titles, strong service pages, internal links, responsive design, and organized technical structure. Rankings also depend on competition, reviews, links, business prominence, and ongoing activity.",
  },
  {
    question: "Can you connect forms, booking tools, analytics, or a CRM?",
    answer:
      "Yes. Depending on the project, Techuvo can connect inquiry forms, scheduling systems, analytics, customer-management tools, email workflows, payment systems, and other business software.",
  },
];

const nearbyLocations = [
  {
    city: "Dearborn",
    description:
      "Professional website design and digital systems for businesses serving Dearborn.",
    to: "/locations/dearborn",
  },
  {
    city: "Detroit",
    description:
      "Website design, landing pages, branding, and automation for Detroit businesses.",
    to: "/locations/detroit",
  },
  {
    city: "Southfield",
    description:
      "Responsive website development for companies and organizations serving Southfield.",
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

function Livonia() {
  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      "Livonia Website Design Company | Web Development | Techuvo";

    const description =
      "Techuvo provides custom website design, responsive development, redesigns, landing pages, branding, and digital automation for Livonia businesses.";

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
      "https://techuvo.dev/locations/livonia",
    );

    const structuredData = document.createElement("script");

    structuredData.id = "livonia-location-structured-data";
    structuredData.type = "application/ld+json";

    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ProfessionalService",
          name: "Techuvo",
          url: "https://techuvo.dev/locations/livonia",
          email: "hello@techuvo.dev",
          description,
          areaServed: {
            "@type": "City",
            name: "Livonia",
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
              name: "Livonia",
              item: "https://techuvo.dev/locations/livonia",
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
                Livonia, Michigan
              </div>

              <h1 className="page-heading mt-6">
                Livonia website design built for established local businesses.
              </h1>

              <p className="body-large mt-6">
                Techuvo creates modern websites, landing pages, brand systems,
                and digital workflows for Livonia businesses that need clearer
                communication, stronger credibility, and a more professional
                online presence.
              </p>

              <p className="body-copy mt-5 max-w-2xl">
                Whether you are launching a new company, replacing an outdated
                website, promoting a service, or improving customer workflows,
                Techuvo builds around the real needs of your business and
                audience.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="button button-primary"
                >
                  Start your Livonia project
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
                  "Professional business websites",
                  "Responsive on every device",
                  "Scalable page systems",
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
                      Livonia digital system
                    </p>

                    <span className="inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-slate-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      Active
                    </span>
                  </div>

                  <h2 className="mt-8 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
                    Turn your website into a stronger part of the business.
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                    Your website should explain your services, strengthen
                    customer confidence, support local visibility, and make it
                    easy for potential clients to contact your company.
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {[
                      "Clear service messaging",
                      "Professional positioning",
                      "Mobile-first navigation",
                      "Focused inquiry paths",
                      "Consistent visual identity",
                      "Expandable structure",
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
                      Serving businesses throughout Livonia and surrounding
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
                Livonia Website Services
              </span>

              <h2 className="section-heading">
                Digital services designed around real business needs.
              </h2>
            </div>

            <p className="section-header-description">
              Techuvo can create a complete website system or solve one focused
              problem, from modernizing an outdated website to building a
              landing page for a specific campaign.
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
                Livonia Industries
              </span>

              <h2 className="section-heading mt-5">
                Designed around how customers evaluate your business.
              </h2>

              <p className="body-large mt-6">
                Different industries require different service information,
                trust signals, visuals, calls to action, and customer journeys.
              </p>

              <p className="body-copy mt-5">
                A contractor may need estimate requests and project examples. A
                healthcare provider may need reassurance and accessible service
                information. A manufacturer may need capabilities, credibility,
                and business-to-business contact paths.
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
                A clear path from planning to launch.
              </h2>
            </div>

            <p className="section-header-description">
              Every stage keeps the business goals, content structure, visual
              direction, development, and final launch connected.
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
                Livonia Search Visibility
              </span>

              <h2 className="section-heading mt-5">
                Local pages should provide useful and specific information.
              </h2>

              <p className="body-large mt-6">
                Search visibility begins with helpful content, service
                relevance, strong technical structure, and a business that
                genuinely serves the market.
              </p>

              <p className="body-copy mt-5">
                This page combines Livonia-specific positioning, service
                information, industry context, internal links, frequently asked
                questions, responsive design, metadata, and structured data.
                Those foundations can support reviews, local citations,
                backlinks, your Google Business Profile, and future content.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Unique Livonia content",
                  "Descriptive page metadata",
                  "Service-focused internal links",
                  "Responsive page structure",
                  "Nearby city connections",
                  "FAQ structured data",
                  "Search-friendly headings",
                  "Clear project calls to action",
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
                  Build local relevance around the services your business
                  actually offers.
                </h3>

                <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                  Strong location pages should explain the service, target
                  audience, process, local relevance, and the reasons customers
                  should trust the business.
                </p>

                <div className="mt-8 space-y-3">
                  {[
                    "Livonia website design",
                    "Livonia web development",
                    "Livonia business websites",
                    "Livonia landing page design",
                    "Livonia website redesign",
                    "Livonia responsive web design",
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
                Livonia Website FAQ
              </span>

              <h2 className="section-heading">
                Common questions before starting a website project.
              </h2>
            </div>

            <p className="section-header-description">
              Clear answers help business owners understand the process, scope,
              and available options.
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
              Techuvo works with businesses throughout Livonia, Detroit, and
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
                  Livonia project intake
                </p>

                <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-[-0.055em] sm:text-5xl">
                  Build a website that matches the quality of your Livonia
                  business.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                  Tell Techuvo what your company offers, what your current
                  website is missing, and what you want potential customers to
                  do next.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-extrabold text-slate-950 transition hover:-translate-y-1 hover:bg-blue-50 sm:w-auto"
              >
                Start your Livonia website
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Livonia;