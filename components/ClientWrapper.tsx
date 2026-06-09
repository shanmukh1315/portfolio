"use client";
import GlobalBackground from "./GlobalBackground";
import CursorSpotlight from "./CursorSpotlight";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Fixed behind everything */}
      <GlobalBackground />
      {/* Fixed on top of everything */}
      <CursorSpotlight />
      {children}
    </>
  );
}
