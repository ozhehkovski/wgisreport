// @flow

import React, {useContext, useState} from 'react';

import {DropDown} from '../layout/drop-down/c-drop-down';
import {DropDownOption} from '../layout/drop-down/drop-down-option/c-drop-down-option';
import {Card} from '../card/с-card';
import {Locale} from '../../../provider/locale/c-locale';
import type {PlaceNameType} from '../user-activity/user-activity-type';
import {beforeAfterMap, placeNameList, placeNameMap} from '../user-activity/user-activity-const';
import {getPlaceDataByName} from '../user-activity/user-activity-helper';
import type {ReportContextType} from '../../../provider/report/report-type';
import {ReportContext} from '../../../provider/report/c-report-context';
import {getFormattedBasicDiffByTime} from '../card/card-helper';
import type {LocaleContextType} from '../../../provider/locale/locale-context-type';
import {LocaleContext} from '../../../provider/locale/c-locale-context';
import {IsRender} from '../layout/is-render/c-is-render';

import place2gisImage from './image/place-2-gis-icon.png';
import placeGooglePointImage from './image/place-google-point-icon.png';
import placeYandexImage from './image/place-yandex-icon.png';
import infoByPlaceStyle from './info-by-place.scss';

type PropsType = {|
    // +beforeAfterTime: BeforeAfterType,
    // +setBeforeAfterTime: (beforeAfter: BeforeAfterType) => void,
    +placeName: PlaceNameType,
    +setPlaceName: (placeName: PlaceNameType) => void,
|};

export function InfoByPlace(props: PropsType): React$Node {
    const {placeName, setPlaceName} = props;
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const localeContextData = useContext<LocaleContextType>(LocaleContext);
    const {localeName} = localeContextData;
    const reportContextData = useContext<ReportContextType>(ReportContext);
    const {report} = reportContextData;

    function setActiveIndexOuter(index: number) {
        setActiveIndex(index);
        setPlaceName(placeNameList[index]);
    }

    if (!report) {
        return null;
    }

    const placeData = getPlaceDataByName(report, placeName);
    const {basic_diff: basicDiff} = placeData;
    const {build_route: buildRoute, open_website: openWebsite, action_phone: actionsPhone, views} = basicDiff;

    const buildRouteDiff = getFormattedBasicDiffByTime(buildRoute, beforeAfterMap.after, localeName);
    const openWebsiteDiff = getFormattedBasicDiffByTime(openWebsite, beforeAfterMap.after, localeName);
    const actionsPhoneDiff = getFormattedBasicDiffByTime(actionsPhone, beforeAfterMap.after, localeName);
    const viewsDiff = getFormattedBasicDiffByTime(views, beforeAfterMap.after, localeName);

    return (
        <div className={infoByPlaceStyle.info_by_place}>
            <div className={infoByPlaceStyle.select_place_wrapper}>
                <h5 className={infoByPlaceStyle.select_place_title}>
                    <Locale stringKey="SELECT__DIGITAL_PLATFORM"/>
                </h5>

                <DropDown
                    activeIndex={activeIndex}
                    className={infoByPlaceStyle.select_place_drop_down}
                    optionList={[
                        <DropDownOption
                            image={place2gisImage}
                            key="2gis"
                            title={<Locale stringKey="COMPANY_NAME__2GIS"/>}
                        />,
                        <DropDownOption
                            image={placeYandexImage}
                            key="yandex"
                            title={<Locale stringKey="COMPANY_NAME__YANDEX_MAPS"/>}
                        />,
                        <DropDownOption
                            image={placeGooglePointImage}
                            key="google"
                            title={<Locale stringKey="COMPANY_NAME__GOOGLE_MAPS"/>}
                        />,
                    ]}
                    setActiveIndex={setActiveIndexOuter}
                />
            </div>

            <div className={infoByPlaceStyle.card_list_wrapper}>
                <Card
                    className={infoByPlaceStyle.card}
                    description={
                        <Locale
                            stringKey="CARD__HEADER__BEFORE_CONNECTING__SUB_TEXT"
                            valueMap={{value: openWebsiteDiff.past}}
                        />
                    }
                    percent={openWebsiteDiff.increase}
                    title={<Locale stringKey="CARD__HEADER__SITE_VISITS"/>}
                    value={openWebsiteDiff.current}
                />

                <Card
                    className={infoByPlaceStyle.card}
                    description={
                        <Locale
                            stringKey="CARD__HEADER__BEFORE_CONNECTING__SUB_TEXT"
                            valueMap={{value: buildRouteDiff.past}}
                        />
                    }
                    percent={buildRouteDiff.increase}
                    title={<Locale stringKey="CARD__HEADER__ROUTES_SET"/>}
                    value={buildRouteDiff.current}
                />

                <Card
                    className={infoByPlaceStyle.card}
                    description={
                        <Locale
                            stringKey="CARD__HEADER__BEFORE_CONNECTING__SUB_TEXT"
                            valueMap={{value: viewsDiff.past}}
                        />
                    }
                    percent={viewsDiff.increase}
                    title={<Locale stringKey="CARD__HEADER__COMPANY_PAGE_IMPRESSIONS"/>}
                    value={viewsDiff.current}
                />

                <Card
                    className={infoByPlaceStyle.card}
                    description={
                        <Locale
                            stringKey="CARD__HEADER__BEFORE_CONNECTING__SUB_TEXT"
                            valueMap={{value: actionsPhoneDiff.past}}
                        />
                    }
                    percent={actionsPhoneDiff.increase}
                    title={<Locale stringKey="CARD__HEADER__CALLS"/>}
                    value={actionsPhoneDiff.current}
                />
            </div>
        </div>
    );
}
