# Loading test data from file

These commands allow you to load test data from files in supported formats.

## List of commands

| Command | Description|
|---------|------------|
| [`TEST.loadDataFromCsv`](#testloaddatafromcsv) | Loads test data from a .csv file. |
| [`TEST.loadDataFromJson`](#testloaddatafromjson) | Loads test data from a .json file. |

---

## `TEST.loadDataFromCsv`

Loads data from a .csv (comma-separated value) file. 

Returns test data as a json object. Note that nested data is not supported.

The header will be used as the name of each property. The first column will be used as the header by default, but you can change this configuration to read the first row as the header with the `header` option (see below).

You may store multiple datasets in .csv files, but only one can be read at a time, using the `dataset` parameter or option to define to expression to select the dataset.

### Usage
```javascript
TEST.loadDataFromCsv(file)
TEST.loadDataFromCsv(file, dataset)
TEST.loadDataFromCsv(file, options)
```
Returns test data as json object. 

#### Parameters

| Parameter | Type     | Remarks|
|-----------|----------|--------|
| file      | `string` | Relative or absolute path to the file to load |
| dataset   | `string` | Required if file contains more than one datasets. <br> Expression for selecting the dataset to load. e.g. `country=korea` | 
| options   | `object` | Optional. <br> See options below |

#### Options

| Option    | Type     | Remarks|
|-----------|----------|--------|
| header    | `string` | Set to `row` to indicate that the header (which will be used as the property names) is the first row, or set to `col` to indicate that the header is the first column. <br> Defaults to `col`. |
| dataset   | `string` | Required if file contains more than one datasets. <br> Expression for selecting the dataset to load as a property name-value pair. e.g. `country=korea` |
| escape    | `string` | Set the escape character, applies to quote and escape characters inside quoted fields. Defaults to `\"`. |
| delimiter | `string` | Set the delimiter charater. Defaults to `,` (comma). |

### Examples(s)

#### Test data with first column as header

"credentials.csv" file:
```
username, johndoe
password, 'super secret password'
```

Test Script:
```javascript
var user = TEST.loadDataFromCsv("credentials.csv")
// user = {"username" : "johndoe", "password" : "super secret password"}
I.fill("Username", user.username)
I.fill("password", user.password)
```

#### Test data with first column as row

"credentials.csv" file:
```
username, password
johndoe, 'super secret password'
```

Test Script:
```javascript
var user = TEST.loadDataFromCsv("credentials.csv", {header: "row"})
// user = {"username" : "johndoe", "password" : "super secret password"}
I.fill("Username", user.username)
I.fill("Password", user.password)
```

#### Multiple datasets in a file

"credentials.csv" file:
```
username, john,                    adele
password, 'super secret password', 'hello from the other side'	 
```

Test Script:
```javascript
var adele = TEST.loadDataFromCsv("credentials.csv", "username=adele")
// user = {"username" : "adele", "password" : "hello from the other side"}
I.fill("Username", adele.username)
I.fill("Password", adele.password)

var john = TEST.loadDataFromCsv("credentials.csv", "username=john")
// user = {"username" : "johndoe", "password" : "super secret password"}
I.fill("Username", john.username)
I.fill("Password", john.password)
```

---

## `TEST.loadDataFromJson`

Loads data from a .json (javascript object notation) file. 

Returns the test data as a json object. Nested data structure is supported.

### Usage

```javascript
TEST.loadDataFromJson(file)
```
Returns the test data as a json object.

#### Parameters(s)

| Parameter | Type     | Remarks|
|-----------|----------|--------|
| file      | `string` | Relative or absolute path to the file to load |

### Examples(s)

"credentials.json" file:
```json
{
	"john": {
		"username": "johndoe", 
		"password": "supersecretpassword", 
	},
	"adele": {
		"username": "adele", 
		"password": "hello from the other side", 
	}
}
```

Test Script:
```javascript
var users = TEST.loadDataFromJson("credentials.json")
var john = users.john
I.fill("Username", john.username)
I.fill("Password", john.password)
```

