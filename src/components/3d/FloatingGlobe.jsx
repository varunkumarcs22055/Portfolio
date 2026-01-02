import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingGlobe = ({
    radius = 2,
    segments = 32,
    wireframe = true,
    color = '#00f5ff',
    rotationSpeed = 0.2
}) => {
    const globeRef = useRef();
    const pointsRef = useRef();

    // Generate connection points on globe surface
    const connectionPoints = useMemo(() => {
        const points = [];
        const count = 30;

        for (let i = 0; i < count; i++) {
            const phi = Math.acos(-1 + (2 * i) / count);
            const theta = Math.sqrt(count * Math.PI) * phi;

            points.push({
                position: new THREE.Vector3(
                    radius * Math.cos(theta) * Math.sin(phi),
                    radius * Math.sin(theta) * Math.sin(phi),
                    radius * Math.cos(phi)
                ),
                scale: Math.random() * 0.5 + 0.5
            });
        }

        return points;
    }, [radius]);

    // Animation loop
    useFrame((state) => {
        if (globeRef.current) {
            globeRef.current.rotation.y += rotationSpeed * 0.01;
            globeRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
        }
    });

    return (
        <group ref={globeRef}>
            {/* Main Globe Wireframe */}
            <mesh>
                <sphereGeometry args={[radius, segments, segments]} />
                <meshBasicMaterial
                    color={color}
                    wireframe={wireframe}
                    transparent
                    opacity={0.15}
                />
            </mesh>

            {/* Inner Glow Sphere */}
            <mesh>
                <sphereGeometry args={[radius * 0.98, segments, segments]} />
                <meshBasicMaterial
                    color={color}
                    transparent
                    opacity={0.03}
                    side={THREE.BackSide}
                />
            </mesh>

            {/* Latitude Lines */}
            {[0.3, 0.6, 0.9].map((lat, i) => (
                <mesh key={`lat-${i}`} rotation={[Math.PI / 2, 0, 0]}>
                    <ringGeometry args={[radius * lat - 0.02, radius * lat + 0.02, 64]} />
                    <meshBasicMaterial
                        color={color}
                        transparent
                        opacity={0.1}
                        side={THREE.DoubleSide}
                    />
                </mesh>
            ))}

            {/* Connection Points */}
            <group ref={pointsRef}>
                {connectionPoints.map((point, i) => (
                    <mesh key={i} position={point.position} scale={point.scale * 0.05}>
                        <sphereGeometry args={[1, 8, 8]} />
                        <meshBasicMaterial color={color} />
                    </mesh>
                ))}
            </group>

            {/* Outer Glow Ring */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <ringGeometry args={[radius * 1.2, radius * 1.25, 64]} />
                <meshBasicMaterial
                    color="#bf00ff"
                    transparent
                    opacity={0.2}
                    side={THREE.DoubleSide}
                />
            </mesh>
        </group>
    );
};

export default FloatingGlobe;
