import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Code2,
  ExternalLink,
  Flower2,
  Gamepad2,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  X,
} from "lucide-react";

import founderImage from "../assets/images/founder.jpg";

const projects = [
  {
    id: "ryne",
    number: "01",
    name: "Ryne Writes",
    category: "Interactive Portfolio",
    tagline: "A portfolio that feels like entering a game.",
    description:
      "An immersive creative portfolio built around retro game-inspired navigation, animated transitions, responsive layouts, and an unconventional interface.",
    build:
      "Instead of presenting work inside a traditional portfolio grid, the entire experience was designed like an interactive world visitors could explore.",
    url: "https://rynewrites.com",
    accent: "#ff8b7b",
    secondary: "#ffd56a",
    icon: Gamepad2,
    bullets: [
      "Interactive navigation",
      "Custom animation",
      "Responsive development",
      "Retro visual system",
    ],
  },
  {
    id: "retro",
    number: "02",
    name: "Retro Dental",
    category: "Dental Experience",
    tagline: "Dental care without the boring dental website.",
    description:
      "A playful dental concept designed to make a traditionally clinical industry feel friendly, animated, approachable, and memorable.",
    build:
      "The experience uses cartoon characters, oversized typography, interactive elements, and a smile meter to turn routine dental content into something visitors want to explore.",
    url: "https://gdbtee1.github.io/retro-dental/",
    accent: "#71dfbd",
    secondary: "#ff8a91",
    icon: Smile,
    bullets: [
      "Custom illustrated UI",
      "Interactive smile meter",
      "Responsive experience",
      "Conversion-focused layout",
    ],
  },
  {
    id: "pure-glow",
    number: "03",
    name: "Pure Glow Floral",
    category: "Luxury Service Website",
    tagline: "Elegant, restrained, and built to feel premium.",
    description:
      "A refined floral website centered around strong photography, editorial typography, premium service positioning, and a polished luxury experience.",
    build:
      "The project demonstrates that Techuvo can move from playful experiences to sophisticated service-business design without relying on a single visual template.",
    url: "https://pureglowfloral.com/",
    accent: "#e8d3ce",
    secondary: "#41513b",
    icon: Flower2,
    bullets: [
      "Luxury art direction",
      "Responsive layouts",
      "Editorial typography",
      "Service positioning",
    ],
  },
];

function Mascot() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -90, rotate: -10 }}
      animate={{ opacity: 1, x: 0, rotate: 0 }}
      transition={{
        duration: 0.9,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="pointer-events-none absolute -left-8 top-[6.5rem] z-10 hidden sm:block lg:-left-5 lg:top-[7.2rem]"
    >
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative h-[170px] w-[140px] lg:h-[220px] lg:w-[175px]"
      >
        <motion.div
          animate={{ rotate: [-16, 20, -16] }}
          transition={{
            duration: 1.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "bottom center" }}
          className="absolute -right-1 top-2"
        >
          <div className="relative h-[78px] w-[25px] rotate-[26deg] rounded-full border-[3px] border-slate-950 bg-white shadow-[4px_5px_0_#0f172a] lg:h-[98px] lg:w-[30px]">
            <div className="absolute -top-6 left-1/2 h-10 w-10 -translate-x-1/2 rounded-[45%] border-[3px] border-slate-950 bg-[#ffd0b5] shadow-[3px_4px_0_#0f172a]" />
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-[34px] h-[67px] w-[27px] rounded-b-xl border-[3px] border-slate-950 bg-white shadow-[4px_5px_0_#0f172a] lg:left-[43px] lg:h-[86px] lg:w-[32px]" />

        <div className="absolute bottom-0 right-[34px] h-[67px] w-[27px] rounded-b-xl border-[3px] border-slate-950 bg-white shadow-[4px_5px_0_#0f172a] lg:right-[43px] lg:h-[86px] lg:w-[32px]" />

        <div className="absolute bottom-0 left-[18px] h-[17px] w-[50px] -rotate-3 rounded-full border-[3px] border-slate-950 bg-blue-600 lg:left-[25px] lg:w-[58px]" />

        <div className="absolute bottom-0 right-[18px] h-[17px] w-[50px] rotate-3 rounded-full border-[3px] border-slate-950 bg-blue-600 lg:right-[25px] lg:w-[58px]" />

        <div className="absolute left-1/2 top-[66px] z-10 h-[80px] w-[92px] -translate-x-1/2 rounded-[38%_38%_26%_26%] border-[3px] border-slate-950 bg-white shadow-[6px_7px_0_#0f172a] lg:top-[82px] lg:h-[104px] lg:w-[114px]">
          <div className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-slate-950/15" />
          <div className="absolute left-1/2 top-[9px] h-9 w-5 -translate-x-1/2 bg-blue-600 [clip-path:polygon(50%_0,100%_30%,67%_100%,33%_100%,0_30%)]" />
          <div className="absolute left-[12px] top-[13px] h-3 w-3 rounded-full bg-blue-600" />
          <div className="absolute right-[12px] top-[13px] h-3 w-3 rounded-full bg-blue-600" />
        </div>

        <div className="absolute left-1/2 top-[19px] z-20 h-[68px] w-[68px] -translate-x-1/2 rounded-[46%] border-[3px] border-slate-950 bg-[#ffd0b5] shadow-[5px_5px_0_#0f172a] lg:h-[84px] lg:w-[84px]">
          <div className="absolute -left-1 top-1 h-[25px] w-[72px] -rotate-3 rounded-[55%_50%_25%_30%] border-[3px] border-slate-950 bg-slate-950 lg:w-[87px]" />
          <div className="absolute left-[17px] top-[29px] h-[8px] w-[6px] rounded-full bg-slate-950 lg:left-[22px] lg:top-[36px]" />
          <div className="absolute right-[17px] top-[29px] h-[8px] w-[6px] rounded-full bg-slate-950 lg:right-[22px] lg:top-[36px]" />
          <div className="absolute left-1/2 top-[46px] h-[8px] w-[26px] -translate-x-1/2 rounded-b-full border-b-[3px] border-slate-950 lg:top-[57px]" />
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectPreview({ project }) {
  if (project.id === "ryne") {
    return (
      <div className="relative h-full overflow-hidden bg-[#140b18] p-5 text-[#ffe6c9]">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,210,170,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,210,170,.18) 1px, transparent 1px)",
            backgroundSize: "25px 25px",
          }}
        />

        <div className="relative flex h-full flex-col">
          <p className="font-mono text-[10px] font-black uppercase tracking-[0.18em]">
            Ryne Mitra Portfolio System
          </p>

          <p className="mt-4 font-mono text-3xl font-black uppercase sm:text-4xl">
            Choose
            <br />
            Your World
          </p>

          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2.8, repeat: Infinity }}
            className="mx-auto mt-auto w-[82%] border-[3px] border-[#ffbea5] bg-[#37233d] p-4 shadow-[8px_8px_0_#6e2139]"
          >
            <div className="grid grid-cols-2 gap-3">
              {["Agency", "Student", "Credits", "Admin"].map(
                (item, index) => (
                  <div
                    key={item}
                    className={`border-2 border-[#170b18] p-3 text-center font-mono text-[9px] font-black uppercase ${
                      index === 3
                        ? "bg-[#65d49e]"
                        : "bg-[#ff917e]"
                    }`}
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (project.id === "retro") {
    return (
      <div className="relative h-full overflow-hidden bg-[#fff5d9] p-5">
        <div className="absolute -left-10 top-14 h-28 w-28 rounded-full border-[3px] border-slate-950 bg-[#b7eed6]" />

        <div className="relative">
          <div className="inline-flex rounded-full border-[3px] border-slate-950 bg-[#ffd66b] px-3 py-2 text-[9px] font-black uppercase tracking-[0.15em] shadow-[3px_3px_0_#0f172a]">
            No fear. Just cheer.
          </div>

          <h4 className="mt-5 max-w-[8ch] text-3xl font-black leading-[0.9] tracking-[-0.06em]">
            The dentist you'll
            <span className="block text-[#ff747b]">
              actually love.
            </span>
          </h4>
        </div>

        <motion.div
          animate={{
            rotate: [-3, 3, -3],
            y: [0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="absolute bottom-6 right-5"
        >
          <div className="relative h-28 w-24 rounded-[46%_46%_38%_38%] border-[4px] border-slate-950 bg-white shadow-[6px_7px_0_#0f172a]">
            <div className="absolute left-[22px] top-[31px] h-8 w-5 rounded-full bg-slate-950" />
            <div className="absolute right-[22px] top-[31px] h-8 w-5 rounded-full bg-slate-950" />
            <div className="absolute bottom-5 left-1/2 h-4 w-10 -translate-x-1/2 rounded-b-full bg-[#ff8c91]" />
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative h-full overflow-hidden bg-[#eee8df] p-5">
      <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-[#344632] to-transparent opacity-90" />

      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-serif text-xl font-semibold">
              Pure Glow Floral
            </p>
            <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Luxury Floral Studio
            </p>
          </div>

          <div className="grid h-10 w-10 place-items-center rounded-full border border-[#c8b8aa] bg-white/70 font-serif">
            PG
          </div>
        </div>

        <div className="mt-auto">
          <p className="max-w-[9ch] font-serif text-4xl leading-[0.9] text-white">
            Floral artistry made to leave
          </p>

          <p className="mt-1 font-serif text-4xl italic leading-[0.9] text-[#f2c8c0]">
            a lasting glow.
          </p>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index, onOpen }) {
  const Icon = project.icon;

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(project)}
      initial={{ opacity: 0, y: 60, rotate: index % 2 ? 2 : -2 }}
      whileInView={{ opacity: 1, y: 0, rotate: index % 2 ? 1 : -1 }}
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{
        y: -12,
        rotate: 0,
        scale: 1.015,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
      }}
      className="group relative w-full text-left"
    >
      <div
        className="relative overflow-hidden rounded-[2rem] border-[3px] border-slate-950 shadow-[9px_10px_0_#0f172a] transition-shadow duration-300 group-hover:shadow-[13px_15px_0_#0f172a]"
        style={{
          backgroundColor: project.accent,
        }}
      >
        <div className="flex items-center justify-between border-b-[3px] border-slate-950 p-4 sm:p-5">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em]">
              Project {project.number}
            </p>

            <p className="mt-1 text-sm font-black">
              {project.category}
            </p>
          </div>

          <motion.div
            animate={{
              rotate: [0, 8, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: index * 0.4,
            }}
            className="grid h-12 w-12 place-items-center rounded-full border-[3px] border-slate-950 bg-white shadow-[3px_4px_0_#0f172a]"
          >
            <Icon className="h-5 w-5" />
          </motion.div>
        </div>

        <div className="aspect-[1.35] border-b-[3px] border-slate-950">
          <ProjectPreview project={project} />
        </div>

        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-3xl font-black tracking-[-0.05em] sm:text-4xl">
                {project.name}
              </h3>

              <p className="mt-2 max-w-sm text-sm font-bold leading-6 text-slate-700">
                {project.tagline}
              </p>
            </div>

            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-[3px] border-slate-950 bg-white shadow-[3px_4px_0_#0f172a] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowRight className="h-5 w-5 -rotate-45" />
            </div>
          </div>

          <p className="mt-5 text-[10px] font-black uppercase tracking-[0.18em]">
            Tap to explore →
          </p>
        </div>
      </div>
    </motion.button>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const Icon = project.icon;

  return (
    <motion.div
      className="fixed inset-0 z-[500] overflow-y-auto bg-slate-950/65 p-3 backdrop-blur-md sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          y: 30,
          scale: 0.97,
        }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 22,
        }}
        className="mx-auto my-3 w-full max-w-6xl overflow-hidden rounded-[2rem] border-[3px] border-slate-950 bg-[#fff9ee] shadow-[14px_16px_0_#0f172a] sm:my-8"
      >
        <div
          className="flex items-center justify-between border-b-[3px] border-slate-950 p-4 sm:p-6"
          style={{
            backgroundColor: project.accent,
          }}
        >
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-xl border-[3px] border-slate-950 bg-white">
              <Icon className="h-5 w-5" />
            </div>

            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.2em]">
                Project {project.number}
              </p>

              <p className="text-sm font-black">
                {project.category}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="grid h-12 w-12 place-items-center rounded-full border-[3px] border-slate-950 bg-white shadow-[3px_4px_0_#0f172a] transition hover:-translate-y-1"
            aria-label="Close project"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
          <div className="min-h-[330px] border-b-[3px] border-slate-950 lg:min-h-[650px] lg:border-b-0 lg:border-r-[3px]">
            <ProjectPreview project={project} />
          </div>

          <div className="p-6 sm:p-9 lg:p-12">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">
              Techuvo Build
            </p>

            <h2 className="mt-4 text-5xl font-black leading-[0.9] tracking-[-0.06em] sm:text-6xl">
              {project.name}
            </h2>

            <p className="mt-6 text-lg font-bold leading-8 text-slate-700">
              {project.description}
            </p>

            <div className="my-8 h-[3px] bg-slate-950" />

            <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
              What we built
            </p>

            <p className="mt-3 text-base font-semibold leading-7 text-slate-600">
              {project.build}
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {project.bullets.map((bullet) => (
                <div
                  key={bullet}
                  className="flex items-center gap-3 rounded-xl border-2 border-slate-950 bg-white p-3 font-bold"
                >
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#71dfbd]">
                    <Check className="h-3.5 w-3.5" strokeWidth={4} />
                  </span>

                  <span className="text-sm">{bullet}</span>
                </div>
              ))}
            </div>

            <motion.a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              animate={{
                boxShadow: [
                  "0 0 0 rgba(37,99,235,0)",
                  "0 0 32px rgba(37,99,235,.55)",
                  "0 0 0 rgba(37,99,235,0)",
                ],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatDelay: 0.35,
              }}
              className="mt-9 flex min-h-16 w-full items-center justify-center gap-3 rounded-full border-[3px] border-slate-950 bg-blue-600 px-6 text-base font-black text-white shadow-[6px_7px_0_#0f172a]"
            >
              <motion.span
                animate={{
                  opacity: [1, 0.45, 1],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                }}
                className="h-2.5 w-2.5 rounded-full bg-[#71dfbd]"
              />

              VIEW LIVE SITE

              <ExternalLink className="h-5 w-5" />
            </motion.a>

            <p className="mt-4 text-center text-[10px] font-black uppercase tracking-[0.17em] text-slate-400">
              Opens the live project in a new tab
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function WebsiteOffer() {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#fff9ee] text-slate-950 selection:bg-yellow-200">
      <section className="relative min-h-[100svh] overflow-hidden border-b-[3px] border-slate-950">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage:
              "linear-gradient(#dbeafe 1px, transparent 1px), linear-gradient(90deg, #dbeafe 1px, transparent 1px)",
            backgroundSize: "34px 34px",
          }}
        />

        <motion.div
          animate={{
            y: [0, -13, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="absolute right-[7%] top-[10%] h-20 w-20 rounded-full border-[3px] border-slate-950 bg-yellow-300 shadow-[6px_7px_0_#0f172a] sm:h-28 sm:w-28"
        />

        <div className="relative z-40 mx-auto flex w-full max-w-[94rem] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a href="/" className="group flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-[14px] border-[3px] border-slate-950 bg-blue-600 text-sm font-black text-white shadow-[4px_4px_0_#0f172a] transition-transform group-hover:-rotate-6">
              T
            </div>

            <div>
              <p className="text-lg font-black tracking-[-0.05em]">
                Techuvo
              </p>

              <p className="text-[0.58rem] font-black uppercase tracking-[0.18em] text-slate-500">
                Custom Websites
              </p>
            </div>
          </a>

          <a
            href="#start"
            className="hidden min-h-12 items-center gap-2 rounded-full border-[3px] border-slate-950 bg-white px-5 text-sm font-black shadow-[4px_4px_0_#0f172a] transition hover:-translate-y-1 sm:inline-flex"
          >
            Start for $50
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <Mascot />

        <div className="relative z-20 mx-auto grid min-h-[calc(100svh-86px)] w-full max-w-[94rem] items-center gap-10 px-5 pb-16 pt-8 sm:px-8 sm:pt-16 lg:grid-cols-[1.08fr_.92fr] lg:gap-14 lg:px-12 lg:pb-20 lg:pt-8">
          <div className="relative z-20 pt-12 sm:pl-20 sm:pt-28 lg:pl-0 lg:pt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border-[3px] border-slate-950 bg-yellow-300 px-4 py-2 text-xs font-black uppercase tracking-[0.15em] shadow-[4px_4px_0_#0f172a]"
            >
              <Sparkles className="h-4 w-4" />
              Custom website offer
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{ delay: 0.08 }}
              className="max-w-[10ch] text-[clamp(3.6rem,8vw,7.8rem)] font-black leading-[0.83] tracking-[-0.075em]"
            >
              Your new
              <span className="block text-blue-600">
                website.
              </span>
            </motion.h1>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-stretch">
              <motion.div
                initial={{
                  opacity: 0,
                  rotate: -4,
                  scale: 0.92,
                }}
                animate={{
                  opacity: 1,
                  rotate: -1,
                  scale: 1,
                }}
                className="relative inline-flex min-h-[105px] items-center gap-3 rounded-[1.7rem] border-[3px] border-slate-950 bg-white px-5 py-4 shadow-[7px_8px_0_#0f172a] sm:px-6"
              >
                <span className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                  Start for
                </span>

                <span className="text-5xl font-black tracking-[-0.07em] text-blue-600 sm:text-6xl">
                  $50
                </span>

                <div className="absolute -right-3 -top-4 rotate-6 rounded-full border-[3px] border-slate-950 bg-[#ff8c75] px-3 py-2 text-[9px] font-black uppercase shadow-[3px_3px_0_#0f172a]">
                  One-time setup
                </div>
              </motion.div>

              <div className="flex min-h-[105px] flex-col justify-center rounded-[1.7rem] border-[3px] border-slate-950 bg-[#bfe2ff] px-5 py-4 shadow-[7px_8px_0_#0f172a] sm:min-w-[190px]">
                <p className="text-[9px] font-black uppercase tracking-[0.18em]">
                  Then
                </p>

                <div className="mt-1 flex items-end gap-1">
                  <span className="text-4xl font-black tracking-[-0.06em]">
                    $49
                  </span>

                  <span className="pb-1 text-xs font-black">
                    /month
                  </span>
                </div>

                <p className="mt-1 text-[10px] font-bold text-slate-600">
                  Managed website plan
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-[40rem] text-base font-semibold leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Get a custom-built website designed around your
              business. Your $49/month managed plan includes hosting,
              maintenance, security, support, and website leasing.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#start"
                className="group inline-flex min-h-16 items-center justify-center gap-3 rounded-full border-[3px] border-slate-950 bg-blue-600 px-8 text-base font-black text-white shadow-[6px_7px_0_#0f172a] transition hover:-translate-y-1"
              >
                Start My Website
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#work"
                className="inline-flex min-h-16 items-center justify-center rounded-full border-[3px] border-slate-950 bg-white px-8 text-base font-black shadow-[6px_7px_0_#0f172a] transition hover:-translate-y-1"
              >
                See Our Work
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {[
                "Custom built",
                "Mobile ready",
                "Secure hosting",
                "Ongoing support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs font-black text-slate-600 sm:text-sm"
                >
                  <span className="grid h-5 w-5 place-items-center rounded-full border-2 border-slate-950 bg-[#6ee7b7]">
                    <Check className="h-3 w-3" strokeWidth={4} />
                  </span>

                  {item}
                </div>
              ))}
            </div>

            <motion.div
              animate={{
                rotate: [-2, 1, -2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="mt-8 inline-flex items-center gap-3 rounded-2xl border-[3px] border-slate-950 bg-[#6ee7b7] px-4 py-3 shadow-[4px_5px_0_#0f172a]"
            >
              <Code2 className="h-5 w-5" />

              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.16em]">
                  Different by design
                </p>

                <p className="text-sm font-black">
                  Custom coded. Not another template.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.15,
              duration: 0.8,
            }}
            className="relative mx-auto w-full max-w-[550px]"
          >
            <motion.div
              animate={{ rotate: [0, 4, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -right-2 -top-7 z-30 rounded-full border-[3px] border-slate-950 bg-yellow-300 px-4 py-3 text-center text-[10px] font-black uppercase leading-4 shadow-[4px_5px_0_#0f172a] sm:-right-7 sm:text-xs"
            >
              Real founder.
              <br />
              Real support.
            </motion.div>

            <div className="relative overflow-hidden rounded-[2rem] border-[3px] border-slate-950 bg-[#bfe2ff] p-3 shadow-[9px_11px_0_#0f172a] sm:p-4">
              <div className="relative aspect-[0.83] max-h-[640px] overflow-hidden rounded-[1.5rem] border-[3px] border-slate-950 bg-white">
                <div className="absolute inset-x-0 top-0 z-20 flex h-11 items-center justify-between border-b-[3px] border-slate-950 bg-white px-4">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full border-2 border-slate-950 bg-[#ff8c75]" />
                    <div className="h-3 w-3 rounded-full border-2 border-slate-950 bg-yellow-300" />
                    <div className="h-3 w-3 rounded-full border-2 border-slate-950 bg-[#6ee7b7]" />
                  </div>

                  <div className="rounded-full bg-slate-100 px-4 py-1 text-[8px] font-black uppercase tracking-[0.14em] text-slate-500">
                    techuvo.dev
                  </div>
                </div>

                <img
                  src={founderImage}
                  alt="Techuvo founder"
                  className="h-full w-full object-cover object-center pt-11"
                />

                <div className="absolute inset-x-4 bottom-4 rounded-[1.3rem] border-[3px] border-slate-950 bg-white/95 p-4 shadow-[5px_6px_0_#0f172a] backdrop-blur sm:inset-x-5">
                  <p className="text-[9px] font-black uppercase tracking-[0.14em] text-blue-600">
                    Built by Techuvo
                  </p>

                  <p className="mt-1 text-sm font-bold leading-5 text-slate-700">
                    Custom design with a real person behind the
                    project.
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3.3,
              }}
              className="absolute -bottom-6 -left-2 z-30 flex items-center gap-3 rounded-2xl border-[3px] border-slate-950 bg-[#6ee7b7] px-4 py-3 shadow-[5px_6px_0_#0f172a] sm:-left-6"
            >
              <ShieldCheck className="h-5 w-5" />

              <div>
                <p className="text-[8px] font-black uppercase tracking-[0.14em]">
                  Included
                </p>

                <p className="text-xs font-black sm:text-sm">
                  Hosting + Security
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="relative z-20 overflow-hidden border-t-[3px] border-slate-950 bg-yellow-300 py-3">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max"
          >
            {[...Array(2)].map((_, group) => (
              <div
                key={group}
                className="flex shrink-0 items-center"
              >
                {[
                  "$50 TO START",
                  "$49/MONTH",
                  "HOSTING INCLUDED",
                  "MAINTENANCE INCLUDED",
                  "SECURITY INCLUDED",
                  "SUPPORT INCLUDED",
                ].map((item) => (
                  <div
                    key={`${group}-${item}`}
                    className="flex shrink-0 items-center"
                  >
                    <Star
                      className="h-4 w-4 shrink-0"
                      fill="currentColor"
                    />

                    <span className="px-5 text-xs font-black uppercase tracking-[0.16em] sm:px-8 sm:text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        id="work"
        className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
      >
        <div
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage:
              "radial-gradient(#2563eb 1px, transparent 1px)",
            backgroundSize: "25px 25px",
          }}
        />

        <div className="relative mx-auto max-w-[94rem]">
          <div className="max-w-5xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">
              Selected Work / 03
            </p>

            <h2 className="mt-5 text-[clamp(3.7rem,8vw,8rem)] font-black leading-[0.82] tracking-[-0.075em]">
              Three builds.
              <span className="block text-slate-400">
                Three different worlds.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base font-semibold leading-7 text-slate-600 sm:text-lg">
              No recycled visual formula. Tap a project and step
              inside the experience.
            </p>
          </div>

          <div className="mt-16 grid gap-9 lg:grid-cols-3 lg:items-start">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpen={setActiveProject}
              />
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <div className="inline-flex max-w-xl items-center gap-4 rounded-[1.5rem] border-[3px] border-slate-950 bg-yellow-300 px-5 py-4 text-sm font-black shadow-[5px_6px_0_#0f172a]">
              <Sparkles className="h-5 w-5 shrink-0" />
              Your business doesn't have to look like these. That's
              the point — we build around you.
            </div>
          </div>
        </div>
      </section>

      <section
        id="start"
        className="relative overflow-hidden border-t-[3px] border-slate-950 bg-blue-600 px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12"
      >
        <div className="absolute -left-16 -top-16 h-52 w-52 rounded-full border-[3px] border-slate-950 bg-yellow-300" />
        <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-[35%] border-[3px] border-slate-950 bg-[#6ee7b7]" />

        <div className="relative mx-auto max-w-[94rem] text-center">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-100">
            Ready when you are
          </p>

          <h2 className="mx-auto mt-5 max-w-5xl text-[clamp(3.5rem,8vw,7rem)] font-black leading-[0.86] tracking-[-0.07em]">
            Your website could be next.
          </h2>

          <div className="mx-auto mt-9 flex w-fit flex-col items-center rounded-[2rem] border-[3px] border-slate-950 bg-white px-7 py-6 text-slate-950 shadow-[8px_9px_0_#0f172a] sm:px-10">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
              Start today
            </p>

            <p className="mt-1 text-6xl font-black tracking-[-0.07em] text-blue-600">
              $50
            </p>

            <p className="mt-2 text-sm font-black">
              then $49/month
            </p>
          </div>

          <a
            href="/contact"
            className="group mx-auto mt-8 inline-flex min-h-16 items-center justify-center gap-3 rounded-full border-[3px] border-slate-950 bg-yellow-300 px-9 text-base font-black text-slate-950 shadow-[7px_8px_0_#0f172a] transition hover:-translate-y-1"
          >
            Start My Website
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>

          <p className="mx-auto mt-6 max-w-xl text-sm font-semibold leading-6 text-blue-100">
            $49/month managed website plan includes hosting,
            maintenance, security, ongoing support, and website
            leasing.
          </p>
        </div>
      </section>

      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

export default WebsiteOffer;
