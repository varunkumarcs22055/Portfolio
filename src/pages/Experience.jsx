import { motion } from 'framer-motion';
import Timeline from '../components/sections/Timeline';
import { experience, education } from '../data/content';

const Experience = () => {
    return (
        <div className="relative min-h-screen pt-32 pb-20">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative container mx-auto px-6">
                {/* Page Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-neon-cyan text-sm font-medium tracking-wider uppercase">
                        Career Journey
                    </span>
                    <h1 className="section-title mt-3">
                        Professional Experience
                    </h1>
                    <p className="section-subtitle mx-auto mt-4">
                        Building scalable solutions and optimizing performance across full-stack development internships.
                    </p>
                </motion.div>

                {/* Education Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-2xl mx-auto mb-20"
                >
                    <div className="glass-card rounded-2xl p-6 md:p-8">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
                                <svg className="w-6 h-6 text-dark-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 7l-9-5 9-5 9 5-9 5z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                    <h3 className="font-display font-bold text-xl text-white">
                                        {education.institution}
                                    </h3>
                                    <span className="text-white/40 text-sm">{education.duration}</span>
                                </div>
                                <p className="text-neon-purple font-medium mb-1">{education.degree}</p>
                                <div className="flex items-center gap-4 text-sm">
                                    <span className="text-white/60">{education.location}</span>
                                    <span className="px-2 py-0.5 rounded bg-neon-cyan/10 text-neon-cyan font-semibold">
                                        CGPA: {education.cgpa}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Section Divider */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-center mb-12"
                >
                    <span className="text-neon-purple text-sm font-medium tracking-wider uppercase">
                        Work History
                    </span>
                    <h2 className="font-display font-semibold text-2xl text-white mt-2">
                        Internships & Roles
                    </h2>
                </motion.div>

                {/* Timeline */}
                <Timeline items={experience} />

                {/* Skills Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto mt-20"
                >
                    <div className="glass-card rounded-2xl p-8">
                        <h3 className="font-display font-semibold text-xl text-white mb-6 text-center">
                            Core Competencies
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { icon: '⚡', label: '40%', desc: 'Performance Boost' },
                                { icon: '🔗', label: 'REST APIs', desc: 'Design & Integration' },
                                { icon: '🗄️', label: 'SQL', desc: 'Query Optimization' },
                                { icon: '🏗️', label: 'MVC', desc: 'Clean Architecture' },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-center p-4 rounded-xl bg-white/5 border border-white/10"
                                >
                                    <div className="text-2xl mb-2">{item.icon}</div>
                                    <div className="font-display font-bold text-neon-cyan">{item.label}</div>
                                    <div className="text-white/50 text-xs">{item.desc}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Experience;
