import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
];

const NavLink = ({ item, isActive, onClick }) => {
    return (
        <Link to={item.path} onClick={onClick}>
            <motion.span
                className={`nav-link ${isActive ? 'active' : ''}`}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
            >
                {item.name}
            </motion.span>
        </Link>
    );
};

const MobileMenu = ({ isOpen, onClose }) => {
    const location = useLocation();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-classic-900/90 backdrop-blur-sm z-40"
                        onClick={onClose}
                    />

                    {/* Menu Panel */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-x-0 top-0 bg-classic-800 border-b border-gold-primary/30 z-50 py-8"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-gold-primary hover:text-gold-light transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Logo */}
                        <div className="text-center mb-8">
                            <span className="font-display text-2xl tracking-[0.3em] text-gold-primary">
                                PORTFOLIO
                            </span>
                        </div>

                        {/* Nav Items */}
                        <nav className="flex flex-col items-center gap-6">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.path}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        to={item.path}
                                        onClick={onClose}
                                        className={`
                                            font-heading text-lg tracking-[0.2em] uppercase
                                            transition-colors duration-300
                                            ${location.pathname === item.path
                                                ? 'text-gold-light'
                                                : 'text-gold-primary hover:text-gold-light'
                                            }
                                        `}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    return (
        <>
            <motion.header
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className={`
                    fixed top-0 left-0 right-0 z-50 transition-all duration-500
                    ${isScrolled
                        ? 'bg-classic-900/95 backdrop-blur-sm'
                        : 'bg-transparent'
                    }
                `}
            >
                {/* Top Gold Line */}
                <div className="w-full h-px bg-gold-primary/40" />

                <div className="container mx-auto px-6">
                    {/* Main Header Content */}
                    <div className="py-6 text-center">
                        {/* Portfolio Title */}
                        <Link to="/">
                            <motion.h1
                                className="font-display text-3xl md:text-4xl tracking-[0.3em] text-gold-primary mb-4"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                PORTFOLIO
                            </motion.h1>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center justify-center gap-8">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.path}
                                    item={item}
                                    isActive={location.pathname === item.path}
                                />
                            ))}
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="md:hidden absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                        >
                            <span className="w-6 h-px bg-gold-primary" />
                            <span className="w-6 h-px bg-gold-primary" />
                            <span className="w-6 h-px bg-gold-primary" />
                        </button>
                    </div>
                </div>

                {/* Bottom Gold Line */}
                <div className="w-full h-px bg-gold-primary/40" />
            </motion.header>

            {/* Mobile Menu */}
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
            />
        </>
    );
};

export default Navigation;
