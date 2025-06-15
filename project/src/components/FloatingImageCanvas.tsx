import React from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { Float, Environment, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import downloadImg from './download.png'; // must be a transparent PNG

const FloatingImage = () => {
  const texture = useLoader(THREE.TextureLoader, downloadImg);

  return (
    <Float
      speed={2}              // how fast it floats
      rotationIntensity={2}  // how much it rotates
      floatIntensity={3}     // how much it floats
    >
      <mesh>
        <planeGeometry args={[2.8, 2.8]} />
        <meshStandardMaterial map={texture} transparent />
      </mesh>
    </Float>
  );
};

const FloatingImageCanvas = () => {
  return (
    <Canvas
      className="w-[320px] h-[320px]"
      camera={{ position: [0, 0, 5], fov: 30 }}
    >
      <ambientLight intensity={1} />
      <directionalLight intensity={1} position={[3, 3, 3]} />
      <Environment preset="sunset" />
      <OrbitControls enableZoom={false} />
      <FloatingImage />
    </Canvas>
  );
};

export default FloatingImageCanvas;
