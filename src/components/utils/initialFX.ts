import { SplitText } from "gsap-trial/SplitText";
import gsap from "gsap";

let heroLoopTimelines: gsap.core.Timeline[] = [];
let activeHeroSplits: SplitText[] = [];

function cleanupInitialFX() {
  heroLoopTimelines.forEach((timeline) => timeline.kill());
  heroLoopTimelines = [];

  activeHeroSplits.forEach((split) => split.revert());
  activeHeroSplits = [];
}

export function initialFX() {
  cleanupInitialFX();

  document.body.style.overflowY = "auto";
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0a0e17",
    duration: 0.5,
    delay: 1,
  });

  var landingText = new SplitText(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    {
      type: "chars,lines",
      linesClass: "split-line",
    }
  );
  activeHeroSplits.push(landingText);
  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  let TextProps = { type: "chars,lines", linesClass: "split-h2" };

  const landingText2 = new SplitText(
    [".landing-info-h2", ".landing-focus-item"],
    TextProps
  );
  activeHeroSplits.push(landingText2);
  gsap.fromTo(
    landingText2.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );
  gsap.fromTo(
    ".landing-subline",
    { opacity: 0, y: 24, filter: "blur(4px)" },
    {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1,
      ease: "power2.out",
      delay: 1,
    }
  );
}
