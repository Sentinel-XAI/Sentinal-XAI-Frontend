import Link from "next/link";
import { Shield, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-purple-500" />
            <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Sentinel XAI
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <a href="mailto:contact@sentinelxai.com" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              <span>contact@sentinelxai.com</span>
            </a>
            <a 
              href="https://www.linkedin.com/company/sentinel-xai/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 