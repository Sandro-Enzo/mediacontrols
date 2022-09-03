// This function gets called when the extensions is first installed, updated or chrome is updated
chrome.runtime.onInstalled.addListener(() => {
    // Get the mode from storage if it exists,
    // otherwise mode will be 'normal'
    chrome.storage.sync.get({ mode: 'normal' }, (data) => {
        chrome.storage.sync.set({ mode: data.mode });
    });
});

// Fires when the league racing script sends the message to toggle mute on a tab
// chrome.runtime.onMessage.addListener((message, sender) => {
//     if (message === 'toggleMute') {
//         chrome.tabs.update(sender.tab.id, {
//             muted: !sender.tab.mutedInfo.muted,
//         });
//     }
// });

chrome.tabs.onHighlighted.addListener((highlightInfo) => {
    console.dir(highlightInfo);

    chrome.tabs.query({ active: false }, (result) => {
        result.forEach((tab) => {
            chrome.tabs.update(tab.id, { muted: true });
        });
    });

    chrome.tabs.update(highlightInfo.tabIds[0], { muted: false });
});
