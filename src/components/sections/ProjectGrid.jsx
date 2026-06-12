import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid({
  activeTab,
}) {
  return (
    <div
      className="
        mx-auto
        w-full
        max-w-[70rem]
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-x-8
        gap-y-12
      "
    >
      {projects[activeTab].map(
        (project) => (
          <ProjectCard
            key={`${activeTab}-${project.title}`}
            project={project}
            activeTab={activeTab}
          />
        )
      )}
    </div>
  );
}