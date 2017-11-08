---
search:
    keywords: [
        'cli', 'command line interface',
    ]
---
# Command Line Interface

UI-licious Command Line Interface (CLI) is a unified tool to manage your UI-licious script. 

This allows you to further automate your testing process and integrate with continuous integration tools, such as Jenkins, Travis CI, Circle CI, etc.

#### Installation

```bash
npm install uilicious-cli -g
```

#### Usage

```bash
uilicious-cli [options] <command> [parameters]
```

#### List commands

Use the `--help` option to list all available commands
```bash
uilicious-cli --help
```

## Running a test

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
## Import Test Script(s)

Use the `import` command to import a local folder consists of test script(s) under a project .
```bash
uilicious-cli -u <username> -p <password> import <project_name> <local_test_directory>
```
#### Example(s)
 
In this project, called "Little Pet Store" have these scripts:
```
-- Little Pet Store
   |-- profile
       |-- change name
       |--  ...
   |-- login
   |-- ... 
```

Now we will import a folder consists test scripts from the command line like this:
```bash
uilicious-cli -u john -p supersecretpassword import "Little Pet Store" "/home/user/name_of_test_directory/"
```
Once you run the following command, go to the project folder and you will see the project structure as bellow :
```
-- Little Pet Store
   |-- profile
       |-- change name
       |--  ...
   |-- login
   |-- name_of_test_directory
   |-- ... 
```

## Export Test Script

Use the `export` command to export test script(s) of a project .
```bash
uilicious-cli -u <username> -p <password> export <project_name> <script_folder> <save_to_local_directory>
```
#### Example(s)
 
In this project, called "Little Pet Store" have these scripts:
```
-- Little Pet Store
   |-- profile
       |-- change name
       |--  ...
   |-- login
   |-- ... 
```

To export test scripts under the profile folder, the command line would be like this:
```bash
uilicious-cli -u john -p supersecretpassword export "Little Pet Store" "profile" "/home/user/testScripts/"
```
Once you run the following command, go to `/home/user/testScripts/` and you will find the exported test scripts .
