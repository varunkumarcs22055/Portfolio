import { motion, AnimatePresence } from 'framer-motion';

const AnimatedModal = ({
    isOpen,
    onClose,
    children,
}) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-classic-900/95 backdrop-blur-sm z-50"
                        onClick={onClose}
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="relative w-full max-w-2xl max-h-[85vh] overflow-auto pointer-events-auto bg-classic-800 border border-gold-primary/40">
                            {/* Close Button */}
                            <motion.button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center border border-gold-primary/30 text-gold-primary hover:bg-gold-primary hover:text-classic-900 transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </motion.button>

                            {/* Corner Accents */}
                            <div className="absolute -top-1 -left-1 w-4 h-4 border-l border-t border-gold-primary" />
                            <div className="absolute -top-1 -right-1 w-4 h-4 border-r border-t border-gold-primary" />
                            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-l border-b border-gold-primary" />
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r border-b border-gold-primary" />

                            {/* Content */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                {children}
                            </motion.div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default AnimatedModal;
