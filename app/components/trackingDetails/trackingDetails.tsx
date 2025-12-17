"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PRICE_LIST, ADDITIONAL_LIST } from "./const";
import Image from "next/image";
import TruckScheme from "../../../public/assets/img/truck-scheme.png";

const DecorativeLines = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 421 88"
    fill="none"
  >
    <defs>
      <linearGradient id="grad1" x1="-7" y1="44" x2="212" y2="44">
        <stop offset="0" stopColor="#ffda00" />
        <stop offset="1" stopColor="#ffffff" />
      </linearGradient>
      <linearGradient id="grad2" x1="382" y1="26" x2="-38" y2="26">
        <stop offset="0" stopColor="#fff" stopOpacity="0" />
        <stop offset="0.64" stopColor="#000" />
      </linearGradient>
    </defs>

    <rect x="-7" y="9" width="219" height="69" fill="url(#grad1)" />
    <rect x="-38" y="20" width="420" height="11" fill="url(#grad2)" />
    <rect x="-38" y="57" width="420" height="11" fill="url(#grad2)" />
    <rect x="-38" y="39" width="420" height="11" fill="url(#grad2)" />
  </svg>
);

gsap.registerPlugin(ScrollTrigger);

const TrackingDetails: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const arrowsRef = useRef<HTMLDivElement>(null);
  const priceListRef = useRef<HTMLUListElement>(null);
  const additionalListRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    const ctx = gsap.context(() => {
      // Заголовок
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, x: -120 },
        {
          opacity: 1,
          x: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        }
      );

      // Chevron стрелки >>>
      if (arrowsRef.current) {
        gsap.fromTo(
          arrowsRef.current.children,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%",
              toggleActions: "play none none reset",
            },
          }
        );
      }

      // PRICE_LIST
      if (priceListRef.current) {
        gsap.fromTo(
          priceListRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: priceListRef.current,
              start: "top 85%",
              toggleActions: "play none none reset",
            },
          }
        );
      }

      // ADDITIONAL_LIST
      if (additionalListRef.current) {
        gsap.fromTo(
          additionalListRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: additionalListRef.current,
              start: "top 85%",
              toggleActions: "play none none reset",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="relative bg-gradient-to-t from-[#ffed00] via-[#fff9a6] to-white py-16 md:py-24"
      aria-label="Описание"
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src={TruckScheme}
          alt="Схема грузовика"
          fill
          priority
          className="
      object-cover
      opacity-10 md:opacity-15
      translate-y-16 md:translate-y-0
    "
        />
      </div>
      {/* SVG слева */}
      <div className="absolute opacity-70 left-0 top-0 w-[270px] h-full pointer-events-none">
        <DecorativeLines className="w-full h-auto opacity-70" />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 md:mb-20 flex items-center gap-3">
          <h2
            ref={titleRef}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1d1d1b]"
          >
            Как формируется стоимость перевозки
          </h2>
          <div ref={arrowsRef} className="flex gap-1 md:gap-2">
            {[...Array(3)].map((_, i) => (
              <svg
                key={i}
                width="18"
                height="18"
                viewBox="0 0 28 28"
                className="md:w-[28px] md:h-[28px]"
              >
                <polygon
                  points="0,0 18,14 0,28 10,28 28,14 10,0"
                  fill="#1d1d1b"
                />
              </svg>
            ))}
          </div>
        </div>

        {/* DESKTOP */}
        <div className="relative hidden md:grid grid-cols-[1fr_160px_1fr] gap-10 items-center">
          {/* PRICE */}
          <ul ref={priceListRef} className="flex flex-col gap-6">
            {" "}
            {PRICE_LIST.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-md
                transition-transform duration-300 hover:scale-105"
              >
                {item.icon}
                <span className="font-medium">{item.title}</span>
              </li>
            ))}
          </ul>

          {/* SVG стрелки */}
          <div className="w-full h-full relative">
            <svg
              viewBox="0 0 160 400"
              className="absolute inset-0 w-full h-full"
              fill="none"
            >
              <defs>
                <marker
                  id="arrow"
                  viewBox="0 0 10 10"
                  refX="9"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto"
                >
                  <path d="M0 0L10 5L0 10Z" fill="#1d1d1b" />
                </marker>
              </defs>

              {PRICE_LIST.map((_, i) => {
                const y = 60 + i * (280 / (PRICE_LIST.length - 1));
                return (
                  <path
                    key={i}
                    d={`M10 ${y} C 60 ${y}, 100 200, 150 200`}
                    stroke="#1d1d1b"
                    strokeWidth="1.5"
                    opacity="0.6"
                    fill="none"
                    markerEnd="url(#arrow)"
                  />
                );
              })}
            </svg>
          </div>

          {/* ADDITIONAL */}
          <ul ref={additionalListRef} className="flex flex-col gap-6">
            {" "}
            {ADDITIONAL_LIST.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-md
                transition-transform duration-300 hover:scale-105"
              >
                {item.icon}
                <span className="font-medium">{item.title}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* MOBILE */}
        <div className="md:hidden flex flex-col gap-8 relative z-10">
          {/* PRICE */}
          <ul className="flex flex-col gap-4">
            {PRICE_LIST.map((item, i) => (
              <li
                key={i}
                className="
          flex items-center gap-3
          p-4 bg-white rounded-lg shadow-md
        "
              >
                {item.icon}
                <span className="text-sm font-medium">{item.title}</span>
              </li>
            ))}
          </ul>

          {/* СТРЕЛКА */}
          <div className="flex justify-center transform rotate-90">
            <div ref={arrowsRef} className="flex gap-1 md:gap-2">
              {[...Array(3)].map((_, i) => (
                <svg
                  key={i}
                  width="18"
                  height="18"
                  viewBox="0 0 28 28"
                  className="md:w-[28px] md:h-[28px]"
                >
                  <polygon
                    points="0,0 18,14 0,28 10,28 28,14 10,0"
                    fill="#1d1d1b"
                  />
                </svg>
              ))}
            </div>{" "}
          </div>

          {/* ADDITIONAL */}
          <ul className="flex flex-col gap-4">
            {ADDITIONAL_LIST.map((item, i) => (
              <li
                key={i}
                className="
          flex items-center gap-3
          p-4 bg-white rounded-lg shadow-md
        "
              >
                {item.icon}
                <span className="text-sm font-medium">{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TrackingDetails;
