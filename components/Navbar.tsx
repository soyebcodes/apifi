"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import { useUser } from "@clerk/nextjs";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { isSignedIn } = useUser();

  return (
    <nav className="w-full border-b bg-white dark:bg-gray-900">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" className="text-xl font-bold">
          APiFi
        </Link>

        <div className="hidden md:flex gap-6 items-center">
          <Link href="#features">Features</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#testimonials">Testimonials</Link>
          <ModeToggle />

          {/* Conditional button */}
          {isSignedIn ? (
            <Link href="/dashboard">
              <Button variant="default">Dashboard</Button>
            </Link>
          ) : (
            <Link href="/sign-up">
              <Button variant="default">Get Started</Button>
            </Link>
          )}
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="flex flex-col md:hidden bg-white dark:bg-gray-900 border-t">
          <Link href="#features" className="py-2 px-6">
            Features
          </Link>
          <Link href="#pricing" className="py-2 px-6">
            Pricing
          </Link>
          <Link href="#testimonials" className="py-2 px-6">
            Testimonials
          </Link>
          {/* Conditional mobile button */}
          {isSignedIn ? (
            <Link href="/dashboard" className="py-2 px-6">
              Dashboard
            </Link>
          ) : (
            <Link href="/sign-up" className="py-2 px-6">
              Get Started
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
