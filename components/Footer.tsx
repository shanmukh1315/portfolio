"use client";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { personal } from "@/lib/data";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "#080d1a", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "40px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        {/* CTA row */}
        <div style={{ textAlign: "center", marginBottom: 32, paddingBottom: 32, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
            <span style={{ fontSize: 12, color: "#4ade80", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>Open to Work</span>
          </div>
          <p style={{ fontSize: 15, color: "#475569", marginBottom: 16 }}>
            Looking for Data Science, ML Engineering, AI, or Full-Stack roles. Let&apos;s talk.
          </p>
          <a href={`mailto:${personal.email}`} style={{
            display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 22px",
            borderRadius: 9, fontSize: 13, fontWeight: 600,
            background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.2)",
            color: "#00d4ff", textDecoration: "none", transition: "all 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(0,212,255,0.15)"; e.currentTarget.style.borderColor = "rgba(0,212,255,0.4)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(0,212,255,0.08)"; e.currentTarget.style.borderColor = "rgba(0,212,255,0.2)"; }}
          ><Mail size={14} /> {personal.email}</a>
        </div>

        {/* Bottom row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div style={{ fontSize: 13, color: "#334155" }}>
            © 2026 <span style={{ color: "#475569" }}>Shanmukha Srinivas Challa</span> · Built with Next.js &amp; Framer Motion
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            {[
              { href: `mailto:${personal.email}`, icon: Mail },
              { href: personal.github, icon: GithubIcon },
              { href: personal.linkedin, icon: LinkedinIcon },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" style={{ color: "#334155", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#94a3b8")}
                onMouseLeave={e => (e.currentTarget.style.color = "#334155")}
              ><s.icon size={16} /></a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
