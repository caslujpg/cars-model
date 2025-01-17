const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);
  config.transformer.enableBabelRCLookup = true;

  return config;
})();
