import React, { useRef, useEffect } from "react";
import splashVideo from "../../assets/splash.mp4";

const SplashScreen = ({ onFinish }) => {
  const videoRef = useRef(null);
  const skippedRef = useRef(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2; // keep 2x speed
    }

    document.body.style.overflow = "hidden";

    const handleSkip = () => {
      if (!skippedRef.current) {
        skippedRef.current = true;
        onFinish();
      }
    };

    // Keyboard skip (desktop)
    window.addEventListener("keydown", handleSkip);

    // Cleanup
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleSkip);
    };
  }, [onFinish]);

  const handleTimeUpdate = () => {
    if (
      videoRef.current &&
      videoRef.current.currentTime >= 12 &&
      !skippedRef.current
    ) {
      skippedRef.current = true;
      onFinish();
    }
  };

  return (
    <div
      className="
        fixed inset-0 z-[9999]
        bg-black
        flex items-center justify-center
      "
      // Tap / click skip (mobile-friendly)
      onClick={() => {
        if (!skippedRef.current) {
          skippedRef.current = true;
          onFinish();
        }
      }}
    >
      {/* VIDEO */}
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

      {/* SKIP HINT */}
      <div
        className="
          absolute bottom-6 right-6
          text-xs md:text-sm
          text-white/70
          tracking-wide
          select-none
          pointer-events-none
        "
      >
        Press any key to skip
      </div>
    </div>
  );
};

export default SplashScreen;
