module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  parserOptions: {
    parser: "@babel/eslint-parser"
  },
  rules: {
    "no-unused-vars": ["error", { argsIgnorePattern: "^_|h" }]
  },
  settings: {
    "import/resolver": {
      alias: [["@", "./src"]]
    }
  }
}
