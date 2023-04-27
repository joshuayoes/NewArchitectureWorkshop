const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config")
const MetroSymlinksResolver = require("@rnx-kit/metro-resolver-symlinks")

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname)
/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  projectRoot: __dirname,
  // watchFolders: [`${__dirname}/../..`], // for monorepos
  resolver: {
    /**
     * This custom resolver is for if you're using symlinks.
     *
     * You can disable it if you're not using pnpm or a monorepo or symlinks.
     */
    resolveRequest: MetroSymlinksResolver(),
    assetExts: [...defaultConfig.resolver.assetExts, "bin"],
  },
}
module.exports = mergeConfig(defaultConfig, config)
