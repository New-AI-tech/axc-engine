import React from 'react';

export default function BackgroundVideo() {
  return (
    <div className="fixed inset-0 overflow-hidden bg-black" style={{ zIndex: -1 }}>
      <video
        key="motf-video"
        autoPlay
        muted
        loop
        playsInline
        /* LOGICAL FIX: Adding a poster and absolute positioning to prevent 'Black Screen' lag */
        poster="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Museum_of_the_Future_Dubai_Drone_Shot.mp4/640px-Museum_of_the_Future_Dubai_Drone_Shot.mp4.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-100 brightness-[0.7] transition-opacity duration-1000"
      >
        <source
          src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Museum_of_the_Future_Dubai_Drone_Shot.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
    </div>
  );
}