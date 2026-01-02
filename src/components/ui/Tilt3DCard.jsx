import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Tilt3DCard = ({
    children,
    className = '',
    intensity = 15,
    glareOpacity = 0.15,
    scale = 1.02,
}) => {
    const cardRef = useRef(null);
    const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
    const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        const rotateX = (-mouseY / (rect.height / 2)) * intensity;
        const rotateY = (mouseX / (rect.width / 2)) * intensity;

        // Glare position
        const glareX = ((e.clientX - rect.left) / rect.width) * 100;
        const glareY = ((e.clientY - rect.top) / rect.height) * 100;

        setTransform({ rotateX, rotateY });
        setGlarePosition({ x: glareX, y: glareY });
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setTransform({ rotateX: 0, rotateY: 0 });
    };

    return (
        <motion.div
            ref={cardRef}
            className={`relative ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            animate={{
                rotateX: transform.rotateX,
                rotateY: transform.rotateY,
                scale: isHovered ? scale : 1,
            }}
            transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
            }}
            style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
            }}
        >
            {/* Main content */}
            <div style={{ transform: 'translateZ(0)' }}>
                {children}
            </div>

            {/* Gold glare effect */}
            {isHovered && (
                <div
                    className="absolute inset-0 pointer-events-none overflow-hidden"
                    style={{ transform: 'translateZ(50px)' }}
                >
                    <div
                        className="absolute w-full h-full"
                        style={{
                            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(201, 162, 39, ${glareOpacity}) 0%, transparent 50%)`,
                        }}
                    />
                </div>
            )}

            {/* Border glow on hover */}
            {isHovered && (
                <div
                    className="absolute inset-0 pointer-events-none border border-gold-primary/50"
                    style={{
                        transform: 'translateZ(20px)',
                        boxShadow: '0 0 30px rgba(201, 162, 39, 0.3)',
                    }}
                />
            )}
        </motion.div>
    );
};

export default Tilt3DCard;
