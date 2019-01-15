# Running a test

Use the `run` command to run a script.

#### Reference

```bash
uilicious-cli run <project_name> <script_path> -u <username> -p <password>
```

#### Usage

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
uilicious-cli run "Little Pet Store" "login" -u john -p supersecretpassword
```

You can test the `profile/change name` script from the command line like this:

```bash
uilicious-cli run "Little Pet Store" "profile/change name" -u john -p supersecretpassword
```

You can see the test run output like this :

```
  _   _   _   _   _          _                       
 | | | | (_) | | (_)   ___  (_)   ___    _   _   ___ 
 | | | | | | | | | |  / __| | |  / _ \  | | | | / __|
 | |_| | | | | | | | | (__  | | | (_) | | |_| | \__ \
  \___/  |_| |_| |_|  \___| |_|  \___/   \__,_| |___/
                                                     
Test executed on: Fri, 2/23/2018, 10:30:31 AM

#
# Uilicious CLI - Runner
# Project Name: Welcome
# Test Path : 1. Welcome
#
# Log In Successful
# Project ID : <project_id>
# Test run ID: <test_run_id>
#

[Step 1 - success]: I go to "https://google.com" - 3.63s
[Step 2 - success]: I fill "Search": "Uilicious" - 2.96s
[Step 3 - success]: I click "uilicious" - 3.90s
[Step 4 - success]: I see "Uilicious Private Limited" - 1.71s

Total time to execute the test : 12.19s

Test successful with no errors.
```



#### Set Browser and Resolution

You can choose the browser and resolution to run the test via CLI.

```bash
uilicious-cli run <project> <script> --browser <browser_name> --height <browser_height> --width <browser_width> -u <username> -p <password>
```

Available browsers : 
* chrome
* firefox
* safari
* edge
* ie11

Example :

To run tests on 'Safari' for example, type:
```bash
uilicious-cli run "Little Pet Store" "login"  --browser safari -u john -p supersecretpassword

```

To choose resolution, type :
```bash
uilicious-cli run "Little Pet Store" "login"  --height 960 --width 1280 -u john -p supersecretpassword
```