"use client";
import CursorSpotlight from "./CursorSpotlight";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CursorSpotlight />
      {children}
    </>
  );
}
