import { useEffect } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Southfield Website Design",
    description:
      "Custom website design focused on credibility, professional positioning, service clarity, and stronger customer action.",
    to: "/services/website-development",
  },
  {
    number: "02",
    title: "Corporate Website Development",
    description:
      "Responsive, organized website systems for professional firms, established companies, and growing organizations.",
    to: "/services/website-development",
  },
  {
    number: "03",
    title: "Website Redesign",
    description:
      "Modernize an outdated or underperforming website with clearer messaging, stronger navigation, and improved mobile usability.",
    to: "/services/website-development",
  },
  {
    number: "04",
    title: "Landing Page Development",
    description:
      "Focused landing pages for consultations, campaigns, service offers, events, lead generation, and business-to-business outreach.",
    to: "/services/landing-pages",
  },
  {
    number: "05",
    title: "Brand Identity",
    description:
      "Create a consistent visual system through typography, color, layout, and reusable brand standards.",
    to: "/services/brand-identity",
  },
  {
    number: "06",
    title: "Business Automation",
    description:
      "Connect forms, lead tracking, scheduling, customer workflows, and internal systems that reduce repetitive work.",
    to: "/services/automation-systems",
  },
];

const industries = [
  "Law firms and legal professionals",
  "Financial and insurance companies",
  "Healthcare and care-service providers",
  "Consultants and professional-service firms",
  "Real estate and property businesses",
  "Technology and software companies",
  "Contractors and commercial service providers",
  "Education and training organizations",
  "Automotive and transportation companies",
  "Nonprofits and community organizations",
];

const processSteps = [
  {
    number: "01",
    title: "Business discovery",
    description:
      "We identify your services, audience, competitive position, current website problems, and the actions the new website should create.",
  },
  {
    number: "02",
    title: "Page and content strategy",
    description:
      "We organize the service hierarchy, navigation, local relevance, content priorities, calls to action, and internal links.",
  },
  {
    number: "03",
    title: "Professional design system",
    description:
      "The visual direction is created to communicate authority, clarity, and consistency across mobile and desktop devices.",
  },
  {
    number: "04",
    title: "Responsive development",
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
    question: "How much does website design cost in Southfield?",
    answer:
      "Pricing depends on the number of pages, content requirements, design complexity, integrations, custom functionality, and ongoing support. Techuvo offers landing pages, business websites, redesigns, and larger custom website systems.",
  },
  {
    question: "Can Techuvo redesign an existing corporate website?",
    answer:
      "Yes. Techuvo can rebuild an outdated, confusing, slow, or poorly structured website with clearer messaging, stronger navigation, responsive layouts, and a more professional visual system.",
  },
  {
    question: "Can you build websites for professional-service firms?",
    answer:
      "Yes. Techuvo can build websites for law firms, consultants, healthcare organizations, financial companies, real estate businesses, and other professional-service providers.",
  },
  {
    question: "Will the website work well on mobile devices?",
    answer:
      "Yes. Every Techuvo website is designed responsively so navigation, content, forms, calls to action, and imagery remain usable across smaller and larger screens.",
  },
  {
    question: "Can Techuvo help my company appear in Southfield searches?",
    answer:
      "Techuvo can build local-search foundations through useful Southfield-specific content, descriptive titles, service pages, internal links, responsive design, and organized technical structure. Rankings also depend on competition, reviews, links, business prominence, and ongoing activity.",
  },
  {
    question: "Can you connect analytics, forms, booking tools, or a CRM?",
    answer:
      "Yes. Depending on the project, Techuvo can connect analytics, inquiry forms, scheduling tools, customer-management systems, email workflows, payment tools, and other business software.",
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
    city: "Dearborn",
    description:
      "Professional website design and digital systems for businesses serving Dearborn.",
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

function Southfield() {
  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      "Southfield Website Design Company | Web Development | Techuvo";

    const description =
      "Techuvo provides custom website design, corporate web development, redesigns, landing pages, branding, and automation for Southfield businesses.";

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
      "https://techuvo.dev/locations/southfield",
    );

    const structuredData = document.createElement("script");

    structuredData.id = "southfield-location-structured-data";
    structuredData.type = "application/ld+json";

    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ProfessionalService",
          name: "Techuvo",
          url: "https://techuvo.dev/locations/southfield",
          email: "hello@techuvo.dev",
          description,
          areaServed: {
            "@type": "City",
            name: "Southfield",
            containedInPlace: {
              "@type": "State",
              name: "Michigan",
            },
          },
          serviceType: [
            "Website Design",
            "Corporate Website Development",
            "Website Redesign",
            "Landing Page Development",
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
              name: "Southfield",
              item: "https://techuvo.dev/locations/southfield",
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
                Southfield, Michigan
              </div>

              <h1 className="page-heading mt-6">
                Southfield website design for professional and growing
                companies.
              </h1>

              <p className="body-large mt-6">
                Techuvo creates modern websites, landing pages, brand systems,
                and digital workflows for Southfield companies that need a
                stronger, more credible, and more organized online presence.
              </p>

              <p className="body-copy mt-5 max-w-2xl">
                Whether you operate a professional firm, service company,
                healthcare organization, technology business, or established
                local brand, Techuvo builds around the expectations of your
                audience and the goals of your company.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="button button-primary"
                >
                  Start your Southfield project
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
                  "Professional positioning",
                  "Responsive development",
                  "Scalable business systems",
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
                      Southfield digital system
                    </p>

                    <span className="inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-slate-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      Active
                    </span>
                  </div>

                  <h2 className="mt-8 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
                    Build the kind of digital presence serious clients expect.
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                    Your website should communicate authority, explain your
                    services clearly, reduce uncertainty, and make the next
                    action easy for potential clients.
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {[
                      "Corporate credibility",
                      "Clear service hierarchy",
                      "Mobile-first usability",
                      "Strong inquiry paths",
                      "Consistent brand system",
                      "Expandable architecture",
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
                      Serving companies throughout Southfield and surrounding
                      Oakland County communities.
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
                Southfield Website Services
              </span>

              <h2 className="section-heading">
                Digital services designed for professional business growth.
              </h2>
            </div>

            <p className="section-header-description">
              Techuvo can create a complete website system or solve one focused
              problem, from redesigning an outdated corporate site to building
              a landing page for a specific campaign.
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
                Southfield Industries
              </span>

              <h2 className="section-heading mt-5">
                Designed around the expectations of professional clients.
              </h2>

              <p className="body-large mt-6">
                Different industries require different levels of authority,
                trust, information, proof, and customer guidance.
              </p>

              <p className="body-copy mt-5">
                A law firm may need authority and clear practice-area pages. A
                financial company may need trust and careful service
                explanations. A consultant may need positioning, expertise,
                and lead capture. Techuvo shapes the website around how your
                audience evaluates your business.
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
                A clear path from strategy to launch.
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
                Southfield Search Visibility
              </span>

              <h2 className="section-heading mt-5">
                Local pages should combine relevance, usefulness, and strong
                technical structure.
              </h2>

              <p className="body-large mt-6">
                Search visibility begins with helpful information, clear
                service relevance, and a business that genuinely serves the
                market.
              </p>

              <p className="body-copy mt-5">
                This page combines Southfield-specific positioning, service
                information, industry context, internal links, frequently asked
                questions, responsive design, metadata, and structured data.
                Those foundations can support reviews, citations, backlinks,
                your Google Business Profile, and future content.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Unique Southfield content",
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
                  Build local authority around professional services and real
                  customer needs.
                </h3>

                <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                  Strong local pages explain what the business does, who it
                  serves, how the process works, and why the company is relevant
                  to that specific market.
                </p>

                <div className="mt-8 space-y-3">
                  {[
                    "Southfield website design",
                    "Southfield web development",
                    "Southfield corporate websites",
                    "Southfield landing page design",
                    "Southfield website redesign",
                    "Southfield professional web design",
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
                Southfield Website FAQ
              </span>

              <h2 className="section-heading">
                Common questions from professional businesses.
              </h2>
            </div>

            <p className="section-header-description">
              Clear answers help companies understand the process, project
              scope, and available options before contacting Techuvo.
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
              Techuvo works with businesses throughout Southfield, Detroit, and
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
                  Southfield project intake
                </p>

                <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-[-0.055em] sm:text-5xl">
                  Build a website that reflects the professionalism of your
                  Southfield company.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                  Tell Techuvo what your company offers, who it serves, what
                  your current website is missing, and what you want potential
                  clients to do next.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-extrabold text-slate-950 transition hover:-translate-y-1 hover:bg-blue-50 sm:w-auto"
              >
                Start your Southfield website
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Southfield;