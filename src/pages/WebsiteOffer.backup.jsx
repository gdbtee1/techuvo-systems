
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

import founderImage from "../assets/images/founder.jpg";

function Mascot() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -70, rotate: -8 }}
      animate={{ opacity: 1, x: 0, rotate: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.25,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="pointer-events-none absolute -left-5 top-3 z-20 hidden sm:block lg:-left-1 lg:top-8"
    >
      <motion.div
        animate={{
          y: [0, -7, 0],
        }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative h-[180px] w-[145px] lg:h-[235px] lg:w-[185px]"
      >
        {/* waving arm */}
        <motion.div
          animate={{
            rotate: [-14, 18, -14],
          }}
          transition={{
            duration: 1.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            transformOrigin: "bottom center",
          }}
          className="absolute -right-3 top-4 z-0"
        >
          <div className="relative h-[82px] w-[26px] rotate-[25deg] rounded-full border-[3px] border-slate-950 bg-white shadow-[4px_5px_0_#0f172a] lg:h-[100px] lg:w-[32px]">
            <div className="absolute -top-6 left-1/2 h-10 w-10 -translate-x-1/2 rounded-[45%] border-[3px] border-slate-950 bg-[#ffd0b5] shadow-[3px_4px_0_#0f172a]">
              <div className="absolute left-[4px] top-[2px] h-5 w-[5px] -rotate-[18deg] rounded-full bg-white" />
              <div className="absolute right-[5px] top-[1px] h-5 w-[5px] rotate-[18deg] rounded-full bg-white" />
            </div>
          </div>
        </motion.div>

        {/* legs */}
        <div className="absolute bottom-0 left-[35px] h-[72px] w-[28px] rotate-[3deg] rounded-b-xl border-[3px] border-slate-950 bg-white shadow-[4px_5px_0_#0f172a] lg:left-[45px] lg:h-[92px] lg:w-[34px]" />

        <div className="absolute bottom-0 right-[35px] h-[72px] w-[28px] -rotate-[3deg] rounded-b-xl border-[3px] border-slate-950 bg-white shadow-[4px_5px_0_#0f172a] lg:right-[45px] lg:h-[92px] lg:w-[34px]" />

        {/* shoes */}
        <div className="absolute bottom-0 left-[19px] h-[17px] w-[50px] -rotate-[4deg] rounded-full border-[3px] border-slate-950 bg-blue-600 lg:left-[27px] lg:h-[21px] lg:w-[59px]" />

        <div className="absolute bottom-0 right-[17px] h-[17px] w-[50px] rotate-[4deg] rounded-full border-[3px] border-slate-950 bg-blue-600 lg:right-[25px] lg:h-[21px] lg:w-[59px]" />

        {/* body / suit */}
        <div className="absolute left-1/2 top-[72px] z-10 h-[83px] w-[94px] -translate-x-1/2 rounded-[38%_38%_26%_26%] border-[3px] border-slate-950 bg-white shadow-[6px_7px_0_#0f172a] lg:top-[88px] lg:h-[108px] lg:w-[118px]">
          <div className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-slate-950/20" />

          <div className="absolute left-1/2 top-[10px] h-9 w-5 -translate-x-1/2 bg-blue-600 [clip-path:polygon(50%_0,100%_30%,67%_100%,33%_100%,0_30%)] lg:h-11 lg:w-6" />

          <div className="absolute left-[13px] top-[14px] h-3 w-3 rounded-full bg-blue-600" />

          <div className="absolute right-[13px] top-[14px] h-3 w-3 rounded-full bg-blue-600" />
        </div>

        {/* head */}
        <div className="absolute left-1/2 top-[22px] z-20 h-[72px] w-[72px] -translate-x-1/2 rounded-[46%_46%_42%_42%] border-[3px] border-slate-950 bg-[#ffd0b5] shadow-[5px_5px_0_#0f172a] lg:h-[88px] lg:w-[88px]">
          {/* hair */}
          <div className="absolute -left-1 top-1 h-[27px] w-[76px] -rotate-3 rounded-[55%_50%_25%_30%] border-[3px] border-slate-950 bg-slate-950 lg:w-[91px]" />

          {/* eyes */}
          <div className="absolute left-[18px] top-[31px] h-[8px] w-[6px] rounded-full bg-slate-950 lg:left-[23px] lg:top-[38px]" />
          <div className="absolute right-[18px] top-[31px] h-[8px] w-[6px] rounded-full bg-slate-950 lg:right-[23px] lg:top-[38px]" />

          {/* smile */}
          <div className="absolute left-1/2 top-[49px] h-[9px] w-[27px] -translate-x-1/2 rounded-b-full border-b-[3px] border-slate-950 lg:top-[61px]" />
        </div>

        {/* blue badge */}
        <div className="absolute left-1/2 top-0 z-30 -translate-x-1/2 rounded-full border-[3px] border-slate-950 bg-blue-600 px-3 py-1 text-[8px] font-black uppercase tracking-[0.12em] text-white shadow-[3px_3px_0_#0f172a] lg:text-[9px]">
          Techuvo
        </div>
      </motion.div>
    </motion.div>
  );
}

function FloatingShape({
  className,
  delay = 0,
  duration = 5,
}) {
  return (
    <motion.div
      animate={{
        y: [0, -14, 0],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
      className={className}
    />
  );
}

function WebsiteOffer() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff9ee] text-slate-950 selection:bg-yellow-200">
      <section className="relative min-h-[100svh] overflow-hidden border-b-[3px] border-slate-950">
        {/* background grid */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage:
              "linear-gradient(#dbeafe 1px, transparent 1px), linear-gradient(90deg, #dbeafe 1px, transparent 1px)",
            backgroundSize: "34px 34px",
          }}
        />

        {/* cartoon sky shapes */}
        <FloatingShape
          delay={0}
          duration={5.2}
          className="absolute right-[7%] top-[8%] h-20 w-20 rounded-full border-[3px] border-slate-950 bg-yellow-300 shadow-[6px_7px_0_#0f172a] sm:h-28 sm:w-28"
        />

        <FloatingShape
          delay={0.8}
          duration={6.4}
          className="absolute -right-14 top-[43%] h-36 w-36 rotate-12 rounded-[35%] border-[3px] border-slate-950 bg-[#ff8c75] shadow-[7px_7px_0_#0f172a] sm:right-[4%]"
        />

        <FloatingShape
          delay={1.2}
          duration={5.8}
          className="absolute bottom-[12%] left-[4%] hidden h-24 w-24 -rotate-12 rounded-[30%_70%_55%_45%] border-[3px] border-slate-950 bg-[#6ee7b7] shadow-[6px_7px_0_#0f172a] md:block"
        />

        {/* top ad landing nav */}
        <div className="relative z-40 mx-auto flex w-full max-w-[94rem] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a
            href="/"
            className="group flex items-center gap-3"
          >
            <div className="grid h-11 w-11 place-items-center rounded-[14px] border-[3px] border-slate-950 bg-blue-600 text-sm font-black text-white shadow-[4px_4px_0_#0f172a] transition-transform group-hover:-rotate-6">
              T
            </div>

            <div>
              <p className="text-lg font-black tracking-[-0.05em]">
                Techuvo
              </p>
              <p className="text-[0.58rem] font-black uppercase tracking-[0.18em] text-slate-500">
                Custom websites
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

        <div className="relative z-10 mx-auto grid min-h-[calc(100svh-86px)] w-full max-w-[94rem] items-center gap-12 px-5 pb-14 pt-8 sm:px-8 sm:pt-20 lg:grid-cols-[1.05fr_.95fr] lg:gap-14 lg:px-12 lg:pb-20 lg:pt-10">
          {/* LEFT */}
          <div className="relative z-20 pt-16 sm:pt-20 lg:pt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.65,
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
              transition={{
                delay: 0.08,
                duration: 0.7,
              }}
              className="max-w-[11ch] text-[clamp(3.6rem,9.2vw,8.5rem)] font-black leading-[0.82] tracking-[-0.075em]"
            >
              Your new
              <span className="block text-blue-600">
                website.
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: -2,
              }}
              transition={{
                delay: 0.25,
                duration: 0.7,
                type: "spring",
                stiffness: 130,
              }}
              className="relative mt-7 inline-flex items-center gap-3 rounded-[1.7rem] border-[3px] border-slate-950 bg-white px-5 py-4 shadow-[7px_8px_0_#0f172a] sm:px-7"
            >
              <span className="text-sm font-black uppercase tracking-[0.14em] text-slate-500">
                Start for
              </span>

              <motion.span
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-5xl font-black tracking-[-0.07em] text-blue-600 sm:text-6xl"
              >
                $50
              </motion.span>

              <div className="absolute -right-4 -top-5 rotate-12 rounded-full border-[3px] border-slate-950 bg-[#ff8c75] px-3 py-2 text-[10px] font-black uppercase shadow-[3px_3px_0_#0f172a]">
                That's it!
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.4,
                duration: 0.6,
              }}
              className="mt-8 max-w-[40rem] text-base font-semibold leading-7 text-slate-600 sm:text-lg sm:leading-8"
            >
              Get a custom-built website designed around your business.
              After setup, your managed website plan is{" "}
              <strong className="text-slate-950">
                $49/month
              </strong>{" "}
              for hosting, maintenance, security, ongoing support, and
              website leasing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
              }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#start"
                className="group inline-flex min-h-16 items-center justify-center gap-3 rounded-full border-[3px] border-slate-950 bg-blue-600 px-8 text-base font-black text-white shadow-[6px_7px_0_#0f172a] transition duration-200 hover:-translate-y-1 hover:shadow-[8px_10px_0_#0f172a]"
              >
                Start My Website
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#work"
                className="inline-flex min-h-16 items-center justify-center rounded-full border-[3px] border-slate-950 bg-white px-8 text-base font-black shadow-[6px_7px_0_#0f172a] transition duration-200 hover:-translate-y-1"
              >
                See Our Work
              </a>
            </motion.div>

            <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 sm:flex sm:flex-wrap">
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
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 border-slate-950 bg-[#6ee7b7]">
                    <Check className="h-3 w-3" strokeWidth={4} />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              x: 60,
              rotate: 2,
            }}
            animate={{
              opacity: 1,
              x: 0,
              rotate: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[620px]"
          >
            {/* doodle burst */}
            <motion.div
              animate={{
                rotate: [0, 6, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="absolute -right-3 -top-8 z-30 rounded-full border-[3px] border-slate-950 bg-yellow-300 px-4 py-3 text-center text-[10px] font-black uppercase leading-4 shadow-[4px_5px_0_#0f172a] sm:-right-8 sm:text-xs"
            >
              Real founder.
              <br />
              Real support.
            </motion.div>

            <div className="relative overflow-hidden rounded-[2.2rem] border-[3px] border-slate-950 bg-[#bfe2ff] p-3 shadow-[10px_12px_0_#0f172a] sm:p-5">
              <div className="relative overflow-hidden rounded-[1.6rem] border-[3px] border-slate-950 bg-white">
                <div className="flex h-12 items-center justify-between border-b-[3px] border-slate-950 bg-white px-4">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full border-2 border-slate-950 bg-[#ff8c75]" />
                    <div className="h-3 w-3 rounded-full border-2 border-slate-950 bg-yellow-300" />
                    <div className="h-3 w-3 rounded-full border-2 border-slate-950 bg-[#6ee7b7]" />
                  </div>

                  <div className="rounded-full bg-slate-100 px-4 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-slate-500">
                    techuvo.dev
                  </div>
                </div>

                <div className="grid min-h-[420px] items-end bg-[#f8fafc] sm:min-h-[520px]">
                  <img
                    src={founderImage}
                    alt="Techuvo founder"
                    className="h-full w-full object-cover object-center"
                  />

                  <div className="absolute inset-x-5 bottom-5 rounded-[1.4rem] border-[3px] border-slate-950 bg-white/95 p-4 shadow-[5px_6px_0_#0f172a] backdrop-blur sm:inset-x-7 sm:bottom-7 sm:p-5">
                    <div className="flex items-start gap-3">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border-[3px] border-slate-950 bg-blue-600 text-white">
                        <Star
                          className="h-5 w-5"
                          fill="currentColor"
                        />
                      </div>

                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.14em] text-blue-600">
                          Built by Techuvo
                        </p>

                        <p className="mt-1 text-sm font-bold leading-5 text-slate-700 sm:text-base">
                          Custom design with a real person behind the
                          project — not a template marketplace.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* floating security chip */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3.5,
              }}
              className="absolute -bottom-7 -left-2 z-30 flex items-center gap-3 rounded-2xl border-[3px] border-slate-950 bg-[#6ee7b7] px-4 py-3 shadow-[5px_6px_0_#0f172a] sm:-left-7"
            >
              <ShieldCheck className="h-5 w-5" />
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.12em]">
                  Included
                </p>
                <p className="text-xs font-black sm:text-sm">
                  Hosting + Security
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* bottom ticker */}
        <div className="relative z-20 overflow-hidden border-t-[3px] border-slate-950 bg-yellow-300 py-3">
          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max items-center"
          >
            {[...Array(2)].map((_, groupIndex) => (
              <div
                key={groupIndex}
                className="flex shrink-0 items-center"
              >
                {[
                  "CUSTOM DESIGN",
                  "$50 TO START",
                  "$49/MONTH",
                  "HOSTING INCLUDED",
                  "MAINTENANCE INCLUDED",
                  "SECURITY INCLUDED",
                  "SUPPORT INCLUDED",
                ].map((item) => (
                  <div
                    key={`${groupIndex}-${item}`}
                    className="flex shrink-0 items-center"
                  >
                    <span className="px-5 text-xs font-black uppercase tracking-[0.16em] sm:px-8 sm:text-sm">
                      {item}
                    </span>
                    <Star
                      className="h-4 w-4 shrink-0"
                      fill="currentColor"
                    />
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* placeholder for the next section */}
      <section
        id="work"
        className="relative min-h-[65vh] bg-white px-5 py-24 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-[94rem]">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">
            Next up
          </p>

          <h2 className="mt-4 max-w-3xl text-5xl font-black tracking-[-0.06em] sm:text-7xl">
            Five projects.
            <span className="block text-slate-400">
              Zero boring cards.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-slate-500">
            This is where we're going to build the interactive cartoon
            portfolio experience next.
          </p>
        </div>
      </section>

      <section
        id="start"
        className="border-t-[3px] border-slate-950 bg-blue-600 px-5 py-24 text-white sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-[94rem] text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-100">
            Ready when you are
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl text-5xl font-black leading-[0.92] tracking-[-0.06em] sm:text-7xl">
            Start your custom website for $50.
          </h2>
        </div>
      </section>
    </main>
  );
}

export default WebsiteOffer;
