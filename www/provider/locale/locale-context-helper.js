// @flow

/* global localStorage, navigator */

import {allLocalesData, localeConst, localeNameList} from './locale-context-const';
import type {LangKeyType} from './translation/type';
import type {LocaleContextType, LocaleContextValueMapType, LocaleNameType} from './locale-context-type';

// eslint-disable-next-line complexity
export function getSavedLocaleName(): LocaleNameType {
    const localeName: LocaleNameType = localeConst.defaults.localeName;

    if (typeof localStorage === 'undefined' || typeof navigator === 'undefined') {
        return localeName;
    }

    const savedLocaleName = localStorage.getItem(localeConst.key.localStorage.localeName);

    // eslint-disable-next-line no-loops/no-loops
    for (const localeNameInList of localeNameList) {
        if (localeNameInList === savedLocaleName) {
            return localeNameInList;
        }
    }

    const navigatorLanguages = navigator.languages;

    if (!Array.isArray(navigatorLanguages)) {
        return localeName;
    }

    // eslint-disable-next-line no-loops/no-loops
    for (const deviceLocaleName of navigatorLanguages) {
        const localeIndex = localeNameList.indexOf(deviceLocaleName);

        if (localeIndex > -1) {
            return localeNameList[localeIndex];
        }
    }

    return localeName;
}

export function saveLocaleName(localeName: LocaleNameType): LocaleNameType {
    console.log('---> save localeName localStorage:', localeConst.key.localStorage.localeName, localeName);
    localStorage.setItem(localeConst.key.localStorage.localeName, localeName);

    return localeName;
}

function replacePlaceholderMap(rawString: string, valueMap: LocaleContextValueMapType): string {
    let resultString = rawString;

    const keyList = Object.keys(valueMap);

    // eslint-disable-next-line no-loops/no-loops
    for (const objectKey of keyList) {
        resultString = resultString.replace(new RegExp('{' + objectKey + '}', 'g'), String(valueMap[objectKey]));
    }

    return resultString;
}

export function getLocalizedString(
    stringKey: LangKeyType,
    localeName: LocaleNameType,
    valueMap?: LocaleContextValueMapType
): string {
    const resultString = allLocalesData[localeName][stringKey];

    return valueMap ? replacePlaceholderMap(resultString, valueMap) : resultString;
}

export function getDefaultLocaleContextData(): LocaleContextType {
    return {
        localeName: getSavedLocaleName(),
        setLocaleName: (localeName: LocaleNameType) => {},
    };
}
