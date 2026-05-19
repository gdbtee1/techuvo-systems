import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function SplitSection() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">

      <div className="px-4 sm:px-6 md:px-10 lg:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >

            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
              alt="Techuvo Web Design"
              className="w-full h-[350px] sm:h-[500px] object-cover rounded-3xl shadow-xl"
            />

            <div className="absolute -bottom-6 sm:-bottom-8 right-4 sm:right-8 bg-white shadow-2xl rounded-2xl p-5 w-[220px] sm:w-[260px]">

              <p className="uppercase tracking-[0.25em] text-[10px] sm:text-xs text-gray-500 mb-2">
                Techuvo
              </p>

              <h3 className="text-lg sm:text-xl font-bold mb-2">
                Responsive Systems
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                Built to perform smoothly across mobile,
                tablet, and desktop devices.
              </p>

            </div>

          </motion.div>

          {/* CONTENT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-5">
              Why Techuvo
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Designed For Businesses That Want To Stand Out
            </h2>

            <p className="mt-6 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              Techuvo combines modern design, performance,
              and scalable development practices to create
              digital experiences that look professional,
              build trust, and help businesses grow online.
            </p>

            {/* FEATURE LIST */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div className="border rounded-2xl p-5">
                <h3 className="font-semibold mb-2">
                  Modern UI
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Clean, premium interfaces built with modern
                  design standards.
                </p>
              </div>

              <div className="border rounded-2xl p-5">
                <h3 className="font-semibold mb-2">
                  Performance
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Fast-loading websites optimized for users
                  and search engines.
                </p>
              </div>

              <div className="border rounded-2xl p-5">
                <h3 className="font-semibold mb-2">
                  Mobile First
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Fully responsive layouts designed for every
                  screen size.
                </p>
              </div>

              <div className="border rounded-2xl p-5">
                <h3 className="font-semibold mb-2">
                  Scalable Systems
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Structured development built for future
                  growth and expansion.
                </p>
              </div>

            </div>

            {/* BUTTON */}
            <div className="mt-10">

              <Link
                to="/contact"
                className="w-full sm:w-auto inline-block bg-black text-white px-8 py-3 rounded-xl hover:scale-105 transition text-center"
              >
                Learn More
              </Link>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}