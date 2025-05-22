import Link from "next/link";
import { Button } from "@/components/ui/button";
1;

export function LeftNav() {
  return (
    <div className="nav_container">
      <div>
        <Link href="/subplan">
          <Button variant="border">MAINTENANCE PLAN</Button>
        </Link>
      </div>
      <div>
        <Link href="/equipment">
          <Button variant="border">PRODUCTS</Button>
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
