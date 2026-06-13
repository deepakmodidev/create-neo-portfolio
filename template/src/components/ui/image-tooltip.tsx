"use client";

import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

interface ImageTooltipProps {
  children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

export default function ImageTooltip({
  children,
  imageSrc,
  imageAlt,
  className = "",
}: ImageTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  useEffect(() => setMounted(true), []);

  const getPosition = (x: number, y: number) => {
    const w = 320,
      h = 192,
      o = 15,
      vw = window.innerWidth,
      vh = window.innerHeight;
    let nx = x + o,
      ny = y - h / 2;
    if (nx + w > vw - 10) nx = x - w - o;
    if (nx < 10) nx = 10;
    if (ny < 10) ny = 10;
    if (ny + h > vh - 10) ny = vh - h - 10;
    return { x: nx, y: ny };
  };

  useEffect(() => {
    if (!isVisible) return;

    const animate = () => {
      const speed = 0.15;
      currentPos.current.x +=
        (mouseRef.current.x - currentPos.current.x) * speed;
      currentPos.current.y +=
        (mouseRef.current.y - currentPos.current.y) * speed;
      setPosition({ x: currentPos.current.x, y: currentPos.current.y });
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMove = (e: MouseEvent) => {
      mouseRef.current = getPosition(e.clientX, e.clientY);
    };

    document.addEventListener("mousemove", handleMove, { passive: true });
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, [isVisible]);

  const handleMouseEnter = (e: React.MouseEvent) => {
    if ("ontouchstart" in window) return;
    const pos = getPosition(e.clientX, e.clientY);
    mouseRef.current = currentPos.current = pos;
    setPosition(pos);
    setIsVisible(true);
    setTimeout(() => setIsMounted(true), 10);
  };

  const handleMouseLeave = () => {
    setIsMounted(false);
    setTimeout(() => setIsVisible(false), 200);
  };

  return (
    <>
      <div
        className={`inline-block ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>

      {mounted &&
        isVisible &&
        createPortal(
          <div
            className={`fixed z-[9999] pointer-events-none transition-all duration-200 ease-out ${
              isMounted ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
          >
            <div className="bg-muted border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl overflow-hidden">
              <div className="relative w-80 h-48">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="320px"
                  loading="lazy"
                />
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
