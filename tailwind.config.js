/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        clr: {
          base: "var(--base)",
          background: "var(--background)",
          "secondary-background": "var(--background)",
          primary: "var(--primary)",
          surface: "var(--surface)",
          accent: "var(--accent)",
          success: "var(--success)",
          error: "var(--error)",
          warning: "var(--warning)",
          hover: "var(--hover)",
          border: "var(--border)",
          txt: {
            primary: "var(--text-primary)",
            secondary: "var(--text-secondary)",
            tertiary: "var(--text-tertiary)",
          },
          icon: {
            menu: "var(--primary)",
          },
          btn: {
            default: "var(--primary)",
            hover: "var(--hover)",
          },
        },
      },
      // font: {
      //     roboto:[ 'Roboto', 'Arial', 'sans-serif'],

      // }
    },
  },
  plugins: [],
};
