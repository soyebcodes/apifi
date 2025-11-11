"use client";

import { motion } from "motion/react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Cpu, BarChart3, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Lightning Fast Setup",
    description:
      "Get a complete SaaS starter with landing + dashboard in minutes.",
    icon: Cpu,
  },
  {
    title: "Built-In Analytics",
    description: "Track leads, conversion, and user growth with modern charts.",
    icon: BarChart3,
  },
  {
    title: "Secure Authentication",
    description:
      "Powered by Clerk for seamless sign-in and protected dashboards.",
    icon: ShieldCheck,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32 border-b border-border">
      <div className="container mx-auto space-y-12 px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Powerful Features for Modern SaaS
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to launch your product, collect leads, and run
            an admin dashboard.
          </p>
        </motion.div>

        {/* Features cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex"
              >
                <Card className="flex-1 rounded-xl border border-border shadow-sm hover:shadow-md hover:border-primary/20 transition-all">
                  <CardHeader className="space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
