import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return (
    <div className="page-shell architecture-grid">
      {/* Background Lighting */}
      <div
        className="glow-orb"
        style={{
          top: "-12rem",
          left: "-10rem",
        }}
      />

      <div
        className="glow-orb glow-orb-secondary"
        style={{
          right: "-10rem",
          top: "25rem",
        }}
      />

      <span
        className="coordinate-label"
        style={{
          top: "8rem",
          left: "2rem",
        }}
      >
        TECHUVO // HQ
      </span>

      <span
        className="coordinate-label"
        style={{
          bottom: "2rem",
          right: "2rem",
        }}
      >
        BUILD • DESIGN • GROW
      </span>

      <Navbar />

      <main className="main-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;