import React from 'react';

export default function BackgroundVideo() {
  return (
    <div className="fixed inset-0 overflow-hidden bg-black" style={{ zIndex: -1 }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        /* LOGICAL ADJUSTMENT: Increased opacity to 80% and brightness to 80% 
           This brings the Museum of the Future into high-definition focus. */
        className="absolute inset-0 w-full h-full object-cover opacity-80 brightness-[0.8]"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Cinematic Gradient Overlay: Dark on top/bottom, Clear in the middle */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

      {/* Subtle Blur only on the edges to draw the eye to the MOTF */}
      <div className="absolute inset-0 backdrop-blur-[0.5px]" />
    </div>
  );
}