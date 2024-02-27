/** eslint */
module.exports = {
  'comma-dangle': [
    'error',
    'only-multiline'
  ],
  'comma-spacing': 'error',
  'comma-style': [
    'error',
    'last'
  ],
  'curly': ['error', 'multi-line'],
  'dot-notation': 'off',
  'eqeqeq': 'error',
  'max-len': ['warn', {
    code: 200,
    ignoreComments: true
  }],
  'newline-before-return': 'error',
  'no-multi-spaces': 'error',
  'no-multiple-empty-lines': ['error', {
    'max': 1,
    'maxEOF': 0,
    'maxBOF': 0,
  }],
  'no-trailing-spaces': 'error',
  'no-unused-vars': 'off',
  'quotes': [
    'error',
    'single'
  ],
  'semi': 'error',
  'sort-imports': ['error', {
    'ignoreCase': false,
    'ignoreDeclarationSort': true,
    'ignoreMemberSort': false,
    'memberSyntaxSortOrder': [
      'none',
      'all',
      'multiple',
      'single'
    ]
  }],
  'eol-last': ['error', 'always'],

  // 'padding-line-between-statements': [
  //   'error',
  //   { blankLine: 'always', prev: 'function', next: 'function' }
  // ],
  // 'lines-between-class-members': ['error', 'always']
};
