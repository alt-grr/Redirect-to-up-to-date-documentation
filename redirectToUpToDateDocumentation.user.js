// ==UserScript==
// @name        Redirect to up to date documentation
// @namespace   sieradzki.it
// @description Detects if currently viewed online documentation page is the most recent version available, and if not, redirects user to the latest version.
// @version     1.0.0
// @match       *://docs.oracle.com/javase/*
// @match       *://wiki.eclipse.org/Jetty*
// @match       *://www.eclipse.org/jetty/documentation*
// @match       *://docs.spring.io/*
// ==/UserScript==

(function () {
	'use strict';

	var documentations = {
		javaSE: {
			currentVersion: '8',
			isDocumentationPageOutdated: function (url) {
				var matches = url.match(/^http(s)?:\/\/docs\.oracle\.com\/javase\/([0-9\.]+)\/docs\/api\//);
				return matches !== null && matches[2] !== this.currentVersion;
			},
			rewriteUrl: function (url) {
				return url.replace(/\/javase\/([0-9\.]+)\/docs\/api\//, '/javase/' + this.currentVersion + '/docs/api/');
			}
		},
		jetty: {
			isDocumentationPageOutdated: function (url) {
				var matches = url.match(/^http(s)?:\/\/wiki\.eclipse\.org\/Jetty/);
				return matches !== null &&
					document.querySelectorAll('div.messagebox a[href^="http://www.eclipse.org/jetty/documentation"]')[1];
			},
			rewriteUrl: function (url) {
				return document.querySelectorAll('div.messagebox a[href^="http://www.eclipse.org/jetty/documentation"]')[1].href;
			}
		},
		springFramework: {
			currentVersion: 'current',
			isDocumentationPageOutdated: function (url) {
				var matches = url.match(/^http(s)?:\/\/docs\.spring\.io\/spring\/docs\/([0-9\.A-Z]+)\/(javadoc\-)?api\//);
				return matches !== null && matches[2] !== this.currentVersion;
			},
			rewriteUrl: function (url) {
				return url.replace(/\/docs\/([0-9\.A-Z]+)\/(javadoc\-)?api\//, '/docs/' + this.currentVersion +
					'/javadoc-api/');
			}
		}
	};

	var DocumentationRedirect = function () {

		for (var key in documentations) {
			if (documentations[key].isDocumentationPageOutdated(window.location.href)) {
				var rewrittenUrl = documentations[key].rewriteUrl(window.location.href);

				this.ifPageExists(rewrittenUrl, function (url) {
					window.location.replace(url);
				});

				break;
			}
		}
	};

	DocumentationRedirect.prototype.ifPageExists = function (url, callback) {

		var request = new XMLHttpRequest();
		request.open('HEAD', url, true);
		request.timeout = 15000; // 15 seconds
		request.onload = function () {
			if (request.status < 400) {
				callback(url);
			}
		};
		request.send();
	};

	window.DocumentationRedirect = new DocumentationRedirect();
})();
