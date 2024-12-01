module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "next",
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "next/core-web-vitals",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true
    }
  },
  ignorePatterns: [".*.js", "node_modules/", "next.config.js"],
  rules: {
    // --- 임시 ---
    "@typescript-eslint/lines-between-class-members": "off",
    "@typescript-eslint/no-throw-literal": "off",
    // -----------
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "off",
    "react/require-default-props": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        varsIgnorePattern: "^_",
        argsIgnorePattern: "^_"
      }
    ]
  }
};
