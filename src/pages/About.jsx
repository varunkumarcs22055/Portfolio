import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import GoldButton from '../components/ui/GoldButton';
import { personalInfo, education, skills, experience, achievements, certifications } from '../data/content';

const About = () => {
    const skillCategories = [
        { name: 'Languages', items: skills.languages },
        { name: 'AI/ML', items: skills.aiml },
        { name: 'Web Technologies', items: skills.web },
        { name: 'Tools', items: skills.tools },
    ];

    return (
        <div className="velvet-bg min-h-screen pt-40 pb-20">
            <div className="container mx-auto px-6">
                {/* Page Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h1 className="section-title text-4xl md:text-5xl mb-4">
                        About
                    </h1>
                    <p className="section-subtitle max-w-2xl mx-auto">
                        The story behind the work
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className="max-w-5xl mx-auto">
                    {/* Bio Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Portrait */}
                            <div className="lg:col-span-1">
                                <div className="relative">
                                    <div className="aspect-[3/4] border border-gold-primary overflow-hidden">
                                        <img
                                            src="/hero-portrait.jpg"
                                            alt={personalInfo.name}
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                    {/* Corner Accents */}
                                    <div className="absolute -top-2 -left-2 w-8 h-8 border-l border-t border-gold-primary" />
                                    <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r border-b border-gold-primary" />
                                </div>
                            </div>

                            {/* Bio Text */}
                            <div className="lg:col-span-2">
                                <span className="text-gold-primary/60 font-heading text-sm tracking-[0.2em] uppercase">
                                    Biography
                                </span>
                                <h2 className="font-display text-3xl text-gold-primary mt-2 mb-6">
                                    {personalInfo.name}
                                </h2>
                                <p className="font-body text-lg text-ivory/80 leading-relaxed mb-6">
                                    {personalInfo.about}
                                </p>

                                {/* Quick Info */}
                                <div className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-gold-primary/20">
                                    <div>
                                        <span className="text-gold-primary/50 font-heading text-xs uppercase tracking-wider">
                                            Location
                                        </span>
                                        <p className="text-ivory font-body mt-1">{personalInfo.location}</p>
                                    </div>
                                    <div>
                                        <span className="text-gold-primary/50 font-heading text-xs uppercase tracking-wider">
                                            Focus
                                        </span>
                                        <p className="text-ivory font-body mt-1">{personalInfo.tagline}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Divider */}
                    <div className="gold-divider mb-20" />

                    {/* Education */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <span className="text-gold-primary/60 font-heading text-sm tracking-[0.2em] uppercase">
                            Education
                        </span>
                        <div className="mt-6 p-8 border border-gold-primary/30">
                            <h3 className="font-display text-2xl text-gold-primary mb-2">
                                {education.degree}
                            </h3>
                            <p className="text-ivory/70 font-body mb-4">
                                {education.institution}
                            </p>
                            <div className="flex flex-wrap gap-6 text-sm">
                                <span className="text-gold-primary font-heading">
                                    CGPA: {education.cgpa}
                                </span>
                                <span className="text-ivory/50 font-body">
                                    {education.duration}
                                </span>
                                <span className="text-ivory/50 font-body">
                                    {education.location}
                                </span>
                            </div>
                        </div>
                    </motion.section>

                    {/* Experience */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <span className="text-gold-primary/60 font-heading text-sm tracking-[0.2em] uppercase">
                            Experience
                        </span>
                        <div className="mt-6 space-y-6">
                            {experience.map((exp, index) => (
                                <motion.div
                                    key={exp.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-8 border border-gold-primary/30 hover:border-gold-primary/60 transition-colors"
                                >
                                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                        <div>
                                            <h3 className="font-display text-xl text-gold-primary">
                                                {exp.role}
                                            </h3>
                                            <p className="text-ivory/70 font-body">
                                                {exp.company}
                                            </p>
                                        </div>
                                        <span className="text-ivory/50 font-heading text-sm">
                                            {exp.duration}
                                        </span>
                                    </div>
                                    <ul className="space-y-2 mb-6">
                                        {exp.highlights.map((highlight, i) => (
                                            <li key={i} className="text-ivory/60 font-body text-sm flex gap-3">
                                                <span className="text-gold-primary/60">—</span>
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech) => (
                                            <span key={tech} className="tag-classic text-[0.6rem]">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Divider */}
                    <div className="gold-divider mb-20" />

                    {/* Skills */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <span className="text-gold-primary/60 font-heading text-sm tracking-[0.2em] uppercase">
                            Skills & Expertise
                        </span>
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                            {skillCategories.map((category, index) => (
                                <motion.div
                                    key={category.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-6 border border-gold-primary/20"
                                >
                                    <h4 className="font-display text-lg text-gold-primary mb-4">
                                        {category.name}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {category.items.map((skill) => (
                                            <span key={skill} className="tag-classic text-[0.6rem]">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Achievements */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <span className="text-gold-primary/60 font-heading text-sm tracking-[0.2em] uppercase">
                            Achievements & Recognition
                        </span>
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {achievements.slice(0, 6).map((achievement, index) => (
                                <motion.div
                                    key={achievement.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`p-6 border transition-colors ${achievement.highlight
                                        ? 'border-gold-primary bg-gold-primary/5'
                                        : 'border-gold-primary/20 hover:border-gold-primary/40'
                                        }`}
                                >
                                    <div className="flex items-start gap-4">
                                        <span className="text-2xl">{achievement.icon}</span>
                                        <div>
                                            <h4 className="font-display text-lg text-gold-primary">
                                                {achievement.title}
                                            </h4>
                                            <p className="text-ivory/70 font-body text-sm mt-1">
                                                {achievement.subtitle}
                                            </p>
                                            <p className="text-ivory/50 font-body text-xs mt-2">
                                                {achievement.description}
                                            </p>
                                            {achievement.prize && (
                                                <span className="inline-block mt-3 text-gold-primary font-heading text-sm">
                                                    {achievement.prize}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center pt-8 border-t border-gold-primary/20"
                    >
                        <p className="text-ivory/60 font-body text-lg italic mb-6">
                            Interested in working together?
                        </p>
                        <Link to="/contact">
                            <GoldButton variant="outline" size="lg">
                                Get in Touch
                            </GoldButton>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
