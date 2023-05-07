/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'primary-blue': '#345FF6',
                gunmetal: '#253347',
                'dark-electric-blue': '#5E6E85',
                border: '#D8E2E7',
                'pure-white': '#FFFFFF',
            },
        },
    },
    plugins: [],
}
