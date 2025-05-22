"use client";

import { useState } from "react";
import "../../assets/styles/equip.css";
import Equipment from "../../components/equipmentPageContent/equipContent";
import QuestionnairePage from "@/components/equipmentPageContent/questionnaire/QuestionnairePage";

export default function EquipmentPage() {
  const [selectedTypes, setSelectedTypes] = useState([]);

  return (
    <div>
      <Equipment selectedTypes={selectedTypes} />
      <QuestionnairePage setSelectedTypes={setSelectedTypes} />
    </div>
  );
}
