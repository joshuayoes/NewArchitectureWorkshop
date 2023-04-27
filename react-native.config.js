// @ts-check
/** @type {import('@react-native-community/cli-types').Config} */
module.exports = {
  platforms: {
    android: {
      projectConfig(_projectRoot, projectParams) {
        return {
          ...projectParams,
          unstable_reactLegacyComponentNames: ["DrawerLayout"],
        }
      },
    },
  },
}
