import Link from "next/link";

export function RightNav() {
  return (
    <div className="nav_container">
      <div className="nav_phone_container">
        <a className="nav_right_link_container" href="tel:13609213233">
          +1 (360) 921-3233{" "}
        </a>
      </div>
      <div className="nav_city_container">
        <Link className="nav_right_link_container" href="/areas/washington">
          Washington
        </Link>
        <Link className="nav_right_link_container" href="/areas/oregon">
          Oregon
        </Link>
      </div>
    </div>
  );
}
