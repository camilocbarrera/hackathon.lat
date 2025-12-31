"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "../animated-counter";
import { Crosshair, VerticalLine, BrandLogo } from "../geometric-frame";

interface CommunitySlideProps {
  hackers: number;
  submissions: number;
  companies: number;
}

export function CommunitySlide({ hackers, submissions, companies }: CommunitySlideProps) {
  const stats = [
    { value: hackers, label: "Hackers", suffix: "+" },
    { value: submissions, label: "Submissions", suffix: "" },
    { value: companies, label: "Partners", suffix: "+" },
  ];

  return (
    <div className="relative flex h-dvh flex-col overflow-hidden thc-bg">
      <Crosshair />

      <div className="relative flex flex-1 flex-col items-center justify-center px-8">
        {/* Section label */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="editorial-text text-[10px] text-white/40 mb-12"
        >
          Our Community
        </motion.span>

        {/* Stats in a row with dividers */}
        <div className="flex items-center justify-center gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
              className="flex items-center gap-8"
            >
              <div className="text-center">
                <div className="flex items-baseline justify-center">
                  <span className="display-number text-5xl sm:text-6xl text-white">
                    <AnimatedCounter value={stat.value} duration={1.5} />
                  </span>
                  {stat.suffix && (
                    <span className="text-xl text-white/40 ml-1">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <p className="editorial-text text-[10px] text-white/40 mt-3">
                  {stat.label}
                </p>
              </div>
              
              {/* Divider between stats */}
              {index < stats.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                  className="h-16"
                >
                  <VerticalLine className="h-full" rounded={false} />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
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
