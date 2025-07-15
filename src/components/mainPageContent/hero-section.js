import { Button } from "@/components/ui/button";

export function MainPageHero() {
  return (
    <div className="relative w-screen min-h-[800px] h-[75vh] bg-[url('/images/hvac-contractor-ac-repair-heating-installation-ductless-mini-split-furnace-maintenance-heat-pump-emergency-service-air-quality-electrical-vancouver-portland-wa-or.webp')] bg-cover bg-center flex items-center justify-center">
      <div className="title_main_text_container">
        <div className="absolute top-[100px] left-[25px] text-white flex flex-col items-start text-left xl:top-60 ml-0 cursor-default">
          <div>
            <h1 className="font-header text-6xl sm:text-3xl md:text-7xl lg:text-8xl xl:text-8xl uppercase text-shadow-lg">
              your comfort <br />
              our priority
            </h1>

            <p className="my-10 xl:mb-7 xl:my-7 xl:w-2/5 w-100 text-xl text-shadow-lg">
              Your trusted <strong>HVAC contractor</strong> right next to
              you—for
              <strong> 24/7 emergency AC repair</strong>, expert
              <strong> heating installation</strong>,
              <strong> furnace maintenance</strong>,
              <strong> ductless mini-split service</strong>,
              <strong> indoor air quality testing</strong>,
              <strong> energy-efficient heat pump solutions</strong>, and
              <strong> preventative HVAC tune-ups</strong> across
              <strong> Vancouver, WA</strong> and <strong>Portland, OR</strong>.
            </p>
          </div>
          <div className="flex justify-center items-center whitespace-nowrap xl:items-start sm:w-[245px] w-105">
            <a href="https://book.housecallpro.com/book/Smart-HVAC-LLC/873f1cd3570a4061a22cdf1c843d46ea?v2=true">
              <Button variant="navblur">GET SCHEDULE</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
