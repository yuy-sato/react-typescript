'use strict';

const OFF = 0;
const ERROR = 2;

module.exports = {
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  extends: ['plugin:react/recommended', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/display-name': OFF,
    'react/forbid-prop-types': ERROR,
    'react/jsx-boolean-value': ERROR,
    'react/jsx-closing-bracket-location': ERROR,
    'react/jsx-closing-tag-location': ERROR,
    'react/jsx-curly-spacing': OFF,
    'react/jsx-filename-extension': [ERROR, { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-no-bind': [ERROR, { allowArrowFunctions: true }],
    'react/jsx-no-undef': ERROR,
    'react/jsx-pascal-case': ERROR,
    'react/jsx-sort-prop-types': OFF,
    'react/jsx-tag-spacing': ERROR,
    'react/jsx-uses-react': ERROR,
    'react/jsx-wrap-multilines': ERROR,
    'react/no-array-index-key': ERROR,
    'react/no-string-refs': ERROR,
    'react/no-is-mounted': ERROR,
    'react/prefer-es6-class': ERROR,
    'react/prefer-stateless-function': ERROR,
    'react/prop-types': OFF,
    'react/react-in-jsx-scope': ERROR,
    'react/require-render-return': ERROR,
    'react/self-closing-comp': ERROR,
    'react/sort-comp': ERROR,
    'react-hooks/rules-of-hooks': ERROR,

    'jsx-a11y/alt-text': ERROR,
    'jsx-a11y/img-redundant-alt': ERROR,
    'jsx-a11y/aria-role': ERROR,
    'jsx-a11y/no-access-key': ERROR,
  },
};
