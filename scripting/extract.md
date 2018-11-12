---
search:
    keywords: ['extract', 'grab', 'grabtext']
---

# Extraction commands

These commands allow you to extract parts of the page, which you may then use as inputs for later commands.

## List of commands

| Command | Description|
|---------|------------|
| [`I.getCount`](#igetcount) |  Get the number of occurances of a text or element |
| [`I.getText`](#igettext) |  Get the text content of an element |
| [`I.getValue`](#igetvalue) |  Get the value from an input element |

---
## `I.getCount`

Get the number of occurances of a text or element

#### Usage

```javascript
I.getCount(target)
```

##### Parameters

| Parameter | Type | Remarks|
|-----------|------|--------|
| target | string | The text or element to find |

### Example(s)

```javascript
var count = I.getCount("Add to cart")
```

Sets the variable `count` to the number occurances of the text "Add to cart".

```javascript
var count = I.getCount(".product")
```

Sets the variable `count` to the number occurances of the element with the CSS class "product".

---

## `I.getText`

Get the text content of an element

Aliases: `I.grabText` (legacy)

#### Usage

```javascript
I.getText(target)
```

##### Parameters

| Parameter | Type | Remarks|
|-----------|------|--------|
| target | string | CSS selector or XPATH of the element to extract the text content from |

### Example(s)

###### HTML
```xml
<div id="message">Welcome</div>
<div id="secret">Batman</div>
<div>
    <label for="secret_message">Secret Message</label>
    <input id="secret_message" type="text"/>
</div>
```

###### Script
```javascript
// Extract text from elements
var message = I.getText("#message"); // extracts "Welcome"
var secret = I.getText("#secret"); // extracts "Batman"

// Use the extracted text in later commands
// For example, enter "Welcome Batman" to the "Secret Message" text field
I.fill("Secret Message", message + ' ' + secret);
```

---

## `I.getValue`

Get the value of an input element

#### Usage

```javascript
I.getValue(target)
```

##### Parameters

| Parameter | Type | Remarks|
|-----------|------|--------|
| target | string | Keyword to identify the field. <br> The associated label, aria-label, placeholder, adjacent text, and current value can be used to identify a field. <br>  CSS selectors can also be used, *but is not recommended as it makes the tests harder to keep up to date.* |

### Example(s)
```javascript
I.fill("Search", "Hello")
I.type(" from the other side") 
var foo = I.getValue("Search") // `foo` would be "Hello from the other side"
```
In this example, we first fill "Hello" to the "Search" field, and continue typing " from the other side" into the field which is currently in focus. You can get the value of the "Search" field using `I.getValue` and store the value into a variable for later use.