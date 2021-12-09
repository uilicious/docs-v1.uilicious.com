# Window Resize command

These commands are used to set browser resolution when users want to change browser resolution in the middle of the test or hardcoded browser resize

## List of commands

### Input commands

| Command | Description|
|---------|------------|
| [`UI.resize`] | Resize the browser to the desired width and height |
| [`UI.resize(<width>, <height>, {target: "viewport"})`] | Resize the browser with a specific target |

---

## `UI.resize`

Ability to resize browser resolution while the test is running.

This works for all available browsers.

### Usage
```javascript
UI.resize(<width>, <height>)
```

### Example(s)

#### Resize browser

```javascript
UI.resize("1920x1080")
UI.resize("1920","1080")
```
This will resize the browser resolution to 1920 x 1080

### Checking browser resolution size using resize properties

| Command | Description|
|---------|------------|
| [`UI.outerWidth`] | Collects and stores the current `outer width` size of the browser |
| [`UI.outerHeight`] | Collects and stores the current `outer height` size of the browser |
| [`UI.innerWidth`] | Collects and stores the current `inner width` size of the browser |
| [`UI.innerHeight`] | Collects and stores the current `inner height` size of the browser |


### Usage
```javascript
if(UI.outerWidth !== 1920){
	 TEST.log.fail("Incorrect outerWidth. Expected 1920, but got " + UI.outerWidth)
	 }
else{
	TEST.log.pass("Correct outerWidth. Outer Width is " + UI.outerWidth)
}
//CHECK OUTER HEIGHT
if(UI.outerHeight !== 1080){
	 TEST.log.fail("Incorrect outerHeight. Expected 1080, but got " + UI.outerHeight)
	 }
else{
	TEST.log.pass("Correct outerHeight. Outer Height is " + UI.outerHeight)
}
```
The command above will collect the browser's outer width using the `UI.outerWidth` and `UI.outerHeight` commands and displays it on the result screen when the test is running
