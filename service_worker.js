// This function gets called when the extensions is first installed, updated or chrome is updated
chrome.runtime.onInstalled.addListener(() => {
    // Get the mode from storage if it exists,
    // otherwise mode will be 'normal'
    chrome.storage.sync.get({ mode: 'normal' }, (data) => {
        chrome.storage.sync.set({ mode: data.mode });
    });
});
