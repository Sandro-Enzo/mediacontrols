chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.get({ mode: 'normal' }, (data) => {
        chrome.storage.sync.set({ mode: data.mode });
    });
});

chrome.tabs.onHighlighted.addListener(async (highlightInfo) => {
    if ((await chrome.storage.sync.get("mode")).mode !== "league racing") return;

    chrome.tabs.query({ active: false }, (result) => {
        result.forEach((tab) => {
            if (!tab.id) return;
            chrome.tabs.update(tab.id, { muted: true });
        });
    });

    chrome.tabs.update(highlightInfo.tabIds[0], { muted: false });
});
