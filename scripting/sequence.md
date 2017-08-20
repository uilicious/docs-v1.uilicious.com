# Sequence commands

These commands allows you to run other tests.

This helps you to create modular tests that can be easily reused and swapped out.

## List of commands

---

## `TEST.run`

Runs another test.

#### Usage
````javascript
TEST.run(path)
````

##### Parameters

| Parameter | Type | Remarks|
|----------|------|--------|
| path | string | Path to the test to run |


#### Example(s)

###### Project structure
```
-- [myproject]
   |-- login
       |-- login_as_buyer
       |-- login_as_merchant
   |-- add_to_cart
   |-- checkout
```
###### Script
```javascript
I.goTo('http://mystore.com');
TEST.run('login/login_as_buyer');
TEST.run('add_to_cart');
TEST.run('checkout');

```

