"use client";

import { motion } from "framer-motion";
import type { Partner } from "@/data/wrapped-2025";
import { AnimatedCounter } from "../animated-counter";
import { Crosshair, HorizontalLine, BrandLogo } from "../geometric-frame";

interface CreditsSlideProps {
  total: number;
  currency: string;
  partners: Partner[];
}

export function CreditsSlide({ total, currency, partners }: CreditsSlideProps) {
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
          Partner Credits
        </motion.span>

        {/* Main stat */}
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

        {/* Partners grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="w-full max-w-sm"
        >
          <div className="grid grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <motion.a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.08, duration: 0.3 }}
                className="flex flex-col items-center gap-3 group"
              >
                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-7 h-7 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="text-[10px] text-white/40 group-hover:text-white/70 transition-colors editorial-text">
                  {partner.name}
                </span>
              </motion.a>
            ))}
          </div>
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
