"use client";
import { useEffect, useRef } from "react";

export default function CursorSpotlight() {
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = spotRef.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      el.style.left = `${e.clientX}px`;
      el.style.top  = `${e.clientY}px`;
      el.style.opacity = "1";
    };
    const hide = () => { el.style.opacity = "0"; };
    window.addEventListener("mousemove", handler);
    document.addEventListener("mouseleave", hide);
    return () => {
      window.removeEventListener("mousemove", handler);
      document.removeEventListener("mouseleave", hide);
    };
  }, []);

  return (
    <div
      aria-hidden
      ref={spotRef}
      style={{
        position: "fixed",
        width: 640,
        height: 640,
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
        opacity: 0,
        left: "-9999px",
        top: "-9999px",
        transform: "translate(-50%, -50%)",
        background: "radial-gradient(circle, rgba(0,212,255,0.038) 0%, rgba(0,180,255,0.018) 40%, transparent 70%)",
        // GPU-accelerated, no layout thrash
        willChange: "transform",
        transition: "opacity 0.4s ease",
      }}
      className="cursor-spotlight"
    />
  );
}
