const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				'main': ["'Space Grotesk'", 'sans-serif'],
				'alt': ['Sniglet', 'cursive'],
			}
		}
	},

};

module.exports = config;
