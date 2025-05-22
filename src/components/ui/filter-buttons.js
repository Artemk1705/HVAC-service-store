import { cn } from "@/lib/utils";

export function FilterButtons({ label, options, selected, onSelect }) {
  return (
    <div className="furnace-filter">
      <h3 className="filter-title">{label}</h3>
      <div className="filter-buttons flex gap-2 flex-wrap">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            className={cn(
              "filter-btn px-4 py-2 border rounded-md text-sm",
              selected === option ? "bg-primary text-white" : "bg-muted"
            )}
            onClick={() => onSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
