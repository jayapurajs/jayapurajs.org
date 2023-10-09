/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter'],
				nunito: ['Nunito'],
				rubik: ['Rubik'],
			}
		},
	},
	darkMode: "class",
	plugins: [],
}
