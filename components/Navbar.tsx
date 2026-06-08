"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { personal } from "@/lib/data";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(10,15,30,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <a href="#hero" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.25)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 13, fontWeight: 700, color: "#00d4ff", letterSpacing: 1,
          }}>SC</div>
          <span style={{ color: "#e2e8f0", fontWeight: 600, fontSize: 15, letterSpacing: 0.5 }}>Shanmukha</span>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 32 }} className="hidden md:flex">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              color: "#94a3b8", fontSize: 14, fontWeight: 500, textDecoration: "none",
              transition: "color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "#e2e8f0")}
              onMouseLeave={e => (e.currentTarget.style.color = "#94a3b8")}
            >{l.label}</a>
          ))}
        </nav>

        {/* Right: socials + resume */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }} className="hidden md:flex">
          <a href={personal.github} target="_blank" rel="noopener noreferrer" style={{ color: "#64748b", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#e2e8f0")}
            onMouseLeave={e => (e.currentTarget.style.color = "#64748b")}
          ><GithubIcon size={18} /></a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "#64748b", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#e2e8f0")}
            onMouseLeave={e => (e.currentTarget.style.color = "#64748b")}
          ><LinkedinIcon size={18} /></a>
          <a href={personal.resumeUrl} download style={{
            padding: "8px 18px", borderRadius: 8, fontSize: 13, fontWeight: 600,
            background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.3)",
            color: "#00d4ff", textDecoration: "none", transition: "all 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(0,212,255,0.18)"; e.currentTarget.style.borderColor = "rgba(0,212,255,0.5)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(0,212,255,0.1)"; e.currentTarget.style.borderColor = "rgba(0,212,255,0.3)"; }}
          >Resume</a>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setOpen(!open)} style={{ background: "none", border: "none", color: "#94a3b8", cursor: "pointer", padding: 4 }}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            style={{ background: "rgba(10,15,30,0.98)", borderBottom: "1px solid rgba(255,255,255,0.06)", overflow: "hidden" }}>
            <div style={{ padding: "16px 32px 24px", display: "flex", flexDirection: "column", gap: 20 }}>
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ color: "#94a3b8", fontSize: 15, fontWeight: 500, textDecoration: "none" }}>{l.label}</a>
              ))}
              <a href={personal.resumeUrl} download style={{ color: "#00d4ff", fontSize: 14, textDecoration: "none", fontWeight: 600 }}>Download Resume</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
