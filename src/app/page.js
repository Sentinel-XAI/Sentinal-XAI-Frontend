"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Shield, ServerCrash, Lock, Activity, ChevronRight, Check } from "lucide-react";
import HeroAnimation from "@/components/home/HeroAnimation";
import ScrollingCompanies from "@/components/home/ScrollingCompanies";
import DemoForm from "@/components/home/DemoForm";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const [showDemoForm, setShowDemoForm] = useState(false);

  return (
    <>
      <Navbar />
      {showDemoForm && <DemoForm onClose={() => setShowDemoForm(false)} />}
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center">
          <div className="absolute inset-0 overflow-hidden">
            <HeroAnimation />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-950/90 via-gray-950/80 to-gray-950" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                AI Security, built for<br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  speed, scale, and quality
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Handling complex security threats, boosting AI safety, and streamlining protection, so your AI models operate faster with precision
              </p>
              
              <div className="flex justify-center">
                <Link 
                  href="https://sentinelxai.streamlit.app/"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 text-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try Playground
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Companies Using Section */}
        <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Already Trusted By</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Leading companies securing their AI with our platform
              </p>
            </div>
            
            <ScrollingCompanies />
          </div>
        </section>
        
        {/* Why Us Section */}
        <section className="py-24 bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Sentinel XAI?</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our cutting-edge platform keeps your AI models secure from evolving threats
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 rounded-lg p-8 text-center transform hover:-translate-y-1 transition-transform duration-300">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-purple-500/20 rounded-2xl">
                  <Shield className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Proactive AI Red Teaming</h3>
                <p className="text-gray-400">
                  Simulate real-world attacks before they happen. Our adversarial testing finds vulnerabilities hackers would exploit.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-8 text-center transform hover:-translate-y-1 transition-transform duration-300">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-blue-500/20 rounded-2xl">
                  <Activity className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Continuous Risk Monitoring</h3>
                <p className="text-gray-400">
                  Get AI-driven insights for real-time threat detection. Our platform constantly monitors for new vulnerabilities.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-8 text-center transform hover:-translate-y-1 transition-transform duration-300">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-cyan-500/20 rounded-2xl">
                  <Lock className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Seamless Integration</h3>
                <p className="text-gray-400">
                  Works with your existing AI models, no extra effort required. Deploy in minutes, not months.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-24 bg-gray-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our comprehensive suite of tools keeps your AI models secure against all threats
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-red-500/20 rounded-lg mt-1">
                    <ServerCrash className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">AI Jailbreak Prevention</h3>
                    <p className="text-gray-400 mb-6">
                      Blocks harmful content generation and prevents attackers from bypassing your AI system's safeguards.
                    </p>
                    <ul className="space-y-2">
                      {["Advanced prompt injection detection", "Real-time content filtering", "Behavioral analysis"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-blue-500/20 rounded-lg mt-1">
                    <Activity className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Real-Time Alerts & Reporting</h3>
                    <p className="text-gray-400 mb-6">
                      A single dashboard for all security risks, with instant notifications for critical vulnerabilities.
                    </p>
                    <ul className="space-y-2">
                      {["Custom alert thresholds", "Detailed security reports", "Vulnerability tracking"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-purple-500/20 rounded-lg mt-1">
                    <Shield className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Model-Agnostic Security</h3>
                    <p className="text-gray-400 mb-6">
                      Works with all AI models and frameworks, from open-source to proprietary systems.
                    </p>
                    <ul className="space-y-2">
                      {["Multiple model support", "Custom security policies", "Framework compatibility"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-cyan-500/20 rounded-lg mt-1">
                    <Lock className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">CI/CD Integration</h3>
                    <p className="text-gray-400 mb-6">
                      Security testing without disrupting development. Seamlessly integrate with your DevOps workflow.
                    </p>
                    <ul className="space-y-2">
                      {["GitHub/GitLab integration", "Automated security scans", "Pre-deployment checks"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-purple-900 to-blue-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to secure your AI systems?</h2>
              <p className="text-xl text-gray-200 mb-8">
                Get a personalized security audit and discover how Sentinel XAI can protect your AI models.
              </p>
              <button 
                onClick={() => setShowDemoForm(true)}
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium inline-flex items-center group transition-colors duration-300"
              >
                <span>Request a Demo Today</span>
                <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
