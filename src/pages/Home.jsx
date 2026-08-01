import { useEffect } from "react";

import Hero from "../components/home/Hero";
import SystemBridge from "../components/home/SystemBridge";
import OfficeMap from "../components/home/OfficeMap";

import ReceptionRoom from "../components/home/ReceptionRoom";
import Boardroom from "../components/home/Boardroom";
import TechLab from "../components/home/TechLab";
import DesignStudio from "../components/home/DesignStudio";
import FounderOffice from "../components/home/FounderOffice";
import ClientLounge from "../components/home/ClientLounge";
import ContactDesk from "../components/home/ContactDesk";

import FeaturedProjects from "../components/home/FeaturedProjects";
import ServicesPreview from "../components/home/ServicesPreview";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Process from "../components/home/Process";
import Testimonials from "../components/home/Testimonials";
import Locations from "../components/home/Locations";
import CallToAction from "../components/home/CallToAction";

function Home() {
  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      "Techuvo | Website Design, Development & Digital Systems in Michigan";

    const description =
      "Techuvo creates modern websites, landing pages, brand systems, and business automation for companies across Detroit, Ypsilanti, Ann Arbor, and surrounding Michigan communities.";

    let metaDescription = document.querySelector(
      'meta[name="description"]',
    );

    const metaDescriptionWasCreated = !metaDescription;

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    const previousDescription =
      metaDescription.getAttribute("content");

    metaDescription.setAttribute("content", description);

    return () => {
      document.title = previousTitle;

      if (metaDescriptionWasCreated) {
        metaDescription.remove();
        return;
      }

      if (previousDescription !== null) {
        metaDescription.setAttribute(
          "content",
          previousDescription,
        );
      } else {
        metaDescription.removeAttribute("content");
      }
    };
  }, []);

  return (
    <main className="overflow-hidden">
      <Hero />

      <SystemBridge />

      <section
        id="services-workspace"
        aria-labelledby="services-workspace-heading"
        className="relative"
      >
        <h2
          id="services-workspace-heading"
          className="sr-only"
        >
          Techuvo services workspace
        </h2>

        <OfficeMap />
      </section>

      <ReceptionRoom />

      <Boardroom />

      <TechLab />

      <DesignStudio />

      <FounderOffice />

      <ClientLounge />

      <ContactDesk />

      <FeaturedProjects />

      <ServicesPreview />

      <WhyChooseUs />

      <Process />

      <Testimonials />

      <Locations />

      <CallToAction />
    </main>
  );
}

export default Home;