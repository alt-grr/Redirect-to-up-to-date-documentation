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

	DocumentationRedirect.prototype.ifPageExists = function (url, callback) {

		var request = new XMLHttpRequest();
		request.open('HEAD', url, true);
		request.timeout = 15000; // 15 seconds
		request.onload = function () {
			if (request.status < 400) {
				callback();
			}
		};
		request.send();
	};

	window.DocumentationRedirect = new DocumentationRedirect();
})();
