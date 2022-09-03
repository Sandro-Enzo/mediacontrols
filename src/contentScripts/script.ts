// This script runs every time a new website is opened with the extension active

let mode: string;

// Initialise the mode on every new page
chrome.storage.sync.get('mode', (data) => {
    mode = data.mode;
});

// When the user changes the mode, update the mode variable
chrome.storage.onChanged.addListener((changes) => {
    mode = <string>changes.mode.newValue;
});

// Fires every time a tab loses or gains focus
window.addEventListener(
    'visibilitychange',
    (event) => {
        // Make sure Twitch and other websites don't know you left the tab so they can't automatically turn down video resolution
        event.stopPropagation();
    },
    {
        capture: true,
    }
);
