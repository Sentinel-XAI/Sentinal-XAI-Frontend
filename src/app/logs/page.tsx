"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
import {
  Calendar as CalendarIcon,
  RefreshCw,
  AlertTriangle,
  Shield,
  Clock,
  FileText,
  Shield as PolicyIcon,
  Hash,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { TableSkeleton } from "@/components/ui/skeleton";

// Types
interface LogEntry {
  id: string;
  timestamp: string;
  project: string;
  threatsDetected: "Prompt Attack" | "Nothing Detected";
  content: string;
  policy: string;
  requestId: string;
  latency: number;
}

// Sample data
const sampleLogs: LogEntry[] = [
  {
    id: "1",
    timestamp: "2024-03-09T10:30:00Z",
    project: "Project A",
    threatsDetected: "Prompt Attack",
    content: "Attempted prompt injection detected...",
    policy: "Standard Protection",
    requestId: "req_abc123",
    latency: 150,
  },
  {
    id: "2",
    timestamp: "2024-03-09T10:29:00Z",
    project: "Project B",
    threatsDetected: "Nothing Detected",
    content: "Normal conversation flow...",
    policy: "High Security",
    requestId: "req_def456",
    latency: 120,
  },
  // Add more sample logs as needed
];

const projects = ["All Projects", "Project A", "Project B", "Project C"];

export default function LogsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedProject, setSelectedProject] = useState("All Projects");
  const [isLoading, setIsLoading] = useState(true);
  const [logs, setLogs] = useState<LogEntry[]>([]);

  useEffect(() => {
    // Simulate initial data loading
    const timer = setTimeout(() => {
      setLogs(sampleLogs);
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleUpdate = () => {
    setIsLoading(true);
    // Simulate data refresh
    setTimeout(() => {
      setLogs(sampleLogs);
      setIsLoading(false);
    }, 1000);
  };

  const handleMisclassification = () => {
    // Handle misclassification submission
    console.log("Submitting misclassification...");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Logs</h1>
          <p className="text-muted-foreground">
            Monitor and analyze system logs and threats
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button
            onClick={handleUpdate}
            disabled={isLoading}
            className="w-full md:w-auto"
          >
            <RefreshCw
              className={`mr-2 h-4 w-4 ${isLoading ? "animate-spin" : ""}`}
            />
            Update Data
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-start text-left md:w-[240px]"
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : "Pick a date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              className="custom-calendar"
              classNames={{
                months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                month: "space-y-4",
                caption: "flex justify-center pt-1 relative items-center",
                caption_label: "text-sm font-medium",
                nav: "space-x-1 flex items-center",
                nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
                nav_button_previous: "absolute left-1",
                nav_button_next: "absolute right-1",
                table: "w-full border-collapse space-y-1",
              }}
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Logs Table */}
      {isLoading ? (
        <TableSkeleton />
      ) : (
        <div className="rounded-lg border shadow-sm">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>
                    <Clock className="mr-2 h-4 w-4 inline-block" />
                    Timestamp
                  </TableHead>
                  <TableHead>
                    <FileText className="mr-2 h-4 w-4 inline-block" />
                    Threats
                  </TableHead>
                  <TableHead className="max-w-[300px]">
                    <FileText className="mr-2 h-4 w-4 inline-block" />
                    Content
                  </TableHead>
                  <TableHead>
                    <PolicyIcon className="mr-2 h-4 w-4 inline-block" />
                    Policy
                  </TableHead>
                  <TableHead>
                    <Hash className="mr-2 h-4 w-4 inline-block" />
                    Request ID
                  </TableHead>
                  <TableHead className="text-right">
                    <Zap className="mr-2 h-4 w-4 inline-block" />
                    Latency
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {logs.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell className="whitespace-nowrap">
                      {format(new Date(log.timestamp), "MMM d, HH:mm:ss")}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          log.threatsDetected === "Prompt Attack"
                            ? "destructive"
                            : "success"
                        }
                      >
                        {log.threatsDetected}
                      </Badge>
                    </TableCell>
                    <TableCell className="max-w-[300px] truncate">
                      {log.content}
                    </TableCell>
                    <TableCell>{log.policy}</TableCell>
                    <TableCell className="font-mono text-sm">
                      {log.requestId}
                    </TableCell>
                    <TableCell className="text-right">
                      {log.latency}ms
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
} 