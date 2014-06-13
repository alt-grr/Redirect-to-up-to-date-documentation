Redirect to up to date documentation [![Build status for branch dev](https://travis-ci.org/kuc/Redirect-to-up-to-date-documentation.svg?branch=dev)](https://travis-ci.org/kuc/Redirect-to-up-to-date-documentation "Build status for branch dev")
====================================

Detects if currently viewed online documentation page is the most recent version available, and if
not, redirects user to the latest version.

## Use case
You wanted to search for documentation for `AbstractSingletonProxyFactoryBean` on the internet. Sadly, top search result
is the link to documentation page generated from ancient version of Spring Framework. This script detects this and
redirects you to documentation page from most recent stable release.

## Installation
First ensure you have appropriate add-on installed in your browser:
* for Chrome/Chromium - [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
* for Firefox - [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/),
or [Scriptish](https://addons.mozilla.org/en-US/firefox/addon/scriptish/), or equivalent
* for Opera - [Violentmonkey](https://addons.opera.com/en/extensions/details/violent-monkey/)

Next download
[redirectToUpToDateDocumentation.user.js](https://github.com/kuc/Redirect-to-up-to-date-documentation/raw/master/redirectToUpToDateDocumentation.user.js)
and confirm installation message.
