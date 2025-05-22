import { Button } from "@/components/ui/button";

export function MainPageHero() {
  return (
    <div className="relative w-screen h-[75vh] bg-[url('/images/air-quality.webp')] bg-cover bg-center flex items-center justify-center">
      <div className="title_main_text_container">
        <div className="Head_text">
          <div>
            <h1 className="head_text1">About Us</h1>
            <p className="head_p">
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
          <a href="https://book.housecallpro.com/book/Smart-HVAC-LLC/873f1cd3570a4061a22cdf1c843d46ea?v2=true">
            <Button variant="navblur">GET SCHEDULE</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
