import React, { useRef, useEffect } from "react";

const SplashScreen = ({ onFinish }) => {
  const videoRef = useRef(null);
  const skippedRef = useRef(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }

    document.body.style.overflow = "hidden";

    const handleSkip = () => {
      if (!skippedRef.current) {
        skippedRef.current = true;
        onFinish();
      }
    };

    window.addEventListener("keydown", handleSkip);

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
        overflow-hidden
      "
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
        src="https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/background/splash.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        className="
          absolute inset-0
          w-full h-full
          object-contain sm:object-cover
          bg-[#FFFFFF]
        "
      />

      {/* MOBILE / TABLET SKIP HINT */}
      <div
        className="
          absolute bottom-4 right-4
          sm:bottom-6 sm:right-6
          text-[10px] sm:text-xs md:text-sm
          text-white/70
          tracking-wide
          select-none
          pointer-events-none
        "
      >
        Tap anywhere to skip
      </div>
    </div>
  );
};

export default SplashScreen;