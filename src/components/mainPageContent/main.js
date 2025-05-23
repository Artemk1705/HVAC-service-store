"use client";

import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import { previewData } from "@/data/preview-section/preview";
import { MainServices } from "@/components/ui/main-services";
import { MainPageHero } from "./hero-section";
import { PreviewSection } from "@/components/ui/preview";
import { AboutSection } from "./about-section";
import { BenefitsSection } from "./benefits-cetion";

const ReviewBlock = dynamic(
  () => import("../ui/rewies").then((mod) => mod.ReviewBlock),
  { ssr: false }
);
const FormDis = dynamic(() => import("./form-discount"), { ssr: false });
const PartnersBlock = dynamic(() => import("./pratners"), { ssr: false });
const Fincaning = dynamic(
  () => import("@/components/mainPageContent/financing"),
  { ssr: false }
);

export function Main() {
  return (
    <div className="container">
      <div className="main_content">
        <MainPageHero />
        <PreviewSection
          title={previewData.mainPreview.title}
          text={previewData.mainPreview.text}
        />
        <AboutSection />
        <MainServices />
        <BenefitsSection />
        <ReviewBlock />
        <Fincaning />
        <FormDis />
        <PartnersBlock />
      </div>
    </div>
  );
}
