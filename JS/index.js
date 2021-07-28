gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();

tl.from(".intro-left", {
  y: "-20%",
  opacity: 0,
  duration: 1.5,
  ease: Power4.easeout,
});
tl.from(
  ".stagger-intro",
  {
    opacity: 0,
    y: -50,
    stagger: 0.4,
    ease: Power4.easeOut,
    duration: 2.5,
  },
  "-=1"
);
tl.from(
  ".hero-design",
  {
    opacity: 0.001,
    y: 100,
    ease: Power4.easeOut,
    duration: 0.8,
  },
  "-=3"
);
gsap.from(
  ".square-anim",
  {
    stagger: 0.3,
    scale: 0.1,
    duration: 0.9,
    ease: Back.easeOut,
  },
  "-=1.5"
);
gsap.from(".featured-project", {
  scrollTrigger: {
    trigger: ".featured-project",
    start: "top bottom",
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  stagger: 0.3,
});

gsap.from(".skill-card", {
  scrollTrigger: {
    trigger: ".skills",
    start: "top bottom",
  },
  y: 70,
  opacity: 0,
  duration: 1.5,
  stagger: 0.3,
});

gsap.from(".project-move-in-left", {
  scrollTrigger: {
    trigger: ".projects",
    start: "top bottom",
  },
  x: -70,
  opacity: 0,
  duration: 1.5,
  stagger: 0.3,
});

gsap.from(".project-move-in-right", {
  scrollTrigger: {
    trigger: ".projects",
    start: "top bottom",
  },
  x: 70,
  opacity: 0,
  duration: 1.5,
  stagger: 0.4,
});
gsap.from(".background-img-about-me", {
  scrollTrigger: {
    trigger: ".about-me",
    start: "top bottom",
  },
  y: 100,
  opacity: 0,
  duration: 1.5,
  stagger: 0.4,
});
gsap.from(".about-me-info", {
  scrollTrigger: {
    trigger: ".about-me-info",
    start: "top bottom",
  },
  x: 100,
  opacity: 0,
  duration: 1.5,
  stagger: 0.4,
});
