---
search:
    keywords: [
        'assert', 'assertion',
        'see', 'dontsee', 'notsee', 
        'amat', 
        'filled', 
        'selected', 
        'deselected'
    ]
---

# Assertion commands

These are commands to assert if the elements on the page is in a expected state.

If the assertion fail, the command results in an error.

## List of commands

##### General assertion commands
| Command | Description|
|---------|------------|
| [`I.see`](#isee) |  Assert that an text or element is visible |
| [`I.dontSee`](#idontsee) |  Assert that an text or element is NOT visible |

##### URL assertions commands
| Command | Description|
|---------|------------|
| [`I.amAt`](#iamAt) |  Assert that the browser is at a specific URL |

##### Form input assertions commands
| Command | Description|
|---------|------------|
| [`I.filled`](#ifilled) |  Assert that the form is filled with a specific value |
| [`I.selected`](#iselected) |  Assert that a dropdown option, checkbox, or radio button is selected |
| [`I.deselected`](#ideselected) |  Assert that a dropdown option, checkbox, or radio button is NOT selected |

---

## `I.see`

Assert that an text or element is visible

> Ignores casing and white-spaces. This behavior is not configurable at the moment.

#### Usage
```javascript
I.see(target)
```
##### Parameters
| Parameter | Type | Remarks|
|-----------|------|--------|
| target | string | Text content that is expected to be visible |

#### Example(s)

```javascript
I.see("Welcome back, Bruce");
```
Asserts that the text "Welcome back, Bruce" is seen on the page.   

---

## `I.dontSee`

Assert that an text or element is NOT visible

> Ignores casing and white-spaces. This behavior is not configurable at the moment.

#### Usage

```javascript
I.dontSee(target)
```
##### Parameters
| Parameter | Type | Remarks|
|-----------|------|--------|
| target | string | Text content that is expected to be NOT visible. |

#### Example(s)

```javascript
I.dontSee("Loading...");
```
Asserts that the text "Loading..." is seen on the page.   

---

## `I.amAt`

Asserts that the browser is at a specific URL.

You can use an absolute URL or a relative URL.

#### Usage

```javascript
I.amAt(url)
```

##### Parameters

| Parameter | Type | Remarks|
|-----------|------|--------|
| url | string | URL to check against |

#### Example(s)

##### Absolute URL

```javascript
I.amAt("http://mystore.com")
```

Matches the following:
* http://mystore.com

Does not match:
* https://mystore.com

##### Without protocol

```javascript
I.amAt("://mystore.com")
```

Matches the following:
* http://mystore.com
* https://mystore.com

##### Relative URL

```javascript
I.amAt("/shoes")
```

Matches the following:
* http://storeA.com/shoes
* http://storeB.com/shoes

##### Query string

```javascript
I.amAt("?color=blue")
```

Matches the following:
* http://mystore.com/shoes?color=blue
* http://mystore.com/bag?color=blue

Does not matches:
* http://mystore.com/shoes
* http://mystore.com/bag?color=red

##### Hash

```javascript
I.amAt("#sale")
```

Matches the following:
* http://mystore.com/shoes#sale
* http://mystore.com/bag#sale

Does not matches:
* http://mystore.com/shoes
* http://mystore.com/bag#new

---

## `I.filled`

Asserts that the form is filled with a specific value

#### Usage

```javascript
I.filled(field, value)
```

##### Parameters

| Parameter | Type | Remarks|
|-----------|------|--------|
| field | string | Keyword to identify the field. <br> The associated label, placeholder, adjacent text, and name can be used to identify a field. <br>  CSS selectors can also be used, *but is not recommended as it makes the tests harder to keep up to date.* |
| value | string | Value that the field is expected to have |

#### Example(s)



---

## `I.selected`

Asserts that a dropdown option, checkbox, or radio button is selected

#### Usage

```javascript
I.selected(option)
```

```javascript
I.selected(list, option)
```

##### Parameters

| Parameter | Type | Remarks|
|-----------|------|--------|
| list | string | Keyword to identify the options list |
| option | string | Keyword to identify the option to be selected |

---

## `I.deselected`

Asserts that a dropdown option, checkbox, or radio button is NOT selected

#### Usage

```javascript
I.deselected(option)
```

```javascript
I.deselected(list, option)
```

##### Parameters

| Parameter | Type | Remarks|
|-----------|------|--------|
| list | string | Keyword to identify the options list |
| option | string | Keyword to identify the option that expected to be NOT selected |


