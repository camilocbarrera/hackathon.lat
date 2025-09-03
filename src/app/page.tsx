"use client";

import DottedBackground from "@/components/DottedBackground";

export default function Home() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-background/95 relative overflow-hidden">
      <DottedBackground />

      <div className="text-center space-y-12 px-8 relative z-10">
        <div className="animate-in fade-in duration-1000">
          <h1 className="font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight text-foreground leading-tight">
            The Hackathon
            <span className="block text-muted-foreground font-light mt-2">Company</span>
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center pt-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <a
            href="https://cal.com/tomas-calle-espinal-wy0huj/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-4 text-lg font-medium text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-300 rounded-lg shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Us
          </a>

          <a
            href="https://www.papermark.com/view/cmf23wzjy0002l404uw7vdtsp"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-4 text-lg font-medium text-foreground bg-transparent border-2 border-border hover:border-border/60 hover:bg-muted/50 transition-all duration-300 rounded-lg hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            aria-label="View our blueprint presentation"
          >
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Blueprint
          </a>
        </div>

        {/* Subtle accent line */}
        <div className="w-24 h-px bg-foreground/20 mx-auto mt-16 animate-in zoom-in duration-1000 delay-500" />
      </div>


    </div>
  );
}
