// ==UserScript==
// @name        Redirect to up to date documentation
// @namespace   sieradzki.it
// @description Detects if currently viewed online documentation page is the most recent version available, and if not, redirects user to the latest version.
// @version     1.0.0
// @match       *://*/*
// ==/UserScript==

(function () {
	'use strict';

	var DocumentationRedirect = function () {
	};

	window.DocumentationRedirect = new DocumentationRedirect();
})();
