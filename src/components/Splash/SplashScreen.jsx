import React, { useRef } from "react";
import splashVideo from "../../assets/splash.mp4";

const SplashScreen = ({ onFinish }) => {
  const videoRef = useRef(null);

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.currentTime >= 12) {
      onFinish();
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black">
      <video
        ref={videoRef}
        src={splashVideo}
        autoPlay
        muted
        playsInline
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default SplashScreen;
