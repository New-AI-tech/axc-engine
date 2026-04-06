import React from 'react';

export default function BackgroundVideo() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Video Element */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute min-w-full min-h-full object-cover"
      >
        <source 
          src="https://assets.mixkit.co/videos/preview/mixkit-luxury-hotel-lobby-with-a-large-chandelier-42353-large.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-luxury-black/60 backdrop-blur-[2px]" />
      
      {/* Gradient Vignette for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/40 via-transparent to-luxury-black/80" />
    </div>
  );
}
