"use client";
import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const edu = [
  {
    degree: "M.S. Data Science",
    school: "New Jersey Institute of Technology",
    location: "Newark, NJ",
    period: "Aug 2024 – May 2026",
    gpa: "3.8 / 4.0",
    color: "#00d4ff",
    icon: GraduationCap,
    tags: ["Machine Learning", "Data Engineering", "AI Systems", "Research"],
    coursework: ["Deep Learning", "Big Data", "NLP", "Statistical ML", "Data Mining"],
    desc: "Graduate study focused on data systems, machine learning, and analytics alongside backend, full-stack, and AI software development.",
  },
  {
    degree: "B.Tech. Computer Science & Engineering",
    school: "Gayatri Vidya Parishad College",
    location: "Visakhapatnam, India",
    period: "Jul 2020 – Jul 2024",
    gpa: "3.3 / 4.0",
    color: "#a78bfa",
    icon: GraduationCap,
    tags: ["Software Engineering", "Databases", "System Design", "IEEE CS Lead"],
    coursework: ["Data Structures", "OS", "DBMS", "Computer Networks", "Algorithms"],
    desc: "Built a strong foundation in software engineering, databases, and system design. Served as IEEE CS Organizing Lead; placed in hackathons.",
  },
];

const certs = [
  { name: "AWS ML Foundations", color: "#fb923c" },
  { name: "AWS Cloud Foundations", color: "#fb923c" },
  { name: "AWS Data Analytics", color: "#fb923c" },
  { name: "Research Publication — IoT & Education", color: "#34d399" },
];

export default function Education() {
  return (
    <section id="education" style={{ position: "relative", padding: "96px 0", background: "transparent", overflow: "hidden" }}>
      <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }} transition={{ duration: 0.5 }}
          style={{ marginBottom: 56 }}>
          <div style={{ fontSize: 12, color: "#00d4ff", fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", marginBottom: 10 }}>03 — Education</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#e2e8f0", letterSpacing: -0.5 }}>Education</h2>
          <div style={{ height: 3, width: 48, background: "linear-gradient(90deg, #00d4ff, #7c3aed)", borderRadius: 2, marginTop: 14 }} />
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 40 }} className="edu-grid">
          {edu.map((e, i) => (
            <motion.div key={e.degree}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }}
              whileHover={{ y: -8, boxShadow: `0 24px 56px rgba(0,0,0,0.45), 0 0 0 1px ${e.color}35` }}
              transition={{ duration: 0.5, delay: i * 0.1, type: "spring", stiffness: 300, damping: 20 }}
              style={{
                borderRadius: 20, overflow: "hidden",
                background: "rgba(255,255,255,0.025)", border: `1px solid ${e.color}18`,
                cursor: "default", boxShadow: "0 0px 0px rgba(0,0,0,0)",
              }}
            >
              {/* Colored top bar */}
              <div style={{ height: 4, background: `linear-gradient(90deg, ${e.color}, ${e.color}60)` }} />

              <div style={{ padding: "28px" }}>
                {/* Header row */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 18 }}>
                  <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                      background: `${e.color}12`, border: `1px solid ${e.color}25`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <e.icon size={20} color={e.color} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: 17, fontWeight: 800, color: "#e2e8f0", marginBottom: 4, lineHeight: 1.3 }}>{e.degree}</h3>
                      <p style={{ fontSize: 13.5, color: e.color, fontWeight: 600, marginBottom: 2 }}>{e.school}</p>
                      <p style={{ fontSize: 12, color: "#475569" }}>{e.location}</p>
                    </div>
                  </div>
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <div style={{
                      fontSize: 20, fontWeight: 900, color: e.color,
                      textShadow: `0 0 20px ${e.color}50`, marginBottom: 3,
                    }}>GPA {e.gpa.split(" / ")[0]}</div>
                    <div style={{ fontSize: 10, color: "#334155", fontFamily: "monospace" }}>{e.period}</div>
                  </div>
                </div>

                <p style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.75, marginBottom: 16 }}>{e.desc}</p>

                {/* Coursework */}
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontSize: 10, color: "#334155", fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 8 }}>Key Coursework</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {e.coursework.map(c => (
                      <span key={c} style={{
                        padding: "3px 10px", borderRadius: 100, fontSize: 11.5, fontWeight: 500,
                        background: `${e.color}0a`, border: `1px solid ${e.color}20`, color: e.color,
                      }}>{c}</span>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {e.tags.map(t => (
                    <span key={t} style={{
                      padding: "3px 10px", borderRadius: 100, fontSize: 11, fontWeight: 500,
                      background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", color: "#475569",
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }} transition={{ duration: 0.5 }}>
          <div style={{ fontSize: 10, color: "#334155", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
            <Award size={13} color="#334155" /> Certifications &amp; Publications
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {certs.map(cert => (
              <motion.div
                key={cert.name}
                whileHover={{ y: -3, borderColor: `${cert.color}50` }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8, padding: "9px 16px", borderRadius: 10,
                  background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)",
                  fontSize: 13, color: "#64748b", cursor: "default",
                }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: cert.color, boxShadow: `0 0 6px ${cert.color}80`, flexShrink: 0 }} />
                {cert.name}
              </motion.div>
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
