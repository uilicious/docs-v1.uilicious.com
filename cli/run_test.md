# Running a test

Use the `run` command to run a script.
```bash
uilicious-cli -u <username> -p <password> run <project_name> <script_path>
```
#### Example(s)
 
In this project, called "Little Pet Store", we have created these scripts:
```
-- Little Pet Store
   |-- profile
       |-- change name
       |--  ...
   |-- login
   |-- ... 
```

You can test the `login` script from the command line like this:
```bash
uilicious-cli -u john -p supersecretpassword run "Little Pet Store" "login"
```

You can test the `profile/change name` script from the command line like this:
```bash
uilicious-cli -u john -p supersecretpassword run "Little Pet Store" "profile/change name"
```
## Running a test with passing data object from command line
Using the CLI tool chain it is possible to pass data parameters to the test script and the test will be executed using those parameters. <br>

use the following command to pass the data parameter

```bash
uilicious-cli -u <username> -p <password> run <project_name> <script_path> --dataObject <json_data_object>
```
It is also possible to pass a file containing the dataObject and that command would be as bellow :

```bash
uilicious-cli -u john -p supersecretpassword run "Little <project_name> <script_path> --dataFile <data_object_file_location>
```

#### Example(s)
Let's say you have the test script as bellow : <br>
`I.goTo(DATA.nameOfParam || "https://www.google.com");` <br>
`I.see("google");` <br>
So, if you want to pass data parameter just replace `nameOfParam` with the parameter name you are passing from the CLI toolchain. <br>
The command is bellow :
```bash
uilicious-cli -u john -p supersecretpassword run "Little Pet Store" "login" --dataObject '{"nameOfParam":"https://www.example-url.com"}'
```
If you want to specify a file containing the dataObject the command will be as bellow :

```bash
uilicious-cli -u john -p supersecretpassword run "Little Pet Store" "login" --dataFile /home/user/tests/name_of_data_object_file.json
```

## Running a test against local development environment

Uilicious CLI tool chain promises to make your UI testing much easier even if you are in local development environment. No additional testing server is required to set up in order to test your project UI.
This CLI tool chain comes with a powerful feature that can create a secure introspectable tunnels to the localhost and the test will be run against that public url. The entire process is handled by CLI Tool Chain , all you need to do is follow the bellow command:

use the following optional commands to fits your testing needs `--ngrokPort` and `--ngrokParam`
```bash
uilicious-cli -u <username> -p <password> run <project_name> <script_path> --ngrokPort <localhost_port> --ngrokParam <DATA_object_url_property>
```
`--ngrokPort`  localhost port number where the project is running <br>
`--ngrokParam` is the `DATA` object property that to be overridden

#### Example(s)
Let's say you have the test script as bellow : <br>
`I.goTo(DATA.url || "https://www.google.com");` <br>
`I.see("google");`

Now you can pass value for `DATA.url` as bellow :

```bash
uilicious-cli -u john -p supersecretpassword run "Little Pet Store" "login" --ngrokPort 8080 --ngrokParam 'url'
```
##### More example 
It is also possible to use both `DATA` object and `NGROK` together in that case `--dataObject` url parameter will be overridden by `NGROK`

```bash
uilicious-cli -u john -p supersecretpassword run "Little Pet Store" "login" --dataObject '{"url":"https://www.example-ngrok-url.com"}' --ngrokPort 8080 --ngrokParam 'url'
```