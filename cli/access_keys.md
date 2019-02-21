# Access Keys
This documentation aims to help you understand what are these keys used for.

To create and manage your Access Keys, go to your [User Profile Dashboard > Manage Access](https://user.uilicious.com/profile/accessKeys).

### What is a Access Key?
The API key is the substitution of your actual login credentials. Rather than using your username and password, Uilicious is able to authenticate you via your account's API key.

Every account has its own API key that can be reset at any point of time.

### Why do we need it?
A common usage of the API key would be using Uilicious CLI. In this manner, you will be able to execute the test scripts and viewing the result without having the risk of exposing your actual login credentials. 

### Where to get your Access key?
Go to [User Profile Dashboard > Access Keys](https://user.uilicious.com/profile/accessKeys)

### How do we use Access key?
When you are attempting to run your project's test script in the CLI tool, supply the API key as part of the parameters in the command.

```bash
    # Running a test script
    $ uilicious-cli --key <your-api-key> run Welcome "5. When a test fails"
```
