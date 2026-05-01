"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import CallButton from "../callButton/callButton";

const images = [
  {
    src: "/assets/img/slider-one.jpg",
    alt: "Изображение перевозки крупногабаритного груза",
    width: 302,
    height: 201,
  },
  {
    src: "/assets/img/slider-two.jpg",
    alt: "Изображение перевозки крупногабаритного груза",
    width: 302,
    height: 201,
  },
  {
    src: "/assets/img/slider-three.jpg",
    alt: "Изображение перевозки крупногабаритного груза",
    width: 302,
    height: 201,
  },
  {
    src: "/assets/img/slider-four.jpg",
    alt: "Изображение перевозки крупногабаритного груза",
    width: 302,
    height: 201,
  },
  {
    src: "/assets/img/long-tube.jpeg",
    alt: "Изображение перевозки крупногабаритного груза",
    width: 302,
    height: 201,
  },
  {
    src: "/assets/img/transformator.jpeg",
    alt: "Изображение перевозки крупногабаритного груза",
    width: 302,
    height: 201,
  },
  {
    src: "/assets/img/transformator-2.jpeg",
    alt: "Изображение перевозки крупногабаритного груза",
    width: 302,
    height: 201,
  },
  {
    src: "/assets/img/barrel-green.jpeg",
    alt: "Изображение перевозки крупногабаритного груза",
    width: 302,
    height: 201,
  },
  {
    src: "/assets/img/assets-barrel.jpeg",
    alt: "Изображение перевозки крупногабаритного груза",
    width: 302,
    height: 201,
  },
];

const SliderGallery: React.FC = () => {
  return (
    <section className="relative p-[40px_16px] md:p-[60px_32px] bg-linear-to-l from-transparent via-[#99915a]/20 to-[#99915a]/80 overflow-hidden md:min-h-[520px]">
      {/* subtle diagonal texture (repeating thin stripes) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 5,
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 12px)",
        }}
      />

      {/* soft radial yellow glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          zIndex: 4,
          left: "-6%",
          top: "30%",
          width: "24rem",
          height: "24rem",
          borderRadius: "9999px",
          filter: "blur(48px)",
          background:
            "radial-gradient(circle at 30% 30%, rgba(255,212,0,0.10), rgba(255,212,0,0.02) 40%, transparent 60%)",
        }}
      />
      {/* Заголовок */}
      <h2
        className="
          text-xl sm:text-2xl lg:text-3xl
          font-bold text-start mb-6 sm:mb-8
          px-4 max-w-[1200px] mx-auto
        "
      >
        Фотогалерея перевозок
      </h2>

      <div className="relative max-w-[1200px] mx-auto px-2 sm:px-3">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          slidesPerView="auto"
          centeredSlides
          spaceBetween={16}
          loop
        >
          {images.map((img, index) => (
            <SwiperSlide
              key={index}
              className="
                w-[90%]!
                sm:w-[420px]!
                lg:w-[500px]!
              "
            >
              <div className="relative w-full aspect-3/2 shadow-md">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 90vw,
                         (max-width: 1024px) 420px,
                         500px"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* LEFT */}
        <button
          className="
            custom-prev absolute left-2 sm:left-4
            top-1/2 -translate-y-1/2
            z-20 bg-black/50 hover:bg-black/70 transition
            rounded-full w-8 h-8 sm:w-9 sm:h-9
            flex items-center justify-center
          "
          aria-label="Назад"
        >
          <svg
            fill="none"
            stroke="white"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-4 h-4 sm:w-5 sm:h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* RIGHT */}
        <button
          className="
            custom-next absolute right-2 sm:right-4
            top-1/2 -translate-y-1/2
            z-20 bg-black/50 hover:bg-black/70 transition
            rounded-full w-8 h-8 sm:w-9 sm:h-9
            flex items-center justify-center
          "
          aria-label="Вперёд"
        >
          <svg
            fill="none"
            stroke="white"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-4 h-4 sm:w-5 sm:h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <div className="pt-6 flex justify-center">
        <CallButton isGallery />
      </div>
    </section>
  );
};

export default SliderGallery;
