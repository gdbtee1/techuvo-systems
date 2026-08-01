import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const scenes = [
  {
    number: "01",
    eyebrow: "Your starting point",
    lineOne: "Take control",
    lineTwo: "of your business.",
    description:
      "You know the value of your work. We help customers understand it, remember it, and trust it.",
    background: "from-blue-700 via-blue-600 to-blue-500",
    glow: "bg-sky-300/25",
    accent: "text-blue-100",
  },
  {
    number: "02",
    eyebrow: "First impressions matter",
    lineOne: "Look professional",
    lineTwo: "from the first click.",
    description:
      "Customers form an opinion quickly. Your website should make your business feel established before they ever call.",
    background: "from-blue-600 via-indigo-600 to-blue-800",
    glow: "bg-indigo-300/20",
    accent: "text-blue-100",
  },
  {
    number: "03",
    eyebrow: "Build customer confidence",
    lineOne: "Give people",
    lineTwo: "a reason to trust you.",
    description:
      "Clear information and strong presentation help customers feel confident choosing your business.",
    background: "from-slate-950 via-blue-950 to-blue-800",
    glow: "bg-blue-400/20",
    accent: "text-blue-200",
  },
  {
    number: "04",
    eyebrow: "Show your value",
    lineOne: "Make your advantage",
    lineTwo: "easy to understand.",
    description:
      "We organize your services and message so customers quickly see what you offer and why it matters.",
    background: "from-blue-800 via-blue-600 to-cyan-600",
    glow: "bg-cyan-300/25",
    accent: "text-cyan-100",
  },
  {
    number: "05",
    eyebrow: "Turn interest into action",
    lineOne: "Make the next step",
    lineTwo: "easy to take.",
    description:
      "Guide visitors toward calling, booking, requesting a quote, or buying without confusion.",
    background: "from-blue-600 via-sky-500 to-blue-700",
    glow: "bg-sky-200/25",
    accent: "text-blue-100",
  },
  {
    number: "06",
    eyebrow: "The result",
    lineOne: "Build a business",
    lineTwo: "people trust.",
    description:
      "Create a stronger online presence that helps customers remember you, believe in you, and choose you.",
    background: "from-slate-950 via-blue-950 to-slate-950",
    glow: "bg-blue-500/25",
    accent: "text-blue-300",
    final: true,
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5"
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

function BackgroundScene({ activeScene, sceneVisible }) {
  const scene = scenes[activeScene];

  return (
    <>
      <div
        className={`absolute inset-0 bg-gradient-to-br transition-all duration-[1400ms] ${scene.background}`}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.11) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.11) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div
        aria-hidden="true"
        className={`absolute -left-48 top-1/2 h-[42rem] w-[42rem] -translate-y-1/2 rounded-full blur-[160px] transition-all duration-[1600ms] ${scene.glow} ${
          sceneVisible
            ? "scale-100 opacity-100"
            : "scale-75 opacity-20"
        }`}
      />

      <div
        aria-hidden="true"
        className="absolute -right-48 top-1/2 h-[40rem] w-[40rem] -translate-y-1/2 rounded-full bg-blue-950/45 blur-[160px]"
      />

      <div
        aria-hidden="true"
        className={`absolute left-[72%] top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 transition-all duration-[1400ms] ${
          sceneVisible
            ? "scale-100 opacity-100"
            : "scale-50 opacity-0"
        }`}
      />

      <div
        aria-hidden="true"
        className={`absolute left-[72%] top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/15 transition-all duration-[1200ms] ${
          sceneVisible
            ? "scale-100 opacity-100"
            : "scale-125 opacity-0"
        }`}
      />

      <div
        aria-hidden="true"
        className="cinematic-orbit absolute left-[72%] top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/20"
      />

      <div
        aria-hidden="true"
        className="cinematic-orbit-reverse absolute left-[72%] top-1/2 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-100/20"
      />

      <div
        aria-hidden="true"
        className="cinematic-pulse absolute left-[72%] top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-2xl"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950/20 to-transparent"
      />
    </>
  );
}

function SceneIndicators({ activeScene, onSelectScene }) {
  return (
    <div className="flex items-center gap-2">
      {scenes.map((scene, index) => {
        const isActive = index === activeScene;

        return (
          <button
            key={scene.number}
            type="button"
            aria-label={`Show scene ${scene.number}: ${scene.lineOne} ${scene.lineTwo}`}
            onClick={() => onSelectScene(index)}
            className={`relative h-2 overflow-hidden rounded-full transition-all duration-500 ${
              isActive
                ? "w-12 bg-white/35"
                : "w-2 bg-white/25 hover:bg-white/55"
            }`}
          >
            {isActive && (
              <span className="cinematic-progress absolute inset-y-0 left-0 bg-white" />
            )}
          </button>
        );
      })}
    </div>
  );
}

function SystemBridge() {
  const [activeScene, setActiveScene] = useState(0);
  const [sceneVisible, setSceneVisible] = useState(true);

  const transitionTimeoutRef = useRef(null);
  const autoplayTimeoutRef = useRef(null);

  const changeScene = (nextScene) => {
    setSceneVisible(false);

    if (transitionTimeoutRef.current) {
      window.clearTimeout(transitionTimeoutRef.current);
    }

    transitionTimeoutRef.current = window.setTimeout(() => {
      setActiveScene(nextScene);
      setSceneVisible(true);
    }, 420);
  };

  useEffect(() => {
    autoplayTimeoutRef.current = window.setTimeout(() => {
      changeScene((activeScene + 1) % scenes.length);
    }, 5200);

    return () => {
      if (autoplayTimeoutRef.current) {
        window.clearTimeout(autoplayTimeoutRef.current);
      }
    };
  }, [activeScene]);

  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        window.clearTimeout(transitionTimeoutRef.current);
      }

      if (autoplayTimeoutRef.current) {
        window.clearTimeout(autoplayTimeoutRef.current);
      }
    };
  }, []);

  const handleSceneSelection = (index) => {
    if (index === activeScene) {
      return;
    }

    if (autoplayTimeoutRef.current) {
      window.clearTimeout(autoplayTimeoutRef.current);
    }

    changeScene(index);
  };

  const scene = scenes[activeScene];

  return (
    <section
      aria-label="How Techuvo helps businesses improve their online presence"
      className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden text-white"
    >
      <div className="relative min-h-[42rem] sm:min-h-[45rem] lg:min-h-[47rem]">
        <BackgroundScene
          activeScene={activeScene}
          sceneVisible={sceneVisible}
        />

        <div className="relative z-10 mx-auto flex min-h-[42rem] w-full max-w-[96rem] flex-col px-5 py-8 sm:min-h-[45rem] sm:px-8 sm:py-10 lg:min-h-[47rem] lg:px-12">
          <div className="flex items-center justify-between gap-4 border-b border-white/20 pb-5">
            <div className="flex min-w-0 items-center gap-3">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-200 opacity-40" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-200" />
              </span>

              <p className="truncate text-[0.6rem] font-extrabold uppercase tracking-[0.2em] text-white/70 sm:text-[0.64rem]">
                The Techuvo effect
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-3 sm:gap-4">
              <Link
                to="/portfolio"
                className="group hidden min-h-10 items-center gap-2 border border-white/25 bg-white/10 px-4 text-[0.62rem] font-extrabold uppercase tracking-[0.13em] text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-blue-700 sm:inline-flex"
              >
                See our work
                <ArrowIcon />
              </Link>

              <p className="text-[0.6rem] font-black tracking-[0.2em] text-white/45">
                {scene.number} / {String(scenes.length).padStart(2, "0")}
              </p>
            </div>
          </div>

          <div className="relative flex flex-1 items-center py-12 sm:py-14 lg:py-16">
            <div
              className={`relative z-20 w-full max-w-[46rem] transition-all duration-700 ${
                sceneVisible
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-8 scale-[0.97] opacity-0"
              }`}
            >
              <p
                className={`text-xs font-extrabold uppercase tracking-[0.22em] sm:text-sm ${scene.accent}`}
              >
                {scene.eyebrow}
              </p>

              <h2 className="mt-7 max-w-[9.5ch] text-[clamp(2.8rem,5.4vw,5.25rem)] font-black leading-[0.94] tracking-[-0.06em] text-white drop-shadow-[0_12px_40px_rgba(2,6,23,0.24)]">
                <span className="block">{scene.lineOne}</span>

                <span className="block text-white/90">
                  {scene.lineTwo}
                </span>
              </h2>

              <p className="mt-8 max-w-[35rem] text-base leading-8 text-white/80 sm:text-lg sm:leading-8 lg:text-xl lg:leading-9">
                {scene.description}
              </p>

              {scene.final && (
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/contact"
                    className="group inline-flex min-h-14 w-full items-center justify-center gap-3 bg-white px-7 text-sm font-extrabold text-blue-700 shadow-[0_18px_45px_rgba(2,6,23,0.2)] transition duration-300 hover:-translate-y-1 hover:bg-blue-50 sm:w-auto"
                  >
                    Start your project
                    <ArrowIcon />
                  </Link>

                  <Link
                    to="/portfolio"
                    className="group inline-flex min-h-14 w-full items-center justify-center gap-3 border border-white/30 bg-white/10 px-7 text-sm font-extrabold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/20 sm:w-auto"
                  >
                    View our portfolio
                    <ArrowIcon />
                  </Link>
                </div>
              )}
            </div>

            <div
              aria-hidden="true"
              className={`absolute left-[72%] top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25 transition-all duration-[1100ms] ${
                sceneVisible
                  ? "scale-[4] opacity-0"
                  : "scale-100 opacity-100"
              }`}
            />

            <div
              aria-hidden="true"
              className={`absolute left-[72%] top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/35 blur-xl transition-all duration-700 ${
                sceneVisible
                  ? "scale-50 opacity-0"
                  : "scale-150 opacity-100"
              }`}
            />
          </div>

          <div className="grid gap-5 border-t border-white/20 pt-6 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <p className="text-[0.58rem] font-extrabold uppercase tracking-[0.18em] text-white/40">
                Better presentation
              </p>

              <p className="mt-1 text-xs font-semibold text-white/65">
                Stronger customer confidence
              </p>
            </div>

            <div className="flex items-center justify-between gap-5 sm:justify-end">
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 text-xs font-extrabold text-white sm:hidden"
              >
                See our work
                <ArrowIcon />
              </Link>

              <SceneIndicators
                activeScene={activeScene}
                onSelectScene={handleSceneSelection}
              />
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes cinematicOrbit {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }

            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }

          @keyframes cinematicOrbitReverse {
            from {
              transform: translate(-50%, -50%) rotate(360deg);
            }

            to {
              transform: translate(-50%, -50%) rotate(0deg);
            }
          }

          @keyframes cinematicPulse {
            0%,
            100% {
              transform: translate(-50%, -50%) scale(0.8);
              opacity: 0.2;
            }

            50% {
              transform: translate(-50%, -50%) scale(1.45);
              opacity: 0.65;
            }
          }

          @keyframes cinematicProgress {
            from {
              width: 0%;
            }

            to {
              width: 100%;
            }
          }

          .cinematic-orbit {
            animation: cinematicOrbit 24s linear infinite;
          }

          .cinematic-orbit-reverse {
            animation: cinematicOrbitReverse 18s linear infinite;
          }

          .cinematic-pulse {
            animation: cinematicPulse 3.6s ease-in-out infinite;
          }

          .cinematic-progress {
            animation: cinematicProgress 5.2s linear forwards;
          }

          @media (max-width: 1023px) {
            .cinematic-orbit,
            .cinematic-orbit-reverse,
            .cinematic-pulse {
              left: 78%;
              opacity: 0.4;
            }
          }

          @media (max-width: 640px) {
            .cinematic-orbit,
            .cinematic-orbit-reverse,
            .cinematic-pulse {
              left: 84%;
              top: 38%;
              opacity: 0.22;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .cinematic-orbit,
            .cinematic-orbit-reverse,
            .cinematic-pulse,
            .cinematic-progress {
              animation: none;
            }
          }
        `}
      </style>
    </section>
  );
}

export default SystemBridge;