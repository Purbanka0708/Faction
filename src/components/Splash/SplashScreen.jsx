import React, { useRef, useEffect } from "react";
import splashVideo from "../../assets/splash.mp4";

const SplashScreen = ({ onFinish }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2; // ✅ keep 2x speed
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.currentTime >= 12) {
      onFinish();
    }
  };

  return (
    <div
      className="
        fixed inset-0 z-[9999]
        bg-black md:bg-black
        flex items-center justify-center
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
          w-auto h-auto
          max-w-[90%] max-h-[70%]
          bg-[#FEFCED]

          md:w-full md:h-full
          md:max-w-none md:max-h-none
          md:object-cover
        "
      />
    </div>
  );
};

export default SplashScreen;
