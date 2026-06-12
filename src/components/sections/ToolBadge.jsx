export default function ToolBadge({
  tool,
}) {
  return (
    <div
      className="
        flex
        h-[2.3rem]
        items-center
        gap-2
        bg-[#E6E6E6]
        border
        border-dashed
        border-[#BBBBBB]
        px-3
        whitespace-nowrap
      "
    >
      <img
        src={tool.icon}
        alt={tool.name}
        className="
          h-5
          w-5
          md:h-4
          md:w-4
          object-contain
        "
      />

      <span
        className="
          font-[family-name:var(--font-sfmono)]
          text-[0.70588rem]
          font-medium
          md:text-[0.75rem]
          text-[#767676]
        "
      >
        {tool.name}
      </span>
    </div>
  );
}