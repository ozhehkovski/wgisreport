/* eslint react/jsx-max-depth: [1, { "max": 5 }] */

// @flow

import React, {useContext, useState} from 'react';

import {Switch} from '../layout/switch/c-switch';
import {Card} from '../card/с-card';
import {IsRender} from '../layout/is-render/c-is-render';
import {Locale} from '../../../provider/locale/c-locale';
import type {BeforeAfterType} from '../user-activity/user-activity-type';
import {beforeAfterList, beforeAfterMap} from '../user-activity/user-activity-const';
import type {ReportContextType} from '../../../provider/report/report-type';
import {ReportContext} from '../../../provider/report/c-report-context';

import newSpacesStyle from './new-spaces.scss';
import {LogoState} from './logo-state/c-logo-state';

type PropsType = {|
    +beforeAfterTime: BeforeAfterType,
    +setBeforeAfterTime: (beforeAfter: BeforeAfterType) => void,
|};

// eslint-disable-next-line complexity
export function NewSpaces(props: PropsType): React$Node {
    const {beforeAfterTime, setBeforeAfterTime} = props;

    const [activeIndex, setActiveIndex] = useState<number>(beforeAfterTime === beforeAfterMap.before ? 0 : 1);

    function setActiveIndexOuter(index: number) {
        setActiveIndex(index);
        setBeforeAfterTime(beforeAfterList[index]);
    }

    const reportContextData = useContext<ReportContextType>(ReportContext);
    const {report} = reportContextData;

    if (!report) {
        return null;
    }

    const {catalogs, total_views: totalViews} = report;
    const {past, current} = catalogs;
    const placeIncrease = current.length - past.length;
    const isShowBeforeActive = beforeAfterTime === beforeAfterMap.before;

    const tabList = [
        <Locale key="before" stringKey="LABEL__BEFORE"/>,
        <Locale key="after" stringKey="LABEL__AFTER"/>,
    ];

    const isShowNewConnectedSites = activeIndex === 1 && placeIncrease > 0;

    return (
        <div className={newSpacesStyle.new_spaces}>
            <Switch
                activeIndex={activeIndex}
                className={newSpacesStyle.switch}
                setActiveIndex={setActiveIndexOuter}
                tabList={tabList}
            />

            <div className={newSpacesStyle.container}>
                <LogoState beforeAfterTime={beforeAfterTime} className={newSpacesStyle.logo_state}/>

                <h5 className={newSpacesStyle.title}>
                    <IsRender isRender={isShowNewConnectedSites}>
                        <Locale stringKey="CARD__HEADER__NEW_CONNECTED_SITES"/>
                        &nbsp;
                        <span className={newSpacesStyle.title_label}>+{placeIncrease}</span>
                    </IsRender>

                    <IsRender isRender={!isShowNewConnectedSites}>&nbsp;</IsRender>
                </h5>
            </div>

            <Card
                description={
                    <Locale stringKey="CARD__HEADER__BEFORE_CONNECTING__SUB_TEXT" valueMap={{value: totalViews.past}}/>
                }
                isShowDescription={!isShowBeforeActive}
                percent={isShowBeforeActive ? 0 : Math.round(totalViews.increase)}
                title={<Locale stringKey="CARD__COMPANY_PAGE_VIEWS"/>}
                value={isShowBeforeActive ? totalViews.past : totalViews.current}
            />

            <div className={newSpacesStyle.text_wrapper}>
                <p className={newSpacesStyle.text}>
                    <Locale stringKey="CARD__HEADER__NEW_CONNECTED_SITES__SUB_TEXT"/>
                </p>
            </div>
        </div>
    );
}
