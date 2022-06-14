/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
		fontFamily:{
			josefin : ["Josefin Sans",]
		},
		colors:{
			red:{
				desaturated: " hsl(0, 36%, 70%)",
				soft: "hsl(0, 93%, 68%)",
				dark: "hsl(0, 6%, 24%)",
			},
			grad:{
				from:"hsl(0, 0%, 100%)",
				to: "hsl(0, 100%, 98%)"
			}
		},
		fontSize:{
			base: "16px"
		},
		backgroundImage:{
			pattern: "url(./src/images/bg-pattern-desktop.svg)"
		}
	},
  },
  plugins: [],
}
