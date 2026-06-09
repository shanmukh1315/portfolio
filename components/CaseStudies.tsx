"use client";
import { motion } from "framer-motion";
import { GithubIcon } from "@/components/Icons";

const cases = [
  {
    title: "Medical Triage RAG System",
    problem: "Clinicians need fast, cited answers from a massive medical Q&A corpus without hallucination.",
    input: "47,000+ Medical Q&A pairs (MedQuAD dataset)",
    approach: "Retrieval-Augmented Generation with semantic chunking, dense embeddings, and re-ranking",
    model: "GPT-4 + ChromaDB vector store + sentence-transformers bi-encoder",
    tools: ["Python", "FastAPI", "ChromaDB", "OpenAI", "LangChain", "Docker"],
    result: "90%+ citation coverage, sub-2s response latency, deployed as REST API",
    github: "https://github.com/shanmukh1315/medical-triage-rag",
    color: "#00d4ff",
    recognition: null,
  },
  {
    title: "Twitter Sentiment Analysis",
    problem: "Classify large volumes of tweets into positive / negative / neutral sentiment at scale.",
    input: "1.6M tweets (Sentiment140 benchmark dataset)",
    approach: "NLP pipeline: text cleaning → TF-IDF / word embeddings → classification with model comparison",
    model: "Logistic Regression, Naive Bayes, LSTM — final: fine-tuned DistilBERT",
    tools: ["Python", "pandas", "NLTK", "scikit-learn", "PyTorch", "Jupyter"],
    result: "87%+ accuracy on held-out test set; full EDA + model comparison notebook published",
    github: "https://github.com/shanmukh1315/Twitter-Sentiment-Analysis",
    color: "#a78bfa",
    recognition: null,
  },
  {
    title: "Fraud Detection System",
    problem: "Identify fraudulent financial transactions in real time with high precision and low false-positive rate.",
    input: "Imbalanced tabular transaction dataset (Hack-The-Mountain hackathon)",
    approach: "Feature engineering on transaction metadata + SMOTE oversampling + gradient boosting ensemble",
    model: "LightGBM with custom threshold tuning; deployed via AWS Lambda",
    tools: ["Python", "LightGBM", "scikit-learn", "AWS", "pandas", "SMOTE"],
    result: "94%+ AUC; real-time inference endpoint on AWS",
    github: "https://github.com/shanmukh1315",
    color: "#34d399",
    recognition: "🏆 3rd Place — Hack-The-Mountain",
  },
  {
    title: "Blockchain Identity Verification (DaaS)",
    problem: "Centralised identity systems are slow and vulnerable to single points of failure.",
    input: "User credential data; Ethereum smart contracts for on-chain anchoring",
    approach: "Decentralised identity anchoring via smart contracts + off-chain encrypted attribute storage",
    model: "Solidity smart contracts + cryptographic hash verification pipeline",
    tools: ["Solidity", "Ethereum", "Python", "FastAPI", "Cryptography", "Docker"],
    result: "35% faster verification vs centralised baseline; finalist at ENCRYPT 2022",
    github: "https://github.com/shanmukh1315",
    color: "#fb923c",
    recognition: "🔐 Finalist — ENCRYPT 2022",
  },
  {
    title: "FastAPI Calculator Service",
    problem: "Build a production-grade REST API with CI/CD, full test coverage, and containerised deployment.",
    input: "HTTP arithmetic requests with validation and error handling",
    approach: "Domain-driven FastAPI service with pytest test suite, GitHub Actions CI pipeline, Docker packaging",
    model: "N/A — MLOps & software engineering showcase",
    tools: ["Python", "FastAPI", "pytest", "Docker", "GitHub Actions", "PostgreSQL"],
    result: "96% test coverage; fully automated CI/CD; ~3s for 1M+ record batch operations",
    github: "https://github.com/shanmukh1315/enhanced-calculator",
    color: "#f472b6",
    recognition: null,
  },
];

function Bg() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      <motion.div style={{
        position: "absolute", width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)",
        top: "0%", right: "-10%",
      }} animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section id="case-studies" style={{ position: "relative", padding: "96px 0", background: "#080d1a", overflow: "hidden" }}>
      <Bg />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }} transition={{ duration: 0.5 }}
          style={{ marginBottom: 56 }}>
          <div style={{ fontSize: 12, color: "#00d4ff", fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", marginBottom: 10 }}>Case Studies</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#e2e8f0", letterSpacing: -0.5 }}>
            Featured Data &amp; AI Case Studies
          </h2>
          <div style={{ height: 3, width: 48, background: "linear-gradient(90deg, #00d4ff, #7c3aed)", borderRadius: 2, marginTop: 14 }} />
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {cases.map((c, i) => (
            <motion.div key={c.title}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }}
              whileHover={{ y: -5, boxShadow: `0 20px 52px rgba(0,0,0,0.45), 0 0 0 1px ${c.color}22` }}
              transition={{ duration: 0.5, delay: i * 0.06, type: "spring", stiffness: 300, damping: 20 }}
              style={{
                padding: "28px 30px", borderRadius: 16,
                background: "rgba(255,255,255,0.022)", border: "1px solid rgba(255,255,255,0.06)",
                borderLeft: `3px solid ${c.color}`,
                cursor: "default",
              }}
            >
              {/* Header */}
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, marginBottom: 20 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
                    <h3 style={{ fontSize: 17, fontWeight: 800, color: "#e2e8f0", margin: 0 }}>{c.title}</h3>
                    {c.recognition && (
                      <span style={{
                        padding: "3px 10px", borderRadius: 100, fontSize: 11.5, fontWeight: 600,
                        background: "rgba(250,204,21,0.08)", border: "1px solid rgba(250,204,21,0.2)", color: "#fbbf24",
                        whiteSpace: "nowrap",
                      }}>{c.recognition}</span>
                    )}
                  </div>
                  <p style={{ fontSize: 13.5, color: "#475569", lineHeight: 1.6, margin: 0 }}>{c.problem}</p>
                </div>
                <a href={c.github} target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-flex", alignItems: "center", gap: 6, padding: "7px 13px",
                  borderRadius: 8, fontSize: 12, fontWeight: 600, flexShrink: 0,
                  background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                  color: "#64748b", textDecoration: "none", transition: "all 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.color = "#e2e8f0"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "#64748b"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
                ><GithubIcon size={12} /> GitHub</a>
              </div>

              {/* 4-column details */}
              <div className="case-details" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18, marginBottom: 18 }}>
                {[
                  { label: "Dataset / Input", val: c.input },
                  { label: "Approach", val: c.approach },
                  { label: "Model / System", val: c.model },
                  { label: "Result", val: c.result },
                ].map(d => (
                  <div key={d.label}>
                    <div style={{ fontSize: 10, color: "#334155", fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 5 }}>{d.label}</div>
                    <div style={{ fontSize: 12.5, color: "#64748b", lineHeight: 1.6 }}>{d.val}</div>
                  </div>
                ))}
              </div>

              {/* Tools */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {c.tools.map(t => (
                  <span key={t} style={{
                    padding: "4px 11px", borderRadius: 100, fontSize: 11.5, fontWeight: 500,
                    background: `${c.color}0d`, border: `1px solid ${c.color}22`, color: c.color,
                  }}>{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px)  { .case-details { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px)  { .case-details { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
