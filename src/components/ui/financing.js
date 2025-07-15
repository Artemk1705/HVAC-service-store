import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Fincaning() {
  return (
    <div className="flex xl:flex-row flex-col items-center justify-evenly w-screen xl:py-25 text-neutral-900">
      <Image
        className="xl:w-2/5 w-screen flex flex-col justify-center"
        src="/images/finance-picture.webp"
        alt="Service"
        loading="lazy"
        width={700}
        height={500}
      />
      <div className="flex justify-evenly flex-col xl:w-[35vw] w-95 py-10">
        <div className="font-bold uppercase pb-5">EASY FINANCING</div>
        <h2 className="text-3xl font-bold mb-10">
          Make Comfort Affordable with Easy Financing Options
        </h2>
        <p className="text-lg pb-10">
          We offer multiple promotional financing programs to help you get the
          comfort you deserve—on a budget that works for you. With fast
          approvals, flexible monthly payments, and secure online account
          management, financing your HVAC or electrical upgrade has never been
          easier.
          <br />
          <br />
          Whether you're planning a new installation or an emergency repair, ask
          us about our current financing partners and how you can apply today.
        </p>
        <div className="flex justify-center items-center sm:items-start">
          <a href="https://www.mysynchrony.com/mmc/S6228322207">
            <Button variant="gradient">APPLY ONLINE</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
