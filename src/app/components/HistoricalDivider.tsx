export function HistoricalDivider() {
  return (
    <div className="flex items-center justify-center my-12">
      <div className="flex items-center gap-3">
        <div className="w-12 h-px bg-black/30"></div>
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 bg-black rotate-45"></div>
          <div className="w-1.5 h-1.5 bg-black rotate-45"></div>
          <div className="w-1.5 h-1.5 bg-black rotate-45"></div>
        </div>
        <div className="w-12 h-px bg-black/30"></div>
      </div>
    </div>
  );
}

export function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="flex items-center gap-4">
        <div className="w-24 h-px bg-black/20"></div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 border border-black rotate-45"></div>
          <div className="w-3 h-px bg-black"></div>
          <div className="w-2 h-2 bg-black"></div>
          <div className="w-3 h-px bg-black"></div>
          <div className="w-2 h-2 border border-black rotate-45"></div>
        </div>
        <div className="w-24 h-px bg-black/20"></div>
      </div>
    </div>
  );
}
