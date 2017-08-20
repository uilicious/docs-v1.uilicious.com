---
search:
    keywords: ['mouse', 'click', 'scroll', 'scrollby', 'scrollto', 'scrolltotop', 'scrolltobottom']
---

# Mouse commands

## List of commands

| Command | Description|
|---------|------------|
| [`I.click`](#iclick) | Click on an element  |
| [`I.scrollBy`](#iscrollby) | Scrolls the page horizontally and vertically by a given number of pixels |
| [`I.scrollTo`](#iscrollto) | Scroll to a given coordinate on the page  |
| [`I.scrollToTop`](#iscrolltotop) | Scroll to the top of the page  |
| [`I.scrollToBottom`](#iscrolltobottom) | Scroll to the bottom of the page  |

---

##`I.click`

Click on an element.

> If the click opens a page in a new tab, the browser will automatically be switched to the new tab.

#### Usage
```javascript
I.click(target);
```

##### Parameters

| Parameter | Type | Remarks|
|----------|------|--------|
| target | string | Text that represents the element to click |

#### Example(s)

##### Click on element by text content

```javascript
I.click("Log In")
```
Click on an element with the text "Log In".

##### Click on element by CSS selectors

```javascript
I.click("#login-btn")
```
Click on an element with its `id` property set to `login-btn`. 

```javascript
I.click(".login-btn")
```
Click on an element with its `class` property set to `login-btn`.

##### Click on element by XPATH
> Not recommended.

---

##`I.scrollBy`

Scrolls the page horizontally and vertically by a given number of pixels.

#### Usage
```javascript
I.scrollBy(x,y);
```

##### Parameters

| Parameter | Type | Remarks|
|----------|------|--------|
| x | number | Number of pixels to scroll right by. Use a negative number to scroll left instead. |
| y | number | Number of pixels to scroll down by. Use a negative number to scroll up instead. | 

#### Example(s)

```javascript
I.scrollBy(200, -500);
```
Scrolls the page 200 pixels to the right, and 500 pixels up.


---

##`I.scrollTo`

Scrolls the given coordinate of the page.
 
If the page is sufficiently tall and wide, the page will be scrolled until the given coordinate is at the top left corner of the screen.

#### Usage
```javascript
I.scrollTo(x,y);
```

##### Parameters

| Parameter | Type | Remarks|
|----------|------|--------|
| x | number | x coordinate of the page to scroll to. |
| y | number | y coordinate of the page to scroll to  |

#### Example(s)

```javascript
I.scrollTo(0, 500);
```
Scrolls to the (0, 500) coordinate of the page.

---

##`I.scrollToTop`

Scroll to the top of the page.

This is the same as using the command `I.scrollTo(0,0)`.

#### Usage
```javascript
I.scrollToTop();
```

---

##`I.scrollToBottom`

Scroll to the bottom of the page.

>For infinite scrolling pages, this command will simply scroll to the end of the rendered content. 

#### Usage
```javascript
I.scrollToBottom();
```