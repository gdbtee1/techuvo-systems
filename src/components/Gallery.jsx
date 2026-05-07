import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    title: "Modern Business Website",
    category: "Web Development",
  },

  {
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    title: "Ecommerce Experience",
    category: "UI / UX Design",
  },

  {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    title: "Creative Brand Platform",
    category: "Brand Identity",
  },

  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    title: "Startup Digital Presence",
    category: "Marketing Website",
  },
];

export default function Gallery() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">

      <div className="px-4 sm:px-6 md:px-10 lg:px-16">

        {/* HEADER */}
        <div className="max-w-3xl mb-14">

          <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-4">
            Featured Work
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Professional Digital Experiences
          </h2>

        </div>

        {/* GALLERY */}
        <div className="relative">

          {/* IMAGE CARD */}
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="relative rounded-3xl overflow-hidden shadow-xl"
          >

            <img
              src={projects[index].image}
              alt={projects[index].title}
              className="w-full h-[300px] sm:h-[450px] md:h-[600px] object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/35"></div>

            {/* TEXT */}
            <div className="absolute bottom-0 left-0 p-6 md:p-10 text-white">

              <p className="uppercase tracking-[0.25em] text-xs text-gray-300 mb-3">
                {projects[index].category}
              </p>

              <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold max-w-2xl leading-tight">
                {projects[index].title}
              </h3>

            </div>

          </motion.div>

          {/* CONTROLS */}
          <div className="flex items-center justify-center gap-4 mt-8">

            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-105 transition"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-105 transition"
            >
              <ChevronRight size={20} />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}