# Generate sample data

## List of commands

| Command | Description|
|---------|------------|
| [`SAMPLE.id`](#sampleid) | Generates a random string useful for IDs and passwords |

## `SAMPLE.id`

Generates a random string useful for IDs and password.

> The base58 character set is used to generate the string. This avoids the use of similar characters like the capital letter "O" and the number "0" to avoid confusion when reading it.

#### Usage
```javascript
SAMPLE.id(length)
```

##### Parameters

| Parameter | Type | Remarks|
|----------|------|--------|
| length | integer | Length of the string to generate |

#### Example
```javascript
var password = SAMPLE.id(12)
I.fill("Password", password)
```
Generates a 12-character long random base58 string as the password to be used as input data for the "Password" field.
