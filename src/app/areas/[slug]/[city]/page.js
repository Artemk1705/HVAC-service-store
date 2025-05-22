import { CITIES_PAGES } from "@/constants/city-pages";
import { notFound } from "next/navigation";
import { SectionList } from "@/components/servicesPagesContent/list-section";
import { CityHeroSection } from "@/components/areasPageContent/city-hero-section";
import { ConclusionSection } from "@/components/ui/conclusion-section";

export async function generateStaticParams() {
  return Object.keys(CITIES_PAGES).map((city) => {
    const isOregon = [
      "portland",
      "gresham",
      "happy-valley",
      "troutdale",
    ].includes(city);

    return {
      slug: isOregon ? "oregon" : "washington",
      city,
    };
  });
}

export default function CityPage({ params }) {
  const { city } = params;

  const cityContent = CITIES_PAGES[city];

  if (!cityContent) return notFound();

  const { title, sections, conclusion } = cityContent;

  return (
    <div className="city-page">
      <CityHeroSection title={title} />
      <SectionList sections={sections} />
      <ConclusionSection />
    </div>
  );
}
