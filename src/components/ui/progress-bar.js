import React from "react";

export function ProgressBar({ value }) {
  const progressColor = value >= 90 ? "bg-red-600" : 
                        value >= 80 ? "bg-yellow-500" : 
                        "bg-blue-600";
                        
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 my-2">
      <div
        className={`${progressColor} h-2.5 rounded-full transition-all duration-300`}
        style={{ width: `${Math.min(value, 100)}%` }}
      ></div>
    </div>
  );
} 