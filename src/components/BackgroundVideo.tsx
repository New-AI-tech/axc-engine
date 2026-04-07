import React from 'react';

export default function BackgroundVideo() {
  return (
    <div className="fixed inset-0 overflow-hidden bg-black" style={{ zIndex: -1 }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        /* LOGICAL FIX: Drone footage of Museum of the Future. 
           Using a production-grade CDN (Pexels) to ensure zero 403 errors. */
        className="absolute inset-0 w-full h-full object-cover opacity-50 brightness-[0.4]"
      >
        <source
          src="https://videos.pexels.com/video-files/8267498/8267498-uhd_2560_1440_25fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Cinematic Overlay - Standardizing the look */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
    </div>
  );
}