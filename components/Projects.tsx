"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight, ArrowLeft } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

const projects = [
  {
    num: "01", color: "#00d4ff",
    name: "Medical Triage + RAG System",
    type: "AI / RAG Application",
    summary: "Evidence-based medical Q&A assistant with citation-grounded answers and emergency triage.",
    stack: ["Python", "RAG", "ChromaDB", "SentenceTransformers", "Llama-3-8B", "FastAPI", "Streamlit"],
    bullets: [
      "90%+ citation coverage on 50-question evaluation set",
      "Retrieval over 47,441+ MedQuAD Q&A pairs via semantic search",
      "15% citation accuracy improvement through re-ranking pipeline optimization",
      "Emergency detection with urgency scoring and targeted follow-up questions",
    ],
    github: "https://github.com/shanmukh1315/medical-triage-rag",
    demo: null,
  },
  {
    num: "02", color: "#a78bfa",
    name: "Full-Stack FastAPI Calculator",
    type: "Full-Stack Web Application",
    summary: "JWT-authenticated production-grade CRUD app with 96% test coverage and multi-format export.",
    stack: ["FastAPI", "PostgreSQL", "React", "JWT", "Alembic", "Pytest", "Playwright", "Docker"],
    bullets: [
      "~96% test coverage across 194 unit, integration, and E2E tests",
      "JWT authentication with user-scoped CRUD workflows",
      "CSV / JSON / PDF export reducing manual reporting by 50%",
      "Alembic migrations + Docker-compose for reproducible environments",
    ],
    github: "https://github.com/shanmukh1315/fastapi_calculator",
    demo: null,
  },
  {
    num: "03", color: "#34d399",
    name: "Full-Stack Banking Web App",
    type: "Full-Stack Web Application",
    summary: "Role-based banking platform with audit-trail transaction management and workflow automation.",
    stack: ["Flask", "Python", "SQL", "HTML/CSS", "JavaScript"],
    bullets: [
      "Role-based admin and customer access control",
      "Full transaction audit trail with traceable history",
      "35% improvement in end-to-end transaction processing time",
      "50% reduction in manual effort through workflow automation",
    ],
    github: "https://github.com/shanmukh1315/Full-Stack-Bank-Project",
    demo: null,
  },
  {
    num: "04", color: "#fb923c",
    name: "AutonomIQ — Trustless DaaS",
    type: "Blockchain / Web3",
    summary: "Trustless pay-for-data system with smart contract escrow, USDC payments, and on-chain verification.",
    stack: ["Solidity", "Hardhat", "Python", "React", "Web3.js", "IPFS", "USDC"],
    bullets: [
      "Smart contract escrow with USDC payments on Arc Testnet",
      "Provider agent posts content hash on-chain for verifiability",
      "Three-party dispute resolution (client · provider · arbiter)",
      "Supports analytics bundles, IoT feeds, and research datasets",
    ],
    github: "https://github.com/shanmukh1315/autonomiq-daas",
    demo: null,
  },
  {
    num: "05", color: "#60a5fa",
    name: "Twitter Sentiment Analysis",
    type: "NLP / Data Science",
    summary: "End-to-end NLP pipeline for tweet sentiment classification with preprocessing and benchmarking.",
    stack: ["Python", "NLTK", "Scikit-learn", "Pandas", "Jupyter"],
    bullets: [
      "Full text preprocessing and feature engineering pipeline",
      "Multiple classifier benchmarks with performance comparison",
      "Visualized sentiment distributions and trends",
      "Demonstrates end-to-end NLP from raw tweets to actionable metrics",
    ],
    github: "https://github.com/shanmukh1315/Twitter-Sentiment-Analysis",
    demo: null,
  },
];


export default function Projects() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (d: number) => { setDir(d); setIdx(i => (i + d + projects.length) % projects.length); };
  const p = projects[idx];

  return (
    <section id="projects" style={{ position: "relative", padding: "96px 0", background: "transparent", overflow: "hidden" }}>
      <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }} transition={{ duration: 0.5 }}
          style={{ marginBottom: 56, display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontSize: 12, color: "#00d4ff", fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", marginBottom: 10 }}>03 — Projects</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#e2e8f0", letterSpacing: -0.5 }}>Featured Work</h2>
            <div style={{ height: 3, width: 48, background: "linear-gradient(90deg, #00d4ff, #7c3aed)", borderRadius: 2, marginTop: 14 }} />
          </div>
          {/* Nav arrows */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 13, color: "#334155", marginRight: 4 }}>{idx + 1} / {projects.length}</span>
            <button onClick={() => go(-1)} style={{
              width: 40, height: 40, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center",
              background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "#94a3b8",
              cursor: "pointer", transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "#e2e8f0"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.color = "#94a3b8"; }}
            ><ArrowLeft size={16} /></button>
            <button onClick={() => go(1)} style={{
              width: 40, height: 40, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center",
              background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "#94a3b8",
              cursor: "pointer", transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "#e2e8f0"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.color = "#94a3b8"; }}
            ><ArrowRight size={16} /></button>
          </div>
        </motion.div>

        {/* Project card */}
        <AnimatePresence mode="wait">
          <motion.div key={idx}
            initial={{ opacity: 0, x: dir * 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -dir * 40 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            whileHover={{ y: -6, boxShadow: `0 24px 56px rgba(0,0,0,0.45), 0 0 0 1px ${p.color}35` }}
            style={{
              padding: "40px", borderRadius: 20,
              background: "rgba(255,255,255,0.025)", border: `1px solid ${p.color}20`,
              boxShadow: `0 0 60px ${p.color}08`,
              cursor: "default",
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }} className="proj-inner">
              {/* Left */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                  <span style={{ fontSize: 48, fontWeight: 900, color: `${p.color}22`, lineHeight: 1, letterSpacing: -2 }}>{p.num}</span>
                  <div>
                    <h3 style={{ fontSize: 22, fontWeight: 800, color: "#e2e8f0", lineHeight: 1.2, marginBottom: 4 }}>{p.name}</h3>
                    <span style={{ fontSize: 12, color: p.color, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>{p.type}</span>
                  </div>
                </div>

                <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.75, marginBottom: 24 }}>{p.summary}</p>

                {/* Tech stack */}
                <div style={{ marginBottom: 28 }}>
                  <div style={{ fontSize: 11, color: "#475569", fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>Tech Stack</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {p.stack.map(s => (
                      <span key={s} style={{
                        padding: "5px 12px", borderRadius: 100, fontSize: 12.5, fontWeight: 500,
                        background: `${p.color}0d`, border: `1px solid ${p.color}25`, color: p.color,
                      }}>{s}</span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div style={{ display: "flex", gap: 12 }}>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" style={{
                    display: "inline-flex", alignItems: "center", gap: 7,
                    padding: "9px 18px", borderRadius: 9, fontSize: 13, fontWeight: 600,
                    background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                    color: "#94a3b8", textDecoration: "none", transition: "all 0.2s",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.color = "#e2e8f0"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "#94a3b8"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
                  >
                    <GithubIcon size={14} /> GitHub
                  </a>
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" style={{
                      display: "inline-flex", alignItems: "center", gap: 7,
                      padding: "9px 18px", borderRadius: 9, fontSize: 13, fontWeight: 600,
                      background: `${p.color}12`, border: `1px solid ${p.color}30`, color: p.color, textDecoration: "none",
                    }}><ExternalLink size={13} /> Live Demo</a>
                  )}
                </div>
              </div>

              {/* Right: feature bullets */}
              <div>
                <div style={{ fontSize: 11, color: "#475569", fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 18 }}>Key Highlights</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {p.bullets.map((b, i) => (
                    <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: p.color, flexShrink: 0, marginTop: 7, boxShadow: `0 0 8px ${p.color}60` }} />
                      <span style={{ fontSize: 14.5, color: "#94a3b8", lineHeight: 1.65 }}>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dot indicators */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 28 }}>
          {projects.map((proj, i) => (
            <button key={i} onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i); }} style={{
              width: i === idx ? 24 : 8, height: 8, borderRadius: 100,
              background: i === idx ? p.color : "rgba(255,255,255,0.12)",
              border: "none", cursor: "pointer", transition: "all 0.25s",
              padding: 0,
            }} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .proj-inner { grid-template-columns: 1fr !important; gap: 24px !important; } }
      `}</style>
    </section>
  );
}
