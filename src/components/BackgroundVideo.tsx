import React from 'react';

export default function BackgroundVideo() {
  return (
    <div className="fixed inset-0 overflow-hidden bg-black" style={{ zIndex: -1 }}>
      {/* The Video Element */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40 brightness-50"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-top-view-of-a-luxury-hotel-pool-12564-large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Cinematic Overlay - Darkens the video for text readability */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

      {/* Gradient Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
    </div>
  );
}