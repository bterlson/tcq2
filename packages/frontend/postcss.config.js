const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer'),
        ...(process.env.NODE_ENV === 'production' ? purgecss({
            content: [
                './src/**/*.tsx',
                './src/**/*.ts',
                './public/index.html'
            ],
            css: ['./src/assets/tailwind.css'],
            // Include any special characters you're using in this regular expression
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
        }) : [])
    ],
};