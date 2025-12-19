"use client";

interface HackathonCardProps {
  title: string;
  url: string;
  description: string;
  status: string;
  statusColor: string;
  favicon?: string;
  repository?: string;
  lastUpdate?: string;
  participants?: number;
}

export default function HackathonCard({
  title,
  url,
  description,
  status,
  statusColor,
  favicon = "/TCH-BRAND.svg",
  repository,
  lastUpdate = "2 days ago",
  participants = 0
}: HackathonCardProps) {


  return (
    <li className="material-small relative flex flex-col gap-3 p-4 sm:p-6 leading-5 hover:border-border border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 group h-full touch-manipulation active:bg-card/70">
      {/* Main link overlay */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-0"
        aria-label={`Visit ${title}`}
      />

      {/* Header section with avatar and status */}
      <div className="flex flex-row items-center gap-3 sm:gap-4">
        <div className="relative z-10 h-9 w-9 sm:h-10 sm:w-10 shrink-0">
          <div className="relative inline-flex h-9 w-9 sm:h-10 sm:w-10 bg-muted/50 rounded-lg border border-border/20 overflow-hidden">
            <img
              src={favicon}
              alt={`${title} favicon`}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMSA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDMgOUwxMC45MSA4LjI2TDEyIDJaIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+";
              }}
            />
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-between gap-0.5 sm:gap-1 overflow-hidden">
          <span className="relative z-10 min-w-0 font-medium text-sm sm:text-base text-foreground truncate transition-colors duration-300 block">
            {title}
          </span>
          <div className="min-w-0 flex items-center gap-1 overflow-hidden">
            <span className="relative z-10 min-w-0 text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-[11px] sm:text-xs truncate flex-shrink">
              {url.replace('https://', '').replace('www.', '').split('/')[0]}
            </span>
          </div>
        </div>

      </div>


      {/* Event description and metadata */}
      <div className="flex min-w-0 flex-col justify-between gap-2">
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {description}
        </p>
        
        <div className="flex flex-row items-center gap-1.5 sm:gap-2 flex-wrap">
          <span className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 border border-border bg-muted/50 text-muted-foreground font-medium tracking-wide uppercase rounded-sm whitespace-nowrap">
            {status}
          </span>
          <span className="text-[10px] sm:text-xs text-muted-foreground hidden xs:inline">•</span>
          <span className="text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap hidden xs:inline">
            {lastUpdate}
          </span>
          {participants > 0 && (
            <>
              <span className="text-[10px] sm:text-xs text-muted-foreground">•</span>
              <span className="text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap">
                {participants.toLocaleString()}+
              </span>
            </>
          )}
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/0 via-muted/0 to-muted/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </li>
  );
}
