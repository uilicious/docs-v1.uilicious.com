# Status Code Assertion

These commands allow you to assert the status code of the current page.

## List of commands
| Command | Description|
|---------|------------|
| [`UI.isStatusCode`](#uiisstatuscode) | Asserts that the status code for the current page is a specific status code. |
| [`UI.isNotStatusCode`](#uiisnotstatuscode) | Asserts that the status code for the current page is __NOT__ a specific status code. |
| [`UI.is200`](#uiis200) | Asserts that the status code for the current page is 200 (OK). |
| [`UI.isNot200`](#uisinot200) | Asserts that the status code for the current page is __NOT__ 200 (OK). |
| [`UI.is404`](#usis404) | Asserts that the status code for the current page is 404 (Not Found). |
| [`UI.isNot404`](#uiisnot404) | Asserts that the status code for the current page is __NOT__ 404 (Not Found). |
| [`UI.is500`](#uiis500) | Asserts that the status code for the current page is 500 (Internal Server Error). |
| [`UI.isNot500`](#uiisnot500) | Asserts that the status code for the current page is __NOT__ 500 (Internal Server Error). |

--- 

## `UI.isStatusCode`

Asserts that the status code for the current page is a specific status code.

### Usage

```javascript
UI.isStatusCode(statusCode)
```

#### Parameters

| Parameter | Type | Remarks|
|-----------|------|--------|
| statusCode | number | The status code to expect for the current page |

### Example(s)

```javascript
UI.isStatusCode(403)
```
Validates that the current page returns 403 (Forbidden). 

---

## `UI.isNotStatusCode`

Asserts that the status code for the current page is __NOT__ a specific status code.

### Usage

```javascript
UI.isNotStatusCode(statusCode)
```

#### Parameters

| Parameter | Type | Remarks|
|-----------|------|--------|
| statusCode | number | The status code that is __NOT__ expected for the current page |

### Example(s)

```javascript
UI.isNotStatusCode(500)
```
Validates that the current page does not return 500 (Internal Server Error). 

---

## `UI.is200`

Asserts that the status code for the current page is 200 (OK).

### Usage

```javascript
UI.is200()
```

---

## `UI.isNot200`

Asserts that the status code for the current page is __NOT__ 200 (OK).

### Usage

```javascript
UI.isNot200()
```

---

## `UI.is404`

Asserts that the status code for the current page is 404 (Not Found).

### Usage

```javascript
UI.is404()
```

---

## `UI.isNot404`

Asserts that the status code for the current page is __NOT__ 404 (Not Found).

### Usage

```javascript
UI.isNot404()
```

---

## `UI.is500`

Asserts that the status code for the current page is 500 (Internal Server Error).

### Usage

```javascript
UI.is500()
```

---

## `UI.isNot500`

Asserts that the status code for the current page is __NOT__ 500 (Internal Server Error).

### Usage

```javascript
UI.isNot500()
```

