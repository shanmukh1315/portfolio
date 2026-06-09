import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Shanmukha Srinivas Challa — AI/ML & Full-Stack Engineer",
  description:
    "Portfolio of Shanmukha Srinivas Challa — MS Data Science (NJIT), building AI agents, RAG systems, and production-ready full-stack applications with Python, FastAPI, React, and LLMs.",
  keywords: [
    "Shanmukha Challa", "AI Engineer", "ML Engineer", "Data Science", "NJIT",
    "RAG", "LLM", "FastAPI", "React", "Python", "Full-Stack", "Portfolio",
  ],
  openGraph: {
    title: "Shanmukha Srinivas Challa — AI/ML & Full-Stack Engineer",
    description: "Building intelligent agents, RAG systems, and production-ready AI products.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-[#020817] text-slate-100 min-h-screen antialiased">
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
