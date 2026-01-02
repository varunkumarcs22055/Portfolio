import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import ClassicHero3D from '../components/3d/ClassicHero3D';
import GoldButton from '../components/ui/GoldButton';
import Tilt3DCard from '../components/ui/Tilt3DCard';
import AnimatedModal from '../components/ui/AnimatedModal';
import { personalInfo, projects } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

// Enhanced Project Card with 3D Tilt
const Enhanced3DProjectCard = ({ project, index, onClick }) => {
    const { id, title, subtitle, description, technologies } = project;

    return (
        <Tilt3DCard intensity={12} glareOpacity={0.2} scale={1.03}>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="project-card group h-full"
            >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden border-b border-gold-primary/20">
                    {project.image ? (
                        <img
                            src={project.image}
                            alt={title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    ) : (
                        <div className="absolute inset-0 bg-classic-700">
                            {/* Fallback decorative layers */}
                            <div className="absolute inset-0 bg-gradient-to-br from-classic-600 to-classic-800 opacity-60" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-gold-primary/50 font-display text-3xl">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                            </div>
                        </div>
                    )}
                    {/* Gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-classic-900/80 via-classic-900/20 to-transparent" />

                    {/* Hover overlay */}
                    <motion.div
                        className="absolute inset-0 bg-classic-900/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                        <span className="text-gold-primary font-heading text-sm tracking-[0.2em] uppercase border border-gold-primary px-4 py-2">
                            Explore
                        </span>
                    </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                    <div className="mb-3">
                        <span className="text-gold-primary/60 font-heading text-xs tracking-[0.2em] uppercase">
                            Project {String(index + 1).padStart(2, '0')}:
                        </span>
                        <h3 className="font-display text-xl md:text-2xl text-gold-primary tracking-wide mt-1 group-hover:text-gold-light transition-colors">
                            {title}
                        </h3>
                    </div>

                    {subtitle && (
                        <p className="text-ivory/60 font-body text-sm italic mb-4">
                            {subtitle}
                        </p>
                    )}

                    <p className="text-ivory/70 font-body text-sm leading-relaxed mb-6 line-clamp-3">
                        {description}
                    </p>

                    {technologies && technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                            {technologies.slice(0, 3).map((tech) => (
                                <span key={tech} className="tag-classic text-[0.6rem]">
                                    {tech}
                                </span>
                            ))}
                            {technologies.length > 3 && (
                                <span className="text-gold-primary/50 text-xs font-heading">
                                    +{technologies.length - 3}
                                </span>
                            )}
                        </div>
                    )}

                    <GoldButton
                        variant="outline"
                        size="sm"
                        onClick={() => onClick && onClick(project)}
                    >
                        View Project
                    </GoldButton>
                </div>
            </motion.div>
        </Tilt3DCard>
    );
};

const Home = () => {
    const heroRef = useRef(null);
    const [selectedProject, setSelectedProject] = useState(null);

    // Parallax effect for hero elements
    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 500], [0, 150]);
    const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
    const titleLeftX = useTransform(scrollY, [0, 500], [0, -100]);
    const titleRightX = useTransform(scrollY, [0, 500], [0, 100]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.hero-title-left',
                { x: -100, opacity: 0 },
                { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
            );

            gsap.fromTo(
                '.hero-title-right',
                { x: 100, opacity: 0 },
                { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
            );

            gsap.fromTo(
                '.hero-portrait',
                { scale: 0.8, opacity: 0, rotateY: -15 },
                { scale: 1, opacity: 1, rotateY: 0, duration: 1.2, delay: 0.2, ease: 'power2.out' }
            );

            gsap.fromTo(
                '.hero-subtitle',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, delay: 0.6, ease: 'power2.out' }
            );

            gsap.fromTo(
                '.hero-cta',
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, delay: 0.9, ease: 'power2.out' }
            );
        }, heroRef);

        return () => ctx.revert();
    }, []);

    const featuredProjects = projects.slice(0, 3);

    return (
        <div ref={heroRef} className="velvet-bg min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
                {/* 3D Background */}
                <ClassicHero3D />

                {/* Decorative Frame with 3D depth effect */}
                <div className="absolute inset-8 md:inset-16 pointer-events-none">
                    <div className="absolute inset-0 border border-gold-primary/20" />
                    <div className="absolute inset-2 border border-gold-primary/10" />
                    {/* Corner ornaments */}
                    <div className="absolute -top-1 -left-1 w-12 h-12">
                        <div className="absolute top-0 left-0 w-full h-px bg-gold-primary" />
                        <div className="absolute top-0 left-0 h-full w-px bg-gold-primary" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-12 h-12">
                        <div className="absolute top-0 right-0 w-full h-px bg-gold-primary" />
                        <div className="absolute top-0 right-0 h-full w-px bg-gold-primary" />
                    </div>
                    <div className="absolute -bottom-1 -left-1 w-12 h-12">
                        <div className="absolute bottom-0 left-0 w-full h-px bg-gold-primary" />
                        <div className="absolute bottom-0 left-0 h-full w-px bg-gold-primary" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-12 h-12">
                        <div className="absolute bottom-0 right-0 w-full h-px bg-gold-primary" />
                        <div className="absolute bottom-0 right-0 h-full w-px bg-gold-primary" />
                    </div>
                </div>

                {/* Hero Content */}
                <motion.div
                    className="relative z-10 container mx-auto px-6"
                    style={{ y: heroY, opacity: heroOpacity }}
                >
                    {/* Main Hero Layout */}
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
                        {/* Left Title with parallax */}
                        <motion.div
                            className="hero-title-left text-center lg:text-right flex-1"
                            style={{ x: titleLeftX }}
                        >
                            <h2 className="hero-title-classic">
                                TIMELESS
                            </h2>
                        </motion.div>

                        {/* Center Portrait with 3D effect */}
                        <div className="hero-portrait relative" style={{ perspective: '1000px' }}>
                            <motion.div
                                className="w-48 h-64 md:w-56 md:h-72 lg:w-64 lg:h-80"
                                whileHover={{
                                    rotateY: 5,
                                    rotateX: -5,
                                    scale: 1.02,
                                }}
                                transition={{ type: 'spring', stiffness: 200 }}
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                <div className="relative w-full h-full border border-gold-primary overflow-hidden">
                                    <img
                                        src="/hero-portrait.jpg"
                                        alt="Portrait"
                                        className="w-full h-full object-cover object-top"
                                    />
                                    {/* Depth overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-classic-900/40 to-transparent" />
                                </div>
                                {/* 3D shadow effect */}
                                <div
                                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-gold-primary/10 blur-xl"
                                    style={{ transform: 'translateZ(-50px)' }}
                                />
                            </motion.div>
                            {/* Corner Accents */}
                            <div className="absolute -top-3 -left-3 w-8 h-8 border-l-2 border-t-2 border-gold-primary" />
                            <div className="absolute -top-3 -right-3 w-8 h-8 border-r-2 border-t-2 border-gold-primary" />
                            <div className="absolute -bottom-3 -left-3 w-8 h-8 border-l-2 border-b-2 border-gold-primary" />
                            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-r-2 border-b-2 border-gold-primary" />
                        </div>

                        {/* Right Title with parallax */}
                        <motion.div
                            className="hero-title-right text-center lg:text-left flex-1"
                            style={{ x: titleRightX }}
                        >
                            <h2 className="hero-title-classic">
                                CREATIONS
                            </h2>
                        </motion.div>
                    </div>

                    {/* Subtitle */}
                    <div className="hero-subtitle text-center mt-12">
                        <p className="font-heading text-lg md:text-xl text-ivory/70 tracking-[0.15em] italic">
                            A Showcase of Enduring Design
                        </p>
                        <div className="flex items-center justify-center gap-4 mt-4">
                            <motion.div
                                className="w-16 h-px bg-gold-primary/40"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 1, duration: 0.8 }}
                            />
                            <span className="text-gold-primary/60 font-heading text-sm tracking-wider">
                                {personalInfo.name}
                            </span>
                            <motion.div
                                className="w-16 h-px bg-gold-primary/40"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 1, duration: 0.8 }}
                            />
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="hero-cta flex justify-center gap-6 mt-12">
                        <Link to="/work">
                            <GoldButton variant="outline" size="lg">
                                View Work
                            </GoldButton>
                        </Link>
                        <Link to="/contact">
                            <GoldButton variant="ghost" size="lg">
                                Contact
                            </GoldButton>
                        </Link>
                    </div>
                </motion.div>

                {/* Animated Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                >
                    <span className="text-gold-primary/40 font-heading text-xs tracking-widest uppercase">Scroll</span>
                    <div className="w-px h-12 bg-gradient-to-b from-gold-primary/60 to-transparent" />
                </motion.div>
            </section>

            {/* Projects Section */}
            <section className="relative py-24 md:py-32">
                {/* Section Divider with ornament */}
                <div className="relative mb-20">
                    <div className="gold-divider" />
                    <div className="absolute left-1/2 -translate-x-1/2 -top-2 bg-classic-900 px-4">
                        <div className="w-4 h-4 border border-gold-primary rotate-45" />
                    </div>
                </div>

                <div className="container mx-auto px-6">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-gold-primary/60 font-heading text-sm tracking-[0.3em] uppercase">
                            Featured Work
                        </span>
                        <h2 className="section-title mt-4">
                            Selected Projects
                        </h2>
                        <p className="section-subtitle max-w-xl mx-auto mt-4">
                            A curated collection of research projects and engineering solutions
                        </p>
                    </motion.div>

                    {/* Projects Grid with 3D Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProjects.map((project, index) => (
                            <Enhanced3DProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                                onClick={setSelectedProject}
                            />
                        ))}
                    </div>

                    {/* View All Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mt-16"
                    >
                        <Link to="/work">
                            <GoldButton variant="outline" size="md">
                                View All Projects
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </GoldButton>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* About Teaser Section */}
            <section className="relative py-24 md:py-32 bg-classic-800/30">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <Tilt3DCard intensity={8} glareOpacity={0.1}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="p-12 border border-gold-primary/20"
                            >
                                <span className="text-gold-primary/30 font-display text-6xl leading-none">"</span>

                                <p className="font-body text-xl md:text-2xl text-ivory/80 leading-relaxed italic mt-4">
                                    Research-focused Computer Science Engineer specializing in AI/ML,
                                    Computer Vision, and Backend Engineering. Published researcher in
                                    IEEE and i-manager journals with a proven track record in national hackathons.
                                </p>

                                <span className="text-gold-primary/30 font-display text-6xl leading-none">"</span>

                                <div className="mt-8">
                                    <Link to="/about">
                                        <GoldButton variant="ghost" size="sm">
                                            Learn More About Me
                                        </GoldButton>
                                    </Link>
                                </div>
                            </motion.div>
                        </Tilt3DCard>
                    </div>
                </div>
            </section>

            {/* Footer Divider */}
            <div className="gold-divider" />

            {/* Project Modal */}
            {selectedProject && (
                <AnimatedModal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
                    <div className="p-8">
                        <h3 className="font-display text-2xl text-gold-primary mb-4">
                            {selectedProject.title}
                        </h3>
                        <p className="text-ivory/70 font-body mb-6">
                            {selectedProject.description}
                        </p>
                        <div className="flex gap-4">
                            {selectedProject.github && (
                                <GoldButton href={selectedProject.github} variant="outline" size="sm">
                                    GitHub
                                </GoldButton>
                            )}
                            {selectedProject.liveDemo && (
                                <GoldButton href={selectedProject.liveDemo} variant="filled" size="sm">
                                    Live Demo
                                </GoldButton>
                            )}
                        </div>
                    </div>
                </AnimatedModal>
            )}
        </div>
    );
};

export default Home;
