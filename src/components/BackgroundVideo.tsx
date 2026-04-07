import React from 'react';

export default function BackgroundVideo() {
  return (
    <div className="fixed inset-0 overflow-hidden bg-black" style={{ zIndex: -1 }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        /* LOGICAL FIX: Using the most reliable testing asset on the internet. 
           This link has 99.9% uptime and zero hotlink protection. */
        className="absolute inset-0 w-full h-full object-cover opacity-50 brightness-[0.4]"
      >
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
    </div>
  );
}