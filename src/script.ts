'use strict';

import IMode, { getModeClass } from './mode';

let mode: string;

chrome.storage.sync.get('mode', (data) => {
    mode = data.mode;
});

chrome.storage.onChanged.addListener((changes) => {
    mode = <string>changes.mode.newValue;
});

window.addEventListener(
    'visibilitychange',
    (event) => {
        const option = getModeClass(mode);
        option?.visibilityChange();

        // Make sure Twitch and other websites don't know you left the tab so they can't automatically turn down video resolution
        event.stopPropagation();
    },
    {
        capture: true,
    }
);
