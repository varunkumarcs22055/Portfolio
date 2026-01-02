import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Gold-colored floating geometric shapes
const GoldShape = ({ position, rotation, scale, shape = 'octahedron' }) => {
    const meshRef = useRef();
    const goldColor = new THREE.Color('#c9a227');

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.002;
            meshRef.current.rotation.y += 0.003;
        }
    });

    const geometry = useMemo(() => {
        switch (shape) {
            case 'octahedron':
                return <octahedronGeometry args={[1, 0]} />;
            case 'icosahedron':
                return <icosahedronGeometry args={[1, 0]} />;
            case 'dodecahedron':
                return <dodecahedronGeometry args={[1, 0]} />;
            case 'tetrahedron':
                return <tetrahedronGeometry args={[1, 0]} />;
            case 'torus':
                return <torusGeometry args={[1, 0.3, 16, 32]} />;
            case 'torusKnot':
                return <torusKnotGeometry args={[0.8, 0.25, 64, 16]} />;
            default:
                return <octahedronGeometry args={[1, 0]} />;
        }
    }, [shape]);

    return (
        <Float
            speed={1.5}
            rotationIntensity={0.5}
            floatIntensity={0.8}
        >
            <mesh
                ref={meshRef}
                position={position}
                rotation={rotation}
                scale={scale}
            >
                {geometry}
                <meshStandardMaterial
                    color={goldColor}
                    metalness={0.9}
                    roughness={0.1}
                    emissive={goldColor}
                    emissiveIntensity={0.1}
                    wireframe={true}
                />
            </mesh>
        </Float>
    );
};

// Solid gold shapes (for variety)
const SolidGoldShape = ({ position, rotation, scale, shape = 'octahedron' }) => {
    const meshRef = useRef();
    const goldColor = new THREE.Color('#c9a227');

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
            meshRef.current.rotation.y += 0.005;
        }
    });

    const geometry = useMemo(() => {
        switch (shape) {
            case 'octahedron':
                return <octahedronGeometry args={[1, 0]} />;
            case 'icosahedron':
                return <icosahedronGeometry args={[1, 0]} />;
            case 'box':
                return <boxGeometry args={[1, 1, 1]} />;
            case 'ring':
                return <ringGeometry args={[0.5, 1, 32]} />;
            default:
                return <octahedronGeometry args={[1, 0]} />;
        }
    }, [shape]);

    return (
        <Float
            speed={1}
            rotationIntensity={0.3}
            floatIntensity={0.5}
        >
            <mesh
                ref={meshRef}
                position={position}
                rotation={rotation}
                scale={scale}
            >
                {geometry}
                <meshStandardMaterial
                    color={goldColor}
                    metalness={0.95}
                    roughness={0.05}
                    envMapIntensity={1}
                />
            </mesh>
        </Float>
    );
};

// Gold particles floating
const GoldParticles = ({ count = 50 }) => {
    const particlesRef = useRef();

    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const sizes = new Float32Array(count);

        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 30;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
            sizes[i] = Math.random() * 0.05 + 0.02;
        }

        return { positions, sizes };
    }, [count]);

    useFrame((state) => {
        if (particlesRef.current) {
            particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
        }
    });

    return (
        <points ref={particlesRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particles.positions.length / 3}
                    array={particles.positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.08}
                color="#c9a227"
                transparent
                opacity={0.6}
                sizeAttenuation={true}
            />
        </points>
    );
};

// Main 3D Scene for Hero
const ClassicHero3D = () => {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas
                camera={{ position: [0, 0, 10], fov: 50 }}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 10, 5]} intensity={1} color="#fff8e7" />
                <directionalLight position={[-10, -10, -5]} intensity={0.3} color="#c9a227" />
                <pointLight position={[0, 0, 5]} intensity={0.5} color="#d4b84a" />

                {/* Floating Gold Geometric Shapes */}
                <GoldShape position={[-6, 3, -2]} rotation={[0.5, 0.5, 0]} scale={0.8} shape="octahedron" />
                <GoldShape position={[6, -2, -3]} rotation={[0.3, 0.8, 0]} scale={0.6} shape="icosahedron" />
                <GoldShape position={[-5, -3, -1]} rotation={[0.2, 0.4, 0]} scale={0.5} shape="dodecahedron" />
                <GoldShape position={[5, 4, -4]} rotation={[0.6, 0.2, 0]} scale={0.7} shape="tetrahedron" />

                {/* Solid Gold Accents */}
                <SolidGoldShape position={[7, 0, -5]} rotation={[0, 0, 0]} scale={0.4} shape="octahedron" />
                <SolidGoldShape position={[-7, 1, -6]} rotation={[0.5, 0, 0]} scale={0.3} shape="icosahedron" />

                {/* Gold Particles */}
                <GoldParticles count={80} />
            </Canvas>
        </div>
    );
};

export default ClassicHero3D;
