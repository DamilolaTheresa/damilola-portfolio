import { motion } from "framer-motion";

export default function ProjectCard({
  project,
  activeTab,
}) {
  const cardContent = (
    <>
      {/* Image */}
      <div
        className="
          overflow-hidden
        "
      >
        <motion.img
          src={project.image}
          alt={project.title}
          initial={{
            scale: 0.75,
          }}
          whileInView={{
            scale: 1,
          }}
          viewport={{
            amount: 0.3,
          }}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            block
            w-full
          "
        />
      </div>

      {/* Content */}
      <div className="mt-5">
        <div
          className="
            flex
            items-start
            justify-between
            gap-4
          "
        >
          <h3
            className="
              font-geist
              text-[1rem]
              font-semibold
              text-[#262626]
            "
          >
            {project.title}
          </h3>

          <div className="flex gap-[0.625rem]">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`
                  border
                  border-dashed
                  px-2
                  py-1
                  font-[family-name:var(--font-sfmono)]
                  text-[0.625rem]
                  uppercase

                  ${
                    tag === "Design"
                      ? "border-[#690336] bg-[#EA8EAC] text-[#690336]"
                      : ""
                  }

                  ${
                    tag === "Dev"
                      ? "border-[#1D3D22] bg-[#7CB383] text-[#1D3D22]"
                      : ""
                  }

                  ${
                    tag === "Graphics"
                      ? "border-[#003173] bg-[#69A9FF] text-[#003173]"
                      : ""
                  }
                `}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <p
          className="
            mt-2
            font-[family-name:var(--font-sfmono)]
            text-[0.875rem]
            leading-[1.8]
            text-[#767676]
          "
        >
          {project.description}
        </p>
      </div>
    </>
  );

  if (activeTab === "graphics") {
    return (
      <article className="w-full">
        {cardContent}
      </article>
    );
  }

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full"
    >
      <article
        className="w-full cursor-none"
        onMouseEnter={() => {
          window.dispatchEvent(
            new Event(
              "project-hover-enter"
            )
          );
        }}
        onMouseLeave={() => {
          window.dispatchEvent(
            new Event(
              "project-hover-leave"
            )
          );
        }}
      >
        {cardContent}
      </article>
    </a>
  );
}