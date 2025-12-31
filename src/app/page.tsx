"use client";

import DottedBackground from "@/components/dotted-background";
import HackathonCard from "@/components/hackathon-card";
import { GithubBadge } from "@/components/github-badge";
import { StaticGrain } from "@/components/wrapped/grain-overlay";

export default function Home() {
  const hackathons = [
    {
      title: "AI Hackathon",
      url: "https://www.ai-hackathon.co",
      description: "Global AI innovation competition driving the future of artificial intelligence",
      status: "Completed",
      statusColor: "bg-slate-500/10 text-slate-400 border-slate-500/20",
      favicon: "https://www.ai-hackathon.co/favicon.ico",
      repository: "https://github.com/crafter-station/ai-hackathon",
      lastUpdate: "3 months ago",
      participants: +800
    },
    {
      title: "Colombia Tech Fest",
      url: "https://www.colombiatechfest.ai-hackathon.co",
      description: "Colombia's premier technology festival connecting innovators across Latin America",
      status: "Completed",
      statusColor: "bg-slate-500/10 text-slate-400 border-slate-500/20",
      favicon: "https://www.colombiatechfest.ai-hackathon.co/favicon.ico",
      repository: "https://github.com/crafter-station/colombia-tech-fest",
      lastUpdate: "1 month ago",
      participants: +500
    },
    {
      title: "Peru AI Hackathon",
      url: "https://peru.ai-hackathon.co",
      description: "Peru's flagship AI innovation challenge shaping the region's tech landscape",
      status: "Completed",
      statusColor: "bg-slate-500/10 text-slate-400 border-slate-500/20",
      favicon: "https://peru.ai-hackathon.co/favicon.ico",
      repository: "https://github.com/crafter-station/peru.ai-hackathon.co",
      lastUpdate: "1 week ago",
      participants: +1000
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <StaticGrain />
      <GithubBadge />
      <DottedBackground />
      
      {/* Main container */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-6 sm:py-12 lg:py-16 safe-area-inset">
        
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="relative">
            <img 
              src="/TCH-BRAND.svg" 
              alt="The Hackathon Company" 
              className="h-16 xs:h-20 sm:h-28 md:h-32 lg:h-36 w-auto mx-auto mb-5 sm:mb-8 opacity-0 animate-in fade-in duration-700 fill-mode-forwards"
            />
          </div>
          
          <div className="max-w-2xl mx-auto mb-6 sm:mb-10 px-2 opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-forwards">
            <h1 className="text-base xs:text-lg sm:text-xl md:text-2xl font-light text-foreground/90 leading-relaxed tracking-wide">
              Building the future through innovation
            </h1>
            <p className="text-muted-foreground text-xs xs:text-sm sm:text-base leading-relaxed mt-3 sm:mt-4 font-light">
              We orchestrate world-class hackathons that unite visionary minds, 
              foster breakthrough solutions, and accelerate technological advancement across global markets.
            </p>
          </div>

          <div className="opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-forwards px-4 sm:px-0 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://cal.com/tomas-calle-espinal-wy0huj/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/95 active:bg-primary/90 transition-all duration-300 ease-out rounded-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background min-h-[48px] sm:min-h-[52px] border border-primary/20 hover:border-primary/40 touch-manipulation overflow-hidden"
            >
              <span className="relative z-10 tracking-wide">Schedule Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
            </a>
            <a
              href="/2025"
              className="group relative inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-medium text-foreground bg-transparent hover:bg-muted/50 active:bg-muted/70 transition-all duration-300 ease-out rounded-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background min-h-[48px] sm:min-h-[52px] border border-border hover:border-primary/40 touch-manipulation overflow-hidden gap-2"
            >
              <span className="relative z-10 tracking-wide">2025 Wrapped</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Events Showcase */}
        <div className="space-y-6 sm:space-y-10 lg:space-y-12">
          <div className="text-center opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-forwards">
            <h2 className="text-lg xs:text-xl sm:text-2xl font-light text-foreground/90 mb-2 tracking-wide">
              Global Innovation Portfolio
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground font-light mb-4">
              Transforming industries through strategic technology events
            </p>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto" />
          </div>

          {/* Events Grid */}
          <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {hackathons.map((event, index) => (
              <div
                key={index}
                className="opacity-0 animate-in fade-in slide-in-from-bottom-6 duration-700 fill-mode-forwards"
              >
                <HackathonCard
                  title={event.title}
                  url={event.url}
                  description={event.description}
                  status={event.status}
                  statusColor={event.statusColor}
                  favicon={event.favicon}
                  repository={event.repository}
                  lastUpdate={event.lastUpdate}
                  participants={event.participants}
                />
              </div>
            ))}

            {/* Coming Soon Placeholder */}
            <div className="opacity-0 animate-in fade-in slide-in-from-bottom-6 duration-700 fill-mode-forwards xl:col-start-2">
              <li className="material-small relative flex flex-col p-4 sm:p-6 leading-5 border-2 border-dashed border-border/50 hover:border-primary/40 bg-card/30 backdrop-blur-sm transition-all duration-300 group cursor-pointer h-full min-h-[180px] sm:min-h-0">
                <a
                  href="https://cal.com/tomas-calle-espinal-wy0huj/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-0"
                  aria-label="Host the next hackathon"
                />
                
                <div className="flex flex-col items-center justify-center flex-1 gap-3 sm:gap-4 text-center py-4 sm:py-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border-2 border-dashed border-muted-foreground/30 flex items-center justify-center group-hover:border-primary/50 transition-colors duration-300">
                    <svg 
                      className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground/50 group-hover:text-primary/70 transition-colors duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  
                  <div className="space-y-1 sm:space-y-1.5">
                    <h3 className="text-xs sm:text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      Your Country Next?
                    </h3>
                    <p className="text-[10px] sm:text-xs text-muted-foreground/70 leading-relaxed">
                      Partner with us to bring the next<br />hackathon to your region
                    </p>
                  </div>

                  <span className="text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 border border-dashed border-primary/30 text-primary/70 font-medium tracking-wide group-hover:border-primary/60 group-hover:text-primary transition-all duration-300">
                    Let's Talk
                  </span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </li>
            </div>
          </ul>
        </div>

        {/* GitHub Repository Link */}
        <div className="text-center mt-10 sm:mt-16 opacity-0 animate-in fade-in duration-700 fill-mode-forwards">
          <a
            href="https://github.com/camilocbarrera/hackathon.lat"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary active:text-primary transition-colors duration-300 font-medium tracking-wide p-2 -m-2 touch-manipulation"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>

        {/* Footer accent */}
        <div className="opacity-0 animate-in fade-in duration-700 fill-mode-forwards pb-4 sm:pb-0">
          <div className="w-24 sm:w-32 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto mt-6 sm:mt-12" />
        </div>
      </div>
    </div>
  );
}
