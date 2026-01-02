import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const cursorRef = useRef(null);
    const outlineRef = useRef(null);

    useEffect(() => {
        // Check if device has touch (mobile)
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) return;

        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (
                e.target.tagName === 'A' ||
                e.target.tagName === 'BUTTON' ||
                e.target.closest('a') ||
                e.target.closest('button') ||
                e.target.classList.contains('cursor-pointer')
            ) {
                setIsHovering(true);
            }
        };

        const handleMouseOut = () => {
            setIsHovering(false);
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    // Hide on touch devices
    const isTouchDevice = typeof window !== 'undefined' &&
        ('ontouchstart' in window || navigator.maxTouchPoints > 0);

    if (isTouchDevice) return null;

    return (
        <div className="custom-cursor hidden lg:block">
            {/* Cursor Dot */}
            <motion.div
                ref={cursorRef}
                className="cursor-dot fixed pointer-events-none z-[9999]"
                animate={{
                    x: mousePosition.x - 3,
                    y: mousePosition.y - 3,
                    scale: isHovering ? 0 : 1,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5,
                }}
            />

            {/* Cursor Outline */}
            <motion.div
                ref={outlineRef}
                className="cursor-outline fixed pointer-events-none z-[9998]"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isHovering ? 1.5 : 1,
                    opacity: isHovering ? 0.8 : 0.4,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 20,
                    mass: 0.8,
                }}
            />
        </div>
    );
};

export default CustomCursor;
