module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: [
    "react-refresh",
    "import",
    "unused-imports",
    "@tanstack/query",
    "prettier",
  ],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/react-in-jsx-scope": "off",
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
    "react/prop-types": 0,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
