import Normal from './normal';
import LeagueRacing from './leagueRacing';

// An interface for all the modes the extension has
export default interface IMode {
    visibilityChange(): void;
}

// Gets the class of the requested mode
export function getModeClass(mode: string): IMode | null {
    switch (mode) {
        case 'normal':
            return new Normal();

        case 'league racing':
            return new LeagueRacing();
    }

    return null;
}
