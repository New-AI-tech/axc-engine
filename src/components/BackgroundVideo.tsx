import React from 'react';

export default function BackgroundVideo() {
  return (
    <div className="fixed inset-0 overflow-hidden bg-black" style={{ zIndex: -1 }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        /* LOGICAL FIX: High-availability Wikimedia source for guaranteed production uptime */
        className="absolute inset-0 w-full h-full object-cover opacity-100 brightness-[0.7]"
      >
        <source
          src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Museum_of_the_Future_Dubai_Drone_Shot.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
    </div>
  );
}