export function CityHeroSection({ title, image }) {
  return (
    <div
      className="w-screen h-[75dvh] bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="">
        <h1 className="text-black text-7xl uppercase">{title}</h1>
      </div>
    </div>
  );
}
