import PageWrapper from "../components/PageWrapper";
import { Link } from "react-router-dom";

export default function StartupLaunch() {
  return (
    <PageWrapper
      title="Startup Launch Systems"
      subtitle="We build complete digital launch systems that take your idea from concept to a fully operating online business."
    >
      {/* HERO */}
      <div className="bg-black text-white rounded-3xl p-8 md:p-14 mb-10">
        <h2 className="text-2xl md:text-4xl font-bold">
          Launch Your Business the Right Way From Day One
        </h2>

        <p className="mt-4 text-gray-300 text-sm md:text-base max-w-2xl">
          We don’t just build websites — we build complete startup ecosystems:
          branding, website, automation, funnels, and AI systems all working together.
        </p>

        <Link
          to="/contact"
          className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-xl font-medium hover:scale-105 transition"
        >
          Launch My Startup
        </Link>
      </div>

      {/* BENEFITS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="border rounded-2xl p-6">
          <h3 className="font-bold text-lg">🚀 Fast Launch</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Go from idea to live business in record time.
          </p>
        </div>

        <div className="border rounded-2xl p-6">
          <h3 className="font-bold text-lg">💡 Full System</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Website, branding, automation, and funnels all included.
          </p>
        </div>

        <div className="border rounded-2xl p-6">
          <h3 className="font-bold text-lg">📈 Growth Ready</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Built to scale from day one without rebuilding later.
          </p>
        </div>

      </div>

      {/* WHAT’S INCLUDED */}
      <div className="bg-gray-50 rounded-3xl p-8 md:p-14 mb-10">

        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Complete Startup Package Includes
        </h2>

        <ul className="space-y-3 text-gray-700 text-sm md:text-base">
          <li>• Full business website</li>
          <li>• Brand identity system</li>
          <li>• Lead capture & funnel setup</li>
          <li>• Automation workflows</li>
          <li>• AI integration tools</li>
          <li>• Conversion optimization</li>
        </ul>

      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          Ready to launch your startup?
        </h2>

        <p className="mt-3 text-gray-600">
          Let’s build everything you need to go live and start growing.
        </p>

        <Link
          to="/contact"
          className="inline-block mt-6 bg-black text-white px-8 py-3 rounded-xl hover:scale-105 transition"
        >
          Start Full Launch System
        </Link>
      </div>
    </PageWrapper>
  );
}