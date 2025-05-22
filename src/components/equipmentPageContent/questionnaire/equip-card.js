"use client";

import { Button } from "@/components/ui/button";
import { companyNames } from "@/constants/company-names";

export function EquipmentCard({ item, onAddToCart }) {
  const calculatePrice = (basePrice, multiplier) => {
    const cleanPrice = parseFloat(basePrice.replace(/[$,]/g, ""));
    if (isNaN(cleanPrice)) return null;
    return (
      cleanPrice * multiplier +
      (item.category === "air_conditioners" ? 700 : 0)
    ).toFixed(2);
  };

  return (
    <div className="flex flex-col rounded-lg shadow-md overflow-hidden bg-white dark:bg-gray-900 p-4">
      {item.image_url && (
        <img
          src={item.image_url}
          alt={item.name}
          className="w-full h-48 object-cover mb-4 rounded"
        />
      )}
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          <strong>Company:</strong> {companyNames[item.company_id] || "Unknown"}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          <strong>Type:</strong> {item.type}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          <strong>Model:</strong> {item.model}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          <strong>BTU:</strong> {item.btu}
        </p>
        {item.category !== "furnace" && (
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <strong>SEER:</strong> {item.seer}
          </p>
        )}
        <p className="text-sm text-gray-600 dark:text-gray-300">
          <strong>Power:</strong> {item.power} t
        </p>
        <div className="flex flex-col mt-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Price $
            </span>
            <span className="font-semibold text-xl text-primary">
              {item.price ? calculatePrice(item.price, 3) : "N/A"}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Discounted
            </span>
            <span className="font-semibold text-lg text-green-600 dark:text-green-400">
              {item.price ? calculatePrice(item.price, 2.5) : "Call"}
            </span>
          </div>
        </div>

        <Button
          variant="default"
          className="mt-4 w-full"
          onClick={() => onAddToCart(item)}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
}
