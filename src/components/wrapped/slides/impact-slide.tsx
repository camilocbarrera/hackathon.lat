"use client";

import { motion } from "framer-motion";
import type { EventBreakdown } from "@/data/wrapped-2025";
import { AnimatedCounter } from "../animated-counter";
import { Crosshair, HorizontalLine, BrandLogo } from "../geometric-frame";

interface ImpactSlideProps {
  total: number;
  currency: string;
  breakdown: EventBreakdown[];
}

export function ImpactSlide({ total, currency, breakdown }: ImpactSlideProps) {
  return (
    <div className="relative flex h-dvh flex-col overflow-hidden thc-bg">
      <Crosshair />

      <div className="relative flex flex-1 flex-col items-center justify-center px-8">
        {/* Section label */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="editorial-text text-[10px] text-white/40 mb-8"
        >
          Total Raised
        </motion.span>

        {/* Main stat - Editorial split layout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-2xl text-white/40 font-light">+{currency}</span>
            <span className="display-number text-8xl sm:text-9xl text-white">
              <AnimatedCounter value={Math.round(total / 1000)} suffix="K" duration={1.5} />
            </span>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-48 my-10"
        >
          <HorizontalLine rounded={false} />
        </motion.div>

        {/* Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="w-full max-w-sm space-y-4"
        >
          {breakdown.map((item, index) => (
            <motion.div
              key={item.event}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <span className="editorial-text text-[10px] text-white/30 w-6">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-white/70">{item.event}</span>
              </div>
              <span className="text-sm text-white/90 font-light">
                ${item.amount.toLocaleString()}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 right-8"
      >
        <BrandLogo />
      </motion.div>
    </div>
  );
}
