import { useEffect } from "react";
import { Link } from "react-router-dom";

const bookingUrl = "#book-call";
const starterDepositUrl = "#starter-deposit";
const growthDepositUrl = "#growth-deposit";
const customDepositUrl = "#custom-deposit";

const automationTypes = [
  {
    number: "01",
    title: "Lead Capture Automation",
    description:
      "Move new inquiries from your website into organized notifications, spreadsheets, CRMs, or follow-up systems automatically.",
  },
  {
    number: "02",
    title: "Appointment Workflows",
    description:
      "Connect booking tools, confirmations, reminders, internal notifications, and follow-up steps into one smoother process.",
  },
  {
    number: "03",
    title: "Customer Follow-Up",
    description:
      "Create structured follow-up systems for leads, missed appointments, estimate requests, and customer check-ins.",
  },
  {
    number: "04",
    title: "Internal Operations",
    description:
      "Reduce repetitive administrative work by connecting forms, records, team notifications, and routine business tasks.",
  },
  {
    number: "05",
    title: "CRM Integration",
    description:
      "Route customer information into a central system so leads and activity are easier to track and manage.",
  },
  {
    number: "06",
    title: "Custom Digital Workflows",
    description:
      "Engineer a workflow around the exact way your business receives information, makes decisions, and serves customers.",
  },
];

const packages = [
  {
    name: "Starter Automation",
    price: "$499",
    deposit: "$150 deposit",
    timeline: "5–7 business days",
    bestFor:
      "Small businesses that need one focused workflow connected and organized.",
    features: [
      "One primary automation workflow",
      "Website form or lead-source connection",
      "Email or internal notifications",
      "Basic data organization",
      "Testing and launch support",
      "One revision round",
    ],
    depositUrl: starterDepositUrl,
    highlighted: false,
  },
  {
    name: "Growth Automation",
    price: "$999",
    deposit: "$300 deposit",
    timeline: "7–14 business days",
    bestFor:
      "Businesses that need multiple systems working together across leads, scheduling, and follow-up.",
    features: [
      "Up to three connected workflows",
      "CRM or lead-tracking integration",
      "Automated follow-up sequence",
      "Booking or scheduling connection",
      "Internal status notifications",
      "Testing, documentation, and launch",
      "Two revision rounds",
    ],
    depositUrl: growthDepositUrl,
    highlighted: true,
  },
  {
    name: "Custom Operations System",
    price: "Custom quote",
    deposit: "Deposit after scope",
    timeline: "Based on project scope",
    bestFor:
      "Companies that need a larger operational system, dashboard, or advanced multi-step workflow.",
    features: [
      "Custom workflow architecture",
      "Multiple software integrations",
      "Advanced lead or customer routing",
      "Custom dashboards or internal tools",
      "Role-based business processes",
      "Launch documentation and training",
      "Priority implementation planning",
    ],
    depositUrl: customDepositUrl,
    highlighted: false,
  },
];

const process = [
  {
    number: "01",
    title: "Workflow audit",
    description:
      "We identify where information currently enters the business, what repetitive work is happening, and where delays or mistakes occur.",
  },
  {
    number: "02",
    title: "System mapping",
    description:
      "The automation is planned step by step, including triggers, actions, data movement, notifications, and human review points.",
  },
  {
    number: "03",
    title: "Build and integration",
    description:
      "The approved workflow is connected to the website, forms, CRM, scheduling platform, or other required tools.",
  },
  {
    number: "04",
    title: "Testing",
    description:
      "The system is tested with realistic scenarios to confirm information moves correctly and failure points are addressed.",
  },
  {
    number: "05",
    title: "Launch and handoff",
    description:
      "The workflow goes live with clear documentation, next-step guidance, and support for final adjustments.",
  },
];

const benefits = [
  "Faster response to new inquiries",
  "Less repetitive administrative work",
  "More consistent customer follow-up",
  "Better lead organization",
  "Fewer missed appointments or requests",
  "Clearer internal workflows",
  "More scalable business operations",
  "Improved customer experience",
];

const frequentlyAskedQuestions = [
  {
    question: "What kinds of business tasks can Techuvo automate?",
    answer:
      "Techuvo can automate lead capture, notifications, scheduling, reminders, follow-up, customer-information routing, spreadsheet updates, CRM activity, internal task creation, and other repeatable digital workflows.",
  },
  {
    question: "Do I need a CRM before starting?",
    answer:
      "No. Techuvo can work with your current tools, recommend a simple organization method, or connect a CRM when the workflow requires one.",
  },
  {
    question: "Can automation replace my employees?",
    answer:
      "The goal is usually to reduce repetitive work and help people operate more efficiently, not remove important human judgment or customer relationships.",
  },
  {
    question: "How long does an automation project take?",
    answer:
      "Focused workflows may take several business days, while larger systems can take multiple weeks. The timeline depends on the number of tools, workflow complexity, testing requirements, and required access.",
  },
  {
    question: "Can Techuvo connect my website forms to other tools?",
    answer:
      "Yes. Website forms can often be connected to email, spreadsheets, CRMs, scheduling tools, internal notifications, and other supported systems.",
  },
  {
    question: "What happens after I pay the deposit?",
    answer:
      "After the deposit is confirmed, you will book a strategy call, provide access to the required tools, and receive the project intake steps needed to begin.",
  },
];

const relatedServices = [
  {
    title: "Website Development",
    description:
      "Build the website or customer-facing system that feeds information into your automation.",
    to: "/services/website-development",
  },
  {
    title: "Landing Pages",
    description:
      "Create focused campaign pages that connect directly to lead capture and follow-up workflows.",
    to: "/services/landing-pages",
  },
  {
    title: "Brand Identity",
    description:
      "Strengthen the visual system supporting your customer experience across digital touchpoints.",
    to: "/services/brand-identity",
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

function AutomationIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M4 8h7V4M20 16h-7v4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M6 18a8 8 0 0 0 12-6M18 6A8 8 0 0 0 6 12"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function AutomationSystems() {
  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      "Business Automation Systems | CRM, Lead Follow-Up & Workflows | Techuvo";

    const description =
      "Techuvo builds business automation systems for lead capture, follow-up, scheduling, CRM integration, notifications, and internal workflows.";

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
      "https://techuvo.dev/services/automation-systems",
    );

    const structuredData = document.createElement("script");

    structuredData.id = "automation-systems-structured-data";
    structuredData.type = "application/ld+json";

    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          name: "Business Automation Systems",
          provider: {
            "@type": "Organization",
            name: "Techuvo",
            url: "https://techuvo.dev",
          },
          url: "https://techuvo.dev/services/automation-systems",
          description,
          serviceType: [
            "Business Automation",
            "CRM Integration",
            "Lead Follow-Up Automation",
            "Appointment Automation",
            "Workflow Automation",
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
              name: "Automation Systems",
              item: "https://techuvo.dev/services/automation-systems",
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
                <AutomationIcon />
                Business Automation Systems
              </div>

              <h1 className="page-heading mt-6">
                Automate repetitive work and move opportunities faster.
              </h1>

              <p className="body-large mt-6">
                Techuvo engineers digital workflows that connect lead capture,
                scheduling, follow-up, customer information, and internal
                business operations.
              </p>

              <p className="body-copy mt-5 max-w-2xl">
                The goal is not to automate everything. The goal is to remove
                unnecessary repetition, reduce missed opportunities, and help
                your business respond more consistently.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={bookingUrl}
                  className="button button-primary"
                >
                  Book a strategy call
                  <ArrowIcon />
                </a>

                <a
                  href="#automation-packages"
                  className="button button-secondary"
                >
                  View packages
                  <ArrowIcon />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                {[
                  "Lead and CRM workflows",
                  "Scheduling and follow-up",
                  "Custom operational systems",
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
                      Workflow engine
                    </p>

                    <span className="inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-slate-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      Active
                    </span>
                  </div>

                  <h2 className="mt-8 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
                    Lead received. Team notified. Customer followed up.
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                    A connected workflow can move information through the
                    business without requiring someone to manually repeat every
                    step.
                  </p>

                  <div className="mt-8 space-y-3">
                    {[
                      "Website form submitted",
                      "Lead added to tracking system",
                      "Internal notification sent",
                      "Customer confirmation delivered",
                      "Follow-up task scheduled",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.055] p-4"
                      >
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-blue-500/20 text-xs font-extrabold text-blue-200">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-bold text-white">
                            {item}
                          </p>

                          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-sky-400"
                              style={{
                                width: `${45 + index * 11}%`,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto border-t border-white/10 pt-6">
                    <p className="text-xs font-semibold leading-6 text-slate-400">
                      Workflows are designed around your existing process,
                      software, and business requirements.
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
                What We Automate
              </span>

              <h2 className="section-heading">
                Connect the work your business repeats every day.
              </h2>
            </div>

            <p className="section-header-description">
              Techuvo focuses on workflows that improve response speed,
              organization, consistency, and the movement of customer
              information.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {automationTypes.map((item) => (
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
        id="automation-packages"
        className="section architecture-grid"
      >
        <div className="site-container">
          <div className="section-header">
            <div className="section-header-copy">
              <span className="eyebrow">
                Automation Packages
              </span>

              <h2 className="section-heading">
                Choose a starting point for your workflow.
              </h2>
            </div>

            <p className="section-header-description">
              Every project begins with a strategy call. Deposits reserve the
              project and are applied toward the total package price.
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
                  Automation package
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
                Automation Process
              </span>

              <h2 className="section-heading">
                A controlled process from workflow audit to launch.
              </h2>
            </div>

            <p className="section-header-description">
              Automation should be tested and understandable. Every stage keeps
              the business process, software, data, and customer experience
              connected.
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
                  Business impact
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
                  Better systems create more room for actual business growth.
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                  Automation can help your team spend less time copying
                  information, checking multiple tools, and remembering routine
                  follow-up steps.
                </p>

                <a
                  href={bookingUrl}
                  className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-extrabold text-slate-950 transition hover:-translate-y-1 hover:bg-blue-50 sm:w-auto"
                >
                  Book an automation audit
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
                Automation FAQ
              </span>

              <h2 className="section-heading">
                Common questions before building a workflow.
              </h2>
            </div>

            <p className="section-header-description">
              Clear answers help businesses understand what can be automated,
              what access is required, and what happens after the deposit.
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
                Connect automation to the rest of your digital system.
              </h2>
            </div>

            <p className="section-header-description">
              Automation becomes more valuable when the website, landing pages,
              forms, brand experience, and customer journey are designed to work
              together.
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
        id="book-call"
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
                  Automation project intake
                </p>

                <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-[-0.055em] sm:text-5xl">
                  Show Techuvo the repetitive work slowing your business down.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                  We will map the workflow, identify what should remain human,
                  and recommend the clearest automation package.
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

export default AutomationSystems;