import React from 'react';

export default function BackgroundVideo() {
  return (
    <div className="fixed inset-0 overflow-hidden bg-black" style={{ zIndex: -1 }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        /* LOGICAL FIX: Switched to a Wikimedia Commons Public Asset. 
           These servers do not block cross-origin requests or Vercel deployments. */
        className="absolute inset-0 w-full h-full object-cover opacity-40 brightness-[0.35]"
      >
        <source
          src="https://upload.wikimedia.org/wikipedia/commons/transcoded/1/1b/Dubai_Skyline_Drone_Shot.webm/Dubai_Skyline_Drone_Shot.webm.480p.vp9.webm"
          type="video/webm"
        />
        {/* Universal Fallback (W3Schools Test Asset) */}
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
    </div>
  );
}