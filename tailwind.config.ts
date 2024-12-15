import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        doreturn: {
          gold: "#C5B358",
          grey: "#808080",
        },
        bg: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
        },
        border: {
          primary: "var(--border-primary)",
          "primary-hover": "var(--border-primary-hover)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
