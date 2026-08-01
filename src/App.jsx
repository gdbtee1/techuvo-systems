import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";

import WebsiteDevelopment from "./pages/services/WebsiteDevelopment";
import LandingPages from "./pages/services/LandingPages";
import BrandIdentity from "./pages/services/BrandIdentity";
import AutomationSystems from "./pages/services/AutomationSystems";

import Detroit from "./pages/locations/Detroit";
import Ypsilanti from "./pages/locations/Ypsilanti";
import AnnArbor from "./pages/locations/AnnArbor";
import Dearborn from "./pages/locations/Dearborn";
import Livonia from "./pages/locations/Livonia";
import Southfield from "./pages/locations/Southfield";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="/services/website-development"
          element={<WebsiteDevelopment />}
        />
        <Route path="/services/landing-pages" element={<LandingPages />} />
        <Route path="/services/brand-identity" element={<BrandIdentity />} />
        <Route
          path="/services/automation-systems"
          element={<AutomationSystems />}
        />

        <Route path="/locations/detroit" element={<Detroit />} />
        <Route path="/locations/ypsilanti" element={<Ypsilanti />} />
        <Route path="/locations/ann-arbor" element={<AnnArbor />} />
        <Route path="/locations/dearborn" element={<Dearborn />} />
        <Route path="/locations/livonia" element={<Livonia />} />
        <Route path="/locations/southfield" element={<Southfield />} />

        <Route path="/services" element={<Navigate to="/" replace />} />
        <Route path="/locations" element={<Navigate to="/" replace />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;