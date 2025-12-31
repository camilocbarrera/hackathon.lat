export default function DottedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <div className="dotted-bg w-full h-full opacity-60" />
      {/* Additional subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.02) 25%, rgba(255,255,255,0.02) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.02) 75%),
            linear-gradient(-45deg, transparent 25%, rgba(255,255,255,0.02) 25%, rgba(255,255,255,0.02) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.02) 75%)
          `,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
}
