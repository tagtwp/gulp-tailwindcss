/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}', 'node_modules/preline/dist/*.js'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		screens: {
			sm: '640px',
			// => @media (min-width: 576px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 992px) { ... }

			xl: '1280px',
			// => @media (min-width: 1200px) { ... }

			'2xl': '1296px'
			// => @media (min-width: 1400px) { ... }
		},
		container: {
			center: true
			// padding: '16px',
		},
		// Extend the default Tailwind theme.
		extend: {
			colors: {
				primary: 'var(--color-primary)',
				'primary-hover': 'var(--color-primary-hover)',
				'primary-disabled': 'var(--color-primary-disabled)',
				secondary: 'var(--color-secondary)',
				'secondary-hover': 'var(--color-secondary-hover)',
				'secondary-disabled': 'var(--color-secondary-disabled)',
				success: 'var(--color-success)',
				'success-hover': 'var(--color-success-hover)',
				'success-disabled': 'var(--color-secondary-disabled)',
				warning: 'var(--color-warning)',
				'warning-hover': 'var(--color-warning-hover)',
				'warning-disabled': 'var(--color-warning-disabled)',
				danger: 'var(--color-danger)',
				'danger-hover': 'var(--color-danger-hover)',
				'danger-disabled': 'var(--color-danger-disabled)',
				salmon: 'var(--color-salmon)',
				'salmon-hover': 'var(--color-salmon-hover)',
				'salmon-disabled': 'var(--color-salmon-disabled)',
				blue: {
					DEFAULT: 'var(--color-blue-1)',
					2: 'var(--color-blue-2)',
					3: 'var(--color-blue-3)'
				},
				'gray-scale': {
					DEFAULT: 'var(--color-gray-scale-1)',
					2: 'var(--color-gray-scale-2)',
					3: 'var(--color-gray-scale-3)'
				},
				dark: {
					DEFAULT: 'var(--color-dark-1)',
					2: 'var(--color-dark-2)',
					3: 'var(--color-dark-3)',
					4: 'var(--color-dark-4)'
				},
				'warm-gray': {
					DEFAULT: 'var(--color-warm-gray-1)',
					2: 'var(--color-warm-gray-2)',
					3: 'var(--color-warm-gray-3)'
				},
				white: 'var(--color-white)',
				black: 'var(--color-black)',
				block: 'var(--color-block)',
				'text-block': 'var(--color-text-block)',
				'text-block-hover': 'var(--color-text-block-hover)',
				grey: 'var(--color-grey)',
				warm: 'var(--color-warm)',
				'warm-hover': 'var(--color-warm-hover)',
				shadow: 'var(--color-shadow)',
				'nav-bar-mobile-height': 'var(--nav-bar-mobile-height)',
				'nav-bar-desktop-height': 'var(--nav-bar-desktop-height)',
				indicator: 'var(--color-indicator)',
				'light-green': 'var(--color-light-green)',
				'blue-neon': 'var(--color-blue-neon)',
				purple: 'var(--color-purple)',
				'contain-secondary-inverted': 'var(--color-contain-secondary-invert)'
			},
			fontFamily: {
				main: 'var(--font-main)',
				serif: ['Merriweather', 'serif']
			},
			boxShadow: {
				input: '0px 7px 20px rgba(0, 0, 0, 0.03)',
				form: '0px 1px 55px -11px rgba(0, 0, 0, 0.01)',
				pricing: '0px 0px 40px 0px rgba(0, 0, 0, 0.08)',
				'switch-1': '0px 0px 5px rgba(0, 0, 0, 0.15)',
				testimonial: '0px 10px 20px 0px rgba(92, 115, 160, 0.07)',
				'testimonial-btn': '0px 8px 15px 0px rgba(72, 72, 138, 0.08)',
				1: '0px 1px 3px 0px rgba(166, 175, 195, 0.40)',
				2: '0px 5px 12px 0px rgba(0, 0, 0, 0.10)'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [require('preline/plugin')]
}
