"use strict";
chrome
.runtime
.onInstalled
.addListener(
	function(i) {
	}
),
chrome
.tabs
.onUpdated
.addListener(
	function(a) {
		chrome.pageAction.show(a);
	}
); 
