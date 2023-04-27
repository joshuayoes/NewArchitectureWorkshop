// This is the entry point if you run `yarn expo:start`
// If you run `yarn ios` or `yarn android`, it'll use ./index.js instead.
import App from "./app/app.tsx"
import React from "react"
import { registerRootComponent } from "expo"
import { Platform } from "react-native"
import RNBootSplash from "react-native-bootsplash"

function IgniteApp() {
  return (
    <App
      hideSplashScreen={async () => {
        await RNBootSplash.hide({ fade: true, duration: 500 })
      }}
    />
  )
}

if (Platform.OS !== "web") {
  registerRootComponent(IgniteApp)
}

export default IgniteApp
