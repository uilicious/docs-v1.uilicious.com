# Configuration

These configurations allow you to change the behaviour of the test engine.

You can set these configurations any time during a test run.

## List of configurations

| Configuration | Type | Remarks | 
|---------------|------|---------|
| `TEST.commandTimeout` | number | Default: `15` <br> Number of seconds before a command timeouts and results in an error. |
| `TEST.autoScreenshot` | boolean | Default: `true` <br> If set to `true`, take screenshots automatically during test runs. |
| `TEST.autoSwitchTab` | boolean | Default: `true` <br> If set to `true`, automatically switch tab when a new tab is open during `I.click`. |