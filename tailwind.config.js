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
				primary: 'var(--color__primary)',
				'primary-hover': 'var(--color__primary-hover)',
				'primary-disabled': 'var(--color__primary-disabled)',
				secondary: 'var(--color__secondary)',
				'secondary-hover': 'var(--color__secondary-hover)',
				'secondary-disabled': 'var(--color__secondary-disabled)',
				success: 'var(--color__success)',
				'success-hover': 'var(--color__success-hover)',
				'success-disabled': 'var(--color__secondary-disabled)',
				warning: 'var(--color__warning)',
				'warning-hover': 'var(--color__warning-hover)',
				'warning-disabled': 'var(--color__warning-disabled)',
				danger: 'var(--color__danger)',
				'danger-hover': 'var(--color__danger-hover)',
				'danger-disabled': 'var(--color__danger-disabled)',
				salmon: 'var(--color__salmon)',
				'salmon-hover': 'var(--color__salmon-hover)',
				'salmon-disabled': 'var(--color__salmon-disabled)',
				blue: {
					DEFAULT: 'var(--color__blue-1)',
					2: 'var(--color__blue-2)',
					3: 'var(--color__blue-3)'
				},
				'gray-scale': {
					DEFAULT: 'var(--color__gray-scale-1)',
					2: 'var(--color__gray-scale-2)',
					3: 'var(--color__gray-scale-3)'
				},
				dark: {
					DEFAULT: 'var(--color__dark-1)',
					2: 'var(--color__dark-2)',
					3: 'var(--color__dark-3)',
					4: 'var(--color__dark-4)'
				},
				'warm-gray': {
					DEFAULT: 'var(--color__warm-gray-1)',
					2: 'var(--color__warm-gray-2)',
					3: 'var(--color__warm-gray-3)'
				},
				white: 'var(--color__white)',
				black: 'var(--color__black)',
				block: 'var(--color__block)',
				'text-block': 'var(--color__text-block)',
				'text-block-hover': 'var(--color__text-block-hover)',
				grey: 'var(--color__grey)',
				warm: 'var(--color__warm)',
				'warm-hover': 'var(--color__warm-hover)',
				shadow: 'var(--color__shadow)',
				'nav-bar-mobile-height': 'var(--nav-bar-mobile-height)',
				'nav-bar-desktop-height': 'var(--nav-bar-desktop-height)',
				indicator: 'var(--color__indicator)',
				'light-green': 'var(--color__light-green)',
				'blue-neon': 'var(--color__blue-neon)',
				purple: 'var(--color__purple)',
				'contain-secondary-inverted': 'var(--color__contain-secondary-invert)'
			},
			fontFamily: {
				main: 'var(--font__main)',
				heading: 'var(--font__heading)',
				nav: 'var(--font__nav)',
				button: 'var(--font__button)',
				field: 'var(--font__field)',
				meta: 'var(--font__meta)'
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
