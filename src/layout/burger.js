"use client";
import React, { useState } from "react";
import Link from "next/link"; 

const Burger = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  const handleBurgerClose = () => {
    setIsBurgerOpen(false);
  };

  return (
    <div className={`burger ${isBurgerOpen ? "open" : "closed"}`}>
      <div className="burger-lines" onClick={handleBurgerClick}>
        <div className="burger-line" />
        <div className="burger-line" />
        <div className="burger-line" />
      </div>
      <div className="burger-menu">
        <div className="burger-close" onClick={handleBurgerClose}>
          Close
        </div>
        <div className="bur_links_container">
          <Link href="/" onClick={handleBurgerClick}>
            <div className="bur_main">Main</div>
          </Link>
          <Link href="/subplan" onClick={handleBurgerClick}>
            <div className="bur_about">Maintenance Plan</div>
          </Link>
          <Link href="/equipment" onClick={handleBurgerClick}>
            <div className="bur_about">Equipment</div>
          </Link>
          <Link href="/about" onClick={handleBurgerClick}>
            <div className="bur_about">About</div>
          </Link>
          <Link href="/contact" onClick={handleBurgerClick}>
            <div className="bur_contact">Contact</div>
          </Link>
          <Link href="/careers" onClick={handleBurgerClick}>
            <div className="bur_careers">Careers</div>
          </Link>
          <Link href="/cart" onClick={handleBurgerClick}>
            <div className="bur_careers">Cart</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Burger;
