"use client";
import { motion } from "framer-motion";

interface SectionBgProps {
  color1?: string;
  color2?: string;
  blob1?: { top?: string; bottom?: string; left?: string; right?: string };
  blob2?: { top?: string; bottom?: string; left?: string; right?: string };
  /** subtle=true → reduced opacity/particles for non-hero sections */
  subtle?: boolean;
}

const PARTICLES_FULL = [
  { cx: 8,  cy: 18 }, { cx: 22, cy: 72 }, { cx: 45, cy: 12 },
  { cx: 60, cy: 80 }, { cx: 78, cy: 25 }, { cx: 88, cy: 65 },
  { cx: 35, cy: 50 }, { cx: 55, cy: 38 }, { cx: 92, cy: 42 },
  { cx: 15, cy: 88 }, { cx: 70, cy: 10 }, { cx: 82, cy: 90 },
  { cx: 28, cy: 35 }, { cx: 65, cy: 55 }, { cx: 50, cy: 70 },
];

const PARTICLES_SUBTLE = [
  { cx: 12, cy: 20 }, { cx: 60, cy: 75 }, { cx: 82, cy: 30 },
  { cx: 35, cy: 55 }, { cx: 70, cy: 12 }, { cx: 90, cy: 60 },
];

export default function SectionBg({
  color1 = "#00d4ff",
  color2 = "#7c3aed",
  blob1 = { top: "-15%", right: "-8%" },
  blob2 = { bottom: "-15%", left: "-8%" },
  subtle = false,
}: SectionBgProps) {
  const PARTICLES = subtle ? PARTICLES_SUBTLE : PARTICLES_FULL;
  const gridOpacity = subtle ? 0.018 : 0.042;

  return (
    <div
      style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}
      className="section-bg"
    >
      {/* Grid — backgroundImage on the same element as animate so it scrolls */}
      <motion.div
        style={{
          position: "absolute", inset: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,${gridOpacity}) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,${gridOpacity}) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
        animate={{ backgroundPosition: ["0px 0px", "64px 64px"] }}
        transition={{ duration: subtle ? 22 : 16, repeat: Infinity, ease: "linear" }}
      />

      {/* Blob 1 */}
      <motion.div
        style={{
          position: "absolute",
          width: subtle ? 560 : 700,
          height: subtle ? 560 : 700,
          borderRadius: "50%",
          filter: `blur(${subtle ? 90 : 100}px)`,
          ...blob1,
          background: subtle
            ? `radial-gradient(circle, ${color1}10 0%, transparent 70%)`
            : `radial-gradient(circle, ${color1}28 0%, ${color1}0d 40%, transparent 70%)`,
        }}
        animate={{ scale: [1, subtle ? 1.08 : 1.18, 1], x: [0, subtle ? 14 : 22, 0], y: [0, subtle ? -10 : -18, 0] }}
        transition={{ duration: subtle ? 13 : 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Blob 2 */}
      <motion.div
        style={{
          position: "absolute",
          width: subtle ? 460 : 600,
          height: subtle ? 460 : 600,
          borderRadius: "50%",
          filter: `blur(${subtle ? 80 : 90}px)`,
          ...blob2,
          background: subtle
            ? `radial-gradient(circle, ${color2}0c 0%, transparent 70%)`
            : `radial-gradient(circle, ${color2}22 0%, ${color2}0a 40%, transparent 70%)`,
        }}
        animate={{ scale: [1, subtle ? 1.06 : 1.14, 1], x: [0, subtle ? -10 : -18, 0], y: [0, subtle ? 12 : 20, 0] }}
        transition={{ duration: subtle ? 16 : 12, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      {/* Orbiting centre blob — full mode only */}
      {!subtle && (
        <motion.div
          style={{
            position: "absolute", width: 320, height: 320, borderRadius: "50%",
            filter: "blur(60px)",
            top: "40%", left: "45%",
            background: `radial-gradient(circle, ${color1}15 0%, transparent 65%)`,
          }}
          animate={{ x: [0, 60, -40, 0], y: [0, -30, 50, 0], scale: [1, 1.2, 0.9, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <motion.div key={i}
          style={{
            position: "absolute",
            left: `${p.cx}%`, top: `${p.cy}%`,
            width: i % 3 === 0 ? (subtle ? 3 : 4) : (subtle ? 2 : 3),
            height: i % 3 === 0 ? (subtle ? 3 : 4) : (subtle ? 2 : 3),
            borderRadius: "50%",
            background: i % 2 === 0 ? color1 : color2,
            boxShadow: subtle ? "none" : (i % 2 === 0 ? `0 0 8px ${color1}` : `0 0 8px ${color2}`),
          }}
          animate={{
            y: [0, -(subtle ? 8 : 14) - (i % 5) * (subtle ? 3 : 5), 0],
            opacity: subtle
              ? [0.08, 0.28, 0.08]
              : [0.3, 0.8, 0.3],
            scale: [1, subtle ? 1.3 : 1.6, 1],
          }}
          transition={{
            duration: (subtle ? 4 : 3) + (i % 5),
            repeat: Infinity,
            delay: (i * 0.28) % 3.5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Horizontal scan line */}
      <motion.div
        style={{
          position: "absolute", left: 0, right: 0, height: 1,
          background: subtle
            ? `linear-gradient(90deg, transparent 0%, ${color1}18 50%, transparent 100%)`
            : `linear-gradient(90deg, transparent 0%, ${color1}20 25%, ${color1}50 50%, ${color1}20 75%, transparent 100%)`,
        }}
        animate={{ top: ["-2%", "102%"] }}
        transition={{ duration: subtle ? 12 : 8, repeat: Infinity, ease: "linear", repeatDelay: subtle ? 12 : 6 }}
      />

      {/* Vertical scan line — full mode only */}
      {!subtle && (
        <motion.div
          style={{
            position: "absolute", top: 0, bottom: 0, width: 1.5,
            background: `linear-gradient(180deg, transparent 0%, ${color2}25 30%, ${color2}50 50%, ${color2}25 70%, transparent 100%)`,
          }}
          animate={{ left: ["-2%", "102%"] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear", repeatDelay: 10, delay: 4 }}
        />
      )}
    </div>
  );
}
