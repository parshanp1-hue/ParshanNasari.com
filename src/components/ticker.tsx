const items = [
  "650+ global workforce",
  "28+ countries",
  "50%+ unit-cost reduction",
  "$50M credit facility reviewed",
  "~80 contract workstreams",
  "100,000-hour program scaled",
  "$3.37M disbursements reconciled",
  "10+ jurisdictions negotiated",
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
      aria-label="Career highlights"
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
