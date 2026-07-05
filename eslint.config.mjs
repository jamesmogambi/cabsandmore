import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";

export default defineConfig([
  js.configs.recommended,
  {
    ignores: [".next", "node_modules", ".env", "public", "**/*.{js,jsx}"],
  },
]);