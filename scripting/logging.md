# Logging commands

These commands are for you to write custom logs to the reports with statuses.

## List of commands

| Command | Description |
|---------|-------------|
| [`TEST.log.info`](logging.md#testloginfo) | Log a message to report |
| [`TEST.log.pass`](logging.md#testlogpass) | Log a message to report with `pass` status |
| [`TEST.log.fail`](logging.md#testlogfail) | Log a message to report with `fail` status |

---

## `TEST.log.info`

Log a message to report

#### Usage

```javascript
TEST.log.info(message)
```

##### Parameters

| Parameter | Type | Remarks|
|----------|------|--------|
| message | string | Message to log to report |

#### Example(s)

```javascript
var applicationId = I.getText("#applicationId")
TEST.log.info("Application ID is " + applicationId)
```

Gets the text from the element with the id "applicationId" and prints it to the report.

---

## `TEST.log.pass`

Log a message to report with `pass` status

#### Usage

```javascript
TEST.log.pass(message)
```

##### Parameters

| Parameter | Type | Remarks|
|----------|------|--------|
| message | string | Message to log to report |

#### Example(s)

```javascript
I.click("Clear all")
var numTodos = I.getCount(".todo")
if(numTodos === 0){
	TEST.log.pass("No more todos!")
}
```
Clears all items in a todo list, and count the number of elements with the "todo" class. If there's no more todos, prints "No more todos!" as a passed validation.

---

## `TEST.log.fail`

Log a message to report with `fail` status. This adds to the error count and will result in the overall test failing.

#### Usage

```javascript
TEST.log.fail(message)
```

##### Parameters

| Parameter | Type | Remarks|
|----------|------|--------|
| message | string | Message to log to report |

#### Example(s)

```javascript
if(I.amAt('/notFound')){
	TEST.log.fail("Product page is unavailable")
}
```

If the current url is at `/notFound`, prints "Product page is unavailable" to report as a failed validation.

