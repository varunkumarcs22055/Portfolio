import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export const useGSAP = (callback, dependencies = []) => {
    const contextRef = useRef(null);

    useEffect(() => {
        // Create GSAP context for proper cleanup
        contextRef.current = gsap.context(() => {
            callback(gsap, ScrollTrigger);
        });

        // Update ScrollTrigger on Lenis scroll
        if (window.lenis) {
            window.lenis.on('scroll', ScrollTrigger.update);
        }

        return () => {
            if (contextRef.current) {
                contextRef.current.revert();
            }
        };
    }, dependencies);

    return contextRef;
};

// Common animation presets
export const animations = {
    fadeInUp: {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    },
    fadeInDown: {
        initial: { opacity: 0, y: -60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    },
    fadeInLeft: {
        initial: { opacity: 0, x: -60 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    },
    fadeInRight: {
        initial: { opacity: 0, x: 60 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    },
    scaleIn: {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    },
    staggerContainer: {
        animate: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }
};

export default useGSAP;
