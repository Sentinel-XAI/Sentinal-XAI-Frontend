"use client";

import { Button } from "@/components/ui/button";

export default function PricingPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-center mb-8">Pricing Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Community Plan */}
        <div className="p-8 border rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-center mb-4">Community</h2>
          <p className="text-lg text-center mb-6">$0 per month</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>10k requests per month</li>
            <li>8k max prompt size</li>
            <li>SaaS hosting</li>
            <li>Community support</li>
            <li>API Support</li>
            <li>Dashboards</li>
            <li>Reports</li>
          </ul>
          <Button className="mt-6 bg-black text-white w-full py-2 rounded-md hover:bg-gray-800 transition-colors duration-300">Get Started</Button>
        </div>
        {/* Enterprise Plan */}
        <div className="p-8 border rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-center mb-4">Enterprise</h2>
          <p className="text-lg text-center mb-6">Let's chat!</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Flexible requests</li>
            <li>Configurable prompt size</li>
            <li>SaaS or Self-hosted</li>
            <li>Enterprise-level support</li>
            <li>API Support</li>
            <li>Dashboards</li>
            <li>Reports</li>
          </ul>
          <Button variant="outline" className="mt-6 w-full py-2 rounded-md border-black text-black hover:bg-gray-100 transition-colors duration-300">Talk to us</Button>
        </div>
      </div>
    </div>
  );
} 