// @flow

/* global Intl */

import type {LocaleNameType} from '../../provider/locale/locale-context-type';

import {getLocalizedString} from '../../provider/locale/locale-context-helper';

type TimeType = {|
    +hour: number,
    +hourAsNumber: number,
    +minute: number,
|};

type FromToTimeType = {
    timeFrom: TimeType,
    timeTo: TimeType,
    isMatched: boolean,
};

function getTime(time: string): TimeType {
    const [hour, minute] = time.split(':');

    const hourNumber = Number.parseInt(hour, 10);
    const minuteNumber = Number.parseInt(minute, 10);
    const hourAsNumber = hourNumber + minuteNumber / 60;

    return {
        hour: hourNumber,
        minute: minuteNumber,
        hourAsNumber,
    };
}

export function getFromToTime(time: string): FromToTimeType {
    const timeFromMatchedString = time.match(/^\d\d:\d\d/);
    const toFromMatchedString = time.match(/\d\d:\d\d$/);

    if (!timeFromMatchedString || !toFromMatchedString) {
        return {
            timeFrom: {
                hour: 0,
                minute: 0,
                hourAsNumber: 0,
            },
            timeTo: {
                hour: 0,
                minute: 0,
                hourAsNumber: 0,
            },
            isMatched: false,
        };
    }

    const timeFromString = timeFromMatchedString[0];
    const toFromString = toFromMatchedString[0];

    return {
        timeFrom: getTime(timeFromString),
        timeTo: getTime(toFromString),
        isMatched: true,
    };
}

export function formatTime(time: TimeType, localeName: LocaleNameType): string {
    const option = {hour: '2-digit', minute: '2-digit'};

    const formatter = new Intl.DateTimeFormat(localeName, option);

    const date = new Date(0, 0, 0, time.hour, time.minute, 0);

    return formatter.format(date);
}

export function getIsHoliday(workTimeDayKey: mixed): boolean {
    return !workTimeDayKey || !Array.isArray(workTimeDayKey) || workTimeDayKey.length === 0;
}

export function getFormattedRangeTimeOrHoliday(workTimeDayKey: mixed, localeName: LocaleNameType): string {
    if (getIsHoliday(workTimeDayKey)) {
        return getLocalizedString('WEEK_DAY__HOLIDAY', localeName);
    }

    const fromToTime = getFromToTime(String(workTimeDayKey));

    const {isMatched, timeFrom, timeTo} = fromToTime;

    if (isMatched === false) {
        return String(workTimeDayKey);
    }

    return `${formatTime(timeFrom, localeName)} — ${formatTime(timeTo, localeName)}`;
}
