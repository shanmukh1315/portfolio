"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { personal } from "@/lib/data";

function useCountUp(target: number, decimals = 0, duration = 1800) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          setVal(parseFloat((target * ease).toFixed(decimals)));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, decimals, duration]);

  return { val, ref };
}

const stats = [
  { target: 4, suffix: "+", label: "Years Experience", decimals: 0, color: "#00d4ff" },
  { target: 3.8, suffix: "", label: "MS GPA at NJIT", decimals: 1, color: "#a78bfa" },
  { target: 10, suffix: "+", label: "Projects Shipped", decimals: 0, color: "#34d399" },
  { target: 90, suffix: "%+", label: "RAG Citation Acc.", decimals: 0, color: "#fb923c" },
];

function StatCard({ stat }: { stat: typeof stats[0] }) {
  const { val, ref } = useCountUp(stat.target, stat.decimals);
  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -6, boxShadow: `0 20px 48px rgba(0,0,0,0.4), 0 0 0 1px ${stat.color}30` }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        padding: "28px 24px", borderRadius: 16, textAlign: "center",
        background: "rgba(255,255,255,0.025)", border: `1px solid ${stat.color}18`,
        cursor: "default", boxShadow: "0 0px 0px rgba(0,0,0,0)",
      }}
    >
      <div style={{
        fontSize: 38, fontWeight: 900, lineHeight: 1, marginBottom: 8,
        color: stat.color, fontVariantNumeric: "tabular-nums",
        textShadow: `0 0 24px ${stat.color}40`,
      }}>
        {val}{stat.suffix}
      </div>
      <div style={{ fontSize: 12.5, color: "#475569", fontWeight: 500, letterSpacing: 0.3 }}>{stat.label}</div>
    </motion.div>
  );
}

const highlights = [
  { label: "MS Data Science", sub: "NJIT · GPA 3.8 · 2024–2026", color: "#00d4ff" },
  { label: "AI/ML Engineer", sub: "RAG · LLMs · Agents · NLP", color: "#a78bfa" },
  { label: "Full-Stack Dev", sub: "FastAPI · React · PostgreSQL", color: "#34d399" },
  { label: "Cloud & DevOps", sub: "AWS · Docker · CI/CD", color: "#fb923c" },
];

export default function About() {
  return (
    <section id="about" style={{ position: "relative", padding: "96px 0", background: "transparent", overflow: "hidden" }}>
      <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }} transition={{ duration: 0.5 }}
          style={{ marginBottom: 56 }}>
          <div style={{ fontSize: 12, color: "#00d4ff", fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", marginBottom: 10 }}>01 — About</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#e2e8f0", letterSpacing: -0.5, lineHeight: 1.15 }}>Who I Am</h2>
          <div style={{ height: 3, width: 48, background: "linear-gradient(90deg, #00d4ff, #7c3aed)", borderRadius: 2, marginTop: 14 }} />
        </motion.div>

        {/* Animated stat counters */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }} transition={{ duration: 0.5 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 56 }} className="stats-grid">
          {stats.map(s => <StatCard key={s.label} stat={s} />)}
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="about-grid">
          {/* Left: text */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.15 }} transition={{ duration: 0.6 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {[
                "I'm a Full-Stack Software Engineer and recent MS Data Science graduate from NJIT (GPA 3.8). I have 4 years of hands-on experience building production-grade systems in Python, FastAPI, React, and cloud infrastructure.",
                "My focus is on AI/ML engineering — retrieval-augmented generation, LLM agents, and data pipelines. I care about systems that actually ship: clean APIs, strong test coverage, and measurable impact.",
                "At Virtusa I optimized C#/ASP.NET Core REST APIs to process 1M+ records in ~3 seconds and cut deployment time 40% via CI/CD. My Medical RAG system achieves 90%+ citation coverage over 47K+ Q&A pairs.",
              ].map((p, i) => (
                <p key={i} style={{ fontSize: 15.5, color: "#64748b", lineHeight: 1.8 }}>{p}</p>
              ))}
            </div>

            <div style={{ marginTop: 28, display: "flex", gap: 10, flexWrap: "wrap" }}>
              {["Python", "FastAPI", "React", "RAG", "LLMs", "Docker", "AWS", "PostgreSQL"].map(t => (
                <motion.span key={t} whileHover={{ scale: 1.06, y: -2 }} style={{
                  padding: "6px 14px", borderRadius: 100, fontSize: 12.5, fontWeight: 500,
                  background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.15)", color: "#67e8f9",
                  cursor: "default",
                }}>{t}</motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right: highlight cards */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.15 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {highlights.map((h, i) => (
                <motion.div key={h.label}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }}
                  whileHover={{ y: -6, boxShadow: `0 16px 40px rgba(0,0,0,0.35), 0 0 0 1px ${h.color}30` }}
                  transition={{ delay: i * 0.08, type: "spring", stiffness: 300, damping: 20 }}
                  style={{
                    padding: "22px 20px", borderRadius: 14,
                    background: "rgba(255,255,255,0.025)", border: `1px solid ${h.color}15`,
                    cursor: "default", boxShadow: "0 0px 0px rgba(0,0,0,0)",
                  }}
                >
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: `${h.color}12`, border: `1px solid ${h.color}25`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: h.color, boxShadow: `0 0 8px ${h.color}80` }} />
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#e2e8f0", marginBottom: 5 }}>{h.label}</div>
                  <div style={{ fontSize: 12, color: "#475569" }}>{h.sub}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ boxShadow: "0 8px 32px rgba(74,222,128,0.1)" }}
              style={{
                marginTop: 12, padding: "18px 20px", borderRadius: 14,
                background: "rgba(74,222,128,0.03)", border: "1px solid rgba(74,222,128,0.12)",
                transition: "all 0.2s",
              }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <span className="dot-glow" style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80", flexShrink: 0 }} />
                <span style={{ fontSize: 12, color: "#4ade80", fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>Available</span>
              </div>
              <p style={{ fontSize: 13.5, color: "#64748b" }}>{personal.status}</p>
              <p style={{ fontSize: 12.5, color: "#334155", marginTop: 4 }}>{personal.location} · {personal.email}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; } .stats-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .stats-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  );
}
