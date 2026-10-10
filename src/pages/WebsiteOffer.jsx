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
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";


const projects = [
  {
    id: "davis",
    number: "01",
    name: "Davis Asphalt",
    category: "Contractor Website",
    tagline: "A confident digital presence for an asphalt business.",
    description:
      "A bold, industry-specific website showcase for Davis Asphalt, built around clear messaging, strong visual hierarchy, service presentation, and a responsive layout.",
    build:
      "The design brings an industrial, practical visual language to a contractor website, with a clear path to learn about the business and its services.",
    url: "https://gdbtee1.github.io/davis-asphalt/",
    accent: "#f3bf62",
    secondary: "#151b24",
    icon: ShieldCheck,
    bullets: [
      "Trade-focused visual design",
      "Responsive development",
      "Service-led layout",
      "Clear conversion paths",
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
    id: "ryne",
    number: "03",
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

  // Davis Asphalt: an industrial, asphalt-themed graphic in the same card system.
  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-[#171d24] p-5 text-[#fff5e2]">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative z-10 flex items-start justify-between gap-3">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#f3bf62]">Davis Asphalt</p>
          <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.14em] text-white/60">Contractor website</p>
        </div>
        <span className="border-2 border-[#f3bf62] px-2 py-1 text-[9px] font-black uppercase tracking-wider">Built by Techuvo</span>
      </div>
      <div className="relative z-10 mt-auto pb-4">
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <p className="max-w-[11ch] text-[clamp(2.7rem,4vw,4rem)] font-black uppercase leading-[0.85] tracking-[-0.065em]">
            BUILT<br />TO LAST<span className="text-[#f3bf62]">.</span>
          </p>
          <div className="mt-5 flex items-center gap-3">
            <span className="h-[3px] w-12 bg-[#f3bf62]" />
            <span className="text-[9px] font-black uppercase tracking-[0.18em] text-[#f3bf62]">Explore the build ↗</span>
          </div>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute bottom-0 right-0 h-24 w-28 bg-[#f3bf62] [clip-path:polygon(100%_0,100%_100%,0_100%)] sm:h-32 sm:w-40" />
      <div className="pointer-events-none absolute bottom-0 right-6 h-14 w-5 -skew-x-[20deg] bg-[#171d24] sm:right-9 sm:h-20 sm:w-7" />
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
    id: "local-professional",
    eyebrow: "Tier 1 · Local presence",
    name: "The Local Professional",
    price: "$1,499",
    accent: "#aeecef",
    summary: "A complete, modern multi-page website built to establish instant market credibility and capture local search traffic.",
    bestFor: "Local contractors, boutique service providers, and regional businesses needing a pristine digital presence.",
    features: [
      "Custom multi-page layout (Home, Services, About, Contact)",
      "Mobile-responsive design optimized for speed and conversion",
      "Direct contact form and secure lead routing",
      "Google Business Profile conversion mapping",
      "Built-in SEO foundations for local search",
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
    id: "business-growth",
    eyebrow: "Tier 2 · Website + launch ads",
    name: "The Business Growth Website + Launch Ads",
    price: "$3,499",
    accent: "#ffd86b",
    summary: "An elite, full-scale digital presence complete with an initial managed ad campaign to jumpstart your lead pipeline.",
    bestFor: "Established growing businesses that need deep credibility, a high-converting multi-page site, and immediate launch traffic.",
    features: [
      "Complete custom multi-page architecture (7+ pages, scoped to project)",
      "Dedicated service breakdown pages and interactive project galleries",
      "Advanced custom UI styling and visual hierarchy",
      "$1,500 initial managed ad-spend allocation included in the one-time price",
      "Automated lead tracking, conversion analytics setup, and transition options for a separate growth retainer",
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
    id: "web-app-growth",
    eyebrow: "Tier 3 · Custom systems",
    name: "The Custom Web Application & Growth Suite",
    price: "$6,999",
    accent: "#d6c7ff",
    summary: "Heavy-duty digital architecture, custom database integration, and an aggressive, fully-funded launch ad campaign.",
    bestFor: "Businesses requiring complex functionality, custom client portals, and a larger initial traffic push.",
    features: [
      "Fully custom-coded application architecture",
      "Backend database or CRM integration (e.g. Supabase / automated pipelines)",
      "Advanced custom interactive components (e.g. Three.js / custom UI animations)",
      "$3,000 initial managed ad-spend allocation included in the one-time price",
      "Security hardening, automated workflows, and priority onboarding for separately scoped monthly management",
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


function RyneHeroPreview() {
  return (
    <a
      href="https://rynewrites.com/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Explore Ryne Writes, a live website built by Techuvo (opens in a new tab)"
      className="techuvo-ryne group relative block h-[245px] w-full overflow-hidden bg-[#24132b] text-[#fff5df] sm:h-[295px] lg:h-[320px] xl:h-[340px]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40" style={{backgroundImage: "linear-gradient(rgba(255,192,158,.14) 1px, transparent 1px),linear-gradient(90deg,rgba(255,192,158,.14) 1px,transparent 1px)", backgroundSize: "18px 18px"}} />
      <div className="absolute inset-x-0 top-0 z-20 flex items-start justify-between gap-3 p-4 sm:p-5">
        <div className="min-w-0">
          <p className="text-[9px] font-black uppercase tracking-[.16em] text-[#ffd166] sm:text-[10px]">Featured client project</p>
          <h3 className="mt-1 text-2xl font-black tracking-[-.05em] sm:text-3xl">Ryne Writes<span className="text-[#ff907f]">.</span></h3>
          <p className="mt-1 hidden text-xs font-semibold text-[#d8bfae] sm:block">Interactive portfolio experience</p>
        </div>
        <div className="shrink-0 border-2 border-[#ffc09e] bg-[#8f2436] px-2 py-2 text-[9px] font-black uppercase tracking-wider shadow-[3px_3px_0_#100a12]">LIVE SITE ↗</div>
      </div>
      <motion.div
        className="ryne-sprite-position pointer-events-none absolute inset-x-0 top-[30px] z-10 flex justify-center sm:top-[42px] lg:top-[47px]"
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="ryne-sprite-scale">
          <div className="pixel-avatar-wrapper">
            <div className="pixel-avatar character-mario outfit-plumber">
              <div className="avatar-shadow" />
              <div className="avatar-character">
                <div className="avatar-head">
                  <div className="avatar-cap"><span className="avatar-cap-badge">M</span></div>
                  <div className="avatar-ear avatar-ear-left" /><div className="avatar-ear avatar-ear-right" />
                  <div className="avatar-face">
                    <span className="avatar-eye avatar-eye-left" /><span className="avatar-eye avatar-eye-right" />
                    <span className="avatar-nose" /><span className="avatar-mustache avatar-mustache-left" /><span className="avatar-mustache avatar-mustache-right" />
                  </div>
                </div>
                <div className="avatar-neck" />
                <div className="avatar-body">
                  <div className="avatar-shirt" />
                  <div className="avatar-overalls"><span className="overall-strap overall-strap-left" /><span className="overall-strap overall-strap-right" /><span className="overall-button overall-button-left" /><span className="overall-button overall-button-right" /><span className="overall-pocket" /></div>
                  <div className="avatar-arm avatar-arm-left" /><div className="avatar-arm avatar-arm-right" />
                </div>
                <div className="avatar-hands"><span className="avatar-hand avatar-hand-left" /><span className="avatar-hand avatar-hand-right" /></div>
                <div className="avatar-legs"><div className="avatar-leg avatar-leg-left" /><div className="avatar-leg avatar-leg-right" /></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="absolute bottom-3 left-1/2 z-20 flex w-[calc(100%-28px)] -translate-x-1/2 items-center justify-center gap-2 border-[3px] border-[#100a12] bg-[#ffd166] px-3 py-3 text-center text-[11px] font-black uppercase tracking-[.08em] text-[#100a12] shadow-[4px_4px_0_#8f2436] transition-transform duration-200 group-hover:-translate-y-1 sm:bottom-5 sm:w-auto sm:px-6 sm:text-xs">
        Click to explore a website we built <ExternalLink className="h-4 w-4 shrink-0" />
      </div>
      <style>{`.techuvo-ryne .pixel-avatar-wrapper{
  display: grid;
  justify-items: center;
}
.techuvo-ryne .pixel-avatar{
  position: relative;
  width: 220px;
  height: 330px;
  image-rendering: pixelated;
}
.techuvo-ryne .avatar-character{
  position: absolute;
  top: 25px;
  left: 50%;
  width: 140px;
  height: 260px;
  transform: translateX(-50%);
}
.techuvo-ryne .avatar-shadow{
  position: absolute;
  bottom: 12px;
  left: 50%;
  width: 150px;
  height: 24px;
  background: rgba(0, 0, 0, 0.42);
  transform: translateX(-50%);
  clip-path: polygon(
    10% 25%,
    90% 25%,
    100% 75%,
    85% 100%,
    15% 100%,
    0 75%
  );
}
.techuvo-ryne .avatar-head{
  position: absolute;
  top: 22px;
  left: 29px;
  z-index: 4;
  width: 82px;
  height: 78px;
  border: 7px solid #130a10;
  background: #b96d47;
  box-shadow:
    inset 0 -12px 0 rgba(74, 28, 23, 0.15),
    7px 7px 0 rgba(0, 0, 0, 0.19);
}
.techuvo-ryne .avatar-face{
  position: absolute;
  inset: 0;
}
.techuvo-ryne .avatar-eye{
  position: absolute;
  top: 31px;
  width: 8px;
  height: 12px;
  background: #160b10;
}
.techuvo-ryne .avatar-eye-left{
  left: 18px;
}
.techuvo-ryne .avatar-eye-right{
  right: 18px;
}
.techuvo-ryne .avatar-ear{
  position: absolute;
  top: 27px;
  width: 10px;
  height: 25px;
  background: #b96d47;
}
.techuvo-ryne .avatar-ear-left{
  left: -17px;
}
.techuvo-ryne .avatar-ear-right{
  right: -17px;
}
.techuvo-ryne .avatar-neck{
  position: absolute;
  top: 93px;
  left: 58px;
  z-index: 3;
  width: 25px;
  height: 26px;
  background: #a85d3b;
}
.techuvo-ryne .avatar-body{
  position: absolute;
  top: 110px;
  left: 20px;
  z-index: 2;
  width: 100px;
  height: 100px;
}
.techuvo-ryne .avatar-shirt{
  position: absolute;
  inset: 0 10px;
  border: 7px solid #130a10;
  background: #f5ecdb;
}
.techuvo-ryne .avatar-arm{
  position: absolute;
  top: 13px;
  width: 22px;
  height: 78px;
  border: 6px solid #130a10;
  background: #b96d47;
}
.techuvo-ryne .avatar-arm-left{
  left: -8px;
}
.techuvo-ryne .avatar-arm-right{
  right: -8px;
}
.techuvo-ryne .avatar-legs{
  position: absolute;
  top: 202px;
  left: 37px;
  z-index: 1;
  display: flex;
  gap: 4px;
}
.techuvo-ryne .avatar-leg{
  width: 31px;
  height: 55px;
  border: 6px solid #130a10;
  background: #6f3347;
}
.techuvo-ryne .avatar-leg::after{
  position: absolute;
  bottom: -17px;
  width: 34px;
  height: 15px;
  content: "";
  border: 5px solid #130a10;
  background: #2c1b26;
}
.techuvo-ryne .avatar-leg-left::after{
  left: -6px;
}
.techuvo-ryne .avatar-leg-right::after{
  right: -6px;
}
.techuvo-ryne .avatar-head{
  overflow: visible;
  background: #d58a5d;
}
.techuvo-ryne .avatar-cap{
  position: absolute;
  top: -28px;
  left: -8px;
  z-index: 12;
  width: 98px;
  height: 43px;
  border: 6px solid #130a10;
  border-bottom-width: 4px;
  background: #d83d3d;
  box-shadow: inset 0 -10px 0 rgba(0, 0, 0, 0.16);
  clip-path: polygon(12% 0, 78% 0, 100% 45%, 96% 76%, 73% 76%, 68% 100%, 18% 100%, 15% 73%, 0 73%, 0 38%);
}
.techuvo-ryne .avatar-cap-badge{
  position: absolute;
  top: 7px;
  left: 42px;
  display: grid;
  width: 28px;
  height: 25px;
  border: 4px solid #130a10;
  font-family: "Press Start 2P", monospace;
  font-size: 10px;
  color: #130a10;
  background: #fff5df;
  place-items: center;
}
.techuvo-ryne .avatar-face{
  z-index: 6;
}
.techuvo-ryne .avatar-nose{
  position: absolute;
  top: 35px;
  left: 50%;
  z-index: 8;
  width: 22px;
  height: 17px;
  border: 4px solid #130a10;
  background: #e39a6b;
  transform: translateX(-50%);
}
.techuvo-ryne .avatar-mustache{
  position: absolute;
  bottom: 8px;
  z-index: 7;
  width: 27px;
  height: 13px;
  background: #27130f;
}
.techuvo-ryne .avatar-mustache-left{
  left: 15px;
  clip-path: polygon(0 35%, 40% 0, 100% 30%, 88% 100%, 20% 85%);
}
.techuvo-ryne .avatar-mustache-right{
  right: 15px;
  clip-path: polygon(100% 35%, 60% 0, 0 30%, 12% 100%, 80% 85%);
}
.techuvo-ryne .avatar-shirt{
  inset: 0;
  border: 7px solid #130a10;
  background: #d83d3d;
}
.techuvo-ryne .avatar-overalls{
  position: absolute;
  inset: 24px 14px 0;
  z-index: 3;
  border: 5px solid #130a10;
  background: #326fc2;
}
.techuvo-ryne .overall-strap{
  position: absolute;
  top: -28px;
  width: 14px;
  height: 43px;
  border: 4px solid #130a10;
  background: #326fc2;
}
.techuvo-ryne .overall-strap-left{ left: 8px; }
.techuvo-ryne .overall-strap-right{ right: 8px; }
.techuvo-ryne .overall-button{
  position: absolute;
  top: 8px;
  width: 9px;
  height: 9px;
  background: var(--gold);
}
.techuvo-ryne .overall-button-left{ left: 12px; }
.techuvo-ryne .overall-button-right{ right: 12px; }
.techuvo-ryne .overall-pocket{
  position: absolute;
  left: 50%;
  bottom: 10px;
  width: 30px;
  height: 22px;
  border: 4px solid #130a10;
  transform: translateX(-50%);
}
.techuvo-ryne .avatar-hands{
  position: absolute;
  top: 180px;
  left: 1px;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  width: 138px;
}
.techuvo-ryne .avatar-hand{
  width: 25px;
  height: 24px;
  border: 5px solid #130a10;
  background: #fff5df;
}
.techuvo-ryne .ryne-sprite-scale {width:220px;height:330px;transform:scale(.57);transform-origin:top center}
@media(min-width:640px){.techuvo-ryne .ryne-sprite-scale {transform:scale(.72)}}
@media(min-width:1024px){.techuvo-ryne .ryne-sprite-scale {transform:scale(.79)}}
.techuvo-ryne .avatar-cap-badge {font-family: monospace}
@media(prefers-reduced-motion:reduce){.techuvo-ryne .ryne-sprite-scale{animation:none}}
`}</style>
    </a>
  );
}

function WebsiteOffer() {
  const [activeProject, setActiveProject] = useState(null);
  const [activePackage, setActivePackage] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);
  const [brandMode, setBrandMode] = useState(0);
  const [selectedTier, setSelectedTier] = useState("Tier 1 — $1,499");
  const [inquiry, setInquiry] = useState({ name: "", business: "", niche: "", email: "", phone: "", message: "", website: "" });
  const [leadStatus, setLeadStatus] = useState("idle");
  const [leadMessage, setLeadMessage] = useState("");
  const [bookingStep, setBookingStep] = useState("inquiry");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [bookingStatus, setBookingStatus] = useState("idle");
  const [bookingError, setBookingError] = useState("");
  const [calendarMonth, setCalendarMonth] = useState(() => {
    const parts = new Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", year: "numeric", month: "2-digit" }).formatToParts(new Date());
    return `${parts.find((p) => p.type === "year").value}-${parts.find((p) => p.type === "month").value}`;
  });
  const timeSlots = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
  const formatTime = (time) => new Date(`2000-01-01T${time}:00`).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
  const formatDate = (date) => new Date(`${date}T12:00:00`).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
  // Use Eastern time for every booking calculation, regardless of visitor location.
  const easternNow = () => {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/New_York", year: "numeric", month: "2-digit", day: "2-digit",
      hour: "2-digit", minute: "2-digit", hourCycle: "h23",
    }).formatToParts(new Date());
    const read = (type) => parts.find((part) => part.type === type).value;
    return { date: `${read("year")}-${read("month")}-${read("day")}`, time: `${read("hour")}:${read("minute")}` };
  };
  const todayET = easternNow().date;
  const isPastSlot = (date, time) => {
    const now = easternNow();
    return !date || date < now.date || (date === now.date && time <= now.time);
  };
  const calendarDays = (() => {
    const [year, month] = calendarMonth.split("-").map(Number);
    const first = new Date(Date.UTC(year, month - 1, 1));
    const days = new Date(Date.UTC(year, month, 0)).getUTCDate();
    return [ ...Array(first.getUTCDay()).fill(null), ...Array.from({ length: days }, (_, i) => `${calendarMonth}-${String(i + 1).padStart(2, "0")}`) ];
  })();
  const changeMonth = (delta) => {
    const [year, month] = calendarMonth.split("-").map(Number);
    const next = new Date(Date.UTC(year, month - 1 + delta, 1));
    setCalendarMonth(`${next.getUTCFullYear()}-${String(next.getUTCMonth() + 1).padStart(2, "0")}`);
  };
  const calendarUrl = bookingDate && bookingTime ? (() => {
    const compactDate = bookingDate.replaceAll("-", "");
    const compactTime = bookingTime.replace(":", "") + "00";
    const endHour = String(Number(bookingTime.slice(0, 2)) + 0).padStart(2, "0");
    const endMinute = String(Number(bookingTime.slice(3)) + 15).padStart(2, "0");
    const endTime = Number(endMinute) >= 60 ? `${String(Number(endHour) + 1).padStart(2, "0")}${String(Number(endMinute) - 60).padStart(2, "0")}00` : `${endHour}${endMinute}00`;
    const params = new URLSearchParams({ action: "TEMPLATE", text: "Techuvo Website Strategy Call", dates: `${compactDate}T${compactTime}/${compactDate}T${endTime}`, ctz: "America/New_York", details: `Website consultation for ${inquiry.business}\nPackage: ${selectedTier}\nPhone: ${inquiry.phone}` });
    return `https://calendar.google.com/calendar/render?${params.toString()}`;
  })() : "";

  const submitBooking = async (event) => {
    event.preventDefault();
    if (bookingStatus === "submitting" || !bookingDate || !bookingTime) return;
    if (isPastSlot(bookingDate, bookingTime)) { setBookingError("Please select an upcoming date and time."); return; }
    setBookingStatus("submitting"); setBookingError("");
    try {
      const response = await fetch("https://formsubmit.co/ajax/techuvodesign@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `TECHUVO STRATEGY CALL — ${inquiry.name} — ${bookingDate} ${formatTime(bookingTime)} ET`,
          _replyto: inquiry.email.trim(),
          form_type: "Strategy call booking",
          name: inquiry.name.trim(),
          business_name: inquiry.business.trim(),
          niche: inquiry.niche.trim(),
          email: inquiry.email.trim(),
          phone: inquiry.phone.trim(),
          selected_tier: selectedTier,
          date: bookingDate,
          time: formatTime(bookingTime),
          time_zone: "America/New_York (Eastern Time)",
          duration: "15 minutes",
          project_details: inquiry.message.trim(),
        }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.success === false || result.success === "false") throw new Error(result.message || "Unable to send your booking.");
      setBookingStatus("success");
      setBookingStep("booked");
    } catch (error) {
      setBookingStatus("error");
      setBookingError(error?.message || "Booking didn't send. Please try again.");
    }
  };

  const selectPackage = (item) => {
    const index = servicePackages.findIndex((entry) => entry.id === item.id);
    setSelectedTier(`Tier ${index + 1} — ${item.price}`);
    document.getElementById("inquiry")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const submitLead = async (event) => {
    event.preventDefault();
    if (leadStatus === "submitting") return;
    if (inquiry.website) return; // honeypot for automated submissions
    setLeadStatus("submitting");
    setLeadMessage("");
    try {
      const params = new URLSearchParams(window.location.search);
      // FormSubmit requires the recipient to activate this destination from its confirmation email.
      const response = await fetch("https://formsubmit.co/ajax/techuvodesign@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Techuvo website inquiry — ${selectedTier}`,
          _captcha: "true",
          _replyto: inquiry.email.trim(),
          name: inquiry.name.trim(),
          business_name: inquiry.business.trim(),
          business_niche: inquiry.niche.trim(),
          email: inquiry.email.trim(),
          phone: inquiry.phone.trim(),
          selected_tier: selectedTier,
          project_details: inquiry.message.trim(),
          lead_source: "Bloomfield Hills Google Ads landing page",
          page_url: window.location.href,
          utm_source: params.get("utm_source") || "",
          utm_campaign: params.get("utm_campaign") || "",
          gclid: params.get("gclid") || "",
        }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.success === "false" || result.success === false) {
        throw new Error(result.message || "Submission failed. Please try again.");
      }
      setLeadStatus("success");
      setLeadMessage("Your inquiry is received. Choose your call time to finish.");
      setBookingStep("calendar");
      setTimeout(() => document.getElementById("inquiry")?.scrollIntoView({ behavior: "smooth" }), 60);
      if (typeof window.gtag === "function") window.gtag("event", "generate_lead", { selected_tier: selectedTier });
    } catch (error) {
      setLeadStatus("error");
      setLeadMessage(error.message || "Unable to send right now. Please try again.");
    }
  };

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
                href="#inquiry"
                className="group inline-flex min-h-[60px] items-center justify-center gap-3 rounded-full border-[3px] border-slate-950 bg-yellow-300 px-7 py-4 text-sm font-black shadow-[6px_7px_0_#0f172a] transition hover:-translate-y-1 sm:text-base"
              >
                Request a website consultation
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

                <RyneHeroPreview />
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -7, 0], rotate: [-1, 1, -1] }}
              transition={{ duration: 3.2, repeat: Infinity }}
              className="absolute -bottom-5 left-2 rounded-[1rem] border-[3px] border-slate-950 bg-white px-4 py-3 shadow-[5px_6px_0_#0f172a] sm:-left-5"
            >
              <p className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-500">Featured build</p>
              <p className="mt-1 text-sm font-black">Ryne Writes</p>
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
                      <span className="text-[clamp(2.9rem,10vw,4.5rem)] font-black tracking-[-0.07em]">{item.price}</span>
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
                      <a
                        href={[
                          "https://rynewrites.com/",
                          "https://gdbtee1.github.io/davis-asphalt/",
                          "https://gdbtee1.github.io/mojoy-records/#/",
                        ][index]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex min-h-14 items-center justify-between gap-3 border-[3px] border-slate-950 bg-[#fff8e8] px-5 text-left text-sm font-black shadow-[5px_6px_0_#0f172a] transition hover:-translate-y-1"
                      >
                        <span>
                          <span className="block text-[9px] uppercase tracking-[0.15em] text-slate-500">Live website</span>
                          View example site
                        </span>
                        <ArrowRight className="h-5 w-5 -rotate-45 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </a>

                      <button
                        type="button"
                        onClick={() => selectPackage(item)}
                        className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border-[3px] border-slate-950 bg-slate-950 px-5 text-sm font-black text-white shadow-[5px_6px_0_#f7c948] transition hover:-translate-y-1"
                      >
                        Inquire about Tier {index + 1}
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* INQUIRY — after pricing packages */}
      <section id="inquiry" className="scroll-mt-4 border-b-[3px] border-slate-950 bg-[#bfe2ff] px-4 py-12 sm:px-7 sm:py-16 lg:px-10">
        <div className="mx-auto grid max-w-[94rem] gap-8 lg:grid-cols-[.75fr_1.25fr] lg:gap-12">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">Bloomfield Hills & surrounding communities</p>
            <h2 className="mt-4 max-w-[11ch] text-[clamp(2.9rem,6vw,5.8rem)] font-black leading-[0.9] tracking-[-0.07em]">Tell us about your next website.</h2>
            <p className="mt-5 max-w-md text-base font-semibold leading-7 text-slate-700">Choose an investment tier and send a few details. We'll review your goals and discuss the best path forward.</p>
            <p className="mt-5 text-sm font-black">Projects start at $1,499 one-time.</p>
          </div>
          {bookingStep === "inquiry" ? (
          <form onSubmit={submitLead} className="grid gap-4 border-[3px] border-slate-950 bg-white p-5 shadow-[8px_9px_0_#0f172a] sm:grid-cols-2 sm:p-8">
            <label className="grid gap-2 text-xs font-black uppercase tracking-wide">Your name *
              <input required autoComplete="name" value={inquiry.name} onChange={(e) => setInquiry((s) => ({ ...s, name: e.target.value }))} className="min-h-12 w-full min-w-0 border-2 border-slate-950 px-3 text-base font-semibold normal-case" placeholder="Full name" />
            </label>
            <label className="grid gap-2 text-xs font-black uppercase tracking-wide">Business name *
              <input required value={inquiry.business} onChange={(e) => setInquiry((s) => ({ ...s, business: e.target.value }))} className="min-h-12 w-full min-w-0 border-2 border-slate-950 px-3 text-base font-semibold normal-case" placeholder="Your company" />
            </label>
            <label className="grid gap-2 text-xs font-black uppercase tracking-wide sm:col-span-2">Industry / business niche *
              <input required value={inquiry.niche} onChange={(e) => setInquiry((s) => ({ ...s, niche: e.target.value }))} className="min-h-12 w-full min-w-0 border-2 border-slate-950 px-3 text-base font-semibold normal-case" placeholder="E.g. roofing, HVAC, dental, legal, boutique retail" />
            </label>
            <label className="grid gap-2 text-xs font-black uppercase tracking-wide">Business email *
              <input required type="email" autoComplete="email" value={inquiry.email} onChange={(e) => setInquiry((s) => ({ ...s, email: e.target.value }))} className="min-h-12 w-full min-w-0 border-2 border-slate-950 px-3 text-base font-semibold normal-case" placeholder="you@business.com" />
            </label>
            <label className="grid gap-2 text-xs font-black uppercase tracking-wide">Phone *
              <input required type="tel" autoComplete="tel" value={inquiry.phone} onChange={(e) => setInquiry((s) => ({ ...s, phone: e.target.value }))} className="min-h-12 w-full min-w-0 border-2 border-slate-950 px-3 text-base font-semibold normal-case" placeholder="(248) 555-0123" />
            </label>
            <label className="grid gap-2 text-xs font-black uppercase tracking-wide sm:col-span-2">Website package you're inquiring about *
              <select required value={selectedTier} onChange={(e) => setSelectedTier(e.target.value)} className="min-h-12 w-full min-w-0 border-2 border-slate-950 bg-white px-3 text-base font-semibold normal-case">
                {servicePackages.map((item, index) => <option key={item.id} value={`Tier ${index + 1} — ${item.price}`}>Tier {index + 1} — {item.price} · {item.name}</option>)}
                <option value="Not sure — help me choose">Not sure — help me choose</option>
              </select>
            </label>
            <label className="grid gap-2 text-xs font-black uppercase tracking-wide sm:col-span-2">What are you looking to build?
              <textarea rows={3} value={inquiry.message} onChange={(e) => setInquiry((s) => ({ ...s, message: e.target.value }))} className="w-full min-w-0 resize-y border-2 border-slate-950 px-3 py-3 text-base font-semibold normal-case" placeholder="Tell us about your business, goals, and timeline..." />
            </label>
            <div className="hidden" aria-hidden="true"><label>Website <input tabIndex={-1} autoComplete="off" value={inquiry.website} onChange={(e) => setInquiry((s) => ({ ...s, website: e.target.value }))} /></label></div>
            <button type="submit" disabled={leadStatus === "submitting"} className="flex min-h-14 items-center justify-center gap-2 rounded-full border-[3px] border-slate-950 bg-blue-600 px-6 text-sm font-black text-white shadow-[5px_6px_0_#0f172a] disabled:opacity-60 sm:col-span-2">
              {leadStatus === "submitting" ? "Sending inquiry..." : "Request my website consultation"} <ArrowRight className="h-5 w-5" />
            </button>
            {leadMessage && <p role="status" className={`text-sm font-bold sm:col-span-2 ${leadStatus === "error" ? "text-red-700" : "text-green-800"}`}>{leadMessage}</p>}
            <p className="text-xs font-semibold text-slate-500 sm:col-span-2">No payment required to inquire. Your contact details are used to respond to your request.</p>
          </form>
          ) : bookingStep === "calendar" ? (
            <form onSubmit={submitBooking} className="border-[3px] border-slate-950 bg-white p-5 shadow-[8px_9px_0_#0f172a] sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center border-[3px] border-slate-950 bg-yellow-300 shadow-[3px_4px_0_#0f172a]"><CalendarDays className="h-6 w-6" /></span>
                <div><p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700">Step 2 of 2</p><h3 className="text-2xl font-black tracking-tight sm:text-3xl">Choose your call time.</h3></div>
              </div>
              <p className="mt-5 text-sm font-semibold leading-6 text-slate-600">Thanks, {inquiry.name.split(" ")[0]}! Your inquiry for {inquiry.business} has been received. Pick a 15-minute strategy call time below.</p>
              <p className="mt-6 text-xs font-black uppercase tracking-wider">Select a day · Eastern Time</p>
              <div className="mt-3 w-full min-w-0 overflow-hidden border-[3px] border-slate-950 bg-[#fff8e8] p-3 sm:p-5">
                <div className="flex items-center justify-between gap-3">
                  <button type="button" aria-label="Previous month" disabled={calendarMonth <= todayET.slice(0, 7)} onClick={() => changeMonth(-1)} className="grid h-10 w-10 shrink-0 place-items-center border-2 border-slate-950 bg-white disabled:opacity-30"><ChevronLeft className="h-5 w-5" /></button>
                  <span className="min-w-0 text-center text-base font-black sm:text-lg">{new Date(`${calendarMonth}-01T12:00:00`).toLocaleDateString("en-US", { month: "long", year: "numeric" })}</span>
                  <button type="button" aria-label="Next month" onClick={() => changeMonth(1)} className="grid h-10 w-10 shrink-0 place-items-center border-2 border-slate-950 bg-white"><ChevronRight className="h-5 w-5" /></button>
                </div>
                <div className="mt-4 grid grid-cols-7 gap-1 text-center text-[10px] font-black uppercase text-slate-500 sm:gap-2 sm:text-xs">
                  {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => <span key={day}>{day}</span>)}
                  {calendarDays.map((date, index) => date ? (
                    <button key={date} type="button" disabled={date < todayET} aria-label={formatDate(date)} aria-pressed={bookingDate === date} onClick={() => { setBookingDate(date); setBookingTime(""); setBookingError(""); }} className={`aspect-square min-w-0 border-2 text-xs font-black transition sm:text-sm ${bookingDate === date ? "border-slate-950 bg-yellow-300 shadow-[2px_2px_0_#0f172a]" : "border-transparent bg-white hover:border-slate-950"} disabled:cursor-not-allowed disabled:bg-transparent disabled:text-slate-300`}>{Number(date.slice(-2))}</button>
                  ) : <span key={`empty-${index}`} />)}
                </div>
              </div>
              <p className="mt-6 text-xs font-black uppercase tracking-wider">Select a time · Eastern Time</p>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {timeSlots.map((time) => (
                  <button key={time} type="button" disabled={isPastSlot(bookingDate, time)} onClick={() => { setBookingTime(time); setBookingError(""); }} aria-pressed={bookingTime === time} className={`min-h-12 min-w-0 border-[3px] border-slate-950 px-1 text-xs font-black transition hover:-translate-y-0.5 sm:px-2 sm:text-sm ${bookingTime === time ? "bg-yellow-300 shadow-[3px_4px_0_#0f172a]" : "bg-[#fff8e8]"} disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0`}>{formatTime(time)}</button>
                ))}
              </div>
              {bookingDate && bookingTime && <p className="mt-6 border-l-[5px] border-blue-600 bg-[#bfe2ff] p-4 text-sm font-black">{formatDate(bookingDate)} at {formatTime(bookingTime)} ET</p>}
              <p className="mt-4 text-xs font-semibold leading-5 text-slate-500">Booking requests are emailed to Techuvo. These time slots aren't synchronized to a live availability calendar, so we'll contact you if an adjustment is necessary.</p>
              {bookingError && <p role="alert" className="mt-4 text-sm font-bold text-red-700">{bookingError}</p>}
              <button type="submit" disabled={!bookingDate || !bookingTime || isPastSlot(bookingDate, bookingTime) || bookingStatus === "submitting"} className="mt-6 flex min-h-14 w-full items-center justify-center gap-2 rounded-full border-[3px] border-slate-950 bg-blue-600 px-6 text-base font-black text-white shadow-[5px_6px_0_#0f172a] disabled:opacity-50">{bookingStatus === "submitting" ? "Booking..." : "Book my strategy call"}<ArrowRight className="h-5 w-5" /></button>
            </form>
          ) : (
            <div role="status" className="border-[3px] border-slate-950 bg-white p-6 shadow-[8px_9px_0_#0f172a] sm:p-9">
              <span className="grid h-14 w-14 place-items-center rounded-full border-[3px] border-slate-950 bg-[#6ee7b7] shadow-[4px_5px_0_#0f172a]"><Check className="h-7 w-7" strokeWidth={4}/></span>
              <p className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-blue-700">Strategy call</p>
              <h3 className="mt-2 text-[clamp(2.5rem,6vw,4rem)] font-black leading-[0.9] tracking-[-0.06em]">You're booked!</h3>
              <p className="mt-4 text-lg font-black">Please add your strategy call to your calendar.</p>
              <p className="mt-3 text-base font-semibold">{formatDate(bookingDate)} · {formatTime(bookingTime)} Eastern</p>
              <p className="mt-2 text-sm font-semibold text-slate-600">{inquiry.name} · {inquiry.business} · {selectedTier}</p>
              <a href={calendarUrl} target="_blank" rel="noreferrer" className="mt-7 inline-flex min-h-14 items-center justify-center gap-2 rounded-full border-[3px] border-slate-950 bg-yellow-300 px-6 text-sm font-black shadow-[5px_6px_0_#0f172a]">Add to Google Calendar <CalendarDays className="h-5 w-5" /></a>
              <p className="mt-5 text-xs font-semibold leading-5 text-slate-600">Your requested time was emailed to Techuvo. You'll be contacted directly if the time needs adjusting.</p>
            </div>
          )}
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
