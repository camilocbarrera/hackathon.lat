"use client";

import { motion } from "framer-motion";
import type { EventBreakdown } from "@/data/wrapped-2025";
import { Crosshair, BrandLogo } from "../geometric-frame";

interface EventsSlideProps {
  events: EventBreakdown[];
}

export function EventsSlide({ events }: EventsSlideProps) {
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
          Events Hosted
        </motion.span>

        {/* Main number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="display-number text-9xl text-white">
            {events.length}
          </span>
        </motion.div>

        {/* Event list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="w-full max-w-sm space-y-4"
        >
          {events.map((event, index) => (
            <motion.a
              key={event.event}
              href={event.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.15, duration: 0.4 }}
              className="block p-4 border border-white/10 rounded-full hover:border-white/30 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="editorial-text text-[10px] text-white/30 w-6">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-white/80 group-hover:text-white transition-colors">
                    {event.event}
                  </span>
                </div>
                <span className="text-[10px] text-white/40 editorial-text">
                  {event.location}
                </span>
              </div>
            </motion.a>
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
