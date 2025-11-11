"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import { useUser } from "@clerk/nextjs";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { isSignedIn } = useUser();

  return (
    <nav className="w-full bg-background border-b border-border">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-foreground"
        >
          APiFi
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          <Link
            href="#features"
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Pricing
          </Link>
          <Link
            href="#testimonials"
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Testimonials
          </Link>
          <ModeToggle />

          {isSignedIn ? (
            <Link href="/dashboard">
              <Button className="rounded-lg">Dashboard</Button>
            </Link>
          ) : (
            <Link href="/sign-up">
              <Button className="rounded-lg">Get Started</Button>
            </Link>
          )}
        </div>

        <div className="md:hidden flex items-center gap-3">
          <ModeToggle />
          <button
            className="p-2 hover:bg-muted rounded-lg transition"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="flex flex-col px-6 py-4 gap-4">
            <Link
              href="#features"
              className="text-sm text-muted-foreground hover:text-foreground transition py-2"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-sm text-muted-foreground hover:text-foreground transition py-2"
            >
              Pricing
            </Link>
            <Link
              href="#testimonials"
              className="text-sm text-muted-foreground hover:text-foreground transition py-2"
            >
              Testimonials
            </Link>
            {isSignedIn ? (
              <Link href="/dashboard">
                <Button className="w-full rounded-lg">Dashboard</Button>
              </Link>
            ) : (
              <Link href="/sign-up">
                <Button className="w-full rounded-lg">Get Started</Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
