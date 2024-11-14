import type { Config } from "tailwindcss";
import typography from "./src/styles/plugin/typo";

export default {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: { mobile: "768px", tablet: "1024px" },
    colors: {
      transparent: "transparent",
      currentColor: "currentColor",
      white: "#fff",
      black: "#121212",
      surface: "var(--surface)",
      ring: "var(--ring)",
      background: "var(--background)",
      foreground: {
        DEFAULT: "var(--foreground)",
        accent: "var(--foreground-accent)",
        muted: "var(--foreground-muted)"
      },
      primary: {
        DEFAULT: "var(--primary)",
        accent: "var(--primary-accent)",
        surface: "var(--primary-surface)",
        foreground: "var(--primary-foreground)"
      },
      secondary: {
        DEFAULT: "var(--secondary)",
        accent: "var(--secondary-accent)",
        foreground: "var(--secondary-foreground)"
      },
      border: {
        DEFAULT: "var(--border)",
        accent: "var(--border-accent)"
      },
      card: {
        DEFAULT: "var(--card)",
        foreground: "var(--card-foreground)"
      }
    }
  },
  plugins: [typography]
} satisfies Config;
