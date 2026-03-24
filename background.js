chrome.contextMenus.create({
  id: "open-with-silo",
  title: "Open with Silo",
  contexts: ["link"],
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "open-with-silo") {
    chrome.runtime.sendNativeMessage("com.nofaff.silo", {
      url: info.linkUrl,
    });
  }
});
