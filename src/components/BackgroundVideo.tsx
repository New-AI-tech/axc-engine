import React from 'react';

export default function BackgroundVideo() {
  return (
    <div className="fixed inset-0 overflow-hidden bg-black" style={{ zIndex: -1 }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        /* LOGICAL FIX: Added a reliable, direct MP4 link from a cloud-friendly CDN */
        className="absolute inset-0 w-full h-full object-cover opacity-50 brightness-[0.4]"
      >
        <source
          src="https://joy1.videvo.net/videvo_files/video/free/2019-11/190416_01_Drone_1_04.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
    </div>
  );
}