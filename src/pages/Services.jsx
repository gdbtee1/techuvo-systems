import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Conversion Website Development",
    text: "High-performance websites designed to turn traffic into paying customers.",
  },
  {
    title: "Business Automation Systems",
    text: "Automate leads, bookings, emails, and workflows to save time and scale faster.",
  },
  {
    title: "Landing Pages for Ads",
    text: "High-converting landing pages built specifically for paid traffic campaigns.",
  },
  {
    title: "AI Integrations",
    text: "Smart AI tools like chatbots and automation systems integrated into your business.",
  },
  {
    title: "Brand & UI Design",
    text: "Modern branding and UI systems that make your business look premium and trustworthy.",
  },
];

export default function Services() {
  return (
    <div className="bg-white overflow-hidden">

      {/* HERO */}
      <section className="py-20 sm:py-24 md:py-32 bg-black text-white">

        <div className="px-4 sm:px-6 md:px-10 lg:px-16">

          <div className="max-w-4xl">

            <p className="uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[10px] sm:text-xs text-gray-400 mb-4 sm:mb-5">
              Techuvo Services
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Digital Systems That Help Businesses Grow
            </h1>

            <p className="mt-5 sm:mt-6 text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
              We build websites, automation systems, and digital tools
              that help businesses convert customers and operate more efficiently.
            </p>

            {/* CTA */}
            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">

              <Link
                to="/contact"
                className="bg-white text-black px-6 py-3 rounded-xl text-center hover:scale-105 transition text-sm sm:text-base"
              >
                Start Your Project
              </Link>

              <Link
                to="/portfolio"
                className="border border-white px-6 py-3 rounded-xl text-center hover:bg-white hover:text-black transition text-sm sm:text-base"
              >
                View Work
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES GRID */}
      <section className="py-14 sm:py-16 md:py-24">

        <div className="px-4 sm:px-6 md:px-10 lg:px-16">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

            {services.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-xl transition bg-white"
              >

                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-black text-white flex items-center justify-center font-bold mb-5 sm:mb-6 text-sm sm:text-base">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                  {item.title}
                </h2>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {item.text}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* WHY SECTION */}
      <section className="py-16 sm:py-20 bg-gray-50">

        <div className="px-4 sm:px-6 md:px-10 lg:px-16 text-center">

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
            Why Businesses Choose Techuvo
          </h2>

          <p className="mt-5 sm:mt-6 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            We focus on results — not just design. Every system is built
            to increase conversions, automate work, and scale businesses.
          </p>

          <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">

            <div className="p-5 sm:p-6 border rounded-2xl bg-white">
              <h3 className="font-semibold mb-2 text-base sm:text-lg">Fast Delivery</h3>
              <p className="text-sm text-gray-600">
                Projects delivered quickly without sacrificing quality.
              </p>
            </div>

            <div className="p-5 sm:p-6 border rounded-2xl bg-white">
              <h3 className="font-semibold mb-2 text-base sm:text-lg">Conversion Focused</h3>
              <p className="text-sm text-gray-600">
                Every design is built to generate leads and sales.
              </p>
            </div>

            <div className="p-5 sm:p-6 border rounded-2xl bg-white">
              <h3 className="font-semibold mb-2 text-base sm:text-lg">Modern Systems</h3>
              <p className="text-sm text-gray-600">
                Built with scalable, future-proof technologies.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 md:py-28 bg-black text-white text-center">

        <div className="px-4 sm:px-6 md:px-10 lg:px-16">

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
            Let’s Build Your System
          </h2>

          <p className="mt-5 sm:mt-6 text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Start your project with Techuvo and build a digital presence
            that actually grows your business.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">

            <Link
              to="/contact"
              className="bg-white text-black px-7 py-3 rounded-xl hover:scale-105 transition text-center text-sm sm:text-base"
            >
              Start Project
            </Link>

            <Link
              to="/contact"
              className="border border-white px-7 py-3 rounded-xl hover:bg-white hover:text-black transition text-center text-sm sm:text-base"
            >
              Contact
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}