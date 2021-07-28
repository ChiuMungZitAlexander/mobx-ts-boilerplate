module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'alloy',
    'alloy/react',
    'alloy/typescript',
    '@tencent/eslint-config-tencent',
    '@tencent/eslint-config-tencent/ts',
    'prettier',
  ],
  env: {
    // 这里填入你的项目用到的环境
    // 它们预定义了不同环境的全局变量，比如：
    //
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
  globals: {
    // 这里填入你的项目需要的全局变量
    // false 表示这个全局变量不允许被重新赋值，比如：
    //
    // myGlobal: false
  },
  rules: {
    '@typescript-eslint/naming-convention': 'off',
    'no-return-await': 'off',
    'no-duplicate-imports': 'off',
    'no-else-return': 'off',
    'prefer-destructuring': 'off',
    'react/no-unstable-nested-components': 'off',
  },
};
