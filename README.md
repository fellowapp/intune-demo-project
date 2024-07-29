## Created with Capacitor Create App

This app was created using [`@capacitor/create-app`](https://github.com/ionic-team/create-capacitor-app),
and comes with a very minimal shell for building an app.

### Configuring this example

First create an app from the App Registrations page in the Azure portal.
https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade
In this example we used com.example.intunedemo as our bundle id. You'll need to replace this with your own bundle id.

You'll also need to set the app ID to your app id in:
the capacitor.config.json file in the appId field.
`ios/App/App/App.entitlements` first keychain access group needs to be changed
`ios/App/App.xcodeproj` two occurrences of setting `PRODUCT_BUNDLE_IDENTIFIER` to your bundle id

Then you'll need to set the client ID in the BASE_CONFIG variable in `src/js/capacitor-welcome.js` to your client id.
As well as in `ios/App/App/Config/Config.xcconfig` in the `MICROSOFT_CLIENT_ID` key.

Also in the Authentication section of the Microsoft Admin centre, you'll need to create a redirect URI
with your new bundle ID as well as `msauth.<your-bundle-id>://auth` redirect URI.

### Running this example

To run this iOS example execute the following

```bash
npm install
npm run build
npx cap sync ios
npx cap open ios
```

And then run in xcode.


### Additional Documentation

For a more complete list of relevant documentation check out:
https://learn.microsoft.com/en-us/entra/msal/objc/install-and-configure-msal#configuring-your-project-to-use-msal
https://learn.microsoft.com/en-us/entra/msal/objc/single-sign-on-macos-ios#sso-through-authentication-broker-on-ios
https://learn.microsoft.com/en-us/entra/msal/objc/configure-authority
https://learn.microsoft.com/en-us/entra/msal/objc/redirect-uris-ios
https://learn.microsoft.com/en-us/entra/msal/objc/acquire-tokens

For Intune you'll need to follow these pages to get started:
https://learn.microsoft.com/en-us/mem/intune/developer/app-sdk-ios-phase2
Follow phase 2, 3, 4, and 6.

If you need to re-run the configurator.
`chmod u+x ./node_modules/@fellow/intune/ios/IntuneMAMConfigurator`
`./node_modules/@fellow/intune/ios/IntuneMAMConfigurator -i ios/App/App/Info.plist -e ios/App/App/App.entitlements`