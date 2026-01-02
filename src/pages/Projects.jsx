import { useState } from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/ui/GlassCard';
import MagneticButton from '../components/ui/MagneticButton';
import AnimatedModal from '../components/ui/AnimatedModal';
import { projects } from '../data/content';

const ProjectCard = ({ project, onClick, index, featured = false }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={featured ? 'md:col-span-2' : ''}
        >
            <GlassCard
                glowColor={featured ? 'mixed' : 'cyan'}
                className="h-full cursor-pointer"
                onClick={onClick}
            >
                <div className="space-y-4">
                    {/* Featured Badge */}
                    {featured && (
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 text-neon-cyan text-xs font-medium border border-neon-cyan/30">
                            <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
                            Featured Project
                        </span>
                    )}

                    {/* Title */}
                    <div>
                        <h3 className="font-display font-bold text-xl text-white mb-1">
                            {project.title}
                        </h3>
                        <p className="text-neon-purple text-sm font-medium">
                            {project.subtitle}
                        </p>
                    </div>

                    {/* Description */}
                    <p className="text-white/60 text-sm leading-relaxed line-clamp-3">
                        {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 5).map((tech, i) => (
                            <span
                                key={i}
                                className="px-2 py-1 text-xs rounded-md bg-white/5 text-white/60 border border-white/10"
                            >
                                {tech}
                            </span>
                        ))}
                        {project.technologies.length > 5 && (
                            <span className="px-2 py-1 text-xs rounded-md bg-white/5 text-white/40">
                                +{project.technologies.length - 5} more
                            </span>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex items-center gap-4">
                            {project.liveDemo && (
                                <a
                                    href={project.liveDemo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="text-neon-cyan text-sm hover:underline flex items-center gap-1"
                                >
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    Live Demo
                                </a>
                            )}
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="text-white/60 text-sm hover:text-white flex items-center gap-1"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                                    </svg>
                                    Code
                                </a>
                            )}
                        </div>
                        <motion.span
                            className="text-white/40 text-sm group-hover:text-white/60"
                            whileHover={{ x: 5 }}
                        >
                            View Details →
                        </motion.span>
                    </div>
                </div>
            </GlassCard>
        </motion.div>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const featuredProject = projects.find(p => p.featured);
    const otherProjects = projects.filter(p => !p.featured);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    return (
        <div className="relative min-h-screen pt-32 pb-20">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -right-32 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-neon-cyan text-sm font-medium tracking-wider uppercase">
                        My Work
                    </span>
                    <h1 className="section-title mt-3">
                        Featured Projects
                    </h1>
                    <p className="section-subtitle mx-auto mt-4">
                        From AI-powered deepfake detection to full-stack agricultural platforms — building solutions that matter.
                    </p>
                </motion.div>

                {/* Featured Project */}
                {featuredProject && (
                    <div className="max-w-5xl mx-auto mb-12">
                        <ProjectCard
                            project={featuredProject}
                            onClick={() => handleProjectClick(featuredProject)}
                            index={0}
                            featured
                        />
                    </div>
                )}

                {/* Other Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {otherProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={() => handleProjectClick(project)}
                            index={index + 1}
                        />
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <p className="text-white/50 mb-6">
                        Interested in collaborating on a project?
                    </p>
                    <a href="mailto:varunkumarthakur021@gmail.com">
                        <MagneticButton variant="gradient" size="lg">
                            Let's Build Together
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </MagneticButton>
                    </a>
                </motion.div>
            </div>

            {/* Project Modal */}
            <AnimatedModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                project={selectedProject}
            />
        </div>
    );
};

export default Projects;
