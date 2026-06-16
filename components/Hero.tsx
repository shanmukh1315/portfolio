"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Download, ArrowRight, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { personal } from "@/lib/data";
import BlurText from "@/components/BlurText";

/* ─── Terminal ──────────────────────────────────────── */
const lines = [
  "$ whoami",
  "→ Shanmukha · Data Science & AI Engineer",
  "",
  "$ skills --top",
  "→ Python · SQL · ML · FastAPI · React",
  "→ RAG · LLMs · pandas · Data Pipelines",
  "",
  "$ build --ai-products",
  "→ Medical Triage RAG        ✓ deployed",
  "→ FastAPI Calculator        ✓ 96% coverage",
  "→ Twitter Sentiment NLP     ✓ published",
  "→ Blockchain DaaS           ✓ on-chain",
  "",
  "$ target_roles",
  "→ Data Scientist · ML Eng · AI Engineer · Analyst",
];

function Terminal() {
  const [shown, setShown] = useState<string[]>([]);
  const [li, setLi] = useState(0);
  const [ci, setCi] = useState(0);

  useEffect(() => {
    if (li >= lines.length) return;
    const line = lines[li];
    if (line === "") {
      const t = setTimeout(() => { setShown(p => [...p, ""]); setLi(l => l + 1); setCi(0); }, 150);
      return () => clearTimeout(t);
    }
    if (ci < line.length) {
      const t = setTimeout(() => setCi(c => c + 1), 24);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => { setShown(p => [...p, line]); setLi(l => l + 1); setCi(0); }, 260);
    return () => clearTimeout(t);
  }, [li, ci]);

  const partial = li < lines.length ? lines[li].slice(0, ci) : "";

  return (
    <div style={{
      background: "#0d1424", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14,
      overflow: "hidden", width: "100%", maxWidth: 420,
      boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,212,255,0.06), 0 0 60px rgba(0,212,255,0.04)",
    }}>
      <div style={{ background: "#111827", padding: "12px 16px", display: "flex", alignItems: "center", gap: 7, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#ff5f57" }} />
        <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#febc2e" }} />
        <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#28c840" }} />
        <span style={{ marginLeft: 10, color: "#4b5563", fontSize: 12, fontFamily: "monospace" }}>terminal — bash</span>
      </div>
      <div style={{ padding: "20px 20px 24px", fontFamily: "'Courier New', monospace", fontSize: 12, lineHeight: 1.85, minHeight: 320 }}>
        {shown.map((l, i) =>
          l === "" ? <div key={i} style={{ height: 6 }} /> :
          <div key={i} style={{ color: l.startsWith("$") ? "#00d4ff" : l.startsWith("→") ? "#94a3b8" : "#64748b" }}>{l}</div>
        )}
        {li < lines.length && lines[li] !== "" && (
          <div style={{ color: partial.startsWith("$") ? "#00d4ff" : "#94a3b8" }}>
            {partial}<span className="cursor-blink" style={{ color: "#00d4ff" }}>▋</span>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Neural Network Canvas Background ──────────────── */
function HeroBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);

    const onMouse = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    window.addEventListener("mousemove", onMouse);

    // Nodes
    const NODE_COUNT = 28;
    type Node = { x: number; y: number; vx: number; vy: number; r: number };
    const nodes: Node[] = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: 1.5 + Math.random() * 1.5,
    }));

    // Pulses travelling along edges
    type Pulse = { a: number; b: number; t: number; speed: number };
    const pulses: Pulse[] = [];
    let lastPulse = 0;

    const CONNECT_DIST = 200;
    const MOUSE_DIST = 160;

    let raf: number;
    const draw = (ts: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Move nodes
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      }

      // Spawn pulse every ~2.5s
      if (ts - lastPulse > 2500) {
        const a = Math.floor(Math.random() * NODE_COUNT);
        let b = a;
        while (b === a) b = Math.floor(Math.random() * NODE_COUNT);
        pulses.push({ a, b, t: 0, speed: 0.006 + Math.random() * 0.006 });
        lastPulse = ts;
      }

      // Draw edges
      for (let i = 0; i < NODE_COUNT; i++) {
        for (let j = i + 1; j < NODE_COUNT; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < CONNECT_DIST) {
            const alpha = (1 - d / CONNECT_DIST) * 0.18;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(0,212,255,${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Mouse attraction lines
      const mx = mouseRef.current.x, my = mouseRef.current.y;
      for (const n of nodes) {
        const dx = n.x - mx, dy = n.y - my;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < MOUSE_DIST) {
          const alpha = (1 - d / MOUSE_DIST) * 0.35;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(mx, my);
          ctx.strokeStyle = `rgba(124,58,237,${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      // Draw nodes
      for (const n of nodes) {
        const dmx = n.x - mx, dmy = n.y - my;
        const dm = Math.sqrt(dmx * dmx + dmy * dmy);
        const glow = dm < MOUSE_DIST ? 0.9 : 0.4;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,212,255,${glow})`;
        ctx.fill();
      }

      // Draw & advance pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.t += p.speed;
        if (p.t >= 1) { pulses.splice(i, 1); continue; }
        const na = nodes[p.a], nb = nodes[p.b];
        const px = na.x + (nb.x - na.x) * p.t;
        const py = na.y + (nb.y - na.y) * p.t;
        const grad = ctx.createRadialGradient(px, py, 0, px, py, 6);
        grad.addColorStop(0, "rgba(0,212,255,0.9)");
        grad.addColorStop(1, "rgba(0,212,255,0)");
        ctx.beginPath();
        ctx.arc(px, py, 6, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {/* Neural network canvas — stronger effect for hero only */}
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.65 }} />
    </div>
  );
}

/* ─── Hero ─────────────────────────────────────────── */
const targetRoles = [
  "Data Scientist", "Machine Learning Engineer", "AI Engineer",
  "Data Analyst", "Data Engineer", "Full-Stack AI Engineer", "Python Developer",
];

const metrics = [
  { v: "10+", l: "Projects Built" },
  { v: "1M+", l: "Records Processed" },
  { v: "96%", l: "Test Coverage" },
  { v: "90%+", l: "RAG Citation Acc." },
];

export default function Hero() {
  return (
    <section id="hero" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", background: "transparent", overflow: "hidden" }}>
      <HeroBg />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "96px 32px 64px", width: "100%" }}>
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 64, alignItems: "center" }}>

          {/* Left column */}
          <div>
            {/* Status badge */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 16px", borderRadius: 100,
                background: "rgba(74,222,128,0.06)", border: "1px solid rgba(74,222,128,0.2)",
                backdropFilter: "blur(10px)",
                fontSize: 12, color: "#86efac", marginBottom: 32, letterSpacing: 0.3 }}>
              <span className="dot-glow" style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", flexShrink: 0 }} />
              <Sparkles size={12} style={{ opacity: 0.7 }} />
              Open to Data Science · ML · AI · Analytics &amp; Software roles
            </motion.div>

            {/* Name + title */}
            <div style={{ marginBottom: 20 }}>
              <h1 style={{ fontSize: "clamp(36px, 5.5vw, 68px)", fontWeight: 900, lineHeight: 1.08, marginBottom: 14, letterSpacing: -1.5 }}>
                <motion.span
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.5 }}
                  style={{ display: "block", color: "#cbd5e1" }}
                >
                  Hi, I&apos;m
                </motion.span>
                <BlurText
                  text="Shanmukha"
                  delay={300}
                  stagger={90}
                  wordStyle={{
                    background: "linear-gradient(135deg, #00d4ff 0%, #7c3aed 50%, #00d4ff 100%)",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    animation: "shimmer 3s linear infinite",
                    fontWeight: 900,
                  }}
                />
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}
                style={{ fontSize: "clamp(15px, 2vw, 20px)", fontWeight: 500, color: "#475569", marginBottom: 24, letterSpacing: 0.5 }}>
                Data Scientist &nbsp;·&nbsp; ML Engineer &nbsp;·&nbsp; AI Engineer
              </motion.p>
            </div>

            {/* Summary */}
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
              style={{ fontSize: 15, color: "#64748b", lineHeight: 1.8, maxWidth: 540, marginBottom: 32 }}>
              Recent MS Data Science graduate from NJIT with hands-on experience building machine learning models, data pipelines, RAG applications, intelligent agents, and full-stack AI tools. Skilled in Python, SQL, FastAPI, React, pandas, scikit-learn, LLMs, and cloud-ready application development.
            </motion.p>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
              style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32 }}>
              <a href="#projects" style={{
                display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px",
                borderRadius: 10, fontWeight: 600, fontSize: 14,
                background: "#00d4ff", color: "#0a0f1e", textDecoration: "none",
                boxShadow: "0 4px 20px rgba(0,212,255,0.3)", transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "#22dcff"; e.currentTarget.style.boxShadow = "0 4px 32px rgba(0,212,255,0.45)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#00d4ff"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,212,255,0.3)"; }}
              >View Projects <ArrowRight size={15} /></a>
              <a href={personal.resumeUrl} download style={{
                display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px",
                borderRadius: 10, fontWeight: 600, fontSize: 14,
                background: "transparent", border: "1px solid rgba(255,255,255,0.12)",
                color: "#94a3b8", textDecoration: "none", transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; e.currentTarget.style.color = "#e2e8f0"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "#94a3b8"; }}
              ><Download size={14} /> Resume</a>
              {[
                { Icon: GithubIcon, href: personal.github },
                { Icon: LinkedinIcon, href: personal.linkedin },
              ].map(({ Icon, href }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" style={{
                  width: 44, height: 44, borderRadius: 10, display: "inline-flex", alignItems: "center", justifyContent: "center",
                  background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                  color: "#64748b", textDecoration: "none", transition: "all 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.color = "#e2e8f0"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "#64748b"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
                ><Icon size={17} /></a>
              ))}
            </motion.div>

            {/* Target Roles */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
              style={{ marginBottom: 36 }}>
              <p style={{ fontSize: 11, color: "#334155", fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>Target Roles</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {targetRoles.map((r, i) => (
                  <motion.span key={r}
                    initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.05 }}
                    style={{
                      padding: "5px 13px", borderRadius: 100, fontSize: 12, fontWeight: 500,
                      background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.15)",
                      color: "#67e8f9", cursor: "default",
                    }}
                  >{r}</motion.span>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
              style={{ display: "flex", gap: 36, flexWrap: "wrap", paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              {metrics.map(s => (
                <div key={s.l}>
                  <div style={{ fontSize: 24, fontWeight: 800, color: "#00d4ff", lineHeight: 1 }}>{s.v}</div>
                  <div style={{ fontSize: 11.5, color: "#475569", marginTop: 5, letterSpacing: 0.3 }}>{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Terminal */}
          <motion.div initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.7 }}
            className="float hero-terminal">
            <Terminal />
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-terminal { display: none !important; }
        }
      `}</style>
    </section>
  );
}
