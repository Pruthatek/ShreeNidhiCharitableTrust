/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          nunito: ["var(--font-nunito)"],
          sourceSarif: ["var(--font-SourceSarif4)"],
          manrope: ["var(--font-manrope)"],
          inter: ["var(--font-inter)"],
          Edu: ["var(--font-Edu AU VIC WA NT Arrows)"],
        },
      },
    },
    plugins: [],
  };
  