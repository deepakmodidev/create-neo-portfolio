export default function SectionSeparator() {
  const cornerClass =
    "absolute w-1.5 h-1.5 border border-border bg-background z-10";

  return (
    <div className="relative flex w-full items-center justify-center overflow-visible border-y border-dashed border-border">
      {/* Corner squares */}
      <div className={`${cornerClass} -top-[3px] -left-[3px]`} />
      <div className={`${cornerClass} -top-[3px] -right-[3px]`} />
      <div className={`${cornerClass} -bottom-[3px] -left-[3px]`} />
      <div className={`${cornerClass} -bottom-[3px] -right-[3px]`} />

      {/* Striped band */}
      <div
        className="h-4 w-full opacity-40 bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,hsl(var(--border))_4px,hsl(var(--border))_8px)]"
        aria-hidden="true"
      />
    </div>
  );
}
