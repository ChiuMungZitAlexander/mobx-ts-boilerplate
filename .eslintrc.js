module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  env: {
    browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  globals: {},
};
