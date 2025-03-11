import React from "react";
import { AlertCircle, AlertTriangle } from "lucide-react";

export function Alert({ type, message }) {
  const alertStyles = {
    warning: "bg-yellow-100 text-yellow-800 border-yellow-400",
    error: "bg-red-100 text-red-800 border-red-400",
    info: "bg-blue-100 text-blue-800 border-blue-400",
    success: "bg-green-100 text-green-800 border-green-400"
  };

  const alertIcons = {
    warning: <AlertTriangle className="h-4 w-4" />,
    error: <AlertCircle className="h-4 w-4" />,
    info: <AlertCircle className="h-4 w-4" />,
    success: <AlertCircle className="h-4 w-4" />
  };

  return (
    <div className={`p-3 mb-3 text-sm rounded-lg border ${alertStyles[type]} flex items-center gap-2`}>
      {alertIcons[type]}
      <span>{message}</span>
    </div>
  );
} 