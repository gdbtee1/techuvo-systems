import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import SplitSection from "../components/SplitSection";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-white overflow-hidden">

      {/* HERO */}
      <Hero />

      {/* TRUST BAR */}
      <section className="py-8 border-y bg-gray-50">
        <div className="px-4 sm:px-6 md:px-10 lg:px-16">

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-xs sm:text-sm tracking-widest text-gray-500 text-center">

            <p>MODERN DESIGN</p>
            <p>FAST PERFORMANCE</p>
            <p>MOBILE RESPONSIVE</p>
            <p>SCALABLE SYSTEMS</p>

          </div>

        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-16 md:py-24">

        <div className="px-4 sm:px-6 md:px-10 lg:px-16">

          {/* HEADING */}
          <div className="max-w-3xl mb-14">

            <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-4">
              What We Do
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Digital Solutions Built For Growth
            </h2>

          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              {
                title: "Web Development",
                text: "Custom websites designed for speed, responsiveness, and conversions.",
              },
              {
                title: "Brand Identity",
                text: "Modern branding systems that create trust and consistency.",
              },
              {
                title: "UI / UX Design",
                text: "Premium interfaces focused on usability and visual impact.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="border rounded-3xl p-8 hover:shadow-xl transition bg-white"
              >

                <h3 className="text-xl font-semibold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {item.text}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* SPLIT SECTION */}
      <SplitSection />

      {/* GALLERY */}
      <Gallery />

      {/* CTA SECTION */}
      <section className="py-20 md:py-28 bg-black text-white">

        <div className="px-4 sm:px-6 md:px-10 lg:px-16">

          <div className="max-w-4xl mx-auto text-center">

            <p className="uppercase tracking-[0.3em] text-xs text-gray-400 mb-4">
              Start Your Project
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Ready To Build A Stronger Digital Presence?
            </h2>

            <p className="mt-6 text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Techuvo helps businesses create modern digital
              experiences that attract customers, build trust,
              and scale online professionally.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

              <Link
                to="/contact"
                className="w-full sm:w-auto bg-white text-black px-8 py-3 rounded-xl font-medium hover:scale-105 transition text-center"
              >
                Book A Consultation
              </Link>

              <Link
                to="/services"
                className="w-full sm:w-auto border border-white px-8 py-3 rounded-xl hover:bg-white hover:text-black transition text-center"
              >
                Explore Services
              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}