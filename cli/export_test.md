# Export Test Script

Use the `export` command to export everything from a project .
```bash
uilicious-cli export <project_name> <save_to_local_directory> -u <username> -p <password>
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

To export all test scripts including folders from this project, the command line would be like this:
```bash
uilicious-cli -u john -p supersecretpassword export "Little Pet Store" "/home/user/testScripts/"
```
Once you run the following command, go to `/home/user/testScripts/` and you will find the exported test scripts as shown above.

#### Verbosity

If you want to see the export details you can enable the `verbose` mode using :

```bash
uilicious-cli export "Little Pet Store" "/home/user/location_to_save_tests/" --verbose -u john -p supersecretpassword
```
