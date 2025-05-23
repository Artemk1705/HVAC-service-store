export function CityHeroSection({ title, background }) {
  return (
    <div
      className="w-screen h-[75dvh] bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div>
        <h1 className="text-white text-center text-7xl uppercase text-shadow-lg">
          {title}
        </h1>
      </div>
    </div>
  );
}
