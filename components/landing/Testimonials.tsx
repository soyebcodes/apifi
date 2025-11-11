"use client";

import { motion } from "motion/react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Alex Carter",
    role: "Startup Founder",
    quote:
      "This starter saved me days of development. Landing page, dashboard, and analytics ready to go.",
  },
  {
    name: "Sarah Kim",
    role: "Product Manager",
    quote:
      "Beautiful UI and clean architecture. Perfect for quickly validating SaaS ideas.",
  },
  {
    name: "David Lee",
    role: "Software Engineer",
    quote:
      "I integrated it with my backend in minutes. The MongoDB setup is super clean.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 border-b">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Loved by Innovators
        </h2>

        <p className="mt-3 text-muted-foreground text-center max-w-xl mx-auto">
          Real feedback from creators and builders using this starter.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="rounded-xl border shadow-sm hover:shadow-md transition">
                <CardHeader>
                  <h3 className="font-semibold text-lg">{t.name}</h3>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground">{t.quote}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
