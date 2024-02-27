const commonRules = require('../rules/common');

module.exports = {
  extends: [
    'eslint:recommended',
  ],
  plugins: [
    'jsdoc',
    'no-null',
  ],
  env: {
    browser: false,
    node: true,
    es6: true,
    commonjs: true
  },
  ignorePatterns: [
    'node_modules',
    '!.*',
    'build',
    'dist',
    'libs',
    'temp',
    'coverage',
    'e2e/docker'
  ],
  rules: {
    ...commonRules
  }
};
