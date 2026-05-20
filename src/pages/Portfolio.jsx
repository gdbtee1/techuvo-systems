import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Tech Startup Website",
    category: "Website Development",
    result: "High-performance landing system",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d",
    link: "/contact",
  },
  {
    title: "Automation Dashboard",
    category: "Business Automation",
    result: "Workflow optimization system",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    link: "/contact",
  },
  {
    title: "Brand Identity System",
    category: "Branding",
    result: "Full visual identity overhaul",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    link: "/contact",
  },
];

export default function Portfolio() {
  return (
    <div className="bg-white overflow-hidden">

      {/* HERO */}
      <section className="bg-black text-white py-20 sm:py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">

          <p className="uppercase tracking-[0.25em] text-[10px] sm:text-xs text-gray-400 mb-4">
            Our Work
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Projects That Drive Results
          </h1>

          <p className="mt-5 sm:mt-6 text-gray-300 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            We build websites, automation systems, and digital infrastructure
            designed to convert, scale, and perform.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-8 sm:mt-10 bg-white text-black px-6 py-3 rounded-xl hover:scale-105 transition text-sm sm:text-base"
          >
            Start a Project
          </Link>

        </div>
      </section>

      {/* PORTFOLIO NOTE */}
      <div className="text-center px-4 sm:px-6 pt-6 sm:pt-8">
        <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
          These are representative project examples. Our full portfolio and
          detailed case studies are shared directly based on your project needs —{" "}
          <Link to="/contact" className="underline font-medium">
            send us a quick message
          </Link>{" "}
          and we’ll personally send relevant work.
        </p>
      </div>

      {/* FILTER BAR */}
      <div className="px-4 sm:px-6 py-8 sm:py-10 flex flex-wrap gap-3 sm:gap-4 justify-center text-xs sm:text-sm">
        {["All", "Websites", "Automation", "Branding", "AI Systems"].map(
          (item, i) => (
            <button
              key={i}
              className="px-3 sm:px-4 py-2 border rounded-full hover:bg-black hover:text-white transition"
            >
              {item}
            </button>
          )
        )}
      </div>

      {/* PROJECT GRID */}
      <section className="px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="border rounded-2xl overflow-hidden bg-white flex flex-col"
            >

              {/* IMAGE */}
              <div className="h-52 sm:h-56 overflow-hidden">
                <img
                  src={project.image}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  alt={project.title}
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-1">

                {/* CATEGORY */}
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-blue-600">
                  {project.category}
                </p>

                {/* TITLE */}
                <h3 className="text-lg sm:text-xl font-semibold mt-2">
                  {project.title}
                </h3>

                {/* RESULT */}
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {project.result}
                </p>

                {/* TECH STRIP */}
                <p className="text-[11px] text-gray-400 mt-3">
                  React • UI Systems • Performance Optimized
                </p>

                {/* BUTTONS */}
                <div className="flex gap-3 mt-5">

                  <Link
                    to={project.link}
                    className="bg-black text-white px-4 py-2 rounded-lg text-xs sm:text-sm hover:opacity-80 transition"
                  >
                    View Case Study
                  </Link>

                  <a
                    href="#"
                    className="border px-4 py-2 rounded-lg text-xs sm:text-sm hover:bg-gray-100 transition"
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16 sm:py-20 text-center px-4 sm:px-6">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Have a project in mind?
        </h2>

        <p className="text-gray-600 mt-4 text-sm sm:text-base">
          Let’s build something scalable and high-converting.
        </p>

        <Link
          to="/contact"
          className="inline-block mt-7 sm:mt-8 bg-black text-white px-6 py-3 rounded-xl hover:scale-105 transition text-sm sm:text-base"
        >
          Contact Us
        </Link>

      </section>

    </div>
  );
}