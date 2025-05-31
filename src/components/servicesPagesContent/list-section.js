import Image from "next/image";
import { Button } from "@/components/ui/button";

export function SectionList({ sections }) {
  return (
    <div className="w-screen">
      {sections.map((section, index) => {
        const isEven = index % 2 === 0;

        const styles = isEven
          ? "bg-neutral-900 text-white"
          : "bg-white text-neutral-900";

        const buttonVariant = isEven ? "blur" : "gradient";

        return (
          <div
            key={index}
            className={`flex items-center justify-around py-10 ${styles} ${
              isEven ? "flex-col xl:flex-row" : "flex-col xl:flex-row-reverse"
            }`}
          >
            <Image
              className="xl:w-2/5 w-95 flex flex-col justify-center"
              src="/images/navbar-logo.png"
              alt="Service"
              loading="lazy"
              width={700}
              height={500}
            />
            <div className="xl:w-2/5 w-95 flex flex-col justify-center">
              {section.title && (
                <h2 className="text-3xl font-bold mb-10">{section.title}</h2>
              )}
              {section.text && <p className="text-lg pb-10">{section.text}</p>}
              <Button variant={buttonVariant}>Learn More</Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
