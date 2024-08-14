/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        },
        extend: {
            colors: {
                theme: {
                    main: '#7a0707',
                    second: '#380303',
                    bg: '#f9f0e3',
                },
            },
        },
    },
    plugins: [],
}
