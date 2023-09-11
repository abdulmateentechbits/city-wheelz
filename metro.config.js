const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const blacklist = require('metro-config/src/defaults/exclusionList');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);

  return mergeConfig(defaultConfig, {
    resolver: {
      blacklistRE: blacklist([/#current-cloud-backend\/.*/]),
    },
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
    },
    // Add any additional configuration options here as needed
  });
})();
