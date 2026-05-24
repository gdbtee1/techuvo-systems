import PageWrapper from "../components/PageWrapper";
import { Link } from "react-router-dom";

export default function BrandIdentity() {
  return (
    <PageWrapper
      title="Brand Identity Systems"
      subtitle="We design complete brand systems that make your business look trustworthy, modern, and premium."
    >
      {/* HERO */}
      <div className="bg-black text-white rounded-3xl p-8 md:p-14 mb-10">
        <h2 className="text-2xl md:text-4xl font-bold">
          Build a Brand People Trust Instantly
        </h2>

        <p className="mt-4 text-gray-300 text-sm md:text-base max-w-2xl">
          Your brand is more than a logo — it’s how customers perceive your business.
          We create full identity systems that communicate value, professionalism, and clarity.
        </p>

        <Link
          to="/contact"
          className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-xl font-medium hover:scale-105 transition"
        >
          Build My Brand
        </Link>
      </div>

      {/* BENEFITS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="border rounded-2xl p-6">
          <h3 className="font-bold text-lg">🎯 Clear Identity</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Define exactly how your business should look and feel.
          </p>
        </div>

        <div className="border rounded-2xl p-6">
          <h3 className="font-bold text-lg">💎 Premium Look</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Stand out from competitors with a modern brand system.
          </p>
        </div>

        <div className="border rounded-2xl p-6">
          <h3 className="font-bold text-lg">📈 More Trust</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Better branding leads directly to higher conversions.
          </p>
        </div>

      </div>

      {/* WHAT WE DESIGN */}
      <div className="bg-gray-50 rounded-3xl p-8 md:p-14 mb-10">

        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          What’s Included
        </h2>

        <ul className="space-y-3 text-gray-700 text-sm md:text-base">
          <li>• Logo design & variations</li>
          <li>• Color palette system</li>
          <li>• Typography selection</li>
          <li>• Brand guidelines</li>
          <li>• Visual identity direction</li>
        </ul>

      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          Ready to upgrade your brand?
        </h2>

        <p className="mt-3 text-gray-600">
          Let’s create a brand identity that makes your business stand out.
        </p>

        <Link
          to="/contact"
          className="inline-block mt-6 bg-black text-white px-8 py-3 rounded-xl hover:scale-105 transition"
        >
          Start Branding Project
        </Link>
      </div>
    </PageWrapper>
  );
}