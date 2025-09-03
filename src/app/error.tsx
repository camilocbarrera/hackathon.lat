"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-background/95 relative overflow-hidden">
      <div className="text-center space-y-6 px-8">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-foreground">Oops!</h1>
          <h2 className="text-2xl font-semibold text-muted-foreground">Something went wrong</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            We encountered an unexpected error. Please try refreshing the page.
          </p>
        </div>
        <button
          onClick={reset}
          className="inline-flex items-center gap-3 px-6 py-3 text-lg font-medium text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-300 rounded-lg shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
