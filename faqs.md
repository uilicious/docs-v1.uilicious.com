# Frequently asked questions

## Browser and Device support

### Any plans to support mobile native app testing?

Yes. Please contact [sales@uilicious.com](sales@uilicious.com) if you are interested in our early access program. 

### Any plans to support desktop app testing?

No.

### Are there plans to support IE7 - IE10?

No.

---

## Testing

### Does UI-licious support testing on localhost / internal applications?

The cloud edition of UI-licious requires a public url to access and test your application. 

If you need to test a localhost or internal application, you can consider the following options:

1. Use a service like [ngrok](https://ngrok.com) or [serveo](http://serveo.net/) which temporarily exposes your application with a public url.

2. Use the self-hosted Enterprise edition of UI-licious. Contact [sales@uilicious.com](sales@uilicious.com) to find out more.

### How do I test Recaptcha?

UI-licious cannot solve Recaptcha, as it is designed to detect humans and block bots.

We recommend disabling Recaptcha on your testing environment to allow automated tests to pass through. You can find Google's offical docs on disabling Recaptcha on testing environment [here](https://developers.google.com/recaptcha/docs/faq#id-like-to-run-automated-tests-with-recaptcha.-what-should-i-do).

If you want to test this on production, you can use `UI.cookie.set` in your test to set a cookie to identify test sessions and use javascript to conditionally bypass Recaptcha whenever the cookie is present.

### How do I clear a text input field?

You can use `I.fill(field, value)` with an empty string to clear a field, e.g. 

```javascript
I.fill("Email", "") // This will clear the "Email" field
```

### My datepicker doesn't have a text field, how do I input dates?

Datepickers differ a lot from one website to another, so unfortunately there isn't one straightforward solution to automate filling date pickers, but you can get help at the [UI-licious Community](https://community.uilicious.com/).

---

## Architecture

### Does UI-licious run on Selenium?

Yes and no. 

UI-licious runs on the WebDriver Protocol, which is based off the Selenium project. At such, UI-licious is able to run on any Selenium-based test infrastructure including third-party vendors like SauceLabs, Browserstack, CrossBrowserTesting, etc. We've decided to pick WebDriver Protocol over the Chrome DevTools Protocol which offers faster test execution so that we can support cross-browser testing. 

---

## Self-hosting

### Is there a self-hosted edition of UI-licious?

Yes, there is a self-hosted Enterprise edition of UI-licious. Please contact [sales@uilicious.com](sales@uilicious.com) to tell us about your requirements. 