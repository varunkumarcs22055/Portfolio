import { motion } from 'framer-motion';
import GlassCard from '../components/ui/GlassCard';
import MagneticButton from '../components/ui/MagneticButton';
import { research } from '../data/content';

const ResearchCard = ({ paper, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
        >
            <GlassCard glowColor={index === 0 ? 'cyan' : 'purple'} className="h-full">
                <div className="space-y-4">
                    {/* Status Badge */}
                    <div className="flex items-center justify-between">
                        <span className={`
              inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium
              ${paper.status === 'Published'
                                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                : 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30'
                            }
            `}>
                            <span className={`w-1.5 h-1.5 rounded-full ${paper.status === 'Published' ? 'bg-green-400' : 'bg-neon-cyan'}`} />
                            {paper.status}
                        </span>
                        <span className="text-3xl font-bold text-neon-cyan">{paper.accuracy}</span>
                    </div>

                    {/* Title & Venue */}
                    <div>
                        <h3 className="font-display font-bold text-xl text-white mb-2 leading-tight">
                            {paper.title}
                        </h3>
                        <p className="text-neon-purple font-medium text-sm">
                            {paper.venue}
                        </p>
                    </div>

                    {/* Description */}
                    <p className="text-white/60 text-sm leading-relaxed">
                        {paper.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                        {paper.technologies.map((tech, i) => (
                            <span
                                key={i}
                                className="px-2 py-1 text-xs rounded-md bg-white/5 text-white/60 border border-white/10"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 pt-4">
                        {paper.link && (
                            <a href={paper.link} target="_blank" rel="noopener noreferrer">
                                <MagneticButton variant="primary" size="sm">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                    Read Paper
                                </MagneticButton>
                            </a>
                        )}
                        {paper.github && (
                            <a href={paper.github} target="_blank" rel="noopener noreferrer">
                                <MagneticButton variant="secondary" size="sm">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                                    </svg>
                                    GitHub
                                </MagneticButton>
                            </a>
                        )}
                    </div>
                </div>
            </GlassCard>
        </motion.div>
    );
};

const Research = () => {
    return (
        <div className="relative min-h-screen pt-32 pb-20">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 -left-32 w-80 h-80 bg-neon-purple/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/3 -right-32 w-80 h-80 bg-neon-cyan/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative container mx-auto px-6">
                {/* Page Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-neon-purple text-sm font-medium tracking-wider uppercase">
                        Academic Research
                    </span>
                    <h1 className="section-title mt-3">
                        Published Research
                    </h1>
                    <p className="section-subtitle mx-auto mt-4">
                        Pushing boundaries in deepfake detection through CNN-LSTM architectures and ensemble learning methods.
                    </p>
                </motion.div>

                {/* Research Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-3xl mx-auto mb-16"
                >
                    <div className="glass-card rounded-2xl p-6 grid grid-cols-3 gap-4 text-center">
                        <div>
                            <div className="font-display font-bold text-3xl text-neon-cyan">2</div>
                            <div className="text-white/50 text-sm">Publications</div>
                        </div>
                        <div>
                            <div className="font-display font-bold text-3xl text-neon-purple">94.5%</div>
                            <div className="text-white/50 text-sm">Best Accuracy</div>
                        </div>
                        <div>
                            <div className="font-display font-bold text-3xl text-neon-pink">19K+</div>
                            <div className="text-white/50 text-sm">Images Tested</div>
                        </div>
                    </div>
                </motion.div>

                {/* Research Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {research.map((paper, index) => (
                        <ResearchCard key={paper.id} paper={paper} index={index} />
                    ))}
                </div>

                {/* Research Focus Areas */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto mt-20"
                >
                    <h3 className="font-display font-semibold text-xl text-white mb-8 text-center">
                        Research Focus Areas
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { icon: '🧠', label: 'Deep Learning' },
                            { icon: '👁️', label: 'Computer Vision' },
                            { icon: '🎬', label: 'Video Analysis' },
                            { icon: '🔍', label: 'Deepfake Detection' },
                        ].map((area, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="text-center p-6 rounded-xl glass-card cursor-default"
                            >
                                <div className="text-3xl mb-3">{area.icon}</div>
                                <div className="font-medium text-white">{area.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Research;
