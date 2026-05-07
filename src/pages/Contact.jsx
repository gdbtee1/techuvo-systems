import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="py-24 md:py-32 bg-black text-white">

        <div className="px-4 sm:px-6 md:px-10 lg:px-16">

          <div className="max-w-4xl">

            <p className="uppercase tracking-[0.3em] text-xs text-gray-400 mb-5">
              Contact Techuvo
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Let’s Build Something That Grows Your Business
            </h1>

            <p className="mt-6 text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
              Reach out to start your project or request a quote.
              We respond within 24–48 hours.
            </p>

          </div>

        </div>

      </section>

      {/* CONTACT SECTION */}
      <section className="py-16 md:py-24">

        <div className="px-4 sm:px-6 md:px-10 lg:px-16">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border rounded-3xl p-8 md:p-10"
            >

              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Send a Message
              </h2>

              {/* FORMSPREE CONNECTED */}
              <form
                action="https://formspree.io/f/mnjprdge"
                method="POST"
                className="flex flex-col gap-4"
              >

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="border p-3 rounded-xl outline-none"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="border p-3 rounded-xl outline-none"
                />

                <input
                  type="text"
                  name="project"
                  placeholder="Project Type (Website, Automation, etc.)"
                  className="border p-3 rounded-xl outline-none"
                />

                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  rows="5"
                  required
                  className="border p-3 rounded-xl outline-none"
                />

                <button
                  type="submit"
                  className="bg-black text-white py-3 rounded-xl hover:scale-105 transition mt-2"
                >
                  Send Message
                </button>

              </form>

            </motion.div>

            {/* INFO + MAP */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-8"
            >

              <div className="border rounded-3xl p-8">

                <h3 className="text-xl font-semibold mb-4">
                  Business Info
                </h3>

                <div className="space-y-3 text-gray-600">

                  <p>📍 Detroit, Michigan</p>
                  <p>📧 hello@techuvo.com</p>
                  <p>⚡ Response time: 24–48 hours</p>

                </div>

              </div>

              <div className="rounded-3xl overflow-hidden border">

                <iframe
                  title="Detroit Map"
                  src="https://www.google.com/maps?q=Detroit+Michigan&output=embed"
                  className="w-full h-[300px] md:h-[400px]"
                  loading="lazy"
                ></iframe>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

    </div>
  );
}