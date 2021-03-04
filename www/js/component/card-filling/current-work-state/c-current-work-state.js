// @flow

import React, {useContext} from 'react';

import {CardInfoItem} from '../card-info-item/c-card-info-item';
import type {ReportContextType} from '../../../../provider/report/report-type';
import {ReportContext} from '../../../../provider/report/c-report-context';
import {formatTime, getFromToTime, getIsHoliday} from '../../../lib/time';
import {Locale} from '../../../../provider/locale/c-locale';
import type {LocaleContextType} from '../../../../provider/locale/locale-context-type';
import {LocaleContext} from '../../../../provider/locale/c-locale-context';
import watchIcon from '../image/watch-icon.png';

type PropsType = {};

// eslint-disable-next-line complexity
export function CurrentWorkState(props: PropsType): React$Node {
    const reportContextData = useContext<ReportContextType>(ReportContext);
    const {report} = reportContextData;
    const localeContextData = useContext<LocaleContextType>(LocaleContext);
    const {localeName} = localeContextData;

    if (!report) {
        return null;
    }

    const {company} = report;
    const {details} = company;
    const {worktime} = details;
    const date = new Date();
    const hoursAsNumber = date.getHours() + date.getMinutes() / 60;
    const workTimeItem = worktime[date.getDay() + 1];

    if (getIsHoliday(workTimeItem)) {
        return (
            <CardInfoItem
                iconSrc={watchIcon}
                text={<Locale stringKey="WEEK_DAY__HOLIDAY"/>}
                title={<Locale stringKey="ITEM_TEXT__CLOSED"/>}
            />
        );
    }

    const {isMatched, timeFrom, timeTo} = getFromToTime(String(workTimeItem));

    if (isMatched === false) {
        return <CardInfoItem iconSrc={watchIcon} title={<Locale stringKey="ITEM_TEXT__CLOSED"/>}/>;
    }

    const isOpen = timeFrom.hourAsNumber <= hoursAsNumber && hoursAsNumber <= timeTo.hourAsNumber;

    return (
        <CardInfoItem
            iconSrc={watchIcon}
            text={
                <Locale
                    stringKey="ITEM_TEXT__TODAY_SCHEDULE_DATA"
                    valueMap={{
                        timeFrom: formatTime(timeFrom, localeName),
                        timeTo: formatTime(timeTo, localeName),
                    }}
                />
            }
            title={isOpen ? <Locale stringKey="ITEM_TEXT__OPEN"/> : <Locale stringKey="ITEM_TEXT__CLOSED"/>}
        />
    );
}
