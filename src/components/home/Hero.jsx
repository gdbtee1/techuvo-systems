import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import founderImage from "../../assets/images/founder.jpg";

const rotatingWords = [
  "earn attention.",
  "build trust.",
  "generate leads.",
  "support growth.",
];

const proofPoints = [
  "Custom-built for your business",
  "Responsive on every screen",
  "Strategy through launch",
];

const marqueeItems = [
  "Website development",
  "Landing pages",
  "Brand identity",
  "Digital automation",
  "Responsive design",
  "Local strategy",
  "Website development",
  "Landing pages",
  "Brand identity",
  "Digital automation",
  "Responsive design",
  "Local strategy",
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

function FounderVisual() {
  return (
    <div
      className="hero-visual"
      aria-label="Luan Hunt, founder of Techuvo"
    >
      <div className="relative mx-auto w-full max-w-[42rem]">
        <div
          aria-hidden="true"
          className="absolute -inset-5 rounded-[2.5rem] bg-blue-500/10 blur-3xl"
        />

        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-[0_30px_90px_rgba(15,23,42,0.14)]">
          <div className="relative aspect-[4/5] min-h-[28rem] sm:aspect-[5/6] sm:min-h-[34rem] lg:min-h-[38rem]">
            <img
              src={founderImage}
              alt="Luan Hunt, founder of Techuvo"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/5 to-transparent"
            />

            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-8">
              <h2 className="text-2xl font-black tracking-[-0.045em] text-white sm:text-3xl">
                Luan Hunt
              </h2>

              <p className="mt-2 text-sm font-semibold text-white/75">
                Founder of Techuvo
              </p>

              <Link
                to="/about"
                className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 text-sm font-extrabold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-slate-950"
              >
                Meet the founder
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute -bottom-8 left-1/2 h-12 w-[76%] -translate-x-1/2 rounded-full bg-blue-500/15 blur-3xl"
        />
      </div>
    </div>
  );
}

function RotatingHeadline({ activeWord, wordVisible }) {
  return (
    <h1 className="display-heading max-w-[12ch]">
      <span className="block">
        Websites built to
      </span>

      <span className="mt-[0.04em] grid w-fit max-w-full">
        {/* 
          Invisible text reserves enough room for the longest phrase.
          This prevents the headline from changing width or height.
        */}
        <span
          aria-hidden="true"
          className="invisible col-start-1 row-start-1 whitespace-nowrap text-blue-600"
        >
          generate leads.
        </span>

        <span
          aria-live="polite"
          className={`col-start-1 row-start-1 whitespace-nowrap text-blue-600 transition-all duration-200 ${
            wordVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-[0.12em] opacity-0"
          }`}
        >
          {rotatingWords[activeWord]}
        </span>
      </span>
    </h1>
  );
}

function Hero() {
  const [activeWord, setActiveWord] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);
  const transitionTimeoutRef = useRef(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setWordVisible(false);

      transitionTimeoutRef.current = window.setTimeout(() => {
        setActiveWord(
          (currentWord) =>
            (currentWord + 1) % rotatingWords.length,
        );

        setWordVisible(true);
      }, 220);
    }, 2600);

    return () => {
      window.clearInterval(interval);

      if (transitionTimeoutRef.current) {
        window.clearTimeout(
          transitionTimeoutRef.current,
        );
      }
    };
  }, []);

  return (
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
          top: "7rem",
        }}
      />

      <span
        aria-hidden="true"
        className="coordinate-label hidden xl:block"
        style={{
          left: "2rem",
          top: "10rem",
        }}
      >
        42.3314° N / 83.0458° W
      </span>

      <span
        aria-hidden="true"
        className="coordinate-label hidden xl:block"
        style={{
          bottom: "3rem",
          right: "2rem",
        }}
      >
        TECHUVO DIGITAL SYSTEM // ACTIVE
      </span>

      <div className="site-container">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="hero-copy-inner">
              <div className="inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-blue-200 bg-white/85 px-3.5 py-2 text-[0.65rem] font-extrabold uppercase tracking-[0.12em] text-blue-700 shadow-sm backdrop-blur-xl sm:text-xs sm:tracking-[0.14em]">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-50" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
                </span>

                <span className="truncate">
                  Michigan digital design company
                </span>
              </div>

              <RotatingHeadline
                activeWord={activeWord}
                wordVisible={wordVisible}
              />

              <p className="body-large max-w-2xl">
                Techuvo creates modern websites, landing pages,
                brand systems, and digital workflows that help
                businesses look established, communicate clearly,
                and convert more opportunities.
              </p>

              <div className="hero-actions">
                <Link
                  to="/contact"
                  className="button button-primary"
                >
                  Start a project
                  <ArrowIcon />
                </Link>

                <Link
                  to="/portfolio"
                  className="button button-secondary"
                >
                  View our work
                  <ArrowIcon />
                </Link>
              </div>

              <div className="hero-proof">
                {proofPoints.map((point) => (
                  <div
                    key={point}
                    className="hero-proof-item"
                  >
                    <span className="hero-proof-icon">
                      <CheckIcon />
                    </span>

                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <FounderVisual />
        </div>

        <div className="mt-14 border-y border-slate-200/80 py-5 sm:mt-20">
          <div className="marquee-shell">
            <div className="marquee-track">
              {marqueeItems.map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="marquee-item"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;