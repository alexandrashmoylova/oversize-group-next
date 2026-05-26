"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./avtoparkGallery.module.scss";

gsap.registerPlugin(ScrollTrigger);

interface TruckScheme {
  id: number;
  image: string;
  title: string;
  description: string;
  specs: string[];
}

const truckSchemes: TruckScheme[] = [
  {
    id: 1,
    image: "/assets/img/truck-scheme1.jpg",
    title: "Трал средний",
    description:
      "Предназначен для транспортировки грузов весом до 30 тонн на расстояния до 500 км.",
    specs: ["Грузоподъемность: 30т", "Длина платформы: 12м", "Ширина: 2.5м"],
  },
  {
    id: 2,
    image: "/assets/img/truck-scheme2.jpg",
    title: "Трал тяжелый",
    description:
      "Мощный трал для перевозки особо тяжелых и крупногабаритных грузов до 60 тонн.",
    specs: ["Грузоподъемность: 60т", "Длина платформы: 14м", "Ширина: 3м"],
  },
  {
    id: 3,
    image: "/assets/img/truck-scheme3.jpg",
    title: "Низкорамный трал",
    description:
      "Специализированный транспорт с низкой посадкой для максимально нестандартных грузов.",
    specs: ["Грузоподъемность: 50т", "Длина платформы: 13м", "Высота: 0.8м"],
  },
  {
    id: 4,
    image: "/assets/img/truck-scheme4.jpg",
    title: "Балковоз",
    description:
      "Идеален для перевозки длинномерных грузов: балок, труб, рельсов и прочего.",
    specs: [
      "Грузоподъемность: 25т",
      "Длина платформы: 16м",
      "Опоры: автоматические",
    ],
  },
  {
    id: 5,
    image: "/assets/img/truck-scheme5.jpg",
    title: "Тентовый трал",
    description:
      "Оборудован тентом для защиты груза от осадков и пыли при длительной транспортировке.",
    specs: [
      "Грузоподъемность: 20т",
      "Тент: водонепроницаемый",
      "Вентиляция: есть",
    ],
  },
];

const AvtoparkGallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [selectedTruck, setSelectedTruck] = useState<TruckScheme | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, idx) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: idx * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        );

        // Hover animation setup
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -10,
            boxShadow: "0 20px 40px rgba(255, 212, 0, 0.15)",
            duration: 0.3,
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
            duration: 0.3,
          });
        });
      });
    });

    return () => ctx.revert();
  }, []);

  // Modal animation effect
  useEffect(() => {
    if (!modalRef.current) return;

    if (selectedTruck) {
      // Disable body scroll
      document.body.style.overflow = "hidden";

      // Animate modal in
      gsap.fromTo(
        modalRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" },
      );

      const content = modalRef.current.querySelector(`.${styles.modalContent}`);
      if (content) {
        gsap.fromTo(
          content,
          { opacity: 0, scale: 0.9, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "back.out" },
        );
      }
    } else {
      // Re-enable body scroll when modal closes
      document.body.style.overflow = "auto";
    }

    return () => {
      // Cleanup: ensure scroll is re-enabled when component unmounts
      document.body.style.overflow = "auto";
    };
  }, [selectedTruck]);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedTruck(null);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const closeModal = () => setSelectedTruck(null);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {truckSchemes.map((truck, idx) => (
        <div
          key={truck.id}
          ref={(el) => {
            if (el) cardsRef.current[idx] = el;
          }}
          className={`${styles.card} bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-102`}
        >
          {/* Image Container */}
          <div
            className={`${styles.imageContainer} relative h-56 md:h-64 overflow-hidden bg-[#f0ede8]`}
          >
            <Image
              src={truck.image}
              alt={truck.title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
            />
            {/* Badge */}
            <div className="absolute top-4 right-4 bg-[#FFD400] text-[#1d1d1b] px-4 py-2 rounded-full text-sm font-semibold">
              Схема #{truck.id}
            </div>
          </div>

          {/* Content Container */}
          <div className={`${styles.content} p-6`}>
            <h3 className="text-2xl font-bold text-[#1d1d1b] mb-3">
              {truck.title}
            </h3>
            <p className="text-sm text-[#666] mb-4 leading-relaxed">
              {truck.description}
            </p>

            {/* Specifications */}
            <div
              className={`${styles.specs} space-y-2 mb-5 pb-5 border-b border-[#e8e3da]`}
            >
              {truck.specs.map((spec, specIdx) => (
                <div key={specIdx} className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-1.5 bg-[#FFD400] rounded-full shrink-0" />
                  <span className="text-sm text-[#555]">{spec}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              className={styles.button}
              onClick={() => setSelectedTruck(truck)}
            >
              Подробнее
            </button>
          </div>
        </div>
      ))}

      {/* Modal Overlay */}
      {selectedTruck && (
        <div
          ref={modalRef}
          className={styles.modalOverlay}
          onClick={closeModal}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className={styles.closeButton}
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Modal Content */}
            <div className={styles.modalInner}>
              {/* Image Section - Full Screen */}
              <div className={styles.modalImageSectionFullscreen}>
                <Image
                  src={selectedTruck.image}
                  alt={selectedTruck.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AvtoparkGallery;
