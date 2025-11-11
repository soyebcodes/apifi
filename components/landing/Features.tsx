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
    <section className="py-24 border-b">
      <div className="">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
          Powerful Features for Modern SaaS
        </h2>

        <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">
          Everything you need to launch your product, collect leads, and run an
          admin dashboard.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="rounded-2xl border shadow-sm hover:shadow-md transition">
                  <CardHeader>
                    <Icon className="h-8 w-8 text-primary" />
                    <CardTitle className="mt-4">{item.title}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
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
