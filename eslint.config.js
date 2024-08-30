import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import { createConfigForNuxt } from "@nuxt/eslint-config/flat";

export default createConfigForNuxt([
  { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
  { languageOptions: { globals: globals.browser } },
  { parser: "vue-eslint-parser" },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.vue"],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
]);
