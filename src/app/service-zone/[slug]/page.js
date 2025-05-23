import { STATES_PAGES } from "@/constants/city-pages";
import { CITY_IMAGES } from "@/constants/service-cards-pictures";
import { notFound } from "next/navigation";
import { SectionList } from "@/components/servicesPagesContent/list-section";
import { CityHeroSection } from "@/components/areasPageContent/city-hero-section";
import Link from "next/link";
import Image from "next/image";
import { PreviewSection } from "@/components/ui/preview";
import { MainServices } from "@/components/ui/main-services";
import { ConclusionSection } from "@/components/ui/conclusion-section";

export default function StatePage({ params }) {
  const content = STATES_PAGES[params.slug];

  if (!content) return notFound();

  const section1 = content.sections?.slice(0, 1);
  const section2 = content.sections?.slice(1, 2);
  const section3 = content.sections?.slice(2);

  const citiesList = section1[0].bullets.map((city) => ({
    name: city,
    slug: city.toLowerCase().replace(/\s+/g, "-"),
    image: CITY_IMAGES[city.toLowerCase().replace(/\s+/g, "-")],
  }));
  const backgroundImage = CITY_IMAGES[params.city] || "/images/serv-back.webp";

  return (
    <div className="service-page">
      <CityHeroSection title={content.title} background={backgroundImage} />
      <PreviewSection />
      <div className="py-25">
        <h2 className="text-3xl text-center text-neutral-900">
          Service area overview
        </h2>
        <div className="city-list pt-25">
          {citiesList.map((city, index) => (
            <Link
              href={`/service-zone/${params.slug}/${city.slug}`}
              key={index}
              className="city-link"
            >
              <div className="city-card">
                <Image
                  src={city.image}
                  alt={`${city.name} HVAC Services`}
                  width={300}
                  height={200}
                  className="city-image"
                />
                <div className="overlay">
                  <p className="city-name">{city.name}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <SectionList sections={section2} />
      <MainServices />
      <SectionList sections={section3} />
      <ConclusionSection />
    </div>
  );
}
