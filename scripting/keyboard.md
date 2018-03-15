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

Press a key or a string of keys

#### Usage
```javascript
I.type(key)
I.press(key)
```

##### Parameters
| Parameter | Type | Remarks |
|-----------|------|---------|
| key | string | Key to press|

##### Example
```javascript
I.type("Hello")
I.press("?")
```

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

---

## I.pressTab

Press the &rarr; key.

This is same as using the command `I.press("Tab")`.

#### Usage
```javascript
I.pressTab()
```
