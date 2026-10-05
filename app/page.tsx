/* eslint-disable @next/next/no-img-element */
"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stats = [
  { value: "58%", label: "Increase in pick-up point use" },
  { value: "23%", label: "Decrease in customer phone calls" },
  { value: "27%", label: "Increase in pick-up point use" },
  { value: "40%", label: "Decrease in customer phone calls" },
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const letters = headlineRef.current?.querySelectorAll(".letter");
      const cards = statsRef.current?.querySelectorAll(".stat");

      // Premium initial reveal
      gsap.fromTo(
        ".eyebrow",
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.15 }
      );

      gsap.fromTo(
        letters,
        { opacity: 0, y: 32, rotateX: -70 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.75,
          stagger: 0.045,
          delay: 0.3,
          ease: "power4.out",
        }
      );

      gsap.fromTo(
        cards,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.12,
          delay: 0.65,
          ease: "power3.out",
        }
      );

      // Scroll-linked car movement. Only transform properties are animated.
      gsap.fromTo(
        carRef.current,
        {
          xPercent: 85,
          yPercent: 5,
          scale: 0.72,
          rotation: 2,
        },
        {
          xPercent: -125,
          yPercent: -4,
          scale: 1.05,
          rotation: -2,
          ease: "none",
          force3D: true,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.4,
            invalidateOnRefresh: true,
          },
        }
      );

      // Subtle content parallax in the opposite direction.
      gsap.to(".hero-copy", {
        yPercent: -14,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main>
      <section ref={heroRef} className="hero-section">
        <div className="hero-sticky">
          <div className="hero-grid" aria-hidden="true" />

          <div className="hero-copy">
            <p className="eyebrow">SCROLL TO EXPLORE · 2026</p>

            <h1 ref={headlineRef} className="hero-title" aria-label="WELCOME ITZ FIZZ">
              {"WELCOME ITZ FIZZ".split("").map((char, index) => (
                <span
                  className="letter"
                  key={`${char}-${index}`}
                  aria-hidden="true"
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>

            <p className="hero-description">
              A smooth, scroll-driven visual experience built around motion,
              spacing and interaction.
            </p>

            <div ref={statsRef} className="stats">
              {stats.map((stat) => (
                <article className="stat" key={stat.value + stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          </div>

          <div ref={carRef} className="car-wrap" aria-hidden="true">
            <img src="/car.svg" alt="" className="car" />
          </div>

          <div className="scroll-hint">
            <span>SCROLL</span>
            <i />
          </div>
        </div>
      </section>

      <section className="after-section">
        <p className="section-kicker">THE EXPERIENCE</p>
        <h2>Motion that responds to you.</h2>
        <p>
          The hero above is pinned during the scroll sequence. GSAP ScrollTrigger
          maps scroll progress to the car&apos;s transform, so the animation is
          reversible and controlled by the user instead of autoplaying.
        </p>
      </section>
    </main>
  );
}
