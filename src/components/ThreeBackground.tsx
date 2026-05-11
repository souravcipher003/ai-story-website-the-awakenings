import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  // Create particles
  const particlesCount = 2000;
  const positions = new Float32Array(particlesCount * 3);
  
  for (let i = 0; i < particlesCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  return (
    <>
      {/* Main glowing sphere */}
      <Sphere ref={meshRef} args={[1.15, 128, 128]} position={[-2.9, -0.45, -1.2]}>
        <MeshDistortMaterial
          color="#00ffff"
          attach="material"
          distort={0.4}
          speed={2}
          emissive="#00cccc"
          emissiveIntensity={0.35}
          transparent
          opacity={0.42}
        />
      </Sphere>

      {/* Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.02}
          color="#00ffff"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>

      {/* Ambient lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[-2.9, -0.45, -1.2]} intensity={0.8} color="#00ffff" />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#9966ff" />
    </>
  );
};

const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none opacity-80">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <AnimatedSphere />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
