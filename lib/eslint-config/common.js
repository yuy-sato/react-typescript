'use strict';

const OFF = 0;
const ERROR = 2;

module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: ['eslint:recommended', 'plugin:jest/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
  },
  plugins: ['no-for-of-loops', 'jest'],
  rules: {
    'accessor-pairs': OFF,
    'brace-style': [ERROR, '1tbs'],
    'consistent-return': OFF,
    'dot-location': [ERROR, 'property'],
    'dot-notation': ERROR,
    'eol-last': ERROR,
    eqeqeq: [ERROR, 'always', { null: 'ignore' }],
    indent: [ERROR, 2, { SwitchCase: 1 }],
    'jsx-quotes': [ERROR, 'prefer-double'],
    'keyword-spacing': [ERROR, { after: true, before: true }],
    'max-len': OFF,
    'no-inner-declarations': [ERROR, 'functions'],
    'no-multi-spaces': ERROR,
    'no-restricted-syntax': [ERROR, 'WithStatement', "BinaryExpression[operator='in']"],
    'no-shadow': ERROR,
    'no-unused-expressions': [ERROR, { allowTernary: true }],
    'no-unused-vars': ERROR,
    'no-use-before-define': ERROR,
    quotes: [ERROR, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'sort-imports': ERROR,
    'space-before-blocks': ERROR,
    'space-before-function-paren': OFF,
    'valid-typeof': [ERROR, { requireStringLiterals: true }],
    'no-var': ERROR,

    'no-for-of-loops/no-for-of-loops': ERROR,
  },
};
