"use client";
import { useRef, useState } from "react";
import { motion, MotionProps } from "framer-motion";

interface GlowCardProps extends MotionProps {
  color?: string;
  glowSize?: number;
  glowOpacity?: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export default function GlowCard({
  color = "#00d4ff",
  glowSize = 340,
  glowOpacity = 0.13,
  children,
  style,
  className,
  ...motionProps
}: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: -999, y: -999 });
  const [visible, setVisible] = useState(false);

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const rect = ref.current!.getBoundingClientRect();
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => { setVisible(false); setPos({ x: -999, y: -999 }); }}
      style={{ position: "relative", overflow: "hidden", ...style }}
      className={className}
      {...motionProps}
    >
      {/* Mouse-follow spotlight */}
      <div style={{
        position: "absolute",
        width: glowSize,
        height: glowSize,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${color} 0%, transparent 65%)`,
        opacity: visible ? glowOpacity : 0,
        left: pos.x,
        top: pos.y,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        transition: "opacity 0.3s ease",
        zIndex: 0,
      }} />
      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </motion.div>
  );
}
