"use client";

import React from "react";

type CallButtonProps = {
  isGallery?: boolean;
};

const CallButton: React.FC<CallButtonProps> = ({ isGallery }) => {
  return (
    <a
      href="tel:+79297133700"
      className="inline-block btn-primary"
      aria-label="Позвонить"
      title="Позвонить"
    >
      {isGallery ? "Заказать" : "Позвонить"}
    </a>
  );
};

export default CallButton;
