import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Grechen Fuemen"],
      },
      // colors: {
      //   background: "var(--background)",
      //   foreground: "var(--foreground)",
      // },
      backgroundImage: {
        bgHomedeg:
          "linear-gradient(90deg, #2b2b2b, #797878  40%, #797878  60%, #2b2b2b)",
      },

      boxShadow: {
        customHome: "0px 30px 40px 7px #dc6e33",
        shadowTitle:
          " -5px 5px 7px 0px #000, inset 0px 0px 2px 2px white, inset 0px 0px 3px 9px #2f363e, -5px 10px 10px black",
        customIcon: " 0px 3px 4px 1px #dc6e33",
      },
    },
  },
  plugins: [],
};
export default config;
