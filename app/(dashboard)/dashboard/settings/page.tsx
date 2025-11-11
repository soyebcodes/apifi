"use client";

import { useUser, useClerk } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  const { user } = useUser(); // current logged-in user
  const { signOut } = useClerk(); // logout function

  if (!user) return <div>Loading...</div>;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-4">
        <div>
          <h2 className="font-semibold">Profile Information</h2>
          <p>
            <strong>Name:</strong> {user.fullName || "N/A"}
          </p>
          <p>
            <strong>Email:</strong> {user.primaryEmailAddress?.emailAddress}
          </p>
        </div>

        <div className="mt-4">
          <Button variant="destructive" onClick={() => signOut()}>
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
}
