import { Hero } from "@/components/Hero";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { ExperienceSection } from "@/components/ExperienceSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { NewsletterSection } from "@/components/NewsletterSection";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[#121212]">
      <Hero />
      <FeaturedProducts />
      <ExperienceSection />
      <TestimonialsSection />
      <NewsletterSection />
    </main>
  );
}
