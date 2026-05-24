import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

// NEW PRODUCT PAGES
import Pricing from "./pages/Pricing";
import WebsiteDevelopment from "./pages/WebsiteDevelopment";
import AutomationSystems from "./pages/AutomationSystems";
import LandingPages from "./pages/LandingPages";
import AIIntegrations from "./pages/AIIntegrations";
import BrandIdentity from "./pages/BrandIdentity";
import StartupLaunch from "./pages/StartupLaunch";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Routes>
        {/* MAIN PAGES */}
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />

        {/* NEW PRODUCT PAGES */}
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/website-development" element={<WebsiteDevelopment />} />
        <Route path="/automation-systems" element={<AutomationSystems />} />
        <Route path="/landing-pages" element={<LandingPages />} />
        <Route path="/ai-integrations" element={<AIIntegrations />} />
        <Route path="/brand-identity" element={<BrandIdentity />} />
        <Route path="/startup-launch" element={<StartupLaunch />} />
      </Routes>
    </div>
  );
}