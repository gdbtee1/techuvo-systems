import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const bookingUrl = "#book-pricing-call";

const depositLinks = {
  starterWebsite: "#starter-website-deposit",
  businessWebsite: "#business-website-deposit",
  growthWebsite: "#growth-website-deposit",
  focusedLandingPage: "#focused-landing-page-deposit",
  growthLandingPage: "#growth-landing-page-deposit",
  campaignFunnel: "#campaign-funnel-deposit",
  brandFoundation: "#brand-foundation-deposit",
  growthIdentity: "#growth-identity-deposit",
  completeBrandSystem: "#complete-brand-system-deposit",
  starterAutomation: "#starter-automation-deposit",
  growthAutomation: "#growth-automation-deposit",
  customAutomation: "#custom-automation-deposit",
};

const serviceCategories = [
  {
    id: "websites",
    label: "Websites",
  },
  {
    id: "landing-pages",
    label: "Landing Pages",
  },
  {
    id: "branding",
    label: "Brand Identity",
  },
  {
    id: "automation",
    label: "Automation",
  },
];

const packages = [
  {
    id: "starter-website",
    category: "websites",
    serviceLabel: "Website Development",
    name: "Starter Website",
    price: "$499",
    deposit: "$150 deposit",
    timeline: "5–7 business days",
    description:
      "A focused one-page website for a new business, independent professional, or simple service offer.",
    bestFor:
      "Businesses that need a professional online presence without a large multi-page build.",
    features: [
      "One custom website page",
      "Responsive mobile and desktop design",
      "Business and service overview",
      "Contact form or booking connection",
      "Basic search metadata",
      "Social and contact links",
      "One revision round",
    ],
    depositUrl: depositLinks.starterWebsite,
    serviceUrl: "/services/website-development",
    highlighted: false,
  },
  {
    id: "business-website",
    category: "websites",
    serviceLabel: "Website Development",
    name: "Business Website",
    price: "$999",
    deposit: "$300 deposit",
    timeline: "7–14 business days",
    description:
      "A complete multi-page website designed to improve credibility, explain services, and generate inquiries.",
    bestFor:
      "Established businesses that need stronger service communication and a more complete customer journey.",
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
    depositUrl: depositLinks.businessWebsite,
    serviceUrl: "/services/website-development",
    highlighted: true,
  },
  {
    id: "growth-website",
    category: "websites",
    serviceLabel: "Website Development",
    name: "Growth Website System",
    price: "$1,999+",
    deposit: "$600 deposit",
    timeline: "2–5 weeks",
    description:
      "A scalable website system for companies with multiple services, locations, integrations, or content needs.",
    bestFor:
      "Growing companies that need more advanced architecture and long-term expansion capability.",
    features: [
      "Custom multi-page architecture",
      "Advanced responsive interface design",
      "Service and location page systems",
      "Content management integration",
      "Forms, booking, CRM, or payment connections",
      "Advanced analytics and tracking",
      "Technical SEO foundations",
      "Reusable components",
      "Launch support and documentation",
    ],
    depositUrl: depositLinks.growthWebsite,
    serviceUrl: "/services/website-development",
    highlighted: false,
  },
  {
    id: "focused-landing-page",
    category: "landing-pages",
    serviceLabel: "Landing Page Design",
    name: "Focused Landing Page",
    price: "$349",
    deposit: "$100 deposit",
    timeline: "3–5 business days",
    description:
      "A custom campaign page built around one audience, one offer, and one primary conversion action.",
    bestFor:
      "Businesses promoting one service, event, appointment, offer, or lead-generation campaign.",
    features: [
      "One custom landing page",
      "Responsive mobile and desktop design",
      "Offer and call-to-action structure",
      "Lead form or booking connection",
      "Basic search metadata",
      "Performance review",
      "One revision round",
    ],
    depositUrl: depositLinks.focusedLandingPage,
    serviceUrl: "/services/landing-pages",
    highlighted: false,
  },
  {
    id: "growth-landing-page",
    category: "landing-pages",
    serviceLabel: "Landing Page Design",
    name: "Growth Landing System",
    price: "$699",
    deposit: "$225 deposit",
    timeline: "5–8 business days",
    description:
      "An advanced conversion page with stronger messaging, proof, analytics, and connected lead capture.",
    bestFor:
      "Businesses running paid campaigns or promoting an important offer that needs a stronger conversion system.",
    features: [
      "One advanced custom landing page",
      "Conversion-focused content structure",
      "Responsive design system",
      "Lead form or booking integration",
      "Trust and proof sections",
      "Analytics connection",
      "Thank-you page",
      "Two revision rounds",
    ],
    depositUrl: depositLinks.growthLandingPage,
    serviceUrl: "/services/landing-pages",
    highlighted: true,
  },
  {
    id: "campaign-funnel",
    category: "landing-pages",
    serviceLabel: "Landing Page Design",
    name: "Campaign Funnel",
    price: "$1,199+",
    deposit: "$350 deposit",
    timeline: "1–3 weeks",
    description:
      "A connected campaign journey with multiple pages, qualification, tracking, and automated follow-up.",
    bestFor:
      "Businesses that need a complete lead-generation or campaign system instead of one standalone page.",
    features: [
      "Multi-page campaign funnel",
      "Landing and thank-you pages",
      "Lead qualification flow",
      "CRM or email integration",
      "Automated follow-up connection",
      "Analytics and event tracking",
      "Campaign-ready responsive design",
      "Testing and launch support",
    ],
    depositUrl: depositLinks.campaignFunnel,
    serviceUrl: "/services/landing-pages",
    highlighted: false,
  },
  {
    id: "brand-foundation",
    category: "branding",
    serviceLabel: "Brand Identity",
    name: "Brand Foundation",
    price: "$399",
    deposit: "$125 deposit",
    timeline: "5–7 business days",
    description:
      "A professional visual foundation for a new company or business preparing to launch.",
    bestFor:
      "Businesses that need a usable logo direction, colors, typography, and basic identity guidance.",
    features: [
      "Brand discovery questionnaire",
      "Primary logo direction",
      "Core color palette",
      "Primary typography selection",
      "Basic brand usage sheet",
      "Web-ready logo files",
      "One revision round",
    ],
    depositUrl: depositLinks.brandFoundation,
    serviceUrl: "/services/brand-identity",
    highlighted: false,
  },
  {
    id: "growth-identity",
    category: "branding",
    serviceLabel: "Brand Identity",
    name: "Growth Identity",
    price: "$799",
    deposit: "$250 deposit",
    timeline: "7–12 business days",
    description:
      "A stronger visual system designed for businesses expanding across multiple customer touchpoints.",
    bestFor:
      "Growing companies that need greater consistency across websites, social media, documents, and marketing.",
    features: [
      "Brand strategy session",
      "Primary and secondary logo system",
      "Expanded color palette",
      "Typography hierarchy",
      "Visual style direction",
      "Social profile assets",
      "Brand guideline document",
      "Two revision rounds",
    ],
    depositUrl: depositLinks.growthIdentity,
    serviceUrl: "/services/brand-identity",
    highlighted: true,
  },
  {
    id: "complete-brand-system",
    category: "branding",
    serviceLabel: "Brand Identity",
    name: "Complete Brand System",
    price: "$1,499+",
    deposit: "$450 deposit",
    timeline: "2–4 weeks",
    description:
      "A comprehensive identity system for companies that need consistent presentation across many channels.",
    bestFor:
      "Established businesses preparing for larger marketing, sales, website, or company growth initiatives.",
    features: [
      "Brand positioning workshop",
      "Complete logo family",
      "Advanced color and typography system",
      "Photography and imagery direction",
      "Graphic element system",
      "Presentation and document styling",
      "Social and digital asset package",
      "Comprehensive brand guidelines",
      "Priority implementation support",
    ],
    depositUrl: depositLinks.completeBrandSystem,
    serviceUrl: "/services/brand-identity",
    highlighted: false,
  },
  {
    id: "starter-automation",
    category: "automation",
    serviceLabel: "Automation Systems",
    name: "Starter Automation",
    price: "$499",
    deposit: "$150 deposit",
    timeline: "5–7 business days",
    description:
      "One focused workflow that reduces repetitive work and organizes incoming business information.",
    bestFor:
      "Small businesses that need one clear automation around leads, forms, notifications, or scheduling.",
    features: [
      "One primary automation workflow",
      "Website form or lead-source connection",
      "Email or internal notifications",
      "Basic data organization",
      "Testing and launch support",
      "One revision round",
    ],
    depositUrl: depositLinks.starterAutomation,
    serviceUrl: "/services/automation-systems",
    highlighted: false,
  },
  {
    id: "growth-automation",
    category: "automation",
    serviceLabel: "Automation Systems",
    name: "Growth Automation",
    price: "$999",
    deposit: "$300 deposit",
    timeline: "7–14 business days",
    description:
      "Multiple connected workflows for lead handling, scheduling, tracking, and customer follow-up.",
    bestFor:
      "Businesses that need several tools working together through one organized process.",
    features: [
      "Up to three connected workflows",
      "CRM or lead-tracking integration",
      "Automated follow-up sequence",
      "Booking or scheduling connection",
      "Internal status notifications",
      "Testing, documentation, and launch",
      "Two revision rounds",
    ],
    depositUrl: depositLinks.growthAutomation,
    serviceUrl: "/services/automation-systems",
    highlighted: true,
  },
  {
    id: "custom-automation",
    category: "automation",
    serviceLabel: "Automation Systems",
    name: "Custom Operations System",
    price: "Custom quote",
    deposit: "Deposit after scope",
    timeline: "Based on project scope",
    description:
      "A custom operational system, dashboard, or multi-step workflow built around your company’s process.",
    bestFor:
      "Companies with larger operational needs, multiple integrations, or custom internal requirements.",
    features: [
      "Custom workflow architecture",
      "Multiple software integrations",
      "Advanced lead or customer routing",
      "Custom dashboards or internal tools",
      "Role-based business processes",
      "Launch documentation and training",
      "Priority implementation planning",
    ],
    depositUrl: depositLinks.customAutomation,
    serviceUrl: "/services/automation-systems",
    highlighted: false,
  },
];

const includedStandards = [
  {
    number: "01",
    title: "Responsive delivery",
    description:
      "Every digital build is designed to remain usable across mobile and desktop screens.",
  },
  {
    number: "02",
    title: "Clear project scope",
    description:
      "The package, deliverables, timeline, revisions, and next steps are confirmed before the project begins.",
  },
  {
    number: "03",
    title: "Direct communication",
    description:
      "You receive clear updates and work directly with Techuvo throughout the project.",
  },
  {
    number: "04",
    title: "Deposit protection",
    description:
      "The deposit is applied toward the total project price and reserves your place in the schedule.",
  },
];

const addOns = [
  {
    title: "Additional Website Page",
    price: "From $125",
    description:
      "Add another service, location, team, portfolio, FAQ, or content page to an existing website project.",
  },
  {
    title: "Content Management System",
    price: "From $250",
    description:
      "Add editable content areas so approved users can manage selected text, images, or project entries.",
  },
  {
    title: "Booking Integration",
    price: "From $75",
    description:
      "Connect a scheduling tool to the website or landing page and organize the booking pathway.",
  },
  {
    title: "CRM or Lead Integration",
    price: "From $150",
    description:
      "Connect forms and customer information to a supported CRM, spreadsheet, or lead-tracking system.",
  },
  {
    title: "Additional Revision Round",
    price: "From $75",
    description:
      "Add another organized revision round after the revisions included in the package are complete.",
  },
  {
    title: "Ongoing Support",
    price: "Custom monthly plan",
    description:
      "Receive ongoing updates, maintenance, content support, monitoring, or technical assistance.",
  },
];

const frequentlyAskedQuestions = [
  {
    question: "Are the prices shown final?",
    answer:
      "The listed packages provide clear starting prices for standard scopes. Projects requiring additional pages, custom functionality, advanced content, integrations, or accelerated delivery may require a custom quote.",
  },
  {
    question: "Is the deposit separate from the total price?",
    answer:
      "No. The deposit is applied toward the final project total. It reserves the project and allows the planning and production process to begin.",
  },
  {
    question: "When is the remaining balance due?",
    answer:
      "The remaining payment schedule should be confirmed in the project agreement. Smaller projects may require the balance before launch, while larger projects may use milestone-based payments.",
  },
  {
    question: "Can I book a call before paying a deposit?",
    answer:
      "Yes. You can book a strategy call before paying. The call helps confirm the right package, project fit, deliverables, timeline, and any custom requirements.",
  },
  {
    question: "What happens after I pay the deposit?",
    answer:
      "You will complete the project intake, provide the required business information and access, book or confirm the strategy call, and receive the next production steps.",
  },
  {
    question: "Can I request a custom package?",
    answer:
      "Yes. A custom scope can combine website development, landing pages, branding, automation, content management, and other supported services.",
  },
  {
    question: "Are hosting and domain fees included?",
    answer:
      "Unless specifically stated in the project agreement, third-party domain, hosting, software, payment-processing, scheduling, or subscription fees are separate from the development price.",
  },
  {
    question: "Can I pay in installments?",
    answer:
      "Installment or milestone options may be available for larger projects. The exact payment schedule should be agreed upon before work begins.",
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

function PricingIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 3.5v17M16 7.25c0-1.52-1.8-2.75-4-2.75S8 5.73 8 7.25 9.8 10 12 10s4 1.23 4 2.75-1.8 2.75-4 2.75-4-1.23-4-2.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function Pricing() {
  const [activeCategory, setActiveCategory] = useState("websites");

  const filteredPackages = useMemo(
    () =>
      packages.filter(
        (servicePackage) =>
          servicePackage.category === activeCategory,
      ),
    [activeCategory],
  );

  const activeCategoryLabel =
    serviceCategories.find(
      (category) => category.id === activeCategory,
    )?.label || "Services";

  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      "Techuvo Pricing | Websites, Landing Pages, Branding & Automation";

    const description =
      "Compare Techuvo pricing for custom websites, landing pages, brand identity systems, business automation, deposits, timelines, and available add-ons.";

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
      "https://techuvo.dev/pricing",
    );

    const structuredData = document.createElement("script");

    structuredData.id = "pricing-page-structured-data";
    structuredData.type = "application/ld+json";

    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CollectionPage",
          name: "Techuvo Service Pricing",
          url: "https://techuvo.dev/pricing",
          description,
          about: {
            "@type": "Organization",
            name: "Techuvo",
            url: "https://techuvo.dev",
          },
          hasPart: packages.map((servicePackage) => ({
            "@type": "Offer",
            name: servicePackage.name,
            description: servicePackage.description,
            priceCurrency: "USD",
            price:
              servicePackage.price.match(/[\d,]+/)?.[0]?.replace(
                ",",
                "",
              ) || undefined,
            url: `https://techuvo.dev${servicePackage.serviceUrl}`,
            category: servicePackage.serviceLabel,
            offeredBy: {
              "@type": "Organization",
              name: "Techuvo",
            },
          })),
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
              name: "Pricing",
              item: "https://techuvo.dev/pricing",
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
          <div className="grid items-center gap-12 lg:grid-cols-[1.03fr_0.97fr] lg:gap-16">
            <div>
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-white/85 px-3.5 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-blue-700 shadow-sm backdrop-blur-xl">
                <PricingIcon />
                Techuvo Pricing
              </div>

              <h1 className="page-heading mt-6">
                Clear starting prices for serious digital projects.
              </h1>

              <p className="body-large mt-6">
                Compare website, landing page, brand identity, and automation
                packages designed around different business stages and project
                goals.
              </p>

              <p className="body-copy mt-5 max-w-2xl">
                Every deposit is applied toward the final project price. You
                can review packages, book a strategy call, and confirm the
                scope before committing to a larger build.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#pricing-packages"
                  className="button button-primary"
                >
                  Compare packages
                  <ArrowIcon />
                </a>

                <a
                  href={bookingUrl}
                  className="button button-secondary"
                >
                  Book a strategy call
                  <ArrowIcon />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                {[
                  "Deposits applied to total",
                  "Clear package deliverables",
                  "Custom scopes available",
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

                <div className="relative flex min-h-[30rem] flex-col">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-blue-300">
                      Project pricing system
                    </p>

                    <span className="inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-slate-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      Packages available
                    </span>
                  </div>

                  <h2 className="mt-8 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
                    Choose the right starting point, then shape the final
                    scope.
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                    Every package creates a clear baseline while leaving room
                    for additional pages, integrations, content, functionality,
                    and support.
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-3">
                    {serviceCategories.map((category, index) => (
                      <button
                        key={category.id}
                        type="button"
                        onClick={() =>
                          setActiveCategory(category.id)
                        }
                        className={`rounded-2xl border p-4 text-left transition hover:-translate-y-1 ${
                          activeCategory === category.id
                            ? "border-blue-400/40 bg-blue-500/20"
                            : "border-white/10 bg-white/[0.055] hover:bg-white/[0.09]"
                        }`}
                      >
                        <span className="text-xs font-extrabold text-blue-200">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <p className="mt-4 text-sm font-bold text-white">
                          {category.label}
                        </p>
                      </button>
                    ))}
                  </div>

                  <div className="mt-auto border-t border-white/10 pt-6">
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <p className="text-2xl font-black tracking-[-0.04em]">
                          12
                        </p>

                        <p className="mt-1 text-xs font-semibold text-slate-400">
                          Core packages
                        </p>
                      </div>

                      <div>
                        <p className="text-2xl font-black tracking-[-0.04em]">
                          4
                        </p>

                        <p className="mt-1 text-xs font-semibold text-slate-400">
                          Service categories
                        </p>
                      </div>

                      <div>
                        <p className="text-2xl font-black tracking-[-0.04em]">
                          1:1
                        </p>

                        <p className="mt-1 text-xs font-semibold text-slate-400">
                          Project guidance
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="pricing-packages"
        className="section bg-white"
      >
        <div className="site-container">
          <div className="section-header">
            <div className="section-header-copy">
              <span className="eyebrow">
                Service Packages
              </span>

              <h2 className="section-heading">
                Compare Techuvo packages by service.
              </h2>
            </div>

            <p className="section-header-description">
              Select a category to review its available packages, timelines,
              deposits, deliverables, and direct project actions.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Pricing categories"
            className="mb-8 flex gap-2 overflow-x-auto pb-2"
          >
            {serviceCategories.map((category) => {
              const isActive =
                activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() =>
                    setActiveCategory(category.id)
                  }
                  className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-extrabold transition ${
                    isActive
                      ? "border-blue-600 bg-blue-600 text-white shadow-md"
                      : "border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          <div className="mb-6 flex flex-col gap-3 rounded-[1.4rem] border border-blue-200 bg-blue-50/70 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-blue-700">
                Currently viewing
              </p>

              <h3 className="mt-2 text-2xl font-bold tracking-[-0.04em] text-slate-950">
                {activeCategoryLabel} Packages
              </h3>
            </div>

            <Link
              to={
                filteredPackages[0]?.serviceUrl ||
                "/contact"
              }
              className="inline-flex items-center gap-2 text-sm font-extrabold text-blue-700"
            >
              View full service page
              <ArrowIcon />
            </Link>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {filteredPackages.map((servicePackage) => (
              <article
                key={servicePackage.id}
                className={`relative flex min-h-full flex-col overflow-hidden rounded-[1.7rem] border p-5 shadow-[0_18px_55px_rgba(15,23,42,0.08)] sm:p-7 ${
                  servicePackage.highlighted
                    ? "border-blue-500 bg-slate-950 text-white shadow-[0_30px_80px_rgba(37,99,235,0.22)]"
                    : "border-slate-200 bg-white text-slate-950"
                }`}
              >
                {servicePackage.highlighted && (
                  <span className="absolute right-5 top-5 rounded-full bg-blue-500 px-3 py-1.5 text-[0.62rem] font-extrabold uppercase tracking-[0.13em] text-white">
                    Most popular
                  </span>
                )}

                <p
                  className={`text-xs font-extrabold uppercase tracking-[0.15em] ${
                    servicePackage.highlighted
                      ? "text-blue-300"
                      : "text-blue-700"
                  }`}
                >
                  {servicePackage.serviceLabel}
                </p>

                <h3 className="mt-4 text-2xl font-bold tracking-[-0.04em] sm:text-3xl lg:min-h-[4.5rem]">
                  {servicePackage.name}
                </h3>

                <p
                  className={`mt-4 text-sm leading-7 lg:min-h-[5.25rem] ${
                    servicePackage.highlighted
                      ? "text-slate-300"
                      : "text-slate-600"
                  }`}
                >
                  {servicePackage.description}
                </p>

                <div className="mt-7">
                  <p className="text-4xl font-black tracking-[-0.055em]">
                    {servicePackage.price}
                  </p>

                  <p
                    className={`mt-2 text-sm font-bold ${
                      servicePackage.highlighted
                        ? "text-blue-200"
                        : "text-blue-700"
                    }`}
                  >
                    {servicePackage.deposit}
                  </p>

                  <p
                    className={`mt-1 text-xs ${
                      servicePackage.highlighted
                        ? "text-slate-400"
                        : "text-slate-500"
                    }`}
                  >
                    Estimated timeline:{" "}
                    {servicePackage.timeline}
                  </p>
                </div>

                <div
                  className={`my-7 h-px ${
                    servicePackage.highlighted
                      ? "bg-white/10"
                      : "bg-slate-200"
                  }`}
                />

                <div
                  className={`rounded-[1.2rem] border p-4 lg:min-h-[9.25rem] ${
                    servicePackage.highlighted
                      ? "border-white/10 bg-white/[0.055]"
                      : "border-slate-200 bg-slate-50"
                  }`}
                >
                  <p
                    className={`text-[0.64rem] font-extrabold uppercase tracking-[0.14em] ${
                      servicePackage.highlighted
                        ? "text-blue-300"
                        : "text-blue-700"
                    }`}
                  >
                    Best for
                  </p>

                  <p
                    className={`mt-2 text-sm leading-6 ${
                      servicePackage.highlighted
                        ? "text-slate-200"
                        : "text-slate-700"
                    }`}
                  >
                    {servicePackage.bestFor}
                  </p>
                </div>

                <ul className="mt-6 space-y-3 lg:min-h-[22.5rem]">
                  {servicePackage.features.map(
                    (feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3"
                      >
                        <span
                          className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full ${
                            servicePackage.highlighted
                              ? "bg-blue-500/20 text-blue-200"
                              : "bg-blue-50 text-blue-700"
                          }`}
                        >
                          <CheckIcon />
                        </span>

                        <span
                          className={`text-sm leading-6 ${
                            servicePackage.highlighted
                              ? "text-slate-200"
                              : "text-slate-700"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ),
                  )}
                </ul>

                <div className="mt-auto grid gap-3 pt-8">
                  <a
                    href={servicePackage.depositUrl}
                    className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-extrabold transition hover:-translate-y-1 ${
                      servicePackage.highlighted
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
                      servicePackage.highlighted
                        ? "border-white/15 bg-white/[0.06] text-white hover:bg-white/[0.1]"
                        : "border-slate-200 bg-white text-slate-950 hover:border-blue-200 hover:bg-blue-50"
                    }`}
                  >
                    Book strategy call
                    <ArrowIcon />
                  </a>

                  <Link
                    to={servicePackage.serviceUrl}
                    className={`inline-flex min-h-11 items-center justify-center gap-2 text-sm font-extrabold ${
                      servicePackage.highlighted
                        ? "text-blue-200"
                        : "text-blue-700"
                    }`}
                  >
                    Review full service
                    <ArrowIcon />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 text-center text-xs leading-6 text-slate-500">
            Deposit and booking URLs are placeholders. Replace the constants
            at the top of this file with your live Stripe and scheduling
            links.
          </p>
        </div>
      </section>

      <section className="section architecture-grid">
        <div className="site-container">
          <div className="section-header">
            <div className="section-header-copy">
              <span className="eyebrow">
                Included Standards
              </span>

              <h2 className="section-heading">
                Every package begins with the same professional foundation.
              </h2>
            </div>

            <p className="section-header-description">
              The size of the project changes, but communication, responsive
              delivery, scope clarity, and organized next steps remain part of
              the process.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {includedStandards.map((standard) => (
              <article
                key={standard.number}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md sm:p-6"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-blue-200 bg-blue-50 text-xs font-extrabold text-blue-700">
                  {standard.number}
                </span>

                <h3 className="mt-6 text-xl font-bold tracking-[-0.035em] text-slate-950">
                  {standard.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {standard.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="site-container">
          <div className="section-header">
            <div className="section-header-copy">
              <span className="eyebrow">
                Optional Add-Ons
              </span>

              <h2 className="section-heading">
                Expand the package around your actual project.
              </h2>
            </div>

            <p className="section-header-description">
              Add-ons are quoted based on the existing package, technical
              requirements, content, and the amount of additional work needed.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {addOns.map((addOn, index) => (
              <article
                key={addOn.title}
                className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-md sm:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-xs font-extrabold text-blue-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="rounded-full border border-blue-200 bg-white px-3 py-2 text-xs font-extrabold text-blue-700">
                    {addOn.price}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold tracking-[-0.035em] text-slate-950">
                  {addOn.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {addOn.description}
                </p>
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
                  Custom project scope
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
                  Need multiple services inside one project?
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                  Techuvo can combine website development, brand identity,
                  landing pages, content management, automation, analytics,
                  and integrations into one organized scope.
                </p>

                <a
                  href={bookingUrl}
                  className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-extrabold text-slate-950 transition hover:-translate-y-1 hover:bg-blue-50 sm:w-auto"
                >
                  Request a custom scope
                  <ArrowIcon />
                </a>
              </div>
            </div>

            <div className="surface-card p-5 sm:p-7 lg:p-9">
              <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-blue-700">
                Custom scope examples
              </p>

              <div className="mt-6 space-y-4">
                {[
                  {
                    title: "Website + Brand Identity",
                    description:
                      "Create the business identity and apply it to a complete responsive website.",
                  },
                  {
                    title: "Landing Page + Automation",
                    description:
                      "Capture campaign leads and connect them to booking, follow-up, notifications, and CRM tracking.",
                  },
                  {
                    title: "Website + Location Pages",
                    description:
                      "Build the main website and expand it with unique pages for real service areas.",
                  },
                  {
                    title: "Website + CMS",
                    description:
                      "Create a custom website with approved content areas the client can manage after launch.",
                  },
                ].map((example, index) => (
                  <article
                    key={example.title}
                    className="grid gap-4 rounded-[1.3rem] border border-slate-200 bg-slate-50 p-5 sm:grid-cols-[3rem_1fr]"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-xs font-extrabold text-blue-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="text-base font-bold text-slate-950">
                        {example.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {example.description}
                      </p>
                    </div>
                  </article>
                ))}
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
                Pricing FAQ
              </span>

              <h2 className="section-heading">
                Common questions before reserving a project.
              </h2>
            </div>

            <p className="section-header-description">
              Review how deposits, final balances, custom scopes, third-party
              fees, and project-start steps work.
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

      <section
        id="book-pricing-call"
        className="section architecture-grid"
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
                  Pricing consultation
                </p>

                <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-[-0.055em] sm:text-5xl">
                  Not sure which package matches your business?
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                  Share the business goal, required features, timeline, and
                  budget. Techuvo will recommend the clearest package or custom
                  scope.
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

                <Link
                  to="/contact"
                  className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-6 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-white/[0.1]"
                >
                  Submit project details
                  <ArrowIcon />
                </Link>
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

          <Link
            to="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-blue-600 px-3 text-center text-sm font-extrabold text-white"
          >
            Request quote
          </Link>
        </div>
      </div>
    </>
  );
}

export default Pricing;