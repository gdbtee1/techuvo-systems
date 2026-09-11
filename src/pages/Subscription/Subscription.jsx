import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ryneWritesPreview from "../../assets/images/ryne-writes-preview.jpg";
import "./Subscription.css";

const projects = [
  {
    name: "Davis Asphalt",
    category: "CONSTRUCTION / WEB",
    description: "A digital presence for an asphalt and paving business.",
    url: "https://gdbtee1.github.io/davis-asphalt/",
    color: "#FCA5A5",
    number: "01",
  },
  {
    name: "Fashion Brand",
    category: "FASHION / COMMERCE",
    description: "A fashion-focused digital storefront concept.",
    url: "https://gdbtee1.github.io/fashion-brand/",
    color: "#D8B4FE",
    number: "02",
  },
  {
    name: "Mojoy Records",
    category: "MUSIC / ENTERTAINMENT",
    description: "A digital experience for an independent Detroit record label.",
    url: "https://gdbtee1.github.io/mojoy-records/",
    color: "#FDE68A",
    number: "03",
  },
  {
    name: "Retro Dental",
    category: "HEALTHCARE / WEB",
    description: "A friendly, expressive dental website concept.",
    url: "https://gdbtee1.github.io/retro-dental/",
    color: "#99F6E4",
    number: "04",
  },
  {
    name: "Ryne Writes",
    category: "WRITING / INTERACTIVE",
    description: "A custom game-inspired portfolio for a writer.",
    url: "https://rynewrites.com/",
    color: "#FBCFE8",
    number: "05",
  },
];

const questions = [
  {
    question: "When does the 3-day timeline begin?",
    answer:
      "The production timeline begins after payment is confirmed, your intake is complete, and all required content and domain access are received. It applies to the agreed standard website scope. Complex features, missing materials, revisions, or third-party delays may require additional time.",
  },
  {
    question: "Do I own my domain?",
    answer:
      "Yes. We recommend registering your domain in your own account so you retain control. Domain registration and renewal fees are separate unless your agreement explicitly includes them.",
  },
  {
    question: "What happens after the first 12 months?",
    answer:
      "The managed plan's renewal, cancellation, and transfer options will be stated in your agreement. You can discuss continuing managed service or an available ownership and hosting transition before committing.",
  },
  {
    question: "Can I request additional features?",
    answer:
      "Yes. E-commerce, booking systems, custom integrations, additional pages, and extensive revisions can be quoted separately. The 3-day standard package is intentionally scoped to keep delivery predictable.",
  },
];

function Arrow({ diagonal = false }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={diagonal ? "M5 19 19 5M8 5h11v11" : "M4 12h16m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProjectCard({ project }) {
  return (
    <a
      className="sub-project-card"
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ "--project-color": project.color }}
    >
      <div className="sub-project-top">
        <span>PROJECT_{project.number}</span>
        <Arrow diagonal />
      </div>
      <div className="sub-project-art">
        <img
          src={
            project.name === "Ryne Writes"
              ? ryneWritesPreview
              : `https://image.thum.io/get/width/1400/crop/900/noanimate/${project.url}`
          }
          alt={`${project.name} website preview`}
          loading="lazy"
          className="sub-project-screenshot"
        />
        <span className="sub-project-art-label">{project.category}</span>
      </div>
      <div className="sub-project-info">
        <span className="sub-micro">{project.category}</span>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <span className="sub-project-visit">OPEN LIVE PROJECT ↗</span>
      </div>
    </a>
  );
}

function FileRoom({ open, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="sub-file-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Techuvo project archive"
    >
      <div className="sub-file-overlay-inner">
        <div className="sub-file-toolbar">
          <div>
            <span className="sub-micro">TECHUVO / SELECTED WORK</span>
            <h2>THE FILE ROOM<span>.</span></h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            className="sub-close-button"
            onClick={onClose}
          >
            ✕ CLOSE
          </button>
        </div>
        <p className="sub-file-intro">
          Five different businesses and creative directions. Open a project to
          explore the live experience.
        </p>
        <div className="sub-project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.url} project={project} />
          ))}
        </div>
        <button
          className="sub-file-bottom"
          type="button"
          onClick={onClose}
        >
          ← RETURN TO THE SUBSCRIPTION ENGINE
        </button>
      </div>
    </div>
  );
}

export default function Subscription() {
  const [fileRoomOpen, setFileRoomOpen] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState("managed");

  const openFileRoom = () => setFileRoomOpen(true);
  const closeFileRoom = () => setFileRoomOpen(false);

  const selectPlan = (plan) => {
    setSelectedPlan(plan);
    document.getElementById("subscription-pricing")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="subscription-page">
      <a className="sub-skip-link" href="#subscription-main">
        Skip to content
      </a>

      <header className="sub-header">
        <div className="sub-container sub-header-inner">
          <Link className="sub-logo" to="/">
            TECHUVO<span>®</span>
            <small>SUBSCRIPTION ENGINE</small>
          </Link>

          <div className="sub-system-status">
            <span className="sub-status-dot" />
            <span>SYSTEMS_ACTIVE_09_2026</span>
          </div>

          <a className="sub-header-cta" href="#subscription-pricing">
            VIEW PLANS <Arrow diagonal />
          </a>
        </div>
      </header>

      <main id="subscription-main">
        <section className="sub-hero sub-dot-grid">
          <div className="sub-container">
            <div className="sub-hero-meta">
              <span>OFFER_01 / WEBSITE-AS-A-SERVICE</span>
              <span>BUILT BY A REAL FOUNDER.</span>
            </div>

            <div className="sub-hero-grid">
              <div className="sub-hero-copy">
                <div className="sub-label">
                  <span className="sub-label-dot" />
                  YOUR NEXT WEBSITE STARTS HERE
                </div>

                <h1>
                  Your new website.
                  <br />
                  Built by a <em>real founder.</em>
                  <br />
                  <span>Ready in 3 days.</span>
                </h1>

                <p className="sub-hero-description">
                  Get a custom-coded website without a massive upfront bill.
                  Choose a managed subscription or purchase your website
                  outright. Simple onboarding, clear pricing, and a focused
                  production process.
                </p>

                <div className="sub-hero-actions">
                  <button
                    type="button"
                    className="sub-button sub-button-red"
                    onClick={() => selectPlan("managed")}
                  >
                    START MY SITE <span>↗</span>
                  </button>
                  <button
                    type="button"
                    className="sub-button sub-button-outline"
                    onClick={openFileRoom}
                  >
                    OPEN LIVE FILE ROOM <span>��</span>
                  </button>
                </div>

                <p className="sub-timeline-note">
                  3-day standard production target begins after payment and
                  complete intake. Domain fees and additional scope are separate.
                </p>

                <div className="sub-hero-proof">
                  <div><strong>03</strong><span>DAY PRODUCTION TARGET</span></div>
                  <div><strong>05</strong><span>FEATURED PROJECTS</span></div>
                  <div><strong>01</strong><span>DIRECT FOUNDER CONTACT</span></div>
                </div>
              </div>

              <div className="sub-hero-visual">
                <div className="sub-visual-label">
                  <span>TECHUVO / PRODUCTION STATION</span>
                  <span>LIVE PREVIEW</span>
                </div>

                <div className="sub-device">
                  <div className="sub-device-bar">
                    <span>● ● ●</span>
                    <span>YOUR-BRAND.COM</span>
                    <span>↗</span>
                  </div>
                  <div className="sub-device-screen">
                    <div className="sub-preview-top">
                      <span>YOUR BRAND®</span>
                      <span>MENU ☰</span>
                    </div>
                    <div className="sub-preview-copy">
                      <span className="sub-micro">YOUR BUSINESS / REIMAGINED</span>
                      <strong>MAKE YOUR<br />NEXT MOVE.</strong>
                      <div className="sub-preview-button">EXPLORE ↗</div>
                    </div>
                    <div className="sub-preview-shape" aria-hidden="true">✳</div>
                    <div className="sub-preview-bottom">DESIGN / DEVELOPMENT / LAUNCH</div>
                  </div>
                </div>

                <div className="sub-floating-ticket">
                  <span>PRODUCTION STATUS</span>
                  <strong>YOUR SITE, YOUR WAY.</strong>
                  <div><span>01 / SETUP</span><span>02 / BUILD</span><span>03 / LAUNCH</span></div>
                </div>
              </div>
            </div>

            <div className="sub-hero-footer">
              <span>SCROLL TO EXPLORE ↓</span>
              <span>DESIGN THAT WORKS. PRICING THAT MAKES SENSE.</span>
            </div>
          </div>
        </section>

        <section className="sub-archive-section" id="subscription-work">
          <div className="sub-container">
            <div className="sub-section-meta">
              <span>01 / THE PROOF</span>
              <span>SELECTED WORK ARCHIVE</span>
            </div>
            <div className="sub-archive-heading">
              <h2>DON'T TAKE<br />OUR WORD <em>FOR IT.</em></h2>
              <p>Different industries. Different creative directions. Real projects you can open and explore.</p>
            </div>

            <button className="sub-folder-trigger" type="button" onClick={openFileRoom}>
              <span className="sub-folder-icon" aria-hidden="true">📂</span>
              <span className="sub-folder-copy">
                <span className="sub-micro">[ ACTIVE_PROJECT_ARCHIVE ]</span>
                <strong>OPEN THE<br />FILE ROOM.</strong>
                <span>Explore five featured builds in our interactive project archive.</span>
              </span>
              <span className="sub-folder-arrow"><Arrow diagonal /></span>
            </button>
            <div className="sub-archive-footer">
              <span>05 PROJECTS / 05 DIFFERENT DIRECTIONS</span>
              <span>CLICK TO EXPLORE ↗</span>
            </div>
          </div>
        </section>

        <section className="sub-process-section" id="subscription-process">
          <div className="sub-container">
            <div className="sub-section-meta">
              <span>02 / HOW IT WORKS</span>
              <span>THREE STEPS. ONE CLEAR PROCESS.</span>
            </div>
            <div className="sub-section-heading">
              <h2>LESS BACK-AND-FORTH.<br /><em>MORE BUILDING.</em></h2>
              <p>No endless chasing, confusing proposals, or guessing what happens next. Choose your plan, complete your intake, and let the production process begin.</p>
            </div>
            <div className="sub-process-grid">
              <article className="sub-process-card">
                <span className="sub-node">NODE_01</span>
                <strong className="sub-step-number">01</strong>
                <h3>SECURE YOUR SETUP.</h3>
                <p>Choose your plan and complete payment through our secure checkout once your order is confirmed.</p>
                <span className="sub-node-footer">SELECT → PAY → CONFIRM</span>
              </article>
              <article className="sub-process-card">
                <span className="sub-node">NODE_02</span>
                <strong className="sub-step-number">02</strong>
                <h3>COMPLETE YOUR INTAKE.</h3>
                <p>Provide your business details, content, images, and domain information through a guided onboarding process.</p>
                <span className="sub-node-footer">DETAILS → CONTENT → DOMAIN</span>
              </article>
              <article className="sub-process-card">
                <span className="sub-node">NODE_03</span>
                <strong className="sub-step-number">03</strong>
                <h3>WE BUILD. YOU LAUNCH.</h3>
                <p>We develop your agreed website, review the essentials, and prepare it for launch within the standard production target.</p>
                <span className="sub-node-footer">DESIGN → DEVELOP → LAUNCH</span>
              </article>
            </div>
            <div className="sub-process-note">
              <span>✳</span>
              <p>THE 3-DAY CLOCK STARTS WHEN YOUR PAYMENT, COMPLETE INTAKE, AND REQUIRED ASSETS ARE RECEIVED. CUSTOM FEATURES OR THIRD-PARTY DELAYS MAY EXTEND DELIVERY.</p>
            </div>
          </div>
        </section>

        <section className="sub-pricing-section" id="subscription-pricing">
          <div className="sub-container">
            <div className="sub-section-meta">
              <span>03 / THE OFFER ENGINE</span>
              <span>CHOOSE YOUR OWNERSHIP MODEL</span>
            </div>
            <div className="sub-section-heading">
              <h2>ONE GREAT WEBSITE.<br /><em>TWO WAYS TO START.</em></h2>
              <p>Choose the model that fits your business. Both options use a defined project scope and a clear onboarding process.</p>
            </div>

            <div className="sub-pricing-grid">
              <article className={`sub-price-card ${selectedPlan === "managed" ? "is-selected" : ""}`}>
                <div className="sub-price-card-top">
                  <span>ENGINE_A / MANAGED</span>
                  <span className="sub-price-badge">LOW UPFRONT COST</span>
                </div>
                <h3>THE CASH-FLOW PLAN.</h3>
                <p className="sub-price-intro">A professionally built website with ongoing hosting and support, without paying the full development cost upfront.</p>
                <div className="sub-price-amount"><strong>$49</strong><span>/ MONTH</span></div>
                <div className="sub-setup-price">+ $50 INITIAL SETUP FEE</div>
                <p className="sub-price-term">12-month initial service term. Total scheduled payments: $638, including setup, before any optional extras or applicable taxes.</p>
                <div className="sub-price-divider" />
                <span className="sub-micro">YOUR PLAN INCLUDES</span>
                <ul className="sub-feature-list">
                  <li>Custom-coded website within agreed scope</li>
                  <li>Managed cloud hosting and SSL setup</li>
                  <li>Responsive mobile and desktop development</li>
                  <li>Core monthly image and text maintenance</li>
                  <li>Standard security and hosting support</li>
                  <li>Guided onboarding and launch process</li>
                </ul>
                <div className="sub-price-action">
                  <span className="sub-micro">PAYMENT CONNECTION COMING NEXT</span>
                  <button type="button" disabled className="sub-button sub-button-red">
                    START WITH $50 <Arrow diagonal />
                  </button>
                  <p>Checkout will be enabled after the agreement, billing schedule, and secure payment integration are finalized.</p>
                </div>
              </article>

              <article className={`sub-price-card sub-owner-card ${selectedPlan === "owner" ? "is-selected" : ""}`}>
                <div className="sub-price-card-top">
                  <span>ENGINE_B / OWNERSHIP</span>
                  <span className="sub-price-badge">ONE-TIME PURCHASE</span>
                </div>
                <h3>THE OWNER'S ASSET PLAN.</h3>
                <p className="sub-price-intro">Purchase the agreed website outright with a defined handover and your first year of managed hosting included.</p>
                <div className="sub-price-amount"><strong>$999</strong><span>/ ONE TIME</span></div>
                <div className="sub-setup-price">NO MONTHLY SERVICE COMMITMENT</div>
                <p className="sub-price-term">Payment terms and any available financing options will be confirmed at checkout. Domain registration is separate.</p>
                <div className="sub-price-divider" />
                <span className="sub-micro">YOUR PURCHASE INCLUDES</span>
                <ul className="sub-feature-list">
                  <li>Custom-coded website within agreed scope</li>
                  <li>Code handover under the purchase agreement</li>
                  <li>One year of managed hosting included</li>
                  <li>Responsive mobile and desktop development</li>
                  <li>Foundational local SEO configuration</li>
                  <li>Direct founder support during the project</li>
                </ul>
                <div className="sub-price-action">
                  <span className="sub-micro">PAYMENT CONNECTION COMING NEXT</span>
                  <button type="button" disabled className="sub-button sub-button-dark">
                    PURCHASE WEBSITE <Arrow diagonal />
                  </button>
                  <p>Financing, if available and eligible, will be shown by the payment provider. No financing approval or installment schedule is guaranteed.</p>
                </div>
              </article>
            </div>
            <div className="sub-pricing-disclosure">
              <strong>BEFORE YOU COMMIT</strong>
              <p>Final scope, delivery terms, ownership rights, renewal and cancellation terms, and any early-termination charges will be presented in a written agreement before payment. We will not charge an undisclosed cancellation fee or promise unavailable financing.</p>
            </div>
          </div>
        </section>

        <section className="sub-faq-section">
          <div className="sub-container sub-faq-grid">
            <div>
              <span className="sub-micro">04 / THE DETAILS</span>
              <h2>GOOD QUESTIONS.<br /><em>CLEAR ANSWERS.</em></h2>
              <p>Know what you are purchasing before you commit.</p>
            </div>
            <div className="sub-faq-list">
              {questions.map((item, index) => (
                <div className="sub-faq-item" key={item.question}>
                  <button
                    type="button"
                    aria-expanded={activeQuestion === index}
                    onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{item.question}</strong>
                    <span>{activeQuestion === index ? "−" : "+"}</span>
                  </button>
                  {activeQuestion === index && <p>{item.answer}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sub-final-cta">
          <div className="sub-container">
            <span className="sub-micro">READY WHEN YOU ARE / TECHUVO</span>
            <h2>YOUR NEXT WEBSITE<br />STARTS <em>RIGHT HERE.</em></h2>
            <p>Choose your plan, complete your intake, and get your business ready for its next chapter.</p>
            <button
              type="button"
              className="sub-button sub-button-red"
              onClick={() => selectPlan("managed")}
            >
              EXPLORE THE PLANS <Arrow diagonal />
            </button>
            <div className="sub-final-bottom">
              <span>TECHUVO® / SUBSCRIPTION WEB ENGINE</span>
              <Link to="/">RETURN TO MAIN STUDIO ↗</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="sub-footer">
        <div className="sub-container">
          <Link to="/" className="sub-footer-logo">TECHUVO®</Link>
          <span>© {new Date().getFullYear()} TECHUVO LLC.</span>
          <a href="mailto:hello@techuvo.dev">HELLO@TECHUVO.DEV ↗</a>
        </div>
      </footer>

      <FileRoom open={fileRoomOpen} onClose={closeFileRoom} />
    </div>
  );
}
