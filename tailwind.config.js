/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		colors: {
			// ### Primary

			veryDarkBlu: "hsl(233, 47%, 7%)", //  main background
			darkDesaturatedBlue: "hsl(244, 38%, 16%)", //  card background
			softViolet: "hsl(277, 64%, 61%)", //   accent

			// ### Neutral

			white: "hsl(0, 0%, 100%)", //  main heading, stats
			slightlyTransparentWhite: "hsla(0, 0%, 100%, 0.75)", //   main paragraph
			slightlyTransparentWhite: "hsla(0, 0%, 100%, 0.6)", //   stat headings
		},
        fontFamily: {
            inter: "'Inter', sans-serif",
            lexendDeca: "'Lexend Deca', sans-serif",
        },
		extend: {},
	},
	plugins: [],
};
