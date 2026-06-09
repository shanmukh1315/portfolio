"use client";
import { motion } from "framer-motion";
import SectionBg from "@/components/SectionBg";

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
    <section id="experience" style={{ position: "relative", padding: "96px 0", background: "#0a0f1e", overflow: "hidden" }}>
      <SectionBg color1="#00d4ff" color2="#a78bfa" blob1={{ top: "-10%", left: "-8%" }} blob2={{ bottom: "-10%", right: "-5%" }} subtle />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }} transition={{ duration: 0.5 }}
          style={{ marginBottom: 56 }}>
          <div style={{ fontSize: 12, color: "#00d4ff", fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", marginBottom: 10 }}>02 — Experience</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#e2e8f0", letterSpacing: -0.5 }}>Work Experience</h2>
          <div style={{ height: 3, width: 48, background: "linear-gradient(90deg, #00d4ff, #7c3aed)", borderRadius: 2, marginTop: 14 }} />
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {jobs.map((job, i) => (
            <motion.div key={job.company}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.55, delay: i * 0.1, type: "spring", stiffness: 250, damping: 22 }}
              whileHover={{ y: -4, boxShadow: `0 16px 48px rgba(0,0,0,0.3), 0 0 0 1px ${job.color}20` }}
              style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 48, padding: "32px 24px", borderRadius: 16,
                borderBottom: "1px solid rgba(255,255,255,0.05)", cursor: "default" }}
              className="exp-row"
            >
              {/* Left col */}
              <div style={{ paddingTop: 4 }}>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 8, padding: "4px 12px", borderRadius: 100,
                  background: `${job.color}10`, border: `1px solid ${job.color}25`, marginBottom: 12,
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: job.color }} />
                  <span style={{ fontSize: 11, color: job.color, fontWeight: 600, letterSpacing: 1 }}>INTERNSHIP</span>
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#e2e8f0", marginBottom: 4, lineHeight: 1.3 }}>{job.company}</h3>
                <p style={{ fontSize: 13.5, color: job.color, fontWeight: 500, marginBottom: 3 }}>{job.role}</p>
                <p style={{ fontSize: 12.5, color: "#475569", marginBottom: 2 }}>{job.location}</p>
                <p style={{ fontSize: 12, color: "#334155", fontFamily: "monospace" }}>{job.period}</p>
              </div>

              {/* Right col */}
              <div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px", display: "flex", flexDirection: "column", gap: 12 }}>
                  {job.bullets.map((b, j) => (
                    <li key={j} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <span style={{ color: job.color, fontSize: 16, lineHeight: 1.5, flexShrink: 0 }}>▹</span>
                      <span style={{ fontSize: 14.5, color: "#64748b", lineHeight: 1.7 }}>{b}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {job.tech.map(t => (
                    <span key={t} style={{
                      padding: "4px 12px", borderRadius: 100, fontSize: 12, fontWeight: 500,
                      background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#475569",
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .exp-row { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  );
}
