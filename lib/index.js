const importRules = require('./rules/import');
const reactRules = require('./rules/react');

function resolveConfigs(configs) {
  return configs.map(require.resolve);
}

const nodeJsConfig = {
  extends: resolveConfigs([
    './configs/common.js',
    './configs/import-js.js',
  ])
};

const nodeTsConfig = {
  extends: resolveConfigs([
    './configs/common.js',
    './configs/import-ts.js',
    './configs/typescript.js',
  ])
};

const nextConfig = {
  extends: resolveConfigs([
    './configs/common.js',
    './configs/typescript.js'
  ]),
  env: {
    browser: true
  },
  ignorePatterns: [
    '.next'
  ],
  rules: {
    importRules
  }
};

const reactConfig = {
  extends: resolveConfigs([
    './configs/common.js',
    './configs/import-ts.js',
    './configs/typescript.js',
    './configs/react.js',
  ])
};

const reactNative = {
  extends: [
    ...resolveConfigs([
      './configs/react-native.js',
      './configs/common.js',
      './configs/import-ts.js',
      './configs/typescript.js',
    ]),
    'plugin:react/jsx-runtime'
  ],
  plugins: [
    'react'
  ],
  rules: {
    ...reactRules
  }
};

module.exports = {
  configs: {
    recommended: nodeTsConfig,
    'node-js': nodeJsConfig,
    'node-ts': nodeTsConfig,
    next: nextConfig,
    react: reactConfig,
    'react-native': reactNative
  }
};
