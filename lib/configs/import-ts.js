const importRules = require('../rules/import');

module.exports = {
  extends: [
    'plugin:import/recommended',
    'plugin:import/typescript'
  ],
  plugins: [
    'import',
  ],
  settings: {
    'import/resolver': {
      typescript: true,
      node: true
    }
  },
  rules: {
    ...importRules
  }
};
