"use client";

import React from 'react';
import Image from 'next/image';

export default function ScrollingCompanies() {
  return (
    <div className="relative">
      <div className="flex space-x-32 animate-scroll">
        <div className="flex space-x-32 min-w-full">
          {/* Jaggery Consulting */}
          <div className="w-64 h-20 bg-gray-800/50 rounded-lg flex items-center justify-center p-4">
            <img
              src="/jaggery-consulting.svg"
              alt="Jaggery Consulting"
              className="w-full h-full object-contain invert"
            />
          </div>
          
          {/* Flable.ai */}
          <div className="w-48 h-20 bg-gray-800/50 rounded-lg flex items-center justify-center p-4">
            <img
              src="/flable-ai.svg"
              alt="Flable.ai"
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Company 3 */}
          <div className="w-40 h-20 bg-gray-800/50 rounded-lg flex items-center justify-center">
            <div className="w-32 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded flex items-center justify-center">
              <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                Company 3
              </span>
            </div>
          </div>
          
          {/* Company 4 */}
          <div className="w-40 h-20 bg-gray-800/50 rounded-lg flex items-center justify-center">
            <div className="w-32 h-12 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded flex items-center justify-center">
              <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Company 4
              </span>
            </div>
          </div>
        </div>
        
        {/* Duplicate set for seamless scrolling */}
        <div className="flex space-x-32 min-w-full">
          {/* Jaggery Consulting */}
          <div className="w-64 h-20 bg-gray-800/50 rounded-lg flex items-center justify-center p-4">
            <img
              src="/jaggery-consulting.svg"
              alt="Jaggery Consulting"
              className="w-full h-full object-contain invert"
            />
          </div>
          
          {/* Flable.ai */}
          <div className="w-48 h-20 bg-gray-800/50 rounded-lg flex items-center justify-center p-4">
            <img
              src="/flable-ai.svg"
              alt="Flable.ai"
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Company 3 */}
          <div className="w-40 h-20 bg-gray-800/50 rounded-lg flex items-center justify-center">
            <div className="w-32 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded flex items-center justify-center">
              <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                Company 3
              </span>
            </div>
          </div>
          
          {/* Company 4 */}
          <div className="w-40 h-20 bg-gray-800/50 rounded-lg flex items-center justify-center">
            <div className="w-32 h-12 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded flex items-center justify-center">
              <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Company 4
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
} 