import { Link } from "react-router-dom";

const footerServices = [
  {
    label: "Website Development",
    to: "/services/website-development",
  },
  {
    label: "Landing Pages",
    to: "/services/landing-pages",
  },
  {
    label: "Brand Identity",
    to: "/services/brand-identity",
  },
  {
    label: "Automation Systems",
    to: "/services/automation-systems",
  },
];

const footerCompany = [
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Portfolio",
    to: "/portfolio",
  },
  {
    label: "Pricing",
    to: "/pricing",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];

const footerLocations = [
  {
    label: "Detroit",
    to: "/locations/detroit",
  },
  {
    label: "Ypsilanti",
    to: "/locations/ypsilanti",
  },
  {
    label: "Ann Arbor",
    to: "/locations/ann-arbor",
  },
  {
    label: "Dearborn",
    to: "/locations/dearborn",
  },
  {
    label: "Livonia",
    to: "/locations/livonia",
  },
  {
    label: "Southfield",
    to: "/locations/southfield",
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

function LogoMark() {
  return (
    <span
      aria-hidden="true"
      className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-xl border border-blue-200 bg-blue-50 text-blue-700"
    >
      <span className="absolute inset-[5px] rounded-lg border border-blue-200" />
      <span className="relative text-sm font-black tracking-[-0.08em]">
        T
      </span>
    </span>
  );
}

function FooterLinkGroup({ title, links }) {
  return (
    <div>
      <h3 className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-500">
        {title}
      </h3>

      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className="inline-flex text-sm font-semibold text-slate-600 transition hover:translate-x-1 hover:text-blue-700"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white">
      <div
        aria-hidden="true"
        className="absolute left-[-10rem] top-[-12rem] h-[24rem] w-[24rem] rounded-full bg-blue-100/60 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-[-10rem] right-[-8rem] h-[22rem] w-[22rem] rounded-full bg-sky-100/60 blur-[100px]"
      />

      <div className="site-container relative py-8 sm:py-12 lg:py-16">
        <section className="relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-slate-950 px-5 py-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.16)] sm:px-8 sm:py-10 lg:px-12 lg:py-12">
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
            className="absolute right-[-6rem] top-[-8rem] h-[18rem] w-[18rem] rounded-full bg-blue-500/30 blur-[80px]"
          />

          <div className="relative grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue-300">
                Start your next project
              </p>

              <h2 className="mt-4 text-balance text-3xl font-bold tracking-[-0.045em] sm:text-4xl lg:text-5xl">
                Build a digital presence that makes your business feel ready for
                its next level.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Techuvo creates modern websites, brand systems, landing pages,
                and digital workflows designed around trust, clarity, and
                growth.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-extrabold text-slate-950 shadow-lg transition hover:-translate-y-1 hover:bg-blue-50 sm:w-auto"
            >
              Start a project
              <ArrowIcon />
            </Link>
          </div>
        </section>

        <div className="grid gap-10 py-12 sm:py-14 lg:grid-cols-[1.35fr_0.8fr_0.8fr_0.8fr] lg:gap-12 lg:py-16">
          <div className="max-w-md">
            <Link
              to="/"
              className="inline-flex items-center gap-3"
              aria-label="Techuvo homepage"
            >
              <LogoMark />

              <span>
                <span className="block text-xl font-black tracking-[-0.045em] text-slate-950">
                  Techuvo
                </span>

                <span className="block text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-slate-500">
                  Digital design company
                </span>
              </span>
            </Link>

            <p className="mt-6 text-sm leading-7 text-slate-600">
              A Michigan-based digital agency helping businesses strengthen
              their online presence through modern design, development, brand
              identity, and automation.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="tag">Web design</span>
              <span className="tag">Development</span>
              <span className="tag">Branding</span>
              <span className="tag">Automation</span>
            </div>

            <div className="mt-7 space-y-2 text-sm">
              <a
                href="mailto:hello@techuvo.dev"
                className="block font-semibold text-slate-700 transition hover:text-blue-700"
              >
                hello@techuvo.dev
              </a>

              <p className="text-slate-500">
                Serving Detroit, Ypsilanti, Ann Arbor, and surrounding Michigan
                communities.
              </p>
            </div>
          </div>

          <FooterLinkGroup title="Services" links={footerServices} />
          <FooterLinkGroup title="Company" links={footerCompany} />
          <FooterLinkGroup title="Locations" links={footerLocations} />
        </div>

        <div className="section-divider" />

        <div className="flex flex-col gap-5 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} Techuvo LLC. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link
              to="/contact"
              className="font-semibold transition hover:text-blue-700"
            >
              Contact
            </Link>

            <a
              href="mailto:hello@techuvo.dev"
              className="font-semibold transition hover:text-blue-700"
            >
              Email
            </a>

            <span className="font-semibold text-slate-400">
              Built in Michigan
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;