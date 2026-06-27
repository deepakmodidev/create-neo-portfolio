export default function SectionHeader({
  title,
  sub,
}: {
  title: string;
  sub?: string;
}) {
  return (
    <div className="border-b border-dashed border-border px-4 py-3">
      <h2 className="text-xl font-semibold sm:text-2xl">
        {title}
        <span className="text-link">.</span>
      </h2>
      {sub ? (
        <p className="mt-1 text-sm text-muted-foreground">{sub}</p>
      ) : null}
    </div>
  );
}
