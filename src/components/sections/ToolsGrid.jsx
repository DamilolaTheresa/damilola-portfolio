"use client";

import { motion } from "framer-motion";
import ToolBadge from "./ToolBadge";
import { tools } from "@/data/tools";

export default function ToolsGrid() {
  const firstRow = tools.slice(0, 9);
  const secondRow = tools.slice(9);

  return (
    <div
      className="
        mt-8
        overflow-hidden
        space-y-4
      "
    >
      {/* Row 1 */}

      <div className="overflow-hidden">
        <motion.div
          className="
            flex
            w-max
            gap-3
          "
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...firstRow, ...firstRow].map(
            (tool, index) => (
              <ToolBadge
                key={`${tool.name}-${index}`}
                tool={tool}
              />
            )
          )}
        </motion.div>
      </div>

      {/* Row 2 */}

      <div className="overflow-hidden">
        <motion.div
          className="
            flex
            w-max
            gap-3
          "
          animate={{
            x: ["-50%", "0%"],
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...secondRow, ...secondRow].map(
            (tool, index) => (
              <ToolBadge
                key={`${tool.name}-${index}`}
                tool={tool}
              />
            )
          )}
        </motion.div>
      </div>
    </div>
  );
}