import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Dashboard - Sentinel XAI",
  description: "A modern dashboard built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={fontSans.variable}>
      <body className="bg-background min-h-screen">
        <Providers>
          <div className="flex min-h-screen flex-col lg:flex-row">
            <Sidebar />
            <div className="flex flex-1 flex-col">
              <Navbar />
              <main className="flex-1 p-4 md:p-6">{children}</main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
