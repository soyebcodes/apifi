"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "dup" | "err">("idle");
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.ok && data.duplicate) setStatus("dup");
      else if (data.ok) setStatus("ok");
      else setStatus("err");
    } catch (error) {
      setStatus("err");
    }

    setLoading(false);
  };

  return (
    <section className="max-w-9/12 mx-auto border-b border-border py-24 md:py-32 lg:py-40 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6 max-w-2xl text-center"
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-tight">
          Build your SaaS.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Launch faster.
          </span>{" "}
          Convert more.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          Join hundreds of founders using ApiFi to supercharge their SaaS
          development with ready-made APIs and powerful analytics.
        </p>

        <form
          className="flex flex-col sm:flex-row gap-3 mt-8"
          onSubmit={submit}
        >
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="flex-1 px-4 py-3 rounded-lg border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            type="submit"
            className="rounded-lg whitespace-nowrap gap-2 group"
            disabled={loading}
            size="lg"
          >
            {loading ? (
              "Submitting..."
            ) : (
              <>
                Join Waitlist
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
              </>
            )}
          </Button>
        </form>

        {/* Status messages */}
        {status === "ok" && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-green-600 font-medium"
          >
            ✓ Thanks! You're added to the waitlist.
          </motion.p>
        )}
        {status === "dup" && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-yellow-600 font-medium"
          >
            ℹ You&apos;ve already joined!
          </motion.p>
        )}
        {status === "err" && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-red-600 font-medium"
          >
            ✗ Something went wrong. Please try again.
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
