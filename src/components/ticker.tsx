const items = [
  "Finance & operations I can own",
  "Distributed workforces at scale",
  "Multi-country entity build-outs",
  "Unit-cost reduction",
  "Commercial contracting",
  "On-the-ground market launches",
  "10+ jurisdictions I can negotiate",
];

function TickerRun() {
  return (
    <>
      {items.map((item) => (
        <span key={item} className="flex items-center">
          <span className="mx-6 font-mono text-[10px] uppercase tracking-[0.18em] text-muted sm:mx-8 sm:text-[11px] sm:tracking-[0.25em]">
            {item}
          </span>
          <span aria-hidden="true" className="text-[8px] text-accent">
            ◆
          </span>
        </span>
      ))}
    </>
  );
}

export function Ticker() {
  return (
    <div
      aria-label="What I can do"
      className="marquee-mask overflow-hidden border-b border-border/60 bg-card/40 py-5"
    >
      <div className="marquee-track">
        <TickerRun />
        {/* duplicate run to make the loop seamless; hidden from AT */}
        <div aria-hidden="true" className="flex">
          <TickerRun />
        </div>
      </div>
    </div>
  );
}
