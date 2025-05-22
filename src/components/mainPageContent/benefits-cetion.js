import Link from "next/link";
import { Button } from "@/components/ui/button";

export function BenefitsSection() {
  return (
    <div className="w-screen">
      <div className="py-25 bg-neutral-900 text-white flex flex-row-reverse justify-evenly">
        <img
          className="about-section-picture"
          src="/images/services-hero-pictures/electrical-repair-power-quality-efficiency-repair-performance-smart-system-happy-valley.webp"
          alt="awd"
        />
        <div className="flex justify-evenly flex-col w-[35vw]">
          <div className="font-bold uppercase">benefits</div>
          <h2 className="title-text-block">
            Why Homeowners & Businesses Trust Smart HVAC
          </h2>
          <p className="p-text-block">
            Smart HVAC is a reliable choice for homeowners and businesses,
            offering licensed and insured services delivered by highly trained,
            NATE-certified technicians. We specialize in energy-efficient
            solutions and provide flexible financing options to suit different
            budgets. Our trusted partnerships with top brands like York,
            Mitsubishi, Ameristar, and others ensure high-quality products and
            performance. Contractor Network and an Energy Trust of Oregon Trade
            Ally, we’re dedicated to maintaining industry excellence and
            promoting sustainable, cost-effective HVAC solutions.
          </p>
          <Link href="/about">
            <Button variant="blur">learn more</Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-evenly py-10">
        <div className="uppercase flex flex-col items-center justify-evenly">
          <h2 className="text-3xl py-3">10+</h2>
          <p className="text-sm">ears of expirience</p>
        </div>
        <div className="uppercase flex flex-col items-center justify-evenly">
          <h2 className="text-3xl py-3">10+</h2>
          <p className="text-sm">ears of expirience</p>
        </div>
        <div className="uppercase flex flex-col items-center justify-evenly">
          <h2 className="text-3xl py-3">10+</h2>
          <p className="text-sm">ears of expirience</p>
        </div>
        <div className="uppercase flex flex-col items-center justify-evenly">
          <h2 className="text-3xl py-3">10+</h2>
          <p className="text-sm">ears of expirience</p>
        </div>
      </div>
    </div>
  );
}
