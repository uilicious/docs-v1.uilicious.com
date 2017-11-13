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
