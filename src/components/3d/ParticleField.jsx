import { useRef, useMemo, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleField = ({
    count = 500,
    size = 0.015,
    spread = 15,
    color = '#00f5ff',
    speed = 0.2,
    mouseInfluence = 0.5
}) => {
    const meshRef = useRef();
    const mouseRef = useRef({ x: 0, y: 0 });
    const { viewport } = useThree();

    // Generate initial positions
    const [positions, colors, scales] = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const scales = new Float32Array(count);

        const colorPrimary = new THREE.Color(color);
        const colorSecondary = new THREE.Color('#bf00ff');

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;

            // Random positions in 3D space
            positions[i3] = (Math.random() - 0.5) * spread;
            positions[i3 + 1] = (Math.random() - 0.5) * spread;
            positions[i3 + 2] = (Math.random() - 0.5) * spread;

            // Gradient colors
            const mixFactor = Math.random();
            const mixedColor = colorPrimary.clone().lerp(colorSecondary, mixFactor);
            colors[i3] = mixedColor.r;
            colors[i3 + 1] = mixedColor.g;
            colors[i3 + 2] = mixedColor.b;

            // Random scales for size variation
            scales[i] = Math.random() * 0.5 + 0.5;
        }

        return [positions, colors, scales];
    }, [count, spread, color]);

    // Track mouse position
    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Animation loop
    useFrame((state) => {
        if (!meshRef.current) return;

        const time = state.clock.elapsedTime;
        const positions = meshRef.current.geometry.attributes.position.array;

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;

            // Gentle floating motion
            positions[i3 + 1] += Math.sin(time * speed + i * 0.1) * 0.001;

            // Mouse influence
            const dx = mouseRef.current.x * viewport.width * 0.5 - positions[i3];
            const dy = mouseRef.current.y * viewport.height * 0.5 - positions[i3 + 1];
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 3) {
                const force = (3 - distance) / 3 * mouseInfluence * 0.01;
                positions[i3] -= dx * force;
                positions[i3 + 1] -= dy * force;
            }
        }

        meshRef.current.geometry.attributes.position.needsUpdate = true;
        meshRef.current.rotation.y = time * 0.02;
    });

    return (
        <points ref={meshRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={count}
                    array={colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={size}
                vertexColors
                transparent
                opacity={0.8}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    );
};

export default ParticleField;
