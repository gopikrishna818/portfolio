import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointsMaterial, ShaderMaterial } from 'three';
import * as THREE from 'three';

// Advanced particle system with custom shaders
const ParticleShaderMaterial = new ShaderMaterial({
  uniforms: {
    uTime: { value: 0 },
    uSize: { value: 2.0 },
    uOpacity: { value: 0.6 },
    uColorStart: { value: new THREE.Color('#8b5cf6') },
    uColorEnd: { value: new THREE.Color('#06b6d4') },
    uMousePosition: { value: new THREE.Vector2(0, 0) },
    uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
  },
  vertexShader: `
    uniform float uTime;
    uniform float uSize;
    uniform vec2 uMousePosition;
    uniform vec2 uResolution;
    
    attribute float scale;
    attribute float phase;
    attribute vec3 velocity;
    
    varying float vOpacity;
    varying vec3 vColor;
    
    void main() {
      // Calculate mouse influence
      vec2 mouseInfluence = (uMousePosition / uResolution) * 2.0 - 1.0;
      float mouseDistance = distance(position.xy, mouseInfluence * 5.0);
      float mouseEffect = 1.0 / (1.0 + mouseDistance * 0.5);
      
      // Animated position with mouse repulsion
      vec3 animatedPosition = position;
      animatedPosition.x += sin(uTime * 0.5 + phase) * 0.3;
      animatedPosition.y += cos(uTime * 0.3 + phase) * 0.2;
      animatedPosition.z += sin(uTime * 0.7 + phase) * 0.1;
      
      // Mouse repulsion effect
      vec2 mouseDirection = normalize(animatedPosition.xy - mouseInfluence * 5.0);
      animatedPosition.xy += mouseDirection * mouseEffect * 0.8;
      
      // Neural network connections effect
      float connectionStrength = sin(uTime + phase) * 0.5 + 0.5;
      animatedPosition += velocity * connectionStrength * 0.1;
      
      vec4 mvPosition = modelViewMatrix * vec4(animatedPosition, 1.0);
      
      // Size based on distance and mouse proximity
      float sizeMultiplier = scale * (1.0 + mouseEffect * 0.5);
      gl_PointSize = uSize * sizeMultiplier * (300.0 / -mvPosition.z);
      
      gl_Position = projectionMatrix * mvPosition;
      
      // Varying for fragment shader
      vOpacity = (sin(uTime * 2.0 + phase) * 0.3 + 0.7) * (1.0 + mouseEffect * 0.3);
      vColor = mix(vec3(0.4, 0.2, 0.8), vec3(0.0, 0.8, 1.0), connectionStrength);
    }
  `,
  fragmentShader: `
    uniform float uOpacity;
    uniform vec3 uColorStart;
    uniform vec3 uColorEnd;
    
    varying float vOpacity;
    varying vec3 vColor;
    
    void main() {
      // Create circular particle shape
      float distance = length(gl_PointCoord - vec2(0.5));
      float alpha = 1.0 - smoothstep(0.0, 0.5, distance);
      
      // Gradient from center to edge
      float gradient = 1.0 - distance * 2.0;
      vec3 finalColor = mix(uColorEnd, uColorStart, gradient);
      
      // Apply neural network glow effect
      vec3 glowColor = mix(finalColor, vColor, 0.6);
      
      gl_FragColor = vec4(glowColor, alpha * vOpacity * uOpacity);
    }
  `,
  transparent: true,
  blending: THREE.AdditiveBlending,
  depthWrite: false
});

interface WebGLParticlesProps {
  count?: number;
  mousePosition: { x: number; y: number };
}

function WebGLParticles({ count = 2000, mousePosition }: WebGLParticlesProps) {
  const pointsRef = useRef<Points>(null);
  const { viewport } = useThree();

  // Generate particle positions and attributes
  const { positions, scales, phases, velocities } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);
    const phases = new Float32Array(count);
    const velocities = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Neural network-like distribution
      const radius = Math.random() * 8;
      const angle = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * 6;

      positions[i * 3] = Math.cos(angle) * radius + (Math.random() - 0.5) * 2;
      positions[i * 3 + 1] = height + (Math.random() - 0.5) * 4;
      positions[i * 3 + 2] = Math.sin(angle) * radius + (Math.random() - 0.5) * 2;

      scales[i] = Math.random() * 0.8 + 0.2;
      phases[i] = Math.random() * Math.PI * 2;

      // Random velocity for neural connections
      velocities[i * 3] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
    }

    return { positions, scales, phases, velocities };
  }, [count]);

  // Animation loop
  useFrame((state) => {
    if (pointsRef.current?.material) {
      const material = pointsRef.current.material as ShaderMaterial;
      material.uniforms.uTime.value = state.clock.elapsedTime;
      material.uniforms.uMousePosition.value.set(
        mousePosition.x,
        mousePosition.y
      );
      material.uniforms.uResolution.value.set(
        window.innerWidth,
        window.innerHeight
      );
    }
  });

  return (
    <points ref={pointsRef} material={ParticleShaderMaterial}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-scale"
          count={count}
          array={scales}
          itemSize={1}
        />
        <bufferAttribute
          attach="attributes-phase"
          count={count}
          array={phases}
          itemSize={1}
        />
        <bufferAttribute
          attach="attributes-velocity"
          count={count}
          array={velocities}
          itemSize={3}
        />
      </bufferGeometry>
    </points>
  );
}

// Main component with mouse tracking
export default function AdvancedParticleSystem() {
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: event.clientX,
        y: event.clientY
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <WebGLParticles mousePosition={mousePosition.current} />
        
        {/* Neural network connections */}
        <mesh position={[0, 0, -2]}>
          <planeGeometry args={[20, 20]} />
          <shaderMaterial
            transparent
            uniforms={{
              uTime: { value: 0 },
              uOpacity: { value: 0.1 }
            }}
            vertexShader={`
              varying vec2 vUv;
              void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              }
            `}
            fragmentShader={`
              uniform float uTime;
              uniform float uOpacity;
              varying vec2 vUv;
              
              void main() {
                vec2 center = vec2(0.5);
                float distance = length(vUv - center);
                float wave = sin(distance * 20.0 - uTime * 2.0) * 0.5 + 0.5;
                float alpha = wave * (1.0 - distance) * uOpacity;
                
                gl_FragColor = vec4(0.5, 0.2, 1.0, alpha);
              }
            `}
          />
        </mesh>
      </Canvas>
    </div>
  );
}
