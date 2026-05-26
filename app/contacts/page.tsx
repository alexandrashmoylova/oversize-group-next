"use client";
import React, { FormEvent, useState } from "react";
import { Header } from "@/app/components/header/header";
import { Footer } from "@/app/components/footer/footer";

export default function ContactsPage() {
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
                Контакты
              </h1>
              <p className="text-lg sm:text-xl text-[#d0c9b8] max-w-3xl leading-relaxed animate-fade-in-up">
                Свяжитесь с нами для консультации, расчета стоимости перевозки
                или любых других вопросов. Наша команда всегда готова помочь.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
              <div
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="text-3xl mb-3">📞</div>
                <h3 className="text-lg font-bold text-white mb-2">Телефон</h3>
                <p className="text-[#d0c9b8]">+7 (XXX) XXX-XX-XX</p>
              </div>
              <div
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors animate-fade-in"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="text-3xl mb-3">📧</div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Электронная почта
                </h3>
                <p className="text-[#d0c9b8]">info@oversize.ru</p>
              </div>
              <div
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors animate-fade-in"
                style={{ animationDelay: "0.6s" }}
              >
                <div className="text-3xl mb-3">📍</div>
                <h3 className="text-lg font-bold text-white mb-2">Адрес</h3>
                <p className="text-[#d0c9b8]">Россия, Москва</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="relative w-full py-24 bg-linear-to-b from-[#1d1d1b] via-[#f8f6f0] to-[#f8f6f0] overflow-hidden">
          {/* Decorative transition */}
          <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-[#1d1d1b] to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1b] mb-4 animate-fade-in-down">
                Свяжитесь с нами
              </h2>
              <div
                className="w-24 h-1 bg-linear-to-r from-transparent via-[#FFD400] to-transparent mx-auto mb-6 animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              />
              <p
                className="text-lg text-[#3b3b3a] max-w-2xl mx-auto animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Заполните форму ниже, и мы свяжемся с вами в течение 24 часов
              </p>
            </div>

            <ContactForm />
          </div>
        </section>

        {/* Features Section */}
        <section className="relative w-full py-20 bg-linear-to-r from-[#1d1d1b] to-[#2a2a27] overflow-hidden">
          {/* Decorative accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-bl from-[#FFD400]/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-tr from-[#FFD400]/5 to-transparent rounded-full blur-3xl" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center animate-fade-in-down">
              Как мы работаем
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Оценка груза",
                  description:
                    "Анализируем параметры груза и требования доставки",
                },
                {
                  step: "2",
                  title: "Расчет стоимости",
                  description: "Предоставляем справедливую цену за услуги",
                },
                {
                  step: "3",
                  title: "Согласование",
                  description: "Уточняем все детали и сроки доставки",
                },
                {
                  step: "4",
                  title: "Отправка",
                  description: "Осуществляем безопасную доставку груза",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 hover:border-[#FFD400]/50 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
                >
                  <div className="text-5xl font-bold text-[#FFD400] mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg text-white mb-2 group-hover:text-[#FFD400] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#9a9a96] text-sm group-hover:text-[#d0c9b8] transition-colors">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", phone: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow-lg p-8 md:p-12 max-w-2xl mx-auto animate-fade-in"
    >
      <div className="space-y-6">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-[#1d1d1b] mb-2"
          >
            Ваше имя *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Иван Петров"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD400] focus:border-transparent transition-all"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-[#1d1d1b] mb-2"
          >
            Номер телефона *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+7 (XXX) XXX-XX-XX"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD400] focus:border-transparent transition-all"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-[#1d1d1b] mb-2"
          >
            Электронная почта *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="example@mail.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD400] focus:border-transparent transition-all"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-[#1d1d1b] mb-2"
          >
            Сообщение *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Расскажите о вашем грузе и требованиях к доставке..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD400] focus:border-transparent transition-all resize-none"
          />
        </div>

        {/* Success Message */}
        {submitted && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
            ✓ Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в течение
            24 часов.
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#FFD400] hover:bg-[#edb200] disabled:bg-gray-400 text-[#1d1d1b] font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
        >
          {loading ? "Отправка..." : "Отправить сообщение"}
        </button>
      </div>
    </form>
  );
}
