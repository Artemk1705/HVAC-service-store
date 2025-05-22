import { Button } from "@/components/ui/button";

export function HeroSection({ title, backgroundImage }) {
  return (
    <div
      className="w-screen h-[75dvh] bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex flex-col items-center">
        <h1 className="text-center text-white text-7xl text-shadow-md py-20">
          {title}
        </h1>
        <Button variant="navblur">GET SCHEDULE</Button>
      </div>
    </div>
  );
}
