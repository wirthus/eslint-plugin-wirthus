const typescriptRules = require('../rules/typescript');

module.exports = {
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // 'plugin:@typescript-eslint/strict'
  ],
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    ...typescriptRules
  },
  overrides: [
    {
      files: ['*.js'],
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
      rules: {
        // turn off other type-aware rules
        'deprecation/deprecation': 'off',
        '@typescript-eslint/internal/no-poorly-typed-ts-props': 'off',

        // turn off rules that don't apply to JS code
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ]
  // overrides: [
  //   {
  //     files: ['*.ts', '*.mts', '*.cts', '*.tsx'],
  //     rules: {
  //       '@typescript-eslint/explicit-member-accessibility': [
  //         'error',
  //         {
  //           accessibility: 'explicit',
  //           overrides: {
  //             accessors: 'explicit',
  //             constructors: 'no-public',
  //             methods: 'explicit',
  //             properties: 'explicit',
  //             parameterProperties: 'explicit'
  //           }
  //         }
  //       ]
  //     }
  //   }
  // ]
};
