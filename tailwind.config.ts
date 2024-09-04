import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"], // Enables dark mode using the 'class' strategy
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/mdx-components.tsx"
  ],
  theme: {
    extend: {
      typography: () => ({
        DEFAULT: {
          // css: {
          //   "--tw-prose-body": "hsl(var(--foreground))",
          //   "--tw-prose-headings": "hsl(var(--foreground))",
          //   "--tw-prose-lead": "hsl(var(--muted-foreground))",
          //   "--tw-prose-links": "hsl(var(--primary))",
          //   "--tw-prose-bold": "hsl(var(--foreground))",
          //   "--tw-prose-counters": "hsl(var(--muted-foreground))",
          //   "--tw-prose-bullets": "hsl(var(--muted))",
          //   "--tw-prose-hr": "hsl(var(--border))",
          //   "--tw-prose-quotes": "hsl(var(--foreground))",
          //   "--tw-prose-quote-borders": "hsl(var(--border))",
          //   "--tw-prose-captions": "hsl(var(--muted-foreground))",
          //   "--tw-prose-kbd": "hsl(var(--foreground))",
          //   "--tw-prose-code": "hsl(var(--foreground))",
          //   "--tw-prose-pre-code": "hsl(var(--muted-foreground))",
          //   "--tw-prose-pre-bg": "hsl(var(--background))",
          //   "--tw-prose-th-borders": "hsl(var(--muted))",
          //   "--tw-prose-td-borders": "hsl(var(--border))"
          // }
        },
        invert: {
          css: {
            "--tw-prose-body": "hsl(var(--foreground))",
            "--tw-prose-headings": "hsl(var(--foreground))",
            "--tw-prose-lead": "hsl(var(--muted))",
            "--tw-prose-links": "hsl(var(--primary))",
            "--tw-prose-bold": "hsl(var(--foreground))",
            "--tw-prose-counters": "hsl(var(--muted))",
            "--tw-prose-bullets": "hsl(var(--muted))",
            "--tw-prose-hr": "hsl(var(--border))",
            "--tw-prose-quotes": "hsl(var(--foreground))",
            "--tw-prose-quote-borders": "hsl(var(--border))",
            "--tw-prose-captions": "hsl(var(--muted))",
            "--tw-prose-kbd": "hsl(var(--foreground))",
            "--tw-prose-code": "hsl(var(--foreground))",
            "--tw-prose-pre-code": "hsl(var(--muted-foreground))",
            "--tw-prose-pre-bg": "hsl(var(--background))",
            "--tw-prose-th-borders": "hsl(var(--muted))",
            "--tw-prose-td-borders": "hsl(var(--border))"
          }
        }
      }),
      // Add custom color variables for themes
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))"
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      }
    }
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")]
};

export default config;
