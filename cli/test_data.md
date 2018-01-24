# Set test data during runs

#### Reference

Set test data with a json string:
```bash
uilicious-cli run <project_name> <script_path> --dataObject <test_data_as_json_string> -u <username> -p <password>
```

Set test data with a file:
```bash
uilicious-cli run <project_name> <script_path> --dataFile <test_data_file> -u <username> -p <password>
```

#### Usage

You can set the test data for your tests during test runs.

Define your test data variables in the `DATA` object in your tests, for example:
```
I.goTo(DATA.url);
I.fill("Username", DATA.username);
I.fill("Password", DATA.pwd);
I.click("Login");
```

Provide the actual test data as a json string in the `--dataObject` parameter when running test using the CLI:

```bash
uilicious-cli run "Little Pet Store" "Login" --dataObject '{"url":"https://example.com", "username": "bruce", "pwd": "supersecretpassword"}' -u john -p supersecretpassword
```

You can also load the test data from a file.

```
//data-john.json
{
  "url":"https://example.com",
  "username": "john",
  "pwd": "supersecretpassword"
}
```

```bash
uilicious-cli run "Little Pet Store" "Login" --dataFile data-john.json -u john -p supersecretpassword
```
