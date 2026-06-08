import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { name: "Website Development", link: "/services" },
  { name: "UI / UX Design", link: "/services" },
  { name: "Brand Identity", link: "/services" },
  { name: "SEO Optimization", link: "/services" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleMenu = (menu) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setActiveMenu(null);
  };

  const filteredServices = services.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <nav className="sticky top-0 z-50 border-b border-white/20 bg-white/75 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="h-20 flex items-center justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-8">
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-xl hover:bg-black/5 transition"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

            <Link to="/" className="flex flex-col leading-none">
              <span className="text-2xl md:text-3xl font-bold tracking-tight">
                Techuvo
              </span>
              <span className="text-[10px] md:text-xs tracking-[0.25em] text-gray-500 uppercase mt-1">
                Digital Systems
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <Link className="hover:text-gray-500 transition" to="/">Home</Link>
              <Link className="hover:text-gray-500 transition" to="/services">Services</Link>
              <Link className="hover:text-gray-500 transition" to="/shop">Shop</Link>
              <Link className="hover:text-gray-500 transition" to="/contact">Contact</Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="relative">
              <button
                onClick={() => toggleMenu("search")}
                className="p-2 rounded-xl hover:bg-black/5 transition"
                aria-label="Search"
              >
                <Search size={20} />
              </button>

              <AnimatePresence>
                {activeMenu === "search" && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.96 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="absolute right-0 top-14 w-72 rounded-2xl border bg-white shadow-2xl p-4"
                  >
                    <input
                      type="text"
                      placeholder="Search services"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full border rounded-xl p-3 outline-none text-sm focus:border-black transition"
                    />

                    <div className="mt-3 flex flex-col">
                      {filteredServices.length > 0 ? (
                        filteredServices.map((item, i) => (
                          <Link
                            key={i}
                            to={item.link}
                            onClick={() => {
                              setActiveMenu(null);
                              setSearchTerm("");
                            }}
                            className="p-3 rounded-xl hover:bg-gray-100 text-sm transition"
                          >
                            {item.name}
                          </Link>
                        ))
                      ) : (
                        <p className="text-sm text-gray-500 p-2">
                          No results found
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/portfolio"
              className="hidden sm:block text-sm font-medium hover:text-gray-500 transition"
            >
              Portfolio
            </Link>

            <Link
              to="/contact"
              className="hidden sm:block bg-black text-white px-4 py-2 rounded-xl text-sm hover:scale-105 transition"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* MOBILE SLIDE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobile}
              className="fixed inset-0 top-20 bg-black/20 md:hidden"
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 28,
              }}
              className="fixed left-0 top-20 h-[calc(100vh-5rem)] w-[85%] max-w-sm bg-white md:hidden shadow-2xl border-r"
            >
              <div className="px-6 py-8 flex flex-col gap-2 text-base font-medium">
                {[
                  ["Home", "/"],
                  ["Services", "/services"],
                  ["Shop", "/shop"],
                  ["Portfolio", "/portfolio"],
                  ["Contact", "/contact"],
                ].map(([label, path]) => (
                  <Link
                    key={label}
                    to={path}
                    onClick={closeMobile}
                    className="px-4 py-4 rounded-2xl hover:bg-gray-100 transition"
                  >
                    {label}
                  </Link>
                ))}

                <Link
                  to="/contact"
                  onClick={closeMobile}
                  className="mt-4 bg-black text-white text-center px-5 py-4 rounded-2xl hover:scale-[1.02] transition"
                >
                  Start a Project
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}