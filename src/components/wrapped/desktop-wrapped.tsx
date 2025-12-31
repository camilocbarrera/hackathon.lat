"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { WrappedData } from "@/data/wrapped-2025";
import { AnimatedCounter } from "./animated-counter";
import { Crosshair, EditorialFrame, HorizontalLine, VerticalLine, BrandLogo } from "./geometric-frame";

interface DesktopWrappedProps {
  data: WrappedData;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="editorial-text text-[10px] text-white/40 tracking-[0.3em]">
      {children}
    </span>
  );
}

function useKeyboardNavigation(sectionCount: number) {
  const [currentSection, setCurrentSection] = useState(0);
  const [showHint, setShowHint] = useState(true);
  const isScrolling = useRef(false);

  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const index = Number(entry.target.getAttribute("data-section"));
            setCurrentSection(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling.current) return;
      
      const sections = document.querySelectorAll("[data-section]");
      let targetSection = currentSection;

      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        targetSection = Math.min(currentSection + 1, sectionCount - 1);
        setShowHint(false);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        targetSection = Math.max(currentSection - 1, 0);
        setShowHint(false);
      }

      if (targetSection !== currentSection && sections[targetSection]) {
        isScrolling.current = true;
        sections[targetSection].scrollIntoView({ behavior: "smooth" });
        setTimeout(() => { isScrolling.current = false; }, 800);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSection, sectionCount]);

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return { currentSection, showHint };
}

function KeyboardHint({ show, current, total }: { show: boolean; current: number; total: number }) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 pointer-events-none">
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full"
          >
            <div className="flex items-center gap-1.5">
              <kbd className="px-1.5 py-0.5 text-[10px] bg-white/10 rounded text-white/50 font-mono">←</kbd>
              <kbd className="px-1.5 py-0.5 text-[10px] bg-white/10 rounded text-white/50 font-mono">→</kbd>
            </div>
            <span className="text-[10px] text-white/30 tracking-wider">navigate</span>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Section indicator dots */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex items-center justify-center gap-1.5 mt-3"
      >
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`w-1 h-1 rounded-full transition-all duration-300 ${
              i === current ? "bg-white/60 w-3" : "bg-white/20"
            }`}
          />
        ))}
      </motion.div>
    </div>
  );
}

export function DesktopWrapped({ data }: DesktopWrappedProps) {
  const sectionCount = 8;
  const { currentSection, showHint } = useKeyboardNavigation(sectionCount);

  return (
    <div className="min-h-screen thc-bg text-white">
      <KeyboardHint show={showHint} current={currentSection} total={sectionCount} />
      {/* Hero Section */}
      <section data-section="0" className="min-h-screen flex flex-col items-center justify-center relative px-8">
        <Crosshair />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="display-number text-[16rem] lg:text-[20rem] text-white leading-none">
            {data.year}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-full max-w-xl mt-8"
        >
          <EditorialFrame leftText="THE YEAR" rightText="IN REVIEW">
            <span className="editorial-text text-sm text-white/80 px-12">
              WRAPPED
            </span>
          </EditorialFrame>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-white/20">
            <span className="editorial-text text-[10px]">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute bottom-12 right-12"
        >
          <BrandLogo />
        </motion.div>
      </section>

      {/* Impact Section */}
      <section data-section="1" className="min-h-screen flex items-center py-32 px-8 lg:px-16 relative">
        <Crosshair />
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionLabel>Total Raised</SectionLabel>
              <div className="mt-6 flex items-baseline gap-3">
                <span className="text-3xl text-white/40 font-light">+$</span>
                <span className="display-number text-[8rem] lg:text-[10rem] text-white leading-none">
                  <AnimatedCounter value={Math.round(data.fundsRaised.total / 1000)} suffix="K" duration={1.5} />
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {data.fundsRaised.breakdown.map((item, index) => (
                <div
                  key={item.event}
                  className="flex items-center justify-between py-4 border-b border-white/10"
                >
                  <div className="flex items-center gap-6">
                    <span className="editorial-text text-[10px] text-white/30 w-8">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-lg text-white/70">{item.event}</span>
                  </div>
                  <span className="text-lg text-white/90 font-light">
                    ${item.amount.toLocaleString()}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credits Section */}
      <section data-section="2" className="min-h-screen flex items-center py-32 px-8 lg:px-16 relative">
        <Crosshair />
        <div className="max-w-6xl mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionLabel>Partner Credits</SectionLabel>
            <div className="mt-6 flex items-baseline justify-center gap-3">
              <span className="text-3xl text-white/40 font-light">+$</span>
              <span className="display-number text-[8rem] lg:text-[10rem] text-white leading-none">
                <AnimatedCounter value={Math.round(data.credits.total / 1000)} suffix="K" duration={1.5} />
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-48 mx-auto my-16"
          >
            <HorizontalLine rounded={false} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-10"
          >
            {data.credits.partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 group"
              >
                <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-10 h-10 object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="editorial-text text-[10px] text-white/40 group-hover:text-white/70 transition-colors">
                  {partner.name}
                </span>
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section data-section="3" className="min-h-screen flex items-center py-32 px-8 lg:px-16 relative">
        <Crosshair />
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionLabel>Events Hosted</SectionLabel>
              <span className="display-number text-[10rem] text-white leading-none block mt-4">
                {data.events.length}
              </span>
            </motion.div>

            <div className="lg:col-span-2 space-y-6">
              {data.events.map((event, index) => (
                <motion.a
                  key={event.event}
                  href={event.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="block p-6 border border-white/10 rounded-full hover:border-white/30 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <span className="editorial-text text-[10px] text-white/30 w-8">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-xl text-white/80 group-hover:text-white transition-colors">
                        {event.event}
                      </span>
                    </div>
                    <div className="flex items-center gap-8 text-sm text-white/40">
                      <span>{event.participants}+ hackers</span>
                      <span>{event.location}</span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section data-section="4" className="min-h-screen flex items-center py-32 px-8 lg:px-16 relative">
        <Crosshair />
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <SectionLabel>Our Community</SectionLabel>
          </div>

          <div className="flex items-center justify-center gap-16 lg:gap-24">
            {[
              { value: data.community.hackers, label: "Hackers", suffix: "+" },
              { value: data.community.submissions, label: "Submissions", suffix: "" },
              { value: data.community.companies, label: "Partners", suffix: "+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-16 lg:gap-24"
              >
                <div className="text-center">
                  <div className="flex items-baseline justify-center">
                    <span className="display-number text-6xl lg:text-8xl text-white">
                      <AnimatedCounter value={stat.value} duration={1.5} />
                    </span>
                    {stat.suffix && (
                      <span className="text-2xl text-white/40 ml-1">
                        {stat.suffix}
                      </span>
                    )}
                  </div>
                  <p className="editorial-text text-[10px] text-white/40 mt-4">
                    {stat.label}
                  </p>
                </div>
                
                {index < 2 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="h-20"
                  >
                    <VerticalLine className="h-full" rounded={false} />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section data-section="5" className="min-h-screen flex items-center py-32 px-8 lg:px-16 relative">
        <Crosshair />
        <div className="max-w-6xl mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionLabel>Partners & Sponsors</SectionLabel>
            <div className="mt-6 flex items-baseline justify-center gap-2">
              <span className="display-number text-[8rem] text-white leading-none">
                {data.sponsors.length}
              </span>
              <span className="text-3xl text-white/40">+</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-32 mx-auto my-16"
          >
            <HorizontalLine rounded={false} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8"
          >
            {data.sponsors.map((sponsor) => (
              <a
                key={sponsor.name}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 group"
                title={sponsor.name}
              >
                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-7 h-7 object-contain opacity-50 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reach Section */}
      <section data-section="6" className="min-h-screen flex items-center py-32 px-8 lg:px-16 relative">
        <Crosshair />
        <div className="max-w-6xl mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionLabel>Geographic Reach</SectionLabel>
            <span className="display-number text-[10rem] text-white leading-none block mt-4">
              {data.community.countries}
            </span>
            <p className="editorial-text text-[10px] text-white/40 mt-4">
              Countries
            </p>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-32 mx-auto my-16"
          >
            <HorizontalLine rounded={false} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center gap-20"
          >
            {data.community.countryList.map((country) => (
              <div key={country.code} className="flex flex-col items-center gap-4">
                <span className="text-8xl">{country.flag}</span>
                <span className="editorial-text text-[10px] text-white/50">
                  {country.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Closing Section */}
      <section data-section="7" className="min-h-screen flex items-center py-32 px-8 lg:px-16 relative">
        <Crosshair />
        <div className="max-w-4xl mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-2xl mx-auto mb-16"
          >
            <EditorialFrame leftText="FUTURE IS" rightText="BUILT HERE" variant="accent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="text-white/50 text-lg mb-4">Thank you for an</p>
            <span className="display-number text-6xl lg:text-8xl text-white">
              incredible year
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-16"
          >
            <span className="display-number text-8xl text-white/10">2026</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-16 flex flex-col items-center gap-6"
          >
            <a
              href="https://cal.com/tomas-calle-espinal-wy0huj/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-4 border border-white/20 rounded-full text-white editorial-text text-sm hover:bg-white hover:text-black transition-all"
            >
              Partner with us
            </a>
            <a
              href="/"
              className="editorial-text text-[10px] text-white/30 hover:text-white/60 transition-colors"
            >
              Back to hackathon.lat
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-16 flex items-center justify-center gap-8"
          >
            <a
              href="https://github.com/camilocbarrera/hackathon.lat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/20 hover:text-white/60 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/thehackathoncompany"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/20 hover:text-white/60 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-12 right-12"
        >
          <BrandLogo />
        </motion.div>
      </section>
    </div>
  );
}
