/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(257.6deg, #C2DFFA1A 10%, #FFFFFF 100%)",
      },
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
          search: "var(--search)",
          select: "var(--select)",

          txt: {
            primary: "var(--text-primary)",
            secondary: "var(--text-secondary)",
            tertiary: "var(--text-tertiary)",
            accent: "var(--text-accent)",
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
      font: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
