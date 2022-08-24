import IMode from './mode';

export default class LeagueRacing implements IMode {
    visibilityChange() {
        this.muteOnLeave();
    }

    // Fires every time the user enters or leaves the tab
    muteOnLeave = () => {
        // Get the mute button for the site the extension is currently on
        const muteButton = this.getMuteButton();

        // Check if a mute button was found (if a site is not supported, muteButton will be null)
        muteButton?.click();
    };

    // Gets the mute button on the current page
    getMuteButton = () => {
        let output: HTMLButtonElement | null;

        // Mute button is different on every platform, so every case grabs the mute button for that website
        switch (window.location.host) {
            case 'www.twitch.tv':
                output = <HTMLButtonElement>(
                    document.querySelector(
                        '[data-a-target="player-mute-unmute-button"]'
                    )
                );
                break;

            case 'www.youtube.com':
                output = <HTMLButtonElement>(
                    document.getElementsByClassName(
                        'ytp-mute-button ytp-button'
                    )[0]
                );
                break;

            case 'f1tv.formula1.com':
                output = <HTMLButtonElement>(
                    document.getElementsByClassName(
                        'bmpui-ui-volumetogglebutton'
                    )[0]
                );
                break;

            case 'www.netflix.com':
                // The data attribute for the volume button on Netflix changes based on whether or not
                // the page is muted, so that's why there are two selectors, in case the first one fails
                output = <HTMLButtonElement>(
                    document.querySelector('[data-uia="control-volume-high"]')
                );
                if (!output)
                    output = <HTMLButtonElement>(
                        document.querySelector(
                            '[data-uia="control-volume-off"]'
                        )
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
