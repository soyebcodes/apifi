"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useClerk } from "@clerk/nextjs";
import { LayoutDashboard, Users, Settings, LogOut } from "lucide-react";
import { ModeToggle } from "../ModeToggle";

export default function Sidebar() {
  const pathname = usePathname();
  const { signOut } = useClerk();

  const links = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Leads", href: "/dashboard/leads", icon: Users },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  return (
    <aside className="w-64 bg-sidebar text-sidebar-foreground border-r border-sidebar-border flex flex-col h-screen sticky top-0">
      <div className="p-6 border-b border-sidebar-border">
        <h2 className="text-xl font-bold text-sidebar-foreground">ApiFi</h2>
        <p className="text-xs text-sidebar-foreground/60 mt-1">Dashboard</p>
      </div>

      <nav className="flex-1 flex flex-col gap-1 p-4">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground font-medium shadow-sm"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm"
              }`}
            >
              <Icon size={18} />
              <span>{link.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-sidebar-border flex flex-col gap-3">
        <Button
          variant="outline"
          className="w-full justify-start gap-2 text-sm bg-transparent hover:bg-sidebar-accent"
          onClick={() => signOut({ redirectUrl: "/" })}
        >
          <LogOut size={16} />
          Sign Out
        </Button>
        <div className="flex justify-center pt-1">
          <ModeToggle />
        </div>
      </div>
    </aside>
  );
}
