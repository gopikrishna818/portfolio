import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Simplified particle system with fewer particles
const SimpleParticles = () => {
  const ref = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(500 * 3); // Reduced from 2000 to 500
    
    for (let i = 0; i < 500; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    
    return positions;
  }, []);
  
  useFrame((state) => {
    if (ref.current) {
      // Slower rotation for better performance
      ref.current.rotation.x = state.clock.elapsedTime * 0.02;
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });
  
  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8B5CF6"
        size={0.008}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

// Simplified 3D Hero Background
const Hero3DBackgroundOptimized = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ background: 'transparent' }}
        frameloop="demand" // Only render when needed
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.5} />
        
        <SimpleParticles />
      </Canvas>
    </div>
  );
};

export default Hero3DBackgroundOptimized;
