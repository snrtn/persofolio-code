// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'functional'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // General
    'no-console': 'error',
    'no-extra-parens': 'off',
    'no-unused-vars': 'off',

    // TypeScript
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-extra-parens': 'off',
    '@typescript-eslint/no-extra-semi': 'error',
    '@typescript-eslint/no-unused-vars': 'error',

    // React
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',

    // Functional
    'functional/prefer-readonly-type': [
      'warn',
      {
        allowLocalMutation: true,
        allowMutableReturnType: true,
        ignoreClass: true,
      },
    ],
  },
};
