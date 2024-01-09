chrome.action.onClicked.addListener(() => {
  // create new tab in "{group_name}" group
  const group_name = "ing";
  chrome.tabGroups.query({}, function (groups) {
    for (var i = 0; i < groups.length; i++) {
      var group = groups[i];
      if (group.title === group_name) {
        chrome.tabs.create({ url: "chrome://newtab" }, function (tab) {
          chrome.tabs.group({ tabIds: [tab.id], groupId: group.id });
        });
        break;
      }
    }
  });
});
