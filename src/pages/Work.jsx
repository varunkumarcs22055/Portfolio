import { useState } from 'react';
import { motion } from 'framer-motion';
import GoldButton from '../components/ui/GoldButton';
import ClassicProjectCard from '../components/ui/ClassicProjectCard';
import AnimatedModal from '../components/ui/AnimatedModal';
import { projects, research } from '../data/content';

const Work = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeFilter, setActiveFilter] = useState('all');

    const filters = [
        { id: 'all', label: 'All Work' },
        { id: 'projects', label: 'Projects' },
        { id: 'research', label: 'Research' },
    ];

    // Combine projects and research
    const allWork = [
        ...projects.map(p => ({ ...p, type: 'project' })),
        ...research.map(r => ({
            ...r,
            type: 'research',
            subtitle: r.venue,
        })),
    ];

    const filteredWork = activeFilter === 'all'
        ? allWork
        : allWork.filter(w =>
            activeFilter === 'projects' ? w.type === 'project' : w.type === 'research'
        );

    return (
        <div className="velvet-bg min-h-screen pt-40 pb-20">
            <div className="container mx-auto px-6">
                {/* Page Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="section-title text-4xl md:text-5xl mb-4">
                        Work
                    </h1>
                    <p className="section-subtitle max-w-2xl mx-auto">
                        A collection of projects, research publications, and engineering solutions
                        that showcase my journey in AI/ML and software development.
                    </p>
                </motion.div>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="flex justify-center gap-4 mb-16"
                >
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`
                                font-heading text-xs tracking-[0.2em] uppercase px-6 py-3
                                border transition-all duration-300
                                ${activeFilter === filter.id
                                    ? 'bg-gold-primary text-classic-900 border-gold-primary'
                                    : 'bg-transparent text-gold-primary border-gold-primary/40 hover:border-gold-primary'
                                }
                            `}
                        >
                            {filter.label}
                        </button>
                    ))}
                </motion.div>

                {/* Gold Divider */}
                <div className="gold-divider mb-16" />

                {/* Work Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredWork.map((item, index) => (
                        <ClassicProjectCard
                            key={`${item.type}-${item.id}`}
                            project={item}
                            index={index}
                            onClick={setSelectedProject}
                        />
                    ))}
                </div>

                {/* Empty State */}
                {filteredWork.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-ivory/50 font-body text-lg italic">
                            No items found in this category.
                        </p>
                    </div>
                )}
            </div>

            {/* Project Modal */}
            {selectedProject && (
                <AnimatedModal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
                    <div className="p-8 max-w-2xl">
                        {/* Type Badge */}
                        <span className="tag-classic text-[0.6rem] mb-4 inline-block">
                            {selectedProject.type === 'research' ? 'Research Paper' : 'Project'}
                        </span>

                        <h3 className="font-display text-2xl md:text-3xl text-gold-primary mb-2">
                            {selectedProject.title}
                        </h3>

                        {selectedProject.subtitle && (
                            <p className="text-gold-primary/60 font-heading text-sm italic mb-6">
                                {selectedProject.subtitle}
                            </p>
                        )}

                        <p className="text-ivory/70 font-body leading-relaxed mb-6">
                            {selectedProject.description}
                        </p>

                        {/* Technologies */}
                        {selectedProject.technologies && (
                            <div className="flex flex-wrap gap-2 mb-6">
                                {selectedProject.technologies.map((tech) => (
                                    <span key={tech} className="tag-classic text-[0.6rem]">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Accuracy if research */}
                        {selectedProject.accuracy && (
                            <div className="mb-6 p-4 border border-gold-primary/20">
                                <span className="text-gold-primary/60 font-heading text-xs uppercase tracking-wider">
                                    Model Accuracy
                                </span>
                                <p className="text-gold-primary font-display text-3xl mt-1">
                                    {selectedProject.accuracy}
                                </p>
                            </div>
                        )}

                        {/* Actions */}
                        <div className="flex gap-4 pt-4 border-t border-gold-primary/20">
                            {selectedProject.github && (
                                <GoldButton href={selectedProject.github} variant="outline" size="sm">
                                    View on GitHub
                                </GoldButton>
                            )}
                            {selectedProject.liveDemo && (
                                <GoldButton href={selectedProject.liveDemo} variant="filled" size="sm">
                                    Live Demo
                                </GoldButton>
                            )}
                            {selectedProject.link && (
                                <GoldButton href={selectedProject.link} variant="filled" size="sm">
                                    Read Paper
                                </GoldButton>
                            )}
                        </div>
                    </div>
                </AnimatedModal>
            )}
        </div>
    );
};

export default Work;
