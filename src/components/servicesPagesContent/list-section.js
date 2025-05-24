import { highlightKeywords } from "@/constants/robots-words";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function SectionList({ sections }) {
  return (
    <div className="w-screen">
      {sections.map((section, index) => {
        const styles =
          index % 3 === 0
            ? "bg-neutral-900 text-white"
            : index % 3 === 1
            ? "bg-white text-neutral-900"
            : "bg-red-500 text-white";
        const buttonVariant = styles.includes("bg-neutral-900")
          ? "blur"
          : "gradient";

        return (
          <div
            key={index}
            className={`flex items-center justify-around py-10 ${styles} ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <Image
              className="w-2/5 h-auto object-cover rounded-lg shadow-md"
              src="/images/navbar-logo.png"
              alt="Service"
              loading="lazy"
              width={700}
              height={500}
            />
            <div className="w-2/5 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-10">{section.heading}</h2>
              <div className="space-y-3 pb-10">
                {section.bullets.map((point, idx) => (
                  <div key={idx} className="text-lg">
                    {highlightKeywords(point)}
                  </div>
                ))}
              </div>
              <Button variant={buttonVariant}>Learn More</Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
