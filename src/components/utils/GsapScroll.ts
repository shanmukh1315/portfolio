import * as THREE from "three";
import gsap from "gsap";

export function setCharTimeline(
  character: THREE.Object3D<THREE.Object3DEventMap> | null,
  camera: THREE.PerspectiveCamera
) {
  let intensity: number = 0;
  setInterval(() => {
    intensity = Math.random();
  }, 200);
  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".landing-section",
      start: "top top",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-section",
      start: "center 55%",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  const tlExperience = gsap.timeline({
    scrollTrigger: {
      trigger: ".career-section",
      start: "top 80%",
      end: "bottom 35%",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });

  const tlEducation = gsap.timeline({
    scrollTrigger: {
      trigger: ".education-section",
      start: "top 80%",
      end: "bottom 35%",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });

  const tlWorkHide = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top bottom",
      end: "top 85%",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  let screenLight: any, monitor: any;
  gsap.set(".character-model", {
    x: "0%",
    y: "0%",
    opacity: 0.32,
    filter: "saturate(0.95) brightness(0.92)",
  });
  character?.children.forEach((object: any) => {
    if (object.name === "Plane004") {
      object.children.forEach((child: any) => {
        child.material.transparent = true;
        child.material.opacity = 0;
        if (child.material.name === "Material.018") {
          monitor = child;
          child.material.color.set("#FFFFFF");
        }
      });
    }
    if (object.name === "screenlight") {
      object.material.transparent = true;
      object.material.opacity = 0;
      object.material.emissive.set("#B0F5EA");
      gsap.timeline({ repeat: -1, repeatRefresh: true }).to(object.material, {
        emissiveIntensity: () => intensity * 8,
        duration: () => Math.random() * 0.6,
        delay: () => Math.random() * 0.1,
      });
      screenLight = object;
    }
  });
  let neckBone = character?.getObjectByName("spine005");
  if (window.innerWidth > 1024) {
    if (character) {
      tl1
        .fromTo(character.rotation, { y: 0 }, { y: 0.7, duration: 1 }, 0)
        .to(camera.position, { z: 22 }, 0)
        .fromTo(
          ".character-model",
          { x: "0%" },
          { x: "-18%", duration: 1 },
          0
        )
        .to(".landing-container", { opacity: 0, duration: 0.4 }, 0)
        .to(".landing-container", { y: "40%", duration: 0.8 }, 0)
        .fromTo(".about-me", { y: "-50%" }, { y: "0%" }, 0);

      tl2
        .to(
          camera.position,
          { z: 75, y: 8.4, duration: 6, delay: 2, ease: "power3.inOut" },
          0
        )
        .to(".about-section", { y: "30%", duration: 6 }, 0)
        .to(".about-section", { opacity: 0, delay: 3, duration: 2 }, 0)
        .fromTo(
          ".character-model",
          { pointerEvents: "inherit" },
          {
            pointerEvents: "none",
            x: "-12%",
            y: "0%",
            opacity: 0.28,
            filter: "saturate(0.92) brightness(0.88)",
            delay: 2,
            duration: 5,
          },
          0
        )
        .to(character.rotation, { y: 0.92, x: 0.12, delay: 3, duration: 3 }, 0)
        .to(neckBone!.rotation, { x: 0.6, delay: 2, duration: 3 }, 0)
        .to(monitor.material, { opacity: 1, duration: 0.8, delay: 3.2 }, 0)
        .to(screenLight.material, { opacity: 1, duration: 0.8, delay: 4.5 }, 0)
        .fromTo(
          monitor.position,
          { y: -10, z: 2 },
          { y: 0, z: 0, delay: 1.5, duration: 3 },
          0
        )
        .fromTo(
          ".character-rim",
          { opacity: 1, scaleX: 1.4 },
          { opacity: 0, scale: 0, y: "-70%", duration: 5, delay: 2 },
          0.3
        );

      tlExperience
        .to(
          ".character-model",
          {
            x: "0%",
            y: "8%",
            opacity: 0.22,
            filter: "saturate(0.9) brightness(0.82)",
            duration: 1.5,
            ease: "none",
          },
          0
        )
        .to(
          camera.position,
          {
            z: 76,
            y: 8.5,
            duration: 1.5,
            ease: "none",
          },
          0
        )
        .to(
          character.rotation,
          {
            y: 0.62,
            x: 0.05,
            duration: 1.5,
            ease: "none",
          },
          0
        );

      tlEducation
        .to(
          ".character-model",
          {
            x: "0%",
            y: "14%",
            opacity: 0.22,
            filter: "saturate(0.9) brightness(0.82)",
            duration: 1.5,
            ease: "none",
          },
          0
        )
        .to(
          camera.position,
          {
            z: 76,
            y: 8.7,
            duration: 1.5,
            ease: "none",
          },
          0
        )
        .to(
          character.rotation,
          {
            y: 0.62,
            x: 0.05,
            duration: 1.5,
            ease: "none",
          },
          0
        );

      tlWorkHide
        .to(
          ".character-model",
          {
            y: "18%",
            opacity: 0,
            duration: 0.8,
            ease: "none",
          },
          0
        )
        .to(
          ".character-rim",
          {
            opacity: 0,
            duration: 0.4,
            ease: "none",
          },
          0
        );
    }
  }
}

export function setAllTimeline() {
  const sectionSelectors = [".career-section", ".education-section"];

  sectionSelectors.forEach((sectionSelector) => {
    const section = document.querySelector(sectionSelector);
    if (!section) return;

    const q = gsap.utils.selector(section);
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 30%",
        end: "100% center",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    timeline
      .fromTo(
        q(".career-timeline"),
        { maxHeight: "10%" },
        { maxHeight: "100%", duration: 0.5 },
        0
      )
      .fromTo(q(".career-timeline"), { opacity: 0 }, { opacity: 1, duration: 0.1 }, 0)
      .fromTo(
        q(".career-info-box"),
        { opacity: 0 },
        { opacity: 1, stagger: 0.1, duration: 0.5 },
        0
      )
      .fromTo(
        q(".career-dot"),
        { animationIterationCount: "infinite" },
        {
          animationIterationCount: "1",
          delay: 0.3,
          duration: 0.1,
        },
        0
      );

    if (window.innerWidth > 1024) {
      timeline.fromTo(section, { y: 0 }, { y: "20%", duration: 0.5, delay: 0.2 }, 0);
    }
  });
}
