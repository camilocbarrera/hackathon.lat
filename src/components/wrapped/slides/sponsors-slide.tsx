"use client";

import { motion } from "framer-motion";
import type { Sponsor } from "@/data/wrapped-2025";
import { Crosshair, HorizontalLine, BrandLogo } from "../geometric-frame";

interface SponsorsSlideProps {
  sponsors: Sponsor[];
  totalCompanies: number;
}

export function SponsorsSlide({ sponsors, totalCompanies }: SponsorsSlideProps) {
  return (
    <div className="relative flex h-dvh flex-col overflow-hidden thc-bg">
      <Crosshair />

      <div className="relative flex flex-1 flex-col items-center justify-center px-8">
        {/* Section label */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="editorial-text text-[10px] text-white/40 mb-6"
        >
          Partners & Sponsors
        </motion.span>

        {/* Main stat */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="flex items-baseline justify-center gap-1">
            <span className="display-number text-8xl text-white">
              {totalCompanies}
            </span>
            <span className="text-2xl text-white/40">+</span>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-32 mb-8"
        >
          <HorizontalLine rounded={false} />
        </motion.div>

        {/* Sponsor grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="w-full max-w-sm"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {sponsors.map((sponsor, index) => (
              <motion.a
                key={sponsor.name}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.03, duration: 0.3 }}
                className="flex flex-col items-center gap-2 group"
                title={sponsor.name}
              >
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-5 h-5 object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 right-8"
      >
        <BrandLogo />
      </motion.div>
    </div>
  );
}
