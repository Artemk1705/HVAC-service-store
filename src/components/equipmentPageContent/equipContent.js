"use client";

import React, { useState, useEffect } from "react";

export default function Equipment({ selectedTypes }) {
  const [equipment, setEquipment] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (selectedTypes.length > 0) {
      fetchEquipment();
    }
  }, [selectedTypes]);

  const fetchEquipment = async () => {
    try {
      setLoading(true);
      console.log(`Fetching equipment for type(s): ${selectedTypes}...`);

      const queryString = selectedTypes.length
        ? `?type=${selectedTypes.join(",")}`
        : "";

      const API_URL =
        process.env.NEXT_PUBLIC_API_BASE_URL || "http://your-ec2-ip/api";

      const res = await fetch(`${API_URL}/equip${queryString}`);
      if (!res.ok) throw new Error("Failed to fetch equipment");

      const data = await res.json();
      console.log("📜 Filtered Equipment Data:", data);
      setEquipment(data);
    } catch (error) {
      console.error("❌ Ошибка загрузки данных:", error);
      setError("Не удалось загрузить данные.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className="equip_page_title_container"></div>

      <div>
        {equipment.length === 0 ? (
          <div>No equipment found.</div>
        ) : (
          equipment.map((item) => (
            <div key={item.equipment_id} className="list_equip_container">
              <div className="equip_card_container">
                <h2 className="equip_card_title">{item.model}</h2>
                <p className="equip_card_description">{item.name}</p>
                <p className="equp_card_Category">
                  Power: {item.power} Ton | {item.btu} BTU | SEER: {item.seer}
                </p>
                <p className="equp_card_Category">Type: {item.type}</p>
              </div>
              <div className="equip_contact_button">Contact</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
