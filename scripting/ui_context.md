# Limiting test scope

These commands can be used to limit the scope of the test

## List of commands

| Command | Description|
|---------|------------|
| [`UI.context`](#uicontext) | Limit the test to run on specific parts of a page |

---

## UI.context

Limit the test to specific parts of a page.

#### Usage
```javascript
UI.context(context, test)
```

##### Parameters
| Parameter | Type | Remarks |
|-----------|------|---------|
| context | string | Limit the test to specific parts of a page. Specify a CSS selector or XPATH to specify the element to limit the test to. If the CSS selector or XPATH matches multiple elements, the scope of the test will be set to all matches. |
| test | function | Test to run using the context |

##### Example

Take this page for example, it has two identical forms to login and create account.
{% raw %}
<p data-height="400" data-theme-id="0" data-slug-hash="gjoJoN" data-default-tab="html,result" data-user="shiling" data-pen-title="gjoJoN" class="codepen">See the Pen <a href="https://codepen.io/shiling/pen/gjoJoN/">gjoJoN</a> by shiling (<a href="https://codepen.io/shiling">@shiling</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
{% endraw %}

To limit the test to the login form, we can set the context using a CSS selector on the ID of the login form like this:
```javascript
I.see("Please log in ") // this runs on the entire page
UI.context("#login-form", function(){ // the following commands runs on the login form on
  I.fill("username", "hello@uilicious.com")
  I.fill("password", "password")
  I.click("login")
})
```

