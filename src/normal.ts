// The 'normal' option for the extension, which will do nothing besides the default extension behaviour

import IMode from './mode';

export default class Normal implements IMode {
    visibilityChange() {}
}
