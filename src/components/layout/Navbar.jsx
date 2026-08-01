import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";

const navigationLinks = [
  {
    label: "Services",
    to: "/services/website-development",
    children: [
      {
        label: "Website Development",
        description: "Custom responsive business websites.",
        to: "/services/website-development",
      },
      {
        label: "Landing Pages",
        description: "Focused pages built for campaigns.",
        to: "/services/landing-pages",
      },
      {
        label: "Brand Identity",
        description: "Visual systems that build recognition.",
        to: "/services/brand-identity",
      },
      {
        label: "Automation Systems",
        description: "Connected workflows for your business.",
        to: "/services/automation-systems",
      },
    ],
  },
  {
    label: "Work",
    to: "/portfolio",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Pricing",
    to: "/pricing",
  },
  {
    label: "Locations",
    to: "/locations/detroit",
    children: [
      {
        label: "Detroit",
        description: "Website design services in Detroit.",
        to: "/locations/detroit",
      },
      {
        label: "Ypsilanti",
        description: "Website design services in Ypsilanti.",
        to: "/locations/ypsilanti",
      },
      {
        label: "Ann Arbor",
        description: "Website design services in Ann Arbor.",
        to: "/locations/ann-arbor",
      },
      {
        label: "Dearborn",
        description: "Website design services in Dearborn.",
        to: "/locations/dearborn",
      },
      {
        label: "Livonia",
        description: "Website design services in Livonia.",
        to: "/locations/livonia",
      },
      {
        label: "Southfield",
        description: "Website design services in Southfield.",
        to: "/locations/southfield",
      },
    ],
  },
  {
    label: "Contact",
    to: "/contact",
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
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

function ChevronIcon({ open = false }) {
  return (
    <svg
      aria-hidden="true"
      className={`h-4 w-4 transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        d="m5.75 7.5 4.25 4.25 4.25-4.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function MenuIcon({ open }) {
  return (
    <span className="relative block h-5 w-6">
      <span
        className={`absolute left-0 top-1 h-[2px] w-6 bg-current transition duration-300 ${
          open
            ? "translate-y-[6px] rotate-45"
            : ""
        }`}
      />

      <span
        className={`absolute left-0 top-[9px] h-[2px] w-6 bg-current transition duration-300 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />

      <span
        className={`absolute bottom-1 left-0 h-[2px] w-6 bg-current transition duration-300 ${
          open
            ? "-translate-y-[6px] -rotate-45"
            : ""
        }`}
      />
    </span>
  );
}

function BrandMark({ compact = false }) {
  return (
    <div
      className={`grid shrink-0 place-items-center border-2 font-black transition-all duration-500 ${
        compact
          ? "h-10 w-10 border-white/35 text-white"
          : "h-12 w-12 border-blue-200 bg-blue-50 text-blue-700 sm:h-14 sm:w-14"
      }`}
    >
      T
    </div>
  );
}

function DesktopDropdown({
  link,
  isScrolled,
  pathname,
}) {
  const [open, setOpen] = useState(false);

  const childActive = link.children?.some(
    (child) => pathname === child.to,
  );

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <NavLink
        to={link.to}
        className={`group relative inline-flex items-center gap-2 py-4 text-sm font-bold transition-colors ${
          isScrolled
            ? "text-white/80 hover:text-white"
            : childActive
              ? "text-blue-700"
              : "text-slate-700 hover:text-blue-700"
        }`}
      >
        {link.label}
        <ChevronIcon open={open} />

        <span
          className={`absolute inset-x-0 bottom-1 h-[2px] origin-left transition-transform duration-300 ${
            isScrolled ? "bg-white" : "bg-blue-600"
          } ${
            childActive || open
              ? "scale-x-100"
              : "scale-x-0 group-hover:scale-x-100"
          }`}
        />
      </NavLink>

      <div
        className={`absolute left-1/2 top-full z-50 w-[24rem] -translate-x-1/2 pt-3 transition-all duration-300 ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <div className="border border-slate-200 bg-white p-3 text-slate-950 shadow-[0_25px_70px_rgba(15,23,42,0.16)]">
          {link.children.map((child, index) => (
            <Link
              key={child.to}
              to={child.to}
              className="group/item grid grid-cols-[2.5rem_1fr_auto] items-center gap-3 border-b border-slate-100 px-3 py-4 last:border-b-0 hover:bg-blue-50"
            >
              <span className="text-xs font-black text-blue-700">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span>
                <span className="block text-sm font-extrabold">
                  {child.label}
                </span>

                <span className="mt-1 block text-xs leading-5 text-slate-500">
                  {child.description}
                </span>
              </span>

              <span className="text-blue-700 transition-transform group-hover/item:translate-x-1">
                <ArrowIcon />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  const location = useLocation();

  const [isScrolled, setIsScrolled] =
    useState(false);

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [mobileDropdown, setMobileDropdown] =
    useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true },
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[200] transition-all duration-500 ${
          isScrolled
            ? "px-3 pt-3 sm:px-5"
            : "bg-white px-0 pt-0"
        }`}
      >
        <div
          className={`mx-auto transition-all duration-500 ${
            isScrolled
              ? "max-w-[92rem] overflow-visible bg-blue-600 text-white shadow-[0_22px_60px_rgba(37,99,235,0.28)]"
              : "max-w-none border-b border-slate-200 bg-white text-slate-950"
          }`}
        >
          {/* Main brand row */}
          <div
            className={`mx-auto flex items-center justify-between px-5 transition-all duration-500 sm:px-8 lg:px-10 ${
              isScrolled
                ? "h-[4.75rem] max-w-[92rem]"
                : "h-[6.5rem] max-w-[100rem] sm:h-[7.5rem]"
            }`}
          >
           <Link
  to="/"
  aria-label="Return to Techuvo home"
  className="group relative flex min-w-0 items-center gap-4"
>
  <div
    className={`transition-transform duration-500 ease-out group-hover:-rotate-6 group-hover:scale-[1.04] ${
      location.pathname !== "/" ? "group-hover:-translate-x-1" : ""
    }`}
  >
    <BrandMark compact={isScrolled} />
  </div>

  <div
    className={`min-w-0 transition-all duration-500 ${
      isScrolled
        ? "translate-x-0"
        : "sm:group-hover:translate-x-1.5"
    }`}
  >
    <div className="flex items-center gap-3">
      <span
        className={`font-black tracking-[-0.055em] transition-all duration-500 ${
          isScrolled
            ? "text-xl text-white"
            : "text-2xl text-slate-950 sm:text-3xl"
        }`}
      >
        Techuvo
      </span>

      <span
        className={`hidden h-px origin-left transition-all duration-500 sm:block ${
          isScrolled
            ? "w-8 bg-white/45 group-hover:w-12 group-hover:bg-white"
            : "w-12 bg-blue-600 group-hover:w-16"
        }`}
      />
    </div>

    <p
      className={`mt-1 truncate font-extrabold uppercase transition-all duration-500 ${
        isScrolled
          ? "text-[0.52rem] tracking-[0.2em] text-blue-100"
          : "text-[0.62rem] tracking-[0.26em] text-slate-500 sm:text-[0.68rem]"
      }`}
    >
      Digital design company
    </p>

    {location.pathname !== "/" && (
      <span
        className={`pointer-events-none absolute left-[4.5rem] top-full mt-2 hidden translate-y-1 whitespace-nowrap text-[0.58rem] font-extrabold uppercase tracking-[0.16em] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:block ${
          isScrolled ? "text-white/75" : "text-blue-700"
        }`}
      >
        ← Back to home
      </span>
    )}
  </div>
  </Link>


            {/* Desktop navigation inside compressed bar */}
            <nav
              aria-label="Primary navigation"
              className={`hidden items-center gap-8 lg:flex ${
                isScrolled ? "" : "lg:hidden"
              }`}
            >
              {navigationLinks
                .filter(
                  (link) =>
                    link.label !== "Contact",
                )
                .map((link) =>
                  link.children ? (
                    <DesktopDropdown
                      key={link.label}
                      link={link}
                      pathname={location.pathname}
                      isScrolled={isScrolled}
                    />
                  ) : (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      className={({ isActive }) =>
                        `group relative py-4 text-sm font-bold transition-colors ${
                          isActive
                            ? "text-white"
                            : "text-white/75 hover:text-white"
                        }`
                      }
                    >
                      {link.label}

                      <span className="absolute inset-x-0 bottom-1 h-[2px] origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
                    </NavLink>
                  ),
                )}

              <Link
                to="/contact"
                className="inline-flex min-h-11 items-center gap-2 border border-white/30 bg-white px-5 text-sm font-extrabold text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50"
              >
                Start a project
                <ArrowIcon />
              </Link>
            </nav>

            {/* Desktop contact before scroll */}
            <Link
              to="/contact"
              className={`hidden items-center gap-3 border px-6 text-sm font-extrabold transition duration-500 lg:inline-flex ${
                isScrolled
                  ? "pointer-events-none absolute opacity-0"
                  : "min-h-12 border-slate-950 bg-white text-slate-950 hover:bg-blue-600 hover:text-white"
              }`}
            >
              Start a project
              <ArrowIcon />
            </Link>

            <button
              type="button"
              aria-label={
                mobileOpen
                  ? "Close navigation"
                  : "Open navigation"
              }
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation-panel"
              onClick={(event) => {
                event.stopPropagation();
                setMobileOpen((current) => !current);
              }}
              className={`relative z-[220] grid h-11 w-11 shrink-0 touch-manipulation place-items-center cursor-pointer select-none lg:hidden ${
                isScrolled
                  ? "border border-white/25 text-white"
                  : "border border-slate-200 bg-slate-50 text-slate-950"
              }`}
            >
              <MenuIcon open={mobileOpen} />
            </button>
          </div>

          {/* Full desktop nav before scroll */}
          <nav
            aria-label="Primary navigation"
            className={`hidden border-t border-slate-200 transition-all duration-500 lg:block ${
              isScrolled
                ? "pointer-events-none h-0 -translate-y-4 overflow-hidden border-transparent opacity-0"
                : "h-[4.25rem] translate-y-0 opacity-100"
            }`}
          >
            <div className="mx-auto flex h-full max-w-[100rem] items-center justify-center gap-12 px-10">
              {navigationLinks.map((link) =>
                link.children ? (
                  <DesktopDropdown
                    key={link.label}
                    link={link}
                    pathname={location.pathname}
                    isScrolled={false}
                  />
                ) : (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `group relative inline-flex h-full items-center text-sm font-bold transition-colors ${
                        isActive
                          ? "text-blue-700"
                          : "text-slate-700 hover:text-blue-700"
                      }`
                    }
                  >
                    {link.label}

                    <span
                      className={`absolute inset-x-0 bottom-0 h-[3px] origin-left bg-blue-600 transition-transform duration-300 ${
                        location.pathname === link.to
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </NavLink>
                ),
              )}
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile navigation */}
      <div
        className={`fixed inset-0 z-[180] bg-slate-950/35 backdrop-blur-sm transition duration-300 lg:hidden ${
          mobileOpen
            ? "visible pointer-events-auto opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      <aside
        id="mobile-navigation-panel"
        className={`fixed inset-x-3 top-[5.5rem] z-[210] max-h-[calc(100dvh-6.5rem)] overflow-y-auto overscroll-contain border border-slate-200 bg-white shadow-[0_30px_90px_rgba(15,23,42,0.2)] transition-[transform,opacity,visibility] duration-300 ease-out lg:hidden ${
          mobileOpen
            ? "visible pointer-events-auto translate-y-0 opacity-100"
            : "invisible pointer-events-none -translate-y-4 opacity-0"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <nav
          aria-label="Mobile navigation"
          className="p-3"
        >
          {navigationLinks.map((link, index) => {
            const hasChildren =
              Boolean(link.children);

            const dropdownOpen =
              mobileDropdown === link.label;

            if (hasChildren) {
              return (
                <div
                  key={link.label}
                  className="border-b border-slate-100 last:border-b-0"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setMobileDropdown((current) =>
                        current === link.label
                          ? null
                          : link.label,
                      )
                    }
                    className="flex w-full items-center justify-between px-4 py-5 text-left"
                  >
                    <span className="flex items-center gap-4">
                      <span className="text-xs font-black text-blue-700">
                        {String(index + 1).padStart(
                          2,
                          "0",
                        )}
                      </span>

                      <span className="text-lg font-black text-slate-950">
                        {link.label}
                      </span>
                    </span>

                    <ChevronIcon
                      open={dropdownOpen}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      dropdownOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="mb-3 ml-10 border-l border-blue-200 pl-4">
                        {link.children.map(
                          (child) => (
                            <Link
                              key={child.to}
                              to={child.to}
                              className="block py-3"
                            >
                              <span className="block text-sm font-extrabold text-slate-900">
                                {child.label}
                              </span>

                              <span className="mt-1 block text-xs leading-5 text-slate-500">
                                {child.description}
                              </span>
                            </Link>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center justify-between border-b border-slate-100 px-4 py-5 last:border-b-0 ${
                    isActive
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-950"
                  }`
                }
              >
                <span className="flex items-center gap-4">
                  <span className="text-xs font-black text-blue-700">
                    {String(index + 1).padStart(
                      2,
                      "0",
                    )}
                  </span>

                  <span className="text-lg font-black">
                    {link.label}
                  </span>
                </span>

                <ArrowIcon />
              </NavLink>
            );
          })}

          <Link
            to="/contact"
            className="mt-3 flex min-h-14 items-center justify-between bg-blue-600 px-5 text-sm font-extrabold text-white"
          >
            Start your project
            <ArrowIcon />
          </Link>
        </nav>
      </aside>

      {/* Reserves space beneath the fixed header */}
      <div
        aria-hidden="true"
        className={`transition-all duration-500 ${
          isScrolled
            ? "h-[5.5rem]"
            : "h-[6.5rem] sm:h-[7.5rem] lg:h-[11.75rem]"
        }`}
      />
    </>
  );
}

export default Navbar;