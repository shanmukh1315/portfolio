"use client";
import { useEffect, useRef, useState } from "react";

interface BlurTextProps {
  text: string;
  style?: React.CSSProperties;
  wordStyle?: React.CSSProperties;
  delay?: number;
  stagger?: number;
}

export default function BlurText({ text, style, wordStyle, delay = 0, stagger = 80 }: BlurTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <span ref={ref} style={{ display: "inline", ...style }}>
      {words.map((word, i) => (
        <span key={i} style={{ display: "inline-block", marginRight: "0.28em" }}>
          <span
            style={{
              display: "inline-block",
              opacity: visible ? 1 : 0,
              filter: visible ? "blur(0px)" : "blur(10px)",
              transform: visible ? "translateY(0)" : "translateY(8px)",
              transition: `opacity 0.55s ease ${delay + i * stagger}ms, filter 0.55s ease ${delay + i * stagger}ms, transform 0.55s ease ${delay + i * stagger}ms`,
              ...wordStyle,
            }}
          >{word}</span>
        </span>
      ))}
    </span>
  );
}
