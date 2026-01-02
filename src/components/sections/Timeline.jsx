import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TiltCard from '../ui/TiltCard';

gsap.registerPlugin(ScrollTrigger);

const TimelineItem = ({ item, index, isLeft }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        if (!cardRef.current) return;

        gsap.fromTo(
            cardRef.current,
            {
                opacity: 0,
                x: isLeft ? -100 : 100,
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse',
                },
            }
        );
    }, [isLeft]);

    return (
        <div
            ref={cardRef}
            className={`
        relative flex items-center w-full mb-12
        ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}
      `}
        >
            {/* Timeline Dot */}
            <div className="absolute left-4 lg:left-1/2 lg:-translate-x-1/2 z-10">
                <motion.div
                    className="w-4 h-4 rounded-full bg-dark-900 border-2 border-neon-cyan"
                    style={{ boxShadow: '0 0 20px rgba(0, 245, 255, 0.5)' }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                />
            </div>

            {/* Content Card */}
            <div className={`
        w-full lg:w-[45%] pl-12 lg:pl-0
        ${isLeft ? 'lg:pr-12' : 'lg:pl-12'}
      `}>
                <TiltCard className="w-full" maxTilt={8}>
                    <div className="glass-card p-6 rounded-2xl">
                        {/* Duration Badge */}
                        <div className="flex items-center gap-2 mb-4">
                            <span className="px-3 py-1 rounded-full bg-neon-cyan/10 text-neon-cyan text-xs font-medium">
                                {item.duration}
                            </span>
                            <span className="text-white/40 text-xs">{item.location}</span>
                        </div>

                        {/* Company & Role */}
                        <h3 className="font-display font-bold text-xl text-white mb-1">
                            {item.company}
                        </h3>
                        <p className="text-neon-purple font-medium mb-4">
                            {item.role}
                        </p>

                        {/* Highlights */}
                        <ul className="space-y-2 mb-4">
                            {item.highlights.map((highlight, i) => (
                                <motion.li
                                    key={i}
                                    className="flex items-start gap-2 text-white/70 text-sm"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                >
                                    <span className="text-neon-cyan mt-1">▸</span>
                                    {highlight}
                                </motion.li>
                            ))}
                        </ul>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                            {item.technologies.map((tech, i) => (
                                <span
                                    key={i}
                                    className="px-2 py-1 text-xs rounded-md bg-white/5 text-white/60 border border-white/10"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </TiltCard>
            </div>
        </div>
    );
};

const Timeline = ({ items = [] }) => {
    const timelineRef = useRef(null);

    useEffect(() => {
        if (!timelineRef.current) return;

        // Animate the timeline line
        gsap.fromTo(
            '.timeline-line-inner',
            { scaleY: 0 },
            {
                scaleY: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: timelineRef.current,
                    start: 'top center',
                    end: 'bottom center',
                    scrub: 1,
                },
            }
        );
    }, []);

    return (
        <div ref={timelineRef} className="relative py-12">
            {/* Timeline Line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 lg:-translate-x-1/2">
                <div
                    className="timeline-line-inner absolute inset-0 bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-pink origin-top"
                />
            </div>

            {/* Timeline Items */}
            {items.map((item, index) => (
                <TimelineItem
                    key={item.id}
                    item={item}
                    index={index}
                    isLeft={index % 2 === 0}
                />
            ))}
        </div>
    );
};

export default Timeline;
