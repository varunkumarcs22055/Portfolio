import { motion } from 'framer-motion';

const AchievementCard = ({
    achievement,
    index = 0,
    variant = 'default'
}) => {
    const isHighlight = achievement.highlight;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            whileHover={{ y: -5, scale: 1.02 }}
            className={`
        relative rounded-2xl overflow-hidden
        ${isHighlight
                    ? 'bg-gradient-to-br from-neon-cyan/10 via-dark-700 to-neon-purple/10'
                    : 'bg-dark-700/50'
                }
        border border-white/10
        transition-all duration-300
      `}
        >
            {/* Highlight Glow */}
            {isHighlight && (
                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-neon-purple/5 pointer-events-none" />
            )}

            <div className="relative p-6">
                {/* Icon */}
                <motion.div
                    className="text-4xl mb-4"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        type: 'spring',
                        stiffness: 200,
                        damping: 15,
                        delay: index * 0.1 + 0.2
                    }}
                >
                    {achievement.icon}
                </motion.div>

                {/* Title */}
                <h3 className={`
          font-display font-bold text-lg mb-1
          ${isHighlight ? 'text-neon-cyan' : 'text-white'}
        `}>
                    {achievement.title}
                </h3>

                {/* Subtitle */}
                <p className={`
          font-medium text-sm mb-2
          ${isHighlight ? 'text-neon-purple' : 'text-white/70'}
        `}>
                    {achievement.subtitle}
                </p>

                {/* Description */}
                <p className="text-white/50 text-sm mb-3">
                    {achievement.description}
                </p>

                {/* Prize Badge */}
                {achievement.prize && (
                    <motion.div
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neon-cyan/10 border border-neon-cyan/30"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.4 }}
                    >
                        <span className="text-neon-cyan text-xs">💰</span>
                        <span className="text-neon-cyan font-semibold text-sm">{achievement.prize}</span>
                    </motion.div>
                )}
            </div>

            {/* Shimmer Effect */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)',
                    transform: 'translateX(-100%)',
                }}
                whileHover={{
                    transform: 'translateX(100%)',
                    transition: { duration: 0.6 },
                }}
            />

            {/* Highlight Border */}
            {isHighlight && (
                <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{
                        boxShadow: '0 0 30px rgba(0, 245, 255, 0.2)',
                    }}
                />
            )}
        </motion.div>
    );
};

export default AchievementCard;
