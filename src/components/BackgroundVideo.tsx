import React from 'react';

export default function BackgroundVideo() {
  return (
    <div className="fixed inset-0 overflow-hidden bg-black" style={{ zIndex: -1 }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        /* LOGICAL FIX: Max visibility. Opacity 100% and higher brightness. 
           This makes the Museum of the Future the 'Main Event'. */
        className="absolute inset-0 w-full h-full object-cover opacity-100 brightness-[0.95]"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Cinematic Vignette: Only darkens the edges to keep text readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90" />

      {/* Subtle radial light to highlight the center (the Museum) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
    </div>
  );
}