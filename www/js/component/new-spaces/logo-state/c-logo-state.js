// @flow

import React, {useContext} from 'react';

import {classNames} from '../../../lib/css';
import type {ReportCatalogsCompanyMergedType, ReportContextType} from '../../../../provider/report/report-type';
import {ReportContext} from '../../../../provider/report/c-report-context';
import type {BeforeAfterType} from '../../user-activity/user-activity-type';

import {LogoStateItem} from './logo-state-item/c-logo-state-item';
import logoStateStyle from './logo-state.scss';
import {getMergedList} from './logo-state-helper';

type PropsType = {|
    +beforeAfterTime: BeforeAfterType,
    +className?: string,
|};

export function LogoState(props: PropsType): React$Node {
    const {className, beforeAfterTime} = props;

    const reportContextData = useContext<ReportContextType>(ReportContext);
    const {report} = reportContextData;

    if (!report) {
        return null;
    }

    const {catalogs} = report;
    const {past, current} = catalogs;
    const mergedList = getMergedList(past, current);

    return (
        <div className={classNames(logoStateStyle.logo_state, className)}>
            {mergedList
                .filter((logoData: ReportCatalogsCompanyMergedType): boolean => logoData.isInCurrent)
                .map<React$Node>((logoData: ReportCatalogsCompanyMergedType): React$Node => {
                    return <LogoStateItem beforeAfterTime={beforeAfterTime} key={logoData.id} logoData={logoData}/>;
                })}
        </div>
    );
}
