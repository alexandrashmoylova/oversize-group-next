"use client";

import { useEffect, useRef, useState } from "react";

const counters = [
  { target: 5000, label: "перевозок осуществлено за годы работы" },
  { target: 12, label: "видов тралов для логистики" },
  { target: 12, label: "лет мы работаем для вас" },
];

export default function ScrollCountersМ2() {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  const [values, setValues] = useState(counters.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.4 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const duration = 2000;
    const fps = 16;
    let currentValues = [...values];
    const steps = counters.map((c) => Math.ceil(c.target / (duration / fps)));

    const interval = setInterval(() => {
      let done = true;
      currentValues = currentValues.map((val, i) => {
        if (val < counters[i].target) {
          done = false;
          return Math.min(val + steps[i], counters[i].target);
        }
        return val;
      });

      setValues([...currentValues]);
      if (done) clearInterval(interval);
    }, fps);

    return () => clearInterval(interval);
  }, [started]);

  return (
    <div
      ref={ref}
      className="absolute bottom-[50px] left-2 flex flex-col md:flex-row gap-6 max-w-4xl mx-auto p-6"
    >
      {counters.map((item, i) => (
        <div key={i} className="flex items-center justify-between p-6">
          <div>
            <div className="text-4xl font-bold text-black">{values[i]}</div>
            <p className="text-black font-medium underline mt-2">
              {item.label}
            </p>
          </div>

          {/* SVG стрелка сбоку */}
          <svg
            className="w-10 h-10 animate-bounce"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </div>
      ))}
    </div>
  );
}
