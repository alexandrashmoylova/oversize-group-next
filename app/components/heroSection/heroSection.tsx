"use client";

import React from "react";
import { VideoPlayer } from "../videoPlayer/videoPlayer";
import ScrollCountersМ2 from "../scrollCountersV2/scrollCountersV2";

export const HeroSection: React.FC = () => {
  /* video container: position relative so h1 can be absolutely placed over the video */

  return (
    <div className="relative">
      <VideoPlayer />

      {/* gradient overlay / mask above the video but below text (left-to-right yellow) */}
      <div className="absolute inset-0 pointer-events-none z-10 bg-linear-to-l from-transparent via-[#99915a]/30 to-[#99915a]/80" />

      <h1 className="absolute top-[60px] left-[30px] uppercase text-[#1d1d1b] text-lg md:text-6xl font-bold z-20">
        Международная транспортная логистическая компания
      </h1>

      <div className="relative z-20">
        <ScrollCountersМ2 />
      </div>
      {/* <p className="absolute bottom-[150px] left-1/2 -translate-x-1/2 w-90 uppercase text-center text-white text-md font-bold">
        Узнайте стоимость перевозки вашего груза
      </p>
      <div className="absolute bottom-[100px] left-1/2 -translate-x-1/2">
        <CallButton />
      </div> */}
    </div>
  );
};
