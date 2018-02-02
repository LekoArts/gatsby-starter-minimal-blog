module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
  },
  settings: {
    ecmascript: 6,
    jsx: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      experimentalDecorators: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react'],
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': 0,
    'function-paren-newline': 0,
  },
  rules: {
    'linebreak-style': 0,
    'react/jsx-filename-extension': 0,
    'import/no-extraneous-dependencies': 0,
    'react/prop-types': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react/no-danger': 0,
  },
};
