module.exports = {
  expo: {
    name: "DFirst",
    slug: "DFirst",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "dfirsttrader",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    extra: {
      PAYSTACK_PUBLIC_KEY: process.env.PAYSTACK_PUBLIC_KEY || "pk_test_00f625b3df2252aec05bc21c3ce8d6ad90e42856",
      PAYSTACK_SECRET_KEY: process.env.PAYSTACK_SECRET_KEY || "sk_test_98fa49a5b4ebedae66a067602b38bfb0d6788e25",
      PAYSTACK_WEBHOOK_SECRET: process.env.PAYSTACK_WEBHOOK_SECRET || "whsec_your_webhook_secret_here",
      eas: {
        projectId: "your-project-id"
      }
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          "image": "./assets/images/splash.png",
          "imageWidth": 200,
          "resizeMode": "contain",
          "backgroundColor": "#ffffff"
        }
      ]
    ],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.anonymous.DFirst",
      buildNumber: "1",
      infoPlist: {
        CFBundleURLTypes: [
          {
            CFBundleURLSchemes: ["dfirsttrader"],
            CFBundleURLName: "com.anonymous.DFirst"
          }
        ],
        NSAppTransportSecurity: {
          NSAllowsArbitraryLoads: false,
          NSExceptionDomains: {
            "deriv.com": {
              NSExceptionAllowsInsecureHTTPLoads: false,
              NSIncludesSubdomains: true
            }
          }
        },
        NSCameraUsageDescription: "This app needs access to your camera to take photos for your profile.",
        NSPhotoLibraryUsageDescription: "This app needs access to your photo library to select images.",
        NSMicrophoneUsageDescription: "This app does not use the microphone."
      },
      associatedDomains: ["applinks:dfirsttrader.com"]
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff"
      },
      package: "com.anonymous.DFirst",
      googleServicesFile: "./google-services.json",
      intentFilters: [
        {
          action: "VIEW",
          autoVerify: true,
          data: [
            {
              scheme: "dfirsttrader",
              host: "payment",
              pathPrefix: "/verify"
            }
          ],
          category: ["BROWSABLE", "DEFAULT"]
        }
      ]
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png"
    },
    experiments: {
      typedRoutes: true
    }
  }
}; 