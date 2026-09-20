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
      initial={{ opacity: 0, y: -18, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.75,
        delay: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        pointer-events-none
        absolute
        z-30

        right-5
        top-[6.25rem]

        sm:right-8
        sm:top-[7rem]

        lg:left-1/2
        lg:right-auto
        lg:top-[9.5rem]
        lg:-translate-x-1/2
      "
    >
      <motion.div
        animate={{
          y: [0, -5, 0],
          rotate: [-1, 1, -1],
        }}
        transition={{
          duration: 3.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative
          h-[76px]
          w-[62px]

          sm:h-[90px]
          sm:w-[74px]

          lg:h-[118px]
          lg:w-[96px]
        "
      >
        {/* Waving arm */}
        <motion.div
          animate={{
            rotate: [-18, 24, -18],
          }}
          transition={{
            duration: 1.25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            transformOrigin: "bottom center",
          }}
          className="absolute -right-1 top-0"
        >
          <div className="
            relative
            h-[35px]
            w-[13px]
            rotate-[24deg]
            rounded-full
            border-2
            border-slate-950
            bg-white
            shadow-[2px_3px_0_#0f172a]

            sm:h-[42px]
            sm:w-[15px]

            lg:h-[54px]
            lg:w-[18px]
            lg:border-[3px]
          ">
            <div className="
              absolute
              -top-4
              left-1/2
              h-6
              w-6
              -translate-x-1/2
              rounded-[45%]
              border-2
              border-slate-950
              bg-[#ffd0b5]
              shadow-[2px_2px_0_#0f172a]

              lg:-top-5
              lg:h-8
              lg:w-8
              lg:border-[3px]
            " />
          </div>
        </motion.div>

        {/* Legs */}
        <div className="
          absolute
          bottom-0
          left-[16px]
          h-[30px]
          w-[14px]
          rounded-b-lg
          border-2
          border-slate-950
          bg-white
          shadow-[2px_3px_0_#0f172a]

          sm:left-[19px]
          sm:h-[35px]
          sm:w-[16px]

          lg:left-[24px]
          lg:h-[45px]
          lg:w-[19px]
          lg:border-[3px]
        " />

        <div className="
          absolute
          bottom-0
          right-[16px]
          h-[30px]
          w-[14px]
          rounded-b-lg
          border-2
          border-slate-950
          bg-white
          shadow-[2px_3px_0_#0f172a]

          sm:right-[19px]
          sm:h-[35px]
          sm:w-[16px]

          lg:right-[24px]
          lg:h-[45px]
          lg:w-[19px]
          lg:border-[3px]
        " />

        {/* Shoes */}
        <div className="
          absolute
          bottom-0
          left-[8px]
          h-[9px]
          w-[25px]
          -rotate-3
          rounded-full
          border-2
          border-slate-950
          bg-blue-600

          sm:left-[10px]
          sm:h-[10px]
          sm:w-[29px]

          lg:left-[13px]
          lg:h-[13px]
          lg:w-[36px]
          lg:border-[3px]
        " />

        <div className="
          absolute
          bottom-0
          right-[8px]
          h-[9px]
          w-[25px]
          rotate-3
          rounded-full
          border-2
          border-slate-950
          bg-blue-600

          sm:right-[10px]
          sm:h-[10px]
          sm:w-[29px]

          lg:right-[13px]
          lg:h-[13px]
          lg:w-[36px]
          lg:border-[3px]
        " />

        {/* White suit */}
        <div className="
          absolute
          left-1/2
          top-[27px]
          z-10
          h-[37px]
          w-[43px]
          -translate-x-1/2
          rounded-[38%_38%_25%_25%]
          border-2
          border-slate-950
          bg-white
          shadow-[3px_3px_0_#0f172a]

          sm:top-[32px]
          sm:h-[43px]
          sm:w-[50px]

          lg:top-[42px]
          lg:h-[55px]
          lg:w-[63px]
          lg:border-[3px]
          lg:shadow-[4px_5px_0_#0f172a]
        ">
          <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-slate-950/15" />

          <div className="
            absolute
            left-1/2
            top-[5px]
            h-5
            w-3
            -translate-x-1/2
            bg-blue-600
            [clip-path:polygon(50%_0,100%_30%,67%_100%,33%_100%,0_30%)]

            lg:top-[7px]
            lg:h-7
            lg:w-4
          " />

          <div className="absolute left-[6px] top-[7px] h-2 w-2 rounded-full bg-blue-600 lg:left-[8px] lg:top-[9px] lg:h-2.5 lg:w-2.5" />

          <div className="absolute right-[6px] top-[7px] h-2 w-2 rounded-full bg-blue-600 lg:right-[8px] lg:top-[9px] lg:h-2.5 lg:w-2.5" />
        </div>

        {/* Head */}
        <div className="
          absolute
          left-1/2
          top-[7px]
          z-20
          h-[33px]
          w-[33px]
          -translate-x-1/2
          rounded-[46%]
          border-2
          border-slate-950
          bg-[#ffd0b5]
          shadow-[3px_3px_0_#0f172a]

          sm:h-[38px]
          sm:w-[38px]

          lg:top-[11px]
          lg:h-[48px]
          lg:w-[48px]
          lg:border-[3px]
          lg:shadow-[4px_4px_0_#0f172a]
        ">
          <div className="
            absolute
            -left-1
            top-0
            h-[13px]
            w-[36px]
            -rotate-2
            rounded-[55%_50%_25%_30%]
            border-2
            border-slate-950
            bg-slate-950

            sm:w-[41px]

            lg:h-[19px]
            lg:w-[51px]
            lg:border-[3px]
          " />

          <div className="absolute left-[7px] top-[16px] h-[4px] w-[3px] rounded-full bg-slate-950 lg:left-[11px] lg:top-[23px] lg:h-[5px] lg:w-[4px]" />

          <div className="absolute right-[7px] top-[16px] h-[4px] w-[3px] rounded-full bg-slate-950 lg:right-[11px] lg:top-[23px] lg:h-[5px] lg:w-[4px]" />

          <div className="absolute left-1/2 top-[23px] h-[4px] w-[13px] -translate-x-1/2 rounded-b-full border-b-2 border-slate-950 lg:top-[34px] lg:h-[6px] lg:w-[18px] lg:border-b-[3px]" />
        </div>

        {/* Small hello bubble */}
        <motion.div
          animate={{
            y: [0, -2, 0],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
          }}
          className="
            absolute
            -left-8
            -top-5
            whitespace-nowrap
            rounded-full
            border-2
            border-slate-950
            bg-yellow-300
            px-2
            py-1
            text-[7px]
            font-black
            uppercase
            tracking-[0.12em]
            shadow-[2px_2px_0_#0f172a]

            sm:text-[8px]

            lg:-left-12
            lg:-top-7
            lg:border-[3px]
            lg:px-3
            lg:py-1.5
            lg:text-[9px]
            lg:shadow-[3px_3px_0_#0f172a]
          "
        >
          Hey there!
        </motion.div>
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
      initial={{
        opacity: 0,
        y: 45,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-70px",
      }}
      whileHover={{
        y: -8,
      }}
      whileTap={{
        scale: 0.985,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group block h-full w-full text-left"
    >
      <div
        className="
          relative
          grid
          h-full
          min-h-[560px]
          grid-rows-[112px_300px_1fr]
          overflow-hidden
          rounded-[1.7rem]
          border-[3px]
          border-slate-950
          shadow-[7px_8px_0_#0f172a]
          transition-all
          duration-300

          sm:min-h-[610px]
          sm:grid-rows-[118px_340px_1fr]
          sm:rounded-[2rem]
          sm:shadow-[9px_10px_0_#0f172a]

          lg:min-h-[640px]
          lg:grid-rows-[122px_350px_1fr]

          lg:group-hover:shadow-[12px_14px_0_#0f172a]
        "
        style={{
          backgroundColor: project.accent,
        }}
      >
        {/* Header — same height on every card */}
        <div className="flex h-full items-center justify-between gap-4 border-b-[3px] border-slate-950 p-4 sm:p-5">
          <div className="min-w-0">
            <p className="text-[9px] font-black uppercase tracking-[0.18em] sm:text-[10px]">
              Featured build
            </p>

            <p className="mt-2 text-base font-black leading-tight sm:text-lg">
              {project.category}
            </p>
          </div>

          <motion.div
            animate={{
              rotate: [0, 6, 0],
            }}
            transition={{
              duration: 2.7,
              repeat: Infinity,
              delay: index * 0.35,
              ease: "easeInOut",
            }}
            className="
              grid
              h-11
              w-11
              shrink-0
              place-items-center
              rounded-full
              border-[3px]
              border-slate-950
              bg-white
              shadow-[3px_4px_0_#0f172a]

              sm:h-12
              sm:w-12
            "
          >
            <Icon className="h-5 w-5" />
          </motion.div>
        </div>

        {/* Preview — identical viewport for all 3 */}
        <div className="h-full min-h-0 overflow-hidden border-b-[3px] border-slate-950">
          <ProjectPreview project={project} />
        </div>

        {/* Copy — equal height and CTA anchored to bottom */}
        <div className="flex min-h-0 flex-col p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h3 className="
                text-[2.35rem]
                font-black
                leading-[0.9]
                tracking-[-0.055em]

                sm:text-[2.75rem]

                lg:text-[clamp(2.3rem,2.7vw,3.4rem)]
              ">
                {project.name}
              </h3>

              <p className="mt-3 max-w-sm text-sm font-bold leading-6 text-slate-700">
                {project.tagline}
              </p>
            </div>

            <div className="
              grid
              h-11
              w-11
              shrink-0
              place-items-center
              rounded-full
              border-[3px]
              border-slate-950
              bg-white
              shadow-[3px_4px_0_#0f172a]
              transition-transform
              duration-300

              sm:h-12
              sm:w-12

              group-hover:translate-x-1
              group-hover:-translate-y-1
            ">
              <ArrowRight className="h-5 w-5 -rotate-45" />
            </div>
          </div>

          <div className="mt-auto pt-6 sm:pt-8">
            <div className="h-[3px] w-full bg-slate-950/10" />

            <div className="mt-4 flex items-center justify-between gap-3">
              <p className="text-[9px] font-black uppercase tracking-[0.18em] sm:text-[10px]">
                Tap to explore
              </p>

              <motion.span
                animate={{
                  x: [0, 4, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-lg font-black"
              >
                →
              </motion.span>
            </div>
          </div>
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
                Featured build
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

const servicePackages = [
  {
    id: "lead-funnel",
    eyebrow: "Lead generation",
    name: "1-Page Lead Funnel",
    price: "$199",
    accent: "#aeecef",
    summary:
      "A focused conversion page built to turn paid traffic into calls, forms, and real customer opportunities.",
    bestFor: "Businesses ready to advertise one core service.",
    features: [
      "Custom conversion-focused layout",
      "Instant lead alerts by text or email",
      "Meta Pixel + conversion tracking setup",
      "Mobile-first responsive build",
    ],
    examples: [
      {
        id: "home-services",
        title: "Home Services",
        subtitle: "Roofing / HVAC / Landscaping",
        accent: "#aeecef",
        hero: "Turn local searches into booked jobs.",
        copy: "A direct-response layout that leads with the offer, trust, proof, service area, and one obvious action.",
      },
      {
        id: "beauty",
        title: "Beauty & Wellness",
        subtitle: "Salon / Barber / Med Spa",
        accent: "#ffd86b",
        hero: "A premium first impression built to book.",
        copy: "Strong visuals, service proof, social credibility, and a simple appointment path designed for mobile traffic.",
      },
      {
        id: "professional",
        title: "Professional Services",
        subtitle: "Consulting / Legal / Finance",
        accent: "#d6c7ff",
        hero: "Make expertise feel obvious before the call.",
        copy: "An authority-first funnel that explains the offer quickly, reduces uncertainty, and moves visitors toward inquiry.",
      },
    ],
  },
  {
    id: "growth-bundle",
    eyebrow: "Business presence",
    name: "Business Growth Bundle",
    price: "$499",
    accent: "#ffd86b",
    summary:
      "Your lead funnel plus the core pages a growing business needs to look established, credible, and easy to understand.",
    bestFor: "Businesses that need both credibility and lead generation.",
    features: [
      "Core 1-page lead funnel",
      "About, Services + Gallery pages",
      "Google Business Profile conversion mapping",
      "Tracking infrastructure included",
    ],
    examples: [
      {
        id: "contractor",
        title: "Local Contractor",
        subtitle: "Funnel + service pages + proof",
        accent: "#ffd86b",
        hero: "One business. One clear path from discovery to quote.",
        copy: "The funnel captures demand while supporting pages answer the questions customers ask before they commit.",
      },
      {
        id: "studio",
        title: "Private Studio",
        subtitle: "Brand story + services + gallery",
        accent: "#ffb6ae",
        hero: "Turn the experience into the reason they choose you.",
        copy: "An editorial structure that sells the atmosphere, shows the work, and gives visitors confidence before they book.",
      },
      {
        id: "creative",
        title: "Creative Business",
        subtitle: "Portfolio + services + conversion",
        accent: "#b7e9c9",
        hero: "Show the work without losing the sale.",
        copy: "A portfolio-led system with enough personality to stand out and enough structure to keep conversion obvious.",
      },
    ],
  },
  {
    id: "authority",
    eyebrow: "Local authority",
    name: "Authority Ecosystem",
    price: "$799",
    accent: "#d6c7ff",
    summary:
      "A larger website architecture built for businesses that need dedicated service pages, stronger local search structure, and deeper trust.",
    bestFor: "Established businesses expanding their local authority.",
    features: [
      "Up to 7 custom pages",
      "Dedicated individual service pages",
      "Local SEO-focused site architecture",
      "Review-generation campaign setup",
    ],
    examples: [
      {
        id: "multi-service",
        title: "Multi-Service Company",
        subtitle: "Dedicated service architecture",
        accent: "#d6c7ff",
        hero: "Give every major service room to rank and convert.",
        copy: "Each service gets its own focused page while the overall site still feels like one cohesive brand system.",
      },
      {
        id: "regional",
        title: "Regional Brand",
        subtitle: "Locations + authority + proof",
        accent: "#aeecef",
        hero: "Build a stronger footprint across the market.",
        copy: "A scalable structure for businesses serving multiple areas, with proof and conversion paths throughout the experience.",
      },
      {
        id: "premium-service",
        title: "Premium Service Brand",
        subtitle: "Editorial authority experience",
        accent: "#ffb6ae",
        hero: "Make the website feel as premium as the service.",
        copy: "A deeper brand experience with dedicated pages, refined positioning, and a stronger trust journey before inquiry.",
      },
    ],
  },
];

function PackageExamplePreview({ example }) {
  return (
    <div className="relative min-h-[480px] overflow-hidden bg-[#fffaf0] sm:min-h-[560px]">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,.12) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative flex min-h-[480px] flex-col sm:min-h-[560px]">
        <div className="flex items-center justify-between border-b-[3px] border-slate-950 bg-white px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full border-2 border-slate-950 bg-[#ff8c75]" />
            <span className="h-3 w-3 rounded-full border-2 border-slate-950 bg-yellow-300" />
            <span className="h-3 w-3 rounded-full border-2 border-slate-950 bg-[#6ee7b7]" />
          </div>
          <span className="text-[9px] font-black uppercase tracking-[0.14em] text-slate-500">
            Example layout
          </span>
        </div>

        <div className="grid flex-1 gap-0 lg:grid-cols-[1.05fr_.95fr]">
          <div className="flex flex-col justify-center border-b-[3px] border-slate-950 p-6 sm:p-9 lg:border-b-0 lg:border-r-[3px] lg:p-12">
            <span
              className="inline-flex w-fit rounded-full border-[3px] border-slate-950 px-3 py-2 text-[10px] font-black uppercase tracking-[0.14em] shadow-[3px_4px_0_#0f172a]"
              style={{ backgroundColor: example.accent }}
            >
              {example.title}
            </span>

            <h3 className="mt-7 max-w-[10ch] text-[clamp(2.8rem,7vw,6rem)] font-black leading-[0.84] tracking-[-0.07em]">
              {example.hero}
            </h3>

            <p className="mt-6 max-w-xl text-sm font-semibold leading-7 text-slate-600 sm:text-base">
              {example.copy}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {["Clear offer", "Trust proof", "Strong CTA", "Mobile first"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border-2 border-slate-950 bg-white px-3 py-2 text-[10px] font-black uppercase tracking-[0.1em]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center p-6 sm:p-10">
            <motion.div
              initial={{ opacity: 0, y: 25, rotate: 2 }}
              animate={{ opacity: 1, y: 0, rotate: -1 }}
              transition={{ type: "spring", stiffness: 160, damping: 18 }}
              className="w-full max-w-[420px] overflow-hidden rounded-[1.6rem] border-[3px] border-slate-950 bg-white shadow-[10px_12px_0_#0f172a]"
            >
              <div className="border-b-[3px] border-slate-950 p-4" style={{ backgroundColor: example.accent }}>
                <div className="h-3 w-24 rounded-full bg-slate-950/20" />
              </div>
              <div className="p-5 sm:p-6">
                <div className="h-4 w-20 rounded-full bg-slate-200" />
                <div className="mt-5 h-8 w-[92%] rounded-md bg-slate-950" />
                <div className="mt-2 h-8 w-[70%] rounded-md bg-slate-950" />
                <div className="mt-5 h-3 w-full rounded-full bg-slate-200" />
                <div className="mt-2 h-3 w-[84%] rounded-full bg-slate-200" />
                <div className="mt-6 h-12 w-40 rounded-full border-[3px] border-slate-950" style={{ backgroundColor: example.accent }} />
                <div className="mt-8 grid grid-cols-3 gap-3">
                  {[0, 1, 2].map((item) => (
                    <div key={item} className="aspect-square rounded-xl border-2 border-slate-950 bg-slate-100" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PackageExamples({ packageItem, onClose }) {
  const [activeExample, setActiveExample] = useState(null);

  return (
    <motion.div
      className="fixed inset-0 z-[600] overflow-y-auto bg-slate-950/70 p-2 backdrop-blur-md sm:p-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: 55, scale: 0.985 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: 35, scale: 0.985 }}
        transition={{ type: "spring", stiffness: 170, damping: 22 }}
        className="mx-auto my-2 w-full max-w-7xl overflow-hidden rounded-[1.6rem] border-[3px] border-slate-950 bg-[#fff9ee] shadow-[12px_14px_0_#0f172a] sm:my-5 sm:rounded-[2rem]"
      >
        <div
          className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b-[3px] border-slate-950 px-4 py-4 sm:px-6"
          style={{ backgroundColor: packageItem.accent }}
        >
          <div className="min-w-0">
            <p className="text-[9px] font-black uppercase tracking-[0.18em] text-slate-600">
              Website examples
            </p>
            <h2 className="truncate text-lg font-black tracking-[-0.04em] sm:text-2xl">
              {activeExample ? activeExample.title : packageItem.name}
            </h2>
          </div>

          <button
            type="button"
            onClick={() => (activeExample ? setActiveExample(null) : onClose())}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-[3px] border-slate-950 bg-white shadow-[3px_4px_0_#0f172a] transition hover:-translate-y-1"
            aria-label={activeExample ? "Back to examples" : "Close examples"}
          >
            {activeExample ? <ArrowRight className="h-5 w-5 rotate-180" /> : <X className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeExample ? (
            <motion.div
              key={activeExample.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
            >
              <PackageExamplePreview example={activeExample} />
              <div className="flex flex-col gap-3 border-t-[3px] border-slate-950 bg-white p-4 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                <p className="max-w-2xl text-sm font-semibold leading-6 text-slate-600">
                  This is a layout direction, not a fixed template. Your build is adapted to your business, content, offer, and brand.
                </p>
                <button
                  type="button"
                  onClick={() => setActiveExample(null)}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-[3px] border-slate-950 bg-yellow-300 px-5 text-sm font-black shadow-[4px_5px_0_#0f172a]"
                >
                  View other examples
                  <ArrowRight className="h-4 w-4 rotate-180" />
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="files"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="p-5 sm:p-8 lg:p-10"
            >
              <div className="max-w-3xl">
                <p className="text-sm font-semibold leading-7 text-slate-600 sm:text-base">
                  Open a file to see how this package can be shaped for different kinds of businesses. These are example directions, not recycled templates.
                </p>
              </div>

              <div className="mt-7 grid gap-5 md:grid-cols-3">
                {packageItem.examples.map((example) => (
                  <motion.button
                    key={example.id}
                    type="button"
                    onClick={() => setActiveExample(example)}
                    whileHover={{ y: -7, rotate: -0.6 }}
                    whileTap={{ scale: 0.985 }}
                    className="group relative min-h-[290px] overflow-hidden rounded-[1.4rem] border-[3px] border-slate-950 bg-white p-5 text-left shadow-[7px_8px_0_#0f172a] sm:p-6"
                  >
                    <div
                      className="absolute inset-x-0 top-0 h-16 border-b-[3px] border-slate-950"
                      style={{ backgroundColor: example.accent }}
                    />
                    <div className="relative pt-14">
                      <div className="mb-8 h-16 w-14 rounded-lg border-[3px] border-slate-950 bg-[#fff9ee] shadow-[3px_4px_0_#0f172a]">
                        <div className="ml-auto h-5 w-5 border-b-[3px] border-l-[3px] border-slate-950 bg-white" />
                      </div>
                      <p className="text-2xl font-black tracking-[-0.045em]">{example.title}</p>
                      <p className="mt-2 text-sm font-semibold leading-6 text-slate-500">{example.subtitle}</p>
                      <div className="mt-8 flex items-center justify-between border-t-2 border-slate-950/10 pt-4 text-xs font-black uppercase tracking-[0.13em]">
                        Open example
                        <ArrowRight className="h-5 w-5 -rotate-45 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

function WebsiteOffer() {
  const [activeProject, setActiveProject] = useState(null);
  const [activePackage, setActivePackage] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);
  const [brandMode, setBrandMode] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setBrandMode((current) => (current === 0 ? 1 : 0));
    }, 3200);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeProject || activePackage ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject, activePackage]);

  const contactHref = (subject = "a Techuvo website package") =>
    `sms:+13134507265?body=${encodeURIComponent(
      `Hi Techuvo, I'm interested in ${subject}.`,
    )}`;

  return (
    <main className="min-h-screen overflow-hidden bg-[#fff8e8] text-slate-950 selection:bg-yellow-200">
      {/* HERO */}
      <section id="top" className="relative overflow-hidden border-b-[3px] border-slate-950">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.32]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,.08) 1px, transparent 1px)",
            backgroundSize: "38px 38px",
          }}
        />

        <nav className="relative z-40 mx-auto flex w-full max-w-[94rem] items-center justify-between gap-3 px-4 py-3 sm:px-7 sm:py-4 lg:px-10">
          <a href="#top" className="group flex min-w-0 items-center gap-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-[12px] border-[3px] border-slate-950 bg-[#16b7d3] text-sm font-black shadow-[4px_4px_0_#0f172a] transition-transform group-hover:-rotate-6 sm:h-11 sm:w-11">
              T
            </div>
            <div className="min-w-0">
              <p className="truncate text-[0.98rem] font-black tracking-[-0.04em] sm:text-lg">Techuvo LLC</p>
              <p className="hidden text-[0.55rem] font-black uppercase tracking-[0.16em] text-slate-500 sm:block sm:text-[0.6rem]">
                Websites + growth systems
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-7 text-sm font-black lg:flex">
            <a href="#formula" className="transition hover:-translate-y-0.5">Why it works</a>
            <a href="#services" className="transition hover:-translate-y-0.5">Services</a>
            <a href="#work" className="transition hover:-translate-y-0.5">Work</a>
            <a href="#faq" className="transition hover:-translate-y-0.5">FAQ</a>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href="/"
              className="inline-flex min-h-10 items-center gap-2 rounded-full border-[3px] border-slate-950 bg-white px-3 text-[11px] font-black shadow-[3px_4px_0_#0f172a] transition hover:-translate-y-1 sm:min-h-12 sm:px-4 sm:text-sm"
            >
              <span className="sm:hidden">Company site</span>
              <span className="hidden sm:inline">View company website</span>
              <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </a>

            <a
              href="#services"
              className="hidden min-h-12 items-center gap-2 rounded-full border-[3px] border-slate-950 bg-slate-950 px-5 text-sm font-black text-white shadow-[4px_4px_0_#f7c948] transition hover:-translate-y-1 md:inline-flex"
            >
              View packages
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </nav>

        <div className="relative z-20 mx-auto grid w-full max-w-[94rem] gap-8 px-4 pb-12 pt-3 sm:px-7 sm:pb-14 sm:pt-7 lg:grid-cols-[1.05fr_.95fr] lg:items-start lg:gap-12 lg:px-10 lg:pb-16 lg:pt-8 xl:gap-14">
          <div>
            <div className="mb-5 h-7 overflow-hidden sm:h-9">
              <AnimatePresence mode="wait">
                <motion.p
                  key={brandMode}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="text-xs font-black uppercase tracking-[0.22em] sm:text-sm"
                >
                  {brandMode === 0 ? "Techuvo LLC" : "Growth Partner"}
                </motion.p>
              </AnimatePresence>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-[11ch] text-[clamp(2.8rem,11vw,7.25rem)] font-black leading-[0.84] tracking-[-0.075em] sm:text-[clamp(3.4rem,8vw,7.25rem)]"
            >
              Build trust.
              <span className="block text-[#ef4444]">Bring traffic.</span>
              Grow the business.
            </motion.h1>

            <p className="mt-5 max-w-[43rem] text-[0.98rem] font-semibold leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
              Techuvo builds conversion-focused websites and marketing systems for service businesses — so your online presence has somewhere to send customers and a reason for them to act.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row">
              <a
                href="#services"
                className="group inline-flex min-h-[60px] items-center justify-center gap-3 rounded-full border-[3px] border-slate-950 bg-yellow-300 px-7 py-4 text-sm font-black shadow-[6px_7px_0_#0f172a] transition hover:-translate-y-1 sm:text-base"
              >
                Explore the packages
                <ArrowRight className="h-5 w-5 rotate-90 transition-transform group-hover:translate-y-1" />
              </a>
              <a
                href="#work"
                className="inline-flex min-h-[60px] items-center justify-center rounded-full border-[3px] border-slate-950 bg-white px-7 py-4 text-sm font-black shadow-[6px_7px_0_#0f172a] transition hover:-translate-y-1 sm:text-base"
              >
                See real work
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2.5 text-[11px] font-black text-slate-600 sm:mt-7 sm:gap-x-5 sm:text-sm">
              {["Custom-built", "Mobile-first", "Conversion-focused", "Real support"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="grid h-5 w-5 place-items-center rounded-full border-2 border-slate-950 bg-[#6ee7b7]">
                    <Check className="h-3 w-3" strokeWidth={4} />
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.12, duration: 0.7 }}
            className="relative mx-auto mt-2 w-full max-w-[560px] lg:mt-0 xl:max-w-[590px]"
          >
            <div className="relative overflow-hidden rounded-[2rem] border-[3px] border-slate-950 bg-[#aeecef] p-3 shadow-[10px_12px_0_#0f172a] sm:p-4">
              <div className="overflow-hidden rounded-[1.45rem] border-[3px] border-slate-950 bg-white">
                <div className="flex items-center justify-between border-b-[3px] border-slate-950 px-4 py-3">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full border-2 border-slate-950 bg-[#ff8c75]" />
                    <span className="h-3 w-3 rounded-full border-2 border-slate-950 bg-yellow-300" />
                    <span className="h-3 w-3 rounded-full border-2 border-slate-950 bg-[#6ee7b7]" />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-[0.12em] text-slate-500">techuvo.dev</span>
                </div>

                <div className="grid min-h-[300px] sm:min-h-[390px] lg:min-h-[430px] xl:min-h-[470px]">
                  <img src={founderImage} alt="Techuvo founder" className="h-full min-h-[300px] w-full object-cover object-center sm:min-h-[390px] lg:min-h-[430px] xl:min-h-[470px]" />
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -7, 0], rotate: [-1, 1, -1] }}
              transition={{ duration: 3.2, repeat: Infinity }}
              className="absolute -bottom-5 left-2 rounded-[1rem] border-[3px] border-slate-950 bg-white px-4 py-3 shadow-[5px_6px_0_#0f172a] sm:-left-5"
            >
              <p className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-500">One partner</p>
              <p className="mt-1 text-sm font-black">Website + growth</p>
            </motion.div>

            <motion.div
              animate={{ rotate: [2, -2, 2] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -right-1 -top-5 rounded-full border-[3px] border-slate-950 bg-yellow-300 px-4 py-3 text-xs font-black shadow-[4px_5px_0_#0f172a] sm:-right-5"
            >
              Built around your business
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* GROWTH FORMULA */}
      <section id="formula" className="relative border-b-[3px] border-slate-950 bg-[#d8ccff] px-4 py-14 sm:px-7 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[94rem]">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_.92fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em]">The growth formula</p>
              <h2 className="mt-5 max-w-[11ch] text-[clamp(3.2rem,7vw,7rem)] font-black leading-[0.84] tracking-[-0.07em]">
                A website is only
                <span className="block text-[#ef4444]">half the system.</span>
              </h2>
            </div>
            <p className="max-w-xl text-base font-semibold leading-7 text-slate-700 sm:text-lg sm:leading-8 lg:justify-self-end">
              A beautiful website alone does not create demand. Techuvo combines the place customers land with the system that brings qualified traffic to it.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <motion.div whileHover={{ y: -5 }} className="border-[3px] border-slate-950 bg-[#aeecef] p-6 shadow-[8px_9px_0_#0f172a] sm:p-8 lg:p-10">
              <p className="text-xs font-black uppercase tracking-[0.16em]">Trust</p>
              <h3 className="mt-4 text-5xl font-black tracking-[-0.06em] sm:text-6xl">The Funnel</h3>
              <p className="mt-5 max-w-xl text-base font-semibold leading-7 text-slate-700">
                Your website is the storefront: strong positioning, proof, visuals, and one clear action that makes the business feel credible immediately.
              </p>
              <p className="mt-7 border-t-[3px] border-slate-950 pt-5 text-sm font-black">Without trust, paid traffic gets wasted.</p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="border-[3px] border-slate-950 bg-yellow-300 p-6 shadow-[8px_9px_0_#0f172a] sm:p-8 lg:p-10">
              <p className="text-xs font-black uppercase tracking-[0.16em]">Traffic</p>
              <h3 className="mt-4 text-5xl font-black tracking-[-0.06em] sm:text-6xl">The Marketing</h3>
              <p className="mt-5 max-w-xl text-base font-semibold leading-7 text-slate-700">
                Targeted direct-response marketing puts the funnel in front of people in your service area who are more likely to need what you sell.
              </p>
              <p className="mt-7 border-t-[3px] border-slate-950 pt-5 text-sm font-black">Without traffic, even a great website can sit empty.</p>
            </motion.div>
          </div>

          <div className="mt-5 border-[3px] border-slate-950 bg-[#fff8e8] p-5 shadow-[8px_9px_0_#0f172a] sm:p-7 lg:flex lg:items-center lg:justify-between lg:gap-8">
            <h3 className="text-[clamp(2rem,5vw,4.8rem)] font-black leading-[0.9] tracking-[-0.06em]">
              Trust <span className="text-[#ef4444]">×</span> Traffic = Customer Opportunities
            </h3>
            <p className="mt-4 max-w-lg text-sm font-semibold leading-6 text-slate-600 lg:mt-0">
              Build either side independently, or connect both into one growth system.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative bg-[#fff8e8] px-4 py-16 sm:px-7 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[94rem]">
          <div className="grid gap-6 lg:grid-cols-[1fr_.8fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Website services</p>
              <h2 className="mt-4 max-w-[11ch] text-[clamp(3.3rem,7vw,7rem)] font-black leading-[0.84] tracking-[-0.07em]">
                Choose the build that fits where you are now.
              </h2>
            </div>
            <p className="max-w-xl text-base font-semibold leading-7 text-slate-600 sm:text-lg lg:justify-self-end">
              Start focused, expand later, or build the full authority system from day one. Every option is responsive across phones, tablets, laptops, and large displays.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {servicePackages.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.06 }}
                className="overflow-hidden border-[3px] border-slate-950 bg-white shadow-[8px_9px_0_#0f172a]"
              >
                <div className="grid lg:grid-cols-[.88fr_1.12fr]">
                  <div className="border-b-[3px] border-slate-950 p-5 sm:p-7 lg:border-b-0 lg:border-r-[3px] lg:p-9" style={{ backgroundColor: item.accent }}>
                    <p className="text-xs font-black uppercase tracking-[0.17em]">{item.eyebrow}</p>
                    <h3 className="mt-4 max-w-[9ch] text-[clamp(2.8rem,6vw,5.5rem)] font-black leading-[0.86] tracking-[-0.065em]">{item.name}</h3>
                    <div className="mt-7 flex items-end gap-2">
                      <span className="text-6xl font-black tracking-[-0.07em] sm:text-7xl">{item.price}</span>
                      <span className="pb-2 text-xs font-black uppercase tracking-[0.12em]">one-time</span>
                    </div>
                    <p className="mt-6 max-w-xl text-sm font-semibold leading-7 text-slate-700 sm:text-base">{item.summary}</p>
                    <p className="mt-6 border-t-[3px] border-slate-950 pt-5 text-sm font-black">Best for: {item.bestFor}</p>
                  </div>

                  <div className="flex flex-col p-5 sm:p-7 lg:p-9">
                    <p className="text-xs font-black uppercase tracking-[0.17em] text-slate-500">What you get</p>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {item.features.map((feature) => (
                        <div key={feature} className="flex gap-3 border-b-2 border-slate-950/10 pb-3 text-sm font-bold leading-6">
                          <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 border-slate-950 bg-[#6ee7b7]">
                            <Check className="h-3.5 w-3.5" strokeWidth={4} />
                          </span>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:mt-auto lg:pt-8">
                      <button
                        type="button"
                        onClick={() => setActivePackage(item)}
                        className="group inline-flex min-h-14 items-center justify-between gap-3 border-[3px] border-slate-950 bg-[#fff8e8] px-5 text-left text-sm font-black shadow-[5px_6px_0_#0f172a] transition hover:-translate-y-1"
                      >
                        <span>
                          <span className="block text-[9px] uppercase tracking-[0.15em] text-slate-500">Example files</span>
                          See example layouts
                        </span>
                        <ArrowRight className="h-5 w-5 -rotate-45 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </button>

                      <a
                        href={contactHref(item.name)}
                        className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border-[3px] border-slate-950 bg-slate-950 px-5 text-sm font-black text-white shadow-[5px_6px_0_#f7c948] transition hover:-translate-y-1"
                      >
                        Start this package
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* GROWTH ENGINE */}
      <section className="relative border-y-[3px] border-slate-950 bg-[#16b7d3] px-4 py-16 sm:px-7 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[94rem]">
          <div className="grid gap-8 lg:grid-cols-[.92fr_1.08fr] lg:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em]">The growth engine</p>
              <h2 className="mt-5 max-w-[10ch] text-[clamp(3.3rem,7vw,7rem)] font-black leading-[0.84] tracking-[-0.07em]">
                Your website is built.
                <span className="block text-white">Now give it traffic.</span>
              </h2>
              <p className="mt-6 max-w-xl text-base font-semibold leading-7 text-slate-900/75 sm:text-lg">
                The 14-Day Growth Sprint connects paid traffic to your funnel so we can start gathering real response data and optimizing from day one.
              </p>
            </div>

            <div className="grid gap-5">
              <div className="border-[3px] border-slate-950 bg-[#fff8e8] p-6 shadow-[8px_9px_0_#0f172a] sm:p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">14-Day Growth Sprint</p>
                    <h3 className="mt-2 text-4xl font-black tracking-[-0.055em] sm:text-5xl">$0 management fee</h3>
                  </div>
                  <div className="w-fit rounded-full border-[3px] border-slate-950 bg-yellow-300 px-4 py-2 text-xs font-black shadow-[3px_4px_0_#0f172a]">$500 campaign investment</div>
                </div>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div className="border-[3px] border-slate-950 bg-white p-5">
                    <p className="text-4xl font-black tracking-[-0.06em]">$350</p>
                    <p className="mt-2 text-sm font-bold leading-6 text-slate-600">Deployed over the initial 14 days at roughly $25/day.</p>
                  </div>
                  <div className="border-[3px] border-slate-950 bg-white p-5">
                    <p className="text-4xl font-black tracking-[-0.06em]">$150</p>
                    <p className="mt-2 text-sm font-bold leading-6 text-slate-600">Held as an active ad-spend reserve buffer for continued campaign activity.</p>
                  </div>
                </div>
              </div>

              <div className="border-[3px] border-slate-950 bg-[#d8ccff] p-6 shadow-[8px_9px_0_#0f172a] sm:p-8">
                <p className="text-xs font-black uppercase tracking-[0.16em]">Continue after the sprint</p>
                <div className="mt-3 flex flex-wrap items-end gap-2">
                  <span className="text-6xl font-black tracking-[-0.07em]">$399</span>
                  <span className="pb-2 text-sm font-black">/ month</span>
                </div>
                <p className="mt-4 text-base font-semibold leading-7 text-slate-700">
                  Ongoing ad management, creative refreshes, lead-quality tracking, monthly strategy updates, and landing-page hosting / maintenance.
                </p>
                <p className="mt-5 border-t-[3px] border-slate-950 pt-5 text-sm font-black">
                  Starts only if you choose to keep the system active after Day 14.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REAL WORK */}
      <section id="work" className="relative overflow-hidden bg-white px-4 py-16 sm:px-7 sm:py-20 lg:px-10 lg:py-24">
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{ backgroundImage: "radial-gradient(#2563eb 1px, transparent 1px)", backgroundSize: "25px 25px" }}
        />
        <div className="relative mx-auto max-w-[94rem]">
          <div className="max-w-5xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">Selected work</p>
            <h2 className="mt-5 text-[clamp(3.3rem,7vw,7rem)] font-black leading-[0.84] tracking-[-0.07em]">
              Different businesses.
              <span className="block text-slate-400">Different visual worlds.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base font-semibold leading-7 text-slate-600 sm:text-lg">
              The goal is not to make every client look like Techuvo. The goal is to build around the business, offer, and customer.
            </p>
          </div>

          <div className="mt-10 grid auto-rows-fr gap-6 lg:grid-cols-3 lg:items-stretch">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} onOpen={setActiveProject} />
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="border-y-[3px] border-slate-950 bg-[#fff8e8] px-4 py-16 sm:px-7 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[94rem]">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em]">How it works</p>
              <h2 className="mt-5 text-[clamp(3.1rem,6vw,6.4rem)] font-black leading-[0.84] tracking-[-0.07em]">
                Simple enough to move fast.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["Choose your build", "Pick the package that matches what you need right now."],
                ["Send your business details", "Share your offer, branding, photos, services, service area, and goals."],
                ["We build + launch", "Techuvo turns the information into a responsive customer-facing system."],
              ].map(([title, description]) => (
                <div key={title} className="min-h-[240px] border-[3px] border-slate-950 bg-white p-5 shadow-[6px_7px_0_#0f172a] sm:p-6">
                  <div className="mb-8 h-10 w-10 rounded-full border-[3px] border-slate-950 bg-[#6ee7b7]" />
                  <h3 className="text-2xl font-black tracking-[-0.045em]">{title}</h3>
                  <p className="mt-4 text-sm font-semibold leading-6 text-slate-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ADD ONS */}
      <section className="bg-[#ffd86b] px-4 py-14 sm:px-7 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[94rem]">
          <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em]">Optional upgrades</p>
              <h2 className="mt-4 text-[clamp(3rem,6vw,6rem)] font-black leading-[0.86] tracking-[-0.07em]">Add more when it makes sense.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="border-[3px] border-slate-950 bg-white p-6 shadow-[7px_8px_0_#0f172a]">
                <p className="text-4xl font-black tracking-[-0.06em]">+$250</p>
                <h3 className="mt-3 text-2xl font-black">Multi-Page Expansion</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">Turn a 1-page funnel into a fuller business website later.</p>
              </div>
              <div className="border-[3px] border-slate-950 bg-[#d8ccff] p-6 shadow-[7px_8px_0_#0f172a]">
                <p className="text-4xl font-black tracking-[-0.06em]">+$99/mo</p>
                <h3 className="mt-3 text-2xl font-black">Instant Contact System</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">Automatically follow up with new leads quickly so they are not left waiting.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t-[3px] border-slate-950 bg-white px-4 py-16 sm:px-7 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[94rem]">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">Questions</p>
              <h2 className="mt-5 text-[clamp(3.2rem,6vw,6.5rem)] font-black leading-[0.84] tracking-[-0.07em]">Before you start.</h2>
            </div>

            <div className="space-y-4">
              {[
                { q: "Do I have to run marketing with Techuvo?", a: "No. The website packages can stand on their own. The Growth Sprint is an optional way to connect paid traffic to the funnel." },
                { q: "Are the example layouts templates?", a: "No. The examples show possible structure and direction. Your actual build is adapted to your business, offer, content, brand, and customer journey." },
                { q: "Will the website work on mobile?", a: "Yes. The builds are designed responsively for phones, tablets, laptops, and larger desktop displays." },
                { q: "What do I need to send Techuvo?", a: "Your core business details, services, offer, service area, branding, photos or videos, and any proof or content you want included." },
                { q: "What happens after the 14-Day Growth Sprint?", a: "You can stop there or choose to continue with the $399/month optimization retainer. Ongoing management does not begin unless you elect to continue." },
                { q: "Can I expand later?", a: "Yes. A focused funnel can be expanded into a larger website later, and additional functionality can be scoped as the business grows." },
              ].map((item, index) => {
                const opened = openFaq === index;
                return (
                  <div key={item.q} className={`overflow-hidden border-[3px] border-slate-950 shadow-[5px_6px_0_#0f172a] ${opened ? "bg-[#aeecef]" : "bg-[#fff8e8]"}`}>
                    <button type="button" onClick={() => setOpenFaq((current) => (current === index ? -1 : index))} className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6">
                      <span className="text-base font-black leading-6 sm:text-lg">{item.q}</span>
                      <motion.span animate={{ rotate: opened ? 45 : 0 }} className="grid h-10 w-10 shrink-0 place-items-center rounded-full border-[3px] border-slate-950 bg-yellow-300 text-xl font-black">+</motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {opened && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                          <div className="border-t-[3px] border-slate-950 px-5 py-5 text-sm font-semibold leading-7 text-slate-700 sm:px-6 sm:text-base">{item.a}</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="start" className="relative overflow-hidden border-t-[3px] border-slate-950 bg-[#d8ccff] px-4 py-16 sm:px-7 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[94rem]">
          <div className="grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em]">You don't need another random website.</p>
              <h2 className="mt-5 max-w-[10ch] text-[clamp(3.5rem,8vw,8rem)] font-black leading-[0.82] tracking-[-0.075em]">
                You need somewhere customers can land.
              </h2>
              <p className="mt-7 max-w-2xl text-base font-semibold leading-7 text-slate-700 sm:text-lg">
                Choose a package or text Techuvo first if you want help deciding which build matches your business.
              </p>
            </div>
            <div className="grid gap-3">
              <a href="#services" className="inline-flex min-h-16 items-center justify-center gap-3 rounded-full border-[3px] border-slate-950 bg-slate-950 px-7 text-base font-black text-white shadow-[6px_7px_0_#f7c948] transition hover:-translate-y-1">
                View website packages
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href={contactHref("Techuvo's website and growth services")} className="inline-flex min-h-16 items-center justify-center gap-3 rounded-full border-[3px] border-slate-950 bg-white px-7 text-base font-black shadow-[6px_7px_0_#0f172a] transition hover:-translate-y-1">
                Text Techuvo
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
      </AnimatePresence>

      <AnimatePresence>
        {activePackage && <PackageExamples packageItem={activePackage} onClose={() => setActivePackage(null)} />}
      </AnimatePresence>
    </main>
  );
}

export default WebsiteOffer;
