import { useRef, useState, useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

const ImageSlider = ({
    images = [],
    autoPlay = true,
    speed = 30, // seconds for full cycle
    pauseOnHover = true,
    className = ''
}) => {
    const [isPaused, setIsPaused] = useState(false);
    const containerRef = useRef(null);
    const controls = useAnimationControls();

    // Default images if none provided
    const displayImages = images.length > 0 ? images : [
        { id: 1, title: 'SBI Youth Ideathon', subtitle: 'IIT Delhi - Top 15', color: 'from-neon-cyan/20 to-neon-purple/20' },
        { id: 2, title: 'Samsung Solve for Tomorrow', subtitle: 'Top 100 India', color: 'from-neon-purple/20 to-neon-pink/20' },
        { id: 3, title: 'Hack Wack 2.0', subtitle: '2nd Rank', color: 'from-neon-pink/20 to-neon-cyan/20' },
        { id: 4, title: 'HackAIthon 2025', subtitle: 'Winner', color: 'from-neon-cyan/20 to-neon-blue/20' },
        { id: 5, title: 'Google Cloud Champion', subtitle: '2024-25', color: 'from-neon-blue/20 to-neon-purple/20' },
        { id: 6, title: 'IEEE Publication', subtitle: 'PuneCon 2025', color: 'from-neon-purple/20 to-neon-cyan/20' },
    ];

    // Duplicate for infinite scroll
    const allImages = [...displayImages, ...displayImages, ...displayImages];

    useEffect(() => {
        if (autoPlay && !isPaused) {
            controls.start({
                x: [0, -100 * displayImages.length + '%'],
                transition: {
                    duration: speed,
                    ease: 'linear',
                    repeat: Infinity,
                },
            });
        } else {
            controls.stop();
        }
    }, [autoPlay, isPaused, controls, speed, displayImages.length]);

    return (
        <div
            ref={containerRef}
            className={`relative overflow-hidden ${className}`}
            onMouseEnter={() => pauseOnHover && setIsPaused(true)}
            onMouseLeave={() => pauseOnHover && setIsPaused(false)}
        >
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-900 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-900 to-transparent z-10 pointer-events-none" />

            {/* Slider Track */}
            <motion.div
                className="flex gap-6"
                animate={controls}
                style={{ width: 'fit-content' }}
            >
                {allImages.map((image, index) => (
                    <motion.div
                        key={`${image.id}-${index}`}
                        className="flex-shrink-0 w-72 h-40"
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className={`
              relative w-full h-full rounded-xl overflow-hidden
              bg-gradient-to-br ${image.color || 'from-neon-cyan/10 to-neon-purple/10'}
              border border-white/10 backdrop-blur-sm
            `}>
                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                                {/* Trophy Icon */}
                                <div className="text-4xl mb-3">
                                    {image.icon || '🏆'}
                                </div>
                                <h3 className="font-display font-semibold text-white text-lg mb-1">
                                    {image.title}
                                </h3>
                                <p className="text-white/60 text-sm">
                                    {image.subtitle}
                                </p>
                            </div>

                            {/* Shine Effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"
                                initial={{ opacity: 0, x: '-100%' }}
                                whileHover={{ opacity: 1, x: '100%' }}
                                transition={{ duration: 0.6 }}
                            />

                            {/* Border Glow on Hover */}
                            <motion.div
                                className="absolute inset-0 rounded-xl pointer-events-none"
                                initial={{ boxShadow: '0 0 0 rgba(0, 245, 255, 0)' }}
                                whileHover={{ boxShadow: '0 0 30px rgba(0, 245, 255, 0.3)' }}
                            />
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default ImageSlider;
