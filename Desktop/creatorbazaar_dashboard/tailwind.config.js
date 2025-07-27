/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--color-border))",
        input: "hsl(var(--color-input))",
        ring: "hsl(var(--color-ring))",
        background: "hsl(var(--color-background))",
        foreground: "hsl(var(--color-foreground))",
        primary: "#003366", // Deep navy
        accent: "#00B4C6", // Vibrant cyan
        gradientMid: "#0483B8", // Gradient middle
        highlight: "#FFC100", // Highlight yellow
        dark: "#04253C", // Dark navy
        secondary: {
          DEFAULT: "#04253C", // Darker navy
          foreground: "#FFFFFF", // white
        },
        destructive: {
          DEFAULT: "#EF4444", // red-500
          foreground: "#FFFFFF", // white
        },
        muted: {
          DEFAULT: "#F1F5F9", // slate-100
          foreground: "#64748B", // slate-500
        },
        card: {
          DEFAULT: "#FFFFFF", // white
          foreground: "#1E293B", // slate-800
        },
        popover: {
          DEFAULT: "#FFFFFF", // white
          foreground: "#1E293B", // slate-800
        },
        surface: "#FFFFFF", // white
        'text-primary': "#1E293B", // slate-800
        'text-secondary': "#64748B", // slate-500
        'text-muted': "#94A3B8", // slate-400
        success: "#10B981", // emerald-500
        warning: "#F59E0B", // amber-500
        error: "#EF4444", // red-500
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      minHeight: {
        '12': '3rem',
      },
      zIndex: {
        '60': '60',
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}