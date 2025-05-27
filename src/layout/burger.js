"use client";

import React, { useState } from "react";
import Link from "next/link";
import { NAV_MAIN_PAGES, NAV_SERVICES } from "@/constants/navbar-names";

function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, "-");
}

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBurger = () => setIsOpen(!isOpen);
  const closeBurger = () => setIsOpen(false);

  return (
    <div className="relative">
      <button
        onClick={toggleBurger}
        className="flex flex-col justify-center items-center space-y-1 z-50"
      >
        <span className="w-6 h-0.5 bg-black" />
        <span className="w-6 h-0.5 bg-black" />
        <span className="w-6 h-0.5 bg-black" />
      </button>

      {/* Меню */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={closeBurger}>
          <div
            className="absolute top-0 right-0 w-4/5 h-full bg-white p-6 z-50 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Menu</h2>
              <button onClick={closeBurger} className="text-2xl font-bold">
                &times;
              </button>
            </div>

            <div className="flex flex-col space-y-4">
              {NAV_MAIN_PAGES.map((page) => (
                <div key={page.label}>
                  <Link
                    href={`/${slugify(page.label)}`}
                    onClick={closeBurger}
                    className="font-semibold"
                  >
                    {page.label}
                  </Link>
                  <div className="ml-4 text-sm text-gray-600 space-y-1">
                    {page.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={closeBurger}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              {NAV_SERVICES.map((item) => (
                <div key={item.label}>
                  <Link
                    href={`/services/${slugify(item.label)}`}
                    onClick={closeBurger}
                    className="font-semibold"
                  >
                    {item.label}
                  </Link>
                  <div className="ml-4 text-sm text-gray-600 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child}
                        href={`/services/${slugify(child)}`}
                        onClick={closeBurger}
                      >
                        {child}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Burger;
