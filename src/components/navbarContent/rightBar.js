import Link from "next/link";

export function RightNav() {
  return (
    <div className="flex flex-col font-semibold">
      <div className="text-lg xl:text-xl flex flex-col xl:items-end items-center">
        <a className="nav_right_link_container" href="tel:13609213233">
          +1 (360) 921-3233{" "}
        </a>
      </div>
      <div className="flex flex-col xl:items-end items-center text-lg xl:text-xl uppercase">
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
