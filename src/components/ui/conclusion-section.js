import { Button } from "./button";

export function ConclusionSection() {
  return (
    <div className="bg-gray-900/40 flex flex-col py-25 items-center text-white">
      <h2 className="text-white text-3xl px-5 xl:px-0">
        Call Smart HVAC to learn more about our service
      </h2>
      <div className="grid grid-cols-2 gap-5 xl:flex xl:justify-evenly bg-white w-screen xl:w-200 py-6 my-15 xl:rounded-full">
        <div className="flex flex-col items-center text-center">
          <img
            className="w-17"
            src="/images/contact-block-logo/diagram.webp"
            alt=""
          />
          <h4 className="text-black">Efficient</h4>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            className="w-17"
            src="/images/contact-block-logo/medal.webp"
            alt=""
          />
          <h4 className="text-black">Reliable</h4>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            className="w-17"
            src="/images/contact-block-logo/person.webp"
            alt=""
          />
          <h4 className="text-black">Professional</h4>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            className="w-17"
            src="/images/contact-block-logo/stopwatch.webp"
            alt=""
          />
          <h4 className="text-black">Quick</h4>
        </div>
      </div>
      <p className="leading-8 xl:text-center w-screen xl:w-2/3 text-lg px-5 xl:px-0 pb-12">
        If you want more control over your home's temperature, energy usage, and
        air quality, Smart HVAC offers intelligent HVAC solutions designed for
        modern living. Our team specializes in installing, maintaining, and
        integrating smart thermostats and fully connected systems that adapt to
        your lifestyle and enhance efficiency. Enjoy the benefits of a
        climate-controlled environment with reduced energy costs and optimized
        performance. <br />
        <br />
        Book your appointment today and experience the comfort, savings, and
        convenience of a smarter home with expert service from Smart HVAC.
      </p>
      <Button variant="blur">CONTACT</Button>
    </div>
  );
}
