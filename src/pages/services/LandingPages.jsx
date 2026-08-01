import { useEffect } from "react";
import { Link } from "react-router-dom";

const bookingUrl = "#book-landing-call";
const starterDepositUrl = "#starter-landing-deposit";
const growthDepositUrl = "#growth-landing-deposit";
const campaignDepositUrl = "#campaign-landing-deposit";

const landingPageTypes = [
  {
    number: "01",
    title: "Lead Generation Pages",
    description:
      "Focused pages designed to turn traffic into quote requests, consultation bookings, estimate requests, or contact form submissions.",
  },
  {
    number: "02",
    title: "Paid Advertising Pages",
    description:
      "Landing pages built around the message, audience, and offer used in your Google, Meta, or social media campaign.",
  },
  {
    number: "03",
    title: "Service Offer Pages",
    description:
      "Dedicated pages for one service, promotion, or package so visitors receive a clear and focused customer journey.",
  },
  {
    number: "04",
    title: "Event Registration Pages",
    description:
      "Pages for workshops, programs, open houses, webinars, and events that need organized information and a strong registration path.",
  },
  {
    number: "05",
    title: "Product Launch Pages",
    description:
      "High-impact pages that introduce a new product, software tool, offer, or digital service and guide visitors toward purchase or signup.",
  },
  {
    number: "06",
    title: "Appointment Booking Pages",
    description:
      "Conversion-focused pages that connect service information, trust signals, qualification questions, and scheduling tools.",
  },
];

const packages = [
  {
    name: "Focused Landing Page",
    price: "$349",
    deposit: "$100 deposit",
    timeline: "3–5 business days",
    bestFor:
      "Businesses that need one professional page for a service, offer, event, or lead-generation campaign.",
    features: [
      "One custom landing page",
      "Responsive mobile and desktop design",
      "Offer and call-to-action structure",
      "Lead form or booking connection",
      "Basic search metadata",
      "Performance review",
      "One revision round",
    ],
    depositUrl: starterDepositUrl,
    highlighted: false,
  },
  {
    name: "Growth Landing System",
    price: "$699",
    deposit: "$225 deposit",
    timeline: "5–8 business days",
    bestFor:
      "Businesses running campaigns that need stronger messaging, trust sections, lead capture, analytics, and conversion structure.",
    features: [
      "One advanced custom landing page",
      "Conversion-focused copy structure",
      "Responsive design system",
      "Lead form or booking integration",
      "Trust and proof sections",
      "Analytics connection",
      "Thank-you page",
      "Two revision rounds",
    ],
    depositUrl: growthDepositUrl,
    highlighted: true,
  },
  {
    name: "Campaign Funnel",
    price: "$1,199+",
    deposit: "$350 deposit",
    timeline: "1–3 weeks",
    bestFor:
      "Businesses that need multiple connected pages, qualification steps, automation, tracking, and a complete campaign journey.",
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
    depositUrl: campaignDepositUrl,
    highlighted: false,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Offer discovery",
    description:
      "We define the audience, offer, traffic source, objections, desired action, and the reason visitors should respond now.",
  },
  {
    number: "02",
    title: "Conversion strategy",
    description:
      "The headline, supporting message, trust signals, page order, calls to action, and form structure are planned around one goal.",
  },
  {
    number: "03",
    title: "Responsive design",
    description:
      "The page is designed to hold attention, communicate clearly, and remain easy to use across mobile and desktop screens.",
  },
  {
    number: "04",
    title: "Development and integration",
    description:
      "The approved page is developed and connected to forms, scheduling tools, analytics, CRM systems, or other campaign software.",
  },
  {
    number: "05",
    title: "Testing and launch",
    description:
      "The page is reviewed across devices, tested for broken interactions, and prepared for campaign traffic.",
  },
];

const benefits = [
  "One focused conversion goal",
  "Clearer campaign messaging",
  "Better alignment with advertising",
  "Faster visitor understanding",
  "Stronger mobile lead capture",
  "Trackable customer actions",
  "Less distraction than a full website",
  "Easy testing of new offers",
];

const frequentlyAskedQuestions = [
  {
    question: "What is the difference between a landing page and a website?",
    answer:
      "A website usually explains the broader business through several pages. A landing page is built around one audience, one offer, and one main action such as booking, purchasing, registering, or requesting information.",
  },
  {
    question: "Can I use a landing page for Meta or Google ads?",
    answer:
      "Yes. Landing pages are often used for paid campaigns because the message can closely match the advertisement and guide visitors toward one focused action.",
  },
  {
    question: "Can Techuvo write the landing page copy?",
    answer:
      "Techuvo can organize and refine the page messaging based on your offer, audience, and business information. More advanced copy development may be included depending on the selected package.",
  },
  {
    question: "Can the page connect to Calendly, a form, or a CRM?",
    answer:
      "Yes. Depending on the project, the page can connect to booking tools, inquiry forms, analytics, email workflows, payment links, and customer-management systems.",
  },
  {
    question: "How long does a landing page take to build?",
    answer:
      "A focused page may take a few business days. More advanced pages or multi-step campaign funnels may take one to three weeks depending on content, integrations, and revision requirements.",
  },
  {
    question: "What happens after I pay the deposit?",
    answer:
      "After the deposit is confirmed, you will complete the project intake, book a strategy call, and provide the offer, audience information, brand assets, and campaign details needed to begin.",
  },
];

const relatedServices = [
  {
    title: "Website Development",
    description:
      "Build a complete multi-page website around your services, portfolio, brand, and long-term customer journey.",
    to: "/services/website-development",
  },
  {
    title: "Brand Identity",
    description:
      "Create the visual system your landing pages, advertisements, social content, and website should use consistently.",
    to: "/services/brand-identity",
  },
  {
    title: "Automation Systems",
    description:
      "Connect landing page leads to follow-up, booking, CRM tracking, notifications, and customer workflows.",
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

function LandingIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <rect
        x="4"
        y="3.5"
        width="16"
        height="17"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M7.5 8h9M7.5 12h6M7.5 16h4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />

      <path
        d="m15 15 2 2 3-4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function LandingPreview() {
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
              Conversion page
            </p>

            <span className="inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-slate-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Campaign ready
            </span>
          </div>

          <div className="mt-8 rounded-[1.4rem] border border-white/10 bg-white/[0.055] p-5">
            <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.14em] text-blue-200">
              One offer. One audience. One action.
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
              Turn campaign traffic into qualified customer action.
            </h2>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <span className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-extrabold text-slate-950">
                Book consultation
              </span>

              <span className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-5 text-sm font-extrabold text-white">
                View details
              </span>
            </div>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.055] p-4">
              <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.14em] text-slate-400">
                Page structure
              </p>

              <div className="mt-5 space-y-3">
                {[
                  "Headline",
                  "Problem",
                  "Offer",
                  "Proof",
                  "Action",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3"
                  >
                    <span className="text-xs font-bold text-white">
                      {item}
                    </span>

                    <span className="text-[0.62rem] font-extrabold text-blue-200">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.055] p-4">
              <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.14em] text-slate-400">
                Conversion signal
              </p>

              <p className="mt-6 text-4xl font-black tracking-[-0.06em]">
                1 Goal
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                Every section supports the same customer action.
              </p>

              <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-blue-500 to-sky-400" />
              </div>
            </div>
          </div>

          <div className="mt-auto border-t border-white/10 pt-6">
            <p className="text-xs font-semibold leading-6 text-slate-400">
              Built to connect with advertising, forms, booking tools,
              analytics, and automated follow-up.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LandingPages() {
  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      "Landing Page Design & Development | Lead Generation Pages | Techuvo";

    const description =
      "Techuvo designs responsive landing pages for paid ads, lead generation, appointments, service offers, events, launches, and conversion-focused campaigns.";

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
      "https://techuvo.dev/services/landing-pages",
    );

    const structuredData = document.createElement("script");

    structuredData.id = "landing-pages-structured-data";
    structuredData.type = "application/ld+json";

    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          name: "Landing Page Design and Development",
          provider: {
            "@type": "Organization",
            name: "Techuvo",
            url: "https://techuvo.dev",
          },
          url: "https://techuvo.dev/services/landing-pages",
          description,
          serviceType: [
            "Landing Page Design",
            "Landing Page Development",
            "Lead Generation Pages",
            "Advertising Landing Pages",
            "Campaign Funnels",
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
              name: "Landing Pages",
              item: "https://techuvo.dev/services/landing-pages",
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
          style={{ left: "-8rem", top: "8rem" }}
        />

        <div
          aria-hidden="true"
          className="glow-orb glow-orb-secondary"
          style={{ right: "-10rem", top: "10rem" }}
        />

        <div className="site-container">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-white/85 px-3.5 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-blue-700 shadow-sm backdrop-blur-xl">
                <LandingIcon />
                Landing Page Design
              </div>

              <h1 className="page-heading mt-6">
                Turn focused traffic into focused customer action.
              </h1>

              <p className="body-large mt-6">
                Techuvo designs responsive landing pages for advertising,
                service offers, appointments, events, product launches, and
                lead-generation campaigns.
              </p>

              <p className="body-copy mt-5 max-w-2xl">
                Every section is built around one audience, one offer, and one
                main conversion goal—without the distractions of a full
                multi-page website.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={bookingUrl}
                  className="button button-primary"
                >
                  Book a landing page call
                  <ArrowIcon />
                </a>

                <a
                  href="#landing-packages"
                  className="button button-secondary"
                >
                  View packages
                  <ArrowIcon />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                {[
                  "Campaign-focused structure",
                  "Responsive lead capture",
                  "Forms, booking, and analytics",
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

            <LandingPreview />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="site-container">
          <div className="section-header">
            <div className="section-header-copy">
              <span className="eyebrow">
                Landing Page Types
              </span>

              <h2 className="section-heading">
                One page engineered around one important result.
              </h2>
            </div>

            <p className="section-header-description">
              Techuvo builds landing pages around the exact action your
              campaign needs visitors to take.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {landingPageTypes.map((item) => (
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
        id="landing-packages"
        className="section architecture-grid"
      >
        <div className="site-container">
          <div className="section-header">
            <div className="section-header-copy">
              <span className="eyebrow">
                Landing Page Packages
              </span>

              <h2 className="section-heading">
                Choose the campaign system that fits your offer.
              </h2>
            </div>

            <p className="section-header-description">
              Deposits reserve your project and are applied toward the final
              package total. Every page begins with offer and audience
              discovery.
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
                  Landing page package
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
                Landing Page Process
              </span>

              <h2 className="section-heading">
                A clear path from offer strategy to campaign launch.
              </h2>
            </div>

            <p className="section-header-description">
              Every stage keeps the advertisement, audience, message, design,
              form, and final conversion goal connected.
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

              <div className="relative">
                <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-blue-300">
                  Campaign impact
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
                  A focused page gives every advertising dollar a clearer
                  destination.
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                  Instead of sending visitors into a broad website, a landing
                  page delivers the exact message, proof, offer, and action
                  connected to the campaign.
                </p>

                <a
                  href={bookingUrl}
                  className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-extrabold text-slate-950 transition hover:-translate-y-1 hover:bg-blue-50 sm:w-auto"
                >
                  Plan your campaign page
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
                Landing Page FAQ
              </span>

              <h2 className="section-heading">
                Common questions before launching a campaign page.
              </h2>
            </div>

            <p className="section-header-description">
              Clear answers help you understand the page structure,
              integrations, timeline, and what happens after paying the
              deposit.
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
                Connect the landing page to your complete customer journey.
              </h2>
            </div>

            <p className="section-header-description">
              Campaign performance becomes stronger when the landing page,
              brand identity, website, and follow-up systems all work together.
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
        id="book-landing-call"
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
                  Landing page intake
                </p>

                <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-[-0.055em] sm:text-5xl">
                  Give your next campaign a page built around conversion.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                  Share the offer, audience, traffic source, and action you want
                  visitors to take. Techuvo will shape the page around that
                  goal.
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
                  href={growthDepositUrl}
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
            href={growthDepositUrl}
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-blue-600 px-3 text-center text-sm font-extrabold text-white"
          >
            Pay deposit
          </a>
        </div>
      </div>
    </>
  );
}

export default LandingPages;