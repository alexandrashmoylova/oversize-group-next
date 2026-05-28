"use client";

import React, { useState } from "react";
import { Header } from "@/app/components/header/header";
import { Footer } from "@/app/components/footer/footer";
import ContactModal from "@/app/components/contactModal/contactModal";
import Image from "next/image";

type ServiceType = {
  id: number;
  title: string;
  description: string;
  features: string[];
  image: string;
  alt: string;
};

const services: ServiceType[] = [
  {
    id: 1,
    title: "Перевозка бочек",
    description:
      "Надежная и безопасная перевозка различных видов бочек и контейнеров. Наш автопарк оборудован специальными креплениями для фиксации груза.",
    features: [
      "Различные объемы бочек",
      "Специальное крепление",
      "Защита от протечек",
      "Быстрая доставка",
    ],
    image: "/assets/img/barrel-green.jpeg",
    alt: "Перевозка бочек",
  },
  {
    id: 2,
    title: "Перевозка труб",
    description:
      "Специализированная перевозка длинномерных труб больших диаметров. Используем современное оборудование для безопасной фиксации груза.",
    features: [
      "Трубы любого диаметра",
      "Длинномер до 13.6м",
      "Профессиональное крепление",
      "Маршруты без ограничений",
    ],
    image: "/assets/img/big-tube.jpg",
    alt: "Перевозка труб",
  },
  {
    id: 3,
    title: "Перевозка оборудования",
    description:
      "Транспортировка тяжелого промышленного оборудования и трансформаторов. Гарантируем сохранность и целостность груза при доставке.",
    features: [
      "До 25 тонн",
      "Страховка груза",
      "Аккуратная доставка",
      "Профессиональная команда",
    ],
    image: "/assets/img/transformator.jpeg",
    alt: "Перевозка оборудования",
  },
  {
    id: 4,
    title: "Такелажные работы",
    description:
      "Полный спектр такелажных услуг включая погрузку, разгрузку и установку оборудования. Высокопрофессиональная команда с опытом.",
    features: [
      "Погрузка/разгрузка",
      "Установка оборудования",
      "Опасные грузы",
      "Техническое сопровождение",
    ],
    image: "/assets/img/rigging.jpg",
    alt: "Такелажные работы",
  },
  {
    id: 5,
    title: "Взвешивание грузов",
    description:
      "Сертифицированное взвешивание грузов на современных электронных весах. Документальное оформление всех взвешиваний.",
    features: [
      "Точное взвешивание",
      "Документы приложены",
      "Сертифицированные весы",
      "Быстрое обслуживание",
    ],
    image: "/assets/img/weight-service.jpg",
    alt: "Взвешивание грузов",
  },
  {
    id: 6,
    title: "Индивидуальные решения",
    description:
      "Для особо сложных грузов мы разрабатываем индивидуальные решения. Наша команда подберет оптимальный маршрут и способ перевозки.",
    features: [
      "Консультация специалиста",
      "Расчет стоимости",
      "Гибкий график",
      "Гарантия результата",
    ],
    image: "/assets/img/custom.jpg",
    alt: "Индивидуальные решения",
  },
];

export default function ServicesPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <Header />
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
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
                Наши Услуги
              </h1>
              <p className="text-lg sm:text-xl text-[#d0c9b8] max-w-3xl leading-relaxed animate-fade-in-up">
                Полный спектр логистических услуг по перевозке и транспортировке
                грузов. Каждая услуга выполняется профессиональной командой с
                использованием современного оборудования и соответствует всем
                международным стандартам безопасности.
              </p>
            </div>

            {/* Stats badges */}
            <div className="grid grid-cols-3 gap-4 mb-12 max-w-2xl">
              <div
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="text-2xl font-bold text-[#FFD400]">6+</div>
                <div className="text-sm text-[#9a9a96]">Типов услуг</div>
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
                <div className="text-sm text-[#9a9a96]">Гарантия</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="relative w-full py-24 bg-linear-to-b from-[#1d1d1b] via-[#f8f6f0] to-[#f8f6f0] overflow-hidden">
          {/* Decorative transition */}
          <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-[#1d1d1b] to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-down">
                Полный спектр услуг
              </h2>
              <div
                className="w-24 h-1 bg-linear-to-r from-transparent via-[#FFD400] to-transparent mx-auto mb-6 animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              />
              <p
                className="text-lg text-[#d0c9b8] max-w-2xl mx-auto animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Специализированные решения для любых типов грузов и задач
                логистики
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="relative w-full py-20 bg-linear-to-r from-[#1d1d1b] to-[#2a2a27] overflow-hidden">
          {/* Decorative accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-bl from-[#FFD400]/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-tr from-[#FFD400]/5 to-transparent rounded-full blur-3xl" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center animate-fade-in-down">
              Почему выбирают нас
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Опыт",
                  description: "Более 10 лет на рынке логистики и перевозок",
                  icon: "🏆",
                },
                {
                  title: "Надежность",
                  description:
                    "Гарантируем сохранность и своевременную доставку",
                  icon: "✓",
                },
                {
                  title: "Профессионализм",
                  description: "Квалифицированная команда специалистов",
                  icon: "👥",
                },
                {
                  title: "Гибкость",
                  description: "Индивидуальный подход к каждому клиенту",
                  icon: "⚙️",
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 hover:border-[#FFD400]/50 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-lg text-white mb-2 group-hover:text-[#FFD400] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-[#9a9a96] text-sm group-hover:text-[#d0c9b8] transition-colors">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative w-full py-20 bg-linear-to-r from-[#1d1d1b] to-[#2a2a27] overflow-hidden border-t border-white/10">
          {/* Decorative accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-bl from-[#FFD400]/5 to-transparent rounded-full blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in-down">
              Готовы начать сотрудничество?
            </h3>
            <p className="text-lg text-[#d0c9b8] mb-8 animate-fade-in-up">
              Свяжитесь с нашей командой для консультации и расчета стоимости
              услуг
            </p>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="inline-block px-8 py-4 bg-linear-to-r from-[#FFD400] to-[#ffeb66] text-[#1d1d1b] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#FFD400]/30 transition-all duration-300 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Получить консультацию
            </button>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

function ServiceCard({ service }: { service: ServiceType }) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full hover:border-[#FFD400]/50 border border-transparent animate-fade-in">
      {/* Image container */}
      <div className="relative h-48 w-full bg-gray-200 overflow-hidden">
        <Image
          src={service.image}
          alt={service.alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#1d1d1b] mb-3 group-hover:text-[#FFD400] transition-colors">
          {service.title}
        </h3>
        <p className="text-[#3b3b3a] text-sm mb-4 line-clamp-2">
          {service.description}
        </p>

        {/* Features */}
        <div className="space-y-2 mb-6">
          {service.features.map((feature: string, idx: number) => (
            <div key={idx} className="flex items-start gap-2">
              <span className="inline-block w-1.5 h-1.5 bg-[#FFD400] rounded-full mt-1.5 shrink-0" />
              <span className="text-sm text-[#3b3b3a]">{feature}</span>
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="w-full btn-primary">Узнать подробнее</button>
      </div>
    </div>
  );
}
