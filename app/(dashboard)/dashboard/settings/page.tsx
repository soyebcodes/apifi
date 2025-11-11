"use client";

import { useUser, useClerk } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { User, Lock, Bell, LogOut, ChevronRight } from "lucide-react";

export default function SettingsPage() {
  const { user } = useUser();
  const { signOut } = useClerk();

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  const settingsSections = [
    {
      title: "Profile",
      description: "Manage your account information",
      icon: User,
      items: [
        { label: "Name", value: user.fullName || "N/A" },
        {
          label: "Email",
          value: user.primaryEmailAddress?.emailAddress || "N/A",
        },
      ],
    },
    {
      title: "Security",
      description: "Password and authentication settings",
      icon: Lock,
      action: "Review",
    },
    {
      title: "Notifications",
      description: "Manage your notification preferences",
      icon: Bell,
      action: "Configure",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border px-6 py-8">
        <div className="max-w-4xl">
          <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
          <p className="text-muted-foreground">
            Manage your account and preferences
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-8">
        <div className="max-w-4xl space-y-6">
          {/* Settings Sections */}
          {settingsSections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <div
                key={idx}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary rounded-lg p-3 text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="font-semibold text-foreground text-lg">
                        {section.title}
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        {section.description}
                      </p>
                    </div>
                  </div>
                  {section.action && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:bg-secondary"
                    >
                      {section.action}
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  )}
                </div>

                {/* Profile Items */}
                {section.items && (
                  <div className="space-y-4">
                    {section.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="flex justify-between items-center py-3 border-t border-border/50 first:border-t-0 first:pt-0"
                      >
                        <span className="text-sm text-muted-foreground">
                          {item.label}
                        </span>
                        <span className="font-medium text-foreground">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Sign Out Section */}
          <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-foreground mb-1">Sign Out</h3>
                <p className="text-sm text-muted-foreground">
                  Sign out of your account on this device
                </p>
              </div>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => signOut()}
                className="gap-2"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
