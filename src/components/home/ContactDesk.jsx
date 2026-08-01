import { useState } from "react";
import { Link } from "react-router-dom";

const contactMethods = [
  {
    label: "Email",
    value: "hello@techuvo.dev",
    href: "mailto:hello@techuvo.dev",
  },
  {
    label: "Service area",
    value: "Detroit, Ypsilanti, Ann Arbor & surrounding Michigan cities",
  },
  {
    label: "Project types",
    value: "Websites, landing pages, branding and automation",
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

function ContactDesk() {
  const [formStatus, setFormStatus] = useState("idle");

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const business = formData.get("business")?.trim();
    const service = formData.get("service")?.trim();
    const message = formData.get("message")?.trim();

    if (!name || !email || !business || !service || !message) {
      setFormStatus("error");
      return;
    }

    const subject = encodeURIComponent(
      `New Techuvo project inquiry from ${name}`,
    );

    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Business: ${business}`,
        `Service: ${service}`,
        "",
        "Project details:",
        message,
      ].join("\n"),
    );

    window.location.href = `mailto:hello@techuvo.dev?subject=${subject}&body=${body}`;
    setFormStatus("success");
  };

  return (
    <section
      id="contact-desk"
      aria-labelledby="contact-desk-heading"
      className="section architecture-grid relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute left-[-10rem] top-16 h-[28rem] w-[28rem] rounded-full bg-blue-100/70 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-[-10rem] right-[-8rem] h-[24rem] w-[24rem] rounded-full bg-sky-100/60 blur-[110px]"
      />

      <div className="site-container relative">
        <div className="section-header">
          <div className="section-header-copy">
            <div className="flex items-center gap-3">
              <span className="room-number">ROOM 07</span>

              <span className="h-px w-12 bg-gradient-to-r from-blue-600 to-transparent" />

              <span className="room-status">Desk available</span>
            </div>

            <span className="eyebrow">Contact Desk</span>

            <h2
              id="contact-desk-heading"
              className="section-heading"
            >
              Tell Techuvo what your business needs next.
            </h2>
          </div>

          <p className="section-header-description">
            Share your goals, current challenges, and the type of digital
            presence you want to build. Techuvo will use that information to
            recommend the clearest next step.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
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
              className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-blue-500/30 blur-[85px]"
            />

            <div className="relative flex h-full flex-col">
              <div className="flex items-center justify-between gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/10 text-blue-200">
                  <MailIcon />
                </span>

                <span className="inline-flex items-center gap-2 text-[0.65rem] font-extrabold uppercase tracking-[0.14em] text-slate-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  New inquiries open
                </span>
              </div>

              <div className="mt-10">
                <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-blue-300">
                  Project intake
                </p>

                <h3 className="mt-4 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
                  Start with the business problem—not a list of random
                  features.
                </h3>

                <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                  The more clearly you explain what your company is trying to
                  accomplish, the easier it becomes to shape the right website,
                  landing page, brand system, or automation solution.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {contactMethods.map((method) => (
                  <div
                    key={method.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.055] p-4"
                  >
                    <p className="text-[0.64rem] font-extrabold uppercase tracking-[0.14em] text-blue-300">
                      {method.label}
                    </p>

                    {method.href ? (
                      <a
                        href={method.href}
                        className="mt-2 block text-sm font-bold leading-6 text-white transition hover:text-blue-200"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="mt-2 text-sm font-bold leading-6 text-white">
                        {method.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.055] p-5">
                <p className="text-[0.64rem] font-extrabold uppercase tracking-[0.14em] text-blue-300">
                  What happens next
                </p>

                <div className="mt-4 space-y-3">
                  {[
                    "Your inquiry is reviewed",
                    "The project direction is clarified",
                    "You receive the recommended next step",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm font-semibold text-slate-200"
                    >
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-blue-500/20 text-blue-200">
                        <CheckIcon />
                      </span>

                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-8">
                <Link
                  to="/contact"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-extrabold text-slate-950 transition hover:-translate-y-1 hover:bg-blue-50 sm:w-auto"
                >
                  Open full contact page
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>

          <div className="surface-card p-4 sm:p-6 lg:p-8">
            <div className="mb-7">
              <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-blue-700">
                Project request
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-[-0.04em] text-slate-950 sm:text-3xl">
                Give us the details.
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Complete the form below and your email application will open
                with the project details already organized.
              </p>
            </div>

            <form className="form-grid" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">
                    Your name
                  </label>

                  <input
                    id="contact-name"
                    className="form-control"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Luan Hunt"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">
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
                  <label className="form-label" htmlFor="contact-business">
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

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-service">
                    Service needed
                  </label>

                  <select
                    id="contact-service"
                    className="form-control"
                    name="service"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Choose a service
                    </option>
                    <option value="Website development">
                      Website development
                    </option>
                    <option value="Landing page">Landing page</option>
                    <option value="Brand identity">Brand identity</option>
                    <option value="Automation system">
                      Automation system
                    </option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">
                  Project details
                </label>

                <textarea
                  id="contact-message"
                  className="form-control"
                  name="message"
                  placeholder="Tell us what your business does, what you need, what is not working right now, and what result you want from the project."
                  required
                />
              </div>

              {formStatus === "error" && (
                <p
                  role="alert"
                  className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700"
                >
                  Complete every field before submitting the project request.
                </p>
              )}

              {formStatus === "success" && (
                <p
                  role="status"
                  className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700"
                >
                  Your email application should now open with the project
                  details prepared.
                </p>
              )}

              <button
                type="submit"
                className="button button-primary mt-2 w-full sm:w-fit"
              >
                Prepare project email
                <ArrowIcon />
              </button>

              <p className="text-xs leading-5 text-slate-500">
                This version uses your visitor’s email application, so it works
                without requiring a backend form service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactDesk;