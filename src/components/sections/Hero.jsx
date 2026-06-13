import HeroContent from "./HeroContent";
import ProjectsMarquee from "./ProjectsMarquee";

export default function Hero() {
  return (
    <section id="home" className="w-full bg-[#ECECEC]">
      <HeroContent />
      <ProjectsMarquee />
    </section>
  );
}