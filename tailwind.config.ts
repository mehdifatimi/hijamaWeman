import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                beige: {
                    50: '#faf8f5',
                    100: '#f5f1ea',
                    200: '#e8dfd0',
                    300: '#dbc9b0',
                    400: '#c9ae8a',
                    500: '#b89368',
                    600: '#a37d56',
                    700: '#88674a',
                    800: '#6f5540',
                    900: '#5a4635',
                },
                rose: {
                    50: '#fdf4f4',
                    100: '#fce8e8',
                    200: '#f9d5d6',
                    300: '#f4b5b8',
                    400: '#ec8a8f',
                    500: '#e06069',
                    600: '#cc4450',
                    700: '#ab3541',
                    800: '#8e2f3b',
                    900: '#782c37',
                },
                sage: {
                    50: '#f6f8f6',
                    100: '#e3e9e3',
                    200: '#c7d3c8',
                    300: '#a3b5a5',
                    400: '#7d9380',
                    500: '#5f7762',
                    600: '#4a5f4d',
                    700: '#3d4e40',
                    800: '#334035',
                    900: '#2c362e',
                },
                gold: {
                    50: '#fdfbf7',
                    100: '#f7f1e6',
                    200: '#ecddbf',
                    300: '#e0c493',
                    400: '#d4a866',
                    500: '#c68d44',
                    600: '#aa7036',
                    700: '#89562d',
                    800: '#70452a',
                    900: '#5c3a25',
                },
            },
            fontFamily: {
                poppins: ['var(--font-poppins)', 'sans-serif'],
                playfair: ['var(--font-playfair)', 'serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.8s ease-in-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'slide-in-left': 'slideInLeft 0.6s ease-out',
                'slide-in-right': 'slideInRight 0.6s ease-out',
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
                slideInLeft: {
                    '0%': { transform: 'translateX(-30px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                slideInRight: {
                    '0%': { transform: 'translateX(30px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
};

export default config;
