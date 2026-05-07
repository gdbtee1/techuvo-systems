import { useState } from "react";

import {
  Menu,
  X,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";

import { Link } from "react-router-dom";

const services = [
  {
    name: "Website Development",
    link: "/services",
  },

  {
    name: "UI / UX Design",
    link: "/services",
  },

  {
    name: "Brand Identity",
    link: "/services",
  },

  {
    name: "SEO Optimization",
    link: "/services",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [activeMenu, setActiveMenu] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");

  const toggleMenu = (menu) => {
    setActiveMenu((prev) =>
      prev === menu ? null : menu
    );
  };

  const filteredServices = services.filter((item) =>
    item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <nav className="sticky top-0 z-50 border-b border-white/20 bg-white/70 backdrop-blur-xl">

      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">

        {/* NAVBAR */}
        <div className="h-20 flex items-center justify-between">

          {/* LEFT */}
          <div className="flex items-center gap-10">

            {/* MOBILE MENU */}
            <button
              onClick={() =>
                setMobileOpen(!mobileOpen)
              }
              className="md:hidden"
            >
              {mobileOpen ? (
                <X size={26} />
              ) : (
                <Menu size={26} />
              )}
            </button>

            {/* LOGO */}
            <Link
              to="/"
              className="flex flex-col leading-none"
            >

              <span className="text-2xl md:text-3xl font-bold tracking-tight">
                Techuvo
              </span>

              <span className="text-[10px] md:text-xs tracking-[0.25em] text-gray-500 uppercase mt-1">
                Digital Systems
              </span>

            </Link>

            {/* DESKTOP LINKS */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">

              <Link
                className="hover:text-gray-500 transition"
                to="/"
              >
                Home
              </Link>

              <Link
                className="hover:text-gray-500 transition"
                to="/services"
              >
                Services
              </Link>

              <Link
                className="hover:text-gray-500 transition"
                to="/shop"
              >
                Shop
              </Link>

              <Link
                className="hover:text-gray-500 transition"
                to="/contact"
              >
                Contact
              </Link>

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-5 relative">

            {/* SEARCH */}
            <div className="relative">

              <button
                onClick={() =>
                  toggleMenu("search")
                }
              >
                <Search
                  className="hover:scale-110 transition"
                  size={21}
                />
              </button>

              {activeMenu === "search" && (
                <div className="absolute right-0 top-14 w-72 rounded-2xl border bg-white shadow-2xl p-4">

                  <input
                    type="text"
                    placeholder="Search services"
                    value={searchTerm}
                    onChange={(e) =>
                      setSearchTerm(
                        e.target.value
                      )
                    }
                    className="w-full border rounded-xl p-3 outline-none text-sm"
                  />

                  <div className="mt-3 flex flex-col">

                    {filteredServices.length >
                    0 ? (
                      filteredServices.map(
                        (item, i) => (
                          <Link
                            key={i}
                            to={item.link}
                            onClick={() => {
                              setActiveMenu(
                                null
                              );
                              setSearchTerm(
                                ""
                              );
                            }}
                            className="p-3 rounded-xl hover:bg-gray-100 text-sm transition"
                          >
                            {item.name}
                          </Link>
                        )
                      )
                    ) : (
                      <p className="text-sm text-gray-500 p-2">
                        No results found
                      </p>
                    )}

                  </div>

                </div>
              )}

            </div>

            {/* CART */}
            <div className="relative">

              <button
                onClick={() =>
                  toggleMenu("cart")
                }
              >
                <ShoppingCart
                  className="hover:scale-110 transition"
                  size={21}
                />
              </button>

              {activeMenu === "cart" && (
                <div className="absolute right-0 top-14 w-64 rounded-2xl border bg-white shadow-2xl p-5">

                  <h3 className="font-semibold mb-4">
                    Services
                  </h3>

                  <div className="space-y-3 text-sm">

                    <p>
                      Website Development
                    </p>

                    <p>
                      Ecommerce Solutions
                    </p>

                    <p>
                      SEO Optimization
                    </p>

                  </div>

                </div>
              )}

            </div>

            {/* PROFILE */}
            <div className="relative">

              <button
                onClick={() =>
                  toggleMenu("profile")
                }
              >
                <User
                  className="hover:scale-110 transition"
                  size={21}
                />
              </button>

              {activeMenu === "profile" && (
                <div className="absolute right-0 top-14 w-60 rounded-2xl border bg-white shadow-2xl p-5">

                  <div className="flex flex-col text-sm">

                    <button className="text-left p-2 rounded-lg hover:bg-gray-100 transition">
                      Sign In
                    </button>

                    <button className="text-left p-2 rounded-lg hover:bg-gray-100 transition">
                      Create Account
                    </button>

                    <button className="text-left p-2 rounded-lg hover:bg-gray-100 transition">
                      Orders
                    </button>

                    <button className="text-left p-2 rounded-lg hover:bg-gray-100 transition">
                      My Account
                    </button>

                  </div>

                </div>
              )}

            </div>

          </div>

        </div>

      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-white">

          <div className="px-6 py-6 flex flex-col gap-5 text-sm font-medium">

            <Link
              to="/"
              onClick={() =>
                setMobileOpen(false)
              }
            >
              Home
            </Link>

            <Link
              to="/services"
              onClick={() =>
                setMobileOpen(false)
              }
            >
              Services
            </Link>

            <Link
              to="/shop"
              onClick={() =>
                setMobileOpen(false)
              }
            >
              Shop
            </Link>

            <Link
              to="/contact"
              onClick={() =>
                setMobileOpen(false)
              }
            >
              Contact
            </Link>

          </div>

        </div>
      )}

    </nav>
  );
}