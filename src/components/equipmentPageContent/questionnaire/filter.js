"use client";

import { FilterButtons } from "@/components/ui/filter-buttons";

export function AirHandlerFilter({ airHandlerType, setAirHandlerType }) {
  const airHandlerOptions = ["Variable Speed", "Multy Speed"];

  return (
    <FilterButtons
      label="Select Air Handler Type"
      options={airHandlerOptions}
      selected={airHandlerType}
      onSelect={setAirHandlerType}
    />
  );
}

export function FurnaceFilter({ furnaceType, setFurnaceType }) {
  const furnaceOptions = [
    "Two stage",
    "Single stage",
    "Variable two stage",
    "Modulating Variable",
  ];

  useEffect(() => {
    if (!furnaceType) {
      setFurnaceType("Two stage");
    }
  }, [furnaceType, setFurnaceType]);

  return (
    <FilterButtons
      label="Select Furnace Type"
      options={furnaceOptions}
      selected={furnaceType}
      onSelect={setFurnaceType}
    />
  );
}
