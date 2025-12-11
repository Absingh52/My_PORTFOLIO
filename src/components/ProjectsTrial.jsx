// ProjectsTrial.jsx
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./projects-trial.css";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  // reset refs each render
  cardsRef.current = [];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean);
      if (!containerRef.current || cards.length === 0) return;

      // end distance: allow enough scroll room for stacking animation
      const endDistance = Math.max(window.innerHeight * 1.8, 1000 + cards.length * 300);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${endDistance}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.8,
          anticipatePin: 1,
        },
      });

      // animate cards coming from bottom and stacking with higher zIndex for later cards
      cards.forEach((card, i) => {
        const finalY = 50 * i; // stacked offset
        const fromY = Math.round(window.innerHeight * 0.8); // start well below viewport

        // from: offscreen bottom, invisible
        // to: stacked position, fully opaque, higher zIndex for higher i
        tl.fromTo(
          card,
          {
            y: fromY,
            opacity: 0,
            scale: 0.98,
            zIndex: 10, // initial low z-index
            pointerEvents: "auto",
          },
          {
            y: finalY,
            opacity: 1,
            
            zIndex: 100 + i, // ensure later cards sit on top
            duration: 1,
            ease: "power2.out",
            // ensure zIndex change is applied immediately when that step runs
            onStart: () => {
              card.style.willChange = "transform, opacity";
              // set pointer events: top card should capture interaction; lower cards ignore
              cards.forEach((c, idx) => {
                c.style.pointerEvents = idx < i ? "none" : "auto";
              });
            },
          },
          i * 0.45 // stagger
        );
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="trial-wrapper">
      <div className="trial-inner " ref={containerRef}>
        <h2 className="trial-title">Projects Trial</h2>

        <div className="trial-stage ">
          {[1, 2, 3].map((num, i) => (
            <div
              key={num}
              className="trial-card border-2! border-white! "
              ref={(el) => (cardsRef.current[i] = el)}
              aria-hidden={false}
            >
              <h3> {num}</h3>
              <p>This is a simple trial card for stacking animation.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
