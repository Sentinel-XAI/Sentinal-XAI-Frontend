import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart, Shield, Lock, Zap, Code, ServerCrash, Activity } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Sentinal - AI Security Platform & Features",
  description: "Explore our cutting-edge AI security platform that detects vulnerabilities before attackers do. Features include red teaming, continuous monitoring, and jailbreak prevention.",
};

export default function ProductPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-950/50 to-purple-950/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Secure Your AI. <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Prevent Exploits.</span>
              </h1>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Sentinal provides comprehensive security testing and monitoring for AI systems. Our platform identifies vulnerabilities before attackers can exploit them.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
              <p className="text-xl text-gray-400">
                Our three-step process ensures your AI models are secure from the latest threats
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="relative">
                <div className="bg-gray-800 rounded-lg p-8 h-full">
                  <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                  <div className="pt-4">
                    <h3 className="text-2xl font-semibold mb-4">Identify AI Weaknesses</h3>
                    <p className="text-gray-400">
                      Our automated testing finds security loopholes and vulnerabilities in your AI models by simulating thousands of attack vectors.
                    </p>
                    <ul className="mt-6 space-y-3">
                      <li className="flex items-start gap-2">
                        <Shield className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                        <span>Vulnerability scanning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Shield className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                        <span>Prompt injection testing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Shield className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                        <span>Output manipulation detection</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-10 w-10 text-gray-700" />
                </div>
              </div>

              <div className="relative">
                <div className="bg-gray-800 rounded-lg p-8 h-full">
                  <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                  <div className="pt-4">
                    <h3 className="text-2xl font-semibold mb-4">Simulate Attacks</h3>
                    <p className="text-gray-400">
                      We simulate real-world attacks against your AI systems using advanced red teaming techniques to discover exploitable weaknesses.
                    </p>
                    <ul className="mt-6 space-y-3">
                      <li className="flex items-start gap-2">
                        <Lock className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                        <span>Red team attacks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Lock className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                        <span>Adversarial examples</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Lock className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                        <span>Data poisoning tests</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-10 w-10 text-gray-700" />
                </div>
              </div>

              <div className="relative">
                <div className="bg-gray-800 rounded-lg p-8 h-full">
                  <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-xl font-bold">
                    3
                  </div>
                  <div className="pt-4">
                    <h3 className="text-2xl font-semibold mb-4">Secure & Monitor</h3>
                    <p className="text-gray-400">
                      Get ongoing protection with actionable insights and real-time monitoring to ensure continuous security coverage.
                    </p>
                    <ul className="mt-6 space-y-3">
                      <li className="flex items-start gap-2">
                        <Activity className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0" />
                        <span>Real-time monitoring</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Activity className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0" />
                        <span>Threat intelligence updates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Activity className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0" />
                        <span>Remediation guidance</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-gray-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Key Features Overview</h2>
              <p className="text-xl text-gray-400">
                Our platform offers comprehensive protection for your AI systems
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 shadow-lg border border-gray-800">
                <ServerCrash className="h-12 w-12 text-red-400 mb-6" />
                <h3 className="text-2xl font-semibold mb-4">AI Jailbreak Prevention</h3>
                <p className="text-gray-400 mb-6">
                  Block harmful content generation and prevent attackers from bypassing your AI system's safeguards. Our system detects and prevents jailbreak attempts in real-time.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-400 text-sm font-semibold">✓</span>
                    </div>
                    <span className="text-gray-300">Advanced prompt injection detection using ML techniques</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-400 text-sm font-semibold">✓</span>
                    </div>
                    <span className="text-gray-300">Real-time content filtering with custom blocklists</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-400 text-sm font-semibold">✓</span>
                    </div>
                    <span className="text-gray-300">Behavioral analysis of user interactions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 shadow-lg border border-gray-800">
                <Shield className="h-12 w-12 text-purple-400 mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Model-Agnostic Security</h3>
                <p className="text-gray-400 mb-6">
                  Works with all AI models and frameworks, from open-source to proprietary systems. Our platform integrates seamlessly with your existing infrastructure.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-purple-400 text-sm font-semibold">✓</span>
                    </div>
                    <span className="text-gray-300">Multi-model support for GPT, Claude, LLaMA, and more</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-purple-400 text-sm font-semibold">✓</span>
                    </div>
                    <span className="text-gray-300">Custom security policies tailored to your risk profile</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-purple-400 text-sm font-semibold">✓</span>
                    </div>
                    <span className="text-gray-300">Framework compatibility with all major ML libraries</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 shadow-lg border border-gray-800">
                <Activity className="h-12 w-12 text-blue-400 mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Real-Time Alerts & Reporting</h3>
                <p className="text-gray-400 mb-6">
                  A single dashboard for all security risks, with instant notifications for critical vulnerabilities. Track your security posture over time.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-400 text-sm font-semibold">✓</span>
                    </div>
                    <span className="text-gray-300">Custom alert thresholds based on severity levels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-400 text-sm font-semibold">✓</span>
                    </div>
                    <span className="text-gray-300">Detailed security reports with remediation suggestions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-400 text-sm font-semibold">✓</span>
                    </div>
                    <span className="text-gray-300">Vulnerability tracking and historical trend analysis</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 shadow-lg border border-gray-800">
                <Code className="h-12 w-12 text-cyan-400 mb-6" />
                <h3 className="text-2xl font-semibold mb-4">CI/CD Integration</h3>
                <p className="text-gray-400 mb-6">
                  Security testing without disrupting development. Seamlessly integrate with your DevOps workflow and catch issues early in the development cycle.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-cyan-400 text-sm font-semibold">✓</span>
                    </div>
                    <span className="text-gray-300">GitHub/GitLab integration for automated testing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-cyan-400 text-sm font-semibold">✓</span>
                    </div>
                    <span className="text-gray-300">Automated security scans during builds and deployments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-cyan-400 text-sm font-semibold">✓</span>
                    </div>
                    <span className="text-gray-300">Pre-deployment checks to prevent vulnerable code</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Preview */}
        <section className="py-24 bg-gray-900 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Security Dashboard</h2>
                <p className="text-xl text-gray-400 mb-8">
                  Monitor all your AI security metrics in one place. Get real-time alerts and comprehensive insights into potential vulnerabilities.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-4">
                    <BarChart className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Threat Intelligence</h4>
                      <p className="text-gray-400">Track emerging threats and security trends</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Shield className="h-6 w-6 text-purple-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Security Score</h4>
                      <p className="text-gray-400">Measure your AI security posture with a single score</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Zap className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Incident Response</h4>
                      <p className="text-gray-400">Quick actions for security incidents</p>
                    </div>
                  </li>
                </ul>
                <Link 
                  href="/demo"
                  className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center group transition-all duration-300 shadow-lg shadow-purple-500/20"
                >
                  <span>Schedule a Demo</span>
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
              <div className="lg:w-1/2 p-4 bg-gray-800 rounded-xl shadow-2xl transform rotate-1">
                <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                  {/* Placeholder for dashboard image */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-950 p-8">
                    <div className="text-center">
                      <div className="mx-auto mb-6 w-16 h-16 flex items-center justify-center bg-blue-500/20 rounded-full">
                        <BarChart className="h-8 w-8 text-blue-400" />
                      </div>
                      <h4 className="text-xl font-semibold mb-2">Security Dashboard Preview</h4>
                      <p className="text-gray-500">Interactive visualization will appear here during your demo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Your AI?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Schedule a personalized demo to see how Sentinal can protect your AI systems from emerging threats.
              </p>
              <Link
                href="/demo"
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium inline-flex items-center group transition-colors duration-300"
              >
                <span>Get Started Now</span>
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 