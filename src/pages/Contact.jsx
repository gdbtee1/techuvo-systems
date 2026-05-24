import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="py-20 sm:py-24 md:py-32 bg-black text-white">

        <div className="px-4 sm:px-6 md:px-10 lg:px-16">

          <div className="max-w-4xl">

            <p className="uppercase tracking-[0.3em] text-[10px] sm:text-xs text-gray-400 mb-4 sm:mb-5">
              Contact Techuvo
            </p>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Let’s Build Something That Grows Your Business
            </h1>

            <p className="mt-5 sm:mt-6 text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
              Reach out to start your project or book a direct sales call.
              We respond within 24–48 hours.
            </p>

          </div>

        </div>

      </section>

      {/* CONTACT SECTION */}
      <section className="py-14 sm:py-16 md:py-24">

        <div className="px-4 sm:px-6 md:px-10 lg:px-16">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">

            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10"
            >

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
                Send a Message
              </h2>

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
                  className="border p-3 rounded-xl outline-none text-sm sm:text-base"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="border p-3 rounded-xl outline-none text-sm sm:text-base"
                />

                <input
                  type="text"
                  name="project"
                  placeholder="Project Type (Website, Automation, etc.)"
                  className="border p-3 rounded-xl outline-none text-sm sm:text-base"
                />

                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  rows="5"
                  required
                  className="border p-3 rounded-xl outline-none text-sm sm:text-base"
                />

                <button
                  type="submit"
                  className="bg-black text-white py-3 rounded-xl hover:scale-105 transition text-sm sm:text-base"
                >
                  Send Message
                </button>

              </form>

            </motion.div>

            {/* CALENDLY */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >

              {/* BOOK CALL BOX */}
              <div className="border rounded-2xl sm:rounded-3xl p-6 sm:p-8">

                <h3 className="text-xl font-semibold mb-3">
                  Book a Sales Call
                </h3>

                <p className="text-gray-600 text-sm sm:text-base mb-6">
                  Skip the back-and-forth and book a direct call with us.
                </p>

                <a
                  href="https://calendly.com/techuvo-dev/sales-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-black text-white py-3 rounded-xl text-center hover:scale-105 transition"
                >
                  Open Calendly Booking
                </a>

              </div>

              {/* INLINE CALENDLY EMBED */}
              <div className="border rounded-2xl sm:rounded-3xl overflow-hidden">
                <iframe
                  src="https://calendly.com/techuvo-dev/sales-call"
                  className="w-full h-[450px] sm:h-[600px]"
                  frameBorder="0"
                ></iframe>
              </div>

              {/* INFO */}
              <div className="border rounded-2xl sm:rounded-3xl p-6 sm:p-8">

                <h3 className="text-lg font-semibold mb-3">
                  Why Book a Call?
                </h3>

                <ul className="text-gray-600 text-sm sm:text-base space-y-2">
                  <li>✔ Get a custom strategy for your business</li>
                  <li>✔ Clear pricing & timeline breakdown</li>
                  <li>✔ No obligation consultation</li>
                </ul>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

    </div>
  );
}