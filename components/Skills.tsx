"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Languages",
    short: "Languages",
    color: "#00d4ff",
    skills: ["Python", "SQL", "Java", "JavaScript", "TypeScript", "C/C++", "C#", "HTML/CSS"],
  },
  {
    title: "ML / AI",
    short: "ML / AI",
    color: "#a78bfa",
    skills: [
      "Deep Learning", "NLP", "Transformers (BERT, GPT, CLIP)", "TensorFlow", "PyTorch",
      "Scikit-learn", "LightGBM", "XGBoost", "RAG", "Embeddings", "LLM Agents",
      "LangChain", "ChromaDB", "OpenAI API", "Prompt Engineering",
      "pandas", "NumPy", "Matplotlib", "Seaborn", "Statistical Analysis", "Predictive Modeling",
    ],
  },
  {
    title: "Frameworks",
    short: "Frameworks",
    color: "#34d399",
    skills: [
      "FastAPI", "Flask", "Django", "Spring Boot", "Node.js / Express",
      "ASP.NET Core", "Next.js", "Angular", "REST APIs", "JWT",
      "Pytest", "JUnit",
    ],
  },
  {
    title: "Data & DBs",
    short: "Data & DBs",
    color: "#f472b6",
    skills: [
      "PostgreSQL", "MySQL", "Oracle", "MS SQL", "MongoDB", "Redis",
      "Kafka", "Apache Spark", "Airflow", "Pub/Sub",
      "ETL", "Data Warehousing", "Data Pipelines",
    ],
  },
  {
    title: "Cloud & DevOps",
    short: "Cloud",
    color: "#fb923c",
    skills: [
      "AWS", "Azure", "GCP",
      "Docker", "Kubernetes", "GitHub Actions", "Jenkins", "Azure DevOps",
      "Terraform", "Ansible", "Tekton", "Packer", "CI/CD", "Git",
    ],
  },
  {
    title: "Frontend & BI",
    short: "Frontend",
    color: "#60a5fa",
    skills: [
      "React", "Next.js", "TypeScript", "Angular", "Tailwind CSS",
      "Power BI", "Tableau",
      "Postman", "Splunk", "JIRA", "Git",
    ],
  },
];

export default function Skills() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const cat = categories[active];

  return (
    <section id="skills" style={{ position: "relative", padding: "96px 0", background: "transparent", overflow: "hidden" }}>
      <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }} transition={{ duration: 0.5 }}
          style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 12, color: "#00d4ff", fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", marginBottom: 10 }}>05 — Skills</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#e2e8f0", letterSpacing: -0.5 }}>
            Technologies &amp; Tools
          </h2>
          <div style={{ height: 3, width: 48, background: "linear-gradient(90deg, #00d4ff, #7c3aed)", borderRadius: 2, marginTop: 14 }} />
        </motion.div>

        {/* Sliding tab bar */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }} transition={{ duration: 0.45, delay: 0.1 }}
          style={{ marginBottom: 40 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 4, padding: "5px",
            borderRadius: 14, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
            flexWrap: "wrap",
          }}>
            {categories.map((c, i) => (
              <button
                key={c.title}
                ref={el => { tabRefs.current[i] = el; }}
                onClick={() => setActive(i)}
                style={{
                  position: "relative", padding: "8px 18px", borderRadius: 10, border: "none",
                  fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "color 0.2s",
                  background: "transparent",
                  color: active === i ? "#0a0f1e" : "#64748b",
                  zIndex: 1,
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {active === i && (
                  <motion.span
                    layoutId="tab-indicator"
                    style={{
                      position: "absolute", inset: 0, borderRadius: 10, zIndex: -1,
                      background: `linear-gradient(135deg, ${c.color}, ${c.color}cc)`,
                      boxShadow: `0 4px 16px ${c.color}40`,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {hovered === i && active !== i && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                      position: "absolute", inset: 0, borderRadius: 10, zIndex: -1,
                      background: "rgba(255,255,255,0.05)",
                    }}
                  />
                )}
                <span style={{ position: "relative" }}>{c.short}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills panel */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{
            padding: "32px", borderRadius: 20,
            background: "rgba(255,255,255,0.025)", border: `1px solid ${cat.color}22`,
            boxShadow: `0 0 60px ${cat.color}08`,
            minHeight: 180,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: cat.color, boxShadow: `0 0 14px ${cat.color}80` }} />
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e2e8f0" }}>{cat.title}</h3>
            <span style={{ fontSize: 12, color: cat.color, fontWeight: 600, background: `${cat.color}15`, border: `1px solid ${cat.color}30`, padding: "2px 10px", borderRadius: 100 }}>
              {cat.skills.length} skills
            </span>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {cat.skills.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.03, type: "spring", stiffness: 300, damping: 20 }}
                whileHover={{ scale: 1.06, y: -2 }}
                style={{
                  padding: "7px 16px", borderRadius: 100, fontSize: 13, fontWeight: 500,
                  background: `${cat.color}0d`, border: `1px solid ${cat.color}30`, color: cat.color,
                  cursor: "default", transition: "border-color 0.15s",
                  boxShadow: `0 2px 8px ${cat.color}10`,
                }}
              >{s}</motion.span>
            ))}
          </div>
        </motion.div>

        {/* Category overview grid */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.5, delay: 0.2 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 12, marginTop: 20 }} className="skills-mini-grid">
          {categories.map((c, i) => (
            <button key={c.title} onClick={() => setActive(i)}
              style={{
                padding: "14px 10px", borderRadius: 12, border: `1px solid ${active === i ? c.color + "50" : "rgba(255,255,255,0.06)"}`,
                background: active === i ? `${c.color}0d` : "rgba(255,255,255,0.02)",
                cursor: "pointer", transition: "all 0.2s", textAlign: "center",
              }}
              onMouseEnter={e => { if (active !== i) { e.currentTarget.style.borderColor = c.color + "30"; e.currentTarget.style.background = `${c.color}06`; } }}
              onMouseLeave={e => { if (active !== i) { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.background = "rgba(255,255,255,0.02)"; } }}
            >
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: c.color, margin: "0 auto 8px", boxShadow: active === i ? `0 0 10px ${c.color}70` : "none" }} />
              <div style={{ fontSize: 11, fontWeight: 600, color: active === i ? c.color : "#475569", letterSpacing: 0.3 }}>{c.short}</div>
              <div style={{ fontSize: 10, color: "#334155", marginTop: 3 }}>{c.skills.length}</div>
            </button>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) { .skills-mini-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 480px) { .skills-mini-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  );
}
