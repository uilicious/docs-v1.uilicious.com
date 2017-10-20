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
