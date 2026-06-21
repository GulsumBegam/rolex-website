"use client";

import { useEffect, useRef } from "react";

export default function CursorSpotlight() {
  const frame = useRef<number | null>(null);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (frame.current) return;
      frame.current = requestAnimationFrame(() => {
        document.documentElement.style.setProperty(
          "--spotlight-x",
          `${pos.current.x}px`
        );
        document.documentElement.style.setProperty(
          "--spotlight-y",
          `${pos.current.y}px`
        );
        frame.current = null;
      });
    };
    window.addEventListener("pointermove", handleMove);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  return <div className="spotlight-layer" aria-hidden="true" />;
}
