"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GeometricFrameProps {
  children?: ReactNode;
  className?: string;
  showCrosshair?: boolean;
}

export function GeometricFrame({ children, className, showCrosshair = false }: GeometricFrameProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Rounded rectangle frame */}
      <div className="absolute inset-0 border border-white/20 rounded-full" />
      
      {/* Crosshair lines with center fade */}
      {showCrosshair && (
        <Crosshair />
      )}
      
      {children}
    </div>
  );
}

interface CrosshairProps {
  className?: string;
  vertical?: boolean;
  horizontal?: boolean;
}

export function Crosshair({ className, vertical = true, horizontal = true }: CrosshairProps) {
  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}>
      {/* Vertical line - fades towards center */}
      {vertical && (
        <>
          {/* Top half - fades to center */}
          <div 
            className="absolute left-1/2 top-0 h-1/2 w-px -translate-x-1/2"
            style={{
              background: "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.15) 60%, rgba(255,255,255,0) 100%)"
            }}
          />
          {/* Bottom half - fades from center */}
          <div 
            className="absolute left-1/2 bottom-0 h-1/2 w-px -translate-x-1/2"
            style={{
              background: "linear-gradient(to top, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.15) 60%, rgba(255,255,255,0) 100%)"
            }}
          />
        </>
      )}
      {/* Horizontal line - fades towards center */}
      {horizontal && (
        <>
          {/* Left half - fades to center */}
          <div 
            className="absolute top-1/2 left-0 w-1/2 h-px -translate-y-1/2"
            style={{
              background: "linear-gradient(to right, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.15) 60%, rgba(255,255,255,0) 100%)"
            }}
          />
          {/* Right half - fades from center */}
          <div 
            className="absolute top-1/2 right-0 w-1/2 h-px -translate-y-1/2"
            style={{
              background: "linear-gradient(to left, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.15) 60%, rgba(255,255,255,0) 100%)"
            }}
          />
        </>
      )}
    </div>
  );
}

interface EditorialFrameProps {
  leftText?: string;
  rightText?: string;
  children?: ReactNode;
  className?: string;
  variant?: "default" | "accent" | "subtle";
}

export function EditorialFrame({ 
  leftText, 
  rightText, 
  children, 
  className,
  variant = "default" 
}: EditorialFrameProps) {
  const hasContent = Boolean(children);
  
  return (
    <div className={cn("relative flex items-center gap-2 sm:gap-4", className)}>
      {/* Left label with decorative dash */}
      {leftText && (
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <span className="w-4 sm:w-6 h-px bg-gradient-to-r from-transparent to-white/30" />
          <span className="editorial-text text-[10px] tracking-[0.2em] text-white/50 uppercase whitespace-nowrap">
            {leftText}
          </span>
        </div>
      )}
      
      {/* Center frame with refined pill shape */}
      <div className="relative flex-1 min-h-[40px] shrink-0">
        {/* Outer glow for accent variant */}
        {variant === "accent" && (
          <div className="absolute inset-0 rounded-full bg-white/5 blur-sm" />
        )}
        
        {/* Main border */}
        <div 
          className={cn(
            "absolute inset-0 rounded-full transition-colors",
            variant === "default" && "border border-white/15",
            variant === "accent" && "border border-white/25",
            variant === "subtle" && "border border-white/10"
          )} 
        />
        
        {/* Inner content */}
        <div className={cn(
          "relative z-10 flex items-center justify-center h-full min-h-[40px]",
          hasContent ? "py-2 px-6" : "py-3"
        )}>
          {children}
        </div>
        
        {/* Subtle inner gradient when empty */}
        {!hasContent && (
          <div className="absolute inset-[1px] rounded-full bg-gradient-to-r from-white/[0.02] via-white/[0.04] to-white/[0.02]" />
        )}
      </div>
      
      {/* Right label with decorative dash */}
      {rightText && (
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <span className="editorial-text text-[10px] tracking-[0.2em] text-white/50 uppercase whitespace-nowrap">
            {rightText}
          </span>
          <span className="w-4 sm:w-6 h-px bg-gradient-to-l from-transparent to-white/30" />
        </div>
      )}
    </div>
  );
}

interface VerticalLineProps {
  className?: string;
  rounded?: boolean;
}

export function VerticalLine({ className, rounded = true }: VerticalLineProps) {
  return (
    <div className={cn("relative w-px", className)}>
      <div 
        className={cn(
          "absolute inset-0 bg-white/20",
          rounded && "rounded-full"
        )} 
      />
      {rounded && (
        <>
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 border border-white/20 rounded-full" />
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 border border-white/20 rounded-full" />
        </>
      )}
    </div>
  );
}

interface HorizontalLineProps {
  className?: string;
  rounded?: boolean;
}

export function HorizontalLine({ className, rounded = true }: HorizontalLineProps) {
  return (
    <div className={cn("relative h-px", className)}>
      <div 
        className={cn(
          "absolute inset-0 bg-white/20",
          rounded && "rounded-full"
        )} 
      />
      {rounded && (
        <>
          <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3 h-3 border border-white/20 rounded-full" />
          <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-3 h-3 border border-white/20 rounded-full" />
        </>
      )}
    </div>
  );
}

export function BrandLogo({ className }: { className?: string }) {
  return (
    <div className={cn("text-right", className)}>
      <div className="text-white/40 text-sm leading-tight">
        <span className="italic">The</span>
        <br />
        <span className="font-semibold text-white">Hackathon</span>
        <br />
        <span className="text-white/40">Company</span>
      </div>
    </div>
  );
}

