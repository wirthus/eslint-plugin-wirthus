/** eslint-plugin-import */
module.exports = {
  'import/default': 'error',
  'import/export': 'error',
  'import/named': 'off',
  'import/namespace': 'error',
  'import/order': ['error', {
    'alphabetize': {
      'caseInsensitive': true,
      'order': 'asc'
    },
    'newlines-between': 'always'
  }],
};
