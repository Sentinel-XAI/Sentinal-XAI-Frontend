"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <Shield className="mx-auto h-12 w-12 text-purple-500" />
          <h2 className="mt-6 text-3xl font-bold tracking-tight">
            Sign in to Sentinel XAI
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Access your dashboard and analytics
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <Button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="w-full flex items-center justify-center gap-3 bg-white text-gray-900 hover:bg-gray-50 border border-gray-300"
          >
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </Button>
        </div>
      </div>
    </div>
  );
} 