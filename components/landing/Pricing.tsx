"use client";

import { motion } from "motion/react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricing = [
  {
    tier: "Free",
    price: "$0",
    description: "Perfect for early testing and pre-launch projects.",
    features: ["Basic landing page", "Email capture", "Limited analytics"],
    highlighted: false,
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
    highlighted: true,
  },
  {
    tier: "Enterprise",
    price: "Custom",
    description: "Ideal for teams needing SLAs, SSO, and custom integrations.",
    features: ["Dedicated engineer", "Custom features", "Private SLAs"],
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 border-b border-border">
      <div className="container mx-auto space-y-12 px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Simple Pricing for Every Stage
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose a plan that fits your workflow. Upgrade anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {pricing.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex"
            >
              <Card
                className={`flex-1 rounded-xl transition-all h-full ${
                  p.highlighted
                    ? "border-primary/50 shadow-lg ring-1 ring-primary/10 bg-gradient-to-br from-primary/5 to-accent/5"
                    : "border-border hover:border-primary/20 hover:shadow-md"
                }`}
              >
                {/* Highlight Badge */}
                {p.highlighted && (
                  <div className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-b-lg text-center border-b border-primary/20">
                    Most Popular
                  </div>
                )}

                <CardHeader className="space-y-4 text-center">
                  <CardTitle className="text-2xl">{p.tier}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold tracking-tight">
                      {p.price}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {p.description}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {p.features.map((f, i) => (
                      <li key={i} className="flex gap-3 items-start text-sm">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full rounded-lg"
                    variant={p.highlighted ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
