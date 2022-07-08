'use strict';

import Mode from './mode';

let mode: string;

chrome.storage.sync.get('mode', (data) => {
    mode = data.mode;
});

chrome.storage.onChanged.addListener((changes) => {
    mode = <string>changes.mode;
});

window.addEventListener(
    'visibilitychange',
    (e) => {
        const option = new Mode(mode);
        option.visibilityChange();

        console.log(option.constructor.name);

        // Make sure Twitch and other websites don't know you left the tab so they can't automatically turn down video resolution
        e.stopPropagation();
    },
    {
        capture: true,
    }
);

