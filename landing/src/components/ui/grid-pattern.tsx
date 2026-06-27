export default function GridPattern() {
  const svgTile = `<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12'>
    <polygon points='6,1 11,10 1,10' fill='none' stroke='rgba(128,128,128,0.4)' stroke-width='0.6'/>
    <polygon points='6,11 11,2 1,2' fill='none' stroke='rgba(128,128,128,0.4)' stroke-width='0.6'/>
  </svg>`;

  return (
    <div
      className="grid-pattern pointer-events-none fixed inset-0 z-0 h-full w-full"
      style={{
        backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(svgTile)}")`,
        backgroundSize: "12px 12px",
        // Show the grid only in the left/right gutters, fading out toward the center column.
        WebkitMaskImage:
          "linear-gradient(to right, #000 0%, #000 10%, transparent 25%, transparent 75%, #000 90%, #000 100%)",
        maskImage:
          "linear-gradient(to right, #000 0%, #000 10%, transparent 25%, transparent 75%, #000 90%, #000 100%)",
      }}
    />
  );
}
