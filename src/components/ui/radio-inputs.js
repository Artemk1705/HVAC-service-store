import { useState } from "react";

export default function CardRadioGroup({ options, onChange }) {
  const [selected, setSelected] = useState(options[0]?.id);

  const handleSelect = (id) => {
    setSelected(id);
    if (onChange) {
      onChange(id);
    }
  };

  return (
    <div className="space-y-4 flex">
      {options.map((option) => (
        <label
          key={option.id}
          className={`flex justify-between items-center p-4 mx-4 border-2 rounded-lg cursor-pointer transition-all h-20 ${
            selected === option.id
              ? "border-blue-500 bg-blue-50 text-neutral-900"
              : "border-gray-200"
          }`}
          onClick={() => handleSelect(option.id)}
        >
          <div className="flex flex-col">
            <span className="font-medium text-lg">{option.title}</span>
            <span className="text-sm text-gray-500">{option.specs}</span>
          </div>
          <input
            type="radio"
            name="plan"
            value={option.id}
            checked={selected === option.id}
            onChange={() => handleSelect(option.id)}
            className="hidden"
          />
        </label>
      ))}
    </div>
  );
}
