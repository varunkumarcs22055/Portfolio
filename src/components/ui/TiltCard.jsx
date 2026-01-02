import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const TiltCard = ({
    children,
    className = '',
    maxTilt = 15,
    scale = 1.02,
    glare = true,
    ...props
}) => {
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`${maxTilt}deg`, `-${maxTilt}deg`]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`-${maxTilt}deg`, `${maxTilt}deg`]);

    // Glare effect position
    const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%']);
    const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%']);

    const handleMouseMove = (e) => {
        const rect = cardRef.current?.getBoundingClientRect();
        if (!rect) return;

        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseEnter = () => setIsHovered(true);

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            className={`relative ${className}`}
            style={{ perspective: '1000px' }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            <motion.div
                className="relative w-full h-full rounded-2xl overflow-hidden"
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: 'preserve-3d',
                }}
                animate={{ scale: isHovered ? scale : 1 }}
                transition={{ duration: 0.2 }}
            >
                {/* Card Content */}
                <div className="relative z-10 h-full">
                    {children}
                </div>

                {/* Glare Effect */}
                {glare && (
                    <motion.div
                        className="absolute inset-0 pointer-events-none z-20"
                        style={{
                            background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.15) 0%, transparent 50%)`,
                            opacity: isHovered ? 1 : 0,
                        }}
                    />
                )}

                {/* Reflection */}
                <div
                    className="absolute inset-0 pointer-events-none z-0"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, transparent 50%)',
                        transform: 'translateZ(-10px)',
                    }}
                />
            </motion.div>

            {/* Shadow */}
            <motion.div
                className="absolute inset-0 rounded-2xl -z-10"
                style={{
                    background: 'rgba(0, 0, 0, 0.4)',
                    filter: 'blur(30px)',
                    transform: 'translateY(10px)',
                }}
                animate={{
                    scale: isHovered ? 0.95 : 0.9,
                    opacity: isHovered ? 0.6 : 0.3,
                }}
            />
        </motion.div>
    );
};

export default TiltCard;
