"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

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
    <section className="border-b py-24">
      <div className="container grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Build your SaaS. Launch faster. Convert more.
          </h1>

          <p className="mt-4 text-lg text-muted-foreground">
            A modern landing page + dashboard starter built with Next.js,
            Tailwind, Clerk, and MongoDB.
          </p>

          <form className="mt-8 flex gap-3" onSubmit={submit}>
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="flex-1 px-4 py-3 rounded-xl border"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Button type="submit" className="rounded-xl" disabled={loading}>
              {loading ? "Submitting..." : "Join Waitlist"}
            </Button>
          </form>

          {/* Feedback messages */}
          {status === "ok" && (
            <p className="mt-3 text-green-600">Thanks! You’re added.</p>
          )}
          {status === "dup" && (
            <p className="mt-3 text-yellow-600">You've already joined!</p>
          )}
          {status === "err" && (
            <p className="mt-3 text-red-600">Something went wrong.</p>
          )}
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block"
        >
          <div className="h-64 w-full bg-muted rounded-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
