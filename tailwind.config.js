/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        },
        extend: {
            fontFamily: {
                viao: ['Viaoda Libre'],
                lovers: ['Lovers+Quarrel'],
                'old-standard': ['Old Standard TT'],
            },
            animation: {
                rotate: 'rotate 10s linear infinite',
            },
            keyframes: {
                rotate: {
                    '0%': { transform: 'rotate(0deg) scale(10)' },
                    '100%': { transform: 'rotate(-360deg) scale(10)' },
                },
            },
            colors: {
                theme: {
                    main: '#7a0707',
                    second: '#380303',
                    bg: '#fff9f0',
                },
            },
        },
    },
    plugins: [],
}
