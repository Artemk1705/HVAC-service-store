import React, { useEffect } from "react";
import { LineChart } from "@/components/aboutPageContent/chart";
import { previewData } from "@/data/preview-section/preview";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AboutPageHero } from "@/components/aboutPageContent/hero-section";
import { PreviewSection } from "@/components/ui/preview";
import { InfoSectionList } from "@/components/ui/info-sections";
import { aboutSectionData } from "@/data/section-data/about-sections-data";
import { StatsSection } from "./stats-section";
import { MainServices } from "@/components/ui/main-services";
import { AboutConclusionSection } from "./conclusion-section";

gsap.registerPlugin(ScrollTrigger);

export function Aboutpage() {
  useEffect(() => {
    gsap.set(
      [".bubble_block_first", ".bubble_block_second", ".bubble_block_third"],
      {
        opacity: "0",
      }
    );
    gsap.set(".welcome_text", { opacity: 0 });

    gsap.to(".welcome_text", {
      opacity: 1,
      duration: 2,
    });

    gsap.to(".bubble_block_first", {
      opacity: "1",
      duration: 2,
      scrollTrigger: {
        trigger: ".bubble_block_first",
        start: "top 100%",
        end: "bottom 100%",
        scrub: true,
      },
    });

    gsap.to(".bubble_block_second", {
      opacity: "1",
      duration: 1,
      scrollTrigger: {
        trigger: ".bubble_block_second",
        start: "top 100%",
        end: "bottom 100%",
        scrub: true,
      },
    });

    gsap.to(".bubble_block_third", {
      opacity: "1",
      duration: 2,
      scrollTrigger: {
        trigger: ".bubble_block_third",
        start: "top 100%",
        end: "bottom 100%",
        scrub: true,
      },
    });
    gsap.to(".about_page", {
      duration: 2,
      scrollTrigger: {
        trigger: ".welcome_block",
        start: "bottom 30%",
        end: "bottom 70%",
        scrub: 1,
      },
    });
  });
  return (
    <div className="about_page">
      <AboutPageHero />
      <PreviewSection
        title={previewData.aboutPreview.title}
        text={previewData.aboutPreview.text}
      />
      <InfoSectionList
        sectionIndex={0}
        title={aboutSectionData.firstSection.title}
        text={aboutSectionData.firstSection.text}
        image={aboutSectionData.firstSection.image}
        tag={aboutSectionData.firstSection.tag}
      />
      <StatsSection />
      <InfoSectionList
        sectionIndex={1}
        title={aboutSectionData.secondSection.title}
        text={aboutSectionData.secondSection.text}
        image={aboutSectionData.secondSection.image}
        tag={aboutSectionData.secondSection.tag}
      />
      <MainServices />
      <InfoSectionList
        sectionIndex={2}
        title={aboutSectionData.thirdSection.title}
        text={aboutSectionData.thirdSection.text}
        image={aboutSectionData.thirdSection.image}
        tag={aboutSectionData.thirdSection.tag}
      />
      <LineChart />
      <AboutConclusionSection />
    </div>
  );
}
