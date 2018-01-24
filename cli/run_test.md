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
