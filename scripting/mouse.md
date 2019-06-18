---
search:
    keywords: ['mouse', 'click', 'scroll', 'scrollby', 'scrollto', 'scrolltotop', 'scrolltobottom']
---

# Mouse commands

## List of commands

##### Click

| Command | Description|
|---------|------------|
| [`I.click`](#iclick--idoubleclick) <br> [`I.doubleClick`](#iclick--idoubleclick) | Click or double click on an element  |

##### Drag

| Command | Description|
|---------|------------|
| [`I.dragTo`](#idragto) | Drag an element to another target element |
| [`I.dragBy`](#idragby) | Drag an element directionally by (x,y) pixel offset |
| [`I.dragUp`](#idragup) | Drag an element to the up by a given number of pixel |
| [`I.dragDown`](#idragdown) | Drag an element to the down by a given number of pixel |
| [`I.dragLeft`](#idragleft) | Drag an element to the left by a given number of pixel |
| [`I.dragRight`](#idragright) | Drag an element to the right by a given number of pixel |
| [`I.scrollBy`](#iscrollby) | Scrolls the page horizontally and vertically by a given number of pixels |

##### Scroll

| Command | Description|
|---------|------------|
| [`I.scrollBy`](#iscrollby) | Scrolls the page horizontally and vertically by a given number of pixels |
| [`I.scrollUp`](#iscrollup) | Scrolls the page up by a given number of pixels |
| [`I.scrollDown`](#iscrolldown) | Scrolls the page down by a given number of pixels |
| [`I.scrollLeft`](#iscrollleft) | Scrolls the page left by a given number of pixels |
| [`I.scrollRight`](#iscrollright) | Scrolls the page right by a given number of pixels |
| [`I.scrollTo`](#iscrollto) | Scroll to a given coordinate on the page  |
| [`I.scrollToTop`](#iscrolltotop) | Scroll to the top of the page  |
| [`I.scrollToBottom`](#iscrolltobottom) | Scroll to the bottom of the page  |

---

## `I.click` / `I.doubleclick`

Click or double click on an element.

For image / icon elements, we'd strongly recommend that setting an `aria-label` for the target element, use `I.click` using the label. This will also help make your application more friendly to humans using accessibility tools.

If the click triggers a page load, note that the time taken to execute the command will include the time taken to load the page.

If the click opens a page in a new tab, the browser will automatically be switched to the new tab.


#### Usage
```javascript
// Single click
I.click(target);
I.click(target, x, y);

// Double click
I.doubleClick(target);
I.doubleClick(target, x, y);
```

##### Parameters

| Parameter | Type | Remarks|
|----------|------|--------|
| target | string | Keyword to identify the element to click. <br> This is case-insensitive. |
| x | number | Optional. <br> Offset the click x pixels right from the top-left corner of the target element. |
| y | number | Optional. <br> Offset the click y pixels down from the top-left corner of the target element. |

#### Example(s)

##### Click on element with text

```javascript
I.click("Log In")
```
Click on an element with the text "Log In".

##### Click on images / icons using `aria-label` or `title`

Image / icon elements can be clicked on using the `aria-label` or `title` attribute set on the element. We'd strongly recommend setting both, because `aria-label` also makes your application more friendly to humans using accessibility tools, and `title` gives your element a helpful tooltip for visual users.

Here, we will use this plus button with the tooltip "Add" for illustration:

{% raw %}
<div style='margin-left: 16px; margin-bottom: 16px'>
    <button title="Add"><i class="fa fa-plus"></i></button>
</div>
{% endraw %}

```xml
<!-- Button with the tooltip "Add"-->
<button title="Add">
    <!-- Icon -->
    <i class="fa fa-plus"></i>
</button>
```

You can click on the button using its tooltip like this:
```javascript
I.click("Add");
```

##### Click on element using CSS selectors

```javascript
I.click("#login-btn")
```
Click on an element with its `id` property set to `login-btn`.

```javascript
I.click(".login-btn")
```
Click on an element with its `class` property set to `login-btn`.

##### Click on element with offset
```javascript
I.click("#map", 100, 100)
```
Clicks on 100 to the right and 100 down from the top-left corner of the element with the id `map`

---

##`I.dragTo`

Drags an element to another target element

#### Usage
```javascript
I.dragTo(element, target);
```

##### Parameters

| Parameter | Type | Remarks|
|----------|------|--------|
| element | string | Keyword to identify the element to drag. <br> This is case-insensitive. <br> CSS / XPATHs may also be used. |
| target | string | Keyword to identify the target element to drop on. <br> This is case-insensitive. <br> CSS / XPATHs may also be used. |

#### Example(s)

##### Drag elements using labels

```javascript
I.goTo("http://jqueryui.com/resources/demos/droppable/default.html")
I.dragTo("drag me", "drop here")
```
Drags the element "drag me" to the target element "drop here".

##### Drag elements using CSS

```javascript
I.goTo("http://jqueryui.com/resources/demos/droppable/default.html")
I.dragTo("#draggable", "#droppable")
```
Drags the element with the ID "draggable" to the target element with the ID "droppable".

---

##`I.dragBy`

Drags an element directionally by (x,y) pixels right and down.

#### Usage
```javascript
I.dragBy(element, x, y);
```

##### Parameters

| Parameter | Type | Remarks|
|----------|------|--------|
| element | string | Keyword to identify the element to drag. <br> This is case-insensitive. <br> CSS / XPATHs may also be used. |
| x | number | Number of pixels to drag right. Use negative numbers to drag left instead. |
| y | number | Number of pixels to drag down. Use negative numbers to drag up instead. |

#### Example(s)

```javascript
I.goTo("http://jqueryui.com/resources/demos/droppable/default.html")
I.dragBy("drag me", 150, 75)
```
Drags the element "drag me" 150 pixels right, and 75 pixels down.

---

##`I.dragUp`

Drags an element up by a given number of pixels

#### Usage
```javascript
I.dragUp(element, y);
```

##### Parameters

| Parameter | Type | Remarks|
|----------|------|--------|
| element | string | Keyword to identify the element to drag. <br> This is case-insensitive. <br> CSS / XPATHs may also be used. |
| y | number | Number of pixels to drag up. |

#### Example(s)

```javascript
I.goTo("http://jqueryui.com/resources/demos/droppable/default.html")
I.dragUp("drag me", 10)
```
Drags the element "drag me" 10 pixels up.

---

##`I.dragDown`

Drags an element down by a given number of pixels

#### Usage
```javascript
I.dragDown(element, y);
```

##### Parameters

| Parameter | Type | Remarks|
|----------|------|--------|
| element | string | Keyword to identify the element to drag. <br> This is case-insensitive. <br> CSS / XPATHs may also be used. |
| y | number | Number of pixels to drag down. |

#### Example(s)

```javascript
I.goTo("http://jqueryui.com/resources/demos/droppable/default.html")
I.dragDown("drag me", 10)
```
Drags the element "drag me" 10 pixels down.

---

##`I.dragLeft`

Drags an element left by a given number of pixels

#### Usage
```javascript
I.dragLeft(element, x);
```

##### Parameters

| Parameter | Type | Remarks|
|----------|------|--------|
| element | string | Keyword to identify the element to drag. <br> This is case-insensitive. <br> CSS / XPATHs may also be used. |
| x | number | Number of pixels to drag left. |

#### Example(s)

```javascript
I.goTo("http://jqueryui.com/resources/demos/droppable/default.html")
I.dragLeft("drag me", 10)
```
Drags the element "drag me" 10 pixels left.

---

##`I.dragRight`

Drags an element right by a given number of pixels

#### Usage
```javascript
I.dragRight(element, x);
```

##### Parameters

| Parameter | Type | Remarks|
|----------|------|--------|
| element | string | Keyword to identify the element to drag. <br> This is case-insensitive. <br> CSS / XPATHs may also be used. |
| x | number | Number of pixels to drag right. |

#### Example(s)

```javascript
I.goTo("http://jqueryui.com/resources/demos/droppable/default.html")
I.dragRight("drag me", 10)
```
Drags the element "drag me" 10 pixels right.

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

##`I.scrollUp`

Scrolls the page up by a given number of pixels.

#### Usage
```javascript
I.scrollUp(y);
```

##### Parameters

| Parameter | Type | Remarks|
|----------|------|--------|
| y | number | Number of pixels to scroll up by. |

#### Example(s)

```javascript
I.scrollUp(50);
```
Scrolls the page 50 pixels up.

---

##`I.scrollDown`

Scrolls the page down by a given number of pixels.

#### Usage
```javascript
I.scrollDown(y);
```

##### Parameters

| Parameter | Type | Remarks|
|----------|------|--------|
| y | number | Number of pixels to scroll down by. |

#### Example(s)

```javascript
I.scrollDown(50);
```
Scrolls the page 50 pixels down.

---

##`I.scrollLeft`

Scrolls the page left by a given number of pixels.

#### Usage
```javascript
I.scrollLeft(x);
```

##### Parameters

| Parameter | Type | Remarks|
|----------|------|--------|
| x | number | Number of pixels to scroll left by. |

#### Example(s)

```javascript
I.scrollLeft(50);
```
Scrolls the page 50 pixels left.

---

##`I.scrollRight`

Scrolls the page right by a given number of pixels.

#### Usage
```javascript
I.scrollRight(x);
```

##### Parameters

| Parameter | Type | Remarks|
|----------|------|--------|
| x | number | Number of pixels to scroll right by. |

#### Example(s)

```javascript
I.scrollRight(50);
```
Scrolls the page 50 pixels right.

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
