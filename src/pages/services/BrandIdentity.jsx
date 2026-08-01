import { useEffect } from "react";
import { Link } from "react-router-dom";

const bookingUrl = "#book-brand-call";
const starterDepositUrl = "#starter-brand-deposit";
const growthDepositUrl = "#growth-brand-deposit";
const completeDepositUrl = "#complete-brand-deposit";

const identityServices = [
  {
    number: "01",
    title: "Logo Direction",
    description:
      "Create or refine a recognizable logo direction that reflects the personality, positioning, and professionalism of your business.",
  },
  {
    number: "02",
    title: "Color System",
    description:
      "Build a practical color palette that remains consistent across your website, social media, documents, and marketing materials.",
  },
  {
    number: "03",
    title: "Typography System",
    description:
      "Select and organize typefaces that improve readability, create hierarchy, and give your business a consistent visual voice.",
  },
  {
    number: "04",
    title: "Visual Style",
    description:
      "Define the imagery, shapes, spacing, interface elements, and creative direction that make your brand feel distinct.",
  },
  {
    number: "05",
    title: "Brand Guidelines",
    description:
      "Document how your identity should be used so future websites, advertisements, graphics, and documents remain consistent.",
  },
  {
    number: "06",
    title: "Digital Brand Assets",
    description:
      "Prepare practical assets for websites, social profiles, presentations, email signatures, and everyday business use.",
  },
];

const packages = [
  {
    name: "Brand Foundation",
    price: "$399",
    deposit: "$125 deposit",
    timeline: "5–7 business days",
    bestFor:
      "New businesses that need a professional visual foundation before launching their website or marketing.",
    features: [
      "Brand discovery questionnaire",
      "Primary logo direction",
      "Core color palette",
      "Primary typography selection",
      "Basic brand usage sheet",
      "Web-ready logo files",
      "One revision round",
    ],
    depositUrl: starterDepositUrl,
    highlighted: false,
  },
  {
    name: "Growth Identity",
    price: "$799",
    deposit: "$250 deposit",
    timeline: "7–12 business days",
    bestFor:
      "Growing businesses that need a stronger and more complete identity across multiple customer touchpoints.",
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
    depositUrl: growthDepositUrl,
    highlighted: true,
  },
  {
    name: "Complete Brand System",
    price: "$1,499+",
    deposit: "$450 deposit",
    timeline: "2–4 weeks",
    bestFor:
      "Established companies that need a complete identity system for websites, presentations, documents, campaigns, and future growth.",
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
    depositUrl: completeDepositUrl,
    highlighted: false,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Brand discovery",
    description:
      "We identify your audience, values, personality, competitors, current visual problems, and the impression your business needs to create.",
  },
  {
    number: "02",
    title: "Creative direction",
    description:
      "The visual strategy is defined through positioning, mood, typography, color, imagery, and the overall tone of the identity.",
  },
  {
    number: "03",
    title: "Identity development",
    description:
      "The selected direction is developed into a connected logo, color, typography, and visual system.",
  },
  {
    number: "04",
    title: "Refinement",
    description:
      "Feedback is reviewed and the strongest direction is refined for consistency, legibility, flexibility, and real-world use.",
  },
  {
    number: "05",
    title: "Asset delivery",
    description:
      "The final identity files, usage guidance, and digital assets are prepared for your website, social media, and business materials.",
  },
];

const benefits = [
  "A more professional first impression",
  "Stronger visual recognition",
  "Consistent customer touchpoints",
  "Clearer marketing direction",
  "Better website design alignment",
  "More confidence when promoting the business",
  "Reusable visual standards",
  "A stronger foundation for future growth",
];

const frequentlyAskedQuestions = [
  {
    question: "What is included in a brand identity project?",
    answer:
      "The exact deliverables depend on the selected package. A project may include logo direction, color palettes, typography, visual styling, social assets, brand guidelines, and other practical materials.",
  },
  {
    question: "Is a brand identity the same as a logo?",
    answer:
      "No. A logo is one part of a larger identity. A complete brand identity also includes color, typography, imagery, layout, visual rules, and the way those elements work together.",
  },
  {
    question: "Can Techuvo redesign my existing logo?",
    answer:
      "Yes. Techuvo can refine or rebuild an existing identity while preserving recognizable elements that still support the business.",
  },
  {
    question: "Will I receive files that I can use elsewhere?",
    answer:
      "Yes. Final deliverables can include web-ready logo files, transparent image files, scalable formats, color references, typography guidance, and other package-specific assets.",
  },
  {
    question: "Can the new identity be applied to my website?",
    answer:
      "Yes. Techuvo can apply the identity to a new website or redesign your existing website as a separate or combined project.",
  },
  {
    question: "What happens after I pay the deposit?",
    answer:
      "After the deposit is confirmed, you will complete the brand intake, book a strategy call, and provide any existing logos, references, or business materials needed to begin.",
  },
];

const relatedServices = [
  {
    title: "Website Development",
    description:
      "Apply your new identity to a responsive website built around your services, audience, and business goals.",
    to: "/services/website-development",
  },
  {
    title: "Landing Pages",
    description:
      "Create focused campaign pages that use your visual identity consistently and guide visitors toward one action.",
    to: "/services/landing-pages",
  },
  {
    title: "Automation Systems",
    description:
      "Connect your customer-facing brand experience to organized lead capture, follow-up, and internal workflows.",
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

function BrandIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        cx="12"
        cy="12"
        r="8.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M12 3.5v17M3.5 12h17"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
      <circle
        cx="12"
        cy="12"
        r="3"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function BrandPreview() {
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
              Identity system
            </p>

            <span className="inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-slate-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Active
            </span>
          </div>

          <div className="mt-8 rounded-[1.4rem] border border-white/10 bg-white/[0.055] p-5">
            <div className="flex items-center justify-between gap-4">
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white text-2xl font-black tracking-[-0.08em] text-blue-700">
                T
              </div>

              <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-[0.62rem] font-extrabold uppercase tracking-[0.13em] text-blue-200">
                Primary mark
              </span>
            </div>

            <h2 className="mt-7 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
              A connected visual system makes every customer touchpoint feel
              intentional.
            </h2>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.055] p-4">
              <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.14em] text-slate-400">
                Color system
              </p>

              <div className="mt-5 grid grid-cols-4 gap-2">
                <span className="aspect-square rounded-xl bg-blue-600" />
                <span className="aspect-square rounded-xl bg-sky-400" />
                <span className="aspect-square rounded-xl bg-slate-200" />
                <span className="aspect-square rounded-xl bg-white" />
              </div>
            </div>

            <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.055] p-4">
              <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.14em] text-slate-400">
                Typography
              </p>

              <p className="mt-5 text-3xl font-black tracking-[-0.06em]">
                Aa
              </p>

              <p className="mt-2 text-sm font-semibold text-slate-300">
                Clear hierarchy across every screen.
              </p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              "Website",
              "Social",
              "Documents",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-[1.1rem] border border-white/10 bg-white/[0.055] p-3"
              >
                <span className="text-xs font-extrabold text-blue-200">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-3 text-xs font-bold text-white">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-auto border-t border-white/10 pt-6">
            <p className="text-xs font-semibold leading-6 text-slate-400">
              Every identity is designed for practical use across digital and
              business materials.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BrandIdentity() {
  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      "Brand Identity Design | Logos, Colors & Brand Systems | Techuvo";

    const description =
      "Techuvo creates professional brand identity systems including logo direction, typography, color palettes, visual styling, digital assets, and brand guidelines.";

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
      "https://techuvo.dev/services/brand-identity",
    );

    const structuredData = document.createElement("script");

    structuredData.id = "brand-identity-structured-data";
    structuredData.type = "application/ld+json";

    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          name: "Brand Identity Design",
          provider: {
            "@type": "Organization",
            name: "Techuvo",
            url: "https://techuvo.dev",
          },
          url: "https://techuvo.dev/services/brand-identity",
          description,
          serviceType: [
            "Brand Identity Design",
            "Logo Design",
            "Color System Design",
            "Typography Selection",
            "Brand Guidelines",
            "Digital Brand Assets",
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
              name: "Brand Identity",
              item: "https://techuvo.dev/services/brand-identity",
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
                <BrandIcon />
                Brand Identity Design
              </div>

              <h1 className="page-heading mt-6">
                Build a brand people can recognize, trust, and remember.
              </h1>

              <p className="body-large mt-6">
                Techuvo creates connected brand identity systems that give your
                business a more professional, consistent, and recognizable
                presence.
              </p>

              <p className="body-copy mt-5 max-w-2xl">
                Your identity should work everywhere your customers encounter
                the business—from your website and social profiles to
                presentations, documents, advertisements, and future campaigns.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={bookingUrl}
                  className="button button-primary"
                >
                  Book a brand strategy call
                  <ArrowIcon />
                </a>

                <a
                  href="#brand-packages"
                  className="button button-secondary"
                >
                  View packages
                  <ArrowIcon />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                {[
                  "Logo and visual direction",
                  "Color and typography systems",
                  "Practical brand guidelines",
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

            <BrandPreview />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="site-container">
          <div className="section-header">
            <div className="section-header-copy">
              <span className="eyebrow">
                Identity Capabilities
              </span>

              <h2 className="section-heading">
                Every visual decision should feel connected.
              </h2>
            </div>

            <p className="section-header-description">
              Techuvo develops the core elements your business needs to present
              itself consistently across digital and physical customer
              touchpoints.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {identityServices.map((item) => (
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
        id="brand-packages"
        className="section architecture-grid"
      >
        <div className="site-container">
          <div className="section-header">
            <div className="section-header-copy">
              <span className="eyebrow">
                Brand Packages
              </span>

              <h2 className="section-heading">
                Choose the identity system that matches your current stage.
              </h2>
            </div>

            <p className="section-header-description">
              Deposits reserve your project and are applied toward the final
              package total. Every project begins with brand discovery.
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
                  Brand package
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
                Identity Process
              </span>

              <h2 className="section-heading">
                A structured process from discovery to final assets.
              </h2>
            </div>

            <p className="section-header-description">
              Brand design should not begin with random colors and logos. Every
              stage keeps the audience, positioning, visual direction, and
              practical business use connected.
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
                  Consistency makes the business feel more established.
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                  A strong identity helps customers recognize your company,
                  understand its personality, and experience the same level of
                  professionalism across every interaction.
                </p>

                <a
                  href={bookingUrl}
                  className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-extrabold text-slate-950 transition hover:-translate-y-1 hover:bg-blue-50 sm:w-auto"
                >
                  Book a brand consultation
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
                Brand Identity FAQ
              </span>

              <h2 className="section-heading">
                Common questions before beginning your identity project.
              </h2>
            </div>

            <p className="section-header-description">
              Clear answers help you understand the deliverables, process, file
              formats, and what happens after paying your deposit.
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
                Apply your identity across a complete digital system.
              </h2>
            </div>

            <p className="section-header-description">
              Your brand becomes more valuable when the website, landing pages,
              customer workflows, and business materials all use the same
              visual direction.
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
        id="book-brand-call"
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
                  Brand project intake
                </p>

                <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-[-0.055em] sm:text-5xl">
                  Build an identity that makes your business easier to
                  recognize and trust.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                  Share your current materials, business goals, audience, and
                  the impression you want the brand to create.
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

export default BrandIdentity;