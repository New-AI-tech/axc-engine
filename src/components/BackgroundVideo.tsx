import React from 'react';

export default function BackgroundVideo() {
  return (
    <div className="fixed inset-0 overflow-hidden bg-black" style={{ zIndex: -1 }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40 brightness-50"
      >
        {/* 1. Try local file first (If you uploaded it to public/) */}
        <source src="/bg-video.mp4" type="video/mp4" />

        {/* 2. Reliable CDN Fallback (Higher availability than Mixkit) */}
        <source
          src="https://cdn.pixabay.com/video/2023/10/20/185805-876380694_large.mp4"
          type="video/mp4"
        />
      </video>

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
    </div>
  );
}