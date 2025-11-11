"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useClerk } from "@clerk/nextjs";
import { ModeToggle } from "../ModeToggle";

export default function Sidebar() {
  const pathname = usePathname();
  const { signOut } = useClerk();

  const links = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Leads", href: "/dashboard/leads" },
    { name: "Settings", href: "/dashboard/settings" },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r p-6 flex flex-col">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        ApiFi Dashboard
      </h2>
      <nav className="flex-1 flex flex-col gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${
              pathname === link.href
                ? "bg-gray-200 dark:bg-gray-700 font-semibold"
                : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <div className="flex justify-between">
        <Button
          variant="destructive"
          className="mt-auto"
          onClick={() => signOut({ redirectUrl: "/" })}
        >
          Sign Out
        </Button>
        <ModeToggle />
      </div>
    </aside>
  );
}
