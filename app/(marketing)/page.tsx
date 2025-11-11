import { Features } from "@/components/landing/Features";
import { Hero } from "@/components/landing/Hero";
import { Pricing } from "@/components/landing/Pricing";
import { Testimonials } from "@/components/landing/Testimonials";

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
    </main>
  );
}
