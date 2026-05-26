import React from "react";
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import AvtoparkGallery from "../components/avtoparkGallery/avtoparkGallery";

const AvtoparkPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="w-full">
        {/* Hero Section with Background */}
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
                Наш Автопарк
              </h1>
              <p className="text-lg sm:text-xl text-[#d0c9b8] max-w-3xl leading-relaxed animate-fade-in-up">
                Современный парк специализированной техники для безопасной
                перевозки крупногабаритных и тяжелых грузов. Каждый транспорт
                регулярно проходит техническое обслуживание и соответствует всем
                международным стандартам безопасности.
              </p>
            </div>

            {/* Stats badges */}
            <div className="grid grid-cols-3 gap-4 mb-12 max-w-2xl">
              <div
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="text-2xl font-bold text-[#FFD400]">50+</div>
                <div className="text-sm text-[#9a9a96]">Единиц техники</div>
              </div>
              <div
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors animate-fade-in"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="text-2xl font-bold text-[#FFD400]">24/7</div>
                <div className="text-sm text-[#9a9a96]">Доступность</div>
              </div>
              <div
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors animate-fade-in"
                style={{ animationDelay: "0.6s" }}
              >
                <div className="text-2xl font-bold text-[#FFD400]">100%</div>
                <div className="text-sm text-[#9a9a96]">Надежность</div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="relative w-full py-24 bg-linear-to-b from-[#1d1d1b] via-[#f8f6f0] to-[#f8f6f0] overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-[#1d1d1b] to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#ffffff] mb-4 animate-fade-in-down">
                Схемы и характеристики
              </h2>
              <div
                className="w-24 h-1 bg-linear-to-r from-transparent via-[#FFD400] to-transparent mx-auto mb-6 animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              />
              <p
                className="text-lg text-[#d0c9b8] max-w-2xl mx-auto animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Детальное описание каждой единицы техники нашего парка с
                техническими характеристиками и возможностями
              </p>
            </div>

            <AvtoparkGallery />
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative w-full py-20 bg-linear-to-r from-[#1d1d1b] to-[#2a2a27] overflow-hidden">
          {/* Decorative accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-bl from-[#FFD400]/5 to-transparent rounded-full blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in-down">
              Нужен специальный транспорт?
            </h3>
            <p className="text-lg text-[#d0c9b8] mb-8 animate-fade-in-up">
              Свяжитесь с нашей командой для консультации и расчета стоимости
              доставки
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-linear-to-r from-[#FFD400] to-[#ffeb66] text-[#1d1d1b] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#FFD400]/30 transition-all duration-300 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Получить расчет
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AvtoparkPage;
