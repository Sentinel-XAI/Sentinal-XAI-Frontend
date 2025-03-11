"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon, RefreshCw } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  BarChart,
  Bar,
} from "recharts";

// Sample data - replace with real data from your API
const threatData = {
  requests: 1234,
  threatsDetected: 89,
  detectionRate: 7.21,
  timeSeriesData: Array.from({ length: 24 }, (_, i) => ({
    time: `${i}:00`,
    flagged: Math.floor(Math.random() * 10),
    unflagged: Math.floor(Math.random() * 5),
    detectionRate: 40 + Math.random() * 20,
    latency: 100 + Math.random() * 100,
  })),
  threatTypes: [
    { type: "Prompt Injection", count: 45 },
    { type: "Data Extraction", count: 28 },
    { type: "Prompt Leak", count: 15 },
    { type: "Jailbreak", count: 8 },
    { type: "Other", count: 4 },
  ],
};

export default function AnalyticsPage() {
  const [date, setDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdate = () => {
    setIsLoading(true);
    // Simulate data refresh
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Analytics</h1>
          <p className="text-muted-foreground">
            Monitor your XAI system performance and threats
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-[240px] justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {format(date, "PPP")}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <Button onClick={handleUpdate} disabled={isLoading}>
            <RefreshCw
              className={`mr-2 h-4 w-4 ${isLoading ? "animate-spin" : ""}`}
            />
            Update Data
          </Button>
        </div>
      </div>

      {/* Analytics Overview Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="flex flex-col">
            <p className="text-sm font-medium text-muted-foreground">
              Number of Requests
            </p>
            <h3 className="text-2xl font-bold">{threatData.requests}</h3>
            <p className="text-xs text-muted-foreground mt-1">
              Last 24 hours
            </p>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="flex flex-col">
            <p className="text-sm font-medium text-muted-foreground">
              Threats Detected
            </p>
            <h3 className="text-2xl font-bold">{threatData.threatsDetected}</h3>
            <p className="text-xs text-muted-foreground mt-1">
              Across all categories
            </p>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="flex flex-col">
            <p className="text-sm font-medium text-muted-foreground">
              Detection Rate
            </p>
            <h3 className="text-2xl font-bold">{threatData.detectionRate}%</h3>
            <p className="text-xs text-muted-foreground mt-1">
              Per request
            </p>
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Threats Over Time */}
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Threats Over Time</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Scatter
                  name="Flagged Threats"
                  data={threatData.timeSeriesData}
                  dataKey="flagged"
                  fill="#ef4444"
                />
                <Scatter
                  name="Unflagged Threats"
                  data={threatData.timeSeriesData}
                  dataKey="unflagged"
                  fill="#3b82f6"
                />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Threat Types */}
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Threat Types</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={threatData.threatTypes}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="type" angle={-45} textAnchor="end" height={100} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#6366f1" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Detection Rate Trend */}
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Detection Rate Trend</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={threatData.timeSeriesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="detectionRate"
                  stroke="#10b981"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Latency Monitoring */}
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Response Latency</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={threatData.timeSeriesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="latency"
                  stroke="#8b5cf6"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
} 