# List of commands

#### Navigation commands

| Command | Description |
|---------|-------------|
| [`I.goTo`](navigation.md#igoto) | Navigate to a URL |
| [`I.refreshPage`](navigation.md#irefreshpage) | Refresh a page |
| [`I.switchTab`](navigation.md#iswitchtab) | Switch to a tab |
| [`I.closeTab`](navigation.md#iclosetab) | Close the current tab |

#### URL assertion commands

| Command | Description |
|---------|-------------|
| [`I.amAt`](navigation.md#iamAt) | Assert that the browser is at a specific URL |

#### Form input commands

| Command | Description |
|---------|-------------|
| [`I.fill`](form_input.md#ifill) | Fill a text field with a value |
| [`I.select`](form_input.md#iselect) | Select a dropdown / checkbox / radio button |
| [`I.deselect`](form_input.md#ideselect) | Deselect a checkbox |
| [`I.upload`](form_input.md#iupload) | Upload a file to a file field |

#### Form assertion commands

| Command | Description |
|---------|-------------|
| [`I.filled`](form_input.md#ifilled) | Assert that the form is filled with a specific value |
| [`I.selected`](form_input.md#iselected) | Assert that a dropdown option, checkbox, or radio button is selected |
| [`I.deselected`](form_input.md#ideselected) | Assert that a dropdown option, checkbox, or radio button is NOT selected |

#### Mouse commands

| Command | Description |
|---------|-------------|
| [`I.click`](mouse.md#iclick--idoubleclick) <br> [`I.doubleClick`](mouse.md#iclick--idoubleclick) | Click or double click on an element |
| [`I.dragTo`](mouse.md#idragto) | Drag an element to another target element |
| [`I.dragBy`](mouse.md#idragby) | Drag an element directionally by (x,y) pixel offset |
| [`I.dragUp`](mouse.md#idragup) | Drag an element to the up by a given number of pixel |
| [`I.dragDown`](mouse.md#idragdown) | Drag an element to the down by a given number of pixel |
| [`I.dragLeft`](mouse.md#idragleft) | Drag an element to the left by a given number of pixel |
| [`I.dragRight`](mouse.md#idragright) | Drag an element to the right by a given number of pixel |
| [`I.scrollBy`](mouse.md#iscrollby) | Scrolls the page horizontally and vertically by a given number of pixels. |
| [`I.scrollUp`](mouse.md#iscrollup) | Scrolls the page up by a given number of pixels |
| [`I.scrollDown`](mouse.md#iscrolldown) | Scrolls the page down by a given number of pixels |
| [`I.scrollLeft`](mouse.md#iscrollleft) | Scrolls the page left by a given number of pixels |
| [`I.scrollRight`](mouse.md#iscrollright) | Scrolls the page right by a given number of pixels |
| [`I.scrollTo`](mouse.md#iscrollto) | Scrolls to a coordinate on the page |
| [`I.scrollToTop`](mouse.md#iscrolltotop) | Scroll to the top of the page |
| [`I.scrollToBottom`](mouse.md#iscrolltobottom) | Scroll to the bottom of the page |

#### Keyboard commands

| Command | Description |
|---------|-------------|
| [`I.type`](keyboard.md#itype--ipress) <br> [`I.press`](keyboard.md#itype--ipress) | Press a key or a string of keys |
| [`I.pressEnter`](keyboard.md#ipressenter) | Press the `Enter` key |
| [`I.pressUp`](keyboard.md#ipressup) | Press the ↑ key |
| [`I.pressDown`](keyboard.md#ipressdown) | Press the ↓ key |
| [`I.pressLeft`](keyboard.md#ipressleft) | Press the ← key |
| [`I.pressRight`](keyboard.md#ipressright) | Press the → key |
| [`I.pressTab`](keyboard.md#ipresstab) | Press the `Tab` key |

#### Validate page content

| Command | Description |
|---------|-------------|
| [`I.see`](assertion.md#isee) | Assert that an text or element is visible |
| [`I.dontSee`](assertion.md#idontSee) | Assert that an text or element is NOT visible |
| [`I.count`](assertion.md#icount) | Assert the number of occurances for a text or element |

#### Page content extraction commands

| Command | Description |
|---------|-------------|
| [`I.getCount`](extract.md#igetcount) | Get the number of occurances of a text or element |
| [`I.getText`](extract.md#igettext) | Get text content from an element |
| [`I.getValue`](extract.md#igetvalue) | Get value from an input element |

#### Alert commands

| Command | Description|
|---------|------------|
| [`I.seeAlert`](alerts.md#iseealert) | Assert that an alert is displayed, and/or that an expected message is displayed on the alert. |
| [`I.acceptAlert`](alerts.md#iacceptalert) | Press the "Ok" button on the alert |
| [`I.cancelAlert`](alerts.md#icancelalert) | Press the "Cancel" button on the alert |
| [`I.fillAlert`](alerts.md#ifillalert) | Fill the text box on the alert |

#### Utility commands

| Command | Description |
|---------|-------------|
| [`I.wait`](utility.md#iwait) | Wait for a given amount of time |

#### Generate sample data

| Command | Description |
|---------|-------------|
| [`SAMPLE.id`](sample.md#sampleid) | Generates a random string useful for IDs and passwords |
| [`SAMPLE.phone`](sample.md#samplephone) | Generates a random phone number |
| [`SAMPLE.last`](sample.md#samplelast) | Generates a random last name |
| [`SAMPLE.first`](sample.md#samplefirst) | Generates a random first name |
| [`SAMPLE.name`](sample.md#samplename) | Generates a random full name |
| [`SAMPLE.email`](sample.md#sampleemail) | Generates a random email address |

#### Test flow commands

| Command | Description |
|---------|-------------|
| [`TEST.run`](sequence.md#testrun) | Runs another test |
| [`TEST.stop`](sequence.md#teststop) | Stops the test |

#### Screenshot commands

| Command | Description |
|---------|-------------|
| [`TEST.takeFullScreenshot`](screenshot.md#testtakefullscreenshot) | Take a full page screenshot (Safari & IE only) |

#### Reporting commands
| Command | Description |
|---------|-------------|
| [`TEST.log.info`](logging.md#testloginfo) | Log a message to report |
| [`TEST.log.pass`](logging.md#testlogpass) | Log a message to report with `pass` status |
| [`TEST.log.fail`](logging.md#testlogfail) | Log a message to report with `fail` status |

#### Limiting test scope

| Command | Description|
|---------|------------|
| [`UI.context`](ui_context.md#uicontext) | Limit the test to run on specific parts of a page |

#### Execute Javascript

| Command | Description |
|---------|-------------|
| [`UI.execute`](executing-javascript.md#uiexecute) | Executes Javascript on the browser |

#### Cookie management
| Command | Description|
|---------|------------|
| [`UI.COOKIE.set`](cookies.md#uicookieset) | Set a cookie on the current page |
| [`UI.COOKIE.isSet`](cookies.md#uicookieisset) | Assert the presence of a cookie |
| [`UI.COOKIE.isEqual`](cookies.md#uicookieisEqual) | Assert the value of a cookie  |
| [`UI.COOKIE.delete`](cookies.md#uicookiedelete) | Delete a cookie |
| [`UI.COOKIE.deleteAll`](cookies.md#uicookiedeleteAll) | Delete all cookies |


