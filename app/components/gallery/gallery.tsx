"use client";

import React from "react";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
type GalleryItem = {
  id: number;
  title: string;
  img: string;
  width?: number;
  height?: number;
};

const ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: "Доставка грузов из Китая",
    img: "/assets/img/white-barrel.jpg",
    width: 300,
    height: 200,
  },
  {
    id: 2,
    title: "Таможенное оформление грузов",
    img: "/assets/img/custom.jpg",
    width: 300,
    height: 200,
  },
  {
    id: 3,
    title: "Грузоподъемная техника",
    img: "/assets/img/weight-service@2x.jpg",
    width: 300,
    height: 200,
  },
  {
    id: 4,
    title: "Перевозка негабаритных тяжеловесных грузов",
    img: "/assets/img/big-tube.jpg",
    width: 300,
    height: 200,
  },
  {
    id: 5,
    title: "Такелажные работы",
    img: "/assets/img/rigging.jpg",
    width: 300,
    height: 200,
  },
  {
    id: 6,
    title: "Проектная логистика",
    img: "/assets/img/big-tube2.jpg",
    width: 300,
    height: 200,
  },
];

const Images = () => {
  return ITEMS.map((item) => (
    <div key={item.id} className="w-[300px]">
      <div className="relative">
        <Image
          src={item.img}
          width={item.width}
          alt={item.title}
          height={item.height}
          loading="lazy"
          className="object-cover w-100% h-[440px] pointer-events-none select-none"
        />
        {/* gradient mask over the top of the image */}
        <span
          aria-hidden="true"
          className="absolute top-[-1px] left-0 w-full h-[180px] z-[5] pointer-events-none bg-[linear-gradient(180deg,#ffffff_12.88%,rgba(255,255,255,0.0001)_100.1%)]"
        />
        <p className="absolute top-[10px] z-[6] left-1/2 -translate-x-1/2 max-w-[235px] text-center text-[#1d1d1b] uppercase text-md font-medium">
          {item.title}
        </p>
      </div>
    </div>
  ));
};

export const GalleryList: React.FC = () => {
  return (
    <div
      aria-label="Gallery"
      className="grid relative overflow-hidden pt-20 pb-20"
    >
      <div className="flex gap-4 animate-[marquee_20s_linear_infinite] will-change-transform">
        <div className="flex gap-4">
          <Images />
        </div>
        <div className="flex gap-4">
          <Images />
        </div>
      </div>
    </div>
  );
};
