/* eslint react/jsx-max-depth: [1, { "max": 7 }] */

// @flow

import React, {useContext} from 'react';

import serviceStyle from '../../../css/service.scss';
import type {ReportContextType} from '../../../provider/report/report-type';
import {ReportContext} from '../../../provider/report/c-report-context';
import {Locale} from '../../../provider/locale/c-locale';
import type {LocaleContextType} from '../../../provider/locale/locale-context-type';
import {LocaleContext} from '../../../provider/locale/c-locale-context';
import {getFormattedRangeTimeOrHoliday} from '../../lib/time';

import shortInfoTableStyle from './short-info-table.scss';

type PropsType = {};

// eslint-disable-next-line complexity
export function ShortInfoTable(props: PropsType): React$Node {
    const reportContextData = useContext<ReportContextType>(ReportContext);
    const {report} = reportContextData;
    const localeContextData = useContext<LocaleContextType>(LocaleContext);
    const {localeName} = localeContextData;

    if (!report) {
        return null;
    }

    const {company} = report;
    const {address, name, phones, details} = company;
    const {worktime, website} = details;

    const day1 = worktime['1'];
    const day2 = worktime['2'];
    const day3 = worktime['3'];
    const day4 = worktime['4'];
    const day5 = worktime['5'];
    const day6 = worktime['6'];
    const day7 = worktime['7'];

    return (
        <table className={shortInfoTableStyle.short_info_table}>
            <tbody>
                <tr>
                    <td className={serviceStyle.secondary_font_color}>
                        <Locale stringKey="COMPANY_INFO__NAME"/>
                    </td>

                    <td>{name}</td>
                </tr>

                <tr>
                    <td className={serviceStyle.secondary_font_color}>
                        <Locale stringKey="COMPANY_INFO__ADDRESS"/>
                    </td>

                    <td>{address.adds}</td>
                </tr>

                <tr>
                    <td className={serviceStyle.secondary_font_color}>
                        <Locale stringKey="COMPANY_INFO__SITE"/>
                    </td>

                    <td>
                        <a className={serviceStyle.link} href={website} rel="noreferrer" target="_blank">
                            {website}
                        </a>
                    </td>
                </tr>

                <tr>
                    <td className={serviceStyle.secondary_font_color}>
                        <Locale stringKey="COMPANY_INFO__PHONE_NUMBER"/>
                    </td>

                    <td>
                        {phones.map<React$Node>((phone: string): React$Node => {
                            return <div key={phone}>{phone}</div>;
                        })}
                    </td>
                </tr>

                <tr>
                    <td className={serviceStyle.secondary_font_color}>
                        <Locale stringKey="COMPANY_INFO__SCHEDULE"/>
                    </td>

                    <td>
                        <p className={shortInfoTableStyle.text_paragraph}>
                            <span className={shortInfoTableStyle.day_of_week}>
                                <Locale stringKey="WEEK_DAY__MONDAY__2"/>
                            </span>

                            <span>{getFormattedRangeTimeOrHoliday(day1, localeName)}</span>

                            <br/>

                            <span className={shortInfoTableStyle.day_of_week}>
                                <Locale stringKey="WEEK_DAY__TUESDAY__2"/>
                            </span>

                            <span>{getFormattedRangeTimeOrHoliday(day2, localeName)}</span>

                            <br/>

                            <span className={shortInfoTableStyle.day_of_week}>
                                <Locale stringKey="WEEK_DAY__WEDNESDAY__2"/>
                            </span>

                            <span>{getFormattedRangeTimeOrHoliday(day3, localeName)}</span>

                            <br/>

                            <span className={shortInfoTableStyle.day_of_week}>
                                <Locale stringKey="WEEK_DAY__THURSDAY__2"/>
                            </span>

                            <span>{getFormattedRangeTimeOrHoliday(day4, localeName)}</span>

                            <br/>

                            <span className={shortInfoTableStyle.day_of_week}>
                                <Locale stringKey="WEEK_DAY__FRIDAY__2"/>
                            </span>

                            <span>{getFormattedRangeTimeOrHoliday(day5, localeName)}</span>
                        </p>

                        <p className={shortInfoTableStyle.text_paragraph}>
                            <span className={shortInfoTableStyle.day_of_week}>
                                <Locale stringKey="WEEK_DAY__SATURDAY__2"/>
                            </span>

                            <span>{getFormattedRangeTimeOrHoliday(day6, localeName)}</span>

                            <br/>

                            <span className={shortInfoTableStyle.day_of_week}>
                                <Locale stringKey="WEEK_DAY__SUNDAY__2"/>
                            </span>

                            <span>{getFormattedRangeTimeOrHoliday(day7, localeName)}</span>
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
