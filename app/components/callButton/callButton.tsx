"use client";

import React from "react";

type CallButtonProps = {
  isGallery?: boolean;
};

const CallButton: React.FC<CallButtonProps> = ({ isGallery }) => {
  return (
    <a
      href="tel:+79297133700"
      className="inline-block w-50 text-center uppercase bg-[#FCEE21] text-black font-semibold px-4 py-2 hover:brightness-95 transition"
      aria-label="Позвонить"
      title="Позвонить"
    >
      {isGallery ? "Заказать" : "Позвонить"}
    </a>
  );
};

export default CallButton;
