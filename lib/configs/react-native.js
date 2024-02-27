const config = require('@react-native/eslint-config');

const { extends: extendList, plugins, overrides, ...otherParams } = config;

const filteredExtendList = extendList.filter(t => !t.includes('prettier'));

const filteredOverrides = overrides.filter(t => !t.plugins || !t.plugins.some(plugin => plugin.includes('ft-flow')));

module.exports = {
  extends: filteredExtendList,
  plugins: plugins,
  overrides: filteredOverrides,
  ...otherParams
};
