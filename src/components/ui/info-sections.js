"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "./button";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export function InfoSectionList({
  title,
  image,
  tag,
  text,
  sectionIndex,
  href,
  button,
}) {
  const isEven = sectionIndex % 2 === 0;
  const buttonType = isEven ? "gradient" : "blur";
  const wrapClasses = isEven
    ? "bg-white text-neutral-900"
    : "bg-neutral-900 text-white";

  const sectionRef = useRef(null);
  const buttonWrapperRef = useRef(null);
  const ctxRef = useRef(null);

  useLayoutEffect(() => {
    ctxRef.current = gsap.context(() => {
      gsap.fromTo(
        buttonWrapperRef.current,
        { autoAlpha: 0, y: -40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          delay: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 20%", // когда середина секции попадает в центр экрана
            toggleActions: "play none none reverse",
            once: false, // если хочешь только один раз – поставь true
          },
        }
      );
    }, sectionRef);

    return () => ctxRef.current?.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`w-screen xl:py-25 pb-10 ${wrapClasses}`}
    >
      <div
        className={`flex items-center justify-around ${
          isEven ? "xl:flex-row flex-col" : "xl:flex-row-reverse flex-col"
        }`}
      >
        <Image
          className="xl:w-2/5 xl:rounded-lg w-screen object-cover rounded-0 shadow-md"
          src={image}
          alt={tag}
          width={700}
          height={500}
          loading="lazy"
        />

        <div className="xl:w-2/5 w-95 flex flex-col justify-center">
          <h2 className="text-3xl font-bold xl:mb-10 my-10">{title}</h2>

          <div className="space-y-3 pb-10">
            <p className="text-lg">{text}</p>
          </div>

          <div
            ref={buttonWrapperRef}
            className="flex justify-center items-center sm:items-start p-4 rounded-md"
          >
            <Link href={href} passHref>
              <Button variant={buttonType}>{button}</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
