// @flow

/* global Intl */

import type {ReportBasicDiffType, ReportFormattedBasicDiffType} from '../../../provider/report/report-type';
import type {BeforeAfterType} from '../user-activity/user-activity-type';
import {beforeAfterMap} from '../user-activity/user-activity-const';
import type {LocaleNameType} from '../../../provider/locale/locale-context-type';

export function getFormattedNumber(value: number, localeName: LocaleNameType): string {
    const formatter = new Intl.NumberFormat(localeName);

    return formatter.format(value);
}

export function getFormattedBasicDiffByTime(
    basicDiff: ?ReportBasicDiffType,
    beforeAfterTime: BeforeAfterType,
    localeName: LocaleNameType
): ReportFormattedBasicDiffType {
    if (!basicDiff) {
        return {
            current: '0',
            past: '0',
            increase: '0',
        };
    }

    const formatter = new Intl.NumberFormat(localeName);

    const {past, increase, current} = basicDiff;

    if (beforeAfterTime === beforeAfterMap.before) {
        return {
            current: formatter.format(past),
            past: formatter.format(past),
            increase: '0',
        };
    }

    return {
        current: formatter.format(current),
        past: formatter.format(past),
        increase: formatter.format(Math.round(increase)),
    };
}
