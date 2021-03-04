// @flow

import React, {useContext} from 'react';

import serviceStyle from '../../../css/service.scss';
import {Locale} from '../../../provider/locale/c-locale';
import type {ReportContextType} from '../../../provider/report/report-type';
import {ReportContext} from '../../../provider/report/c-report-context';

import shortInfoBeforeAfterStyle from './short-info-before-after.scss';
import arrowRightImage from './image/gray-arrow-right.png';
// import arrowDownImage from './image/circle-arrow-down.png';

type PropsType = {};

export function ShortInfoBeforeAfter(props: PropsType): React$Node {
    const reportContextData = useContext<ReportContextType>(ReportContext);
    const {report} = reportContextData;

    if (!report) {
        return null;
    }

    const {catalogs} = report;
    const {current_action_need_count: actionNeedCount, current_sync_avg: syncAvg, current, past} = catalogs;

    return (
        <div className={shortInfoBeforeAfterStyle.short_info_before_after}>
            <p className={shortInfoBeforeAfterStyle.sync_info}>{Math.round(syncAvg)}%</p>

            <p className={shortInfoBeforeAfterStyle.description}>
                <Locale stringKey="CARD__SITES_SYNCHRONIZED"/>
            </p>

            <p className={shortInfoBeforeAfterStyle.main_info}>
                <span className={serviceStyle.secondary_font_color}>{past.length}</span>

                <img alt="" className={shortInfoBeforeAfterStyle.arrow_right} src={arrowRightImage}/>

                <span>{current.length}</span>
            </p>

            <p className={shortInfoBeforeAfterStyle.description}>
                <Locale stringKey="CARD__SITES_BEFORE_AFTER"/>
            </p>

            <p className={shortInfoBeforeAfterStyle.main_info}>{actionNeedCount}</p>

            <p className={shortInfoBeforeAfterStyle.description}>
                <Locale stringKey="CARD__REQUIRED_ACTION"/>
            </p>

            {/*
            <img alt="" className={shortInfoBeforeAfterStyle.arrow_down} src={arrowDownImage}/>

            <p className={shortInfoBeforeAfterStyle.see_place_description}>
                <a className={serviceStyle.link} href="/">
                    <Locale stringKey="CARD__YOU_CAN_SEE_DETAILS_OF_DATA_STATUS"/>
                </a>
            </p>
*/}
        </div>
    );
}
