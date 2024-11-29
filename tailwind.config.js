/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        clr: {
          fill: "var(--background)",
          'secondary-background':"var(--background)",
          primary: "var(--primary)",
          surface: "var(--surface)",
          accent: "var(--accent)",
          success: "var(--success)",
          error: "var(--error)",
          warning: "var(--warning)",
          txt: {
            primary: "var(--text-primary)",
            secondary: "var(--text-secondary)",
          },
        },
      },
    },
  },
  plugins: [],
};
