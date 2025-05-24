import { Button } from "./button";
import Link from "next/link";
import Image from "next/image";

export function InfoSectionList({
  title,
  image,
  tag,
  text,
  sectionIndex,
  href,
  button,
}) {
  const isEven = sectionIndex % 2 === 0;

  const sectionStyles = isEven
    ? "bg-white text-neutral-900 flex-row"
    : "bg-neutral-900 text-white flex-row-reverse";

  const buttonType = isEven ? "gradient" : "blur";

  return (
    <div
      className={`w-screen py-25 ${
        isEven ? "bg-white text-neutral-900" : "bg-neutral-900 text-white"
      }`}
    >
      <div
        className={`flex items-center justify-around ${
          isEven ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <Image
          className="w-2/5 object-cover rounded-lg shadow-md"
          src={image}
          alt={tag}
          width={700}
          height={500}
          loading="lazy"
        />
        <div className="w-2/5 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-10">{title}</h2>
          <div className="space-y-3 pb-10">
            <div className="text-lg">{text}</div>
          </div>
          <Link href={href} passHref>
            <Button variant={buttonType}>{button}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
