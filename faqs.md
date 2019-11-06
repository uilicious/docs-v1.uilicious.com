# Frequently asked questions

## How do I test Recaptcha?

UI-licious cannot solve Recaptcha, as it is designed to detect humans and block bots.

We recommend disabling Recaptcha on your testing environment to allow automated tests to pass through. 

If you want to test this on production, you can use `UI.cookie.set` in your test to set a cookie to identify test sessions and use javascript to conditionally disable Recaptcha whenever the cookie is present.

