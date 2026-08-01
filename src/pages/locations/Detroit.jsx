import { useEffect } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Detroit Website Design",
    description:
      "Custom website design focused on credibility, clear messaging, mobile usability, and stronger customer action.",
    to: "/services/website-development",
  },
  {
    number: "02",
    title: "Website Redesign",
    description:
      "Modernize an outdated, slow, confusing, or poorly structured website without losing the identity of your business.",
    to: "/services/website-development",
  },
  {
    number: "03",
    title: "Landing Page Development",
    description:
      "Focused pages for Detroit advertising campaigns, promotions, service offers, lead generation, and appointment requests.",
    to: "/services/landing-pages",
  },
  {
    number: "04",
    title: "Brand Identity",
    description:
      "A consistent visual system that helps your company look established across its website, marketing, and customer touchpoints.",
    to: "/services/brand-identity",
  },
  {
    number: "05",
    title: "Business Automation",
    description:
      "Practical digital workflows that organize leads, reduce repetitive work, and improve how customer information moves through your business.",
    to: "/services/automation-systems",
  },
  {
    number: "06",
    title: "Local SEO Foundations",
    description:
      "Search-friendly page structure, city relevance, service content, metadata, internal links, and technical foundations for local visibility.",
    to: "/contact",
  },
];

const industries = [
  "Contractors and home-service companies",
  "Automotive repair and transportation businesses",
  "Restaurants and food-service companies",
  "Healthcare and care-service providers",
  "Education programs and childcare organizations",
  "Real estate and property-service businesses",
  "Law firms and professional services",
  "Nonprofits, churches, and community organizations",
  "Authors, media companies, and creative professionals",
];

const process = [
  {
    number: "01",
    title: "Detroit market discovery",
    description:
      "We identify your services, target customers, local competition, current website problems, and the action you want visitors to take.",
  },
  {
    number: "02",
    title: "Page and search strategy",
    description:
      "We organize your core service pages, Detroit-specific content, calls to action, internal links, and customer journey.",
  },
  {
    number: "03",
    title: "Responsive design",
    description:
      "Your website is designed to remain clear, professional, and easy to use across phones, tablets, laptops, and larger screens.",
  },
  {
    number: "04",
    title: "Development and testing",
    description:
      "The approved design is developed, tested, refined, and prepared for search engines and real customers.",
  },
  {
    number: "05",
    title: "Launch and growth",
    description:
      "Your website is connected, reviewed, launched, and positioned for future service pages, city pages, campaigns, and content.",
  },
];

const frequentlyAskedQuestions = [
  {
    question: "How much does a business website cost in Detroit?",
    answer:
      "The price depends on the number of pages, content requirements, custom functionality, design complexity, and ongoing support. Techuvo offers focused landing pages, small business websites, and larger custom projects based on the actual business need.",
  },
  {
    question: "Can Techuvo redesign my existing Detroit business website?",
    answer:
      "Yes. Techuvo can rebuild an outdated or underperforming website with stronger structure, responsive design, clearer service messaging, better calls to action, and a more professional visual system.",
  },
  {
    question: "Do you only work with businesses located in Detroit?",
    answer:
      "No. Techuvo serves businesses throughout Detroit, Southeast Michigan, and beyond. The Detroit page is specifically designed for businesses targeting customers in Detroit and nearby communities.",
  },
  {
    question: "Can you help my website appear in Detroit searches?",
    answer:
      "Techuvo can build the technical and content foundations for local visibility, including useful Detroit-specific content, descriptive titles, service pages, internal links, responsive design, and search-friendly structure. Rankings also depend on competition, business prominence, reviews, links, and ongoing activity.",
  },
  {
    question: "Will my website work well on mobile phones?",
    answer:
      "Yes. Every Techuvo website is designed responsively so content, navigation, forms, calls to action, and imagery remain usable across smaller and larger screens.",
  },
  {
    question: "Can you connect forms, booking tools, analytics, or a CRM?",
    answer:
      "Yes. Depending on the project, Techuvo can connect inquiry forms, booking systems, analytics, customer-management tools, email workflows, payment systems, and other business software.",
  },
];

const nearbyLocations = [
  {
    city: "Dearborn",
    description: "Website design and digital systems for Dearborn businesses.",
    to: "/locations/dearborn",
  },
  {
    city: "Southfield",
    description:
      "Professional website development for Southfield companies and organizations.",
    to: "/locations/southfield",
  },
  {
    city: "Livonia",
    description:
      "Responsive business websites for companies serving Livonia and nearby areas.",
    to: "/locations/livonia",
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

function Detroit() {
  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      "Detroit Website Design Company | Web Development & SEO | Techuvo";

    const description =
      "Techuvo provides custom website design, website development, landing pages, branding, local SEO foundations, and digital automation for Detroit businesses.";

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
      "https://techuvo.dev/locations/detroit",
    );

    let structuredData = document.getElementById(
      "detroit-location-structured-data",
    );

    if (!structuredData) {
      structuredData = document.createElement("script");
      structuredData.id = "detroit-location-structured-data";
      structuredData.type = "application/ld+json";
      document.head.appendChild(structuredData);
    }

    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ProfessionalService",
          name: "Techuvo",
          url: "https://techuvo.dev/locations/detroit",
          email: "hello@techuvo.dev",
          areaServed: {
            "@type": "City",
            name: "Detroit",
            containedInPlace: {
              "@type": "State",
              name: "Michigan",
            },
          },
          serviceType: [
            "Website Design",
            "Website Development",
            "Landing Page Development",
            "Brand Identity",
            "Local SEO",
            "Business Automation",
          ],
          description,
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
              name: "Detroit",
              item: "https://techuvo.dev/locations/detroit",
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
                Detroit, Michigan
              </div>

              <h1 className="page-heading mt-6">
                Detroit website design built to strengthen your business.
              </h1>

              <p className="body-large mt-6">
                Techuvo creates modern websites, landing pages, brand systems,
                and digital workflows for Detroit businesses that need to look
                more professional, communicate more clearly, and generate more
                opportunities online.
              </p>

              <p className="body-copy mt-5 max-w-2xl">
                Whether you are launching a new company, replacing an outdated
                website, promoting a local service, or improving your digital
                operations, Techuvo builds around the actual needs of your
                business and customers.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/contact" className="button button-primary">
                  Start your Detroit project
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
                  "Detroit-focused content",
                  "Responsive on every screen",
                  "Custom business strategy",
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
                      Detroit digital presence
                    </p>

                    <span className="inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-slate-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      Active
                    </span>
                  </div>

                  <h2 className="mt-8 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
                    Be easier to find, understand, trust, and contact.
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                    Detroit customers often compare several businesses before
                    calling. Your website should quickly explain what you do,
                    where you work, why customers should trust you, and how to
                    take the next step.
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {[
                      "Clear service pages",
                      "Local market relevance",
                      "Trust-focused presentation",
                      "Strong inquiry paths",
                      "Mobile-first structure",
                      "Scalable city coverage",
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
                      Serving Detroit businesses and organizations throughout
                      the city and surrounding Southeast Michigan communities.
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
              <span className="eyebrow">Detroit Web Services</span>

              <h2 className="section-heading">
                Website and digital services built around local business goals.
              </h2>
            </div>

            <p className="section-header-description">
              Techuvo can support a complete digital presence or solve one
              focused problem, from redesigning an old website to creating a
              landing page for a Detroit advertising campaign.
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

                    <span className="room-status">Available</span>
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
              <span className="eyebrow">Detroit Industries</span>

              <h2 className="section-heading mt-5">
                Built for the businesses that keep Detroit moving.
              </h2>

              <p className="body-large mt-6">
                Different industries need different kinds of trust, information,
                imagery, calls to action, and customer journeys.
              </p>

              <p className="body-copy mt-5">
                A contractor website should make estimates easy to request. An
                automotive website should clearly explain services and contact
                options. A care provider should communicate safety, experience,
                and compassion. Techuvo shapes the website around how customers
                evaluate your specific business.
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
              <span className="eyebrow">How It Works</span>

              <h2 className="section-heading">
                A structured process for Detroit website projects.
              </h2>
            </div>

            <p className="section-header-description">
              Every phase connects the business strategy, local relevance,
              visual direction, development, testing, and launch.
            </p>
          </div>

          <div className="space-y-5">
            {process.map((step) => (
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
              <span className="eyebrow">Local Visibility</span>

              <h2 className="section-heading mt-5">
                A Detroit page should provide value beyond repeating the city
                name.
              </h2>

              <p className="body-large mt-6">
                Strong local visibility depends on relevance, usefulness,
                technical quality, business authority, and consistent activity.
              </p>

              <p className="body-copy mt-5">
                Techuvo builds location pages with distinct service content,
                customer questions, nearby markets, useful internal links,
                clear metadata, mobile usability, and natural local context.
                Those foundations can work alongside your Google Business
                Profile, customer reviews, citations, backlinks, and ongoing
                content.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Unique Detroit page copy",
                  "Descriptive page title",
                  "Search-friendly headings",
                  "Service internal links",
                  "Nearby city connections",
                  "FAQ structured data",
                  "Responsive page structure",
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
                  Detroit search foundation
                </p>

                <h3 className="mt-4 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
                  Build one strong local presence, then expand deliberately.
                </h3>

                <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                  The goal is not to publish dozens of nearly identical pages.
                  The goal is to build useful pages for the cities and services
                  your business can genuinely support.
                </p>

                <div className="mt-8 space-y-3">
                  {[
                    "Detroit website design",
                    "Detroit website development",
                    "Detroit small business websites",
                    "Detroit landing page design",
                    "Detroit website redesign",
                    "Detroit local SEO website structure",
                  ].map((term, index) => (
                    <div
                      key={term}
                      className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-4"
                    >
                      <span className="text-sm font-bold text-white">
                        {term}
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
                  Build your local presence
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
              <span className="eyebrow">Detroit Website FAQ</span>

              <h2 className="section-heading">
                Common questions from Detroit business owners.
              </h2>
            </div>

            <p className="section-header-description">
              Clear answers help potential clients understand the project before
              they contact Techuvo.
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
              <span className="eyebrow">Nearby Service Areas</span>

              <h2 className="section-heading">
                Techuvo also supports businesses across Metro Detroit.
              </h2>
            </div>

            <p className="section-header-description">
              Explore nearby location pages for more city-specific website and
              digital service information.
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
                  Detroit project intake
                </p>

                <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-[-0.055em] sm:text-5xl">
                  Build a website that represents the level your Detroit
                  business is reaching.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                  Tell Techuvo what your business does, what your current
                  website is missing, and what you want customers to do next.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-extrabold text-slate-950 transition hover:-translate-y-1 hover:bg-blue-50 sm:w-auto"
              >
                Start your Detroit website
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Detroit;