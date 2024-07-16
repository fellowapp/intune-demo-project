## Created with Capacitor Create App

This app was created using [`@capacitor/create-app`](https://github.com/ionic-team/create-capacitor-app),
and comes with a very minimal shell for building an app.

### Running this example

To run the provided example, you can use `npm start` command.

```bash
npm start
```

A lot of configuration is required to run this in any meaningful sense. 

First create an app from the App Registrations page in the Azure portal.
https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade
In this example we used com.example.intunedemo as our bundle id. You'll need to replace this with your own bundle id.


For MSAL you'll need to adjust the demo to use your own client id, bundle id, redirect URL, and more. Follow these pages to get started:
https://learn.microsoft.com/en-us/entra/msal/objc/install-and-configure-msal#configuring-your-project-to-use-msal
https://learn.microsoft.com/en-us/entra/msal/objc/configure-authority
https://learn.microsoft.com/en-us/entra/msal/objc/redirect-uris-ios
https://learn.microsoft.com/en-us/entra/msal/objc/acquire-tokens

For Intune you'll need to follow these pages to get started:
https://learn.microsoft.com/en-us/mem/intune/developer/app-sdk-ios-phase2
Follow phase 2, 3, 4, and 6.