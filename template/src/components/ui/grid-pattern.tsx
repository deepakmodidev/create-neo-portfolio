export default function GridPattern() {
  const svgTile = `<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12'>
    <polygon points='6,1 11,10 1,10' fill='none' stroke='rgba(128,128,128,0.4)' stroke-width='0.6'/>
    <polygon points='6,11 11,2 1,2' fill='none' stroke='rgba(128,128,128,0.4)' stroke-width='0.6'/>
  </svg>`;

  return (
    <div
      className="fixed inset-0 z-0 w-full h-full pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(svgTile)}")`,
        backgroundSize: "12px 12px",
        // Mask to show grid only on the left and right gutters, fading out towards the center "context" area
        WebkitMaskImage:
          "linear-gradient(to right, #000 0%, #000 10%, transparent 25%, transparent 75%, #000 90%, #000 100%)",
        maskImage:
          "linear-gradient(to right, #000 0%, #000 10%, transparent 25%, transparent 75%, #000 90%, #000 100%)",
        opacity: 0.4,
      }}
    />
  );
}
