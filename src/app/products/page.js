"use client";

import { useEffect } from "react";
import "../../assets/styles/index.css";

function Products() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);
  return (
    <div className="contact">
      <div></div>
    </div>
  );
}

export default Products;
