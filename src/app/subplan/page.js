"use client";

import { useEffect } from "react";
import { MainPlan } from "@/components/maintenencePlan/plan";

export default function MaintenancePlan() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);
  return (
    <div className="main_plan">
      <MainPlan />
    </div>
  );
}
