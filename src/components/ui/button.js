"use client";

import { cn } from "@/lib/utils";

export function Button({ className = "", variant = "default", ...props }) {
  const variants = {
    default: "default-button",
    glass: "glass-button",
    filled: "nav-filled-back-button",
    gradient: "one-border-button",
    border: "nav-one-border-button",
    bordersq: "square-one-border-button",
    navblur: "nav-blur-white-button",
    blur: "blur-white-button ",
  };

  return <button {...props} className={cn(variants[variant], className)} />;
}
