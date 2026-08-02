/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,jsx}',
		'./components/**/*.{js,jsx}',
		'./app/**/*.{js,jsx}',
		'./src/**/*.{js,jsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			fontFamily: {
				sans: [
					'Inter',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'sans-serif',
				],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				/* Gili erdve - naujo pagrindinio puslapio fonas */
				space: {
					950: '#05060d',
					900: '#0a0c16',
					800: '#111524',
				},
				/* Tikros app spalvos (dark tema) - kad demo atrodytu kaip Clarivex */
				app: {
					surface: '#171c26',
					elevated: '#1e2430',
					border: '#2b3342',
					text: '#ececec',
					muted: '#8b94a5',
					user: '#2f5578',
					primary: '#60a5fa',
				},
				/* Aurora akcentai - svelnus, ne neonas */
				aurora: {
					blue: '#4f8dfd',
					violet: '#8b6cff',
					teal: '#3fd8c2',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
				auroraDrift: {
					'0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
					'33%': { transform: 'translate3d(4%, -3%, 0) scale(1.08)' },
					'66%': { transform: 'translate3d(-3%, 3%, 0) scale(0.96)' },
				},
				pulseSoft: {
					'0%, 100%': { opacity: 0.45 },
					'50%': { opacity: 0.8 },
				},
				dotBounce: {
					'0%, 60%, 100%': { transform: 'translateY(0)', opacity: 0.35 },
					'30%': { transform: 'translateY(-4px)', opacity: 1 },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'aurora-slow': 'auroraDrift 22s ease-in-out infinite',
				'aurora-slower': 'auroraDrift 32s ease-in-out infinite reverse',
				'pulse-soft': 'pulseSoft 3.5s ease-in-out infinite',
				'dot-bounce': 'dotBounce 1.3s ease-in-out infinite',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};