
import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Text3D, Center, Environment, Float, Html, useProgress, useGLTF, Sparkles, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

// 3D Progress Orb
function ProgressOrb({ progress }: { progress: number }) {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame(() => {
    mesh.current.rotation.y += 0.01;
    mesh.current.rotation.x += 0.005;
  });
  return (
    <group>
      <mesh ref={mesh}>
        <sphereGeometry args={[1.1, 64, 64]} />
        <meshPhysicalMaterial color="#00fff7" metalness={0.7} roughness={0.1} clearcoat={1} transmission={0.7} ior={1.5} thickness={1.2} />
      </mesh>
      {/* Glowing ring for progress */}
      <mesh rotation-x={Math.PI / 2}>
        <torusGeometry args={[1.25, 0.08, 32, 128, (progress / 100) * Math.PI * 2]} />
        <meshStandardMaterial color="#fff176" emissive="#fff176" emissiveIntensity={1.5} transparent opacity={0.8} />
      </mesh>
    </group>
  );
}

// 3D Initials with depth, glass/metallic material, and hologram effect
// Error boundary for Text3D font loading
function Initials3D({ onClick }: { onClick?: () => void }) {
  const [error, setError] = useState<string | null>(null);
  // Try both with and without leading slash
  const fontPaths = ["fonts/helvetiker_regular.typeface.json", "/fonts/helvetiker_regular.typeface.json"];
  const [fontIdx, setFontIdx] = useState(0);

  // Fallback: if error, try alternate path
  useEffect(() => {
    if (error && fontIdx === 0) setFontIdx(1);
  }, [error, fontIdx]);

  // Show error if both fail
  if (error && fontIdx === 1) {
    return (
      <group>
        <mesh>
          <boxGeometry args={[2, 1, 0.2]} />
          <meshStandardMaterial color="red" />
        </mesh>
        <Html center style={{ color: 'white', background: 'rgba(0,0,0,0.7)', padding: 8, borderRadius: 8 }}>
          3D Text failed to load font<br />
          <span style={{ fontSize: 12 }}>{error}</span>
        </Html>
      </group>
    );
  }

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.2}>
      <Center>
        <Text3D
          font={fontPaths[fontIdx]}
          size={1.5}
          height={0.5}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          curveSegments={32}
          onClick={onClick}
          onError={(e: any) => setError(e?.message || 'Font load error')}
        >
          GK
          <meshPhysicalMaterial
            color="#00fff7"
            metalness={0.8}
            roughness={0.15}
            clearcoat={1}
            transmission={0.7}
            ior={1.5}
            thickness={1.2}
            reflectivity={1}
            envMapIntensity={1.5}
          />
        </Text3D>
        {/* Visible box for debug: always show */}
        <mesh position={[0, -1.5, 0]}>
          <boxGeometry args={[2, 0.2, 0.2]} />
          <meshStandardMaterial color="#00fff7" opacity={0.3} transparent />
        </mesh>
      </Center>
    </Float>
  );
}

// 3D Particles with depth and glow
function Particles3D() {
  const count = 120;
  const mesh = useRef<THREE.Points>(null!);
  const positions = React.useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8);
    }
    return new Float32Array(arr);
  }, [count]);
  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#fff" size={0.12} sizeAttenuation transparent opacity={0.7} />
    </points>
  );
}

// Parallax camera motion
function ParallaxCamera() {
  const { camera, mouse } = useThree();
  useFrame(() => {
    camera.position.x += (mouse.x * 1.2 - camera.position.x) * 0.08;
    camera.position.y += (mouse.y * 1.2 - camera.position.y) * 0.08;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

// Aurora gradient background (shader effect)
function AuroraBackground() {
  return (
    <Html fullscreen style={{ pointerEvents: 'none', zIndex: 0 }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 60% 40%, #00fff7 0%, transparent 70%), radial-gradient(ellipse at 30% 70%, #fff176 0%, transparent 80%), linear-gradient(120deg, #0f2027 0%, #2c5364 100%)',
        filter: 'blur(8px) brightness(1.1)',
        width: '100vw',
        height: '100vh',
        zIndex: 0
      }} />
    </Html>
  );
}

// Main Loading Animation Component
const CustomLoadingAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  // Simulate loading progress
  useEffect(() => {
    if (progress < 100) {
      const t = setTimeout(() => setProgress(progress + 2 + Math.random() * 3), 60);
      return () => clearTimeout(t);
    } else {
      setTimeout(() => {
        setDone(true);
        onComplete();
      }, 1200);
    }
  }, [progress, onComplete]);

  // Easter egg: click initials for a burst
  const [burst, setBurst] = useState(false);
  const handleInitialsClick = () => {
    setBurst(true);
    setTimeout(() => setBurst(false), 800);
  };

  if (done) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'black' }}>
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }} shadows>
        <color attach="background" args={["#0f2027"]} />
        <AuroraBackground />
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 10, 7]} intensity={1.2} castShadow />
        <Environment preset="city" />
        <ParallaxCamera />
        <Particles3D />
        <Sparkles count={40} scale={[8, 8, 8]} size={2.5} color="#fff176" speed={0.5} />
        <ContactShadows position={[0, -2, 0]} opacity={0.25} width={10} height={10} blur={2.5} far={2.5} />
        <group position={[0, 0.5, 0]}>
          <Initials3D onClick={handleInitialsClick} />
          {burst && <Sparkles count={80} scale={[2, 2, 2]} size={4} color="#00fff7" speed={2} />} 
        </group>
        <group position={[0, -2.2, 0]}>
          <ProgressOrb progress={progress} />
        </group>
        <Html center style={{ pointerEvents: 'none', textAlign: 'center', color: 'white', fontFamily: 'sans-serif', fontWeight: 600, fontSize: 24, textShadow: '0 2px 16px #000' }}>
          <div style={{ marginTop: 220 }}>
            <div style={{ fontSize: 32, letterSpacing: 2 }}>Gopi Krishna</div>
            <div style={{ fontSize: 18, opacity: 0.8 }}>Data Whisperer & Full-Stack Engineer</div>
            <div style={{ fontSize: 16, marginTop: 16, color: '#fff176' }}>{Math.round(progress)}% Loading Experience...</div>
          </div>
        </Html>
      </Canvas>
    </div>
  );
};

export default CustomLoadingAnimation;
