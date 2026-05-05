import { defineConfig } from "oxlint";

const config = defineConfig({
  options: {
    typeAware: true,
    typeCheck: true,
  },
  env: {
    node: true,
    es2022: true,
  },
  globals: {
    Bun: "readonly",
    fetch: "readonly",
    Request: "readonly",
    Response: "readonly",
  },
  rules: {
    // TypeScript
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/consistent-type-imports": "error",

    // Correctness
    "no-undef": "error",
    "no-unreachable": "error",
    "no-duplicate-case": "error",
    "no-console": "warn",

    // Async
    "require-await": "warn",
    "no-await-in-loop": "warn",
    "no-async-promise-executor": "error",
    "no-promise-executor-return": "error",

    // Best practices
    eqeqeq: "error",
    "no-var": "error",
    "prefer-const": "error",
    "no-throw-literal": "error",
  },
});

export default config;
