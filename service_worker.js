chrome.runtime.onInstalled.addListener(() => {
    // Get the mode in storage if it exists,
    // otherwise mode will be 'normal'
    chrome.storage.sync.get({ mode: 'normal' }, (data) => {
        chrome.storage.sync.set({ mode: data.mode });
    });
});
