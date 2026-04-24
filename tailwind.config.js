/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        background: { DEFAULT: "var(--background)" },
        foreground: { DEFAULT: "var(--foreground)" },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        border: { DEFAULT: "var(--border)" },
        input: { DEFAULT: "var(--input)" },
        ring: { DEFAULT: "var(--ring)" },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "4xl": "2rem",
        "5xl": "3rem",
        "hero": "12rem",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        display: ["var(--font-orbitron)", "sans-serif"],
      },
      backgroundImage: {
        "neon-gradient":
          "linear-gradient(135deg, #00d4ff 0%, #7c3aed 50%, #00f5ff 100%)",
        "neon-gradient-soft":
          "linear-gradient(135deg, rgba(0,212,255,0.15) 0%, rgba(124,58,237,0.15) 100%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(0,212,255,0.08) 0%, rgba(124,58,237,0.08) 100%)",
      },
      animation: {
        "spin-slow": "rotateSlow 12s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        float: "floatY 4s ease-in-out infinite",
        shimmer: "shimmer 2s ease-in-out infinite",
      },
      boxShadow: {
        "neon-cyan": "0 0 20px rgba(0,212,255,0.4), 0 0 40px rgba(0,212,255,0.2)",
        "neon-purple":
          "0 0 20px rgba(124,58,237,0.4), 0 0 40px rgba(124,58,237,0.2)",
        "neon-sm": "0 0 10px rgba(0,212,255,0.3)",
        card: "0 4px 30px rgba(0,0,0,0.4)",
        "card-hover": "0 20px 60px rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};