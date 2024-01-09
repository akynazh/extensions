chrome.action.onClicked.addListener(() => {
	chrome.sessions.getRecentlyClosed({ maxResults: 1 }, function (sessions) {
		var session = sessions[0];
		if (session.tab) {
			chrome.sessions.restore(session.tab.sessionId);
		} else {
			chrome.sessions.restore(session.window.sessionId);
		}
	});
})