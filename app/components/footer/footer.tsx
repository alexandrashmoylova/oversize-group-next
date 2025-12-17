"use client";
import React from "react";
import { FooterIcon, CallIcon, EmailIcon, TelegramIcon } from "./footerIcon";

export const Footer: React.FC = () => {
  return (
    <footer className="min-w-[320px]">
      {/* Верхняя часть */}
      <div className="pt-8 pb-10 lg:pt-12 lg:pb-16">
        <div
          className="
            flex flex-col items-center gap-10
            px-4
            md:px-14
            lg:flex-row lg:items-center lg:justify-between
            xl:px-28
          "
        >
          {/* Logo */}
          <a href="/" className="w-full flex justify-center lg:w-1/3">
            <div className="w-full max-w-[220px] md:max-w-[256px]">
              <FooterIcon />
            </div>
          </a>

          {/* Contacts */}
          <div className="w-full lg:w-1/3">
            <ul className="flex flex-col items-center gap-5">
              <li>
                <a href="tel:+79297133700" className="flex items-center gap-3">
                  <div className="w-5 h-5">
                    <CallIcon />
                  </div>
                  <span className="text-lg text-black font-medium">
                    +7 929 713 37 00
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:mailbox@oversize-group.ru?subject=Вопрос по перевозке"
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 flex items-center">
                    <EmailIcon />
                  </div>
                  <span className="text-lg text-black font-medium break-all text-center">
                    mailbox@oversize-group.ru
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/oversize_group?text=Здравствуйте"
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 flex items-center">
                    <TelegramIcon />
                  </div>
                  <span className="text-lg text-black font-medium break-all text-center">
                    Напишите нам в Telegram
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
            <p className="text-center text-sm md:text-base text-[#222221] leading-tight">
              Самарская область
              <br />
              г. Тольятти
            </p>
          </div>
        </div>
      </div>

      {/* Чёрная полоса */}
      <div className="w-full bg-black py-4">
        <p className="text-center text-xs md:text-sm text-white opacity-90">
          &copy; {new Date().getFullYear()} Oversize. Все права защищены.
        </p>
      </div>
    </footer>
  );
};
