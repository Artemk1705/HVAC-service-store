import Link from "next/link";

export function MainServices() {
  return (
    <div className="py-25 w-screen bg-neutral-300 text-neutral-900 ">
      <div className="flex flex-col justify-between items-center py-10">
        <div className="font-bold uppercase mb-10">our services</div>
        <h2 className="title-text-block mb-10">What We Do Best</h2>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row justify-evenly">
          <Link href="/services/cooling">
            <div className="group flex flex-col justify-evenly items-center transition duration-300 hover:scale-110">
              <img
                className="service_icon_picture group-hover:animate-bounce"
                src="/images/Services/cooling.webp"
                alt="Cooling Services by Smart HVAC - Air Conditioner Installation and Repair"
              />
              <div className="w-80 text-center">
                <h3 className="service_icon_title">cooling</h3>
                <p className="">
                  Ensure your home's comfort during hot summer months with our
                  expert air conditioning installation, repair, and maintenance
                  services. We optimize cooling efficiency and energy savings,
                  keeping your system running smoothly all season long.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/services/heating">
            <div className="group flex flex-col justify-evenly items-center transition duration-300 hover:scale-110">
              <img
                className="service_icon_picture group-hover:animate-bounce"
                src="/images/Services/heating.webp"
                alt="Heating Services by Smart HVAC - Furnace and Heater Maintenance"
              />
              <div className="w-80 text-center">
                <h3 className="service_icon_title">heating</h3>
                <p className="">
                  Keep your home warm and energy-efficient with our professional
                  heating services, including furnace installation, heat pump
                  maintenance, and emergency repairs. Our certified technicians
                  ensure your heating system operates at peak performance.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/services/heat-pumps">
            <div className="group flex flex-col justify-evenly items-center transition duration-300 hover:scale-110">
              <img
                className="service_icon_picture group-hover:animate-bounce"
                src="/images/Services/heat-pumps.webp"
                alt="Heat Pump Services by Smart HVAC - Efficient Heating and Cooling Solutions"
              />
              <div className="w-80 text-center">
                <h3 className="service_icon_title">heat pumps</h3>
                <p className="">
                  Experience year-round comfort with our heat pump solutions,
                  providing efficient heating and cooling. Our HVAC experts
                  handle installations, repairs, and maintenance to ensure your
                  system is energy-efficient and reliable.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/services/ductless">
            <div className="group flex flex-col justify-evenly items-center transition duration-300 hover:scale-110">
              <img
                className="service_icon_picture group-hover:animate-bounce"
                src="/images/Services/ductless.webp"
                alt="Ductless HVAC Systems by Smart HVAC - Mini-Split Installation"
              />
              <div className="w-80 text-center">
                <h3 className="service_icon_title">ductless</h3>
                <p>
                  Keep your ductless mini split running efficiently with routine
                  maintenance and expert repair services tailored to your
                  system’s specific needs.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-row justify-evenly pt-20">
          <Link href="/services/air-quality">
            <div className="group flex flex-col justify-evenly items-center transition duration-300 hover:scale-110">
              <img
                className="service_icon_picture group-hover:animate-bounce"
                src="/images/Services/air-quality.webp"
                alt="Air Quality Services by Smart HVAC - Air Purification and Filtration"
              />
              <div className="w-80 text-center">
                <h3 className="service_icon_title">air quality</h3>
                <p>
                  Breathe cleaner, healthier air with our air quality solutions.
                  We provide advanced air filtration, humidifiers, and
                  dehumidifiers to reduce allergens, dust, and pollutants,
                  creating a safe and comfortable indoor environment.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/services/emergency-service">
            <div className="group flex flex-col justify-evenly items-center transition duration-300 hover:scale-110">
              <img
                className="service_icon_picture group-hover:animate-bounce"
                src="/images/Services/emergency-service.webp"
                alt="Emergency HVAC Services by Smart HVAC - 24/7 Repairs and Support"
              />
              <div className="w-80 text-center">
                <h3 className="service_icon_title">emergency service</h3>
                <p>
                  Heating or cooling emergency? Our HVAC technicians are
                  available around the clock to restore your system and
                  comfort—day or night.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/services/electrician">
            <div className="group flex flex-col justify-evenly items-center transition duration-300 hover:scale-110">
              <img
                className="service_icon_picture group-hover:animate-bounce"
                src="/images/Services/electrician.webp"
                alt="Electrician Services by Smart HVAC - Electrical Installation and Repair"
              />
              <div className="w-80 text-center">
                <h3 className="service_icon_title">electrician</h3>
                <p>
                  Power your home safely and efficiently with our licensed
                  electrical services. From wiring and panel upgrades to
                  lighting and safety inspections, our electricians ensure
                  reliability and compliance with modern safety standards.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
