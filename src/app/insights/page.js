import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, Tag, User } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Sentinel XAI - AI Security Insights & Research",
  description: "Stay updated with the latest AI security research and insights.",
};

const featuredArticles = [
  {
    id: 1,
    title: "The Future of AI Security: Are You Prepared?",
    excerpt: "As AI systems become more powerful, the security risks continue to evolve. Learn what threats you should be preparing for in the coming years.",
    author: "Dr. Sarah Chen",
    date: "May 15, 2023",
    readTime: "8 min read",
    category: "Research",
    image: "https://images.unsplash.com/photo-1639322537231-2f206e06af84?q=80&w=1024&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "How Hackers Manipulate AI and What You Can Do About It",
    excerpt: "Discover the techniques malicious actors use to manipulate AI systems and the countermeasures you can implement to protect your models.",
    author: "Michael Rodriguez",
    date: "June 3, 2023",
    readTime: "6 min read",
    category: "Security",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1024&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Protecting AI from Prompt Injection Attacks",
    excerpt: "Prompt injection attacks are becoming increasingly sophisticated. Learn how to identify and prevent these attacks from compromising your AI systems.",
    author: "Alex Winters",
    date: "June 21, 2023",
    readTime: "5 min read",
    category: "Technical",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1024&auto=format&fit=crop",
  },
];

const recentArticles = [
  {
    id: 4,
    title: "The Role of Red Teaming in AI Security",
    excerpt: "Red teaming is essential for identifying vulnerabilities in AI systems before attackers do. Learn how to implement effective red teaming strategies.",
    date: "July 8, 2023",
    category: "Best Practices",
  },
  {
    id: 5,
    title: "Case Study: How Company X Secured Their LLM Infrastructure",
    excerpt: "A detailed look at how a Fortune 500 company implemented robust security measures to protect their large language models from attacks.",
    date: "July 15, 2023",
    category: "Case Study",
  },
  {
    id: 6,
    title: "AI Security Standards: What You Need to Know",
    excerpt: "An overview of emerging AI security standards and regulations that organizations should be aware of to ensure compliance.",
    date: "July 22, 2023",
    category: "Compliance",
  },
  {
    id: 7,
    title: "Securing Multimodal AI Systems",
    excerpt: "Multimodal AI systems present unique security challenges. Learn specialized techniques to protect systems that process multiple data types.",
    date: "July 29, 2023",
    category: "Technical",
  },
];

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-gray-900 via-purple-950/30 to-blue-950/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                AI Security <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Insights</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Stay informed about the latest AI security threats, research, and best practices to protect your AI models from emerging vulnerabilities.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Research", "Security", "Technical", "Best Practices", "Case Studies"].map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 rounded-full text-sm font-medium bg-gray-800 hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <article key={article.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1">
                  <div className="relative h-56">
                    <Image 
                      src={article.image} 
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/80 text-white">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 hover:text-blue-400 transition-colors duration-200">
                      <Link href={`/insights/${article.id}`}>
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <div className="flex items-center mr-4">
                        <User className="h-4 w-4 mr-1" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center mr-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <Link 
                      href={`/insights/${article.id}`} 
                      className="text-blue-400 hover:text-blue-300 inline-flex items-center text-sm font-medium transition-colors duration-200"
                    >
                      <span>Read article</span>
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Articles */}
        <section className="py-16 bg-gray-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12">Recent Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recentArticles.map((article) => (
                <article key={article.id} className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-colors duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-800 text-blue-400">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 hover:text-blue-400 transition-colors duration-200">
                    <Link href={`/insights/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {article.excerpt}
                  </p>
                  <Link 
                    href={`/insights/${article.id}`} 
                    className="text-blue-400 hover:text-blue-300 inline-flex items-center text-sm font-medium transition-colors duration-200"
                  >
                    <span>Read full article</span>
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Research Papers */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Latest Research</h2>
              <div className="space-y-8">
                {[1, 2, 3].map((id) => (
                  <div 
                    key={id} 
                    className="flex flex-col md:flex-row gap-6 p-6 rounded-lg bg-gray-800/80 border border-gray-700 hover:border-gray-600 transition-colors duration-300"
                  >
                    <div className="md:w-64 flex-shrink-0 bg-gradient-to-br from-purple-800/20 to-blue-800/20 p-6 flex items-center justify-center rounded-lg border border-gray-700">
                      <div className="text-center">
                        <Tag className="h-8 w-8 mx-auto mb-2 text-purple-400" />
                        <p className="text-sm text-gray-400">Research Paper</p>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">
                        <Link href={`/insights/research/${id}`} className="hover:text-blue-400 transition-colors duration-200">
                          Adversarial Attacks on Large Language Models: Detection and Mitigation
                        </Link>
                      </h3>
                      <p className="text-gray-400 mb-4">
                        This research paper explores novel methods for detecting and mitigating adversarial attacks on large language models, focusing on robust defense mechanisms.
                      </p>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <div className="flex items-center mr-4">
                          <User className="h-4 w-4 mr-1" />
                          <span>Sentinel XAI Research Team</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>August {id * 3}, 2023</span>
                        </div>
                      </div>
                      <Link 
                        href={`/insights/research/${id}`} 
                        className="text-blue-400 hover:text-blue-300 inline-flex items-center text-sm font-medium transition-colors duration-200"
                      >
                        <span>Download PDF</span>
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated on AI Security</h2>
              <p className="text-xl text-gray-300 mb-8">
                Subscribe to our newsletter for the latest insights on AI security threats, best practices, and research.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 sm:gap-0 justify-center">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-5 py-3 rounded-lg sm:rounded-r-none bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 min-w-0 flex-1 max-w-sm"
                />
                <button 
                  type="submit" 
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-lg sm:rounded-l-none transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-4 text-sm text-gray-400">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 