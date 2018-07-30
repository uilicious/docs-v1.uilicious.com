# Alert commands

These commands interact with **alerts**, including **confirm** and **prompt** dialogs.

**Please take note:**

* Browser support:
  * Fully supported on Chrome and Microsoft Edge
  * Unstable on Firefox, Safari, and IE11 - work in progress to fully support alerts
* Current limitations:
  * **Screenshots are disabled when alerts are open**. We're working on enabling screenshots during alert. Vote on [this ticket](https://trello.com/c/AdVKnK0x) if you require this feature to bump it up our priority list.

## List of commands

| Command | Description|
|---------|------------|
| [`I.seeAlert`](#iseealert) | Assert that an alert is displayed, and/or that an expected message is displayed on the alert. |
| [`I.acceptAlert`](#iacceptalert) | Press the "Ok" button on the alert |
| [`I.cancelAlert`](#icancelalert) | Press the "Cancel" button on the alert |
| [`I.fillAlert`](#ifillalert) | Fill the text box on the alert |

## `I.seeAlert`

Assert the message displayed on the alert.

#### Usage
```
I.seeAlert(text)
```

| Parameter | Type | Remarks |
|----------|------|--------|
| text | string | (Optional) Text that is expected to be displayed on the alert. |

#### Example(s)

```
UI.execute("alert('hello    world')") // opens an alert with the message "Hello world"
I.seeAlert() // pass
I.seeAlert("hello world") // pass
I.seeAlert("lorem") // fail
```

## `I.acceptAlert`

Press the "Ok" button (or the equivalent in other languages) on the alert.

#### Usage
```
I.acceptAlert()
```

## `I.cancelAlert`

Press the "Cancel" (or the equivalent in other languages) button on the alert.

> On alert boxes that do not have the "Cancel" button, the "Ok" button will be pressed instead to dismiss the alert.

#### Usage
```
I.cancelAlert()
```

## `I.fillAlert`

Fill the text box on the alert.

> Only applicable to **prompt** dialogs.

#### Usage
```
I.fillAlert(value)
```

| Parameter | Type | Remarks |
|----------|------|--------|
| value | string | Text to fill into the prompt's text box |

### Example(s)

```
UI.execute("prompt('What's your name?')") // open a prompt dialog
I.fillAlert("Jane") // fill in the prompt dialog with "Jane"
I.acceptAlert() // press "Ok"
```
This fills in the text box in the alert with "Jane", and presses the "Ok" button.

