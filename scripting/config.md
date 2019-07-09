# Configuration

These configurations allow you to query and set the behaviour of the test engine.

## Read-only configurations

| Configuration | Type | Remarks | 
|---------------|------|---------|
| `TEST.browser` | string | The browser that you have set for the test run, e.g. `chrome`, `firefox`, `safari`, `edge`, `ie11` |
| `TEST.width` | number | The resolution width that you have set for the test run. |
| `TEST.height` | number | The resolution height that you have set for the test run. |

## Editable configurations

You can set these configurations any time during a test run.

| Configuration | Type | Remarks | 
|---------------|------|---------|
| `TEST.commandTimeout` | number | Default: `15` <br> Number of seconds before a command timeouts and results in an error. |
| `TEST.autoScreenshot` | boolean | Default: `true` <br> If set to `true`, take screenshots automatically during test runs. |
| `TEST.autoSwitchTab` | boolean | Default: `true` <br> If set to `true`, automatically switch tab when a new tab is open during `I.click`. |