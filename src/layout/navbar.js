"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LeftNav } from "@/components/navbarContent/leftBar";
import { RightNav } from "@/components/navbarContent/rightBar";
import Burger from "./burger";
import { NAV_MAIN_PAGES, NAV_SERVICES } from "@/constants/navbar-names";
import { NavButton } from "@/components/ui/nav-button";
import { Button } from "@/components/ui/button";

function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, "-");
}

function Navbar() {
  const [isMounted, setIsMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);

    const checkWidth = () => {
      setIsDesktop(window.innerWidth >= 1400);
    };

    checkWidth();
    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  if (!isMounted) return null;

  return (
    <nav className="nav">
      <div className="middle_nav_bar">
        <LeftNav />
        <Link href="/">
          <img
            src={
              isDesktop
                ? "/images/navbar-logo.png"
                : "/images/SmartLogoTablet.png"
            }
            alt="logo"
            className="logo_photo"
          />
        </Link>
        <RightNav />
      </div>
      <div className="nav_bar">
        {isDesktop ? (
          <ul className="nav_links_list">
            {NAV_MAIN_PAGES.map((item) => (
              <li key={item.label} className="nav_item">
                <Link href={`/${slugify(item.label)}`}>
                  <NavButton label={item.label} />
                </Link>
                <ul className="nav_dropdown">
                  {item.children.map((child) => (
                    <li key={child.href} className="nav_link_item">
                      <Link href={child.href}>{child.label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            {NAV_SERVICES.map((item) => (
              <li key={item.label} className="nav_item">
                <Link href={`/services/${slugify(item.label)}`} passHref>
                  <NavButton label={item.label} />
                </Link>
                <ul className="nav_dropdown">
                  {item.children.map((child) => (
                    <li key={child} className="nav_link_item">
                      <Link href={`/services/${slugify(child)}`}>{child}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}

            <li className="main_bar">
              <Link href="/cart">
                <Button variant="bordersq">CART</Button>
              </Link>
            </li>
          </ul>
        ) : (
          <Burger />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
