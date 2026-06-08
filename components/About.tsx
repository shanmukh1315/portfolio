"use client";
import { motion } from "framer-motion";
import { personal } from "@/lib/data";

const highlights = [
  { label: "MS Data Science", sub: "NJIT · GPA 3.8 · 2024–2026" },
  { label: "AI/ML Engineer", sub: "RAG · LLMs · Agents · NLP" },
  { label: "Full-Stack Dev", sub: "FastAPI · React · PostgreSQL" },
  { label: "Cloud & DevOps", sub: "AWS · Docker · CI/CD" },
];

function Bg() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      <motion.div style={{
        position: "absolute", width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)",
        top: "-10%", right: "0%",
      }} animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
        backgroundSize: "72px 72px",
      }} />
    </div>
  );
}

export default function About() {
  return (
    <section id="about" style={{ position: "relative", padding: "96px 0", background: "#080d1a", overflow: "hidden" }}>
      <Bg />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        {/* Section label */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ marginBottom: 56 }}>
          <div style={{ fontSize: 12, color: "#00d4ff", fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", marginBottom: 10 }}>01 — About</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#e2e8f0", letterSpacing: -0.5, lineHeight: 1.15 }}>
            Who I Am
          </h2>
          <div style={{ height: 3, width: 48, background: "linear-gradient(90deg, #00d4ff, #7c3aed)", borderRadius: 2, marginTop: 14 }} />
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="about-grid">
          {/* Left: text */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {[
                "I'm a Full-Stack Software Engineer and recent MS Data Science graduate from NJIT (GPA 3.8). I have 4 years of hands-on experience building production-grade systems in Python, FastAPI, React, and cloud infrastructure.",
                "My focus is on AI/ML engineering — retrieval-augmented generation, LLM agents, and data pipelines. I care about systems that actually ship: clean APIs, strong test coverage, and measurable impact.",
                "At Virtusa I optimized C#/ASP.NET Core REST APIs to process 1M+ records in ~3 seconds and cut deployment time 40% via CI/CD. My Medical RAG system achieves 90%+ citation coverage over 47K+ Q&A pairs.",
              ].map((p, i) => (
                <p key={i} style={{ fontSize: 15.5, color: "#64748b", lineHeight: 1.8 }}>{p}</p>
              ))}
            </div>

            <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
              {["Python", "FastAPI", "React", "RAG", "LLMs", "Docker", "AWS", "PostgreSQL"].map(t => (
                <span key={t} style={{
                  padding: "5px 13px", borderRadius: 100, fontSize: 12.5, fontWeight: 500,
                  background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.15)", color: "#67e8f9",
                }}>{t}</span>
              ))}
            </div>
          </motion.div>

          {/* Right: highlights */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {highlights.map((h, i) => (
                <motion.div key={h.label}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(0,0,0,0.35), 0 0 0 1px rgba(0,212,255,0.2)" }}
                  transition={{ delay: i * 0.08, type: "spring", stiffness: 300, damping: 20 }}
                  style={{
                    padding: "22px 20px", borderRadius: 14,
                    background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
                    cursor: "default",
                  }}
                >
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#e2e8f0", marginBottom: 6 }}>{h.label}</div>
                  <div style={{ fontSize: 12.5, color: "#475569" }}>{h.sub}</div>
                </motion.div>
              ))}
            </div>

            {/* Status card */}
            <div style={{
              marginTop: 14, padding: "18px 20px", borderRadius: 14,
              background: "rgba(0,212,255,0.04)", border: "1px solid rgba(0,212,255,0.12)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                <span className="dot-glow" style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80" }} />
                <span style={{ fontSize: 12, color: "#00d4ff", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>Available</span>
              </div>
              <p style={{ fontSize: 13.5, color: "#64748b" }}>{personal.status}</p>
              <p style={{ fontSize: 12.5, color: "#334155", marginTop: 4 }}>{personal.location} · {personal.email}</p>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
