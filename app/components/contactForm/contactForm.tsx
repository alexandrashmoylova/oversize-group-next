"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    null | "idle" | "sending" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, phone, email, message }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Ошибка отправки формы");

      setStatus("success");
      setFullName("");
      setPhone("");
      setEmail("");
      setMessage("");
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Неизвестная ошибка");
    }
  }

  return (
    <div
      className="relative overflow-hidden flex items-center justify-center фоновое изображение для формы связаться с нами min-h-[800px]"
      style={{
        backgroundImage: "url('/assets/img/sepia-truck.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      <div className="relative p-6 w-full">
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white backdrop-blur-md p-6 rounded-xl shadow-lg"
          aria-label="Форма Связаться с нами"
        >
          <h3 className="text-2xl font-bold mb-4">Связаться с нами</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex flex-col text-sm">
              <span className="font-medium">ФИО</span>
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="mt-2 p-2 border rounded-md"
                placeholder="Иванов Иван"
              />
            </label>

            <label className="flex flex-col text-sm">
              <span className="font-medium">Телефон</span>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="mt-2 p-2 border rounded-md"
                placeholder="+7 (___) ___-__-__"
                type="tel"
              />
            </label>

            <label className="flex flex-col text-sm md:col-span-2">
              <span className="font-medium">Почта</span>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-2 p-2 border rounded-md"
                placeholder="you@domain.ru"
                type="email"
              />
            </label>

            <label className="flex flex-col text-sm md:col-span-2">
              <span className="font-medium">Сообщение</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="mt-2 p-2 border rounded-md min-h-[120px]"
                placeholder="Кратко опишите ваш запрос"
              />
            </label>
          </div>

          <div className="mt-4 flex items-center gap-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-[#FFD400] text-black font-semibold px-5 py-2 rounded-md shadow-sm disabled:opacity-60"
            >
              {status === "sending" ? "Отправка..." : "Отправить"}
            </button>

            {status === "success" && (
              <div className="text-green-700">
                Спасибо! Сообщение отправлено.
              </div>
            )}
            {status === "error" && (
              <div className="text-red-600">Ошибка: {error}</div>
            )}
          </div>

          <p className="mt-3 text-xs text-gray-600">
            Письмо будет отправлено на mailbox@oversize-group.ru
          </p>
        </form>
      </div>
    </div>
  );
}
