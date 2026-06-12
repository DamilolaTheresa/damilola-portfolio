import Navbar from "./layout/Navbar";
import Hero from "./sections/Hero";
import FeaturedProjects from "./sections/FeaturedProjects";
import AboutSection from "./sections/AboutSection";
import CursorFollower from "./sections/CursorFollower";
import ServicesSection from "@/components/sections/ServicesSection";
import ToolsSection from "@/components/sections/ToolsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import CTASection from "@/components/sections/CTASection";
import FooterSection from "@/components/sections/FooterSection";
import BackToTopButton from "@/components/sections/BackToTopButton";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <CursorFollower />

      <Navbar />

      <Hero />

      <FeaturedProjects />

      <AboutSection />

      <ServicesSection />

      <ToolsSection />

      <TestimonialsSection />

      <ExperienceSection />

      <CTASection />

      <FooterSection />

      <BackToTopButton />
    </main>
  );
}