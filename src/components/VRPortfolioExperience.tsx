import { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
  OrbitControls, 
  Text, 
  Box, 
  Sphere, 
  Environment,
  Html,
  useTexture,
  Float,
  MeshDistortMaterial,
  ContactShadows
} from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Headset, 
  Monitor, 
  Smartphone, 
  X, 
  RotateCcw,
  Maximize,
  Settings,
  Volume2,
  VolumeX,
  Pause,
  Play
} from 'lucide-react';
import * as THREE from 'three';

interface VRPortfolioProps {
  isOpen: boolean;
  onClose: () => void;
}

// 3D Portfolio Data
const PORTFOLIO_3D_DATA = {
  skills: [
    { name: 'React', level: 0.9, color: '#61DAFB', position: [-3, 2, 0] },
    { name: 'TypeScript', level: 0.85, color: '#3178C6', position: [3, 2, 0] },
    { name: 'Node.js', level: 0.8, color: '#339933', position: [-3, -2, 0] },
    { name: 'Python', level: 0.9, color: '#3776AB', position: [3, -2, 0] },
    { name: 'AI/ML', level: 0.85, color: '#FF6B6B', position: [0, 3, -2] },
    { name: 'Cloud', level: 0.8, color: '#FF9500', position: [0, -3, -2] }
  ],
  projects: [
    {
      title: 'AI Pipeline',
      description: 'Enterprise-grade AI data processing system',
      tech: ['Python', 'TensorFlow', 'AWS'],
      position: [-4, 0, -3],
      color: '#8B5CF6'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time data visualization platform',
      tech: ['React', 'D3.js', 'WebSocket'],
      position: [4, 0, -3],
      color: '#06B6D4'
    },
    {
      title: 'Microservices',
      description: 'Scalable distributed architecture',
      tech: ['Node.js', 'Docker', 'Kubernetes'],
      position: [0, 0, -5],
      color: '#10B981'
    }
  ]
};

// 3D Skill Visualization
function SkillSphere({ skill, onClick }: { skill: any; onClick: (skill: any) => void }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 2) * 0.02;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <mesh
        ref={meshRef}
        position={skill.position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => onClick(skill)}
        scale={hovered ? 1.2 : 1}
      >
        <sphereGeometry args={[skill.level, 32, 32]} />
        <MeshDistortMaterial
          color={skill.color}
          transparent
          opacity={0.8}
          distort={0.3}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
        
        {/* Skill label */}
        <Html
          position={[0, skill.level + 0.5, 0]}
          center
          distanceFactor={8}
        >
          <div className="bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20">
            {skill.name}
          </div>
        </Html>
        
        {/* Orbiting particles */}
        <group>
          {[...Array(5)].map((_, i) => (
            <mesh
              key={i}
              position={[
                Math.cos((i / 5) * Math.PI * 2) * (skill.level + 0.3),
                Math.sin((i / 5) * Math.PI * 2) * 0.2,
                Math.sin((i / 5) * Math.PI * 2) * (skill.level + 0.3)
              ]}
            >
              <sphereGeometry args={[0.05]} />
              <meshStandardMaterial color={skill.color} emissive={skill.color} emissiveIntensity={0.3} />
            </mesh>
          ))}
        </group>
      </mesh>
    </Float>
  );
}

// 3D Project Card
function ProjectCard({ project, onClick }: { project: any; onClick: (project: any) => void }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.3}
      floatIntensity={0.3}
    >
      <mesh
        ref={meshRef}
        position={project.position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => onClick(project)}
        scale={hovered ? 1.1 : 1}
      >
        <boxGeometry args={[2, 1.5, 0.2]} />
        <meshStandardMaterial
          color={project.color}
          transparent
          opacity={0.9}
          metalness={0.7}
          roughness={0.3}
        />
        
        {/* Project info */}
        <Html
          position={[0, 0, 0.11]}
          center
          distanceFactor={6}
          transform
        >
          <div className="w-48 p-4 bg-black/90 text-white rounded-lg backdrop-blur-sm border border-white/20">
            <h3 className="font-bold text-sm mb-1">{project.title}</h3>
            <p className="text-xs text-gray-300 mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-1">
              {project.tech.map((tech: string) => (
                <span key={tech} className="text-xs bg-white/20 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Html>
      </mesh>
    </Float>
  );
}

// Neural Network Background
function NeuralNetwork() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const positions = new Float32Array(200 * 3);
  for (let i = 0; i < 200; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={200}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#8B5CF6"
        size={0.05}
        transparent
        opacity={0.6}
      />
    </points>
  );
}

// VR Scene Component
function VRScene({ onSkillClick, onProjectClick }: { 
  onSkillClick: (skill: any) => void;
  onProjectClick: (project: any) => void;
}) {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#8B5CF6" intensity={0.5} />
      
      {/* Environment */}
      <Environment preset="night" />
      
      {/* Neural Network Background */}
      <NeuralNetwork />
      
      {/* Skills Visualization */}
      {PORTFOLIO_3D_DATA.skills.map((skill) => (
        <SkillSphere
          key={skill.name}
          skill={skill}
          onClick={onSkillClick}
        />
      ))}
      
      {/* Projects */}
      {PORTFOLIO_3D_DATA.projects.map((project) => (
        <ProjectCard
          key={project.title}
          project={project}
          onClick={onProjectClick}
        />
      ))}
      
      {/* Center logo/title */}
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
        <Text
          position={[0, 0, 0]}
          fontSize={0.8}
          color="#FFFFFF"
          anchorX="center"
          anchorY="middle"
          font="/fonts/inter-bold.woff2"
        >
          GOPIKRISHNA
        </Text>
        <Text
          position={[0, -0.6, 0]}
          fontSize={0.3}
          color="#8B5CF6"
          anchorX="center"
          anchorY="middle"
          font="/fonts/inter-regular.woff2"
        >
          Senior Developer & AI Engineer
        </Text>
      </Float>
      
      {/* Contact Shadows */}
      <ContactShadows
        position={[0, -8, 0]}
        opacity={0.3}
        scale={30}
        blur={2}
        far={20}
      />
      
      {/* Controls */}
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={5}
        maxDistance={20}
        autoRotate={true}
        autoRotateSpeed={0.5}
      />
    </>
  );
}

// Controls Panel
function VRControls({ 
  isVRMode, 
  onVRToggle, 
  isAutoRotate, 
  onAutoRotateToggle,
  isAudioEnabled,
  onAudioToggle,
  onReset 
}: {
  isVRMode: boolean;
  onVRToggle: () => void;
  isAutoRotate: boolean;
  onAutoRotateToggle: () => void;
  isAudioEnabled: boolean;
  onAudioToggle: () => void;
  onReset: () => void;
}) {
  return (
    <div className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur-sm rounded-lg p-3 border border-white/20">
      <div className="flex items-center space-x-3">
        <button
          onClick={onVRToggle}
          className={`p-2 rounded-full transition-colors ${
            isVRMode ? 'bg-purple-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
          title="Toggle VR Mode"
        >
          <Headset className="w-4 h-4" />
        </button>
        
        <button
          onClick={onAutoRotateToggle}
          className={`p-2 rounded-full transition-colors ${
            isAutoRotate ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
          title="Auto Rotate"
        >
          {isAutoRotate ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
        
        <button
          onClick={onAudioToggle}
          className={`p-2 rounded-full transition-colors ${
            isAudioEnabled ? 'bg-green-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
          title="Toggle Audio"
        >
          {isAudioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        </button>
        
        <button
          onClick={onReset}
          className="p-2 rounded-full bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors"
          title="Reset View"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

// Info Panel
function InfoPanel({ 
  selectedItem, 
  onClose 
}: { 
  selectedItem: any; 
  onClose: () => void; 
}) {
  if (!selectedItem) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 300 }}
      className="absolute top-4 right-4 w-80 bg-black/90 backdrop-blur-sm rounded-lg p-4 border border-white/20 z-10"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white font-bold text-lg">
          {selectedItem.name || selectedItem.title}
        </h3>
        <button
          onClick={onClose}
          className="p-1 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      
      {selectedItem.level && (
        <div className="mb-3">
          <div className="text-sm text-gray-300 mb-1">Proficiency Level</div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${selectedItem.level * 100}%` }}
              className="h-2 rounded-full"
              style={{ backgroundColor: selectedItem.color }}
            />
          </div>
          <div className="text-xs text-gray-400 mt-1">
            {Math.round(selectedItem.level * 100)}% Expertise
          </div>
        </div>
      )}
      
      {selectedItem.description && (
        <div className="mb-3">
          <div className="text-sm text-gray-300 mb-1">Description</div>
          <p className="text-gray-100 text-sm">{selectedItem.description}</p>
        </div>
      )}
      
      {selectedItem.tech && (
        <div>
          <div className="text-sm text-gray-300 mb-2">Technologies</div>
          <div className="flex flex-wrap gap-2">
            {selectedItem.tech.map((tech: string) => (
              <span
                key={tech}
                className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function VRPortfolioExperience({ isOpen, onClose }: VRPortfolioProps) {
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isVRMode, setIsVRMode] = useState(false);
  const [isAutoRotate, setIsAutoRotate] = useState(true);
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);

  // Spatial audio context
  useEffect(() => {
    if (isAudioEnabled) {
      // Initialize spatial audio for VR experience
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      // Add ambient sound effects
    }
  }, [isAudioEnabled]);

  const handleSkillClick = (skill: any) => {
    setSelectedItem(skill);
  };

  const handleProjectClick = (project: any) => {
    setSelectedItem(project);
  };

  const handleReset = () => {
    setSelectedItem(null);
    // Reset camera position logic would go here
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black z-50"
      >
        {/* Header */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-black/80 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
          <h2 className="text-white font-bold text-lg flex items-center gap-2">
            <Headset className="w-5 h-5 text-purple-400" />
            3D Portfolio Experience
          </h2>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-3 bg-black/80 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* VR Controls */}
        <VRControls
          isVRMode={isVRMode}
          onVRToggle={() => setIsVRMode(!isVRMode)}
          isAutoRotate={isAutoRotate}
          onAutoRotateToggle={() => setIsAutoRotate(!isAutoRotate)}
          isAudioEnabled={isAudioEnabled}
          onAudioToggle={() => setIsAudioEnabled(!isAudioEnabled)}
          onReset={handleReset}
        />

        {/* Info Panel */}
        <AnimatePresence>
          <InfoPanel
            selectedItem={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        </AnimatePresence>

        {/* Instructions */}
        <div className="absolute bottom-4 left-4 z-10 bg-black/80 backdrop-blur-sm rounded-lg p-3 border border-white/20">
          <div className="text-white text-sm">
            <p className="font-medium mb-1">Navigation:</p>
            <p className="text-gray-300 text-xs">• Click and drag to rotate</p>
            <p className="text-gray-300 text-xs">• Scroll to zoom</p>
            <p className="text-gray-300 text-xs">• Click objects for details</p>
          </div>
        </div>

        {/* 3D Canvas */}
        <div className="w-full h-full">
          <Canvas
            camera={{ position: [0, 0, 10], fov: 50 }}
            dpr={[1, 2]}
            performance={{ min: 0.5 }}
            gl={{ 
              powerPreference: "high-performance",
              alpha: false,
              antialias: true
            }}
          >
            <Suspense fallback={null}>
              <VRScene
                onSkillClick={handleSkillClick}
                onProjectClick={handleProjectClick}
              />
            </Suspense>
          </Canvas>
        </div>

        {/* Loading Overlay */}
        <Suspense fallback={
          <div className="absolute inset-0 flex items-center justify-center bg-black z-40">
            <div className="text-white text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full mx-auto mb-4"
              />
              <p className="text-lg font-medium">Loading 3D Experience...</p>
              <p className="text-sm text-gray-400">Preparing immersive portfolio</p>
            </div>
          </div>
        }>
          <></>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}
