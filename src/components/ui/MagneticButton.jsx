import { motion } from 'framer-motion';
import { useMagnetic } from '../../hooks/useMagnetic';

const MagneticButton = ({
    children,
    onClick,
    variant = 'primary',
    size = 'md',
    className = '',
    href,
    target,
    ...props
}) => {
    const magneticRef = useMagnetic(0.4);

    const sizeClasses = {
        sm: 'px-4 py-2 text-xs',
        md: 'px-6 py-3 text-sm',
        lg: 'px-8 py-4 text-base',
    };

    const variantClasses = {
        primary: `
      bg-transparent border border-neon-cyan text-neon-cyan
      hover:bg-neon-cyan hover:text-dark-900
    `,
        secondary: `
      bg-transparent border border-white/20 text-white
      hover:border-white/40 hover:bg-white/5
    `,
        gradient: `
      bg-gradient-to-r from-neon-cyan to-neon-purple text-dark-900
      border-none hover:shadow-neon-lg
    `,
        ghost: `
      bg-transparent border-none text-white/70
      hover:text-white hover:bg-white/5
    `,
    };

    const baseClasses = `
    relative inline-flex items-center justify-center gap-2
    font-display font-semibold tracking-wide uppercase
    rounded-full overflow-hidden
    transition-all duration-300 ease-out
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `;

    const content = (
        <motion.span
            ref={magneticRef}
            className={baseClasses}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            {...props}
        >
            {/* Shine Effect */}
            <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
            />

            {/* Content */}
            <span className="relative z-10 flex items-center gap-2">
                {children}
            </span>

            {/* Glow Effect */}
            <motion.span
                className="absolute inset-0 rounded-full opacity-0"
                style={{
                    boxShadow: '0 0 30px rgba(0, 245, 255, 0.5)',
                }}
                whileHover={{ opacity: 1 }}
            />
        </motion.span>
    );

    if (href) {
        return (
            <a href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
                {content}
            </a>
        );
    }

    return (
        <button onClick={onClick} type="button">
            {content}
        </button>
    );
};

export default MagneticButton;
