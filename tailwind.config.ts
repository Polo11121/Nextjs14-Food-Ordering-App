import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f13a01",
      },
      gridTemplateColumns: {
        hero: ".4fr .6fr",
      },
      height: {
        container: "calc(100vh - 225px)",
      },
    },
  },
  plugins: [],
};
export default config;
