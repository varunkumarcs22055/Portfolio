import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Orbiting gold ring
const OrbitingRing = ({ radius = 3, speed = 0.5, tilt = 0 }) => {
    const ringRef = useRef();

    useFrame((state) => {
        if (ringRef.current) {
            ringRef.current.rotation.z = state.clock.elapsedTime * speed;
        }
    });

    return (
        <group rotation={[tilt, 0, 0]}>
            <mesh ref={ringRef}>
                <torusGeometry args={[radius, 0.02, 16, 100]} />
                <meshStandardMaterial
                    color="#c9a227"
                    metalness={0.9}
                    roughness={0.1}
                    emissive="#c9a227"
                    emissiveIntensity={0.2}
                />
            </mesh>
        </group>
    );
};

// Floating orb with inner glow
const GlowingOrb = ({ position, scale = 1 }) => {
    const orbRef = useRef();

    useFrame((state) => {
        if (orbRef.current) {
            orbRef.current.scale.setScalar(
                scale + Math.sin(state.clock.elapsedTime * 2) * 0.1
            );
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.2} floatIntensity={1}>
            <mesh ref={orbRef} position={position}>
                <sphereGeometry args={[0.3, 32, 32]} />
                <meshStandardMaterial
                    color="#c9a227"
                    metalness={1}
                    roughness={0}
                    emissive="#d4b84a"
                    emissiveIntensity={0.5}
                    transparent
                    opacity={0.8}
                />
            </mesh>
        </Float>
    );
};

// Ambient particles floating gently
const AmbientParticles = ({ count = 100 }) => {
    const particlesRef = useRef();

    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 40;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
        }

        return positions;
    }, [count]);

    useFrame((state) => {
        if (particlesRef.current) {
            particlesRef.current.rotation.y = state.clock.elapsedTime * 0.01;
            particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
        }
    });

    return (
        <points ref={particlesRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particles.length / 3}
                    array={particles}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                color="#c9a227"
                transparent
                opacity={0.4}
                sizeAttenuation={true}
            />
        </points>
    );
};

// Background 3D scene for all pages
const Floating3DBackground = ({ intensity = 'medium' }) => {
    const particleCount = intensity === 'high' ? 150 : intensity === 'medium' ? 80 : 40;

    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 15], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 5, 5]} intensity={0.5} color="#fff8e7" />

                {/* Orbiting rings */}
                <OrbitingRing radius={8} speed={0.1} tilt={Math.PI / 6} />
                <OrbitingRing radius={10} speed={-0.08} tilt={-Math.PI / 4} />
                <OrbitingRing radius={12} speed={0.05} tilt={Math.PI / 3} />

                {/* Glowing orbs */}
                <GlowingOrb position={[-8, 4, -5]} scale={0.8} />
                <GlowingOrb position={[9, -3, -8]} scale={0.6} />
                <GlowingOrb position={[-6, -5, -3]} scale={0.5} />
                <GlowingOrb position={[7, 5, -6]} scale={0.7} />

                {/* Ambient particles */}
                <AmbientParticles count={particleCount} />
            </Canvas>
        </div>
    );
};

export default Floating3DBackground;
