import { Button } from "@/components/ui/button";

export default function Fincaning() {
  return (
    <div className="flex justify-evenly w-screen py-25 text-neutral-900">
      <img
        src="/images/finance-picture.webp"
        className="about-section-picture"
        alt="Conditioners"
      />
      <div className="flex justify-evenly flex-col w-[35vw]">
        <div className="font-bold uppercase pb-5">EASY FINANCING</div>
        <h2 className="title-text-block pb-7">
          Expand your purchasing power with Promotional Financing through
          Synchrony
        </h2>
        <p className="p-text-block pb-4">
          Synchrony is one of the nation’s leading consumer financial services
          companies, with a history in consumer finance dating back to 1932.
          Today, it stands as the largest provider of private label credit cards
          in the United States, based on purchase volume and receivables. <br />
          <br />
          Synchrony offers a simple application process with fast credit
          decisions, making it easy for consumers to access revolving credit
          lines and promotional financing options. Customers benefit from
          convenient monthly payment plans and easy online account management,
          providing flexibility and control over their finances.
        </p>
        <a href="https://www.mysynchrony.com/mmc/S6228322207">
          <Button variant="gradient">APPLY ONLINE</Button>
        </a>
      </div>
    </div>
  );
}
