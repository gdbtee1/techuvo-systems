import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const products = [
  {
    title: "Website Development",
    category: "Core Service",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    link: "/website-development",
  },

  {
    title: "Business Automation Systems",
    category: "AI + Systems",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    link: "/automation-systems",
  },

  {
    title: "Landing Page Funnels",
    category: "Conversion Design",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d",
    link: "/landing-pages",
  },

  {
    title: "AI Integrations",
    category: "Future Tech",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    link: "/ai-integrations",
  },

  {
    title: "Brand Identity Systems",
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    link: "/brand-identity",
  },

  {
    title: "Startup Launch Systems",
    category: "Growth Strategy",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    link: "/startup-launch",
  },
];

export default function Shop() {
  return (
    <div className="bg-white overflow-hidden">

      {/* HERO */}
      <section className="relative py-24 md:py-32 bg-black text-white">

        <div className="px-4 sm:px-6 md:px-10 lg:px-16">

          <div className="max-w-4xl">

            <p className="uppercase tracking-[0.3em] text-xs text-gray-400 mb-5">
              Techuvo Services
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Productized Digital Solutions For Modern Businesses
            </h1>

            <p className="mt-6 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
              High-performance websites, automation systems,
              and AI-driven solutions built to help businesses
              scale, convert, and grow online.
            </p>

          </div>

        </div>

      </section>

      {/* FEATURED SECTION */}
      <section className="py-16 md:py-24">

        <div className="px-4 sm:px-6 md:px-10 lg:px-16">

          {/* HEADER */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">

            <div className="max-w-3xl">

              <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-4">
                Core Offerings
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Built To Turn Clicks Into Customers
              </h2>

            </div>

            <Link
              to="/contact"
              className="w-full sm:w-auto border px-6 py-3 rounded-xl hover:bg-black hover:text-white transition text-center"
            >
              Start a Project
            </Link>

          </div>

          {/* PRODUCT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

            {products.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group border rounded-3xl overflow-hidden bg-white hover:shadow-2xl transition"
              >

                {/* IMAGE */}
                <div className="overflow-hidden">

                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-[260px] object-cover group-hover:scale-105 transition duration-500"
                  />

                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <p className="uppercase tracking-[0.25em] text-xs text-gray-500 mb-3">
                    {product.category}
                  </p>

                  <h3 className="text-2xl font-semibold leading-tight">
                    {product.title}
                  </h3>

                  <div className="mt-6 flex items-center justify-between gap-4">

                    <Link
                      to={product.link}
                      className="bg-black text-white px-5 py-2 rounded-xl hover:scale-105 transition text-sm"
                    >
                      Learn More
                    </Link>

                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* FEATURE STRIP */}
      <section className="py-12 border-y bg-gray-50">

        <div className="px-4 sm:px-6 md:px-10 lg:px-16">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

            <div>
              <h3 className="text-2xl font-bold mb-2">
                Scalable Systems
              </h3>
              <p className="text-gray-600">
                Built for long-term business growth and automation.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2">
                Conversion Focused
              </h3>
              <p className="text-gray-600">
                Every design is optimized to generate leads and sales.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2">
                Future Ready
              </h3>
              <p className="text-gray-600">
                AI, automation, and modern web technologies built in.
              </p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}