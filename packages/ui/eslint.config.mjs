/** @type {import("eslint").Linter.Config} */
export default [
  {
    root: true,
    extends: ["@uket/eslint-config/react-internal.js"],
    parser: "@typescript-eslint/parser",
  },
];
