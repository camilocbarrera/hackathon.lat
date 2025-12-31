"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function GithubBadge() {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/crafter-station/wrapped-2025"
        );
        if (response.ok) {
          const data = await response.json();
          setStars(data.stargazers_count);
        }
      } catch {
        // silently fail
      }
    };
    fetchStars();
  }, []);

  return (
    <motion.a
      href="https://github.com/crafter-station/wrapped-2025"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 top-12 z-50 flex items-center gap-2 rounded-full border border-border/50 bg-background/80 px-3 py-1.5 text-muted-foreground backdrop-blur-sm transition-colors hover:border-border hover:text-foreground md:top-4"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
      {stars !== null && (
        <motion.span
          className="flex items-center gap-1 text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <svg
            className="h-3 w-3 text-amber-500"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          {stars}
        </motion.span>
      )}
    </motion.a>
  );
}

