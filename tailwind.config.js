/** @type {import('tailwindcss').Config} */

import { fontFamily } from "tailwindcss/defaultTheme";

export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      prRed: "#ff3b3b",
      srRed: "#d93030",
      prBlue: "#007bff",
      prBlack: "#444444",
      sdBlack: "#171717",
      trBlack: "#202020",
      qrBlack: "#1f1f1f",
    },
  },
};
export const plugins = [];
