# Summary

## Introduction

* [What's UI-licious?](README.md)

----

## Quick Reference

* [List of commands](scripting/list_of_commands.md)
* [Configuration](scripting/config.md)

----

## Basic Test Commands

* [The essentials](scripting/basic_commands.md)
* [Page navigation](scripting/navigation.md)
    * [I.goTo](scripting/navigation.md#igoto)
    * [I.amAt](scripting/navigation.md#iamat)
    * [I.refreshPage](scripting/navigation.md#irefreshpage)
    * [I.switchTab](scripting/navigation.md#iswitchtab)
* [Form actions](scripting/form_input.md)
    * [I.fill](scripting/form_input.md#ifill)
    * [I.filled](scripting/form_input.md#ifilled)
    * [I.select](scripting/form_input.md#iselect)
    * [I.selected](scripting/form_input.md#iselected)
    * [I.deselect](scripting/form_input.md#ideselect)
    * [I.deselected](scripting/form_input.md#ideselected)
    * [I.upload](scripting/form_input.md#iupload)
* [Mouse actions](scripting/mouse.md)
    * [I.click](scripting/mouse.md#iclick--idoubleclick)
    * [I.doubleClick](scripting/mouse.md#iclick--idoubleclick)
    * [I.scrollBy](scripting/mouse.md#iscrollby)
    * [I.scrollUp](scripting/mouse.md#iscrollup)
    * [I.scrollDown](scripting/mouse.md#iscrolldown)
    * [I.scrollLeft](scripting/mouse.md#iscrollleft)
    * [I.scrollRight](scripting/mouse.md#iscrollright)
    * [I.scrollTo](scripting/mouse.md#iscrollto)
    * [I.scrollToTop](scripting/mouse.md#iscrolltotop)
    * [I.scrollToBottom](scripting/mouse.md#iscrolltobottom)
* [Keyboard actions](scripting/keyboard.md)
* [Validate page content](scripting/assertion.md)
    * [I.see](scripting/assertion.md#isee)
    * [I.dontSee](scripting/assertion.md#idontsee)
    * [I.count](scripting/assertion.md#icount)
* [Alerts](scripting/alerts.md)
    * [I.seeAlert](scripting/alerts.md#iseealert)
    * [I.acceptAlert](scripting/alerts.md#iacceptalert)
    * [I.cancelAlert](scripting/alerts.md#icancelalert)
    * [I.fillAlert](scripting/alerts.md#ifillalert)
* [Chaining tests](scripting/sequence.md)
    * [TEST.run](scripting/sequence.md#testrun)
* [Generate sample data](scripting/sample.md)
    * [SAMPLE.id](scripting/sample.md#sampleid)
* [Utility](scripting/utility.md)
    * [I.wait](scripting/utility.md#iwait)
* [Take screenshots](scripting/screenshot.md)
    * [`TEST.takeFullScreenshot`](scripting/screenshot.md#testtakefullscreenshot)


## Advanced Test Commands

* [Advanced Commands](scripting/advanced_commands.md)
* [Using Javascript](scripting/javascript.md)
* [Extract page content](scripting/extract.md)
    * [I.getCount](scripting/extract.md#igetcount)
    * [I.getText](scripting/extract.md#igettext)
    * [I.getValue](scripting/extract.md#igetvalue)
* [Limiting test scope](scripting/ui_context.md)
* [Executing Javascript on the Browser](scripting/executing-javascript.md)
    * [UI.execute](scripting/executing-javascript.md#uiexecute)
* [Cookies](scripting/cookies.md)
    * [UI.COOKIE.set](scripting/cookies.md#uicookieset)
    * [UI.COOKIE.isSet](scripting/cookies.md#uicookieisset)
    * [UI.COOKIE.isEqual](scripting/cookies.md#uicookieisequal)
    * [UI.COOKIE.delete](scripting/cookies.md#uicookiedelete)
    * [UI.COOKIE.deleteAll](scripting/cookies.md#uicookiedeleteall)
* [Write custom logs](scripting/logging.md)
    * [`TEST.log.info`](scripting/logging.md#testloginfo)
    * [`TEST.log.pass`](scripting/logging.md#testlogpass)
    * [`TEST.log.fail`](scripting/logging.md#testlogfail)

----

## Using the CLI

* [Introduction](cli/intro.md#command-line-interface)
* [Installation](cli/installation.md)
* [Running a test](cli/run_test.md)
* [Testing on localhost](cli/ngrok.md)
* [Set test data during test runs](cli/test_data.md)
* [Import test script](cli/import_test.md)
* [Export test script](cli/export_test.md)

---

## Roadmap / Changes

* [Roadmap](https://trello.com/b/G80eoZU3)
* [Release Notes](release_notes.md)
  * [Studio / Test Engine](release_notes.md#studio--test-engine)
  * [Command Line Interface](release_notes.md#command-line-interface)

