module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extends: {
			colors: {
				primary: {
					1: '#697161',
				},
			},
		},
	},
	plugins: [require('@tailwindcss/line-clamp')],
}
