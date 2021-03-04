// @flow

/* global Intl */

import type {ChartJsDataBarDataDatasetType} from 'chart.js';

import type {ReportReviewsDynamicItemType, ReportType} from '../../../provider/report/report-type';
import type {LocaleNameType} from '../../../provider/locale/locale-context-type';

import type {BarChartReviewDynamicDataType} from './review-dynamic-type';

function getBarChartReviewLabelList(report: ReportType, localeName: LocaleNameType): Array<string> {
    const {reviews} = report;
    const {dynamic} = reviews;

    const intlOptions = {month: 'short'};
    const intl = new Intl.DateTimeFormat(localeName, intlOptions);

    return dynamic.map<string>((reviewsDynamicItem: ReportReviewsDynamicItemType): string => {
        const {key} = reviewsDynamicItem;

        return intl.format(new Date(key));
    });
}

function getBarChartReviewDatasetList(report: ReportType): Array<ChartJsDataBarDataDatasetType> {
    const {reviews} = report;
    const {dynamic} = reviews;

    const datasetFullCount: ChartJsDataBarDataDatasetType = {
        label: null,
        backgroundColor: '#f2f2f2',
        borderColor: '#555',
        borderWidth: 1,
        data: [],
    };

    const datasetAnswerCount: ChartJsDataBarDataDatasetType = {
        radius: 1,
        borderWidth: 4,
        label: null,
        backgroundColor: 'transparent',
        borderColor: '#17a31c',
        type: 'line',
        lineTension: 0,
        pointBackgroundColor: '#17a31c',
        data: [],
    };

    dynamic.forEach((reviewsDynamicItem: ReportReviewsDynamicItemType) => {
        const {count, with_answer_count: withAnswerCount} = reviewsDynamicItem;

        datasetFullCount.data.push(count);
        datasetAnswerCount.data.push(withAnswerCount);
    });

    return [datasetAnswerCount, datasetFullCount];
}

export function getBarChartReviewDynamicData(
    report: ReportType,
    localeName: LocaleNameType
): BarChartReviewDynamicDataType {
    return {
        labelList: getBarChartReviewLabelList(report, localeName),
        datasetList: getBarChartReviewDatasetList(report),
    };
}
