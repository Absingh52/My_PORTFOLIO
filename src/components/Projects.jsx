// Projects.jsx
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import Contact from "./Contact";

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
        const finalY = 60 * i; // stacked offset
        const fromY = Math.round(window.innerHeight * 0.6); // start well below viewport

        // from: offscreen bottom, invisible
        // to: stacked position, fully opaque, higher zIndex for higher i
        tl.fromTo(
          card,
          {
            y: fromY,
            opacity: 0,
            scale: 0.98,
            zIndex: 110, // initial low z-index
            pointerEvents: "auto",
          },
          {
            y: finalY,
            opacity: 1,
            scale: 1,
            zIndex: 100 + i, // ensure later cards sit on top
            duration: 1.2,
            ease: "power2.out",
            // ensure zIndex change is applied immediately when that step runs
            onStart: () => {
              card.style.willChange = "transform, opacity";
              // set pointer events: top card should capture interaction; lower cards ignore
              cards.forEach((c, idx) => {
                c.style.pointerEvents = idx < i ? "none" : "auto";
                // ensure links inside are always clickable
                const links = c.querySelectorAll("a, button");
                links.forEach(link => {
                  link.style.pointerEvents = "auto";
                });
              });
            },
          },
          i * 1.2 
        );
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
    <section id="projects" className="trial-wrapper flex flex-col  rounded-b-[4rem] items-center  ">
      <h1 className="font-bold text-[8rem] pt-10! ">PROJECTS</h1>

      <div className="trial-inner pb-30! " ref={containerRef}>
        

        <div className="trial-stage mt-2! ">
          {["01", "02", "03","04"].map((num, i) => (
            <div
              key={num}
              className="trial-card border-2! border-white! "
              ref={(el) => (cardsRef.current[i] = el)}
              aria-hidden={false}
            >
             <div className="flex justify-between items-center px-2! mb-8!">
               <div className=" flex justify-center items-center gap-3 ">
                <h3 className="text-7xl font-bold"> {num}</h3>
                <div className="flex flex-col ">
                   <p className="text-4xl font-bold tracking-wider">Project</p>
                   <p className="text-md">
                  This is a brief description of project {num}. It showcases my skills
                   </p>
                </div>
               </div>
              <a 
                href={`https://your-project-${num}.com`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (e.currentTarget.href.includes("your-project")) {
                    e.preventDefault();
                    alert(`Project ${num} link - add your actual URL`);
                  }
                }}
                className="border-2 border-white px-10! py-3! rounded-4xl hover:bg-white hover:text-black transition-colors cursor-pointer z-50 relative"
              >
                Live Project
              </a>
             </div>

              <div className="flex justify-center   gap-5 ">
                <img src={project1} className="rounded-4xl w-[50%] h-[20%]" alt="" />
                <div className=" flex flex-col gap-5 ">
                  <img src={project2} className="rounded-[3rem]  h-[26%] " alt="" />
                  <img src={project3} className="rounded-[3rem] h-[15%]" alt="" />
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
    <Contact/>
    </>
  );
}
