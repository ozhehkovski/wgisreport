// @flow

import type {PlaceDataType, ReportBasicDiffType, ReportType} from '../../../provider/report/report-type';

import type {PlaceNameType} from './user-activity-type';
import {placeNameMap} from './user-activity-const';

export function getPlaceDataByName(report: ReportType, placeName: PlaceNameType): PlaceDataType {
    switch (placeName) {
        case placeNameMap.doubleGis:
            return report.double_gis;
        case placeNameMap.yandex:
            return report.yandex;
        case placeNameMap.google:
            return report.gmb;
        default:
            return report.double_gis;
    }
}

/*
export function getPlaceDataAllViews(report: ReportType): ReportBasicDiffType {
    const {double_gis: doubleGis, yandex, gmb} = report;

    const defaultViews: ReportBasicDiffType = {
        current: 0,
        past: 0,
        increase: 0,
    };

    const doubleGisViews = doubleGis.basic_diff.views || defaultViews;
    const googleViews = gmb.basic_diff.views || defaultViews;
    const yandexViews = yandex.basic_diff.views || defaultViews;

    const current = doubleGisViews.current + googleViews.current + yandexViews.current;
    const past = doubleGisViews.past + googleViews.past + yandexViews.past;
    const increase = past ? current / past - 1 : current;

    return {
        current,
        past,
        increase: Math.round(increase * 100),
    };
}
*/
