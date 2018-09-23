# Assertion commands

These are commands to assert if the elements on the page is in a expected state.

If the assertion fail, the command results in an error.

## List of commands

| Command | Description|
|---------|------------|
| [`I.see`](#isee) |  Assert that an text or element is visible |
| [`I.dontSee`](#idontsee) |  Assert that an text or element is NOT visible |
| [`I.count`](#icount) |  Assert the number of occurances for a text or element |

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
| target | string | Text or element to find |

#### Example(s)

```javascript
I.see("Welcome back, Bruce");
```
Asserts that the text "Welcome back, Bruce" is seen on the page.

---

## `I.dontSee`

Assert that an text or element is **NOT** visible

> Ignores casing and white-spaces. This behavior is not configurable at the moment.

#### Usage

```javascript
I.dontSee(target)
```
##### Parameters
| Parameter | Type | Remarks|
|-----------|------|--------|
| target | string | Text or element to find |

---

## `I.count`

Assert the number of occurances for a text or element

Aliases: `I.seeCount`

> Ignores casing and white-spaces. This behavior is not configurable at the moment.

#### Usage

```javascript
I.count(target, n)
```
##### Parameters
| Parameter | Type | Remarks|
|-----------|------|--------|
| target | string | Text or element to find |
| n | number | Number of occurance expected |

#### Example(s)

```javascript
I.count("Add to cart", 20);
```
Asserts that there's 20 occurances of the text "Add to cart".

```javascript
I.count(".product", 20);
```
Asserts that there's 20 occurances of the element with the "product" CSS class.



