"use client";
import { motion } from "framer-motion";
import { Download, FileText, CheckCircle } from "lucide-react";
import { personal } from "@/lib/data";

const highlights = [
  "4+ years of Python and full-stack development experience",
  "MS Data Science — NJIT, GPA 3.8",
  "1M+ records processed in ~3s (Virtusa, C#/ASP.NET Core)",
  "40% deployment time reduction via CI/CD (Azure DevOps + Jenkins)",
  "90%+ citation coverage on Medical RAG evaluation set",
  "96% test coverage (194 unit/integration/E2E tests)",
  "3rd Place – Hack-The-Mountain Hackathon (Fraud Detection)",
  "AWS ML Foundations · Cloud Foundations · Data Analytics",
];

export default function Resume() {
  return (
    <section id="resume" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-3 block">$ download resume.pdf</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">Resume</h2>
          <div className="section-divider mt-4 max-w-xs mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                  <FileText size={22} className="text-cyan-400" />
                </div>
                <div>
                  <div className="text-slate-100 font-bold">Shanmukha Srinivas Challa</div>
                  <div className="text-slate-400 text-xs">Full-Stack Software & AI/ML Engineer</div>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                A recruiter-ready, one-page resume covering professional experience, production-grade projects, technical skills, education, and certifications — all grounded in real, measurable outcomes.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a
                  href={personal.resumeUrl}
                  download
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold text-sm transition-all hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  <Download size={15} /> Download PDF
                </a>
                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-600 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 text-sm font-medium transition-all"
                >
                  <FileText size={15} /> View Online
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wide mb-4">Key Highlights</h4>
              <ul className="space-y-2.5">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle size={14} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
