import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden py-10 sm:py-0"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1516321318423-f06f85e504b3)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* CONTENT */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-10">

        <div className="max-w-4xl mx-auto text-center text-white">

          {/* SMALL LABEL */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="uppercase tracking-[0.25em] text-[10px] sm:text-xs md:text-sm text-gray-300 mb-4 sm:mb-5"
          >
            Techuvo • Digital Systems & Web Development
          </motion.p>

          {/* MAIN HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Modern Websites Built To Elevate Your Brand
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed"
          >
            Techuvo creates high-performance digital experiences for
            businesses looking to stand out, convert more customers,
            and scale professionally online.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <button className="w-full sm:w-auto bg-white text-black px-6 sm:px-7 py-3 rounded-xl font-medium hover:scale-105 transition">
              Start Your Project
            </button>

            <button className="w-full sm:w-auto border border-white px-6 sm:px-7 py-3 rounded-xl hover:bg-white hover:text-black transition">
              View Services
            </button>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pb-6 sm:pb-0"
          >
            <div className="bg-white/10 backdrop-blur rounded-2xl p-4 sm:p-5">
              <h3 className="text-xl sm:text-2xl font-bold">Modern</h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                Clean UI & scalable systems
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-4 sm:p-5">
              <h3 className="text-xl sm:text-2xl font-bold">Responsive</h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                Optimized for every device
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-4 sm:p-5">
              <h3 className="text-xl sm:text-2xl font-bold">Fast</h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                Built for performance & growth
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}