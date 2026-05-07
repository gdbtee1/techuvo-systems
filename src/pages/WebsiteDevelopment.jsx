import { Link } from "react-router-dom";

export default function WebsiteDevelopment() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="py-24 md:py-32 bg-black text-white">

        <div className="px-6 md:px-16 max-w-5xl">

          <p className="uppercase tracking-[0.3em] text-xs text-gray-400 mb-6">
            Techuvo Web Development
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            High-Converting Websites Built To Grow Your Business
          </h1>

          <p className="mt-6 text-gray-300 text-sm md:text-lg max-w-2xl">
            We design fast, modern, mobile-first websites that turn visitors
            into leads, customers, and revenue.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">

            <Link
              to="/contact"
              className="bg-white text-black px-8 py-3 rounded-xl hover:scale-105 transition text-center"
            >
              Start Your Website
            </Link>

            <Link
              to="/shop"
              className="border border-white px-8 py-3 rounded-xl hover:bg-white hover:text-black transition text-center"
            >
              View Services
            </Link>

          </div>

        </div>

      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="py-20 md:py-28">

        <div className="px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Most Websites Don’t Convert
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Most businesses have outdated, slow, or confusing websites that
              fail to turn traffic into customers. In 2026, attention spans are
              shorter than ever — your site has seconds to perform.
            </p>
          </div>

          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              We Build Conversion Systems
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Techuvo builds structured, performance-driven websites designed
              with psychology, speed, and user experience to maximize conversions.
            </p>
          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="py-20 bg-gray-50">

        <div className="px-6 md:px-16">

          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            What You Get
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "Custom Website Design",
              "Mobile Responsive Build",
              "Fast Load Performance",
              "SEO-Ready Structure",
              "Lead Capture Forms",
              "Modern UI/UX Design",
              "Google Maps Integration",
              "Analytics Setup Ready",
              "Conversion Optimization",
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 border rounded-2xl bg-white hover:shadow-md transition"
              >
                {item}
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* PROCESS */}
      <section className="py-20 md:py-28">

        <div className="px-6 md:px-16">

          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <div>
              <h3 className="text-xl font-semibold mb-3">1. Discovery</h3>
              <p className="text-gray-600">
                We understand your business, audience, and goals.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">2. Design & Build</h3>
              <p className="text-gray-600">
                We create a high-performance, modern website tailored to your brand.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">3. Launch</h3>
              <p className="text-gray-600">
                Your site goes live and is ready to generate leads immediately.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white text-center">

        <div className="px-6 md:px-16 max-w-3xl mx-auto">

          <h2 className="text-3xl md:text-5xl font-bold">
            Ready To Build Your Website?
          </h2>

          <p className="mt-6 text-gray-300">
            Let’s create a website that actually grows your business,
            not just looks good.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-10 bg-white text-black px-8 py-3 rounded-xl hover:scale-105 transition"
          >
            Start Now
          </Link>

        </div>

      </section>

    </div>
  );
}