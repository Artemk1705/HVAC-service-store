export const getPowerByHouseSize = (size) => {
  const sizeMap = {
    "<1000 sqft": "2.0",
    "1000-1500 sqft": "2.5",
    "1500-2000 sqft": "3.0",
    "2000-2500 sqft": "3.5",
    "2500-3000 sqft": "4.0",
    "3000-3500 sqft": "5.0",
    ">3500 sqft": "6.0",
  };
  return sizeMap[size] || null;
};

export const getCategoriesForRequest = (system, unitType) => {
  if (
    unitType &&
    [
      "Ceiling Recessed",
      "Floor Mounted",
      "Horizontal Ducted",
      "Wall Mounted",
    ].includes(unitType)
  ) {
    return ["air_conditioners"];
  }
  const categoryMap = {
    AC: ["air_conditioners"],
    "Heat Pump": ["heat_pumps"],
    Furnace: ["furnace"],
    "Furnace and AC": ["furnace", "air_conditioners"],
    "Furnace and Heat Pump": ["furnace", "heat_pumps"],
    "Air Handler": ["air_handlers"],
  };

  return categoryMap[system] || [];
};
