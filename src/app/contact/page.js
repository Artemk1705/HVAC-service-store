"use client";

import { useEffect } from "react";
import { Contactmain } from "@/components/contactPageContent/contactmain";

function Contact() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);
  return (
    <div className="contact">
      <Contactmain />
    </div>
  );
}

export default Contact;
