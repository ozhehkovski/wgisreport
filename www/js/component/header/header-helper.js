// @flow

import type {LocaleNameType} from '../../../provider/locale/locale-context-type';
import {localeNameReference} from '../../../provider/locale/locale-context-const';

import logoEnUs from './image/logo-en-us.png';
import logoRuRu from './image/logo-ru-ru.png';

export function getLogoSrc(localeName: LocaleNameType): string {
    switch (localeName) {
        case localeNameReference.ruRu:
            return logoRuRu;
        case localeNameReference.enUs:
            return logoEnUs;
        default:
            console.error('Can not detect locale name localeName: ' + localeName);

            return logoEnUs;
    }
}
