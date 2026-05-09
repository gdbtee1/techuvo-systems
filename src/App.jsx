import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-white">

      {/* NAVBAR */}
      <Navbar />

      {/* ROUTES */}
      <Routes>
        {/* MAIN PAGES */}
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        {/* PORTFOLIO PAGE */}
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>

    </div>
  );
}