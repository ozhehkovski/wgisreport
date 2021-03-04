// @flow

import React, {useContext} from 'react';

import type {LocaleContextType} from '../../../../provider/locale/locale-context-type';
import {LocaleContext} from '../../../../provider/locale/c-locale-context';
import type {ReportCompanySocialType, ReportContextType} from '../../../../provider/report/report-type';

import {ReportContext} from '../../../../provider/report/c-report-context';

import sharingStyle from './sharing.scss';
import {SocialLink} from './social-link/c-social-link';

type PropsType = {};

export function Sharing(props: PropsType): React$Node {
    const localeContextData = useContext<LocaleContextType>(LocaleContext);
    const {localeName} = localeContextData;
    const reportContextData = useContext<ReportContextType>(ReportContext);
    const {fetchReport, fetchingError, isInProgress, report} = reportContextData;

    if (!report) {
        return null;
    }

    const {company} = report;
    const {socials} = company;

    return (
        <div className={sharingStyle.sharing}>
            {socials.map((socialItem: ReportCompanySocialType): React$Node => {
                return <SocialLink key={socialItem.url} social={socialItem}/>;
            })}
        </div>
    );
}
