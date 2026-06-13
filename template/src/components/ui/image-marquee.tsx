"use client";

import Image from "next/image";

// Swap these for your own project hero images (e.g. /projects/<name>/hero.webp).
const IMAGES = [
  { src: "/placeholder-image.png", alt: "Project One" },
  { src: "/placeholder-image.png", alt: "Project Two" },
  { src: "/placeholder-image.png", alt: "Project Three" },
  { src: "/placeholder-image.png", alt: "Project Four" },
  { src: "/placeholder-image.png", alt: "Project Five" },
  { src: "/placeholder-image.png", alt: "Project Six" },
  { src: "/placeholder-image.png", alt: "Project Seven" },
];

export default function ImageMarquee() {
  return (
    <>
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>

      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 backdrop-blur-md [mask-image:linear-gradient(to_right,black,transparent)] pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 backdrop-blur-md [mask-image:linear-gradient(to_left,black,transparent)] pointer-events-none z-10" />

        <div className="flex w-max animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused]">
          {[...IMAGES, ...IMAGES].map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              className="flex-shrink-0 border-r border-dashed border-border p-2 flex items-center justify-center"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={200}
                height={128}
                className="rounded-lg w-[200px] h-32 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
