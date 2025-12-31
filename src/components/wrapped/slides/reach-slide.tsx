"use client";

import { motion } from "framer-motion";
import { Crosshair, HorizontalLine, BrandLogo } from "../geometric-frame";

interface Country {
  name: string;
  flag: string;
  code: string;
}

interface ReachSlideProps {
  countries: number;
  countryList: Country[];
}

export function ReachSlide({ countries, countryList }: ReachSlideProps) {
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
          Geographic Reach
        </motion.span>

        {/* Main stat */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="display-number text-9xl text-white">
            {countries}
          </span>
          <p className="editorial-text text-[10px] text-white/40 mt-4">
            Countries
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-32 mb-10"
        >
          <HorizontalLine rounded={false} />
        </motion.div>

        {/* Country flags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex items-center gap-12"
        >
          {countryList.map((country, index) => (
            <motion.div
              key={country.code}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.15, duration: 0.4 }}
              className="flex flex-col items-center gap-4"
            >
              <span className="text-6xl">{country.flag}</span>
              <span className="editorial-text text-[10px] text-white/50">
                {country.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Expansion hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-12 editorial-text text-[10px] text-white/30"
        >
          Expanding across LATAM
        </motion.p>
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
