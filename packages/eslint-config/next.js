const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

module.exports = {
  extends: ["@uket/eslint-config/base.js", "next/core-web-vitals"],
  parserOptions: {
    project,
  },
  env: {
    node: true,
    browser: true,
  },
  ignorePatterns: ["node_modules/", "dist/"],
  // add rules configurations here
  rules: {
    "react/prop-types": 0,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ["node_modules/", "./next/*", ".*.js"],
  overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
};
