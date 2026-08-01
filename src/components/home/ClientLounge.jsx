import { Link } from "react-router-dom";

const testimonials = [
  {
    quote:
      "Techuvo made the process simple, communicated clearly, and delivered a website that made our business look much more professional.",
    name: "Carolina Brake & Diagnostics",
    role: "Automotive services",
  },
  {
    quote:
      "The finished website gave us a cleaner way to explain our services and a stronger presence for families finding us online.",
    name: "Golden Cares",
    role: "Care services",
  },
  {
    quote:
      "Techuvo understood the direction we wanted and turned it into a polished website that works well across every device.",
    name: "Kids First",
    role: "Education services",
  },
];

const clientExperience = [
  {
    number: "01",
    title: "Clear communication",
    description:
      "You know what is being built, what stage the project is in, and what decisions are needed next.",
  },
  {
    number: "02",
    title: "Organized process",
    description:
      "Strategy, content, design, revisions, and launch are handled through a structured workflow.",
  },
  {
    number: "03",
    title: "Responsive support",
    description:
      "Questions and feedback are addressed directly so the project continues moving forward.",
  },
];

const projectSignals = [
  {
    value: "1:1",
    label: "Direct communication",
  },
  {
    value: "100%",
    label: "Responsive layouts",
  },
  {
    value: "5",
    label: "Connected project stages",
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

function QuoteIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M9.5 7H6.8A2.8 2.8 0 0 0 4 9.8v2.7A2.5 2.5 0 0 0 6.5 15H9v2.2A2.8 2.8 0 0 1 6.2 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />

      <path
        d="M20 7h-2.7a2.8 2.8 0 0 0-2.8 2.8v2.7A2.5 2.5 0 0 0 17 15h2.5v2.2a2.8 2.8 0 0 1-2.8 2.8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function ClientLounge() {
  return (
    <section
      id="client-lounge"
      aria-labelledby="client-lounge-heading"
      className="section relative overflow-hidden bg-white"
    >
      <div
        aria-hidden="true"
        className="absolute right-[-10rem] top-24 h-[26rem] w-[26rem] rounded-full bg-blue-100/60 blur-[115px]"
      />

      <div className="site-container relative">
        <div className="section-header">
          <div className="section-header-copy">
            <div className="flex items-center gap-3">
              <span className="room-number">ROOM 06</span>

              <span className="h-px w-12 bg-gradient-to-r from-blue-600 to-transparent" />

              <span className="room-status">Guests welcomed</span>
            </div>

            <span className="eyebrow">Client Lounge</span>

            <h2
              id="client-lounge-heading"
              className="section-heading"
            >
              A strong client experience matters as much as the final website.
            </h2>
          </div>

          <p className="section-header-description">
            Good work should not require confusion, poor communication, or an
            unpredictable process. Techuvo keeps projects organized, direct,
            and easy to follow from the first conversation through launch.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
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
              className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-blue-500/30 blur-[80px]"
            />

            <div className="relative flex h-full flex-col">
              <div className="flex items-center justify-between gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/10 text-blue-200">
                  <QuoteIcon />
                </div>

                <span className="inline-flex items-center gap-2 text-[0.65rem] font-extrabold uppercase tracking-[0.14em] text-slate-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Client experience active
                </span>
              </div>

              <div className="mt-10">
                <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-blue-300">
                  The Techuvo standard
                </p>

                <h3 className="mt-4 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
                  You should always understand what is happening with your
                  project.
                </h3>

                <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                  Clients receive direct communication, clear next steps, and
                  a process built to reduce unnecessary uncertainty. The goal
                  is to make the project feel professional before the website
                  even launches.
                </p>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {projectSignals.map((signal) => (
                  <div
                    key={signal.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.055] p-4"
                  >
                    <p className="text-2xl font-black tracking-[-0.045em]">
                      {signal.value}
                    </p>

                    <p className="mt-2 text-xs font-semibold leading-5 text-slate-400">
                      {signal.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-10">
                <Link
                  to="/contact"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-extrabold text-slate-950 transition hover:-translate-y-1 hover:bg-blue-50 sm:w-auto"
                >
                  Start a conversation
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="grid gap-5 md:grid-cols-3">
              {clientExperience.map((item) => (
                <article
                  key={item.number}
                  className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-md"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-blue-200 bg-blue-50 text-xs font-extrabold text-blue-700">
                    {item.number}
                  </span>

                  <h3 className="mt-5 text-lg font-bold tracking-[-0.03em] text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <article
                  key={testimonial.name}
                  className="group flex min-h-[20rem] flex-col rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_14px_45px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_60px_rgba(15,23,42,0.11)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-700">
                      <QuoteIcon />
                    </span>

                    <span className="text-[0.65rem] font-extrabold uppercase tracking-[0.14em] text-slate-400">
                      Review 0{index + 1}
                    </span>
                  </div>

                  <blockquote className="mt-6 text-base font-semibold leading-7 text-slate-900">
                    “{testimonial.quote}”
                  </blockquote>

                  <div className="mt-auto border-t border-slate-200 pt-5">
                    <p className="text-sm font-extrabold text-slate-950">
                      {testimonial.name}
                    </p>

                    <p className="mt-1 text-xs font-semibold text-slate-500">
                      {testimonial.role}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 rounded-[1.65rem] border border-slate-200 bg-slate-50 p-5 sm:p-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-blue-700">
              Ready to work together?
            </p>

            <h3 className="mt-3 text-2xl font-bold tracking-[-0.04em] text-slate-950 sm:text-3xl">
              Bring your business goals, and Techuvo will help shape the
              digital system around them.
            </h3>
          </div>

          <Link
            to="/contact"
            className="button button-primary w-full shrink-0 sm:w-auto"
          >
            Discuss your project
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ClientLounge;