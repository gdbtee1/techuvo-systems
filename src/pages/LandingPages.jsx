import PageWrapper from "../components/PageWrapper";
import { Link } from "react-router-dom";

export default function LandingPages() {
  return (
    <PageWrapper
      title="Landing Page Funnels"
      subtitle="High-converting landing pages designed to turn traffic into paying customers."
    >
      {/* HERO */}
      <div className="bg-black text-white rounded-3xl p-8 md:p-14 mb-10">
        <h2 className="text-2xl md:text-4xl font-bold">
          Turn Clicks Into Customers With High-Converting Pages
        </h2>

        <p className="mt-4 text-gray-300 text-sm md:text-base max-w-2xl">
          We design landing pages engineered for one thing: conversion.
          Every section is built to guide visitors toward action.
        </p>

        <Link
          to="/contact"
          className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-xl font-medium hover:scale-105 transition"
        >
          Build My Landing Page
        </Link>
      </div>

      {/* BENEFITS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="border rounded-2xl p-6">
          <h3 className="font-bold text-lg">📈 Higher Conversions</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Built using proven psychology-driven layouts.
          </p>
        </div>

        <div className="border rounded-2xl p-6">
          <h3 className="font-bold text-lg">⚡ Fast Loading</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Optimized for speed and mobile performance.
          </p>
        </div>

        <div className="border rounded-2xl p-6">
          <h3 className="font-bold text-lg">🎯 Focused Messaging</h3>
          <p className="text-gray-600 mt-2 text-sm">
            One goal per page = higher conversion rates.
          </p>
        </div>

      </div>

      {/* STRUCTURE */}
      <div className="bg-gray-50 rounded-3xl p-8 md:p-14 mb-10">

        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          What We Build Into Every Landing Page
        </h2>

        <ul className="space-y-3 text-gray-700 text-sm md:text-base">
          <li>• Attention-grabbing hero section</li>
          <li>• Clear value proposition</li>
          <li>• Social proof & trust elements</li>
          <li>• Feature breakdown sections</li>
          <li>• Strong call-to-action blocks</li>
        </ul>

      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          Ready to increase your conversions?
        </h2>

        <p className="mt-3 text-gray-600">
          Let’s build a landing page that actually sells.
        </p>

        <Link
          to="/contact"
          className="inline-block mt-6 bg-black text-white px-8 py-3 rounded-xl hover:scale-105 transition"
        >
          Start My Landing Page
        </Link>
      </div>
    </PageWrapper>
  );
}