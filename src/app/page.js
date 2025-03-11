import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your Sentinel XAI Dashboard
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Stat Cards */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Total Threats Detected</p>
              <h3 className="text-2xl font-bold">2,845</h3>
            </div>
            <UserIcon className="h-8 w-8 text-blue-500" />
          </div>
          <div className="mt-4">
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUpIcon className="mr-1 h-3 w-3 text-green-500" />
              <span className="text-green-500 font-medium">12%</span>
              <span className="ml-1">from last month</span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Total Projects</p>
              <h3 className="text-2xl font-bold">12</h3>
            </div>
            <ActivityIcon className="h-8 w-8 text-purple-500" />
          </div>
          <div className="mt-4">
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUpIcon className="mr-1 h-3 w-3 text-green-500" />
              <span className="text-green-500 font-medium">8%</span>
              <span className="ml-1">from last month</span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Average Response Time</p>
              <h3 className="text-2xl font-bold">350ms</h3>
            </div>
            <PercentIcon className="h-8 w-8 text-green-500" />
          </div>
          <div className="mt-4">
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingDownIcon className="mr-1 h-3 w-3 text-red-500" />
              <span className="text-red-500 font-medium">5%</span>
              <span className="ml-1">from last month</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6 flex flex-col space-y-4">
          <h3 className="text-lg font-medium">Recent Activity</h3>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium">Threats detected in Project A</p>
                  <p className="text-sm text-muted-foreground">5 high severity threats found</p>
                </div>
                <span className="text-sm text-muted-foreground">2h ago</span>
              </div>
            </div>
            <div className="border-b pb-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium">New project added</p>
                  <p className="text-sm text-muted-foreground">Project B has been created</p>
                </div>
                <span className="text-sm text-muted-foreground">5h ago</span>
              </div>
            </div>
            <div className="border-b pb-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium">System update completed</p>
                  <p className="text-sm text-muted-foreground">All systems updated to version 2.4.0</p>
                </div>
                <span className="text-sm text-muted-foreground">1d ago</span>
              </div>
            </div>
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium">New user registered</p>
                  <p className="text-sm text-muted-foreground">User John Doe has joined</p>
                </div>
                <span className="text-sm text-muted-foreground">2d ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function ActivityIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

function PercentIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="19" x2="5" y1="5" y2="19" />
      <circle cx="6.5" cy="6.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
  );
}

function TrendingUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

function TrendingDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
      <polyline points="17 18 23 18 23 12" />
    </svg>
  );
}
