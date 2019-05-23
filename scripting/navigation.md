---
search:
    keywords: ['navigation', 'goto', 'refreshpage', 'switchtab']
---

# Navigation commands

## List of commands

#### Page navigation commands
| Command | Description|
|---------|------------|
| [`I.goTo`](#igoto) | Navigate to a URL |
| [`I.refreshPage`](#irefreshpage) | Refresh the page |
| [`I.switchTab`](#iswitchtab) | Switch to the next tab |
| [`I.closeTab`](#icloseTab) | Close the current tab |

#### Page assertion commands
| Command | Description|
|---------|------------|
| [`I.amAt`](#iamAt) |  Assert that the browser is at a specific URL |

---

##`I.goTo`

Navigate to a URL.

#### Usage
```javascript
I.goTo(url);
I.goTo(url, options);
```

##### Parameters

| Parameter | Type | Remarks|
|-----------|------|--------|
| url | `string` | URL to navigate to. <br> <br> You can use an absolute URL like `http://mystore.com/shoes` or a relative URL like `/shoes`. <br> <br> If there is Basic HTTP Authentication on the page, add the username and password to your url like this: `https://username:password@mystore.com` |
| options | `object` | See below. | 

###### Options

| Option | Type | Remarks|
|--------|------|--------|
| assertStatusCode | `number` | Status code to expect after navigation. <br> By default, `I.goTo` will assert that the page after navigation does not return error status codes (status codes that are 400 and above). | 

#### Example(s)

##### Absolute URL

```javascript
I.goTo("https://mystore.com/shoes");
```

Go to https://mystore.com/shoes.

##### Absolute URL with Basic HTTP Authentication

```javascript
I.goTo("https://username:password@mystore.com/shoes");
```

Go to https://mystore.com/shoes.

##### Relative URL



```javascript
I.goTo("/shoes");
```

Go to the "/shoes" path of the current domain.

The following table shows where the browser will be navigated to depending on the current URL:

| Before | After |
|----------|------|
| https://storeA.com | https://storeA.com/shoes |
| https://storeB.com | https://storeB.com/shoes |
| https://mystore.com/wallet | https://mystore.com/shoes |

##### Query string



```javascript
I.goTo("?color=blue")
```
Set the query string of the URL to 'color=blue'.

The following table shows where the browser will be navigated to depending on the current URL:

| Before | After |
|----------|------|
| https://mystore.com/shoes | https://mystore.com/shoes?color=blue |
| https://mystore.com/shoes?color=red | https://mystore.com/shoes?color=blue |

##### Hash

```javascript
I.goTo("#sale")
```

Set the hash of the url to 'sale'.

The following table shows where the browser will be navigated to depending on the current URL:

| Before | After |
|----------|------|
| https://mystore.com/shoes | https://mystore.com/shoes#sale |
| https://mystore.com/shoes#new | https://mystore.com/shoes#sale

##### Assert status code

By default, `I.goTo` asserts that the page after navigation does not return an error status code (status codes that are 400 and above).

To check for a specific status code after navigation, you can use the `assertStatusCode` option.

```javascript
I.goTo("https://mystore.com/admin", {assertStatusCode: 403})
```

This example validates that navigation to the `https://mystore.com/admin` page returns a `403` Forbidden status code.

##### Error supression

If you don't want the status code to be validated, you can suppress the errors using `I.goTo$` instead.

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

##`I.refreshPage`

Refreshes the page

#### Usage
```javascript
I.refreshPage()
```

---

##`I.switchTab`

Switch to a tab.

#### Usage
```javascript
I.switchTab() // switch to the next tab
I.switchTab(tab) // switch to a specific tab by tab number or page title
```

##### Parameters

| Parameter | Type | Remarks|
|-----------|------|--------|
| tab | `number` or `string` | (Optional) <br> Tab number or page title to switch to. <br> If not provided, switch to the next tab. |

#### Example(s)

##### Switch to next tab

```javascript
I.switchTab()
```

Switch to the next tab.

If the browser is currently on the last tab, then this command will switch to the first tab.

##### Switch to tab with tab number

```javascript
I.switchTab(2) 
```

Switch to the second tab.

##### Switch to tab with page title

```javascript
I.switchTab("Login") // switch to the next tab
```

Switch to the tab titled "Login".

---

##`I.closeTab`

Close the current tab. 

`I.closeTab` cannot be used if there's only one tab open.

After the tab is closed, the browser will be automatically switched to the next tab (or the last tab if the closed tab was the last).

#### Usage
```javascript
I.closeTab()
```