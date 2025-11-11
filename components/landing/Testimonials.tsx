"use client";

import { motion } from "motion/react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

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
    <section
      id="testimonials"
      className="py-24 md:py-32 border-b border-border"
    >
      <div className="container mx-auto px-6 space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Loved by Innovators
          </h2>
          <p className="text-lg text-muted-foreground">
            Real feedback from creators and builders using this starter.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex"
            >
              <Card className="flex-1 rounded-xl border border-border shadow-sm hover:shadow-md hover:border-primary/20 transition-all flex flex-col">
                <CardHeader className="space-y-4 text-center">
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-lg">{t.name}</h3>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </CardHeader>

                <CardContent className="flex-1">
                  <p className="text-muted-foreground leading-relaxed italic text-center">
                    "{t.quote}"
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
