"use client";

import DottedBackground from "@/components/dotted-background";
import HackathonCard from "@/components/hackathon-card";

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
      status: "In Progress",
      statusColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      favicon: "https://peru.ai-hackathon.co/favicon.ico",
      repository: "https://github.com/crafter-station/peru.ai-hackathon.co",
      lastUpdate: "2 days ago",
      participants: +200
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <DottedBackground />
      
      {/* Main container */}
      <div className="max-w-screen-xl mx-auto px-3 xs:px-4 sm:px-8 py-8 sm:py-12 lg:py-16">
        
        {/* Hero Section */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="relative">
            <img 
              src="/TCH-BRAND.svg" 
              alt="The Hackathon Company" 
              className="h-20 xs:h-24 sm:h-28 md:h-32 lg:h-36 w-auto mx-auto mb-6 sm:mb-8 opacity-0 animate-in fade-in duration-700 fill-mode-forwards"
            />
          </div>
          
          <div className="max-w-2xl mx-auto mb-8 sm:mb-10 opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-forwards">
            <h1 className="text-lg sm:text-xl md:text-2xl font-light text-foreground/90 leading-relaxed tracking-wide">
              Building the future through innovation
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mt-3 sm:mt-4 font-light">
              We orchestrate world-class hackathons that unite visionary minds, 
              foster breakthrough solutions, and accelerate technological advancement across global markets.
            </p>
          </div>

          <div className="opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-forwards">
            <a
              href="https://cal.com/tomas-calle-espinal-wy0huj/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/95 active:bg-primary/90 transition-all duration-300 ease-out rounded-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background min-h-[52px] border border-primary/20 hover:border-primary/40 touch-manipulation overflow-hidden"
            >
              <span className="relative z-10 tracking-wide">Schedule Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
            </a>
          </div>
        </div>

        {/* Events Showcase */}
        <div className="space-y-8 sm:space-y-12">
          <div className="text-center opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-forwards">
            <h2 className="text-xl sm:text-2xl font-light text-foreground/90 mb-2 tracking-wide">
              Global Innovation Portfolio
            </h2>
            <p className="text-sm text-muted-foreground font-light mb-4">
              Transforming industries through strategic technology events
            </p>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto" />
          </div>

          {/* Events Grid */}
          <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
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
          </ul>
        </div>

        {/* GitHub Repository Link */}
        <div className="text-center mt-12 sm:mt-16 opacity-0 animate-in fade-in duration-700 fill-mode-forwards">
          <a
            href="https://github.com/camilocbarrera/hackathon.lat"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors duration-300 font-medium tracking-wide"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            
          </a>
        </div>

        {/* Footer accent */}
        <div className="opacity-0 animate-in fade-in duration-700 fill-mode-forwards">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto mt-8 sm:mt-12" />
        </div>
      </div>
    </div>
  );
}
