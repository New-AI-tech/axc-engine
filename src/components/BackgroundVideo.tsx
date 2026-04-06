import React from 'react';

export default function BackgroundVideo() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden bg-black">
      {/* Video Element */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute min-w-full min-h-full object-cover opacity-50 brightness-[0.4] grayscale-[20%]"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-top-view-of-a-luxury-hotel-pool-12564-large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Cinematic Overlay - Using standard black/60 for reliability */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

      {/* Gradient Vignette for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90" />
    </div>
  );
}