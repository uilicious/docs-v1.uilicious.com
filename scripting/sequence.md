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
| path | string | Path to the test to run. <br> **Currently, only absolute paths from the project root are supported.** |


#### Example(s)

###### Project structure
In this project, we have created these test scripts:
```
-- [myproject]
   |-- login
       |-- login_as_buyer
       |-- login_as_merchant
       |-- ...
   |-- change_name
   |-- ...
```
###### Scripts

```javascript
// 'login/login_as_buyer' script
I.goTo("/login");
I.fill("username", "john");
I.fill("password", "supersecretpassword");
I.click("Login");
```

```javascript
// 'change_name' script
I.goTo("/profile");
I.fill("Name", "John Silver");
I.click("Update");
```

###### Using `TEST.run`

We can run other test scripts using the `TEST.run` command like so:
```javascript
I.goTo('http://mystore.com');
TEST.run('login/login_as_buyer');
TEST.run('change_password');
```

These are the commands that will be ran:
```javascript
I.goTo('http://mystore.com');

// TEST.run('login/login_as_buyer');
I.goTo("/login");
I.fill("username", "john");
I.fill("password", "supersecretpassword");
I.click("Login");

// TEST.run('change_password');
I.goTo("/profile");
I.fill("Name", "John Silver");
I.click("Update");
```

