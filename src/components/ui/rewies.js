"use client";

import React, { useState, useEffect, useRef } from "react";
import { Stars } from "@/components/mainPageContent/stars-container";
import { reviews } from "@/data/reviews/review-data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const ReviewBlock = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const textRef = useRef(null);
  const nameRef = useRef(null);
  const starsRef = useRef(null);
  const containerRef = useRef(null);

  // 👉 Анимация появления элементов
  const animateIn = () => {
    if (textRef.current && nameRef.current && starsRef.current) {
      const splitText = new SplitText(textRef.current, {
        type: "lines",
        linesClass: "line",
      });

      // Сброс позиций перед появлением
      gsap.set([nameRef.current, starsRef.current], {
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

      gsap.to(nameRef.current, {
        yPercent: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        delay: 0.2,
      });

      gsap.to(starsRef.current, {
        yPercent: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        delay: 0.3,
      });

      return () => splitText.revert();
    }
  };

  // 👉 Анимация исчезновения элементов
  const animateOut = (onComplete) => {
    if (textRef.current && nameRef.current && starsRef.current) {
      const splitText = new SplitText(textRef.current, {
        type: "lines",
        linesClass: "line",
      });

      gsap.to(splitText.lines, {
        yPercent: -100,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.in",
        onComplete,
      });

      gsap.to(nameRef.current, {
        yPercent: -100,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      });

      gsap.to(starsRef.current, {
        yPercent: -100,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      });
    }
  };

  // 👉 Таймер для переключения отзывов
  useEffect(() => {
    let interval;

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 80%",
      end: "bottom 20%",
      onEnter: () => {
        interval = setInterval(() => {
          animateOut(() => {
            gsap.set([nameRef.current, starsRef.current], {
              yPercent: 100,
              opacity: 0,
            });

            setCurrentIndex((prevIndex) =>
              prevIndex + 1 === reviews.length ? 0 : prevIndex + 1
            );
          });
        }, 5000);
      },
      onLeave: () => {
        clearInterval(interval);
      },
      onEnterBack: () => {
        interval = setInterval(() => {
          animateOut(() => {
            gsap.set([nameRef.current, starsRef.current], {
              yPercent: 100,
              opacity: 0,
            });

            setCurrentIndex((prevIndex) =>
              prevIndex + 1 === reviews.length ? 0 : prevIndex + 1
            );
          });
        }, 5000);
      },
      onLeaveBack: () => {
        clearInterval(interval);
      },
    });

    return () => clearInterval(interval);
  }, []);

  // 👉 Запуск анимации появления при изменении отзыва
  useEffect(() => {
    animateIn();
  }, [currentIndex]);

  const currentReview = reviews[currentIndex];

  return (
    <div className="block_reviews">
      <div className="review-block" ref={containerRef}>
        <div className="text-white pb-10">
          <div className="uppercase font-bold">our reviews</div>
          <h2 className="title-text-block">See why our customers trust us</h2>
        </div>
        <div className="review">
          <div ref={starsRef}>
            <Stars />
          </div>
          <div ref={textRef} className="reviews_text">
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
