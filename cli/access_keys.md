# Access Keys

An access key is a randomly generated string that you can use as for authentication instead of your username and password when using the CLI.

# Where's my access key?

You can view and generate your access key over here:  

[User Profile Dashboard > Access Keys](https://user.uilicious.com/profile/accessKeys)

# Usage

Use the `--key` option to set your access key.

```bash
    # Running a test script
    $ uilicious-cli --key <your-api-key> run "Welcome" "5. When a test fails"

    # Uploading your files to project
    $ uilicious-cli --key <your-api-key> upload <Project Name> <location of your directory>

    # Downloading your project tests
    $ uilicious-cli --key <your-api-key> download <Project Name> <location to download to>

    # Testing with ngrok overwrite data object
    $ uilicious-cli --key <your-api-key> run <Project Name> <Test Script Name> --ngrokPort 8080 --ngrokParam 'url' --dataObject '{"url":"<your url>"}' 
```

# Revoking your access key

You can go to your dashboard to regenerate your access key anytime. This will revoke the old access key.


