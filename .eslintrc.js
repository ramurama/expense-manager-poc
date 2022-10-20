module.exports = {
  root: true,
  extends: ['@react-native-community/eslint-config', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
    'react-native',
    'eslint-plugin-import',
    'simple-import-sort',
    'import',
    'unused-imports',
  ],
  env: {
    'react-native/react-native': true,
  },
  rules: {
    'prettier/prettier': 'off',
    'react-native/no-unused-styles': 'warn',
    'react-native/no-inline-styles': 'error',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    complexity: ['warn', 10],
    'prefer-const': ['error'],
    '@typescript-eslint/no-unused-vars': 'error',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'if',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'block-like',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'block',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],
    'no-else-return': 'warn',
    quotes: [2, 'single', { avoidEscape: true }],

    // Async functions need to await something and promises be awaited
    'require-await': 'error',
    semi: ['error', 'never'],

    // Auto-sort imports.
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          ['^\\u0000[^.]', '^@?\\w'],
          // Anything that does not start with a dot.
          ['^[^.]'],
          // Anything that starts with a dot.
          ['^\\u0000\\.', '^\\.'],
        ],
      },
    ],
  },
}
