import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const useMagnetic = (intensity = 0.5) => {
    const ref = useRef(null);
    const mousePos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const handleMouseMove = (e) => {
            const rect = element.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const deltaX = (e.clientX - centerX) * intensity;
            const deltaY = (e.clientY - centerY) * intensity;

            mousePos.current = { x: deltaX, y: deltaY };

            gsap.to(element, {
                x: deltaX,
                y: deltaY,
                duration: 0.4,
                ease: 'power2.out'
            });
        };

        const handleMouseLeave = () => {
            gsap.to(element, {
                x: 0,
                y: 0,
                duration: 0.6,
                ease: 'elastic.out(1, 0.3)'
            });
        };

        element.addEventListener('mousemove', handleMouseMove);
        element.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            element.removeEventListener('mousemove', handleMouseMove);
            element.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [intensity]);

    return ref;
};

export default useMagnetic;
