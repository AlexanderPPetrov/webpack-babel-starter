module.exports = {
  root: true,
  env: {
    'browser': true,
    'amd': true,
    'node': true,
  },
  parserOptions: {
    'ecmaVersion': 2020,
    'sourceType': 'module',
    'allowImportExportEverywhere': true,
  },
  extends: [
    'eslint:recommended',
  ],
  rules: {
    'no-undef': 0,
    'no-unused-vars': 0,
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'never',
    }],
    'indent': ['error', 2],
  },
}