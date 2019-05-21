# Sequence commands

These commands allows you to run other tests.

This helps you to create modular tests that can be easily reused and swapped out.

## List of commands

---

## `TEST.run`

Runs another test.

> WARNING! <br> All tests run in the same scope. This means that variables with the same name in different tests will override each other.

#### Usage
````javascript
TEST.run(path)
````

##### Parameters

| Parameter | Type | Remarks|
|----------|------|--------|
| path | string | Path to the test to run|


#### Example(s)

###### Basic example using absolute path

Let's take this project with this structure for example.
```
|-- login
   |-- login_as_buyer
   |-- login_as_merchant
   |-- ...
|-- change_password
```

The contents of `login/login_as_buyer` is:
```javascript
I.goTo("/login");
I.fill("username", "john");
I.fill("password", "supersecretpassword");
I.click("Login");
```

We can reuse `login/login_as_buyer` in a another test using the `TEST.run` command like this:
```javascript
I.goTo('http://mystore.com');
TEST.run('login/login_as_buyer');
```

Which will result in a test like this when it is executed:
```javascript
I.goTo('http://mystore.com');
I.goTo("/login");
I.fill("username", "john");
I.fill("password", "supersecretpassword");
I.click("Login");
```

###### Using `TEST.run` with relative paths

We can specify tests to run relative to the current test file.

Let's take this project with this structure for example.
```
|-- login
|-- order
   |-- create_and_view_order
   |-- create_order
   |-- view_order
```

From test `order/create_and_view_order` test, we can reference tests with relative paths like this:
```
TEST.run("../login") // use "../" to reference the parent directory
TEST.run("./create_order") // use "./" to referece the current directory
TEST.run("./view_order")
```

---

## `TEST.stop`

Stops the test.

Note that tests will automatically stop when there are no more commands. 

Use this command to manually stop test in specific scenarios with conditions (see example).

#### Usage
````javascript
TEST.stop()
````

#### Example

```javascript
if(I.see$("Out of stock")){ // I.see$ is the same as I.see, but any errors are supressed
   TEST.stop()
}
```
This test will stop if the text "Out of stock" is seen on the page. 

