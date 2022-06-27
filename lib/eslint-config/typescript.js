'use strict';

const OFF = 0;
const ERROR = 2;

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  extends: ['prettier', 'plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    indent: OFF,
    '@typescript-eslint/indent': OFF,
    '@typescript-eslint/member-delimiter-style': OFF,
    '@typescript-eslint/no-unused-vars': [ERROR, { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-function-return-type': OFF,
    '@typescript-eslint/explicit-member-accessibility': OFF,
  },
};
