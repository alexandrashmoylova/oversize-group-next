"use client";

import React, { useEffect, useRef, useState } from "react";
import Logo from "./logo";

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // ESC close
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close on outside click
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!open) return;
      const target = e.target as Node;
      if (menuRef.current && !menuRef.current.contains(target)) {
        setOpen(false);
      }
    }
    window.addEventListener("mousedown", onClick);
    return () => window.removeEventListener("mousedown", onClick);
  }, [open]);

  // Sticky + transparency on scroll
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Disable scroll when menu open on mobile
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const menuItems = [
    { label: "Автопарк", href: "/avtopark" },
    { label: "Галерея", href: "/gallery" },
    { label: "Услуги", href: "/services" },
    { label: "Контакты", href: "/contacts" },
  ];

  return (
    <>
      <header
        className={`
          sticky top-0 z-50
          h-16 flex items-center justify-between px-4 md:px-10
          backdrop-blur-md transition-colors duration-300
          ${scrolled ? "bg-white/80 shadow-sm" : "bg-white"}
        `}
      >
        <div className="w-[294px] h-6 flex items-center">
          <Logo />
        </div>

        {/* Десктопное меню */}
        <nav className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                relative text-gray-900 font-medium text-lg
                before:absolute before:left-0 before:-bottom-1 before:w-0 before:h-0.5
                before:bg-yellow-400 before:transition-all before:duration-300
                hover:before:w-full focus-visible:before:w-full
                outline-none
              "
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Burger button только для мобильных */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="header-menu"
          onClick={() => setOpen((v) => !v)}
          className="
            md:hidden
            w-11 h-11 rounded-lg border border-[#e6e6e6]
            flex flex-col justify-center items-center
            bg-white cursor-pointer
            focus:outline-none focus:ring-2 focus:ring-blue-500/20
            relative
          "
        >
          <span
            className={`
              block w-4 h-0.5 bg-[#111827] rounded transition-transform duration-300 ease-in-out
              ${open ? "rotate-45 translate-y-1.5" : ""}
            `}
          />
          <span
            className={`
              block w-4 h-0.5 bg-[#111827] rounded my-1 transition-opacity duration-300 ease-in-out
              ${open ? "opacity-0" : "opacity-100"}
            `}
          />
          <span
            className={`
              block w-4 h-0.5 bg-[#111827] rounded transition-transform duration-300 ease-in-out
              ${open ? "-rotate-45 -translate-y-1.5" : ""}
            `}
          />
        </button>
      </header>

      {/* Мобильное меню — slide-in справа */}
      <div
        className={`
          fixed inset-0 z-100
          bg-black/40 backdrop-blur-sm
          transition-opacity duration-300
          ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      >
        <nav
          ref={menuRef}
          id="header-menu"
          className={`
            fixed top-0 right-0 h-full w-64
            bg-white shadow-xl border-l border-gray-200
            transform transition-transform duration-300
            ${open ? "translate-x-0" : "translate-x-full"}
            flex flex-col p-6 pt-20
          `}
        >
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="
                relative mb-6 text-gray-900 font-medium text-lg
                before:absolute before:left-0 before:-bottom-1 before:w-0 before:h-0.5
                before:bg-yellow-400 before:transition-all before:duration-300
                hover:before:w-full focus-visible:before:w-full
                outline-none
              "
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};
