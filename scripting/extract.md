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
