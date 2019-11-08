# Integrating with Applitools Eyes

> Applitools Eyes Integration is still under beta, the following APIs are experimental and subject to change.

## What is Applitools?

[Applitools](https://applitools.com/) is a visual regression testing tool.

Why do you need this?

UI-licious only performs functional end-to-end testing for your web applications. While UI-licious can tell you if your Login form is working as expected or not, but it cannot tell if your Login form looks inconsistent across browsers or has any visual changes since last week. You would still need to check the screenshots in UI-licious with a human eye to detect visual issues, __or__ use Applitool Eyes to detect these issues automatically for you! Applitools works by creating snapshots and intelligently comparing snapshots with the baseline to detect differences.

## Setup

Integrating your UI-licious tests with Applitools is easy. 

First, 👉 [get your Applitools API key](https://applitools.com/docs/topics/overview/obtain-api-key.html)

Then, add this line to the start of your UI-licious test:

```javascript
// Setup Applitools at the start of your UI-licious test
TEST.applitools.setup("YOUR_APPLITOOLS_API_KEY")

//===========================
// My Test
//===========================
I.goTo("https://mystore.com")
I.fill("Search", "watches")
I.click("Search")
TEST.applitools.setup("YOUR_APPLITOOLS_API_KEY")
```

That's all!

Now, whenever you run the test in UI-licious, it will also be visually tested by Applitools, and you can see the results in Applitools. 

### App and Test Naming

By default, the app and test in Applitools will be named according to the name of the project and test respectively in UI-licious.

However, this means that if project or tests are renamed or moved in UI-licious, your Applitools tests will be saved under the new name, and lose continuity with past snapshots.

You can manually set how your tests will be named in Applitools by passing in the `testName` option to `TEST.applitools.setup`, e.g.:

```javascript
// Setup Applitools at the start of your UI-licious test
TEST.applitools.setup("YOUR_APPLITOOLS_API_KEY", {
	testName: "My Applitools Test 1"
})
```

## Snapshots

When you run the test, an Applitool snapshot will be automatically captured for every UI-licious command. 

Each snapshot will be automatically named according to the step number and the command name in UI-licious, e.g. `2-fill`, `3-click`, `4-see`.

### Manually capturing snapshots

Capturing an Applitool snapshot for every UI-licious command can get overwhelming, especially when there are many commands interacting with the same screen. 

You can disable automatic snapshots and capture snapshots manually instead. 

Set the `autoSnapshot` option to false during setup, e.g.:

```javascript
TEST.applitools.setup("YOUR_APPLITOOLS_API_KEY", {
	autoSnapshot: false
})
```

Note that this only disables the snapshots automatically taken for Applitools, but screenshots for every command will still be taken for UI-licious reports.

You can capture a snapshot manually with the `.check` API:
```javascript
// Take a snapshot of the current viewport
TEST.applitools.check("Custom snapshot name")
```

Example:
```javascript
I.goTo("https://mystore.com")
TEST.applitools.check("Home") // 👈 Add a checkpoint here
I.fill("Search", "watches")
I.click("Search")
TEST.applitools.check("Search 'watches' result") // 👈 Add a checkpoint here
```

To know more about using Applitools eyes, 👉 [read the official documentation](https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html).




