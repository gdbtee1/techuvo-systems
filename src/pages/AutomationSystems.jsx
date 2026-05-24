import PageWrapper from "../components/PageWrapper";
import { Link } from "react-router-dom";

export default function AutomationSystems() {
  return (
    <PageWrapper
      title="Business Automation Systems"
      subtitle="We build AI-powered systems that save time, reduce workload, and scale your business automatically."
    >
      {/* HERO SECTION */}
      <div className="bg-black text-white rounded-3xl p-8 md:p-14 mb-10">
        <h2 className="text-2xl md:text-4xl font-bold">
          Automate Repetitive Work. Scale Without Extra Staff.
        </h2>

        <p className="mt-4 text-gray-300 text-sm md:text-base max-w-2xl">
          We design custom automation systems that handle leads, emails,
          follow-ups, bookings, and workflows — so your business runs
          even when you're not working.
        </p>

        <Link
          to="/contact"
          className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-xl font-medium hover:scale-105 transition"
        >
          Get Automation Setup
        </Link>
      </div>

      {/* BENEFITS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="border rounded-2xl p-6">
          <h3 className="font-bold text-lg">⚡ Save Time</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Eliminate repetitive manual tasks instantly.
          </p>
        </div>

        <div className="border rounded-2xl p-6">
          <h3 className="font-bold text-lg">📈 Increase Revenue</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Never miss leads or follow-ups again.
          </p>
        </div>

        <div className="border rounded-2xl p-6">
          <h3 className="font-bold text-lg">🤖 AI Powered</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Smart workflows that run automatically 24/7.
          </p>
        </div>

      </div>

      {/* WHAT WE AUTOMATE */}
      <div className="bg-gray-50 rounded-3xl p-8 md:p-14 mb-10">

        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          What We Can Automate
        </h2>

        <ul className="space-y-3 text-gray-700 text-sm md:text-base">
          <li>• Lead capture & CRM systems</li>
          <li>• Automated email follow-ups</li>
          <li>• Appointment booking systems</li>
          <li>• Customer onboarding flows</li>
          <li>• AI chat assistants</li>
        </ul>

      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          Ready to automate your business?
        </h2>

        <p className="mt-3 text-gray-600">
          Let’s build systems that run your business on autopilot.
        </p>

        <Link
          to="/contact"
          className="inline-block mt-6 bg-black text-white px-8 py-3 rounded-xl hover:scale-105 transition"
        >
          Start Automation Project
        </Link>
      </div>
    </PageWrapper>
  );
}