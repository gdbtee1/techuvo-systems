import { useEffect } from "react";
import { Link } from "react-router-dom";

const bookingUrl = "#book-website-call";
const starterDepositUrl = "#starter-website-deposit";
const businessDepositUrl = "#business-website-deposit";
const growthDepositUrl = "#growth-website-deposit";

const websiteTypes = [
  {
    number: "01",
    title: "Small Business Websites",
    description:
      "Professional websites that clearly explain your services, strengthen trust, and make it easy for potential customers to contact your business.",
  },
  {
    number: "02",
    title: "Service Business Websites",
    description:
      "Structured websites for contractors, care providers, automotive companies, consultants, and other service-based organizations.",
  },
  {
    number: "03",
    title: "Website Redesigns",
    description:
      "Replace an outdated, confusing, slow, or poorly organized website with a more modern and responsive digital experience.",
  },
  {
    number: "04",
    title: "Multi-Location Websites",
    description:
      "Scalable website systems for companies serving multiple cities, markets, branches, or service areas.",
  },
  {
    number: "05",
    title: "Portfolio Websites",
    description:
      "Visual websites for authors, designers, creators, media companies, professionals, and businesses that need to showcase their work.",
  },
  {
    number: "06",
    title: "Custom Digital Platforms",
    description:
      "More advanced website systems with customer portals, content management, forms, dashboards, integrations, and reusable business tools.",
  },
];

const packages = [
  {
    name: "Starter Website",
    price: "$499",
    deposit: "$150 deposit",
    timeline: "5–7 business days",
    bestFor:
      "New businesses and independent professionals that need a focused online presence with a clear customer journey.",
    features: [
      "One custom website page",
      "Responsive mobile and desktop design",
      "Service and business overview",
      "Contact form or booking connection",
      "Basic search metadata",
      "Social and contact links",
      "One revision round",
    ],
    depositUrl: starterDepositUrl,
    highlighted: false,
  },
  {
    name: "Business Website",
    price: "$999",
    deposit: "$300 deposit",
    timeline: "7–14 business days",
    bestFor:
      "Established businesses that need multiple pages, stronger service communication, trust sections, and lead-generation paths.",
    features: [
      "Up to five custom pages",
      "Responsive design system",
      "Home, services, about, and contact structure",
      "Lead form or booking integration",
      "Portfolio, reviews, or trust sections",
      "Basic local SEO foundations",
      "Analytics connection",
      "Two revision rounds",
    ],
    depositUrl: businessDepositUrl,
    highlighted: true,
  },
  {
    name: "Growth Website System",
    price: "$1,999+",
    deposit: "$600 deposit",
    timeline: "2–5 weeks",
    bestFor:
      "Growing companies that need a larger website, advanced functionality, multiple services, locations, or connected business systems.",
    features: [
      "Custom multi-page website architecture",
      "Advanced responsive interface design",
      "Service and location page systems",
      "Content management integration",
      "Forms, scheduling, CRM, or payment connections",
      "Advanced analytics and tracking",
      "Technical SEO foundations",
      "Reusable components and scalable structure",
      "Launch support and documentation",
    ],
    depositUrl: growthDepositUrl,
    highlighted: false,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Business discovery",
    description:
      "We identify your services, target customers, current website problems, competitors, business goals, and the actions visitors should take.",
  },
  {
    number: "02",
    title: "Website strategy",
    description:
      "The page structure, content hierarchy, navigation, search intent, conversion paths, and technical requirements are planned.",
  },
  {
    number: "03",
    title: "Responsive design",
    description:
      "The visual system is designed around your company, audience, brand direction, and the way visitors will use the website across different screens.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "The approved direction is developed into a responsive website using organized, reusable, and scalable components.",
  },
  {
    number: "05",
    title: "Testing and launch",
    description:
      "The website is tested across devices, reviewed for broken interactions, connected to your domain, and prepared for real visitors.",
  },
];

const benefits = [
  "A stronger first impression",
  "Clearer service communication",
  "Better mobile usability",
  "More professional brand presentation",
  "Easier customer inquiries",
  "Improved local search foundations",
  "Scalable page architecture",
  "A digital presence working around the clock",
];

const frequentlyAskedQuestions = [
  {
    question: "How much does a custom business website cost?",
    answer:
      "The price depends on the number of pages, design complexity, content requirements, custom functionality, integrations, and support needs. Techuvo offers focused one-page websites, multi-page business websites, and larger custom systems.",
  },
  {
    question: "How long does website development take?",
    answer:
      "A focused website may take several business days. Multi-page websites often take one to three weeks, while larger systems can take several weeks depending on content, integrations, feedback, and technical requirements.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Yes. Every Techuvo website is designed responsively so navigation, content, forms, images, and calls to action remain usable across phones, tablets, laptops, and larger displays.",
  },
  {
    question: "Can Techuvo redesign my current website?",
    answer:
      "Yes. Techuvo can rebuild an outdated, confusing, slow, or poorly structured website with clearer messaging, stronger navigation, responsive layouts, and improved visual presentation.",
  },
  {
    question: "Can I update the website after it launches?",
    answer:
      "Yes. Depending on the project, Techuvo can provide a content-management system, editable content areas, documentation, or ongoing maintenance and support.",
  },
  {
    question: "Can you connect forms, booking, payments, or a CRM?",
    answer:
      "Yes. Techuvo can connect supported inquiry forms, scheduling systems, payment tools, analytics, customer-management platforms, email workflows, and other business software.",
  },
  {
    question: "Will the website be optimized for search engines?",
    answer:
      "Techuvo includes foundational search elements such as clear headings, descriptive metadata, responsive structure, internal linking, crawlable content, and organized page architecture. Search rankings also depend on competition, authority, reviews, links, and ongoing content.",
  },
  {
    question: "What happens after I pay the deposit?",
    answer:
      "After the deposit is confirmed, you will complete the project intake, book a strategy call, provide your business information and assets, and receive the next steps required to begin.",
  },
];

const relatedServices = [
  {
    title: "Landing Pages",
    description:
      "Create focused campaign pages for advertising, offers, appointments, registrations, and lead generation.",
    to: "/services/landing-pages",
  },
  {
    title: "Brand Identity",
    description:
      "Develop the logo direction, typography, colors, and visual standards your website should use consistently.",
    to: "/services/brand-identity",
  },
  {
    title: "Automation Systems",
    description:
      "Connect your website forms, leads, scheduling, customer information, and follow-up systems.",
    to: "/services/automation-systems",
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

function WebsiteIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <rect
        x="3.5"
        y="4.5"
        width="17"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M8 20h8M12 16.5V20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />

      <path
        d="M7 8h4M7 11h7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function WebsitePreview() {
  return (
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

        <div className="relative flex min-h-[30rem] flex-col">
          <div className="flex items-center justify-between gap-4">
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-blue-300">
              Website system
            </p>

            <span className="inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-slate-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Development active
            </span>
          </div>

          <div className="mt-8 overflow-hidden rounded-[1.4rem] border border-white/10 bg-white">
            <div className="flex h-12 items-center justify-between border-b border-slate-200 px-4">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              </div>

              <span className="h-2 w-24 rounded-full bg-slate-200" />
            </div>

            <div className="p-4 sm:p-5">
              <div className="flex items-center justify-between gap-4">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-600 text-xs font-black text-white">
                  T
                </span>

                <div className="flex gap-2">
                  <span className="h-2 w-10 rounded-full bg-slate-200" />
                  <span className="h-2 w-10 rounded-full bg-slate-200" />
                  <span className="h-2 w-10 rounded-full bg-slate-200" />
                </div>
              </div>

              <div className="mt-7 grid items-center gap-5 sm:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <span className="block h-4 w-full rounded-full bg-slate-950" />
                  <span className="mt-2 block h-4 w-4/5 rounded-full bg-slate-950" />

                  <span className="mt-4 block h-2 w-full rounded-full bg-slate-200" />
                  <span className="mt-2 block h-2 w-5/6 rounded-full bg-slate-200" />

                  <div className="mt-5 flex gap-2">
                    <span className="h-9 w-24 rounded-full bg-blue-600" />
                    <span className="h-9 w-24 rounded-full border border-slate-200 bg-white" />
                  </div>
                </div>

                <div className="h-32 rounded-2xl bg-gradient-to-br from-blue-200 to-blue-50" />
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2">
                <span className="h-16 rounded-xl bg-blue-50" />
                <span className="h-16 rounded-xl bg-slate-100" />
                <span className="h-16 rounded-xl bg-blue-50" />
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {[
              {
                value: "100%",
                label: "Responsive",
              },
              {
                value: "5",
                label: "Project stages",
              },
              {
                value: "24/7",
                label: "Online presence",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[1.2rem] border border-white/10 bg-white/[0.055] p-4"
              >
                <p className="text-2xl font-black tracking-[-0.045em]">
                  {item.value}
                </p>

                <p className="mt-2 text-xs font-semibold text-slate-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-auto border-t border-white/10 pt-6">
            <p className="text-xs font-semibold leading-6 text-slate-400">
              Built with responsive layouts, reusable components, clear
              customer journeys, and scalable page architecture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function WebsiteDevelopment() {
  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      "Website Design & Development | Custom Business Websites | Techuvo";

    const description =
      "Techuvo designs and develops responsive custom websites, business websites, redesigns, multi-location sites, portfolios, and scalable digital platforms.";

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
      "https://techuvo.dev/services/website-development",
    );

    const structuredData = document.createElement("script");

    structuredData.id = "website-development-structured-data";
    structuredData.type = "application/ld+json";

    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          name: "Website Design and Development",
          provider: {
            "@type": "Organization",
            name: "Techuvo",
            url: "https://techuvo.dev",
          },
          url: "https://techuvo.dev/services/website-development",
          description,
          serviceType: [
            "Website Design",
            "Website Development",
            "Business Website Development",
            "Website Redesign",
            "Responsive Web Design",
            "Multi-Location Websites",
          ],
          areaServed: "United States",
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
              name: "Services",
              item: "https://techuvo.dev/#services",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Website Development",
              item: "https://techuvo.dev/services/website-development",
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
            top: "8rem",
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
                <WebsiteIcon />
                Website Design & Development
              </div>

              <h1 className="page-heading mt-6">
                Build a website that makes your business easier to trust and
                choose.
              </h1>

              <p className="body-large mt-6">
                Techuvo creates responsive custom websites designed around your
                audience, services, customer journey, and long-term business
                goals.
              </p>

              <p className="body-copy mt-5 max-w-2xl">
                From focused small-business websites to scalable multi-page
                systems, every project is built to communicate clearly, perform
                across devices, and guide visitors toward meaningful action.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={bookingUrl}
                  className="button button-primary"
                >
                  Book a website strategy call
                  <ArrowIcon />
                </a>

                <a
                  href="#website-packages"
                  className="button button-secondary"
                >
                  View packages
                  <ArrowIcon />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                {[
                  "Custom responsive design",
                  "Clear service and conversion paths",
                  "SEO-ready page foundations",
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

            <WebsitePreview />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="site-container">
          <div className="section-header">
            <div className="section-header-copy">
              <span className="eyebrow">
                Website Capabilities
              </span>

              <h2 className="section-heading">
                Website systems designed around the stage of your business.
              </h2>
            </div>

            <p className="section-header-description">
              Techuvo can build a focused online presence, modernize an
              existing website, or engineer a larger digital system that
              supports multiple services, locations, and workflows.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {websiteTypes.map((item) => (
              <article
                key={item.number}
                className="room-card min-h-[19rem]"
              >
                <div className="room-card-content">
                  <div className="room-card-header">
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-blue-200 bg-blue-50 text-xs font-extrabold text-blue-700">
                      {item.number}
                    </span>

                    <span className="room-status">
                      Available
                    </span>
                  </div>

                  <h3 className="card-heading mt-6">
                    {item.title}
                  </h3>

                  <p className="body-copy mt-4">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="website-packages"
        className="section architecture-grid"
      >
        <div className="site-container">
          <div className="section-header">
            <div className="section-header-copy">
              <span className="eyebrow">
                Website Packages
              </span>

              <h2 className="section-heading">
                Choose the website system that matches your current goals.
              </h2>
            </div>

            <p className="section-header-description">
              Deposits reserve the project and are applied toward the final
              package total. Every project begins with discovery and website
              strategy.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {packages.map((item) => (
              <article
                key={item.name}
                className={`relative flex min-h-full flex-col overflow-hidden rounded-[1.7rem] border p-5 shadow-[0_18px_55px_rgba(15,23,42,0.08)] sm:p-7 ${
                  item.highlighted
                    ? "border-blue-500 bg-slate-950 text-white shadow-[0_30px_80px_rgba(37,99,235,0.22)]"
                    : "border-slate-200 bg-white text-slate-950"
                }`}
              >
                {item.highlighted && (
                  <span className="absolute right-5 top-5 rounded-full bg-blue-500 px-3 py-1.5 text-[0.62rem] font-extrabold uppercase tracking-[0.13em] text-white">
                    Most popular
                  </span>
                )}

                <p
                  className={`text-xs font-extrabold uppercase tracking-[0.15em] ${
                    item.highlighted
                      ? "text-blue-300"
                      : "text-blue-700"
                  }`}
                >
                  Website package
                </p>

                <h3 className="mt-4 text-2xl font-bold tracking-[-0.04em] sm:text-3xl">
                  {item.name}
                </h3>

                <p
                  className={`mt-4 text-sm leading-7 ${
                    item.highlighted
                      ? "text-slate-300"
                      : "text-slate-600"
                  }`}
                >
                  {item.bestFor}
                </p>

                <div className="mt-7">
                  <p className="text-4xl font-black tracking-[-0.055em]">
                    {item.price}
                  </p>

                  <p
                    className={`mt-2 text-sm font-bold ${
                      item.highlighted
                        ? "text-blue-200"
                        : "text-blue-700"
                    }`}
                  >
                    {item.deposit}
                  </p>

                  <p
                    className={`mt-1 text-xs ${
                      item.highlighted
                        ? "text-slate-400"
                        : "text-slate-500"
                    }`}
                  >
                    Estimated timeline: {item.timeline}
                  </p>
                </div>

                <div
                  className={`my-7 h-px ${
                    item.highlighted
                      ? "bg-white/10"
                      : "bg-slate-200"
                  }`}
                />

                <ul className="space-y-3">
                  {item.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3"
                    >
                      <span
                        className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full ${
                          item.highlighted
                            ? "bg-blue-500/20 text-blue-200"
                            : "bg-blue-50 text-blue-700"
                        }`}
                      >
                        <CheckIcon />
                      </span>

                      <span
                        className={`text-sm leading-6 ${
                          item.highlighted
                            ? "text-slate-200"
                            : "text-slate-700"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto grid gap-3 pt-8">
                  <a
                    href={item.depositUrl}
                    className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-extrabold transition hover:-translate-y-1 ${
                      item.highlighted
                        ? "bg-white text-slate-950 hover:bg-blue-50"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    Pay down deposit
                    <ArrowIcon />
                  </a>

                  <a
                    href={bookingUrl}
                    className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-5 text-sm font-extrabold transition hover:-translate-y-1 ${
                      item.highlighted
                        ? "border-white/15 bg-white/[0.06] text-white hover:bg-white/[0.1]"
                        : "border-slate-200 bg-white text-slate-950 hover:border-blue-200 hover:bg-blue-50"
                    }`}
                  >
                    Book strategy call
                    <ArrowIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-5 text-center text-xs leading-6 text-slate-500">
            Deposit and booking URLs are placeholders. Replace the constants at
            the top of this file with your live Stripe and scheduling links.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="site-container">
          <div className="section-header">
            <div className="section-header-copy">
              <span className="eyebrow">
                Website Process
              </span>

              <h2 className="section-heading">
                A clear process from business discovery to final launch.
              </h2>
            </div>

            <p className="section-header-description">
              Every stage keeps the strategy, page architecture, design,
              development, responsiveness, and final customer experience
              connected.
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
          <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
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
                <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-blue-300">
                  Business impact
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
                  Your website should support the business before you ever
                  speak to the customer.
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                  A strong website communicates your value, answers common
                  questions, creates trust, presents proof, and gives visitors
                  a clear next action at any time of day.
                </p>

                <a
                  href={bookingUrl}
                  className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-extrabold text-slate-950 transition hover:-translate-y-1 hover:bg-blue-50 sm:w-auto"
                >
                  Plan your website
                  <ArrowIcon />
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <article
                  key={benefit}
                  className="flex items-center gap-4 rounded-[1.35rem] border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-xs font-extrabold text-blue-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-sm font-bold leading-6 text-slate-800">
                    {benefit}
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
                Website Development FAQ
              </span>

              <h2 className="section-heading">
                Common questions before starting a website project.
              </h2>
            </div>

            <p className="section-header-description">
              Clear answers help you understand pricing, timelines,
              responsiveness, search foundations, ownership, and what happens
              after paying the deposit.
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
                Related Services
              </span>

              <h2 className="section-heading">
                Connect the website to your larger digital system.
              </h2>
            </div>

            <p className="section-header-description">
              Your website becomes more valuable when the brand identity,
              campaigns, forms, lead tracking, customer follow-up, and business
              operations work together.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {relatedServices.map((service) => (
              <Link
                key={service.to}
                to={service.to}
                className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >
                <span className="text-xs font-extrabold uppercase tracking-[0.15em] text-blue-700">
                  Techuvo service
                </span>

                <h3 className="mt-4 text-2xl font-bold tracking-[-0.04em] text-slate-950">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-blue-700 transition group-hover:gap-3">
                  Explore service
                  <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        id="book-website-call"
        className="section bg-white"
      >
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
                  Website project intake
                </p>

                <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-[-0.055em] sm:text-5xl">
                  Build a website that reflects the level your business is
                  reaching.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                  Share your services, audience, current website problems, and
                  the actions you want customers to take next.
                </p>
              </div>

              <div className="grid w-full gap-3 sm:w-auto">
                <a
                  href={bookingUrl}
                  className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-extrabold text-slate-950 transition hover:-translate-y-1 hover:bg-blue-50"
                >
                  Book strategy call
                  <ArrowIcon />
                </a>

                <a
                  href={businessDepositUrl}
                  className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-6 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-white/[0.1]"
                >
                  Pay project deposit
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 p-2 shadow-[0_-10px_35px_rgba(15,23,42,0.12)] backdrop-blur-xl lg:hidden">
        <div className="mx-auto grid max-w-xl grid-cols-2 gap-2">
          <a
            href={bookingUrl}
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-3 text-center text-sm font-extrabold text-slate-950"
          >
            Book call
          </a>

          <a
            href={businessDepositUrl}
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-blue-600 px-3 text-center text-sm font-extrabold text-white"
          >
            Pay deposit
          </a>
        </div>
      </div>
    </>
  );
}

export default WebsiteDevelopment;