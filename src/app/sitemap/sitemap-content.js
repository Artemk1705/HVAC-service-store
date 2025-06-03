import Link from "next/link";

export function SitemapContent() {
  return (
    <div className="py-25 bg-gradient my-10">
      <h1 className="text-white text-3xl text-center">Sitemap</h1>
      <div className="link-color flex flex-col px-15  py-10 text-xl">
        <h2 className="text-white text-2xl pb-10">Site`s Pages</h2>
        <Link href="/subplan">Maintenance plan</Link>
        <Link href="/equipment">Products</Link>
        <Link href="/cart">Cart</Link>
        <Link href="/service-zone/washington">Washington State service</Link>
        <Link href="/service-zone/oregon">Oregon State service</Link>
        <Link href="">Careers</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/services/ac-repair">Air conditioner repair service</Link>
        <Link href="/services/ac-installation">
          Air conditioner installation service
        </Link>
        <Link href="/services/ac-maintenance">
          Air conditioner maintenance service
        </Link>
        <Link href="/services/cooling">Cooling service</Link>
        <Link href="/services/heating">Heating service</Link>
        <Link href="/services/heat-pumps">Heat pumps service</Link>
        <Link href="/services/ductless">Ductless service</Link>
        <Link href="/services/air-quality">Air quality service</Link>
        <Link href="/services/electrician">Electrician service</Link>
        <Link href="/services/emergency-service">Emergency service</Link>
        <Link href="/services/heating-repair">Furnace repair service</Link>
        <Link href="/services/heating-installation">
          Furnace installation service
        </Link>
        <Link href="/services/heating-maintenance">
          Furnace maintenance service
        </Link>
        <Link href="/services/hp-repair">Heat pumps repair service</Link>
        <Link href="/services/hp-installation">
          Heat pumps installation service
        </Link>
        <Link href="/services/hp-maintenance">
          Heat pumps maintenance service
        </Link>
        <Link href="/services/mini-split-repair">
          Mini split repair service
        </Link>
        <Link href="/services/mini-split-installation">
          Mini split installation service
        </Link>
        <Link href="/services/mini-split-maintenance">
          Mini split maintenance service
        </Link>
        <Link href="/services/air-filter">Air filter service</Link>
        <Link href="/services/thermostat">Thermostat service</Link>
        <Link href="/">Home</Link>
        <Link href="/service-zone/washington/ariel">Ariel city service</Link>
        <Link href="/service-zone/washington/buttle-ground">
          Battle Ground city service
        </Link>
        <Link href="/service-zone/washington/brush-prairie">
          Brush Prairie city service
        </Link>
        <Link href="/service-zone/washington/kalama">Kalama city service</Link>
        <Link href="/service-zone/washington/kelso">Kelso city service</Link>
        <Link href="/service-zone/washington/camas">Camas city service</Link>
        <Link href="/service-zone/washington/ridgefield">
          Ridgefield city service
        </Link>
        <Link href="/service-zone/washington/vancouver">
          Vancouver city service
        </Link>
        <Link href="/service-zone/washington/washougal">
          Washougal city service
        </Link>
        <Link href="/service-zone/washington/woodland">
          Woodland city service
        </Link>
        <Link href="/service-zone/washington/yacolt">Yacolt service</Link>
        <Link href="/service-zone/oregon/portland">Portland city service</Link>
        <Link href="/service-zone/oregon/happy-valley">
          Happy Valley service
        </Link>
        <Link href="/service-zone/oregon/gresham">Gresham city service</Link>
        <Link href="/service-zone/oregon/troutdale">
          Troutdale city service
        </Link>
      </div>
      <div className="link-color flex flex-col px-15  py-10 text-xl">
        <h2 className="text-white text-2xl pb-10">Site`s Posts</h2>
      </div>
    </div>
  );
}
