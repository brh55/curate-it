document.addEventListener('DOMContentLoaded', function() {
	// Send message to the current tab
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		// since only one tab should be active and in the current window at once
		// the return variable should only have one entry
		var tab = tabs[0];
		var msg;
	});
});


chrome.extension.onRequest.addListener(
  function(connectionInfo) {
    // Find way to push to local storage
    var article = helpers.buildArticle();
	localStorage.setItem('Article', JSON.stringify(article));
    createGmail();
});

// From = <whatever gmail account is logged in;
//         If not logged in, redirects to login page>
// To = <Unfilled>
// Subject = [Interesting Page] <Page's Title>
// Body = Summary Selection + URL

chrome.browserAction.onClicked.addListener(
  function(tab) {
    chrome.tabs.executeScript(null, {file: "infopasser.js"});
    title = tab.title;
    url = tab.url;
});

