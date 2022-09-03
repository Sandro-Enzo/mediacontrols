// The 'League Racing' option for the extension, which will toggle mute any tab that loses or gains focus

import IMode from './mode';

export default class LeagueRacing implements IMode {
    visibilityChange() {
        // this.muteOnLeave();
    }
    // Fires every time the user enters or leaves the tab
    // muteOnLeave = () => {
    //     chrome.runtime.sendMessage('toggleMute', () => {
    //         console.dir(chrome.runtime.lastError);
    //     });
    // };
}
