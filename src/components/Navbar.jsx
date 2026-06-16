import { useState } from "react";
import {
  Menu,
  X,
  Search,
  ChevronDown,
  ArrowRight,
  ArrowUpRight,
  Phone,
  Sparkles,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Shop", path: "/shop" },
  { name: "Contact", path: "/contact" },
];

const services = [
  "Website Development",
  "UI / UX Design",
  "Brand Identity",
  "SEO Optimization",
  "AI Business Systems",
];

const signalItems = [
  "Premium Websites",
  "AI Systems",
  "Automation",
  "Brand Identity",
  "SEO Growth",
  "Digital Infrastructure",
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const phoneNumber = "313-000-0000";

  const filteredServices = services.filter((service) =>
    service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const closeAll = () => {
    setMobileOpen(false);
    setServicesOpen(false);
    setSearchOpen(false);
    setSearchTerm("");
  };

  return (
    <>
      <nav className="sticky top-0 z-[120] border-b border-black/10 bg-white/85 backdrop-blur-2xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="flex h-20 items-center justify-between">
            <Link to="/" onClick={closeAll}>
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-black tracking-tight md:text-3xl">
                  Techuvo
                </span>
                <span className="mt-1 text-[10px] uppercase tracking-[0.32em] text-gray-500">
                  Digital Systems
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden items-center gap-2 rounded-full border border-black/10 bg-white/70 px-2 py-2 shadow-sm md:flex">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-black text-white"
                      : "text-gray-700 hover:bg-black/5 hover:text-black"
                  }`
                }
              >
                Home
              </NavLink>

              <div className="relative">
                <button
                  onClick={() => setServicesOpen((prev) => !prev)}
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-black/5 hover:text-black"
                >
                  Services <ChevronDown size={15} />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.97 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-0 top-12 w-72 rounded-3xl border border-black/10 bg-white p-3 shadow-2xl"
                    >
                      {services.map((service) => (
                        <Link
                          key={service}
                          to="/services"
                          onClick={closeAll}
                          className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-black"
                        >
                          {service}
                          <ArrowRight size={15} />
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.slice(2).map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 text-sm font-medium transition ${
                      isActive
                        ? "bg-black text-white"
                        : "text-gray-700 hover:bg-black/5 hover:text-black"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              <div className="relative hidden sm:block">
                <button
                  onClick={() => setSearchOpen((prev) => !prev)}
                  className="rounded-full border border-black/10 bg-white p-3 transition hover:bg-gray-100"
                  aria-label="Search"
                >
                  <Search size={18} />
                </button>

                <AnimatePresence>
                  {searchOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.96 }}
                      transition={{ duration: 0.18 }}
                      className="absolute right-0 top-14 w-80 rounded-3xl border border-black/10 bg-white p-4 shadow-2xl"
                    >
                      <input
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search Techuvo services..."
                        className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none transition focus:border-black"
                      />

                      <div className="mt-3 space-y-1">
                        {filteredServices.length ? (
                          filteredServices.map((service) => (
                            <Link
                              key={service}
                              to="/services"
                              onClick={closeAll}
                              className="block rounded-2xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-black"
                            >
                              {service}
                            </Link>
                          ))
                        ) : (
                          <p className="px-4 py-3 text-sm text-gray-500">
                            No services found.
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/contact"
                className="hidden rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-gray-900 sm:block"
              >
                Start a Project
              </Link>

              <button
                onClick={() => setMobileOpen((prev) => !prev)}
                className={`relative z-[160] rounded-full border p-3 transition md:hidden ${
                  mobileOpen
                    ? "border-white/20 bg-white text-black"
                    : "border-black/10 bg-white text-black hover:bg-gray-100"
                }`}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={21} /> : <Menu size={21} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Signal Rail */}
      {!mobileOpen && (
        <div className="sticky top-20 z-[80] border-b border-black/10 bg-white/70 backdrop-blur-2xl">
          <div className="mx-auto max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-10">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex w-max gap-3 py-3"
            >
              {[...signalItems, ...signalItems].map((item, index) => (
                <motion.div
                  key={`${item}-${index}`}
                  animate={{
                    y: [0, -4, 0, 3, 0],
                    rotate: [0, -0.7, 0.7, 0],
                  }}
                  transition={{
                    duration: 3.2 + index * 0.08,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-gray-600 shadow-sm sm:text-xs"
                >
                  <Sparkles size={12} />
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      )}

      {/* Techuvo Mobile Command Screen */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -40,
              scale: 0.96,
              borderRadius: "0 0 3rem 3rem",
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              borderRadius: "0rem",
            }}
            exit={{
              opacity: 0,
              y: -40,
              scale: 0.96,
              borderRadius: "0 0 3rem 3rem",
            }}
            transition={{
              duration: 0.55,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="fixed inset-0 z-[100] overflow-y-auto bg-[#050816] px-4 pb-8 pt-28 text-white md:hidden"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2563eb55,transparent_35%),radial-gradient(circle_at_bottom_left,#14b8a655,transparent_35%)]" />

            <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-xl flex-col justify-between">
              <div>
                <div className="mb-8">
                  <p className="text-xs font-black uppercase tracking-[0.35em] text-cyan-300">
                    Techuvo Command
                  </p>

                  <h2 className="mt-3 text-4xl font-black leading-none tracking-tight">
                    Where do you want to go?
                  </h2>
                </div>

                <div className="flex flex-col gap-3">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + index * 0.06 }}
                    >
                      <Link
                        to={link.path}
                        onClick={closeAll}
                        className="group flex items-center justify-between rounded-[1.7rem] border border-white/10 bg-white/[0.07] px-5 py-5 shadow-lg shadow-black/20 backdrop-blur-xl transition hover:bg-white hover:text-black"
                      >
                        <div>
                          <span className="text-xs font-black text-cyan-300 group-hover:text-black/50">
                            0{index + 1}
                          </span>
                          <p className="mt-1 text-3xl font-black tracking-tight">
                            {link.name}
                          </p>
                        </div>

                        <ArrowUpRight size={24} />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42 }}
                className="mt-8 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-5 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl"
              >
                <p className="text-sm font-semibold text-cyan-200">
                  Ready to build with Techuvo?
                </p>

                <h3 className="mt-2 text-3xl font-black tracking-tight">
                  Get your quote today.
                </h3>

                <div className="mt-5 grid gap-3">
                  <a
                    href={`tel:${phoneNumber.replaceAll("-", "")}`}
                    className="flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-4 text-sm font-bold"
                  >
                    <Phone size={16} />
                    {phoneNumber}
                  </a>

                  <Link
                    to="/contact"
                    onClick={closeAll}
                    className="flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-4 text-sm font-black text-black"
                  >
                    Get Your Quote
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}