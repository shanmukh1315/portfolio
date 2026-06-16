"use client";
import GlobalBackground from "./GlobalBackground";
import CursorSpotlight from "./CursorSpotlight";
import ScrollProgress from "./ScrollProgress";
import BackToTop from "./BackToTop";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollProgress />
      <GlobalBackground />
      <CursorSpotlight />
      {children}
      <BackToTop />
    </>
  );
}
