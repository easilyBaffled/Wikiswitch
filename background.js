var newurl; //new url
var simpleString = 'http://simple.wikipedia.org/wiki/'
var regularString = 'http://en.wikipedia.org/wiki/'
var topic;


function checkForValidUrl(tabId, changeInfo, tab) {
	if (tab.url.indexOf("wikipedia.org") > -1) {
		chrome.pageAction.show(tabId);
	}
};

chrome.tabs.onUpdated.addListener(checkForValidUrl);

chrome.pageAction.onClicked.addListener(function(tab) { //checks which wikipage we are on and adjusts accordingly

	if(tab.url.indexOf("simple.wikipedia.org") > -1){ //then current is simpleWiki
		topic = tab.url.replace(simpleString, "");
		newurl = regularString+topic;
		//change icon
	}
	else{
		topic = tab.url.replace(regularString, "");
		newurl = simpleString+topic;

	}
	chrome.tabs.update(tab.id, {url: newurl});
});