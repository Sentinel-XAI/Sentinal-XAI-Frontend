import Link from "next/link";
import { Shield, Twitter, Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-purple-500" />
              <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Sentinal
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Your AI models are under constant risk. Identify vulnerabilities before attackers do.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-gray-500 hover:text-blue-400 transition-colors duration-200" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-gray-500 hover:text-blue-500 transition-colors duration-200" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5 text-gray-500 hover:text-white transition-colors duration-200" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/product" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  AI Red Teaming
                </Link>
              </li>
              <li>
                <Link href="/product" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Continuous Monitoring
                </Link>
              </li>
              <li>
                <Link href="/product" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Jailbreak Prevention
                </Link>
              </li>
              <li>
                <Link href="/product" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Security Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/insights" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400 text-sm">
                <Mail className="h-4 w-4 mr-2 text-purple-500" />
                <a href="mailto:contact@sentinalai.com" className="hover:text-white transition-colors duration-200">
                  contact@sentinalai.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/demo"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-4 py-2 rounded-md inline-flex items-center text-sm transition-all duration-200"
              >
                Request a Security Audit
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Sentinal AI. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 