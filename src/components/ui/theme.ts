// src/theme.ts
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#eff6ff" },
          100: { value: "#dbeafe" },
          200: { value: "#bfdbfe" },
          300: { value: "#93c5fd" },
          400: { value: "#60a5fa" },
          500: { value: "#3b82f6" },
          600: { value: "#2563eb" },
          700: { value: "#1d4ed8" },
          800: { value: "#1e40af" },
          900: { value: "#1e3a8a" },
        },
        accent: {
          50: { value: "#fdf4ff" },
          100: { value: "#fae8ff" },
          200: { value: "#f5d0fe" },
          300: { value: "#f0abfc" },
          400: { value: "#e879f9" },
          500: { value: "#d946ef" },
          600: { value: "#c026d3" },
          700: { value: "#a21caf" },
          800: { value: "#86198f" },
          900: { value: "#701a75" },
        },
      },
      fonts: {
        heading: { value: `'Poppins', sans-serif` },
        body: { value: `'Inter', sans-serif` },
        mono: { value: `'Fira Code', monospace` },
      },
      spacing: {
        "128": { value: "32rem" },
        "144": { value: "36rem" },
      },
      sizes: {
        container: {
          sm: { value: "640px" },
          md: { value: "768px" },
          lg: { value: "1024px" },
          xl: { value: "1280px" },
        },
      },
    },
    semanticTokens: {
      colors: {
        // Backgrounds
        "bg.canvas": {
          value: { base: "{colors.white}", _dark: "{colors.gray.950}" },
        },
        "bg.surface": {
          value: { base: "{colors.gray.50}", _dark: "{colors.gray.900}" },
        },
        "bg.panel": {
          value: { base: "{colors.white}", _dark: "{colors.gray.800}" },
        },
        "bg.muted": {
          value: { base: "{colors.gray.100}", _dark: "{colors.gray.800}" },
        },
        "bg.emphasized": {
          value: { base: "{colors.gray.200}", _dark: "{colors.gray.700}" },
        },

        // Text colors
        "fg.default": {
          value: { base: "{colors.gray.900}", _dark: "{colors.gray.100}" },
        },
        "fg.muted": {
          value: { base: "{colors.gray.600}", _dark: "{colors.gray.400}" },
        },
        "fg.subtle": {
          value: { base: "{colors.gray.500}", _dark: "{colors.gray.500}" },
        },
        "fg.emphasized": {
          value: { base: "{colors.black}", _dark: "{colors.white}" },
        },

        // Borders
        "border.default": {
          value: { base: "{colors.gray.200}", _dark: "{colors.gray.700}" },
        },
        "border.muted": {
          value: { base: "{colors.gray.100}", _dark: "{colors.gray.800}" },
        },
        "border.emphasized": {
          value: { base: "{colors.gray.300}", _dark: "{colors.gray.600}" },
        },

        // Brand colors
        "accent.default": {
          value: { base: "{colors.brand.500}", _dark: "{colors.brand.400}" },
        },
        "accent.emphasized": {
          value: { base: "{colors.brand.600}", _dark: "{colors.brand.300}" },
        },
        "accent.muted": {
          value: { base: "{colors.brand.100}", _dark: "{colors.brand.900}" },
        },
      },
    },
  },
  globalCss: {
    html: {
      height: "100%",
    },
    body: {
      bg: "bg.canvas",
      color: "fg.default",
      height: "100%",
      fontFamily: "body",
    },
    "*::placeholder": {
      color: "fg.muted",
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
