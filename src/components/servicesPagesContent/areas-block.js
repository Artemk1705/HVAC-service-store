import { oregonAreas, washingtonAreas } from "@/data/cities/city-service";
import Link from "next/link";

export function AreasService() {
  return (
    <div className="bg-gradient py-25">
      <div className="text-white text-center mb-10">
        <div className="font-bold uppercase pb-5">service areas</div>
        <h2 className="title-text-block pb-7">Proudly serving</h2>
      </div>
      <div className="flex justify-evenly items-start ">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-yellow-400 uppercase text-2xl">Washinghton</h2>
          <div className="cities_content">
            {washingtonAreas.map((area) => (
              <Link href={`/areas/${area.slut}`} key={area.slug}>
                {area.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-yellow-400 uppercase text-2xl">Oregon</h2>
          <div className="cities_content">
            {oregonAreas.map((area) => (
              <Link href={`/areas/${area.slug}`} key={area.slug}>
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
