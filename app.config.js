import 'dotenv/config'

export default {
  "expo": {
    "name": "VioletsWaE",
    "slug": "VioletsWaE",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./app/assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./app/assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
        firebaseApiKey: process.env.EXPO_PUBLIC_FIRBASE_API_KEY,
        firebaseAuthDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
        firebaseProjectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
        firebaseStorageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
        firebaseMessagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        firebaseAppId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
        firebaseMeasurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASURMENT_ID,
    }
  }
}
