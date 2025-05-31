"use client";

import { cn } from "@/lib/utils";

export function Button({ className = "", variant = "default", ...props }) {
  const variants = {
    default: "default-button",
    glass: "glass-button",
    filled:
      "nav-filled-back-button base xl:w-[260px] w-[230px] xl:py-[10px] py-[8px] px-[25px] my-[7px] rounded-3xl",
    gradient: "one-border-button",
    border:
      "nav-one-border-button base xl:w-[260px] w-[230px] xl:py-[10px] py-[8px] px-[25px] my-[7px] rounded-3xl",
    bordersq: "square-one-border-button",
    navblur: "nav-blur-white-button",
    blur: "blur-white-button ",
    cercle:
      "nav-button-gradient w-[50px] xl:w-[60px]  h-[38.5px] xl:h-[42.5px] flex justify-center items-center rounded-full base ml-[5px]",
    products:
      "nav-button-gradient w-[180px] xl:w-[195px] text-white xl:px-[45px] py-[8px] xl:py-[10px] rounded-[25px] base ",
  };

  return <button {...props} className={cn(variants[variant], className)} />;
}
