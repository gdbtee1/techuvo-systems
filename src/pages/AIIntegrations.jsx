import PageWrapper from "../components/PageWrapper";
import { Link } from "react-router-dom";

export default function AIIntegrations() {
  return (
    <PageWrapper
      title="AI Integrations"
      subtitle="We integrate powerful AI tools into your business to automate, optimize, and scale operations."
    >
      {/* HERO */}
      <div className="bg-black text-white rounded-3xl p-8 md:p-14 mb-10">
        <h2 className="text-2xl md:text-4xl font-bold">
          Bring AI Into Your Business Workflow
        </h2>

        <p className="mt-4 text-gray-300 text-sm md:text-base max-w-2xl">
          From AI chat systems to automation pipelines, we connect modern AI tools
          directly into your business so you can operate faster and smarter.
        </p>

        <Link
          to="/contact"
          className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-xl font-medium hover:scale-105 transition"
        >
          Get AI Integration
        </Link>
      </div>

      {/* FEATURES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="border rounded-2xl p-6">
          <h3 className="font-bold text-lg">🤖 AI Chat Systems</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Smart assistants that handle customer questions 24/7.
          </p>
        </div>

        <div className="border rounded-2xl p-6">
          <h3 className="font-bold text-lg">⚙️ Workflow Automation</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Automate repetitive tasks across your business tools.
          </p>
        </div>

        <div className="border rounded-2xl p-6">
          <h3 className="font-bold text-lg">📊 Smart Data Tools</h3>
          <p className="text-gray-600 mt-2 text-sm">
            AI-powered insights to improve decisions and performance.
          </p>
        </div>

      </div>

      {/* USE CASES */}
      <div className="bg-gray-50 rounded-3xl p-8 md:p-14 mb-10">

        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Where We Apply AI
        </h2>

        <ul className="space-y-3 text-gray-700 text-sm md:text-base">
          <li>• Customer support automation</li>
          <li>• Lead qualification systems</li>
          <li>• Content generation workflows</li>
          <li>• CRM automation & follow-ups</li>
          <li>• Business reporting dashboards</li>
        </ul>

      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          Ready to upgrade your business with AI?
        </h2>

        <p className="mt-3 text-gray-600">
          Let’s integrate intelligent systems into your workflow.
        </p>

        <Link
          to="/contact"
          className="inline-block mt-6 bg-black text-white px-8 py-3 rounded-xl hover:scale-105 transition"
        >
          Start AI Integration
        </Link>
      </div>
    </PageWrapper>
  );
}