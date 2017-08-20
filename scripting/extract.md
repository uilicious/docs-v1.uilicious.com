---
search:
    keywords: ['extract', 'grab', 'grabtext']
---

# Extraction commands

These commands allow you to extract parts of the page, which you may then use as inputs for later commands.

## List of commands

---

## `I.grabText`

Extract text from the page.

#### Usage

```javascript
I.grabText(target)
```

##### Parameters

| Parameter | Type | Remarks|
|-----------|------|--------|
| target | string | CSS selector or XPATH of the element to extract the text content from |

### Example(s)

###### HTML
```HTML
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
var message = I.grabText("#message"); // extracts "Welcome"
var secret = I.grabText("#secret"); // extracts "Batman"

// Use the extracted text in later commands
// For example, enter "Welcome Batman" to the "Secret Message" text field
I.fill("Secret Message", message + ' ' + secret); 
```
