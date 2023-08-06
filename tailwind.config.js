/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                welcome_banner: "url('/assets/welcome_banner.png')",
                bet_sports_banner: "url('/assets/bet_sports_bg.png')",
                play_casino_banner: "url('/assets/play_casino_bg.png')",
            },
        },
    },
    plugins: [],
}
