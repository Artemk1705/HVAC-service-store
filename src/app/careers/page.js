import { SERVICES_PAGES } from "@/constants/services-pages";
import { notFound } from "next/navigation";

export default function ServicePage({ params }) {
  const content = SERVICES_PAGES[params.slug];

  if (!content) return notFound();

  return (
    <div className="px-4 py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{content.title}</h1>
      {content.sections?.map((section, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{section.heading}</h2>
          <ul className="list-disc list-inside space-y-1">
            {section.bullets.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
      {content.conclusion && (
        <div className="mt-8 text-lg font-semibold">{content.conclusion}</div>
      )}
    </div>
  );
}
