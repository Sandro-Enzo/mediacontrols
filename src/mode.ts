import Normal from './normal';
import LeagueRacing from './leagueRacing';

export default class Mode {
    constructor(mode: string) {
        switch (mode) {
            case 'normal':
                return new Normal();

            case 'league racing':
                return new LeagueRacing();
        }
    }

    visibilityChange() {}
}

