module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'no-use-before-define': [1, { variables: false }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 1,
    'react/require-default-props': 0,
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 1,
    'no-mixed-operators': 1,
    'import/no-unresolved': 0,
    'react/function-component-definition': 0,
  },
};
