import { useEffect } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Ann Arbor Website Development",
    description:
      "Custom website design for companies that need a polished, modern, and highly credible digital presence.",
    to: "/services/website-development",
  },
  {
    number: "02",
    title: "Responsive Web Development",
    description:
      "Fast, organized, and scalable websites that remain easy to use across mobile phones, tablets, laptops, and large screens.",
    to: "/services/website-development",
  },
  {
    number: "03",
    title: "Landing Page Design",
    description:
      "Focused landing pages for campaigns, service offers, product launches, appointments, registrations, and lead generation.",
    to: "/services/landing-pages",
  },
  {
    number: "04",
    title: "Website Redesign",
    description:
      "Transform an outdated or underperforming website with stronger messaging, improved structure, and a more professional visual system.",
    to: "/services/website-development",
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
      "Connect forms, lead tracking, scheduling, customer workflows, and other systems that reduce repetitive business tasks.",
    to: "/services/automation-systems",
  },
];

const industries = [
  "Technology companies and startups",
  "Professional-service firms",
  "Healthcare and care providers",
  "Consultants and independent experts",
  "Education and training organizations",
  "Restaurants and hospitality businesses",
  "Real estate and property services",
  "Contractors and home-service companies",
  "Creative studios and media companies",
  "Nonprofits and community organizations",
];

const processSteps = [
  {
    number: "01",
    title: "Business and audience discovery",
    description:
      "We identify your services, customers, competitive position, existing website problems, and the outcomes the new website should create.",
  },
  {
    number: "02",
    title: "Content and search architecture",
    description:
      "We plan the page structure, service hierarchy, local relevance, conversion paths, headings, and internal links.",
  },
  {
    number: "03",
    title: "Visual design system",
    description:
      "The website receives a modern visual direction that reflects your company while remaining clear, responsive, and easy to navigate.",
  },
  {
    number: "04",
    title: "Responsive development",
    description:
      "The approved design is developed into an organized website using reusable components and scalable page systems.",
  },
  {
    number: "05",
    title: "Testing and launch",
    description:
      "The website is reviewed across devices, connected to your domain, checked for usability, and prepared for future expansion.",
  },
];

const frequentlyAskedQuestions = [
  {
    question: "How much does website development cost in Ann Arbor, MI?",
    answer:
      "Website development pricing in Ann Arbor depends on the number of pages, design requirements, content, integrations, custom functionality, and ongoing support. Techuvo builds landing pages, small business websites, redesigns, and larger custom web experiences for Ann Arbor-area organizations.",
  },
  {
    question: "Does Techuvo provide web design for Ann Arbor small businesses and startups?",
    answer:
      "Yes. Techuvo provides web design and website development for Ann Arbor small businesses, startups, professionals, and organizations that need clear messaging, responsive design, lead capture, and a scalable digital foundation.",
  },
  {
    question: "Can you redesign an existing business website in Ann Arbor?",
    answer:
      "Yes. Techuvo can redesign outdated or underperforming Ann Arbor business websites with clearer messaging, stronger visual presentation, responsive layouts, improved structure, and better customer journeys.",
  },
  {
    question: "Can you build landing pages for advertising campaigns?",
    answer:
      "Yes. Techuvo creates focused landing pages for paid advertising, event registrations, service promotions, product launches, consultations, and other conversion goals.",
  },
  {
    question: "Can you help my business improve its visibility in Ann Arbor Google searches?",
    answer:
      "Techuvo can build local-search foundations through useful Ann Arbor content, descriptive titles, relevant service pages, internal linking, responsive structure, and technical organization. Local and organic rankings also depend on proximity, competition, reviews, backlinks, business prominence, Google Business Profile signals, and ongoing activity.",
  },
  {
    question: "Can Techuvo connect analytics, booking, forms, or a CRM?",
    answer:
      "Yes. Depending on the project, Techuvo can connect analytics, scheduling tools, inquiry forms, customer-management systems, email workflows, payment tools, and other business software.",
  },
];

const nearbyLocations = [
  {
    city: "Ypsilanti",
    description:
      "Website design and development for businesses serving Ypsilanti and nearby communities.",
    to: "/locations/ypsilanti",
  },
  {
    city: "Detroit",
    description:
      "Custom websites, landing pages, branding, and digital systems for Detroit businesses.",
    to: "/locations/detroit",
  },
  {
    city: "Southfield",
    description:
      "Professional website development for companies and organizations serving Southfield.",
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

function AnnArbor() {
  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      "Website Development Ann Arbor, MI | Web Design | Techuvo";

    const description =
      "Looking for website development in Ann Arbor, MI? Techuvo provides custom web design, responsive development, landing pages, redesigns, and digital solutions for Ann Arbor businesses.";

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

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    const createdKeywords = !metaKeywords;
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    const previousKeywords = metaKeywords.getAttribute("content");
    metaKeywords.setAttribute(
      "content",
      "website development Ann Arbor, web design Ann Arbor, web developer Ann Arbor, website designer Ann Arbor, Ann Arbor website development, Ann Arbor web design, small business website Ann Arbor, website redesign Ann Arbor, Michigan web developer",
    );

    let robots = document.querySelector('meta[name="robots"]');
    const createdRobots = !robots;
    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      document.head.appendChild(robots);
    }
    const previousRobots = robots.getAttribute("content");
    robots.setAttribute(
      "content",
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    );

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
      "https://techuvo.dev/locations/ann-arbor",
    );

    const structuredData = document.createElement("script");

    structuredData.id = "ann-arbor-location-structured-data";
    structuredData.type = "application/ld+json";

    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ProfessionalService",
          "@id": "https://techuvo.dev/#business",
          name: "Techuvo",
          url: "https://techuvo.dev/locations/ann-arbor",
          email: "hello@techuvo.dev",
          description,
          knowsAbout: [
            "Website Development",
            "Web Design",
            "Responsive Web Development",
            "Website Redesign",
            "Landing Page Design",
            "Local SEO",
            "Business Automation",
          ],
          areaServed: [
            {
              "@type": "City",
              name: "Ann Arbor",
              containedInPlace: {
                "@type": "State",
                name: "Michigan",
              },
            },
            {
              "@type": "AdministrativeArea",
              name: "Washtenaw County",
            },
          ],
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
          "@type": "WebPage",
          "@id": "https://techuvo.dev/locations/ann-arbor#webpage",
          url: "https://techuvo.dev/locations/ann-arbor",
          name: "Website Development Ann Arbor, MI | Web Design | Techuvo",
          description,
          about: {
            "@id": "https://techuvo.dev/#business",
          },
          mainEntity: {
            "@id": "https://techuvo.dev/#business",
          },
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
              name: "Ann Arbor",
              item: "https://techuvo.dev/locations/ann-arbor",
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

      if (createdKeywords) {
        metaKeywords.remove();
      } else if (previousKeywords !== null) {
        metaKeywords.setAttribute("content", previousKeywords);
      } else {
        metaKeywords.removeAttribute("content");
      }

      if (createdRobots) {
        robots.remove();
      } else if (previousRobots !== null) {
        robots.setAttribute("content", previousRobots);
      } else {
        robots.removeAttribute("content");
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
                Ann Arbor, Michigan
              </div>

              <h1 className="page-heading mt-6">
               Website Development & Web Design in Ann Arbor, Michigan
              </h1>

              <p className="body-large mt-6">
                Techuvo provides custom website development and web design for
                Ann Arbor businesses, startups, professionals, and organizations
                that need a fast, responsive, credible digital presence built to
                generate inquiries and support growth.
              </p>

              <p className="body-copy mt-5 max-w-2xl">
                Whether you need a new business website, an Ann Arbor web
                developer for a redesign, a high-converting landing page, or a
                scalable digital system, Techuvo builds around your customers,
                services, goals, and local market.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="button button-primary"
                >
                  Start your Ann Arbor project
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
                  "Modern visual systems",
                  "Responsive development",
                  "Scalable page architecture",
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
                      Ann Arbor digital system
                    </p>

                    <span className="inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-slate-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      Active
                    </span>
                  </div>

                  <h2 className="mt-8 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
                    Present your company with the level of clarity customers
                    expect.
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                    A strong website should quickly explain what your company
                    does, who it serves, why it is credible, and how visitors
                    can take the next step.
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {[
                      "Professional positioning",
                      "Clear service hierarchy",
                      "Responsive user experience",
                      "Focused conversion paths",
                      "Consistent brand direction",
                      "Scalable digital foundation",
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
                      Serving companies throughout Ann Arbor and surrounding
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
                Ann Arbor Web Development Services
              </span>

              <h2 className="section-heading">
                Website development and web design for Ann Arbor businesses.
              </h2>
            </div>

            <p className="section-header-description">
              Techuvo can build a complete digital presence or solve one
              focused problem, from launching a new website to improving lead
              capture and business workflows.
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
                Website Development for Ann Arbor Businesses
              </span>

              <h2 className="section-heading mt-5">
                Local web design built around your industry and customers.
              </h2>

              <p className="body-large mt-6">
                Ann Arbor businesses need more than attractive pages. Effective
                web development combines clear content, trust signals, responsive
                design, search-friendly structure, and focused calls to action.
              </p>

              <p className="body-copy mt-5">
                Techuvo works with startups, professional services, healthcare
                and care providers, contractors, consultants, restaurants,
                creatives, nonprofits, and other organizations serving Ann Arbor
                and surrounding Washtenaw County communities.
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
              Every stage keeps the business goal, page structure, visual
              system, development, and final launch connected.
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
                Ann Arbor Website Development & Local Visibility
              </span>

              <h2 className="section-heading mt-5">
                Built to support visibility for relevant Ann Arbor searches.
              </h2>

              <p className="body-large mt-6">
                Customers searching for website development in Ann Arbor, web
                design in Ann Arbor, or a local web developer need a page that
                clearly connects Techuvo's services with the Ann Arbor market.
              </p>

              <p className="body-copy mt-5">
                This Ann Arbor service page combines local business context,
                website development services, internal links, responsive design,
                descriptive metadata, FAQs, and structured data. These foundations
                support organic search visibility alongside reviews, local
                citations, backlinks, Google Business Profile signals, and
                ongoing content.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Unique Ann Arbor content",
                  "Descriptive title and description",
                  "Service-focused internal links",
                  "Responsive page structure",
                  "Nearby city connections",
                  "FAQ structured data",
                  "Search-friendly headings",
                  "Clear inquiry paths",
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
                  Ann Arbor web development
                </p>

                <h3 className="mt-4 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
                  Website development services for businesses across Ann Arbor.
                </h3>

                <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                  Techuvo provides custom web development, responsive web design,
                  landing pages, redesigns, and digital systems for businesses
                  serving customers throughout Ann Arbor and Washtenaw County.
                </p>

                <div className="mt-8 space-y-3">
                  {[
                    "Website development Ann Arbor",
                    "Web design Ann Arbor",
                    "Web developer Ann Arbor",
                    "Ann Arbor business websites",
                    "Website redesign Ann Arbor",
                    "Responsive web design Ann Arbor",
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
                Ann Arbor Web Design & Development FAQ
              </span>

              <h2 className="section-heading">
                Common questions about website development in Ann Arbor.
              </h2>
            </div>

            <p className="section-header-description">
              Clear answers help businesses understand the scope, process, and
              possibilities before contacting Techuvo.
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
                Explore website services across nearby Michigan markets.
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
                  Ann Arbor project intake
                </p>

                <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-[-0.055em] sm:text-5xl">
                  Build a high-performing website for your Ann Arbor business.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                  Tell Techuvo what your Ann Arbor business does, what your
                  current online presence is missing, and what you want customers
                  to do next.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-extrabold text-slate-950 transition hover:-translate-y-1 hover:bg-blue-50 sm:w-auto"
              >
                Start your Ann Arbor website
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AnnArbor;