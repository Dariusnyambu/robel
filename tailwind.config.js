/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        royal: {
          DEFAULT: "#1554D1",
          50: "#EEF3FD",
          100: "#DCE7FB",
          200: "#B4CBF6",
          600: "#1554D1",
          700: "#123F9E",
          900: "#0B2A6B",
        },
        ember: {
          DEFAULT: "#F97316",
          50: "#FFF3E9",
          100: "#FFE2C7",
          600: "#F97316",
          700: "#C2570A",
        },
        verdant: {
          DEFAULT: "#16A34A",
          50: "#EAF8EF",
          100: "#CFEFDB",
          600: "#16A34A",
          700: "#0F7C38",
        },
        ink: "#0E1B2C",
        paper: "#FBFBFA",
        mist: "#F2F4F8",
      },
      fontFamily: {
        serif: ["'IBM Plex Serif'", "Georgia", "serif"],
        sans: ["'IBM Plex Sans'", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      backgroundImage: {
        ruled: "repeating-linear-gradient(to bottom, transparent, transparent 27px, rgba(21,84,209,0.07) 28px)",
      },
      boxShadow: {
        card: "0 1px 2px rgba(14,27,44,0.04), 0 8px 24px -12px rgba(14,27,44,0.12)",
        lift: "0 20px 45px -20px rgba(21,84,209,0.35)",
      },
    },
  },
  plugins: [],
}
