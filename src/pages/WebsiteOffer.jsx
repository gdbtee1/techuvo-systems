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
              Project {project.number}
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
  const [openFaq, setOpenFaq] = useState(0);

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

          <div className="mt-16 grid auto-rows-fr gap-7 sm:gap-9 lg:grid-cols-3 lg:items-stretch">
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

      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}
      <section
        id="how-it-works"
        className="relative overflow-hidden border-t-[3px] border-slate-950 bg-[#fff9ee] px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              "linear-gradient(#dbeafe 1px, transparent 1px), linear-gradient(90deg, #dbeafe 1px, transparent 1px)",
            backgroundSize: "34px 34px",
          }}
        />

        <div className="relative mx-auto max-w-[94rem]">
          <div className="mx-auto max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border-[3px] border-slate-950 bg-yellow-300 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] shadow-[4px_4px_0_#0f172a]"
            >
              <Sparkles className="h-4 w-4" />
              How it works
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="mt-6 text-[clamp(3.5rem,8vw,7.5rem)] font-black leading-[0.84] tracking-[-0.075em]"
            >
              Three steps.
              <span className="block text-blue-600">
                Then we build.
              </span>
            </motion.h2>

            <p className="mx-auto mt-7 max-w-2xl text-base font-semibold leading-7 text-slate-600 sm:text-lg">
              No complicated agency process. Start the project,
              send us what we need, and Techuvo handles the website.
            </p>
          </div>

          <div className="relative mt-16">
            {/* desktop animated path */}
            <div className="absolute left-[15%] right-[15%] top-[4.2rem] hidden h-[4px] overflow-hidden bg-slate-950 lg:block">
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-full bg-blue-600"
              />
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Start with $50",
                  description:
                    "Pay the one-time $50 setup fee to begin your website project.",
                  background: "#ffd84f",
                  badge: "$50",
                },
                {
                  number: "02",
                  title: "Send us everything",
                  description:
                    "Complete your project brief and upload your logo, photos, videos, services, pricing and other content.",
                  background: "#72dfbd",
                  badge: "UPLOAD",
                },
                {
                  number: "03",
                  title: "We build & manage it",
                  description:
                    "Techuvo designs your site and your $49/month managed plan keeps hosting, maintenance, security and support handled.",
                  background: "#bfe2ff",
                  badge: "$49/MO",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-70px",
                  }}
                  transition={{
                    delay: index * 0.12,
                    duration: 0.55,
                  }}
                  className="relative z-10"
                >
                  <div
                    className="flex h-full min-h-[330px] flex-col rounded-[2rem] border-[3px] border-slate-950 p-6 shadow-[8px_9px_0_#0f172a] sm:p-7"
                    style={{
                      backgroundColor: item.background,
                    }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="grid h-16 w-16 place-items-center rounded-full border-[3px] border-slate-950 bg-white text-lg font-black shadow-[4px_5px_0_#0f172a]">
                        {item.number}
                      </div>

                      <motion.div
                        animate={{
                          rotate: [-3, 3, -3],
                          y: [0, -4, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.4,
                        }}
                        className="rounded-full border-[3px] border-slate-950 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.12em] shadow-[3px_4px_0_#0f172a]"
                      >
                        {item.badge}
                      </motion.div>
                    </div>

                    <h3 className="mt-10 text-4xl font-black leading-[0.9] tracking-[-0.055em]">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-base font-semibold leading-7 text-slate-700">
                      {item.description}
                    </p>

                    {index < 2 && (
                      <motion.div
                        animate={{
                          y: [0, 5, 0],
                        }}
                        transition={{
                          duration: 1.8,
                          repeat: Infinity,
                        }}
                        className="mt-auto pt-7 text-3xl font-black lg:hidden"
                      >
                        ↓
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          $49 MANAGED PLAN
      ====================================================== */}
      <section className="relative overflow-hidden border-t-[3px] border-slate-950 bg-blue-600 px-5 py-24 text-white sm:px-8 sm:py-28 lg:px-12">
        <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full border-[3px] border-slate-950 bg-yellow-300" />

        <div className="absolute -bottom-20 -right-16 h-56 w-56 rounded-[35%] border-[3px] border-slate-950 bg-[#6ee7b7]" />

        <div className="relative mx-auto grid max-w-[94rem] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-100">
              Your managed website
            </p>

            <h2 className="mt-5 text-[clamp(3.5rem,7vw,7rem)] font-black leading-[0.84] tracking-[-0.07em]">
              What does
              <span className="block text-yellow-300">
                $49/month
              </span>
              cover?
            </h2>

            <p className="mt-7 max-w-xl text-base font-semibold leading-7 text-blue-100 sm:text-lg">
              Your website doesn't get handed over and forgotten.
              Techuvo continues managing the technical side.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Hosting", "Your website stays online and hosted."],
              [
                "Maintenance",
                "Routine technical maintenance remains handled.",
              ],
              [
                "Security",
                "The site receives ongoing technical security management.",
              ],
              [
                "Support",
                "You have a real person to contact when you need help.",
              ],
              [
                "Website leasing",
                "The website remains leased through the Techuvo managed website agreement.",
              ],
              [
                "Mobile ready",
                "Your build is designed for desktop, tablet and mobile.",
              ],
            ].map(([title, description], index) => (
              <motion.div
                key={title}
                initial={{
                  opacity: 0,
                  scale: 0.94,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.06,
                }}
                className="rounded-[1.5rem] border-[3px] border-slate-950 bg-white p-5 text-slate-950 shadow-[6px_7px_0_#0f172a]"
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-slate-950 bg-[#6ee7b7]">
                    <Check className="h-4 w-4" strokeWidth={4} />
                  </div>

                  <div>
                    <h3 className="text-lg font-black">
                      {title}
                    </h3>

                    <p className="mt-2 text-sm font-semibold leading-6 text-slate-500">
                      {description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}
      <section
        id="faq"
        className="relative overflow-hidden border-t-[3px] border-slate-950 bg-[#fff9ee] px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage:
              "radial-gradient(#2563eb 1px, transparent 1px)",
            backgroundSize: "25px 25px",
          }}
        />

        <div className="relative mx-auto max-w-[94rem]">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex rounded-full border-[3px] border-slate-950 bg-[#ff8c75] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] shadow-[4px_4px_0_#0f172a]"
              >
                Questions?
              </motion.div>

              <h2 className="mt-6 text-[clamp(3.5rem,7vw,7rem)] font-black leading-[0.84] tracking-[-0.07em]">
                Wait...
                <span className="block text-blue-600">
                  you probably have questions.
                </span>
              </h2>

              <p className="mt-7 max-w-lg text-base font-semibold leading-7 text-slate-600 sm:text-lg">
                Here are the things business owners usually want to
                know before starting.
              </p>

              <div className="mt-8 rounded-[1.5rem] border-[3px] border-slate-950 bg-yellow-300 p-5 shadow-[6px_7px_0_#0f172a]">
                <p className="text-xs font-black uppercase tracking-[0.15em]">
                  Still unsure?
                </p>

                <p className="mt-2 text-xl font-black">
                  Text a real person.
                </p>

                <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">
                  Your message goes directly to Techuvo — not a chatbot.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              {[
                {
                  q: "Is the $50 a one-time payment?",
                  a: "Yes. The $50 is the one-time setup fee used to begin your website project. The managed website plan is $49 per month after setup.",
                },
                {
                  q: "What is the $49/month for?",
                  a: "The managed website plan includes hosting, routine maintenance, technical security, ongoing support, and website leasing.",
                },
                {
                  q: "Is the website actually custom?",
                  a: "Yes. The website is designed and developed around your business rather than simply changing text inside the same prebuilt template.",
                },
                {
                  q: "Will my website work on phones?",
                  a: "Yes. Techuvo builds websites to work across mobile phones, tablets, laptops, and desktop screens.",
                },
                {
                  q: "Do I own the website?",
                  a: "The website is leased through Techuvo while it is under the managed website agreement. Any ownership or buyout terms are handled according to the agreement for your project.",
                },
                {
                  q: "Can I request changes?",
                  a: "Routine technical maintenance and support are included. Larger additions, redesigns, new pages, or major new functionality may require separate project scope.",
                },
                {
                  q: "What happens after I pay the $50?",
                  a: "You'll continue into the Techuvo project onboarding flow where you can provide your business details, goals, branding, photos, videos, documents, and other content needed for your website.",
                },
              ].map((item, index) => {
                const opened = openFaq === index;

                return (
                  <motion.div
                    key={item.q}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.04,
                    }}
                    className={`overflow-hidden rounded-[1.4rem] border-[3px] border-slate-950 shadow-[5px_6px_0_#0f172a] transition-colors ${
                      opened
                        ? "bg-[#bfe2ff]"
                        : "bg-white"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenFaq((current) =>
                          current === index ? -1 : index,
                        )
                      }
                      className="flex w-full items-center justify-between gap-5 p-5 text-left sm:p-6"
                    >
                      <span className="text-base font-black leading-6 sm:text-lg">
                        {item.q}
                      </span>

                      <motion.span
                        animate={{
                          rotate: opened ? 45 : 0,
                        }}
                        className="grid h-10 w-10 shrink-0 place-items-center rounded-full border-[3px] border-slate-950 bg-yellow-300 text-xl font-black shadow-[2px_3px_0_#0f172a]"
                      >
                        +
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {opened && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.28,
                          }}
                        >
                          <div className="border-t-[3px] border-slate-950 px-5 py-5 text-sm font-semibold leading-7 text-slate-700 sm:px-6 sm:text-base">
                            {item.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CONVERSION
      ====================================================== */}
      <section
        id="start"
        className="relative overflow-hidden border-t-[3px] border-slate-950 bg-yellow-300 px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [-3, 3, -3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute -left-12 top-12 h-28 w-28 rounded-[35%] border-[3px] border-slate-950 bg-[#6ee7b7] sm:left-[5%]"
        />

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="absolute -right-14 bottom-12 h-36 w-36 rounded-full border-[3px] border-slate-950 bg-[#ff8c75] sm:right-[5%]"
        />

        <div className="relative mx-auto max-w-[94rem]">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.2em]">
              Ready when you are
            </p>

            <h2 className="mt-5 text-[clamp(3.7rem,8vw,8rem)] font-black leading-[0.82] tracking-[-0.075em]">
              Your website
              <span className="block text-blue-600">
                could be next.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-base font-semibold leading-7 text-slate-700 sm:text-lg">
              Start with the $50 setup fee, or talk to Techuvo first
              if you have a question.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            {/* Payment CTA */}
            <motion.div
              whileHover={{ y: -6 }}
              className="flex min-h-[310px] flex-col rounded-[2rem] border-[3px] border-slate-950 bg-blue-600 p-6 text-white shadow-[9px_10px_0_#0f172a] sm:p-8"
            >
              <p className="text-xs font-black uppercase tracking-[0.17em] text-blue-100">
                I'm ready
              </p>

              <div className="mt-5 flex items-end justify-center gap-2">
                <span className="text-7xl font-black tracking-[-0.08em]">
                  $50
                </span>
              </div>

              <p className="mt-3 text-center text-sm font-bold text-blue-100">
                One-time setup fee
              </p>

              {/*
                REPLACE THE href BELOW WITH YOUR REAL STRIPE
                OR PAYMENT LINK ONCE YOU HAVE IT.
              */}
              <a
                href="/start/onboarding"
                className="group mt-auto flex min-h-16 items-center justify-center gap-3 rounded-full border-[3px] border-slate-950 bg-white px-6 text-base font-black text-slate-950 shadow-[5px_6px_0_#0f172a] transition hover:-translate-y-1"
              >
                Pay $50 & Start
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>

              <p className="mt-4 text-center text-[10px] font-bold uppercase tracking-[0.12em] text-blue-100">
                $49/month managed plan after setup
              </p>
            </motion.div>

            {/* Live text CTA */}
            <motion.div
              whileHover={{ y: -6 }}
              className="flex min-h-[310px] flex-col rounded-[2rem] border-[3px] border-slate-950 bg-white p-6 shadow-[9px_10px_0_#0f172a] sm:p-8"
            >
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border-[3px] border-slate-950 bg-[#6ee7b7] text-3xl shadow-[4px_5px_0_#0f172a]">
                💬
              </div>

              <h3 className="mt-5 text-center text-3xl font-black tracking-[-0.05em]">
                Talk to a live agent.
              </h3>

              <p className="mx-auto mt-3 max-w-sm text-center text-sm font-semibold leading-6 text-slate-500">
                Have a question before paying? Text Techuvo directly.
              </p>

              <motion.a
                href="sms:+13134507265?body=Hi%20Techuvo%2C%20I'm%20interested%20in%20the%20%2450%20website%20offer."
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(37,99,235,0)",
                    "0 0 24px rgba(37,99,235,.35)",
                    "0 0 0 rgba(37,99,235,0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 0.4,
                }}
                className="mt-auto flex min-h-16 items-center justify-center gap-3 rounded-full border-[3px] border-slate-950 bg-yellow-300 px-6 text-base font-black text-slate-950 shadow-[5px_6px_0_#0f172a]"
              >
                Text a Live Agent
                <ArrowRight className="h-5 w-5" />
              </motion.a>

              <p className="mt-4 text-center text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                Message goes directly to Techuvo
              </p>
            </motion.div>
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-[1.5rem] border-[3px] border-slate-950 bg-[#fff9ee] p-5 text-center shadow-[5px_6px_0_#0f172a]">
            <p className="text-sm font-bold leading-6 text-slate-700">
              $49/month includes hosting, routine maintenance,
              technical security, ongoing support and website leasing.
            </p>
          </div>
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
