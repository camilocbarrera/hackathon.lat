"use client";

export function StaticGrain() {
  return (
    <div
      className="pointer-events-none fixed inset-0"
      style={{
        zIndex: 99999,
        backgroundImage: "url('/Noise.png')",
        backgroundRepeat: "repeat",
        opacity: 0.33,
      }}
      aria-hidden="true"
    />
  );
}
