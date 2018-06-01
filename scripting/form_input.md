---
search:
    keywords: [
        'forminput',
        'textfield', 'datefield', 'checkbox', 'radiobutton', 'dropdown', 'file',
        'fill', 'select', 'deselect', 'upload'
    ]
---

# Form input commands

These are a list of commands for interacting with standard form input fields.

## List of commands

| Command | Description|
|---------|------------|
| [`I.fill`](#ifill) | Fill a textual field |
| [`I.select`](#iselect) | Select a dropdown option, checkbox, or radio button |
| [`I.deselect`](#ideselect) | Deselect a checkbox |
| [`I.upload`](#iupload) | Upload a file |

---

## `I.fill`

> Short form of `I.fillField` command

Fill a textual field.

This works for date picker fields that accept direct text input.

#### Usage
```javascript
I.fill(field, value)
```

##### Parameters
| Parameter | Type | Remarks|
|----------|------|--------|
| field | string | Keyword to identify the field. <br> The associated label, aria-label, placeholder, adjacent text, and current value can be used to identify a field. <br>  CSS selectors can also be used, *but is not recommended as it makes the tests harder to keep up to date.* |
| value | string | Value to fill into the field |

#### Example(s)

```javascript
I.fill("Email", "bruce@waynecorp.com");
```
This command fills "bruce@waynecorp.com" into the "Email" field.

---

## `I.select`

Select a dropdown, checkbox, or radio button.

> **This -ONLY- works on native HTML5 elements.** <br>
> <br>
> For custom elements, use `I.click` as a fallback. <br>

#### Usage

Select an `option`:
```javascript
I.select(option)
```

Select an `option` in a `list`:
```javascript
I.select(list, option)
```

##### Parameters
| Parameter | Type | Remarks|
|----------|------|--------|
| list | string | (Optional) Keyword to identify the options list |
| option | string | Keyword to identify the option to select |

#### Example(s)

##### Select a dropdown

Here, we will use this "Number" dropdown list for illustration.

{% raw %}
<div style='margin-left: 16px; margin-bottom: 16px'>
    <label for='number-dd'><b>Number</b></label>
    <select id='number-dd' name='number'>
        <option value=''></option>
        <option value='one'>One</option>
        <option value='two'>Two</option>
        <option value='three'>Three</option>
    </select>
</div>
{% endraw %}

###### Script

Specify the `option`;
```javascript
 I.select("Two");
```

Or, specify the `list` and the `option`:
```javascript
I.select("Number", "Two");
```

This selects the option "Two".

##### Select a checkbox

Here, we will use this check box for illustration.

{% raw %}
<div style='margin-left: 16px; margin-bottom: 16px'>
    <label style='margin-left:16px'><input type='checkbox' name="agree"/> I agree to the terms and conditions </label>
</div>
{% endraw %}

###### Script

```javascript
I.select("I agree to the terms and conditions");
```
This selects the checkbox "I agree to the terms and conditions".

##### Select a check box in a checkbox list

Here, we will use this "Color" checkbox list for illustration.

{% raw %}
<div style='margin-left: 16px; margin-bottom: 16px'>
    <b>Color</b>
    <label style='margin-left:16px'><input type='checkbox' name="color"/> Red </label>
    <label style='margin-left:16px'><input type='checkbox' name="color"/> Blue</label>
    <label style='margin-left:16px'><input type='checkbox' name="color"/> Green </label>
</div>
{% endraw %}

###### Script

Specify the `option`;
```javascript
I.select("Red");
```
Or, specify the `list` and the `option`:
```javascript
I.select("Color", "Red");
```

This selects the option "Red".

##### Select a radio button

Here, we will use this "Animal" radio button list for illustration.

{% raw %}
<div style='margin-left: 16px; margin-bottom: 16px'>
    <b>Animal</b>
    <label style='margin-left:16px'><input type='radio' name="animal"/> Cat </label>
    <label style='margin-left:16px'><input type='radio' name="animal"/> Dog</label>
    <label style='margin-left:16px'><input type='radio' name="animal"/> Mouse </label>
</div>
{% endraw %}

###### Script

Specify the `option`;
```javascript
I.select("Cat");
```

Or, specify the `list` and the `option`:
```javascript
I.select("Animal", "Cat");
```

This selects the option "Cat".

---

## `I.deselect`

Deselect a checkbox.

#### Usage
Deselect an `option`:
```javascript
I.deselect(option)
```

Deselect an `option` in a `list`:
```javascript
I.deselect(list, option)
```

##### Parameters
| Parameter | Type | Remarks|
|-----------|------|--------|
| list (optional) | string | Keyword to identify the options list |
| option | string | Keyword to identify the option to deselect |

---

## `I.upload`

Upload a file.

#### Usage
```javascript
I.upload(field, pathToFile)
```

##### Parameters
| Parameter | Type | Remarks|
|-----------|------|--------|
| field | string | Keyword to identify the file upload field |
| pathToFile | string | Path to the file to upload. <br> **Currently, only absolute paths from the project root are supported.** |

#### Example(s)

Here, we will use this "Photo" file upload field for illustration.

{% raw %}
<div style='margin-left: 16px; margin-bottom: 16px'>
    <label>
        <b>Photo</b> <input type="file"/>
    </label>
</div>
{% endraw %}

###### Project structure

> Added the files to upload into your project.

In our project, we have created a 'photos' directory and uploaded 'cat.png' and 'dog.png'.
```
-- [myproject]
   |-- photos
       |-- cat.png
       |-- dog.png
   |-- login_test
   |-- profile_test
```
###### Script
```javascript
I.upload('Photo', 'photos/cat.png');
```
This uploads the "photos/cat.png" to the "Photos" file upload field.
