"use client";

import { motion } from "framer-motion";
import { Crosshair, EditorialFrame } from "../geometric-frame";

interface IntroSlideProps {
  year: number;
}

export function IntroSlide({ year }: IntroSlideProps) {
  return (
    <div className="relative flex h-dvh flex-col overflow-hidden thc-bg">
      <Crosshair />

      {/* Brand logo - top center */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-8 left-1/2 -translate-x-1/2 z-10"
      >
        <img
          src="/TCH-BRAND.svg"
          alt="The Hackathon Company"
          className="h-4 w-auto opacity-60"
        />
      </motion.div>

      <div className="relative flex flex-1 flex-col items-center justify-center px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <span className="display-number text-[10rem] sm:text-[14rem] text-white">
            {year}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-full max-w-md mt-8"
        >
          <EditorialFrame leftText="THE YEAR" rightText="IN REVIEW">
            <span className="editorial-text text-sm text-white/80 px-8">
              WRAPPED
            </span>
          </EditorialFrame>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 text-center text-xs text-white/40 max-w-xs editorial-text"
        >
          Building the future of Latin America
        </motion.p>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest text-white/20"
      >
        Tap to continue
      </motion.p>
    </div>
  );
}
