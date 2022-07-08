'use strict';

// The select element in the options window
const selectEl = <HTMLSelectElement>document.getElementById('mode');

// Initialize the select to the current selection
chrome.storage.sync.get('mode', (data) => {
    selectEl.value = data.mode;
});

// When the user picks an option, switch to that option
selectEl.onchange = () => {
    chrome.storage.sync.set({
        mode: selectEl.value,
    });
};

