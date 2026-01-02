import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useLenis } from './hooks/useLenis';

// Components
import Navigation from './components/ui/Navigation';
import CustomCursor from './components/ui/CustomCursor';
import PageTransition from './components/ui/PageTransition';
import Floating3DBackground from './components/3d/Floating3DBackground';

// Pages
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={
                    <PageTransition>
                        <Home />
                    </PageTransition>
                } />
                <Route path="/work" element={
                    <PageTransition>
                        <Work />
                    </PageTransition>
                } />
                <Route path="/about" element={
                    <PageTransition>
                        <About />
                    </PageTransition>
                } />
                <Route path="/contact" element={
                    <PageTransition>
                        <Contact />
                    </PageTransition>
                } />
            </Routes>
        </AnimatePresence>
    );
}

function App() {
    // Initialize Lenis smooth scrolling
    useLenis();

    return (
        <Router>
            <div className="relative min-h-screen velvet-bg">
                {/* Floating 3D Background - Across all pages */}
                <Floating3DBackground intensity="medium" />

                {/* Noise Overlay */}
                <div className="noise-overlay" />

                {/* Custom Cursor */}
                <CustomCursor />

                {/* Navigation */}
                <Navigation />

                {/* Main Content */}
                <main className="relative z-10">
                    <AnimatedRoutes />
                </main>
            </div>
        </Router>
    );
}

export default App;
