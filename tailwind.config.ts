/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,vue,ts}"],
  theme: {
    fontSize: {
      sm: "0.75rem",
      base: "1rem",
      lg: "1.312rem",
      xl: "1.688rem",
      "2xl": "2.250rem",
      "3xl": "2.938rem",
    },
    extend: {
      colors: {
        accent: "hsl(var(--accent)/<alpha-value>)",
        primary: "hsl(var(--primary)/<alpha-value>)",
        secondary: "hsl(var(--secondary)/<alpha-value>)",
        background: "hsl(var(--background)/<alpha-value>)",
      },
      fontSize: {
        "3xl": "2.938rem",
        "2xl": "2.250rem",
        xl: "1.688rem",
        lg: "1.312rem",
        sm: "0.750rem",
      },
    },
  },
  plugins: [],
};
