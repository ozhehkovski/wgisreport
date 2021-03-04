// @flow

import type {BeforeAfterType, PlaceNameType} from './user-activity-type';

export const beforeAfterMap: {[key: BeforeAfterType]: BeforeAfterType} = {
    before: 'before',
    after: 'after',
};

export const beforeAfterList: Array<BeforeAfterType> = [beforeAfterMap.before, beforeAfterMap.after];

export const placeNameMap: {[key: PlaceNameType]: PlaceNameType} = {
    doubleGis: 'doubleGis',
    yandex: 'yandex',
    google: 'google',
};

export const placeNameList: Array<PlaceNameType> = [placeNameMap.doubleGis, placeNameMap.yandex, placeNameMap.google];
