import React from "react";
import TrucksIllustration from "@/app/components/animation/animation";
import ScrollCounters from "../scrollCounters/scrollCounters";
import ServiceCard from "../serviceCard/serviceCard";

export default function Description() {
  return (
    <>
      <section
        aria-label="Описание компании Oversize"
        className="relative p-[80px_40px] md:p-[100px_60px] flex flex-col gap-10 bg-linear-to-l from-transparent via-[#99915a]/20 to-[#99915a]/80 overflow-hidden"
      >
        {/* decorative accent */}
        <div className="absolute -right-24 -top-24 w-72 h-72 bg-[#FFD400]/20 rounded-full blur-3xl pointer-events-none" />

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
            left: "-8%",
            top: "40%",
            width: "28rem",
            height: "28rem",
            borderRadius: "9999px",
            filter: "blur(48px)",
            background:
              "radial-gradient(circle at 30% 30%, rgba(255,212,0,0.10), rgba(255,212,0,0.02) 40%, transparent 60%)",
          }}
        />

        <div className="w-full relative z-10 max-w-2xl text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1d1d1b] leading-tight">
            Oversize — перевозим крупногабарит быстро и безопасно
          </h2>
          <p className="mt-4 text-lg md:text-xl text-[#333] font-medium">
            Быстро. Надёжно. По всему миру.
          </p>
          <div className="mt-6">
            <a className="inline-block bg-[#FFD400] text-black font-semibold px-6 py-3 cursor-pointer rounded-md shadow-md">
              Узнать стоимость
            </a>
          </div>
        </div>
        {/* <TrucksIllustration /> */}

        {/* Фоновый иллюстративный элемент */}
        <div className="pointer-events-none absolute opacity-20 z-0 w-[400px] top-40 right-0 md:w-[600px] md:bottom-10 md:right-10">
          {" "}
          <TrucksIllustration />
        </div>
        {/* Наши услуги */}
        <div aria-label="Наши услуги" className="py-[60px] px-5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-[#1d1d1b] mb-6">
              Наши услуги
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ServiceCard
                title="Международные перевозки"
                description="Организация перевозок тяжеловесных и негабаритных грузов по всему миру с полным комплектом документов и сопровождения."
                icon={
                  <img
                    src="/assets/svg/truck.svg"
                    alt="truck icon"
                    style={{
                      width: "calc(var(--spacing) * 9)",
                      height: "calc(var(--spacing) * 9)",
                    }}
                  />
                }
              />

              <ServiceCard
                title="Подъемные работы"
                description="Предоставляем услуги крана и специальной техники для безопасной погрузки и выгрузки крупногабаритных изделий."
                icon={
                  <img
                    src="/assets/svg/shipment.svg"
                    alt="shipment icon"
                    className="w-6 h-6"
                  />
                }
              />

              <ServiceCard
                title="Логистика и сопровождение"
                description="Комплексное логистическое сопровождение, страхование груза и сопровождение на всех этапах доставки."
                icon={
                  <img
                    src="/assets/svg/buisness-case.svg"
                    alt="business case icon"
                    className="w-6 h-6"
                  />
                }
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
