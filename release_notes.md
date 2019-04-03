# Release Notes

> To see what's coming up, check out our [roadmap](https://trello.com/b/G80eoZU3/ui-licious-development-roadmap).

> For feedback and suggestions, drop us a line at [support@uilicious.com](mailto:support@uilicious.com).

**How the version numbers mean:**

&lt;Major&gt;.&lt;Minor&gt;.&lt;Patch&gt;

* Major: Contains breaking changes
* Minor: Contains new features
* Patch: Contains enhancements and bug fixes only

### 2.15.3
*Released on 1 Apr 2019*

##### 💪 Enhancement:
* Added `TEST.browser`, `TEST.width` and `TEST.height` to expose the settings for the current test run
* Added `I.pressDelete` and `I.pressBackspace` commands for convenience.
* Added `I.clear` to clear input fields (basically the same as `I.fill` using an empty string)

##### 🐞 Fixes
* Fixed issue with scrolling elements into center when elements are within scrollable elements within the page body. Elements within scrollable elements were often scrolled to the top of the screen which caused problems, especially for dropdown elements.
* Fixed issue with `I.fill` command being able to properly clear certain input fields, and instead append the value instead.

### 2.15.2
*Released on 26 Mar 2019*

##### 🐞 Fixes
* Fixed issues with tab handling when alert popups are opened

### 2.15.1
*Released on 25 Mar 2019*

##### 💪 Enhancement:
* Added new SAMPLE commands
  * `SAMPLE.name` - Generate random full name
  * `SAMPLE.last` - Generate random last name
  * `SAMPLE.first` - Generate random first name
  * `SAMPLE.email` - Generate random email address
  * `SAMPLE.phone` - Generate random phone number
* Now you can close tabs with `I.closeTab` command! 😀

### 2.15.0
*Released on 6 Mar 2019*

##### 🚀 New Features:
* Added editing and linting support in the web studio for .json, .csv, .md files.
* Added new commands for loading test data from .json and .csv files within the project:
  * `TEST.loadDataFromJson`, `TEST.loadDataFromCsv`, `TEST.loadDataFromFile`

##### 💪 Enhancement:
* Retrieval of test run results are now faster and more accurate!

##### 🐞 Fixes
* Fix error handling when user attempt to create a file when it already exists.

### 2.14.2
*Released on 5 Mar 2019*

##### 💪 Enhancement:
* Sort dataset and dataset variables alphabetically. :)

### 2.14.1
*Released on 4 Mar 2019*

##### 💪 Enhancement:
* Improvements to web reports - added controls to allow you to jump directly to errors.

##### 🐞 Fixes
* Fix webhook report - When test fails, the report was showing last 3 steps from the end of the test instead of the last 3 steps from the first error occurrence, which isn't very helpful.

### 2.14.0
*Released on 1 Mar 2019*

##### 🚀 New Features:
* You can now share test run results publicly with an unlisted url and as an embedded iframe.

### 2.13.1
*Released on 29 Jan 2019*

##### 🐞 Fixes
* Fix `UI.context` - `UI-context` was failing when single quotes are used in the selector

### 2.13.0
*Released on 11 Jan 2019*

##### 🚀 New Features:
* You can **download test results as MP4 Video**

### 2.12.1
*Released on 8 Jan 2019*

##### 🐞 Fixes
* Fix `I.seeCount` - the assertion was still passing even if the count is incorrect

### 2.12.0
*Released on 7 Jan 2019*

##### 🚀 New Features:
* Drag and drop commands are now available:
  * `I.dragTo` - Allows you to drag an element to another target element.
  * `I.dragBy` - Allows you to drag an element in a direction using (x,y) pixel offset.
  * `I.dragUp`, `I.dragDown`, `I.dragLeft`, `I.dragRight` - Shortcuts for `I.dragBy`

### 2.11.5
*Released on 12 Dec 2018*

##### 💪 Enhancement:
* Improved performance on the test run history page for individual jobs.

### 2.11.4
*Released on 5 Dec 2018*

##### 💪 Enhancement:
* Added test run durations to reports sent via webhooks.

### 2.11.3
*Released on 30 Nov 2018*

##### 💪 Enhancement:
* `UI.context` can now be used to explicitly switch the context to an iframe. This is useful in cases where security policies on the web application or on specific browsers prevents UI-licious from normally being able to see the contents of iframes and test it.

### 2.11.2
*Released on 25 Nov 2018*

##### 💪 Enhancement:
* `UI.execute` now prints out a snippet of the script to execute to make the test reports and flow easier to understand. And you may also override the log message for `UI.execute`.

### 2.11.1
*Released on 20 Nov 2018*

##### 💪 Enhancement:
* You may now override xpaths and css selectors with more human-friendly labels in reports for every command, please refer to the documentation for each command.

### 2.11.0
*Released on 7 Nov 2018*

##### 🚀 New Features:
* **Datasets**: You can now configure variables for running tests on different environments.
* New commands:
  * `I.getValue` - Allows you to grab the value of an input field and set it to a variable
  * New scroll commands for conveninence - `I.scrollUp`, `I.scrollDown`, `I.scrollLeft`, `I.scrollRight`.
  * **Error supression** - For all `I` and `UI` commands, you can suppress the error with the `$` variant of the command - e.g. `I.see$("Flying pigs")`. This may be useful when you want so suppress the errors for commands used as conditional expressions in `if/else` blocks.
  * Error and **log suppression** - For all `I` and `UI` commands, you can suppress the error and logs with the `$$` variant of the command - e.g. `UI.execute$$(...)`.

##### 💪 Enhancement:
* Better error logging about errors in the test script itself.

### 2.10.0
*Released on 25 Oct 2018*

We'll be taking it slow for the next couple of months for some major refactoring under the hood so that we can write code more efficiently, improve the performance of UI-licious, and support development of features planned in our roadmap.

##### 🚀 New Features:
* **Stop button**. Yes, you have been asking for it. Now there's a way to stop tests.
* You can now see which tests that are currently being ran, how are they triggered, and how many of your concurrent test sessions are being used.

##### 💪 Enhancement:
* Studio - Monitoring View
  * Added sorting controls to the Jobs overview.

### 2.9.0
*Released on 20 Sept 2018*

##### 🚀 New Features:

* Test Engine:
  * You can take full page screenshots with these new configuration and commands:
    * Add `TEST.fullScreenshot` configuration option to set screenshots to be taken as full page screenshots. Set `TEST.fullScreenshot = true` to enable full page screenshots for all subsequent commands. Note that this slows down testing time significantly, you should use it only when necessary.
    * Add `TEST.takeFullScreenshot()` command to take a full page screenshot
* Studio:
  * You can now download test run reports as JSON and CSV.
* (For Enterprise On-Premise):
  * Added views to monitor running tests, all tests, and all scheduled jobs system-wide.

##### 💪 Enhancement:
* Studio - Editor View:
  * You can now share reports of tests ran from the Editor view by grabbing the URL of report.
  * Where `I.fill` is performed on the screen is now highlighted
* Studio - Monitoring View:
  * You can now set the `User Agent` in jobs. This setting currently only works for tests running on Chrome.
  * Added pagination for list of tests ran for a scheduled job to view reports for test ran further back.

##### 🐞 Fixes
* Studio - Editor View:
  * Editor wasn't loading new tests immediately after creation.

### 2.8.0
*Released on 6 Sept 2018

##### Highlights:
* Studio - Editor View:
  * Where `I.click` are performed on the screen is now highlighted. However, screenshots for `I.click` now shows the screen before the click is performed, instead of the screen after the click is performed. If you need to view the screen after the click is performed, simply add another command after `I.click` such as `I.see` to capture the screen after.

##### 🚀 New Features:
* Studio - Editor View:
  * "Autosave" switch to enable / disable autosaving of your test scripts.

##### 💪 Enhancement:
* Studio - Editor View:
  * Added a warning if you try to leave the Editor with unsaved changes to prevent accidental loss of work.
  * For each step in the test report, we've added a "View Test" link so that you can jump to the script for that step.
  *

### 2.7.0
*Released on 29 Aug 2018*

##### 🚀 New Features:
* Test Engine:
  * Added supported for `User-Agent` settings for tests ran on Chrome. You can now set `User-Agent` from the advanced run configuration in "Run" pane in the Studio Editor.
  * New commands for custom logging to support custom functions `TEST.log.info`, `TEST.log.pass`, `TEST.log.fail`.

##### 💪 Enhancement:
* Studio:
  * We've changed our chat and ticketing system from Zendesk to Intercom for a better experience in supporting you. :)

### 2.6.8
*Released on 14 Aug 2018*

##### 🐞 Fixes
* (Chrome, Safari, Edge, IE) Fix `I.doubleClick`
* (Firefox) Fixed bug with `I.click` not working for some elements
* (IE) Fix bug with handling XPATH selector

### 2.6.7
*Released on 10 Aug 2018*

##### 🐞 Fixes
* (Firefox) Fixed bug with `I.click` not working on elements within iframes

### 2.6.6
*Released on 31 Jul 2018*

##### 🐞 Fixes
* (Firefox) Fixed bug with `I.click` not working

### 2.6.5
*Released on 30 Jul 2018*

##### 💪 Enhancements:
* `UI.context` can now handle and target within multiple `context` matches
* Added `I.see.signpost` for more explicit hints to the test engine to resolve similar matches using a related element

### 2.6.4
*Released on 20 Jul 2018*

##### 🐞 Fixes
* (Firefox) Fixed bug typing space characters

### 2.6.3
*Released on 19 Jul 2018*

##### 💪 Enhancements:
* You can now use relative paths for `TEST.run`

### 2.6.2
*Released on 16 Jul 2018*

##### 🐞 Fixes
* Fixed bug typing special characters

### 2.6.2
*Released on 13 Jul 2018*

##### 💪 Enhancements:
* Added workaround to perform keyboard actions on input fields that override values on `input` event causing characters to be erased

### 2.6.1
*Released on 12 Jul 2018*

##### 💪 Enhancements:
* Added `I.clickXY` command to click on an element using (x,y) coordinates

### 2.6.0
*Released on 2 Jul 2018*

##### 🚀 New Features:
* (Beta) You can now select from which region you want to run your test for certain plans  (for Pro users only)
    * Available Regions : Singapore, Frankfurt, California, Taiwan, Japan
    * Support browsers : Chrome, Firefox
* (Beta) You can now run test on Safari (for Pro users only)

##### 🐞 Fixes
* Error test run notification report was missing ❗ from email subject

### 2.5.4
*Released on 1 Jul 2018*

##### 💪 Enhancements:
* Improve `I.select` so that it can handle hidden checkboxes that is styled using an associated label that is visible

### 2.5.3
*Released on 28 Jun 2018*

##### 🐞 Fixes
* (Firefox) Fixed bug in getting element from browser

### 2.5.2
*Released on 13 Jun 2018*

##### 🐞 Fixes
* Fixed error that happens when cancelling rename file action from title bar in the Editor
* Block very edge case race condition where a file will override another

### 2.5.1
*Released on 8 Jun 2018*

##### 💪 Enhancements:
* `I.amAt` - Now supports partial matching of paths and handles RegExp.

### 2.5.0
*Released on 4 Jun 2018*

##### 🚀 New Features:
* Added `I.doubleClick` command

##### 🐞 Fixes
* Fixed `I.amAt` - clean up extra `/` characters before asserting path to prevent incorrect failed assertions
* Fixed `I.filled` - fails to catch errors
* Screenshot does not automatically center target elements for selection commands.

### 2.4.0
*Released on 1 Jun 2018*

##### 🚀 New Features:
* Add `I.count` and `I.getCount` to count elements and assert count of text and elements.
    ```
    Example:
    I.goTo("https://store.com/alcohol");
    I.count("beer", 99); // searchs for 99 occurances of "beer"
    var n = I.getCount("beer"); // gets the number of occurances of "beer" on the page as a variable
    ```

##### 💪 Enhancements:

* Better reports for the Editor Tab
  * Improved design - nicer preview window, better layout for mobile resolution tests
  * There's now URL and page title information for each step
  * You can now download test run screenshots as an animated GIF for up to 100 steps.
* Scheduled jobs:
    * You can now set multiple email address for the job notification emails.
    * Added last 3 steps until first error in error reports sent to Webhooks.
* Test engine:
    * `aria-labelledby` is now evaluated when searching for elements
    * Search expression will now match all variants of single-quotes and double-quotes.

##### 🐞 Fixes
* `I.deselect` and `I.deselected` wasn't working

### 2.3.1
*Released on 18 May 2018*

##### 💪 Enhancements:
* (On-premise only) You can download debugging logs for test runs.

##### 🐞 Fixes
* Some XPATH expressions didn't work
* SSL certificate checks on Firefox was not skipped
* When jobs fail due to network errors, automatically retry the job.

### 2.3.0
*Released on 8 May 2018*

##### 🚀 New Features:
* You can limit search scope by using `UI.context` or providing a `context` option in test commands.

### 2.2.0
*Released on 22 Apr 2018*

##### 🚀 New Features:
*  New commands to assert, accept, cancel, and fill **alert/confirm/prompt** dialogs.

##### 🐞 Fixes
* Unable to set timezone for job schedule sometimes.

### 2.1.13
*Released on 13 Apr 2018*

##### 🚀 New Features:
*  New command `UI.execute` to execute javascript on the browser.

### 2.1.12
*Released on 12 Apr 2018*

##### 💪 Enhancements:
* Improved design for configuring webhook notification

##### 🐞 Fixes
* Webhook notifications was triggering for every test run even when notification is set to send on errors only.
* Unable to disable webhook notification when editing job.

### 2.1.11
*Released on 05 Apr 2018*

##### 💪 Enhancements:
* Advanced options for scheduling jobs (Pro plan only).

### 2.1.10
*Released on 02 Apr 2018*

##### 🚀 New Features:
* You can use webhooks to get notifications about the status of your jobs on your own Slack / Telegram channels.

##### 💪 Enhancements:
* You can now download all the images of a test run from the Editor.

### 2.1.9
*Released on 15 Mar 2018*

##### 🚀 New Features:
* You can now run tests on Microsoft Edge!

##### 💪 Enhancements:
* `I.fill` and `I.click` commands can now target elements by `aria-label`
* You can now target input fields by their current value when using `I.fill`
* Added XPATH support for `I.fill`
* `I.see` and `I.click` now applies to the value and placeholder of textual input fields too
* You can use `I.type` in place of `I.press` for keyboard inputs
* Added `I.pressTab` command

### 2.1.8
*Released on 12 Mar 2018*

##### 🐞 Fixes
* Fix bug that prevented jobs from running.

##### Others:
* Capped maximum run time of tests to 1 day. Tests running longer than that will time out. If you have tests running for such a long time, you should split them into smaller tests.
* Improve performance of retrieving test run results.

### 2.1.7
*Released on 9 Mar 2018*

##### 🐞 Fixes
* Fixed bug that caused application to crash when polling for the status of pending jobs.

### 2.1.6
*Released on 6 Mar 2018*

##### 🚀 New Features:
* 🍪🍪🍪 You can now set and assert [cookies](/scripting/cookies.md).

##### 🐞 Fixes
* Fixed: Jobs being ran and crashing when their tests get moved or deleted.

### 2.1.5
*Released on 20 Feb 2018*

##### 🚀 New Features:
* Added `SAMPLE.id` method for generating sample data for random base58 strings.

### 2.1.4
*Released on 12 Feb 2018*

##### 🐞 Fixes
* Fixed: Unable to retrieve job status sometimes.

### 2.1.3
*Released on 11 Feb 2018*

##### 🐞 Fixes
* Fixed: Cannot open "Create Project" dialog

### 2.1.2
*Released on 6 Feb 2018*

##### 💪 Enhancements:
* Friendly reminders to ask you to pay us for our work. 😉

### 2.1.1
*Released on 27 Jan 2018*

##### 🐞 Fixes
* Fixed: Editor tab - Test report window could not be resized

### 2.1.0
*Released on 23 Jan 2018*

##### 🚀 New Features:
* You can now automatically pay us for our work. 😉

### 2.0.0
*Released on 3 Jan 2018*

##### 🚀 New Features:
* Documentation Tab: Now you can view this documentation site with UI-licious Studio with your tests side-by-side

##### 💪 Enhancements:
* Internal changes to improve the performance of the application and test engine.
* Prettier web reports for your scheduled tests.
* You can specify the full path when creating or moving a file or folder. All intermediate folders to the destination path will be automatically created.

### 1.5.1
*Released on 9 November 2017*

##### 💪 Enhancements:
* Editor Tab:
	* Improved resolutions dropdown in Run pane - group resolutions by device class, and label resolutions by common screen size names
	* Display folder path in Script pane title bar
	* New tests/files/folders will be created as siblings to the currently selected test/file on the Directory pane.
	* When a folder is selected on the Directory pane, the Script pane will not navigate away to a blank page.

##### 🐞 Fixes
* Editor Tab:
	* Fixed: Script pane does not automatically display the new test after creation, when test is created by clicking on the "Create Test" button on the blank Script pane.
	* Fixed: Tests get overridden when the switching between tests while a test is being saved

### 1.5.0
*Released on 11 October 2017*

##### 🚀 New Features:
* **Scheduled tests**: You can schedule tests to run automatically, and send email alerts when there's an error.

##### 💪 Enhancements:
* Reports now show you the total time taken for the entire tests.
* Changes to the color scheme to improve contrast and visibility.

### 1.4.3
*Released on 28 September 2017*
* Improved `I.upload` command to better handle hidden `<input type=file>` fields
* Improved `I.press` command to support active elements within `<iframe>` and `<frame>` elements

### 1.4.2
*Released on 9 September 2017*
* Improved CSS selector support for `I.fill` command

### 1.4.1
*Released on 25 August 2017*
* Improved `I.select` command - Better identification of target element with option parameter alone
* Improved support for testing within `<frame>` elements

### 1.4.0

*Released on 21 August 2017*

#### Breaking Changes
* When `I.click` opens a page in a new tab, the browser will be automatically switched to it.
    * If you are using `I.switchTab` to switch tabs after `I.click`, you can remove `I.switchTab`, or *(not recommended)* add `TEST.autoSwitchTab = false` or `TEST.autoSwitchTabOff()` to the start of your test scripts to disable this behavior.

#### Highlights
* You can set the max duration to attempt a command before raising an error with the `TEST.commandTimeout` setting.

##### New

New Commands:
* Refresh a page: `I.refreshPage`
* Scrolling a page: `I.scrollBy`, `I.scrollTo`, `I.scrollToTop`, `I.scrollToBottom`
* &uarr; &uarr; &darr; &darr; &larr; &rarr; &larr; &rarr; `B` `A` <br>Shortcuts to press arrow keys: `I.pressUp`, `I.pressDown`, `I.pressLeft`, `I.pressRight`

New Configurations:
* You can set the max duration to attempt a command before raising an error with the `TEST.commandTimeout` setting.
* You can enable / disable automatic screenshots taken during test runs with the `TEST.autoScreenshot` flag.
* You can enable / disable automatic tab switching when new tab is open with the `TEST.autoSwitchTab` flag.

##### Enhancements
* Condensed the project directory, so you can see more.
* Asset optimizations to improve load time
* Separate runner pane from script pane so that the runner pane doesn't reload as you switch between different scripts which can be annoying during test runs.

##### Fixes
* Fixed: Layout of UI-licious Studio is broken on Safari.
* Fixed: Error moving files to project root.

### 1.3.0

*Released on 21 June 2017*

* Added support for testing [Web Components](https://www.webcomponents.org/)! [Polymer](https://www.polymer-project.org/) is now a supported framework. Woohoo!
* Added [`I.grabText`](/scripting/extract.md#igrabtext) command to read a text from an element in a web page to use as an input variable for subsequent test commands:
```javascript
// example usage:
I.see("Thank you for ordering from UI-licious pizza. Your order number is"); // you have finished ordering pizza
var orderId = I.grabText("#orderId"); // read the text from the #orderId element on the webpage
I.goTo("/orders"); // go to your order history page
I.click(orderId);
```
* Added CSS class selector and XPATH support for [`I.click`](/scripting/mouse.md#iclick) command
    * It is recommended that you use these sparingly, because it would make your tests harder to maintain.


* Fixed: `I.press` support on Firefox
* Fixed: Studio briefly flashes when a project or a test loads.

### 1.2.0

*Released on 03 May 2017*

* Added a chat box so that you can talk to our technical team!
* Added shorter commands to save keystrokes:
    * [`I.fill`](/scripting/form_input.md#ifill) - Shortcut for `I.fillField`
    * [`I.press`](/scripting/keyboard.md#ipress) - Shortcut for `I.pressKey`
    * [`I.pressEnter`](/scripting/keyboard.md#ipressenter) - Shortcut for `I.pressKey('Enter')`
* Added [`I.switchTab`](/scripting/navigation.md#iswitchtab) to switch to webpages that open in a new window or tab
* Added [`I.filled`](/scripting/assertion.md#ifilled) command to assert the value of a textual input field
* Powered up the [`I.goTo`](/scripting/navigation.md#igoto) command. Now you can navigate to pages with paths relative to the current url. For example:

```javascript
I.goTo("https://petstore.com/store");
I.goTo("/toys"); // this will navigate to https://petstore.com/store/toys
```
* Powered up the [`I.fill`](/scripting/form_input.md#ifill) command. It's now better at identifying input fields. Now it handles non-semantic field labels.
* Capture screenshots every second during [`I.wait`](/scripting/utility.md#iwait) command. Now you can watch lolcats videos at 1FPS in UI-licious
* Shortened the timeout when a command fails from 30 seconds to 15 seconds.
* You can move files and folders.
* Sort file and folders by name.
* Folders can be collapsed/expanded to hide/show their contents. They will be collapsed by default.
* More condensed report - so that you will have to scroll less while reading very long test run reports.
* You are no longer allowed to enter the following characters in your project/folder/file names: / ? % * : | < > "

* Fixed: Test report summary gets scrolled out of view when report is very long. We've fixed the position of the test report summary so that it doesn't happen.


### 1.1.0
*Released on 28 Feb 2017*

* Test Engine
	* Commands added
		* [`I.upload`](/scripting/form_input.md#iupload) - Uploads a file to a file input field
		* [`I.selected`](/scripting/assertion.md#iselected) - Checks if an select / radio / checkbox option is selected
		* [`I.deselected`](/scripting/assertion.md/#ideselected) - Checks if an select / radio / checkbox option is deselected
		* [`TEST.run`](/scripting/sequence.md#testrun) - Allows tests to call other tests
* Studio
	* Support nested directory structure in project workspace
	* Support file upload
	* Improvements to test run preview:
		* Show summary when test run is complete
		* Show the latest screenshot while test is running in case of long running steps
		* Autoscroll to selected steps
		* Select steps using up/down arrow keys
	* Add mobile resolutions to test run configurations

### 1.0.0

*Released on 8 Feb 2017*

* Test Engine
	* Commands added
		* [`I.goTo`](/scripting/navigation.md#igoto) - Navigate to a page.
		* [`I.amAt`](/scripting/navigation.md#iamat) - Check that the browser is at a given url.
		* [`I.click`](/scripting/mouse.md#iclick) - Click on an element.
		* [`I.see`](/scripting/assertion.md#isee) - Check that a given text can be seen.
		* [`I.dontSee`](/scripting/assertion.md#idontsee) - Ensure that a text cannot be seen.
		* [`I.fillField`](/scripting/form_input.md#ifill) - Fill an input field with a given value.
		* [`I.select`](/scripting/form_input.md#iselect) - Select an option.
		* [`I.deselect`](/scripting/form_input.md#ideselect) - Unselect an option.
	* Test runs supported on both Chrome & Firefox browsers
* Studio
	* Test script editor
		* Editor for writing test scripts
	* Test run preview
		* Trigger a test run and show the steps executed and screenshots for each step

---

## Command Line Interface

## 1.5.8
* Automated patch version bump

## 1.5.7
* Fixed : Exit an error process with an error code 1

## 1.5.6
* Enhancement : simplifying `overwrite` param for `import` operation

## 1.5.5
* Enhancement  : Update version number and fix version command so that it grabs the version number from package.json

## 1.5.4
* New Feature : Import image files into the workspace directory

## 1.2.12
* Show summary of test run errors in test run report.

## 1.1.10
* Fixed: Error running scripts in nested folders, e.g. `/folder_a/folder_b/test_c`

## 1.1.7
* Add `list` command to list projects.


## v1.0.6
* Add `run` command to run a script.
