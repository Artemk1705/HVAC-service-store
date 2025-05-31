import { Button } from "@/components/ui/button";

export function HeroSection({ title, backgroundImage }) {
  return (
    <div
      className="w-screen h-[75dvh] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="h-50  xl:w-2/6 w-screen absolute top-0 right-0 p-8 flex flex-col justify-evenly items-center bg-gradient-corner  xl:rounded-bl-[100px] shadow-lg">
        <h1 className="text-white text-4xl font-bold mb-4 text-center">
          {title}
        </h1>
        <Button variant="navblur">
          <a
            className="schedule_link"
            href="https://book.housecallpro.com/book/Smart-HVAC-LLC/873f1cd3570a4061a22cdf1c843d46ea?v2=true"
          >
            GET SCHEDULE
          </a>
        </Button>
      </div>
    </div>
  );
}
