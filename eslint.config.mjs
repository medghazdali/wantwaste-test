import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended"
  ),
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      // React specific rules
      "react/react-in-jsx-scope": "off", // Not needed in Next.js
      "react/prop-types": "off", // We're using TypeScript
      "react/display-name": "off",
      
      // Modern JavaScript rules
      "no-unused-vars": "warn",
      "no-console": ["warn", { allow: ["warn", "error"] }],
      
      // Code style rules
      "semi": ["error", "always"],
      "quotes": ["error", "single"],
      "indent": ["error", 2],
      "comma-dangle": ["error", "always-multiline"],
      
      // Best practices
      "no-var": "error",
      "prefer-const": "warn",
      "no-multiple-empty-lines": ["error", { "max": 1 }],
      "no-trailing-spaces": "error",
      
      // JSX specific rules
      "jsx-quotes": ["error", "prefer-double"],
      "react/jsx-curly-spacing": ["error", { "when": "never" }],
      "react/jsx-tag-spacing": ["error", {
        "closingSlash": "never",
        "beforeSelfClosing": "always",
        "afterOpening": "never",
        "beforeClosing": "never"
      }],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
