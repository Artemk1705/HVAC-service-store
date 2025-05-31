"use client";

import { LeftFootbar } from "@/components/footbarContent/left-side";
import { RightFootbar } from "@/components/footbarContent/right-side";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="back-grad w-screen">
      <div className="text-center py-8 text-white uppercase font-medium text-xl">
        Your Trusted Partner in Air Conditioning Services (360) 921-3233
      </div>
      <div className="flex xl:flex-row flex-col justify-evenly bg-white/25 w-screen py-10">
        <LeftFootbar />

        <div className="logo_block">
          <img
            src="/images/logoFooter.png"
            className="logo_footer"
            alt="Logo"
          />
        </div>
        <RightFootbar />
      </div>
      <div className="w-screen flex-col xl:flex-row justify-evenly items-center text-center px-0 py-5 xl:px-0 xl:py-8.5 text-white uppercase font-medium text-l">
        <div className="">© 2025 SMART HVAC LLC. All RIGHT RESERVED.</div>
        <div className="flex flex-col xl:flex-row justify-evenly">
          <div className="flex justify-evenly xl:w-80 w-screen underline text-sm py-3 xl:py-0">
            <Link href="">Sitemap</Link>
            <Link href="">Sitemap</Link>
            <Link href="">Policy</Link>
          </div>
          <div>WA ID# SMARTHL78J7 | OR ID# 250660</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
