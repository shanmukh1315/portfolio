import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      gsap.set(".character-model", { x: "0%", y: "0%" });
      ScrollTrigger.refresh(true);
    });

    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(".header ul a")
    );

    const handleNavClick = (e: Event) => {
      e.preventDefault();
      const link = e.currentTarget as HTMLAnchorElement;
      const section = link.getAttribute("data-href");
      if (!section) return;

      const target = document.querySelector(section);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    links.forEach((link) => link.addEventListener("click", handleNavClick));

    const onResize = () => {
      ScrollTrigger.refresh(true);
    };

    window.addEventListener("resize", onResize);

    return () => {
      links.forEach((link) =>
        link.removeEventListener("click", handleNavClick)
      );
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          SC
        </a>
        <ul>
          <li>
            <a data-href="#home" href="#home">
              <HoverLinks text="HOME" />
            </a>
          </li>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#experience" href="#experience">
              <HoverLinks text="EXPERIENCE" />
            </a>
          </li>
          <li>
            <a data-href="#education" href="#education">
              <HoverLinks text="EDUCATION" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="PROJECTS" />
            </a>
          </li>
          <li>
            <a data-href="#skills" href="#skills">
              <HoverLinks text="SKILLS" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
