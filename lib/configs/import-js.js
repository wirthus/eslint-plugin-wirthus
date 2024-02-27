const importRules = require('../rules/import');

module.exports = {
  extends: [
    'plugin:import/recommended',
  ],
  plugins: [
    'import',
  ],
  settings: {
    'import/resolver': {
      typescript: false,
      node: true
    }
  },
  rules: {
    ...importRules
  }
};
