"use client";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Languages",
    color: "#00d4ff",
    skills: ["Python", "SQL", "Java", "JavaScript", "TypeScript", "C/C++", "C#", "HTML/CSS"],
  },
  {
    title: "ML / AI & Data Science",
    color: "#a78bfa",
    skills: [
      "Deep Learning", "NLP", "Transformers (BERT, GPT, CLIP)", "TensorFlow", "PyTorch",
      "Scikit-learn", "LightGBM", "XGBoost", "RAG", "Embeddings", "LLM Agents",
      "LangChain", "ChromaDB", "OpenAI API", "Prompt Engineering",
      "pandas", "NumPy", "Matplotlib", "Seaborn", "Statistical Analysis", "Predictive Modeling",
    ],
  },
  {
    title: "Frameworks & Testing",
    color: "#34d399",
    skills: [
      "FastAPI", "Flask", "Django", "Spring Boot", "Node.js / Express",
      "ASP.NET Core", "Next.js", "Angular", "REST APIs", "JWT",
      "Pytest", "JUnit",
    ],
  },
  {
    title: "Data Engineering & Databases",
    color: "#f472b6",
    skills: [
      "PostgreSQL", "MySQL", "Oracle", "MS SQL", "MongoDB", "Redis",
      "Kafka", "Apache Spark", "Airflow", "Pub/Sub",
      "ETL", "Data Warehousing", "Data Pipelines",
    ],
  },
  {
    title: "Cloud & MLOps / DevOps",
    color: "#fb923c",
    skills: [
      "AWS", "Azure", "GCP",
      "Docker", "Kubernetes", "GitHub Actions", "Jenkins", "Azure DevOps",
      "Terraform", "Ansible", "Tekton", "Packer", "CI/CD", "Git",
    ],
  },
  {
    title: "Frontend & Tools / BI",
    color: "#60a5fa",
    skills: [
      "React", "Next.js", "TypeScript", "Angular", "Tailwind CSS",
      "Power BI", "Tableau",
      "Postman", "Splunk", "JIRA", "Git",
    ],
  },
];


export default function Skills() {
  return (
    <section id="skills" style={{ position: "relative", padding: "96px 0", background: "transparent", overflow: "hidden" }}>
      <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }} transition={{ duration: 0.5 }}
          style={{ marginBottom: 56 }}>
          <div style={{ fontSize: 12, color: "#00d4ff", fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", marginBottom: 10 }}>04 — Skills</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#e2e8f0", letterSpacing: -0.5 }}>
            Technologies &amp; Tools
          </h2>
          <div style={{ height: 3, width: 48, background: "linear-gradient(90deg, #00d4ff, #7c3aed)", borderRadius: 2, marginTop: 14 }} />
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }} className="skills-grid">
          {categories.map((cat, i) => (
            <motion.div key={cat.title}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }}
              whileHover={{ y: -8, boxShadow: `0 20px 48px rgba(0,0,0,0.4), 0 0 0 1px ${cat.color}30` }}
              transition={{ duration: 0.45, delay: i * 0.07, type: "spring", stiffness: 300, damping: 20 }}
              style={{
                padding: "26px 24px", borderRadius: 16,
                background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)",
                cursor: "default",
              }}
            >
              {/* Title with color dot */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: cat.color, flexShrink: 0, boxShadow: `0 0 10px ${cat.color}60` }} />
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#e2e8f0" }}>{cat.title}</h3>
              </div>
              {/* Pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {cat.skills.map(s => (
                  <span key={s} style={{
                    padding: "5px 12px", borderRadius: 100, fontSize: 12.5, fontWeight: 500,
                    background: `${cat.color}0d`, border: `1px solid ${cat.color}25`, color: cat.color,
                    transition: "all 0.15s",
                  }}>{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .skills-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px)  { .skills-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
