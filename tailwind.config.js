/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
        gunmetal: "hsl(229, 8%, 4%)",
        charcoal: "hsl(240, 2%, 26%)",
        raisinBlack: "hsl(0, 0%, 17%)",
        slatGray: "hsl(215, 16%, 47%)",
        snow: "hsl(0, 0%, 97%)",
        red:"hsl(0, 76%, 50%)",
        richBlack: "hsl(240, 9%, 4%)",
        lightGray: "hsl(0, 0%, 79%)",
        mediumGray:"hsl(0, 0%, 53%)",
        darkGray: "hsl(0, 0%, 54%)",
        deepCyan: "hsl(204, 32%, 17%)",
        dimGray: "hsl(0, 0%, 43%)",
        silver: "hsl(0, 0%, 74%)",
        lightBlue: "hsl(225, 25%, 97%)",
        steelBlue: "hsl(218, 31%, 12%)",
        charcoalGray:  "hsl(0, 0%, 44%)",
        lightSilver: "hsl(0, 0%, 88%)",
        softGrey: "hsl(0, 0%, 86%)",
        stoneGray: "hsl(229, 8%, 59%)",
        paleGray: "hsl(0, 0%, 77%)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        outfit: ['Outfit'],
      },
      spacing:{
        'popover-trigger-width': 'var(--radix-popover-trigger-width)',
      },
      boxShadow: {
        soft: '0px 0px 14px 0px hsla(0, 0%, 0%, 0.25)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}