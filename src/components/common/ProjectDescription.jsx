import { useState } from "react"

const ProjectDescription = ({ text, limit = 220 }) => {
  const [expanded, setExpanded] = useState(false)

  const isLong = text.length > limit
  const displayedText = expanded ? text : text.slice(0, limit)

  return (
    <div className="text-xs leading-relaxed text-zinc-700 dark:text-zinc-300">
      <p>
        {displayedText}
        {!expanded && isLong && "…"}
      </p>

      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 text-[11px] uppercase tracking-widest text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  )
}

export default ProjectDescription
