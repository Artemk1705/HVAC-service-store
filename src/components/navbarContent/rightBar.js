import Link from "next/link";

export function RightNav() {
  return (
    <div className="nav_container">
      <div className="nav_phone_container flex flex-col items-end">
        <Link href="/services/emergency-service">
          <div className="uppercase text-red-600 pr-2.5 text-1xl hover:decoration-solid">
            emergency service
          </div>
        </Link>
        <a className="nav_right_link_container" href="tel:13609213233">
          +1 (360) 921-3233{" "}
        </a>
      </div>
      <div className="nav_city_container">
        <Link
          className="nav_right_link_container"
          href="/service-zone/washington"
        >
          Washington
        </Link>
        <Link className="nav_right_link_container" href="/service-zone/oregon">
          Oregon
        </Link>
      </div>
    </div>
  );
}
