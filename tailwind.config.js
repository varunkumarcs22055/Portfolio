/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'classic': {
                    900: '#1a1714',  // Deep velvet brown
                    800: '#252019',  // Charcoal brown
                    700: '#302a21',  // Warm charcoal
                    600: '#3d3428',  // Lighter brown
                    500: '#4a4030',  // Mid brown
                },
                'gold': {
                    primary: '#c9a227',   // Brushed gold
                    light: '#d4b84a',     // Light gold
                    dark: '#9a7b1c',      // Deep gold
                    muted: 'rgba(201, 162, 39, 0.3)',
                    subtle: 'rgba(201, 162, 39, 0.15)',
                },
                'ivory': {
                    DEFAULT: '#f5f0e6',
                    muted: 'rgba(245, 240, 230, 0.7)',
                    dark: '#d4cfc5',
                },
            },
            fontFamily: {
                'display': ['Playfair Display', 'Georgia', 'serif'],
                'heading': ['Cormorant Garamond', 'Georgia', 'serif'],
                'body': ['Cormorant', 'Georgia', 'serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'shimmer': 'shimmer 2s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                shimmer: {
                    '0%, 100%': { opacity: '0.7' },
                    '50%': { opacity: '1' },
                },
            },
            boxShadow: {
                'gold': '0 0 20px rgba(201, 162, 39, 0.2)',
                'gold-lg': '0 0 40px rgba(201, 162, 39, 0.3)',
                'classic': '0 4px 20px rgba(0, 0, 0, 0.4)',
            },
            borderWidth: {
                '1': '1px',
            },
        },
    },
    plugins: [],
}
