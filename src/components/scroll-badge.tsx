"use client";

import { useEffect, useState } from "react";

export default function ScrollBadge() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 150;
      setIsVisible(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top fade - only visible when scrolled */}
      <div
        className={`pointer-events-none fixed inset-x-0 top-0 z-40 h-16 sm:h-24 bg-gradient-to-b from-black to-transparent transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />
      
      {/* Badge */}
      <div
        className={`fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2">
          <img
            src="/TCH-BRAND.svg"
            alt="The Hackathon Company"
            className="h-3 sm:h-4 w-auto opacity-70 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          />
        </div>
      </div>
    </>
  );
}
