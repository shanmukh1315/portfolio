"use client";
import { motion } from "framer-motion";

/**
 * Fixed behind the entire site — position:fixed z-0.
 * Provides the aurora glow + floating particles that persist while scrolling.
 * No grid. No canvas (canvas lives only in Hero for the stronger neural-network effect).
 */

const AURORA = [
  // cyan — top right
  {
    w: 900, h: 800, blur: 130,
    style: { top: "-10%", right: "-8%" },
    color: "rgba(0,212,255,0.09)",
    anim: { x: [0, 24, 0], y: [0, -18, 0], scale: [1, 1.12, 1] },
    dur: 13,
  },
  // deep blue — centre
  {
    w: 700, h: 700, blur: 120,
    style: { top: "25%", left: "20%" },
    color: "rgba(30,80,220,0.07)",
    anim: { x: [0, -20, 0], y: [0, 24, 0], scale: [1, 1.08, 1] },
    dur: 18,
    delay: 2,
  },
  // purple — bottom left
  {
    w: 800, h: 700, blur: 120,
    style: { bottom: "-5%", left: "-6%" },
    color: "rgba(124,58,237,0.08)",
    anim: { x: [0, 16, 0], y: [0, -12, 0], scale: [1, 1.1, 1] },
    dur: 15,
    delay: 4,
  },
  // soft cyan — bottom right (accent)
  {
    w: 500, h: 500, blur: 100,
    style: { bottom: "15%", right: "5%" },
    color: "rgba(0,190,255,0.05)",
    anim: { x: [0, -14, 0], y: [0, 18, 0], scale: [1, 1.14, 1] },
    dur: 20,
    delay: 6,
  },
];

const PARTICLES = [
  { x:  7, y: 14 }, { x: 22, y: 68 }, { x: 44, y:  9 }, { x: 61, y: 81 },
  { x: 77, y: 23 }, { x: 89, y: 57 }, { x: 34, y: 47 }, { x: 54, y: 36 },
  { x: 14, y: 87 }, { x: 71, y:  7 }, { x: 84, y: 91 }, { x: 48, y: 61 },
  { x: 29, y: 32 }, { x: 66, y: 52 },
];

const COLORS = ["#00d4ff", "#7c3aed", "#3b82f6", "#00d4ff", "#a78bfa"];

export default function GlobalBackground() {
  return (
    <div
      aria-hidden
      className="global-bg"
      style={{
        position: "fixed", inset: 0, zIndex: 0,
        pointerEvents: "none", overflow: "hidden",
      }}
    >
      {/* Aurora blobs */}
      {AURORA.map((a, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            width: a.w, height: a.h,
            borderRadius: "50%",
            filter: `blur(${a.blur}px)`,
            background: `radial-gradient(circle, ${a.color} 0%, transparent 70%)`,
            ...a.style,
          }}
          animate={a.anim}
          transition={{
            duration: a.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: (a as { delay?: number }).delay ?? 0,
          }}
        />
      ))}

      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            left: `${p.x}%`, top: `${p.y}%`,
            width: i % 4 === 0 ? 3 : 2,
            height: i % 4 === 0 ? 3 : 2,
            borderRadius: "50%",
            background: COLORS[i % COLORS.length],
            boxShadow: `0 0 6px ${COLORS[i % COLORS.length]}80`,
          }}
          animate={{
            y: [0, -(10 + (i % 5) * 4), 0],
            opacity: [0.18, 0.55, 0.18],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3.5 + (i % 6),
            repeat: Infinity,
            delay: (i * 0.32) % 4,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
