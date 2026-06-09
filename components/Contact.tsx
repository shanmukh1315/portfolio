"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { personal } from "@/lib/data";

function Bg() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      <motion.div style={{
        position: "absolute", width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)",
        top: "50%", left: "50%", transform: "translate(-50%,-50%)",
      }} animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
        backgroundSize: "72px 72px",
      }} />
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const s = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const b = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:${personal.email}?subject=${s}&body=${b}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "12px 16px", borderRadius: 10, fontSize: 14,
    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
    color: "#e2e8f0", outline: "none", transition: "border-color 0.2s",
    fontFamily: "inherit",
  };

  return (
    <section id="contact" style={{ position: "relative", padding: "96px 0", background: "#0a0f1e", overflow: "hidden" }}>
      <Bg />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }} transition={{ duration: 0.5 }}
          style={{ marginBottom: 56 }}>
          <div style={{ fontSize: 12, color: "#00d4ff", fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", marginBottom: 10 }}>06 — Contact</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#e2e8f0", letterSpacing: -0.5 }}>Get In Touch</h2>
          <div style={{ height: 3, width: 48, background: "linear-gradient(90deg, #00d4ff, #7c3aed)", borderRadius: 2, marginTop: 14 }} />
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }} className="contact-grid">
          {/* Left: info */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.15 }} transition={{ duration: 0.6 }}>
            <p style={{ fontSize: 15.5, color: "#64748b", lineHeight: 1.8, marginBottom: 36, maxWidth: 400 }}>
              I&apos;m actively looking for roles in AI/ML Engineering, Data Science, and Full-Stack Software Engineering. Open to full-time, contract, or collaborative projects. Let&apos;s build something together.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 36 }}>
              {[
                { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
                { icon: Phone, label: "Phone", value: personal.phone, href: `tel:${personal.phone}` },
                { icon: MapPin, label: "Location", value: personal.location, href: null },
              ].map(item => {
                const inner = (
                  <motion.div
                    whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,212,255,0.2)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 16px", borderRadius: 12,
                      background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", cursor: "default" }}>
                    <div style={{
                      width: 42, height: 42, borderRadius: 11, flexShrink: 0,
                      background: "rgba(0,212,255,0.07)", border: "1px solid rgba(0,212,255,0.15)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <item.icon size={16} color="#00d4ff" />
                    </div>
                    <div>
                      <div style={{ fontSize: 11, color: "#334155", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 2 }}>{item.label}</div>
                      <div style={{ fontSize: 14, color: "#94a3b8" }}>{item.value}</div>
                    </div>
                  </motion.div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} style={{ textDecoration: "none" }}>{inner}</a>
                ) : <div key={item.label}>{inner}</div>;
              })}
            </div>

            {/* Social links */}
            <div style={{ display: "flex", gap: 12 }}>
              {[
                { icon: GithubIcon, href: personal.github, label: "GitHub" },
                { icon: LinkedinIcon, href: personal.linkedin, label: "LinkedIn" },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "10px 18px", borderRadius: 10, fontSize: 13, fontWeight: 600,
                  background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                  color: "#64748b", textDecoration: "none", transition: "all 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.color = "#e2e8f0"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "#64748b"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
                >
                  <s.icon size={15} /> {s.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.15 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <form onSubmit={submit} style={{
              padding: "36px 32px", borderRadius: 20,
              background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)",
              display: "flex", flexDirection: "column", gap: 20,
            }}>
              <div>
                <label style={{ display: "block", fontSize: 12, color: "#475569", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>Name</label>
                <input type="text" required placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = "rgba(0,212,255,0.3)")}
                  onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 12, color: "#475569", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>Email</label>
                <input type="email" required placeholder="your@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = "rgba(0,212,255,0.3)")}
                  onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 12, color: "#475569", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>Message</label>
                <textarea required rows={5} placeholder="Tell me about the role or project..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={e => (e.target.style.borderColor = "rgba(0,212,255,0.3)")}
                  onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                />
              </div>
              <button type="submit" style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                padding: "13px 24px", borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: "pointer",
                background: sent ? "rgba(74,222,128,0.15)" : "#00d4ff",
                color: sent ? "#4ade80" : "#0a0f1e",
                border: sent ? "1px solid rgba(74,222,128,0.3)" : "none",
                transition: "all 0.25s",
                boxShadow: sent ? "none" : "0 4px 20px rgba(0,212,255,0.25)",
              }}>
                {sent ? <><CheckCircle size={15} /> Email Client Opened</> : <><Send size={15} /> Send Message</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; } }
        input::placeholder, textarea::placeholder { color: #334155; }
      `}</style>
    </section>
  );
}
