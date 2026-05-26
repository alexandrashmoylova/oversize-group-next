"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
// use public image path directly for background scheme
const backgroundSchemePath = "/assets/img/background-scheme.png";

gsap.registerPlugin(ScrollTrigger);

const TrackingDetails: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  const WHY_US = [
    {
      icon: (
        <Image
          src="/assets/svg/truck.svg"
          alt="Собственный парк техники"
          width={60}
          height={60}
        />
      ),
      title: "Собственный парк техники",
      desc: "Современные тралы и опытная бригада для безопасной перевозки крупногабаритных грузов.",
    },
    {
      icon: (
        <Image
          src="/assets/svg/document.svg"
          alt="Гарантии и страхование"
          width={20}
          height={20}
        />
      ),
      title: "Гарантии и страхование",
      desc: "Полное страхование грузов и официальные договоры — минимизируем ваши риски.",
    },
    {
      icon: (
        <Image
          src="/assets/svg/manager.svg"
          alt="Персональный менеджер"
          width={30}
          height={30}
        />
      ),
      title: "Персональный менеджер",
      desc: "Куратор на связи 24/7: переговоры, документация и контроль на каждом этапе.",
    },
    {
      icon: (
        <Image
          src="/assets/svg/route.svg"
          alt="Оптимизация маршрута"
          width={25}
          height={25}
        />
      ),
      title: "Оптимизация маршрута",
      desc: "Опытные логисты подберут маршрут по критериям скорости и стоимости.",
    },
    {
      icon: (
        <Image
          src="/assets/svg/fast-clock.png"
          alt="Срочная доставка"
          width={30}
          height={30}
        />
      ),
      title: "Срочная доставка",
      desc: "Экспресс-решения для случаев, когда время — ключевой фактор.",
    },
  ];

  useEffect(() => {
    if (!titleRef.current || !itemsRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      if (itemsRef.current) {
        const elems = Array.from(itemsRef.current.children) as Element[];
        gsap.fromTo(
          elems,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: itemsRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="relative p-[48px_20px] md:p-[170px_100px] bg-linear-to-l from-transparent via-[#99915a]/12 to-[#99915a]/60 overflow-hidden"
      aria-label="Почему нас выбирают"
    >
      {/* subtle diagonal texture */}
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
          top: "35%",
          width: "24rem",
          height: "24rem",
          borderRadius: "9999px",
          filter: "blur(48px)",
          background:
            "radial-gradient(circle at 30% 30%, rgba(255,212,0,0.10), rgba(255,212,0,0.02) 40%, transparent 60%)",
        }}
      />

      <div className="absolute inset-0 pointer-events-none">
        <Image
          src={backgroundSchemePath}
          alt="Фоновая схема"
          fill
          priority
          className="object-cover opacity-8 md:opacity-12 translate-y-12 md:translate-y-0"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="mb-8 md:mb-12">
          <h2
            ref={titleRef}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1d1d1b]"
          >
            Почему нас выбирают
          </h2>
          <p className="mt-3 text-base font-medium text-[#3b3b3a] max-w-2xl">
            Практический опыт, прозрачные условия и ответственность на каждом
            этапе — кратко о том, что делает нас уверенным выбором.
          </p>
        </div>

        <div
          ref={itemsRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {WHY_US.map((it, idx) => (
            <article
              key={idx}
              className="flex flex-col gap-3 p-4 bg-white/95 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center shrink-0">
                  {it.icon}
                </div>
                <h3 className="text-base font-semibold">{it.title}</h3>
              </div>
              <p className="text-sm text-[#4b4b4a]">{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrackingDetails;
