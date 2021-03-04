// @flow

/* global location, Intl */

import React, {useContext} from 'react';

import {Locale} from '../../../provider/locale/c-locale';
import type {LocaleContextType} from '../../../provider/locale/locale-context-type';
import {LocaleContext} from '../../../provider/locale/c-locale-context';
import {getReportRequestBodyFromURL} from '../../../provider/report/report-helper';

import headLineStyle from './head-line.scss';

type PropsType = {};

export function HeadLine(props: PropsType): React$Node {
    const localeContextData = useContext<LocaleContextType>(LocaleContext);
    const {localeName} = localeContextData;
    const requestBody = getReportRequestBodyFromURL(location.href);

    const intlOptions = {month: 'long', year: 'numeric'};
    const intl = new Intl.DateTimeFormat(localeName, intlOptions);

    if (requestBody instanceof Error) {
        return null;
    }

    return (
        <div className={headLineStyle.head_line}>
            <h1 className={headLineStyle.title}>
                <Locale stringKey="HEAD_LINE__HEADER"/>
            </h1>

            <p className={headLineStyle.sub_title}>
                <Locale
                    stringKey="HEAD_LINE__SUB_TEXT"
                    valueMap={{date: intl.format(new Date(requestBody.ccl_date))}}
                />
            </p>
        </div>
    );
}
