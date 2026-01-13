/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif']
      },
      spacing: {
        '128': '32rem',
        '144': '36rem'
      }
    },
  },
  plugins: [],
}