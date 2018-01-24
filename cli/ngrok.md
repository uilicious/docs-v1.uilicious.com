# Testing in localhost

You can run tests while developing in localhost using the CLI.

The CLI creates a secure introspectable tunnel to your app on localhost using ngrok, temporarily exposing your app on a random public URL on ngrok, so that tests can be ran against the public URL.

#### Reference
```bash
uilicious-cli run <project_name> <script_path> --ngrokPort <localhost_port> --ngrokParam <DATA_object_url_property> -u <username> -p <password>
```

`--ngrokPort` port where your application is being served on localhost

`--ngrokParam` the `DATA` object property to be replaced with the ngrok public url

#### Usage

Let's say you have a test such as below :
```javascript
I.goTo(DATA.url || "https://www.google.com");
I.fill("Username", "bruce");
// and more commands...
```

And you are running your application on port `8080` on localhost.


Run the CLI like using the `--ngrokPort` and `ngrokParam` like this:
```bash
uilicious-cli run "Little Pet Store" "Login" --ngrokPort 8080 --ngrokParam 'url'  -u john -p supersecretpassword
```

This exposes your application running on port `8080`, and replaces the `DATA.url` variable in your tests with the ngrok public url.

#### Using with `dataObject`
You can use the `dataObject` parameter and `ngrokParam` together.

The `ngrokParam` will override the parameter in `dataObject`.

```bash
uilicious-cli run "Little Pet Store" "Login" --ngrokPort 8080 --ngrokParam 'url' --dataObject '{"url":"https://www.example.com"}' -u john -p supersecretpassword
```

In this case, the value of `--ngrokParam` will override the `url` variable in `--dataObject`.
