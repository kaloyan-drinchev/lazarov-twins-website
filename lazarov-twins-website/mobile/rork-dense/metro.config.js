const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Ensure web support
config.resolver.platforms = ['ios', 'android', 'web'];

module.exports = config;