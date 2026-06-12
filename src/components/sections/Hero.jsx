import HeroContent from "./HeroContent";
import ProjectsMarquee from "./ProjectsMarquee";

export default function Hero() {
  return (
    <section className="w-full bg-[#ECECEC]">
      <HeroContent />
      <ProjectsMarquee />
    </section>
  );
}