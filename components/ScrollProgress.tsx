"use client";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop || document.body.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setPct(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 3, zIndex: 9999, background: "rgba(255,255,255,0.05)" }}>
      <div style={{
        height: "100%", width: `${pct}%`,
        background: "linear-gradient(90deg, #00d4ff, #7c3aed, #00d4ff)",
        backgroundSize: "200% auto",
        transition: "width 0.1s linear",
        boxShadow: "0 0 10px rgba(0,212,255,0.6)",
      }} />
    </div>
  );
}
