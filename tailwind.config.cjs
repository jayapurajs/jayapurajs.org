/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				rubik: ['Rubik Variable'],
				onest: ["Onest"]
			}
		},
	},
	darkMode: "class",
	plugins: [],
}
