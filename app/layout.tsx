import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Shanmukha Srinivas Challa — AI/ML & Full-Stack Engineer",
  description:
    "Portfolio of Shanmukha Srinivas Challa — MS Data Science (NJIT, GPA 3.8), building AI agents, RAG systems, and production-ready full-stack applications with Python, FastAPI, React, and LLMs.",
  keywords: [
    "Shanmukha Challa", "AI Engineer", "ML Engineer", "Data Scientist", "NJIT",
    "RAG", "LLM", "FastAPI", "React", "Python", "Full-Stack", "Portfolio",
    "Machine Learning", "Data Science", "Newark NJ",
  ],
  authors: [{ name: "Shanmukha Srinivas Challa" }],
  openGraph: {
    title: "Shanmukha Srinivas Challa — AI/ML & Full-Stack Engineer",
    description: "MS Data Science @ NJIT (GPA 3.8) · Building RAG systems, LLM agents, and production AI products with Python, FastAPI & React.",
    url: "https://shanmukh1315.github.io/portfolio",
    siteName: "Shanmukha Challa Portfolio",
    type: "website",
    images: [
      {
        url: "https://shanmukh1315.github.io/portfolio/preview.png",
        width: 1440,
        height: 900,
        alt: "Shanmukha Srinivas Challa — AI/ML Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shanmukha Srinivas Challa — AI/ML & Full-Stack Engineer",
    description: "MS Data Science @ NJIT · RAG systems, LLM agents, FastAPI, React",
    images: ["https://shanmukh1315.github.io/portfolio/preview.png"],
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
