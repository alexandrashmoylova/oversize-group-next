"use client";

import React, { useState } from "react";
import { Header } from "@/app/components/header/header";
import { Footer } from "@/app/components/footer/footer";
import Image from "next/image";

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  title: string;
  category: string;
};

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/assets/img/gallery/transport-01.jpg",
    alt: "Перевозка грузов",
    title: "Перевозка тяжелого оборудования",
    category: "Перевозки",
  },
  {
    id: 2,
    src: "/assets/img/gallery/transport-02.jpg",
    alt: "Грузовой транспорт",
    title: "Специализированный транспорт",
    category: "Транспорт",
  },
  {
    id: 3,
    src: "/assets/img/gallery/transport-03.jpg",
    alt: "Погрузочные работы",
    title: "Профессиональная погрузка",
    category: "Услуги",
  },
  {
    id: 4,
    src: "/assets/img/gallery/transport-04.jpg",
    alt: "Перевозка контейнеров",
    title: "Контейнерная логистика",
    category: "Логистика",
  },
  {
    id: 5,
    src: "/assets/img/gallery/transport-05.jpg",
    alt: "Доставка грузов",
    title: "Доставка негабаритных грузов",
    category: "Перевозки",
  },
  {
    id: 6,
    src: "/assets/img/gallery/cargo-barrel-01.jpg",
    alt: "Перевозка бочек",
    title: "Безопасная перевозка бочек",
    category: "Грузы",
  },
  {
    id: 7,
    src: "/assets/img/gallery/cargo-barrel-02.jpg",
    alt: "Бочки в пути",
    title: "Крепление и транспортировка",
    category: "Грузы",
  },
  {
    id: 8,
    src: "/assets/img/gallery/cargo-tube-01.jpg",
    alt: "Перевозка труб",
    title: "Длинномер с трубами",
    category: "Грузы",
  },
  {
    id: 9,
    src: "/assets/img/gallery/cargo-tube-02.jpg",
    alt: "Трубы на транспорте",
    title: "Профессиональное крепление труб",
    category: "Грузы",
  },
  {
    id: 10,
    src: "/assets/img/gallery/cargo-equipment-01.jpg",
    alt: "Промышленное оборудование",
    title: "Перевозка оборудования",
    category: "Оборудование",
  },
  {
    id: 11,
    src: "/assets/img/gallery/transport-heic-01.jpg",
    alt: "Транспортная логистика",
    title: "Логистическая операция",
    category: "Логистика",
  },
  {
    id: 12,
    src: "/assets/img/gallery/transport-heic-02.jpg",
    alt: "Грузовая операция",
    title: "Комплексная перевозка",
    category: "Перевозки",
  },
];

const categories = [
  "Все",
  ...Array.from(new Set(galleryImages.map((img) => img.category))),
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages =
    selectedCategory === "Все"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <>
      <Header />
      <main className="w-full">
        {/* Hero Section */}
        <section className="relative w-full pt-32 pb-24 overflow-hidden bg-linear-to-b from-[#1d1d1b] via-[#2a2a27] to-[#1d1d1b]">
          {/* Diagonal stripes overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-5"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, rgba(255,255,255,0.1) 0 1px, transparent 1px 12px)",
            }}
          />

          {/* Content */}
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight animate-fade-in-down">
                Галерея
              </h1>
              <p className="text-lg sm:text-xl text-[#d0c9b8] max-w-3xl leading-relaxed animate-fade-in-up">
                Посмотрите фотографии наших перевозок и узнайте, как мы
                работаем. Каждое фото — это результат профессионального подхода
                и ответственности перед нашими клиентами.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="relative w-full py-20 bg-[#f5f5f5]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3 justify-center mb-16 animate-fade-in">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-[#FFD400] text-[#1d1d1b]"
                      : "bg-white text-[#1d1d1b] border-2 border-[#FFD400] hover:bg-[#FFD400]/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, idx) => (
                <div
                  key={image.id}
                  className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                  onClick={() => setSelectedImage(image)}
                >
                  {/* Image Container */}
                  <div className="relative h-64 w-full overflow-hidden bg-gray-200">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg
                          className="w-16 h-16 text-[#FFD400]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Title and Category */}
                  <div className="p-4 bg-white">
                    <h3 className="font-semibold text-[#1d1d1b] mb-2">
                      {image.title}
                    </h3>
                    <p className="text-sm text-[#9a9a96]">{image.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-[#FFD400] hover:bg-[#edb200] rounded-full p-2 transition-colors"
                aria-label="Закрыть"
              >
                <svg
                  className="w-6 h-6 text-[#1d1d1b]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Image */}
              <div className="relative w-full h-96">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <div className="p-6 bg-white">
                <h2 className="text-2xl font-bold text-[#1d1d1b] mb-2">
                  {selectedImage.title}
                </h2>
                <p className="text-[#9a9a96] mb-4">{selectedImage.alt}</p>
                <span className="inline-block px-4 py-2 bg-[#FFD400]/20 text-[#1d1d1b] rounded-lg font-semibold">
                  {selectedImage.category}
                </span>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
