"use client";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { personal } from "@/lib/data";
import { Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ position: "relative", background: "#060b18", borderTop: "1px solid rgba(255,255,255,0.05)", overflow: "hidden" }}>
      {/* Ambient glow */}
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 600, height: 300, background: "radial-gradient(ellipse, rgba(0,212,255,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "72px 32px 40px" }}>
        {/* Big CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
            <span className="dot-glow" style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
            <span style={{ fontSize: 12, color: "#4ade80", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>Open to Work</span>
          </div>

          <h2 style={{
            fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, lineHeight: 1.1,
            letterSpacing: -1, marginBottom: 16,
            background: "linear-gradient(135deg, #e2e8f0 30%, #00d4ff 70%, #7c3aed)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            Let&apos;s Build Something
          </h2>

          <p style={{ fontSize: 16, color: "#475569", marginBottom: 32, maxWidth: 480, margin: "0 auto 32px" }}>
            Looking for Data Science, ML Engineering, AI, or Full-Stack roles. Open to full-time, contract, or collaborative projects.
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <motion.a
              href={`mailto:${personal.email}`}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,212,255,0.35)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "13px 28px", borderRadius: 12, fontSize: 14, fontWeight: 700,
                background: "#00d4ff", color: "#0a0f1e", textDecoration: "none",
                boxShadow: "0 4px 20px rgba(0,212,255,0.25)",
              }}
            >
              <Mail size={15} /> Get In Touch
            </motion.a>
            <motion.a
              href={personal.linkedin} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "13px 28px", borderRadius: 12, fontSize: 14, fontWeight: 600,
                background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                color: "#94a3b8", textDecoration: "none",
              }}
            >
              <LinkedinIcon size={15} /> LinkedIn <ArrowUpRight size={13} />
            </motion.a>
          </div>
        </motion.div>

        {/* Divider */}
        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)", marginBottom: 32 }} />

        {/* Bottom row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div style={{ fontSize: 13, color: "#334155" }}>
            © 2026 <span style={{ color: "#475569" }}>Shanmukha Srinivas Challa</span>
            <span style={{ margin: "0 8px", color: "#1e293b" }}>·</span>
            <span style={{ color: "#334155" }}>Built with Next.js &amp; Framer Motion</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            {[
              { href: `mailto:${personal.email}`, icon: Mail, label: "Email" },
              { href: personal.github, icon: GithubIcon, label: "GitHub" },
              { href: personal.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{ color: "#334155", transition: "color 0.2s", display: "flex", alignItems: "center" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#94a3b8")}
                onMouseLeave={e => (e.currentTarget.style.color = "#334155")}
              ><s.icon size={17} /></a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
