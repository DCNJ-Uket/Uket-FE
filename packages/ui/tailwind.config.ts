import type { Config } from "tailwindcss";

import tailwindcssAnimate from "tailwindcss-animate";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        brand: "#7250FD",
        brandHover: "#633cff",
        buttonDisabled: "#17171B",
        error: "#FD724F",
        formInput: "#D9D9D9",
        desc: "#5E5E6E",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "ping-delay": {
          "0%": {
            transform: "scale(1)",
            opacity: "1",
          },
          "50%": {
            transform: "scale(2)",
            opacity: "0",
          },
          "75%, 100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        "rotate-axis": {
          "0%": {
            transform: "perspective(800px) rotateY(0deg)",
          },
          "100%": {
            transform: "perspective(800px) rotateY(360deg)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "ping-dealy": "ping-delay 3s cubic-bezier(0, 0, 0.2, 1) infinite",
        "rotate-axis": "rotate-axis 4.5s linear infinite",
      },
      backgroundImage: {
        "landing-pattern":
          "url('/landingBg.png'), linear-gradient(171.65deg, #6343E1 5.82%, #000000 81.67%)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;

export default config;
