import { STATES_PAGES } from "@/constants/city-pages";
import { CITY_IMAGES } from "@/constants/service-cards-pictures";
import { notFound } from "next/navigation";
import { SectionList } from "@/components/servicesPagesContent/list-section";
import { Conclusion } from "@/components/servicesPagesContent/conclusion";
import Link from "next/link";
import Image from "next/image";

export default function StatePage({ params }) {
  const content = STATES_PAGES[params.slug];

  if (!content) return notFound();

  const section1 = content.sections?.slice(0, 1);
  const section2 = content.sections?.slice(1, 2);
  const section3 = content.sections?.slice(2);

  // 🔍 Маппинг списка городов в первый список
  const citiesList = section1[0].bullets.map((city) => ({
    name: city,
    slug: city.toLowerCase().replace(/\s+/g, "-"),
    image: CITY_IMAGES[city.toLowerCase().replace(/\s+/g, "-")],
  }));

  return (
    <div className="service-page">
      <h1 className="service-title">{content.title}</h1>

      <SectionList sections={section1} />
      <h2>Service area overview</h2>
      <div className="city-list">
        {citiesList.map((city, index) => (
          <Link
            href={`/areas/${params.slug}/${city.slug}`}
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

      <SectionList sections={section2} />
      <SectionList sections={section3} />
      <Conclusion text={content.conclusion} />
    </div>
  );
}
