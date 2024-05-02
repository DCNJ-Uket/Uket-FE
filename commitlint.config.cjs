// module.exports = {
//     extends: ["@commitlint/config-conventional"],
//     rules: {
//       "header-max-length": [2, "always", 100],
//       "subject-case": [0],
//       "subject-empty": [2, "never"],
//       "subject-full-stop": [2, "never", "."],
//       "type-case": [2, "always", "lower-case"],
//       "type-empty": [2, "never"],
//       "type-enum": [
//         2,
//         "always",
//         [
//           "feat",
//           "fix",
//           "docs",
//           "style",
//           "refactor",
//           "chore",
//           "perf",
//           "test",
//           "ci",
//           "build",
//         ],
//       ],
//     },
//   };

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [2, "always", 100],
    "subject-case": [0],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      ["feat", "style", "fix", "refactor", "merge", "chore", "test", "docs"],
    ],
  },
};
