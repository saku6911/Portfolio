module.exports = {
  plugins: ["stylelint-prettier"],
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-recess-order",
    "stylelint-prettier/recommended",
  ],
  rules: {
    "prettier/prettier": true,
    // @tailwindと@extendsを許可
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
        ],
      },
    ],
    "declaration-block-trailing-semicolon": null,
    "no-descending-specificity": null,
    // クラス名をcamelCaseに強制
    "selector-class-pattern": "^[a-z][a-zA-Z0-9]+$",
    "keyframes-name-pattern": "^[a-z][a-zA-Z0-9]+$",
    "scss/at-mixin-pattern": "^[a-z][a-zA-Z0-9]+$",
    "scss/dollar-variable-pattern": "^[a-z][a-zA-Z0-9]+$",
  },
};
