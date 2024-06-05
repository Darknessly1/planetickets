import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
        "./node_modules/tw-elements/js/**/*.js",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            backgroundImage: {
                'flight-booking': 'url("https://images.unsplash.com/photo-1519125323398-675f0ddb6308")',
                'hotel-booking': 'url("https://images.unsplash.com/photo-1501117716987-c8e1cc11a7e5")',
                'airport': 'url("https://images.unsplash.com/photo-1485313155954-763d91423bdd")',
                'ticket': 'url("https://images.unsplash.com/photo-1496395031280-4204d6024812")',
                'travel': 'url("https://images.unsplash.com/photo-1473625247510-8ceb1760943f")'
            },
            colors: {
                gray: {
                    '900': '#0f1011'
                },
                'dark-blue-900': '#1E3A8A', 
                'blue-800': '#2C5282',
            },
            minHeight: {
                '14': '3.5rem'
            },
            minWidth: {
                '14': '3.5rem'
            },
            transitionTimingFunction: {
                'in-out': 'cubic-bezier(0.2, 1, 0.25, 1)'
            }
        }
    },

    plugins: [forms, require("tw-elements/plugin.cjs")],
};
