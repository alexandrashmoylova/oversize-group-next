import React, { JSX } from "react";

export const VideoPlayer: React.FC = () => {
  return (
    <video
      src="/assets/video/truck.mp4"
      preload="auto"
      autoPlay
      playsInline
      poster="/assets/img/truck-poster.jpg"
      muted
      loop
      className="w-full h-screen object-cover"
      style={{ objectPosition: "35% 50%" }}
    />
  );
};
