/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        clr: {
          base: "var(--base)",
          background:"var(--background)",
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
            tertiary:"var(--text-tertiary)"
          },
          icon:{
            book: "var(--primary)",
            globe:"var(--inverted)",
            atom: "var(--success)",
            molecule: "var(--warning)",
            math: "var(--primary)",
            menu:"var(--primary)",
          }
        },
      },
      // font: {
      //     roboto:[ 'Roboto', 'Arial', 'sans-serif'],

      // }
    },
  },
  plugins: [],
};
