import { motion } from 'framer-motion';
import AchievementCard from '../components/sections/AchievementCard';
import { achievements, certifications } from '../data/content';

const Achievements = () => {
    const highlightedAchievements = achievements.filter(a => a.highlight);
    const otherAchievements = achievements.filter(a => !a.highlight);

    return (
        <div className="relative min-h-screen pt-32 pb-20">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-neon-cyan/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-neon-purple/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="text-neon-pink text-sm font-medium tracking-wider uppercase">
                        Recognition & Awards
                    </span>
                    <h1 className="section-title mt-3">Achievements</h1>
                    <p className="section-subtitle mx-auto mt-4">
                        National hackathon victories and innovation challenge wins.
                    </p>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-4xl mx-auto mb-16"
                >
                    <div className="glass-card rounded-2xl p-6 grid grid-cols-4 gap-6 text-center">
                        {[
                            { value: '5+', label: 'Hackathon Wins', icon: '🏆' },
                            { value: 'Top 15', label: 'National (15K+)', icon: '🥇' },
                            { value: 'Top 100', label: 'Samsung India', icon: '🌟' },
                            { value: '160+', label: 'LeetCode', icon: '💻' },
                        ].map((stat, i) => (
                            <div key={i}>
                                <div className="text-2xl mb-2">{stat.icon}</div>
                                <div className="font-bold text-2xl text-neon-cyan">{stat.value}</div>
                                <div className="text-white/50 text-xs">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Highlighted */}
                <div className="mb-16">
                    <h2 className="font-semibold text-xl text-neon-cyan mb-8">🏆 Major Achievements</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {highlightedAchievements.map((a, i) => (
                            <AchievementCard key={a.id} achievement={a} index={i} />
                        ))}
                    </div>
                </div>

                {/* Others */}
                <div className="mb-16">
                    <h2 className="font-semibold text-xl text-white mb-8">🎯 Other Recognition</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {otherAchievements.map((a, i) => (
                            <AchievementCard key={a.id} achievement={a} index={i} />
                        ))}
                    </div>
                </div>

                {/* Certifications */}
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-semibold text-xl text-white mb-6 text-center">📜 Certifications</h2>
                    <div className="glass-card rounded-2xl p-6 flex flex-wrap justify-center gap-4">
                        {certifications.map((cert, i) => (
                            <a
                                key={i}
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 rounded-full bg-neon-cyan/10 border border-white/10 text-white/80 text-sm hover:bg-neon-cyan/20 hover:border-neon-cyan/30 transition-colors"
                            >
                                {cert.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievements;
