---
search:
    keywords: ['keyboard', 'press']
---

# Keyboard commands

These commands trigger a keypress on the keyboard.

## List of commands

| Command | Description|
|---------|------------|
| [`I.press`](#iclick) | Press a key or a string of keys |
| [`I.pressEnter`](#ipressenter) | Press the `Enter` key |
| [`I.pressUp`](#ipressup) | Press the &uarr; key |
| [`I.pressDown`](#ipressdown) | Press the &darr; key |
| [`I.pressLeft`](#ipressleft) | Press the &larr; key |
| [`I.pressRight`](#ipressright) | Press the &rarr; key |

---

## I.press

> Short form of I.pressKey

Press a key or a string of keys


#### Usage
```javascript
I.press(key)
```

##### Parameters
| Parameter | Type | Remarks |
|-----------|------|---------|
| key | string | Key to press|

---

## I.pressEnter

Press the `Enter` key.

This is same as using the command `I.press("Enter")`.

#### Usage
```javascript
I.pressEnter()
```

---

## I.pressUp

Press the &uarr; key.

This is same as using the command `I.press("ArrowUp")`.

#### Usage
```javascript
I.pressUp()
```

---

## I.pressDown

Press the &darr; key.

This is same as using the command `I.press("ArrowDown")`.

#### Usage
```javascript
I.pressDown()
```

---

## I.pressLeft

Press the &larr; key.

This is same as using the command `I.press("ArrowLeft")`.

#### Usage
```javascript
I.pressLeft()
```

---

## I.pressRight

Press the &rarr; key.

This is same as using the command `I.press("ArrowRight")`.

#### Usage
```javascript
I.pressRight()
```