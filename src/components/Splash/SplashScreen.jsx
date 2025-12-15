import React, { useRef, useEffect } from "react";
import splashVideo from "../../assets/splash.mp4";

const SplashScreen = ({ onFinish }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Play at 2x speed
    video.playbackRate = 2;

    // Lock scroll
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleTimeUpdate = () => {
    if (videoRef.current?.currentTime >= 12) {
      onFinish();
    }
  };

  return (
    <div
      className="
        fixed inset-0 z-[9999]
        flex items-center justify-center
        bg-[#FEFCED]
      "
    >
      <video
        ref={videoRef}
        src={splashVideo}
        autoPlay
        muted
        playsInline
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        className="
          max-w-[90%]
          max-h-[70%]
          w-auto
          h-auto
        "
      />
    </div>
  );
};

export default SplashScreen;
