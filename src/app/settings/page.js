import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-[250px_1fr]">
        {/* Settings Navigation */}
        <div className="space-y-4">
          <div className="rounded-lg border bg-card shadow-sm">
            <div className="p-2">
              <nav className="space-y-1">
                {[
                  "Profile",
                  "Notifications",
                  "Appearance",
                  "Integrations",
                  "Security",
                  "Advanced",
                ].map((item, index) => (
                  <button
                    key={index}
                    className={`w-full flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted ${
                      index === 0 ? "bg-primary text-primary-foreground" : ""
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Settings Content */}
        <div className="space-y-6">
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Profile</h2>
            <div className="space-y-4">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  defaultValue="John Doe"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  defaultValue="john.doe@example.com"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="bio" className="text-sm font-medium">
                  Bio
                </label>
                <textarea
                  id="bio"
                  className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  defaultValue="I'm a software developer based in New York City."
                />
              </div>
              <div className="flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 