import { Button } from "@/components/ui/button";

export function HeroSection({ title, backgroundImage }) {
  return (
    <div
      className="w-screen h-[75dvh] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="h-90 absolute top-0 right-0 p-8 flex flex-col justify-evenly items-center bg-gradient rounded-bl-4xl shadow-lg">
        <h1 className="text-white text-4xl font-bold mb-4 text-right">
          {title}
        </h1>
        <Button variant="navblur">GET SCHEDULE</Button>
      </div>
    </div>
  );
}
