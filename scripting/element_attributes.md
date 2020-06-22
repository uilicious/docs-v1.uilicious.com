# Element attributes commands

These commands allow you to get and assert attributes on an element, including CSS classes.

## List of commands

| Command | Description |
|---------|-------------|
| [`UI.getAttribute`](#uigetattribute) | Get the value of an attribute on an element. |
| [`UI.hasAttribute`](#uihasattribute) | Assert the presence or the expected value of an attribute on an element. |
| [`UI.doesNotHaveAttribute`](#uidoesnothaveattribute) | Assert the absence of an attribute on an element, or that the value of an attribute is not equals to a given string. |
| [`UI.hasClass`](#uihasclass) | Assert the presence of a CSS class on an element. |
| [`UI.doesNotHaveClass`](#uidoesnothaveclass) | Assert the absence of a CSS class on an element. |

## `UI.getAttribute`

Get the value of an attribute on an element. 

Returns `null` if the attribute is not found on the element.

### Usage

```javascript
UI.getAttribute(target, attribute)
```

| Parameter | Type | Remarks |
|-----------|------|---------|
| target | string | Expression to target an element. This can be a text, CSS selector, or XPATH selector. |
| attribute | string | Name of the attribute to get the value of. |

### Example(s)

```javascript
let signUpLink = UI.getAttribute("Register a new account", "href")
if(signUpLink !== null) I.goTo(signUpLink + "?promo=summersale")
```

Extract the `href` attribute from "Register a new account" element into a variable named `signUpLink`, which can then be used subsequently in the test. In this exmaple, the text of the element (assumed to be an &lt;a&gt; element) is use to target the element, but you can also use a CSS selector or an XPATH selector.

## `UI.hasAttribute`

Assert the presense or the expected value of an attribute on an element.

### Usage

```javascript
// assert the presense of the attribute on the target element
UI.hasAttribute(target, attribute)
// assert the value of the attribute on the target element
UI.hasAttribute(target, attribute, value)
```

| Parameter | Type | Remarks |
|-----------|------|---------|
| target | string | Expression to target an element. This can be a text, CSS selector, or XPATH selector. |
| attribute | string | Name of the attribute. |
| value | string | (Optional) Value expected for the attribute. Case-insensitive. If not provided, this command will simply assert that the attribute exists on the element. |

### Example(s)

#### Validate that an element should be disabled

```javascript
I.goTo("https://mystore.com")
I.click("Login") // <- go to login page

// leave the username and password fields blank
I.fill("Username", "")
I.fill("Password", "")

// assert that the #login-button is disabled
UI.hasAttribute("#login-button", "disabled") 
```

In this example, we can use the `UI.hasAttribute` to test if the `#login-button` element is disabled, when the Username and Password fields are empty.

#### Validate that the element attribute should have a specific value

```javascript
I.goTo("https://mystore.com")
UI.hasAttribute("#summer-sale-banner", "campaign-id", "SUMMERSALE2020")
```

This test will pass the `#summer-sale-banner` element exists on the page, and has the `campaign-id` attribute, with the value of `SUMMERSALE2020`.

## `UI.doesNotHaveAttribute`

Assert the absense of an attribute on an element, or that the value of an attribute is not equals a given string.

### Usage

```javascript
// Assert that the element does not have an attribute
UI.doesNotHaveAttribute(target, attribute)
// Assert that the element does not have an attribute with an given value
UI.doesNotHaveAttribute(target, attribute, value)
```

| Parameter | Type | Remarks |
|-----------|------|---------|
| target | string | Expression to target an element. This can be a text, CSS selector, or XPATH selector. |
| attribute | string | Name of the attribute. |
| value | string | (Optional) Value that the attribute should not be equal to. Case-insensitive. If not provided, this command will simply assert that the attribute does not exist on the element. |

### Example(s)

#### Validate that an element should not be disabled

```javascript
I.goTo("https://mystore.com")
I.click("Login") // <- go to login page

// assert that the #login-button is disabled initially
UI.hasAttribute("#login-button", "disabled")

// fill the username and password fields
I.fill("Username", "john")
I.fill("Password", "supersecretpassword")

// assert that the #login-button is no longer disabled
UI.doesNotHaveAttribute("#login-button", "disabled")
```

In this example, we can use the `UI.hasAttribute` to test if the `#login-button` element is not disabled, when the Username and Password fields are filled.

## `UI.hasClass`

Assert the presence of a CSS class on an element.

### Usage

```javascript
UI.hasClass(target, cssClass)
```

| Parameter | Type | Remarks |
|-----------|------|---------|
| target | string | Expression to target an element. This can be a text, CSS selector, or XPATH selector. |
| cssClass | string | CSS class that should exist on the element. |

### Example(s)

```javascript
I.goTo("https://mystore.com")
I.click("Login") // <- go to login page

// fill in the username, and wrong password
I.fill("Username", "john")
I.fill("Password", "WRONGPASSWORD") 
I.click("Login")

// assert that the #password-field-group has the "has-error" css class
UI.hasClass("#password-field-group", "has-error")
```

In this example, we can use `UI.hasClass` to check if the `has-error` CSS class is applied to an form field when the form is submitted with invalid values, like an invalid password.

## `UI.doesNotHaveClass`

Assert the absence of a CSS class on an element.

### Usage

```javascript
UI.doesNotHaveClass(target, cssClass)
```

| Parameter | Type | Remarks |
|-----------|------|---------|
| target | string | Expression to target an element. This can be a text, CSS selector, or XPATH selector. |
| cssClass | string | CSS class that should not exist on the element. |
