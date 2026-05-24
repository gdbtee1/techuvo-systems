import PageWrapper from "../components/PageWrapper";

export default function Pricing() {
  return (
    <PageWrapper
      title="Pricing"
      subtitle="Simple, transparent pricing for every business stage."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="border rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold">Starter</h2>
          <p className="mt-2 text-gray-600">$299</p>
        </div>

        <div className="border rounded-2xl p-6 shadow-sm scale-105 bg-black text-white">
          <h2 className="text-xl font-bold">Business</h2>
          <p className="mt-2">$699</p>
        </div>

        <div className="border rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold">Enterprise</h2>
          <p className="mt-2 text-gray-600">$1499+</p>
        </div>

      </div>
    </PageWrapper>
  );
}