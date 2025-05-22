import { HIGHLIGHT_KEYWORDS } from "@/data/robot-words/keywords";

export function highlightKeywords(text) {
  const escaped = HIGHLIGHT_KEYWORDS.map((word) =>
    word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  const regex = new RegExp(`\\b(${escaped.join("|")})\\b`, "gi");

  return text.split(regex).map((part, i) =>
    HIGHLIGHT_KEYWORDS.some((w) => w.toLowerCase() === part.toLowerCase()) ? (
      <strong key={i} className="text-red-700 font-semibold">
        {part}
      </strong>
    ) : (
      part
    )
  );
}
