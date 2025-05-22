import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AboutSection() {
  return (
    <div className="flex justify-evenly flex-row w-screen py-25 text-neutral-900">
      <img
        className="about-section-picture"
        src="images/services-hero-pictures/ac-installation-comfort-professional-air-emergency-system-residential-eco-portland.webp"
        alt=""
      />
      <div className="flex justify-evenly flex-col w-[35vw]">
        <div className="font-bold uppercase">about us</div>
        <h2 className="title-text-block">
          Your Local HVAC Company – Heating and Cooling Done the Smart Way
        </h2>
        <p className="p-text-block">
          Smart HVAC is a trusted provider of heating, ventilation, and air
          conditioning services across Washington, known for delivering
          reliable, energy-efficient solutions tailored to both residential and
          commercial needs. We specialize in everything from system
          installations and routine maintenance to emergency repairs, always
          with a focus on customer comfort and satisfaction.
        </p>
        <Link href="/about">
          <Button variant="gradient">learn more</Button>
        </Link>
      </div>
    </div>
  );
}
