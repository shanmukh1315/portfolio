import { useEffect, useRef } from "react";
import "./styles/Cursor.css";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    let hover = false;
    let frameId = 0;
    const mousePos = { x: 0, y: 0 };
    const cursorPos = { x: 0, y: 0 };

    const setX = gsap.quickSetter(cursor, "x", "px");
    const setY = gsap.quickSetter(cursor, "y", "px");

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    };

    const loop = () => {
      if (!hover) {
        cursorPos.x += (mousePos.x - cursorPos.x) * 0.18;
        cursorPos.y += (mousePos.y - cursorPos.y) * 0.18;
        setX(cursorPos.x);
        setY(cursorPos.y);
      }

      frameId = requestAnimationFrame(loop);
    };

    const cleanupHandlers: Array<() => void> = [];
    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    frameId = requestAnimationFrame(loop);

    document.querySelectorAll("[data-cursor]").forEach((item) => {
      const element = item as HTMLElement;
      const handleMouseOver = (e: MouseEvent) => {
        const target = e.currentTarget as HTMLElement;
        const rect = target.getBoundingClientRect();

        if (element.dataset.cursor === "icons") {
          cursor.classList.add("cursor-icons");

          setX(rect.left + 10);
          setY(rect.top + 10);
          cursor.style.setProperty("--cursorH", `${rect.height}px`);
          hover = true;
        }
        if (element.dataset.cursor === "disable") {
          cursor.classList.add("cursor-disable");
        }
      };

      const handleMouseOut = () => {
        cursor.classList.remove("cursor-disable", "cursor-icons");
        hover = false;
      };

      element.addEventListener("mouseover", handleMouseOver);
      element.addEventListener("mouseout", handleMouseOut);
      cleanupHandlers.push(() => {
        element.removeEventListener("mouseover", handleMouseOver);
        element.removeEventListener("mouseout", handleMouseOut);
      });
    });

    return () => {
      window.cancelAnimationFrame(frameId);
      document.removeEventListener("mousemove", handleMouseMove);
      cleanupHandlers.forEach((cleanup) => cleanup());
    };
  }, []);

  return <div className="cursor-main" ref={cursorRef}></div>;
};

export default Cursor;
