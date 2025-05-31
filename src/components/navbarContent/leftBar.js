import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function LeftNav() {
  return (
    <div className="flex flex-col items-center">
      <div>
        <Link href="/subplan">
          <Button variant="border">MAINTENANCE PLAN</Button>
        </Link>
      </div>
      <div className="flex justify-center items-center w-[260px]">
        <Link href="/equipment">
          <Button variant="products">PRODUCTS</Button>
        </Link>
        <Link href="/cart">
          <Button variant="cercle">
            <Image
              className=" xl:rounded-lg w-4/7 object-cover rounded-0 shadow-md"
              src="/images/cart-products-equipment.png"
              alt="pic"
              width={500}
              height={500}
              loading="lazy"
            />
          </Button>
        </Link>
      </div>
      <div>
        <Button variant="filled">
          <a
            className="schedule_link"
            href="https://book.housecallpro.com/book/Smart-HVAC-LLC/873f1cd3570a4061a22cdf1c843d46ea?v2=true"
          >
            GET SCHEDULE
          </a>
        </Button>
      </div>
    </div>
  );
}
