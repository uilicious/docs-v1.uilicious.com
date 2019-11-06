# Summary

## Introduction

* [What's UI-licious?](README.md)

----

## Quick Reference

* [List of commands](scripting/list_of_commands.md)
* [Configuration](scripting/config.md)
* [Basic Webstudio Navigation](administration/web-studio-navigation.md)

----

## Basic Test Commands

* [The essentials](scripting/basic_commands.md)
* [Page navigation](scripting/navigation.md)
    * [I.goTo](scripting/navigation.md#igoto)
    * [I.amAt](scripting/navigation.md#iamat)
    * [I.refreshPage](scripting/navigation.md#irefreshpage)
    * [I.switchTab](scripting/navigation.md#iswitchtab)
    * [I.closeTab](scripting/navigation.md#iclosetab)
    * [Status code assertions](scripting/http_status_code_assertion.md)
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
    * [I.dragTo](scripting/mouse.md#idragto)
    * [I.dragBy](scripting/mouse.md#idragby)
    * [I.dragUp](scripting/mouse.md#idragup)
    * [I.dragDown](scripting/mouse.md#idragdown)
    * [I.dragLeft](scripting/mouse.md#idragleft)
    * [I.dragRight](scripting/mouse.md#idragright)
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
* [Controlling test flows](scripting/sequence.md)
    * [TEST.run](scripting/sequence.md#testrun)
    * [TEST.stop](scripting/sequence.md#teststop)
* [Utility](scripting/utility.md)
    * [I.wait](scripting/utility.md#iwait)

## Advanced Test Commands

* [Advanced Commands](scripting/advanced_commands.md)
* [Loops and conditionals with Javascript](scripting/javascript.md)
* [Extract page content](scripting/extract.md)
    * [I.getCount](scripting/extract.md#igetcount)
    * [I.getText](scripting/extract.md#igettext)
    * [I.getValue](scripting/extract.md#igetvalue)
* [Limiting test scope & handling iframes](scripting/ui_context.md)
* [Executing Javascript on the Browser](scripting/executing-javascript.md)
    * [UI.execute](scripting/executing-javascript.md#uiexecute)
* [Cookies](scripting/cookies.md)
    * [UI.COOKIE.set](scripting/cookies.md#uicookieset)
    * [UI.COOKIE.isSet](scripting/cookies.md#uicookieisset)
    * [UI.COOKIE.isEqual](scripting/cookies.md#uicookieisequal)
    * [UI.COOKIE.delete](scripting/cookies.md#uicookiedelete)
    * [UI.COOKIE.deleteAll](scripting/cookies.md#uicookiedeleteall)

## Test Data Management

* [Generate sample data](scripting/sample.md)
    * [SAMPLE.id](scripting/sample.md#sampleid)
    * [SAMPLE.phone](scripting/sample.md#samplephone)
    * [SAMPLE.last](scripting/sample.md#samplelast)
    * [SAMPLE.first](scripting/sample.md#samplefirst)
    * [SAMPLE.name](scripting/sample.md#samplename)
    * [SAMPLE.email](scripting/sample.md#sampleemail)
* [Loading test data from file](scripting/load_data_from_file.md)
    * [Load from CSV](scripting/load_data_from_file.md#testloaddatafromcsv)
    * [Load from JSON](scripting/load_data_from_file.md#testloaddatafromjson)
* [Swapping test data between runs](scripting/datasets.md)
* [Securing sensitive test data](scripting/datasets.md#securing-sensitive-test-data)

## Reporting and Screenshots
* [Write custom logs](scripting/logging.md)
    * [`TEST.log.info`](scripting/logging.md#testloginfo)
    * [`TEST.log.pass`](scripting/logging.md#testlogpass)
    * [`TEST.log.fail`](scripting/logging.md#testlogfail)
* [Take screenshots](scripting/screenshot.md)
    * [`TEST.takeFullScreenshot`](scripting/screenshot.md#testtakefullscreenshot)

## Team Spaces

* [Setup a new project](administration/project-administration.md)
* [Renaming a project](administration/project-rename.md)
* [Administer users in a team space](administration/space-administration.md)
* [Rename an existing team space](administration/space-rename.md)

## Self-Hosting

* [Self-Serve Signup](administration/on-prem-signup.md)
* [Signup using Admin](administration/admin-signup.md)

## More
* [IP Whitelisting](grid/ip_whitelisting.md)
* [Timezone](grid/timezone.md)
* [Frequently Asked Questions](faqs.md)

----

## Command Line Interface

* [Installing and using the CLI](https://github.com/uilicious/uilicious-cli)

---

## Roadmap / Changes

* [Roadmap](https://trello.com/b/G80eoZU3)
* [Release Notes](release_notes.md)
  * [Studio / Test Engine](release_notes.md#studio--test-engine)
  * [Command Line Interface](release_notes.md#command-line-interface)

