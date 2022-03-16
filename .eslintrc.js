process.env.NODE_ENV = 'development';

const ERROR = 2;

const commonExtends = [
  'plugin:prettier/recommended',
  'eslint:recommended',
  'plugin:import/errors',
  'plugin:import/warnings',
  'plugin:sonarjs/recommended',
];

const commonPlugins = ['sonarjs'];

module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  extends: commonExtends,
  plugins: [...commonPlugins, 'babel'],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
  },
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  rules: {
    quotes: [
      ERROR,
      'single',
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    'import/no-unresolved': [2, { caseSensitive: false }],
  },
};
