const { resolve } = require("node:path");
const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "prettier",
    "eslint-config-turbo",
  ],
  ignorePatterns: ["dist/", ".eslintrc.cjs", ".*.js", "node_modules/"],
  parser: "@typescript-eslint/parser",
  plugins: [
    "import",
    "@typescript-eslint",
    "unused-imports",
    "@tanstack/query",
    "prettier",
  ],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "unused-imports/no-unused-imports": "error",
    "import/order": [
      "error",
      {
        groups: [
          "type",
          "builtin",
          "external",
          "internal",
          ["parent", "sibling", "index"],
          "unknown",
        ],
        pathGroups: [
          {
            pattern: "**/components/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "**/hooks/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "**/constants/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "**/types/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "**/utils/**",
            group: "internal",
            position: "after",
          },
        ],
        alphabetize: {
          order: "desc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
      },
    ],
    "no-console": [
      "error",
      {
        allow: ["error", "warn"],
      },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["*.js?(x)", "*.ts?(x)"],
      rules: {
        "@typescript=eslint/no-var-requires": "off",
      },
    },
  ],
};
