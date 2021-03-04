// @flow

import {localeNameReference} from './locale-context-const';
import type {LocaleNameType} from './locale-context-type';

// input - 5, ru-RU
// output - 5-ая
// eslint-disable-next-line complexity
export function getLocalePositionNumeric(position: number, localeName: LocaleNameType): string {
    const {enUs, ruRu, zhCn, zhTw} = localeNameReference;

    if (localeName === ruRu) {
        return position + '-ая';
    }

    if (localeName === enUs) {
        const lastNumber = position % 10;

        switch (lastNumber) {
            case 1:
                return position + 'st';
            case 2:
                return position + 'nd';
            case 3:
                return position + 'rd';
            default:
                return position + 'th';
        }
    }

    if (localeName === zhCn) {
        return position + '日';
    }

    if (localeName === zhTw) {
        return position + '日';
    }

    return String(position);
}
