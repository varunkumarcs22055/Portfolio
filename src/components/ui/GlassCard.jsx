import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const GlassCard = ({
    children,
    className = '',
    glowColor = 'cyan',
    hoverable = true,
    ...props
}) => {
    const cardRef = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['5deg', '-5deg']);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-5deg', '5deg']);

    const handleMouseMove = (e) => {
        if (!hoverable) return;
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

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const glowColors = {
        cyan: 'from-neon-cyan/20 via-transparent to-transparent',
        purple: 'from-neon-purple/20 via-transparent to-transparent',
        pink: 'from-neon-pink/20 via-transparent to-transparent',
        mixed: 'from-neon-cyan/20 via-neon-purple/10 to-transparent',
    };

    return (
        <motion.div
            ref={cardRef}
            className={`
        perspective-container relative
        ${className}
      `}
            style={{
                perspective: '1000px',
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                className="relative rounded-2xl glass-card overflow-hidden"
                style={{
                    rotateX: hoverable ? rotateX : 0,
                    rotateY: hoverable ? rotateY : 0,
                    transformStyle: 'preserve-3d',
                }}
                whileHover={hoverable ? { scale: 1.02 } : {}}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                {...props}
            >
                {/* Inner Content */}
                <div className="relative z-10 p-6">
                    {children}
                </div>

                {/* Gradient Glow on Hover */}
                <motion.div
                    className={`
            absolute inset-0 rounded-2xl pointer-events-none
            bg-gradient-to-br ${glowColors[glowColor]}
          `}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                />

                {/* Shine Effect */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.03) 50%, transparent 100%)',
                        transform: 'translateZ(10px)',
                    }}
                />

                {/* Border Gradient */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none border border-white/10" />
            </motion.div>
        </motion.div>
    );
};

export default GlassCard;
