import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import GoldButton from './GoldButton';

const ClassicProjectCard = ({
    project,
    index,
    onClick
}) => {
    const { id, title, subtitle, description, technologies } = project;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className="project-card group"
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
                    <div className="absolute inset-0 bg-classic-700 project-card-image">
                        {/* Fallback decorative pattern */}
                        <div className="absolute inset-0 opacity-30">
                            <div className="absolute inset-0 bg-gradient-to-br from-classic-600 to-classic-800" />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 border border-gold-primary/20 flex items-center justify-center">
                                <span className="text-gold-primary/40 font-display text-2xl">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                            </div>
                        </div>
                    </div>
                )}
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-classic-900/70 via-transparent to-transparent" />

                {/* Hover overlay */}
                <motion.div
                    className="absolute inset-0 bg-classic-900/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                    <span className="text-gold-primary font-heading text-sm tracking-[0.2em] uppercase">
                        View Details
                    </span>
                </motion.div>
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Project Number & Title */}
                <div className="mb-3">
                    <span className="text-gold-primary/60 font-heading text-xs tracking-[0.2em] uppercase">
                        Project {String(index + 1).padStart(2, '0')}:
                    </span>
                    <h3 className="font-display text-xl md:text-2xl text-gold-primary tracking-wide mt-1">
                        {title}
                    </h3>
                </div>

                {/* Subtitle */}
                {subtitle && (
                    <p className="text-ivory/60 font-body text-sm italic mb-4">
                        {subtitle}
                    </p>
                )}

                {/* Description */}
                <p className="text-ivory/70 font-body text-sm leading-relaxed mb-6 line-clamp-3">
                    {description}
                </p>

                {/* Technologies */}
                {technologies && technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                        {technologies.slice(0, 3).map((tech) => (
                            <span
                                key={tech}
                                className="tag-classic text-[0.6rem]"
                            >
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

                {/* CTA Button */}
                <GoldButton
                    variant="outline"
                    size="sm"
                    onClick={() => onClick && onClick(project)}
                >
                    View Project
                </GoldButton>
            </div>
        </motion.div>
    );
};

export default ClassicProjectCard;
