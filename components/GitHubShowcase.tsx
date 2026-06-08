"use client";
import { motion } from "framer-motion";
import { Star, Code } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { projects, personal } from "@/lib/data";

const repos = [
  { name: "medical-triage-rag", lang: "Python", color: "#3572A5", stars: 0, desc: "AI-powered medical Q&A with RAG, emergency detection, and 47K+ MedQuAD pairs" },
  { name: "fastapi_calculator", lang: "Python", color: "#3572A5", stars: 0, desc: "JWT-authenticated CRUD app with 96% test coverage and multi-format export" },
  { name: "Full-Stack-Bank-Project", lang: "Python", color: "#3572A5", stars: 0, desc: "Flask + SQL banking app with role-based access and full transaction audit trail" },
  { name: "autonomiq-daas", lang: "JavaScript", color: "#f1e05a", stars: 1, desc: "Blockchain trustless data delivery with USDC smart-contract escrow on Arc Testnet" },
  { name: "Twitter-Sentiment-Analysis", lang: "Jupyter Notebook", color: "#DA5B0B", stars: 0, desc: "NLP pipeline for tweet sentiment classification with preprocessing and benchmarking" },
  { name: "portfolio", lang: "TypeScript", color: "#2b7489", stars: 0, desc: "This portfolio — built with Next.js, TypeScript, Tailwind CSS, and Framer Motion" },
];

const langColors: Record<string, string> = {
  "Python": "#3572A5",
  "JavaScript": "#f1e05a",
  "TypeScript": "#2b7489",
  "Jupyter Notebook": "#DA5B0B",
};

export default function GitHubShowcase() {
  return (
    <section id="github" className="py-24 relative">
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-3 block">$ github --signal</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">GitHub Repositories</h2>
          <p className="text-slate-400 mt-3 text-sm max-w-xl mx-auto">
            Open-source projects and public work across AI, full-stack, and data engineering.
          </p>
          <div className="section-divider mt-4 max-w-xs mx-auto" />
        </motion.div>

        {/* Profile card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-6 mb-8 flex flex-col sm:flex-row items-center sm:items-start gap-5"
        >
          <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
            <GithubIcon size={30} className="text-cyan-400" />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-slate-100 font-bold text-lg">shanmukh1315</h3>
            <p className="text-slate-400 text-sm mt-1">Full-stack AI/ML engineer. Building production systems with Python, FastAPI, React, and LLMs.</p>
            <div className="flex flex-wrap gap-4 mt-3 justify-center sm:justify-start">
              <div className="text-center">
                <div className="text-cyan-400 font-bold">6</div>
                <div className="text-xs text-slate-500">Public Repos</div>
              </div>
              <div className="text-center">
                <div className="text-cyan-400 font-bold">1</div>
                <div className="text-xs text-slate-500">Stars</div>
              </div>
            </div>
          </div>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-600 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 text-sm transition-all"
          >
            <GithubIcon size={14} /> View Profile
          </a>
        </motion.div>

        {/* Repo grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {repos.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={`https://github.com/shanmukh1315/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass rounded-xl p-4 flex flex-col gap-3 hover:scale-[1.02] transition-all group"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Code size={14} className="text-slate-500" />
                  <span className="text-cyan-400 text-sm font-mono font-medium group-hover:text-cyan-300 transition-colors truncate">
                    {repo.name}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-slate-500 text-xs flex-shrink-0">
                  <Star size={11} />
                  <span>{repo.stars}</span>
                </div>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed flex-1">{repo.desc}</p>
              <div className="flex items-center gap-1.5">
                <span
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: langColors[repo.lang] || "#888" }}
                />
                <span className="text-xs text-slate-500">{repo.lang}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
