"use client";
import { motion } from "framer-motion";

const jobs = [
  {
    company: "Virtusa",
    location: "Hyderabad, India",
    role: "Software Engineer Intern",
    period: "Jan 2024 – Jun 2024",
    color: "#00d4ff",
    bullets: [
      "Designed and optimized C# / ASP.NET Core REST APIs to process 1M+ records in ~3 seconds, enabling near-real-time batch analytics.",
      "Refactored React UI components into reusable patterns and shared utilities, reducing front-end development effort by 30%.",
      "Implemented CI/CD pipelines and deployment gates in Azure DevOps and Jenkins, cutting deployment time by 40%.",
    ],
    tech: ["C#", "ASP.NET Core", "React", "Azure DevOps", "Jenkins"],
  },
  {
    company: "Sanjana Logistics LLP",
    location: "Visakhapatnam, India",
    role: "Software Engineer Intern",
    period: "May 2023 – Jul 2023",
    color: "#a78bfa",
    bullets: [
      "Optimized Oracle SQL queries and indexing strategies, improving query execution speed by 45% for reporting workloads.",
      "Built KPI dashboards with React and Spring Boot, improving decision turnaround by 15% through enhanced drill-down visibility.",
      "Migrated infrastructure to AWS EC2 and S3, improving scalability while reducing infrastructure costs by 20%.",
    ],
    tech: ["Oracle SQL", "React", "Spring Boot", "AWS EC2", "AWS S3"],
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ position: "relative", padding: "96px 0", background: "transparent", overflow: "hidden" }}>
      <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }} transition={{ duration: 0.5 }}
          style={{ marginBottom: 56 }}>
          <div style={{ fontSize: 12, color: "#00d4ff", fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", marginBottom: 10 }}>02 — Experience</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#e2e8f0", letterSpacing: -0.5 }}>Work Experience</h2>
          <div style={{ height: 3, width: 48, background: "linear-gradient(90deg, #00d4ff, #7c3aed)", borderRadius: 2, marginTop: 14 }} />
        </motion.div>

        {/* Timeline container */}
        <div style={{ position: "relative", paddingLeft: 32 }}>
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{
              position: "absolute", left: 7, top: 8, bottom: 8, width: 2,
              background: "linear-gradient(180deg, #00d4ff, #7c3aed, rgba(124,58,237,0))",
              borderRadius: 2, transformOrigin: "top",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {jobs.map((job, i) => (
              <motion.div key={job.company}
                initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.55, delay: i * 0.12, type: "spring", stiffness: 250, damping: 22 }}
                style={{ position: "relative" }}
              >
                {/* Timeline dot */}
                <div style={{
                  position: "absolute", left: -29, top: 20,
                  width: 16, height: 16, borderRadius: "50%",
                  background: job.color, boxShadow: `0 0 0 4px rgba(10,15,30,1), 0 0 16px ${job.color}70`,
                  zIndex: 1,
                }} />

                <motion.div
                  whileHover={{ y: -4, boxShadow: `0 20px 56px rgba(0,0,0,0.35), 0 0 0 1px ${job.color}25` }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  style={{
                    padding: "32px", borderRadius: 18,
                    background: "rgba(255,255,255,0.025)", border: `1px solid ${job.color}15`,
                    cursor: "default", boxShadow: "0 0px 0px rgba(0,0,0,0)",
                  }}
                >
                  {/* Header */}
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 20 }}>
                    <div>
                      <div style={{
                        display: "inline-flex", alignItems: "center", gap: 7, padding: "3px 11px", borderRadius: 100,
                        background: `${job.color}10`, border: `1px solid ${job.color}25`, marginBottom: 10,
                      }}>
                        <div style={{ width: 5, height: 5, borderRadius: "50%", background: job.color }} />
                        <span style={{ fontSize: 11, color: job.color, fontWeight: 700, letterSpacing: 1.5 }}>INTERNSHIP</span>
                      </div>
                      <h3 style={{ fontSize: 20, fontWeight: 800, color: "#e2e8f0", marginBottom: 3 }}>{job.company}</h3>
                      <p style={{ fontSize: 14, color: job.color, fontWeight: 600 }}>{job.role}</p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: 13, color: "#475569", marginBottom: 3 }}>{job.location}</div>
                      <div style={{
                        fontSize: 12, color: "#334155", fontFamily: "monospace",
                        background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)",
                        padding: "3px 10px", borderRadius: 6, display: "inline-block",
                      }}>{job.period}</div>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px", display: "flex", flexDirection: "column", gap: 10 }}>
                    {job.bullets.map((b, j) => (
                      <li key={j} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                        <span style={{ color: job.color, fontSize: 14, lineHeight: 1.6, flexShrink: 0 }}>▹</span>
                        <span style={{ fontSize: 14.5, color: "#64748b", lineHeight: 1.7 }}>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {job.tech.map(t => (
                      <span key={t} style={{
                        padding: "4px 12px", borderRadius: 100, fontSize: 12, fontWeight: 500,
                        background: `${job.color}08`, border: `1px solid ${job.color}20`, color: job.color,
                      }}>{t}</span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
