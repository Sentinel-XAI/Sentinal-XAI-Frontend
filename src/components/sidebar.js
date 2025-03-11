"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  BarChart2, 
  Settings, 
  Menu, 
  X,
  ScrollText 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { ProgressBar } from "@/components/ui/progress-bar";
import { Alert } from "@/components/ui/alert";

const navItems = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: BarChart2,
  },
  {
    name: "Logs",
    href: "/logs",
    icon: ScrollText,
  },
  {
    name: "Pricing",
    href: "/pricing",
    icon: BarChart2,
  },
];

const bottomNavItems = [
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [usage, setUsage] = useState(0);

  useEffect(() => {
    // Fetch the current usage from an API or context
    setUsage(7500);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 z-40 w-64 h-screen flex flex-col bg-background border-r shadow-sm transition-transform",
          "lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Sidebar Logo */}
        <div className="flex h-16 min-h-[4rem] flex-shrink-0 items-center border-b px-6">
          <div className="flex items-center">
            <div className="relative h-8 w-8 mr-2 flex-shrink-0">
              <Image 
                src="/logo.png" 
                alt="Sentinel XAI Logo" 
                width={32}
                height={32}
                className="object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  console.error("Logo failed to load");
                }}
              />
            </div>
            <span className="text-xl font-semibold truncate">Sentinel XAI</span>
          </div>
        </div>

        {/* Sidebar Content - Fixed Height with Internal Scrolling */}
        <div className="flex flex-col h-[calc(100vh-4rem-2.5rem)] overflow-hidden">
          {/* Main Navigation - Scrollable */}
          <nav className="flex-1 p-4 overflow-y-auto scrollbar-thin">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;

                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
                      )}
                    >
                      <Icon className="h-4 w-4 flex-shrink-0" />
                      <span className="truncate">{item.name}</span>
                      {isActive && (
                        <div className="ml-auto h-1.5 w-1.5 rounded-full bg-primary-foreground flex-shrink-0" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Bottom Section - Fixed */}
          <div className="p-4 border-t flex-shrink-0">
            <ul className="space-y-2">
              {bottomNavItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;

                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
                      )}
                    >
                      <Icon className="h-4 w-4 flex-shrink-0" />
                      <span className="truncate">{item.name}</span>
                      {isActive && (
                        <div className="ml-auto h-1.5 w-1.5 rounded-full bg-primary-foreground flex-shrink-0" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Quota Usage Box */}
            <div className="mt-4 p-3 bg-white shadow-md rounded-lg">
              <div className="text-sm font-semibold mb-1">Quota Usage</div>
              <div className="text-xs font-medium mb-1">{usage} / 10,000 requests</div>
              <ProgressBar value={(usage / 10000) * 100} />
              {usage > 8000 && usage < 10000 && (
                <Alert type="warning" message="You're reaching your limit. Upgrade for more requests!" />
              )}
              {usage >= 10000 && (
                <Alert type="error" message="Limit reached! Upgrade to continue using our service." />
              )}
              <Button className="mt-3 w-full text-xs py-1" variant="default" onClick={() => alert('Upgrade Plan')}>
                Upgrade Plan
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t p-4 text-center flex-shrink-0 min-h-[2.5rem]">
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Sentinel XAI
          </div>
        </div>
      </div>
    </>
  );
} 