# Cookies

You may use these commands for setting and asserting cookies.

## List of commands

| Command | Description|
|---------|------------|
| [`UI.COOKIE.set`](#uicookieset) | Set a cookie on the current page |
| [`UI.COOKIE.isSet`](#uicookieisset) | Assert the presence of a cookie |
| [`UI.COOKIE.isEqual`](#uicookieisEqual) | Assert the value of a cookie  |
| [`UI.COOKIE.delete`](#uicookiedelete) | Delete a cookie |
| [`UI.COOKIE.deleteAll`](#uicookiedeleteAll) | Delete all cookies |

## `UI.COOKIE.set`

Sets a cookie on the current page.

### Basic Usage

You can set a cookie on the current page with the cookie `name` and `value` like this.
```javascript
UI.COOKIE.set(name, value)
```

For example:

```javascript
I.goTo("https://google.com")
UI.COOKIE.set("foo", "bar")
```
This sets a cookie named "foo" with the value "bar" on the page "https://google.com".

### Advanced Usage

You can set a cookie by using an `options` object. This lets you set other properties of the cookie.

```javascript
UI.COOKIE.set(options)
```

Here are the available options:

> Not sure what are these options? Learn more about HTTP Cookies from [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies).

| Option | Description| Type | Default value
|---------|------------|-|
| `name` <br> Required| Name of the cookie | `string` | |
| `value` <br> Required | Value of the cookie | `string` | |
| `secure` | Set a Secure cookie. <br> Secure cookies cannot be set on insecure `http:` sites. | `boolean` | `false` |
| `httpOnly` | Set an HttpOnly cookie. | `boolean` | `false` |
| `domain` | Domain to apply the cookie to. <br> Can only be set to domains for the current page. <br> Examples: `example.com`, `support.example.com` | `string` | Domain of the current page|
| `path` | Path to apply the cookie to. | `string` | `\` |
| `maxAge` | Number of seconds until this cookies expires | `boolean` | |
| `expires` | Time when cookie expires. <br> Ignored if `maxAge` is also provided. <br> Example: `Wed, 21 Oct 2015 07:28:00 GMT` | `string` | &nbsp; |

For example:

```javascript
UI.COOKIE.set({name: "foo", value: "bar", "secure": true, "maxAge": 86400 })
```

Sets a Secure cookie "foo" with the value "bar" that expires in 86400 seconds at the current page.

## `UI.COOKIE.isSet`

Assert that a cookie is found on the current page.

This command only asserts the presence of a cookie. To assert the value of cookie, use `UI.COOKIE.isEqual`.

### Usage

```javascript
UI.COOKIE.isSet(name)
```

For example:

```javascript
I.goTo("https://mystore.com/brands")
UI.COOKIE.isSet("foo")
```
Assert that a cookie named "foo" has been found on "https://mystore.com/brands".

Fails if the cookie "foo" is not found.

## `UI.COOKIE.isEqual`

Assert the value of a cookie on the current page.

### Usage

```javascript
UI.COOKIE.isEqual(name, value)
```

For example:

```javascript
I.goTo("https://mystore.com/brands")
UI.COOKIE.isEqual("foo", "bar")
```

Assert that there is a cookie name "foo" with the value "bar" on "https://mystore.com/brands".

Fails if the cookie "foo" is not found, or if the value is not "bar".

### Usage

## `UI.COOKIE.delete`

Delete a cookie on the current page

### Usage

```javascript
UI.COOKIE.delete(name)
```

For example:

```javascript
UI.COOKIE.delete("foo")
```

Deletes the cookie named "foo" from the current page.

## `UI.COOKIE.deleteAll`

Delete all cookies found on the current page

### Usage

```javascript
UI.COOKIE.deleteAll()
```

