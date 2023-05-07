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
            backgroundImage: {
                'header-gradient':
                    'linear-gradient(290.1deg, #D6E6FE 0%, rgba(214, 252, 254, 0) 100%)',
            },
            borderRadius: {
                'header-radius': '0px 0px 35px 35px;',
            },
            typography: {
                'heading-xl': {
                    css: {
                        fontSize: '4rem',
                        fontWeight: 600,
                        fontFamily: 'Inter',
                        lineHeight: '110%',
                    },
                },
                'heading-l': {
                    css: {
                        fontSize: '3rem',
                        fontWeight: 600,
                        fontFamily: 'Inter',
                        lineHeight: '110%',
                    },
                },
                'heading-m': {
                    css: {
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        fontFamily: 'Inter',
                        lineHeight: '110%',
                    },
                },
                'heading-s': {
                    css: {
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        fontFamily: 'Inter',
                        lineHeight: '110%',
                    },
                },
                'body-m': {
                    css: {
                        fontSize: '1rem',
                        fontWeight: 400,
                        fontFamily: 'Inter',
                        lineHeight: '150%',
                    },
                },
                'body-m-bold': {
                    css: {
                        fontSize: '1rem',
                        fontWeight: 600,
                        fontFamily: 'Inter',
                        lineHeight: '150%',
                    },
                },
                'body-s': {
                    css: {
                        fontSize: '0.875rem',
                        fontWeight: 400,
                        fontFamily: 'Inter',
                        lineHeight: '150%',
                    },
                },
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
