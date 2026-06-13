export default function SectionSeparator() {
  const cornerClass =
    "absolute w-1.5 h-1.5 border border-border bg-background z-10";

  return (
    <div className="relative w-full border-y border-dashed border-border flex items-center justify-center overflow-visible">
      {/* Corner Squares */}
      <div className={`${cornerClass} -top-[3px] -left-[3px]`} />
      <div className={`${cornerClass} -top-[3px] -right-[3px]`} />
      <div className={`${cornerClass} -bottom-[3px] -left-[3px]`} />
      <div className={`${cornerClass} -bottom-[3px] -right-[3px]`} />

      {/* Striped Separator */}
      <div
        className="h-4 w-full opacity-40 bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,hsl(var(--border))_4px,hsl(var(--border))_8px)]"
        aria-hidden="true"
      />
    </div>
  );
}
