// src/components/Ball.jsx
import React, { useRef } from "react";
import { Decal, Float, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Ball = ({ imgUrl }) => {
  const meshRef = useRef();
  const [decal] = useTexture([imgUrl]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // smooth floating rotation
    meshRef.current.rotation.y += delta * 0.6;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.6) * 0.09;
    meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.05;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} castShadow receiveShadow scale={2.8}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#f0f0f0"
          flatShading
          polygonOffset
          polygonOffsetFactor={-5}
        />

        <Decal
          position={[0, 0, 1]}
          rotation={[0, 0, 0]}
          map={decal}
          scale={1}
        />
      </mesh>
    </Float>
  );
};

export default Ball;
