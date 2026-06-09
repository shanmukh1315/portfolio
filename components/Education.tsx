"use client";
import { motion } from "framer-motion";

const edu = [
  {
    degree: "M.S. Data Science",
    school: "New Jersey Institute of Technology",
    location: "Newark, NJ",
    period: "Aug 2024 – May 2026",
    gpa: "3.8 / 4.0",
    color: "#00d4ff",
    tags: ["Machine Learning", "Data Engineering", "AI Systems", "Research"],
    desc: "Graduate study focused on data systems, machine learning, and analytics alongside backend, full-stack, and AI software development.",
  },
  {
    degree: "B.Tech. Computer Science & Engineering",
    school: "Gayatri Vidya Parishad College (Autonomous)",
    location: "India",
    period: "Jul 2020 – Jul 2024",
    gpa: "3.3 / 4.0",
    color: "#a78bfa",
    tags: ["Software Engineering", "Databases", "System Design", "IEEE CS Lead"],
    desc: "Built a strong foundation in software engineering, databases, and system design. Served as IEEE CS Organizing Lead; placed in hackathons.",
  },
];



export default function Education() {
  return (
    <section id="education" style={{ position: "relative", padding: "96px 0", background: "transparent", overflow: "hidden" }}>
      <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }} transition={{ duration: 0.5 }}
          style={{ marginBottom: 56 }}>
          <div style={{ fontSize: 12, color: "#00d4ff", fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", marginBottom: 10 }}>05 — Education</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#e2e8f0", letterSpacing: -0.5 }}>Education</h2>
          <div style={{ height: 3, width: 48, background: "linear-gradient(90deg, #00d4ff, #7c3aed)", borderRadius: 2, marginTop: 14 }} />
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 36 }} className="edu-grid">
          {edu.map((e, i) => (
            <motion.div key={e.degree}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }}
              whileHover={{ y: -8, boxShadow: `0 20px 48px rgba(0,0,0,0.4), 0 0 0 1px ${e.color}35` }}
              transition={{ duration: 0.5, delay: i * 0.1, type: "spring", stiffness: 300, damping: 20 }}
              style={{
                padding: "32px 28px", borderRadius: 18,
                background: "rgba(255,255,255,0.025)", border: `1px solid ${e.color}18`,
                cursor: "default",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 16 }}>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 800, color: "#e2e8f0", marginBottom: 5, lineHeight: 1.3 }}>{e.degree}</h3>
                  <p style={{ fontSize: 14, color: e.color, fontWeight: 600, marginBottom: 3 }}>{e.school}</p>
                  <p style={{ fontSize: 12.5, color: "#475569" }}>{e.location}</p>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontSize: 12, color: "#334155", fontFamily: "monospace", marginBottom: 4 }}>{e.period}</div>
                  <div style={{
                    padding: "3px 10px", borderRadius: 100, fontSize: 12, fontWeight: 700,
                    background: `${e.color}12`, border: `1px solid ${e.color}25`, color: e.color,
                    display: "inline-block",
                  }}>GPA {e.gpa}</div>
                </div>
              </div>

              <p style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.7, marginBottom: 16 }}>{e.desc}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {e.tags.map(t => (
                  <span key={t} style={{
                    padding: "4px 10px", borderRadius: 100, fontSize: 11.5, fontWeight: 500,
                    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", color: "#475569",
                  }}>{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }} transition={{ duration: 0.5 }}>
          <p style={{ fontSize: 11, color: "#334155", fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 14 }}>Certifications</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              { name: "AWS ML Foundations", icon: "☁️" },
              { name: "AWS Cloud Foundations", icon: "☁️" },
              { name: "AWS Data Analytics", icon: "☁️" },
              { name: "Research Publication — IoT & Education", icon: "📄" },
            ].map(cert => (
              <div key={cert.name} style={{
                display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 10,
                background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)",
                fontSize: 13, color: "#64748b",
              }}>
                <span>{cert.icon}</span>{cert.name}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) { .edu-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
