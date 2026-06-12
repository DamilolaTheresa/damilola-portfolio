import { experiences } from "@/data/experiences";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceList() {
  return (
    <div
      className="
        flex
        flex-col
        gap-6
      "
    >
      {experiences.map(
        (experience, index) => (
          <ExperienceCard
            key={experience.company}
            experience={experience}
            index={index}
          />
        )
      )}
    </div>
  );
}