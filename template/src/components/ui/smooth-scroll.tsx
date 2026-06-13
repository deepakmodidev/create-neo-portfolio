"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

/**
 * The most optimized, leanest implementation of Lenis for Next.js.
 * - Uses defaults for maximum performance.
 * - lerp: handles the "smoothness" factor.
 * - duration: defines the length of the scroll animation.
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.5,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
