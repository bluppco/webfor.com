/** @type {import('tailwindcss').Config} */
module.exports = {

	darkMode: ["class"],
  	content: [

    	"./pages/**/*.{js,jsx}",
    	"./components/**/*.{js,jsx}",
    	"./app/**/*.{js,jsx}",
    	"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",

  	],
  	prefix: "",
  	theme: {

		container: {

			center: true,
      		padding: "2rem",
      		screens: {
        		"2xl": "1400px",
      		},

		},
    	extend: {

			backgroundImage: theme => ({
				'light-radial-gradient': 'radial-gradient(circle, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0))',
			}),

			keyframes: {

				"accordion-down": {

					from: { height: "0" },
          			to: { height: "var(--radix-accordion-content-height)" },

				},
        		"accordion-up": {

					from: { height: "var(--radix-accordion-content-height)" },
          			to: { height: "0" },

				},
      		},
      		animation: {

				"accordion-down": "accordion-down 0.2s ease-out",
        		"accordion-up": "accordion-up 0.2s ease-out",

			},
			colors: {
				color:{
					primary: "#0492ff",
					secondary: "#139f2d",
					tertiary: "#e0efff",
					accent:"#f37b43",
				}

			},
			fontFamily: {

				"montserrat": [ "Montserrat", "sans-serif" ],
				"proxima_nova": [ "proxima-nova", "sans-serif" ]

			}

		}

	},
  	plugins: [require("tailwindcss-animate")],

}
