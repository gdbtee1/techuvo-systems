import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const bookingUrl = "#book-project-call";

const serviceOptions = [
  "Website Development",
  "Landing Page Design",
  "Brand Identity",
  "Automation Systems",
  "Website Redesign",
  "Local SEO Foundations",
  "Not sure yet",
];

const budgetOptions = [
  "Under $500",
  "$500–$1,000",
  "$1,000–$2,500",
  "$2,500–$5,000",
  "$5,000+",
  "Not sure yet",
];

const timelineOptions = [
  "As soon as possible",
  "Within 2 weeks",
  "Within 30 days",
  "Within 60 days",
  "Flexible",
];

const contactDetails = [
  {
    label: "Email",
    value: "hello@techuvo.dev",
    href: "mailto:hello@techuvo.dev",
  },
  {
    label: "Primary service area",
    value: "Detroit, Ypsilanti, Ann Arbor, Dearborn, Livonia & Southfield",
  },
  {
    label: "Project types",
    value:
      "Websites, landing pages, brand identity, redesigns, and automation systems",
  },
  {
    label: "Availability",
    value: "New project inquiries are currently open",
  },
];

const nextSteps = [
  {
    number: "01",
    title: "Submit your project details",
    description:
      "Tell Techuvo what your business does, what you need, what is not working, and what result you want.",
  },
  {
    number: "02",
    title: "Receive a project recommendation",
    description:
      "Your request is reviewed and the clearest service, scope, timeline, and next step are identified.",
  },
  {
    number: "03",
    title: "Book the strategy call",
    description:
      "We clarify the project, confirm the fit, and discuss the information needed to begin.",
  },
  {
    number: "04",
    title: "Reserve the project",
    description:
      "Once the scope is confirmed, the deposit secures your project and the build process begins.",
  },
];

const frequentlyAskedQuestions = [
  {
    question: "How quickly will Techuvo respond to my inquiry?",
    answer:
      "Most inquiries should receive a response as soon as possible during normal business availability. More detailed project requests may require additional review before a recommendation is provided.",
  },
  {
    question: "Do I need to know exactly which service I need?",
    answer:
      "No. You can select “Not sure yet” and explain the business problem. Techuvo can recommend whether you need a website, landing page, redesign, identity system, automation workflow, or a combination of services.",
  },
  {
    question: "Do I have to pay before speaking with Techuvo?",
    answer:
      "No. You can submit the project form and book a strategy call before paying a deposit. The deposit should be paid after the package or project scope is clear.",
  },
  {
    question: "Can Techuvo work with businesses outside Michigan?",
    answer:
      "Yes. Techuvo serves businesses in Michigan and can also work remotely with companies in other locations.",
  },
  {
    question: "What should I prepare before the strategy call?",
    answer:
      "Bring your business goals, current website or materials, service information, target audience, examples you like, and any deadline or budget constraints.",
  },
  {
    question: "Can Techuvo help if I already have a website?",
    answer:
      "Yes. Techuvo can review your current website, redesign it, improve specific pages, add service or location pages, connect tools, or rebuild the system completely.",
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

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <rect
        x="3.5"
        y="5"
        width="17"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="m5 7 7 5 7-5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function Contact() {
  const [formStatus, setFormStatus] = useState("idle");

  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      "Contact Techuvo | Start a Website, Branding or Automation Project";

    const description =
      "Contact Techuvo to discuss website design, website development, landing pages, brand identity, redesigns, local SEO foundations, or business automation.";

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
      "https://techuvo.dev/contact",
    );

    const structuredData = document.createElement("script");

    structuredData.id = "contact-page-structured-data";
    structuredData.type = "application/ld+json";

    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ContactPage",
          name: "Contact Techuvo",
          url: "https://techuvo.dev/contact",
          description,
          mainEntity: {
            "@type": "Organization",
            name: "Techuvo",
            url: "https://techuvo.dev",
            email: "hello@techuvo.dev",
            areaServed: [
              "Detroit",
              "Ypsilanti",
              "Ann Arbor",
              "Dearborn",
              "Livonia",
              "Southfield",
              "Michigan",
              "United States",
            ],
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
              name: "Contact",
              item: "https://techuvo.dev/contact",
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const business = formData.get("business")?.trim();
    const service = formData.get("service")?.trim();
    const budget = formData.get("budget")?.trim();
    const timeline = formData.get("timeline")?.trim();
    const message = formData.get("message")?.trim();

    if (
      !name ||
      !email ||
      !business ||
      !service ||
      !budget ||
      !timeline ||
      !message
    ) {
      setFormStatus("error");
      return;
    }

    try {
      setFormStatus("submitting");

      const response = await fetch("https://formspree.io/f/mnjprdge", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setFormStatus("success");
    } catch (error) {
      setFormStatus("error");
    }
  };

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
          <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
            <div>
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-white/85 px-3.5 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-blue-700 shadow-sm backdrop-blur-xl">
                <MailIcon />
                Contact Techuvo
              </div>

              <h1 className="page-heading mt-6">
                Tell us what your business needs next.
              </h1>

              <p className="body-large mt-6">
                Start a conversation about your website, landing page, brand
                identity, redesign, local visibility, or automation system.
              </p>

              <p className="body-copy mt-5 max-w-2xl">
                The strongest project requests explain the business, the current
                problem, the desired result, the timeline, and what customers
                should be able to do after the project is complete.
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
                  href="#project-form"
                  className="button button-secondary"
                >
                  Submit project details
                  <ArrowIcon />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                {[
                  "Direct project communication",
                  "Clear scope recommendations",
                  "No obligation to pay first",
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
                      Project intake
                    </p>

                    <span className="inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-slate-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      Inquiries open
                    </span>
                  </div>

                  <h2 className="mt-8 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
                    Start with the business problem, not a random feature list.
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                    Techuvo will help determine the right service, package,
                    scope, timeline, and next step based on the outcome your
                    business needs.
                  </p>

                  <div className="mt-8 space-y-3">
                    {contactDetails.map((detail, index) => (
                      <div
                        key={detail.label}
                        className="rounded-2xl border border-white/10 bg-white/[0.055] p-4"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <p className="text-[0.64rem] font-extrabold uppercase tracking-[0.14em] text-blue-300">
                            {detail.label}
                          </p>

                          <span className="text-xs font-extrabold text-slate-500">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>

                        {detail.href ? (
                          <a
                            href={detail.href}
                            className="mt-2 block text-sm font-bold leading-6 text-white transition hover:text-blue-200"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="mt-2 text-sm font-bold leading-6 text-white">
                            {detail.value}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto border-t border-white/10 pt-6">
                    <p className="text-xs font-semibold leading-6 text-slate-400">
                      Techuvo works with Michigan businesses and remote clients
                      throughout the United States.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="project-form"
        className="section bg-white"
      >
        <div className="site-container">
          <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
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
                  Strong inquiry checklist
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
                  The more context you provide, the stronger the recommendation.
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                  You do not need a perfect technical explanation. Focus on the
                  business, the current challenge, and the result you want.
                </p>

                <div className="mt-8 space-y-3">
                  {[
                    "What your business does",
                    "Who your customers are",
                    "What is not working now",
                    "What the project should improve",
                    "Your preferred timeline",
                    "Your available budget range",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-4"
                    >
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-blue-500/20 text-xs font-extrabold text-blue-200">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-sm font-bold text-white">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="surface-card p-5 sm:p-7 lg:p-9">
              <div className="mb-8">
                <span className="eyebrow">
                  Project Request Form
                </span>

                <h2 className="section-heading mt-5">
                  Share the details of your project.
                </h2>

                <p className="body-copy mt-4 max-w-2xl">
                  Share your project details below and Techuvo will review your
                  request and follow up with the clearest next step.
                </p>
              </div>

              <form
                className="form-grid"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="form-row">
                  <div className="form-group">
                    <label
                      className="form-label"
                      htmlFor="contact-name"
                    >
                      Your name
                    </label>

                    <input
                      id="contact-name"
                      className="form-control"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label
                      className="form-label"
                      htmlFor="contact-email"
                    >
                      Email address
                    </label>

                    <input
                      id="contact-email"
                      className="form-control"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@business.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label
                      className="form-label"
                      htmlFor="contact-phone"
                    >
                      Phone number
                    </label>

                    <input
                      id="contact-phone"
                      className="form-control"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="Optional"
                    />
                  </div>

                  <div className="form-group">
                    <label
                      className="form-label"
                      htmlFor="contact-business"
                    >
                      Business name
                    </label>

                    <input
                      id="contact-business"
                      className="form-control"
                      name="business"
                      type="text"
                      autoComplete="organization"
                      placeholder="Your company"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label
                    className="form-label"
                    htmlFor="contact-website"
                  >
                    Current website
                  </label>

                  <input
                    id="contact-website"
                    className="form-control"
                    name="website"
                    type="url"
                    inputMode="url"
                    placeholder="https://yourwebsite.com or leave blank"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label
                      className="form-label"
                      htmlFor="contact-service"
                    >
                      Service needed
                    </label>

                    <select
                      id="contact-service"
                      className="form-control"
                      name="service"
                      defaultValue=""
                      required
                    >
                      <option
                        value=""
                        disabled
                      >
                        Choose a service
                      </option>

                      {serviceOptions.map((service) => (
                        <option
                          key={service}
                          value={service}
                        >
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label
                      className="form-label"
                      htmlFor="contact-budget"
                    >
                      Estimated budget
                    </label>

                    <select
                      id="contact-budget"
                      className="form-control"
                      name="budget"
                      defaultValue=""
                      required
                    >
                      <option
                        value=""
                        disabled
                      >
                        Choose a range
                      </option>

                      {budgetOptions.map((budget) => (
                        <option
                          key={budget}
                          value={budget}
                        >
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label
                    className="form-label"
                    htmlFor="contact-timeline"
                  >
                    Preferred timeline
                  </label>

                  <select
                    id="contact-timeline"
                    className="form-control"
                    name="timeline"
                    defaultValue=""
                    required
                  >
                    <option
                      value=""
                      disabled
                    >
                      Choose a timeline
                    </option>

                    {timelineOptions.map((timeline) => (
                      <option
                        key={timeline}
                        value={timeline}
                      >
                        {timeline}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label
                    className="form-label"
                    htmlFor="contact-message"
                  >
                    Project details
                  </label>

                  <textarea
                    id="contact-message"
                    className="form-control min-h-[12rem]"
                    name="message"
                    placeholder="Explain what your business does, what you need, what is not working now, and what result you want from the project."
                    required
                  />
                </div>

                {formStatus === "error" && (
                  <p
                    role="alert"
                    className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700"
                  >
                    Complete every required field before submitting your
                    request.
                  </p>
                )}

                {formStatus === "success" && (
                  <p
                    role="status"
                    className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700"
                  >
                    Your project request was submitted successfully. Techuvo will
                    review your details and follow up soon.
                  </p>
                )}

                <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="button button-primary w-full sm:w-auto"
                  >
                    {formStatus === "submitting" ? "Submitting..." : "Submit project request"}
                    <ArrowIcon />
                  </button>

                  <a
                    href={bookingUrl}
                    className="button button-secondary w-full sm:w-auto"
                  >
                    Book strategy call
                    <ArrowIcon />
                  </a>
                </div>

                <p className="text-xs leading-5 text-slate-500">
                  Required fields are used only to review and respond to your project inquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section architecture-grid">
        <div className="site-container">
          <div className="section-header">
            <div className="section-header-copy">
              <span className="eyebrow">
                What Happens Next
              </span>

              <h2 className="section-heading">
                A clear path from inquiry to project start.
              </h2>
            </div>

            <p className="section-header-description">
              You should understand the next step before committing to a
              project or paying a deposit.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {nextSteps.map((step) => (
              <article
                key={step.number}
                className="grid gap-5 rounded-[1.55rem] border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-[4rem_1fr] sm:p-7"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-blue-200 bg-blue-50 text-sm font-extrabold text-blue-700">
                  {step.number}
                </span>

                <div>
                  <h3 className="text-xl font-bold tracking-[-0.035em] text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
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
                Contact FAQ
              </span>

              <h2 className="section-heading">
                Common questions before contacting Techuvo.
              </h2>
            </div>

            <p className="section-header-description">
              Learn what information to provide, when payment is required, and
              how the project process begins.
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
        id="book-project-call"
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
                  Strategy call
                </p>

                <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-[-0.055em] sm:text-5xl">
                  Ready to define the right project for your business?
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                  Use the project form above to share your goals, timeline, and
                  business needs before scheduling a strategy call.
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
                  to="/services/website-development"
                  className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-6 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-white/[0.1]"
                >
                  Review website packages
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;