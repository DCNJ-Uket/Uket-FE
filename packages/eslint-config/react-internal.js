const { resolve } = require("node:path");

/*
 * This is a custom ESLint configuration for use with
 * internal (bundled by their consumer) libraries
 * that utilize React.
 */

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "@uket/eslint-config/base.js",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  plugins: ["react-refresh", "react-hooks"],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    browser: true,
  },
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": 0,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: [".*.js", "node_modules/", "dist/"],
};
