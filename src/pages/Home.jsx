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


function SeasonalOffer() {
  return (
    <section
      aria-label="Seasonal website offer"
      className="relative z-20 -mt-1 overflow-hidden border-y border-blue-100 bg-white"
    >
      <style>{`
        @keyframes seasonalOfferSweep {
          0% { transform: translateX(-120%); opacity: 0; }
          18% { opacity: .85; }
          52% { opacity: .45; }
          100% { transform: translateX(340%); opacity: 0; }
        }

        @keyframes seasonalOfferDot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(.72); opacity: .45; }
        }

        .seasonal-offer-sweep {
          animation: seasonalOfferSweep 7s ease-in-out infinite;
        }

        .seasonal-offer-dot {
          animation: seasonalOfferDot 2.4s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .seasonal-offer-sweep,
          .seasonal-offer-dot {
            animation: none;
          }
        }
      `}</style>

      <div className="site-container py-4 sm:py-5">
        <div className="relative overflow-hidden rounded-[1.35rem] border border-slate-200 bg-slate-950 px-5 py-5 text-white shadow-[0_18px_55px_rgba(15,23,42,0.10)] sm:px-6 lg:px-8">
          <div
            aria-hidden="true"
            className="seasonal-offer-sweep pointer-events-none absolute inset-y-0 left-0 w-28 -skew-x-12 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent blur-xl"
          />

          <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex min-w-0 items-start gap-4">
              <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-blue-400/25 bg-blue-500/10">
                <span className="seasonal-offer-dot h-2.5 w-2.5 rounded-full bg-blue-300" />
              </span>

              <div className="min-w-0">
                <p className="text-[0.66rem] font-extrabold uppercase tracking-[0.17em] text-blue-300">
                  Seasonal offer
                </p>

                <h2 className="mt-1.5 text-lg font-bold tracking-[-0.025em] text-white sm:text-xl">
                  Start with a $50 refundable website concept.
                </h2>

                <p className="mt-1.5 max-w-3xl text-sm leading-6 text-slate-300">
                  Approve the direction and we continue. If it is not the right fit,
                  your concept deposit is refunded.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t border-white/10 pt-4 sm:flex-row sm:items-center lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
              <div className="sm:min-w-[12rem]">
                <p className="text-[0.64rem] font-extrabold uppercase tracking-[0.15em] text-slate-500">
                  Ongoing care
                </p>
                <p className="mt-1 text-sm font-bold text-white">
                  $49/mo hosting, security & support
                </p>
              </div>

              <a
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-extrabold text-slate-950 transition hover:-translate-y-0.5 hover:bg-blue-50"
              >
                Claim the offer
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[80] px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
      <div className="mx-auto flex max-w-md items-center gap-2 rounded-[1.15rem] border border-slate-200/80 bg-white/95 p-2 shadow-[0_-8px_35px_rgba(15,23,42,0.14)] backdrop-blur-xl">
        <a
          href="https://calendly.com/techuvo-dev/new-meeting"
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 flex-1 items-center justify-center rounded-[0.9rem] bg-slate-950 px-4 text-sm font-extrabold text-white transition active:scale-[0.98]"
        >
          Book call
          <span aria-hidden="true" className="ml-2">
            →
          </span>
        </a>

        <a
          href="#featured-work"
          className="inline-flex min-h-12 flex-1 items-center justify-center rounded-[0.9rem] border border-slate-200 bg-white px-4 text-sm font-extrabold text-slate-950 transition active:scale-[0.98]"
        >
          View work
        </a>
      </div>
    </div>
  );
}

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

      <SeasonalOffer />

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

      <div id="featured-work" className="scroll-mt-24">
        <FeaturedProjects />
      </div>

      <ServicesPreview />

      <WhyChooseUs />

      <Process />

      <Testimonials />

      <Locations />

      <CallToAction />

      <MobileActionBar />
    </main>
  );
}

export default Home;