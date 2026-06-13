"use client";
import { useState, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";
import { useLenis } from "lenis/react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const circleRef = useRef<SVGCircleElement>(null);

  const lenis = useLenis(({ scroll, progress }) => {
    setIsVisible(scroll > 100);

    if (circleRef.current) {
      const offset = 75.4 * (1 - progress);
      circleRef.current.style.strokeDashoffset = offset.toString();
    }
  });

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.5 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-in-out ${
        isVisible
          ? "opacity-100 scale-100"
          : "opacity-0 scale-75 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="relative w-8 h-8 cursor-pointer bg-background text-foreground border border-border rounded-full shadow-md transition-[background-color,box-shadow,transform] duration-300 hover:shadow-lg hover:scale-110 group flex items-center justify-center"
        aria-label="Scroll to top"
      >
        {/* Progress Circle Container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 32 32">
            <circle
              cx="16"
              cy="16"
              r="12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              opacity="0.1"
            />
            <circle
              ref={circleRef}
              cx="16"
              cy="16"
              r="12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={75.4}
              strokeDashoffset={75.4}
            />
          </svg>
        </div>

        <FaArrowUp
          size={12}
          className="text-foreground relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5"
        />
      </button>
    </div>
  );
}
