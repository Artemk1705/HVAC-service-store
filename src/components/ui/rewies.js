"use client";

import React, { useState, useEffect, useRef } from "react";
import { Stars } from "@/components/mainPageContent/stars-container";
import { reviews } from "@/data/reviews/review-data";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export const ReviewBlock = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const textRef = useRef(null);
  const nameRef = useRef(null);
  const starsRef = useRef(null);

  const animateIn = () => {
    const textEl = textRef.current;
    const nameEl = nameRef.current;
    const starsEl = starsRef.current;

    if (!textEl || !nameEl || !starsEl) return;

    const splitText = new SplitText(textEl, {
      type: "lines",
      linesClass: "line",
    });

    gsap.set([nameEl, starsEl], {
      yPercent: 100,
      opacity: 0,
    });

    gsap.from(splitText.lines, {
      yPercent: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(nameEl, {
      yPercent: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
      delay: 0.2,
    });

    gsap.to(starsEl, {
      yPercent: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
      delay: 0.3,
    });

    return () => splitText.revert();
  };

  const animateOut = () => {
    return new Promise((resolve) => {
      const textEl = textRef.current;
      const nameEl = nameRef.current;
      const starsEl = starsRef.current;

      if (!textEl || !nameEl || !starsEl) {
        resolve();
        return;
      }

      const splitText = new SplitText(textEl, {
        type: "lines",
        linesClass: "line",
      });

      const tl = gsap.timeline({
        onComplete: () => {
          splitText.revert();
          resolve();
        },
      });

      tl.to(splitText.lines, {
        yPercent: -100,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.in",
      });

      tl.to(
        nameEl,
        {
          yPercent: -100,
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
        },
        "<"
      );

      tl.to(
        starsEl,
        {
          yPercent: -100,
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
        },
        "<"
      );
    });
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      await animateOut();
      gsap.set([nameRef.current, starsRef.current], {
        yPercent: 100,
        opacity: 0,
      });
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === reviews.length ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      animateIn();
    });

    return () => cancelAnimationFrame(raf);
  }, [currentIndex]);

  const currentReview = reviews[currentIndex];

  return (
    <div className="block_reviews xl:w-screen">
      <div className="flex flex-col justify-center text-center items-center py-10 xl:py-25">
        <div className="text-white pb-10">
          <div className="uppercase font-bold">our reviews</div>
          <h2 className="title-text-block">See why our customers trust us</h2>
        </div>
        <div className="text-center items-center flex flex-col justify-between bg-[#f9f9f958] px-5 py-10 rounded-[10px] xl:h-100 h-150 xl:w-80 w-screen min-w-[75vw] shadow-lg overflow-hidden transition-opacity duration-500 ease-in-out">
          <div className="w-75" ref={starsRef}>
            <Stars />
          </div>
          <div ref={textRef} className="text-xl text-white leading-8">
            {currentReview.text}
          </div>
          <div ref={nameRef} className="reviews_name">
            {currentReview.name}
          </div>
        </div>
      </div>
    </div>
  );
};
