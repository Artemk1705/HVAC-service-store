"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { NAV_MAIN_PAGES, NAV_SERVICES } from "@/constants/navbar-names";
import { LeftNav } from "@/components/navbarContent/leftBar";
import { RightNav } from "@/components/navbarContent/rightBar";

function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, "-");
}

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const pathname = usePathname();

  const toggleBurger = () => setIsOpen(!isOpen);
  const closeBurger = () => setIsOpen(false);
  const toggleExpand = (label) => {
    setExpanded(expanded === label ? null : label);
  };

  useEffect(() => {
    setIsOpen(false);
    setExpanded(null);
  }, [pathname]);

  return (
    <div className="relative">
      <button
        onClick={toggleBurger}
        className="flex flex-col justify-center items-center space-y-1 z-50 p-7"
      >
        <span className="w-10 h-1 bg-gradient" />
        <span className="w-10 h-1 bg-gradient" />
        <span className="w-10 h-1 bg-gradient" />
      </button>

      <Link href="/">
        <Image
          className="absolute top-1 left-1/2 -translate-x-1/2"
          src="/images/navbar-logo.png"
          width={80}
          height={80}
          alt="Logo"
        />
      </Link>

      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeBurger}
      />

      <div
        className={`fixed top-0 left-0 w-4/5 max-w-sm h-full bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col justify-between items-center p-6 border-b">
          <div className="w-full flex justify-between items-center">
            <Link href="/">
              <Image
                className="absolute top-1 left-1/2 -translate-x-1/2"
                src="/images/navbar-logo.png"
                width={100}
                height={100}
                alt="Logo"
              />
            </Link>

            <button onClick={closeBurger} className="text-2xl font-bold">
              &times;
            </button>
          </div>
          <div className="pt-10">
            <LeftNav />
            <RightNav />
          </div>
        </div>

        <div className="flex flex-col text-start space-y-6 p-6">
          {NAV_MAIN_PAGES.map((page) => (
            <div key={page.label}>
              <div className="flex items-center justify-between w-full text-neutral-900 text-xl">
                <Link
                  href={`/${slugify(page.label)}`}
                  onClick={closeBurger}
                  className="w-full text-left font-semibold"
                >
                  {page.label}
                </Link>
                {page.children.length > 0 && (
                  <button
                    onClick={() => toggleExpand(page.label)}
                    className="text-xl font-bold px-5"
                  >
                    {expanded === page.label ? "−" : "+"}
                  </button>
                )}
              </div>
              <div
                className={`pl-4 overflow-hidden transition-all duration-300 ease-in-out ${
                  expanded === page.label ? "max-h-96 pt-2" : "max-h-0"
                }`}
              >
                {page.children.map((child) => (
                  <Link
                    href={child.href}
                    key={child.href}
                    onClick={closeBurger}
                    passHref
                  >
                    <div className="text-lg py-2 font-medium text-gray-700 hover:text-black">
                      {child.label}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {NAV_SERVICES.map((item) => (
            <div key={item.label}>
              <div className="flex justify-between items-center text-neutral-900 text-xl">
                <Link
                  href={`/services/${slugify(item.label)}`}
                  onClick={closeBurger}
                  className="font-semibold"
                >
                  {item.label}
                </Link>
                {item.children.length > 0 && (
                  <button
                    onClick={() => toggleExpand(item.label)}
                    className="text-xl font-bold px-5 text-neutral-900"
                  >
                    {expanded === item.label ? "−" : "+"}
                  </button>
                )}
              </div>
              <div
                className={`pl-4 overflow-hidden transition-all duration-300 ease-in-out ${
                  expanded === item.label ? "max-h-96 pt-2" : "max-h-0"
                }`}
              >
                {item.children.map((child) => (
                  <Link
                    href={`/services/${slugify(child)}`}
                    key={child}
                    onClick={closeBurger}
                    passHref
                  >
                    <div className="text-lg py-2 text-neutral-900">{child}</div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Burger;
