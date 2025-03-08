"use client";

import { useState } from "react";
import Link from "next/link";
import { Shield, Check, AlertCircle, ChevronRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function DemoPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    aiModels: [],
    securityGoals: "",
    message: "",
  });
  
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    
    setFormState((prev) => {
      if (checked) {
        return { ...prev, aiModels: [...prev.aiModels, value] };
      } else {
        return { ...prev, aiModels: prev.aiModels.filter(model => model !== value) };
      }
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    // Simulate form submission
    try {
      // In a real scenario, we would make an API call here
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitted(true);
      // Reset form
      setFormState({
        name: "",
        email: "",
        company: "",
        role: "",
        aiModels: [],
        securityGoals: "",
        message: "",
      });
    } catch (err) {
      setError("There was an error submitting your request. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  
  const securityRisks = [
    {
      title: "Prompt Injection Attacks",
      description: "Attackers can manipulate your AI models through carefully crafted inputs designed to bypass security measures."
    },
    {
      title: "Data Poisoning",
      description: "Your AI systems can be compromised through training data manipulation, leading to harmful behaviors."
    },
    {
      title: "Output Manipulation",
      description: "Sophisticated techniques can exploit your AI to generate harmful or unauthorized content despite safeguards."
    },
    {
      title: "Model Extraction",
      description: "Competitors may attempt to steal your proprietary AI models through systematic querying."
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-950/40 to-purple-950/40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Request a <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Security Audit</span>
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                Get a comprehensive assessment of your AI system's security posture and discover vulnerabilities before attackers do.
              </p>
              <div className="flex justify-center">
                <a 
                  href="#request-form" 
                  className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-medium inline-flex items-center group transition-all duration-300 shadow-lg shadow-purple-500/20"
                >
                  <span>Get Started</span>
                  <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Security Risks Section */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">AI Security Risks You Can't Ignore</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {securityRisks.map((risk, index) => (
                  <div key={index} className="flex gap-4 p-6 bg-gray-800 rounded-lg border border-gray-700">
                    <div className="mt-1 flex-shrink-0">
                      <AlertCircle className="h-6 w-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{risk.title}</h3>
                      <p className="text-gray-400">{risk.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 p-6 bg-blue-900/30 border border-blue-800/50 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <Shield className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Security Audit Helps You:</h3>
                    <ul className="space-y-2 mt-4">
                      {[
                        "Identify critical vulnerabilities in your AI systems",
                        "Receive actionable remediation steps",
                        "Get a comprehensive security score and benchmark",
                        "Implement ongoing monitoring for new threats"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Request Form Section */}
        <section id="request-form" className="py-16 bg-gray-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 shadow-xl">
                <h2 className="text-2xl font-bold mb-6 text-center">Request Your Security Audit</h2>
                
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="h-8 w-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Thank You for Your Submission!</h3>
                    <p className="text-gray-400 mb-8">
                      We've received your request and will be in touch within 24 hours to schedule your personalized security audit.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition-colors duration-200"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-md">
                        {error}
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-1">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formState.company}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="role" className="block text-sm font-medium mb-1">
                          Your Role
                        </label>
                        <select
                          id="role"
                          name="role"
                          value={formState.role}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200"
                        >
                          <option value="">Select your role</option>
                          <option value="ceo">CEO / Founder</option>
                          <option value="cto">CTO / Technical Lead</option>
                          <option value="security">Security Officer</option>
                          <option value="developer">AI Developer</option>
                          <option value="product">Product Manager</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        AI Models You're Using
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          { id: "gpt", label: "GPT Models (OpenAI)" },
                          { id: "claude", label: "Claude (Anthropic)" },
                          { id: "llama", label: "LLaMA / Meta Models" },
                          { id: "custom", label: "Custom / Proprietary" },
                          { id: "open", label: "Other Open Source Models" },
                          { id: "planning", label: "Still in Planning Phase" },
                        ].map((model) => (
                          <div key={model.id} className="flex items-center">
                            <input
                              type="checkbox"
                              id={model.id}
                              name="aiModels"
                              value={model.id}
                              checked={formState.aiModels.includes(model.id)}
                              onChange={handleCheckboxChange}
                              className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-700 rounded"
                            />
                            <label htmlFor={model.id} className="ml-2 text-sm text-gray-300">
                              {model.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="securityGoals" className="block text-sm font-medium mb-1">
                        Security Goals
                      </label>
                      <select
                        id="securityGoals"
                        name="securityGoals"
                        value={formState.securityGoals}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200"
                      >
                        <option value="">Select your primary goal</option>
                        <option value="jailbreak">Prevent jailbreak attacks</option>
                        <option value="compliance">Meet compliance requirements</option>
                        <option value="audit">General security audit</option>
                        <option value="redteam">Red team testing</option>
                        <option value="monitoring">Continuous security monitoring</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Additional Information
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200"
                        placeholder="Tell us about your specific security concerns or requirements..."
                      />
                    </div>
                    
                    <div className="mt-8">
                      <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-3 rounded-md font-medium text-white ${
                          loading 
                            ? "bg-purple-700 cursor-not-allowed" 
                            : "bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all duration-300"
                        }`}
                      >
                        {loading ? "Processing..." : "Request Security Audit"}
                      </button>
                    </div>
                    
                    <p className="text-sm text-gray-500 text-center mt-4">
                      By submitting this form, you agree to our{" "}
                      <Link href="/privacy" className="text-blue-400 hover:underline">
                        Privacy Policy
                      </Link>{" "}
                      and{" "}
                      <Link href="/terms" className="text-blue-400 hover:underline">
                        Terms of Service
                      </Link>.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-16">What Our Clients Say</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    quote: "The security audit revealed critical vulnerabilities in our AI model that we had completely overlooked. Sentinel XAI's team provided clear and actionable steps to address them.",
                    author: "Alex Chen",
                    role: "CTO, TechVision AI",
                  },
                  {
                    quote: "Implementing Sentinel XAI's security recommendations has saved us from multiple potential attacks. Their continuous monitoring gives us peace of mind.",
                    author: "Samantha Lee",
                    role: "Head of AI Security, DataForge",
                  },
                ].map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-sm"
                  >
                    <div className="mb-4">
                      <svg className="h-8 w-8 text-purple-500 opacity-50" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                    </div>
                    <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 