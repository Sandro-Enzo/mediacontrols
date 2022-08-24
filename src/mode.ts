import Normal from './normal';
import LeagueRacing from './leagueRacing';

export default interface IMode {
    visibilityChange(): void;
}

export function getModeClass(mode: string): IMode | null {
    switch (mode) {
        case 'normal':
            return new Normal();

        case 'league racing':
            return new LeagueRacing();
    }

    return null;
}
