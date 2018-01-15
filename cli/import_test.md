# Import Test Script(s)

Use the `import` command to import a local folder consists of test script(s) under the root path of a project .
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

Now we will import a folder consists of 2 test scripts called `test_1` and `test_2` by using the command line like this:
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
   |-- test_1
   |-- test_2
   |-- ... 
```

#### Verbose

If you want to see the import details you can enable the verbose mode using :

```bash
uilicious-cli -u john -p supersecretpassword import "Little Pet Store" "/home/user/name_of_test_directory/" --verbose
```

#### Overwrite

By default CLI toolchain will not overwrite your test script while importing. If you want to overwrite the test script you can do so using the following command

```bash
uilicious-cli -u john -p supersecretpassword import "Little Pet Store" "/home/user/name_of_test_directory/" --overwrite "y"
```