import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, Center } from '@react-three/drei';

const HeroText3D = ({
    text = "Varun",
    fontSize = 1,
    depth = 0.2,
    color = '#ffffff',
    ...props
}) => {
    const textRef = useRef();

    useFrame((state) => {
        if (textRef.current) {
            // Gentle floating animation
            textRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
            textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
        }
    });

    return (
        <group ref={textRef} {...props}>
            <Center>
                <Text3D
                    font="/fonts/inter-bold.json"
                    size={fontSize}
                    height={depth}
                    curveSegments={12}
                    bevelEnabled
                    bevelThickness={0.02}
                    bevelSize={0.02}
                    bevelOffset={0}
                    bevelSegments={5}
                >
                    {text}
                    <meshStandardMaterial
                        color={color}
                        emissive={color}
                        emissiveIntensity={0.1}
                        metalness={0.8}
                        roughness={0.2}
                    />
                </Text3D>
            </Center>
        </group>
    );
};

export default HeroText3D;
