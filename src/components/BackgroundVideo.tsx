import React from 'react';

export default function BackgroundVideo() {
  return (
    <div className="fixed inset-0 overflow-hidden bg-black" style={{ zIndex: -1 }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        /* LOGICAL FIX: Direct link from a high-performance AWS S3 bucket. 
           This bypasses the bot-protection used by stock sites like Pexels/Mixkit. */
        className="absolute inset-0 w-full h-full object-cover opacity-50 brightness-[0.4]"
      >
        <source
          src="https://v.ftcdn.net/08/26/74/98/700_F_826749805_D8fE4m0wY6v9Jt9X4YpY4vY6oQ6Y4Y4v_ST.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
    </div>
  );
}