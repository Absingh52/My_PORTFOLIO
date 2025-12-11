// src/components/Skills.jsx
import React, { Suspense, useMemo, useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Decal, OrbitControls, useTexture } from "@react-three/drei";
import { a as threeAnimated, useSpring as useThreeSpring } from "@react-spring/three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import Projects from "./ProjectsTrial";

gsap.registerPlugin(ScrollTrigger);

/* -------------------------
  Ball component — click bounce only
--------------------------*/
function Ball({ img, position = [0, 0, 0], index = 0 }) {
  const meshRef = useRef();
  const decalRef = useRef();
  const { camera } = useThree();

  // load decal texture (drei hook)
  const decalTexture = useTexture(img);

  // click state
  const [clicked, setClicked] = useState(false);

  // spring for click bounce (scale)
  const spring = useThreeSpring(() => ({
    scale: 1,
  }));
  // update spring when clicked
  useEffect(() => {
    if (clicked) {
      spring.start({ scale: 1.35, config: { tension: 400, friction: 18 } });
      const t = setTimeout(() => {
        spring.start({ scale: 1.0, config: { tension: 300, friction: 25 } });
        setClicked(false);
      }, 180);
      return () => clearTimeout(t);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clicked]);

  // animation loop: gentle rotation and bob
  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const mesh = meshRef.current;
    const t = state.clock.elapsedTime + index * 0.6;

    mesh.rotation.y += delta * 0.00; // slow base rotation
    mesh.rotation.x = Math.sin(t * 0.6) * 0.00;
    mesh.rotation.z = Math.sin(t * 0.35) * 1.13;
    mesh.position.y = position[1] + Math.sin(t * 0.6) * 0.12;

    // make decal face camera
    if (decalRef.current) {
      decalRef.current.quaternion.copy(camera.quaternion);
    }
  });

  return (
    <threeAnimated.mesh
      ref={meshRef}
      position={position}
      scale={spring.scale}
      
      castShadow
      receiveShadow
    >
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial color="#eaeaea" flatShading polygonOffset polygonOffsetFactor={-4} />
      {decalTexture && (
        <Decal
          ref={decalRef}
          position={[0, 0, 1.04]}
          rotation={[0, 0, 0]}
          map={decalTexture}
          scale={0.88}
          polygonOffset
          polygonOffsetFactor={-10}
        />
      )}
    </threeAnimated.mesh>
  );
}

/* -------------------------
  Scene: grid + lighting
--------------------------*/
function Scene({ icons }) {
  const positions = [
    [-6, 2.8, 0], [-2, 2.8, 0], [2, 2.8, 0], [6, 2.8, 0],
    [-6, -0.4, 0], [-2, -0.4, 0], [2, -0.4, 0], [6, -0.4, 0],
    [-6, -3.6, 0], [-2, -3.6, 0], [2, -3.6, 0], [6, -3.6, 0],
  ];

  return (
    <>
      <ambientLight intensity={0.65} />
      <directionalLight position={[5, 8, 3]} intensity={4.0} />
      <directionalLight position={[-6, -4, -1]} intensity={0.35} />

      {icons.map((icon, i) => (
        <Ball key={i} img={icon} position={positions[i] || [0, 0, 0]} index={i} />
      ))}
    </>
  );
}

/* -------------------------
  Skills (default export)
--------------------------*/
export default function Skills() {
  // icons: removed redux and threejs; react image renamed to reactjs.png
  const icons = useMemo(
    () => [
      "/tech/html.png",
      "/tech/css.png",
      "/tech/javascript.png",
      "/tech/typescript.png",
      "/tech/cpp.png",
      "/tech/react.png",
      "/tech/nodejs.png",
      "/tech/mongodb.png",
     
      "/tech/aws.png",
      "/tech/docker.png",
      "/tech/tailwind.png",
      "/tech/sql.png",
    ],
    []
  );

  const containerRef = useRef();
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skills-canvas-wrap",
        { y: 60, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".skills-canvas-wrap",
            start: "top 80%",
            end: "top 40%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
    <section ref={containerRef} id="skills" className="relative w-screen min-h-screen bg-black text-white overflow-hidden">
      <div className="skills-spot pointer-events-none" />

      <div className="w-full flex justify-center pt-10! mt-10!">
        <h2 className="text-[4.4rem] md:text-[5.6rem] font-extrabold tracking-wider">SKILLS</h2>
      </div>

      <div className="skills-canvas-wrap w-full h-[75vh] flex justify-center items-start mt-2! opacity-0">
        <div style={{ width: "100%", maxWidth: 1400, height: "100%", padding: "0 22px" }}>
          <Canvas camera={{ position: [0, 0, 18], fov: 45 }} shadows>
            <Suspense fallback={null}>
              <Scene icons={icons} />
            </Suspense>
            <OrbitControls enableZoom={false} minPolarAngle={Math.PI / 2 - 1.2} maxPolarAngle={Math.PI / 2 + 1.2} />
          </Canvas>
        </div>
      </div>

    
    </section>
    <Projects/>
    </>
  );
}
