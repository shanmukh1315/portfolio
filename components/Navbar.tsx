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
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map(l => l.href.slice(1));
    const observer = new IntersectionObserver(
      entries => { entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }); },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(10,15,30,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#hero" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.25)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 13, fontWeight: 700, color: "#00d4ff", letterSpacing: 1,
          }}>SC</div>
          <span style={{ color: "#e2e8f0", fontWeight: 600, fontSize: 15, letterSpacing: 0.5 }}>Shanmukha</span>
        </a>

        <nav style={{ display: "flex", alignItems: "center", gap: 4 }} className="hidden md:flex">
          {links.map(l => {
            const isActive = active === l.href.slice(1);
            return (
              <a key={l.href} href={l.href} style={{
                position: "relative", color: isActive ? "#e2e8f0" : "#64748b",
                fontSize: 14, fontWeight: isActive ? 600 : 500, textDecoration: "none",
                padding: "6px 14px", borderRadius: 8, transition: "color 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "#e2e8f0")}
                onMouseLeave={e => (e.currentTarget.style.color = isActive ? "#e2e8f0" : "#64748b")}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    style={{
                      position: "absolute", inset: 0, borderRadius: 8,
                      background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.18)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span style={{ position: "relative" }}>{l.label}</span>
              </a>
            );
          })}
        </nav>

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

        <button className="md:hidden" onClick={() => setOpen(!open)} style={{ background: "none", border: "none", color: "#94a3b8", cursor: "pointer", padding: 4 }}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            style={{ background: "rgba(10,15,30,0.98)", borderBottom: "1px solid rgba(255,255,255,0.06)", overflow: "hidden" }}>
            <div style={{ padding: "16px 32px 24px", display: "flex", flexDirection: "column", gap: 20 }}>
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ color: active === l.href.slice(1) ? "#00d4ff" : "#94a3b8", fontSize: 15, fontWeight: 500, textDecoration: "none" }}>{l.label}</a>
              ))}
              <a href={personal.resumeUrl} download style={{ color: "#00d4ff", fontSize: 14, textDecoration: "none", fontWeight: 600 }}>Download Resume</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
