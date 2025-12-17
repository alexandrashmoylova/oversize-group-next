import React from "react";
import TrucksIllustration from "@/app/components/animation/animation";
import ScrollCounters from "../scrollCounters/scrollCounters";

export default function Description() {
  return (
    <section
      aria-label="Описание компании Oversize"
      className="relative p-[80px_40px] flex flex-col gap-[50px] bg-[linear-gradient(90deg,rgb(255,237,0)_0%,rgb(255,255,255)_55%)]"
    >
      <div className="w-full relative z-10 max-w-4xl mx-auto text-center md:text-left">
        <p className="text-[#1d1d1b] text-sm md:text-lg font-medium leading-6 md:leading-8">
          <span className="uppercase text-[#1d1d1b] text-xl md:text-2xl leading-7 md:leading-8 font-bold">
            Oversize -
          </span>{" "}
          это молодая транспортная компания, специализирующаяся на перевозке
          негабаритных грузов. Собственный парк техники и накопленный опыт,
          позволяет компании эффективно решать поставленные задачи, существенно
          экономить время и деньги своих клиентов.
        </p>
      </div>
      <ScrollCounters />
      {/* <TrucksIllustration /> */}

      {/* Фоновый иллюстративный элемент */}
      <div className="pointer-events-none absolute opacity-20 z-0 w-[400px] bottom-40 right-0 md:w-[600px] md:bottom-10 md:right-10">
        {" "}
        <TrucksIllustration />
      </div>
    </section>
  );
}
