"use client";

import { motion } from "motion/react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const pricing = [
  {
    tier: "Free",
    price: "$0",
    description: "Perfect for early testing and pre-launch projects.",
    features: ["Basic landing page", "Email capture", "Limited analytics"],
  },
  {
    tier: "Pro",
    price: "$19/mo",
    description: "Best for startups who want full control and insights.",
    features: [
      "Full dashboard",
      "Advanced analytics",
      "Email automation",
      "Priority support",
    ],
  },
  {
    tier: "Enterprise",
    price: "Custom",
    description: "Ideal for teams needing SLAs, SSO, and custom integrations.",
    features: ["Dedicated engineer", "Custom features", "Private SLAs"],
  },
];

export function Pricing() {
  return (
    <section className="py-24 border-b">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Simple Pricing for Every Stage
        </h2>

        <p className="mt-3 text-muted-foreground text-center max-w-xl mx-auto">
          Choose a plan that fits your workflow. Upgrade anytime.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {pricing.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="h-full rounded-2xl border shadow-sm hover:shadow-md transition">
                <CardHeader>
                  <CardTitle className="text-2xl">{p.tier}</CardTitle>
                  <p className="text-4xl font-bold mt-2">{p.price}</p>
                  <p className="text-muted-foreground mt-2">{p.description}</p>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2 mt-4">
                    {p.features.map((f, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        • {f}
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full mt-6">Get Started</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
