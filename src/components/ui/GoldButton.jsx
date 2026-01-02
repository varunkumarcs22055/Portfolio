import { motion } from 'framer-motion';

const GoldButton = ({
    children,
    variant = 'outline',
    size = 'md',
    className = '',
    onClick,
    href,
    ...props
}) => {
    const sizeClasses = {
        sm: 'px-4 py-2 text-[0.65rem]',
        md: 'px-6 py-3 text-[0.7rem]',
        lg: 'px-8 py-4 text-[0.75rem]',
    };

    const baseClasses = `
        inline-flex items-center justify-center gap-2
        font-heading font-semibold uppercase tracking-[0.2em]
        border transition-all duration-300
        ${sizeClasses[size]}
    `;

    const variantClasses = {
        outline: `
            bg-transparent text-gold-primary border-gold-primary
            hover:bg-gold-primary hover:text-classic-900
        `,
        filled: `
            bg-gold-primary text-classic-900 border-gold-primary
            hover:bg-gold-light
        `,
        ghost: `
            bg-transparent text-gold-primary border-transparent
            hover:border-gold-primary/50
        `,
    };

    const ButtonContent = () => (
        <motion.span
            className={`${baseClasses} ${variantClasses[variant]} ${className}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            {...props}
        >
            {children}
        </motion.span>
    );

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer">
                <ButtonContent />
            </a>
        );
    }

    return (
        <button onClick={onClick} className="focus:outline-none">
            <ButtonContent />
        </button>
    );
};

export default GoldButton;
