'use strict';

window.addEventListener(
    'visibilitychange',
    (e) => {
        chrome.storage.sync.get('mode', (data) => {
            const option = new Option(data.mode);
            option.visibilityChange();

            console.log(option.constructor.name);
        });

        // Make sure Twitch and other websites don't know you left the tab so they can't automatically turn down video resolution
        e.stopPropagation();
    },
    {
        capture: true,
    }
);

class Option {
    constructor(option) {
        switch (option) {
            case 'normal':
                return new Normal();

            case 'league racing':
                return new LeagueRacing();
        }
    }

    visibilityChange() {}
}

class Normal extends Option {
    constructor() {}

    visibilityChange() {}
}

class LeagueRacing extends Option {
    constructor() {}

    visibilityChange() {
        this.muteOnLeave();
    }

    // Fires every time the user enters or leaves the tab
    muteOnLeave = () => {
        chrome.storage.sync.get('mode', (data) => {
            if (data.mode !== 'league racing') return;

            // Get the mute button for the site the extension is currently on
            const muteButton = getMuteButton();

            // Check if a mute button was found (if a site is not supported, muteButton will be null)
            if (muteButton) {
                muteButton.click();
            }
        });
    };

    // Gets the mute button on the current page
    getMuteButton = () => {
        let output;

        // Mute button is different on every platform, so every case grabs the mute button for that website
        switch (window.location.host) {
            case 'www.twitch.tv':
                output = document.querySelector(
                    '[data-a-target="player-mute-unmute-button"]'
                );
                break;

            case 'www.youtube.com':
                output = document.getElementsByClassName(
                    'ytp-mute-button ytp-button'
                )[0];
                break;

            case 'f1tv.formula1.com':
                output = document.getElementsByClassName(
                    'bmpui-ui-volumetogglebutton'
                )[0];
                break;

            case 'www.netflix.com':
                // The data attribute for the volume button on Netflix changes based on whether or not
                // the page is muted, so that's why there are two selectors, in case the first one fails
                output = document.querySelector(
                    '[data-uia="control-volume-high"]'
                );
                if (!output)
                    output = document.querySelector(
                        '[data-uia="control-volume-off"]'
                    );
                break;

            // If the website is not supported
            default:
                output = null;
                break;
        }

        return output;
    };
}
