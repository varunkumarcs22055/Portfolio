import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export const useLenis = () => {
    const lenisRef = useRef(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        });

        lenisRef.current = lenis;

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Add lenis to window for GSAP ScrollTrigger integration
        window.lenis = lenis;

        return () => {
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    return lenisRef;
};

export default useLenis;
