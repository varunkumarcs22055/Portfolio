import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';

const Canvas3D = ({
    children,
    className = '',
    camera = { position: [0, 0, 5], fov: 75 },
    ...props
}) => {
    return (
        <div className={`absolute inset-0 ${className}`}>
            <Canvas
                camera={camera}
                dpr={[1, 2]}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: 'high-performance'
                }}
                {...props}
            >
                <Suspense fallback={null}>
                    {children}
                    <Preload all />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Canvas3D;
