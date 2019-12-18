---
search:
    keywords: ['keyboard', 'press']
---

# Keyboard commands

These commands trigger a keypress on the keyboard.

## List of commands

| Command | Description|
|---------|------------|
| [`I.type`](#itype--ipress) <br> [`I.press`](#itype--ipress) | Press a key or a string of keys |
| [`I.pressEnter`](#ipressenter) | Press the `Enter` key |
| [`I.pressUp`](#ipressup) | Press the &uarr; key |
| [`I.pressDown`](#ipressdown) | Press the &darr; key |
| [`I.pressLeft`](#ipressleft) | Press the &larr; key |
| [`I.pressRight`](#ipressright) | Press the &rarr; key |
| [`I.pressTab`](#ipresstab) | Press the `Tab` key |

---

## I.type / I.press

Press a key or a string of keys.

This will send keyboard inputs to the element in focus, or the page &lt;body&gt; if no element is focus.

> `I.press` and `I.type` are exactly the same thing - we simply provided these two versions for whichever linguistic preference you have.

### Usage
```javascript
I.type(key)
I.press(key)
```

#### Parameters
| Parameter | Type | Remarks |
|-----------|------|---------|
| key | string <br> array of strings | Key(s) to press |

### Examples

#### Text input

> Note that `I.fill(field, value)` is recommended over `I.type(value)` for entering text into input fields

```javascript
I.type("hello") // this will send "h" "e" "l" "l" "o" 
```

#### Press a key

```javascript
I.press("?") // this will send "?"
```

#### Press a special key

```javascript
// Send a special keys 
I.press("Backspace") // This will press the "Backspace" key
I.press("Delete") // This will press the "Delete" key
I.pressEnter() // Convenience command are provided for frequently used keys
```

#### Press a chord (send multiple keys simultaneously)

```javascript
// Send a chord (press multiple keys at the same time)
I.press(["Shift", "a"])
I.press(["Alt", "A"]) 
I.press(["Control", "A"])
I.press(["Meta", "A"])
I.press(["Shift", "Control", "A"])
```
---

## I.pressEnter

Press the `Enter` key.

This is same as using the command `I.press("Enter")`.

### Usage
```javascript
I.pressEnter()
```

---

## I.pressUp

Press the &uarr; key.

This is same as using the command `I.press("ArrowUp")`.

### Usage
```javascript
I.pressUp()
```

---

## I.pressDown

Press the &darr; key.

This is same as using the command `I.press("ArrowDown")`.

### Usage
```javascript
I.pressDown()
```

---

## I.pressLeft

Press the &larr; key.

This is same as using the command `I.press("ArrowLeft")`.

### Usage
```javascript
I.pressLeft()
```

---

## I.pressRight

Press the &rarr; key.

This is same as using the command `I.press("ArrowRight")`.

### Usage
```javascript
I.pressRight()
```

---

## I.pressTab

Press the &rarr; key.

This is same as using the command `I.press("Tab")`.

### Usage
```javascript
I.pressTab()
```
