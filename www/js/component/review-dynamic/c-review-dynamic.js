// @flow

import React, {useContext} from 'react';
import type {ChartJsDataType} from 'chart.js';

import {Locale} from '../../../provider/locale/c-locale';
import type {ReportContextType} from '../../../provider/report/report-type';
import {ReportContext} from '../../../provider/report/c-report-context';
import {LoadComponent} from '../../lib/c-load-component';
import type {LocaleContextType} from '../../../provider/locale/locale-context-type';
import {LocaleContext} from '../../../provider/locale/c-locale-context';

import reviewDynamicStyle from './review-dynamic.scss';
import {getBarChartReviewDynamicData} from './review-dynamic-helper';

type PropsType = {};

export function ReviewDynamic(props: PropsType): React$Node {
    const localeContextData = useContext<LocaleContextType>(LocaleContext);
    const {localeName} = localeContextData;
    const reportContextData = useContext<ReportContextType>(ReportContext);
    const {report} = reportContextData;

    if (!report) {
        return null;
    }

    const barChartReviewDynamicData = getBarChartReviewDynamicData(report, localeName);
    const {labelList, datasetList} = barChartReviewDynamicData;

    const chartData: ChartJsDataType = {
        type: 'bar',
        data: {
            labels: labelList,
            datasets: datasetList,
        },
        options: {
            legend: null,
        },
    };

    return (
        <div className={reviewDynamicStyle.review_dynamic}>
            <h5 className={reviewDynamicStyle.title}>
                <Locale stringKey="CARD__HEADER__DYNAMICS_REVIEWS_12_MONTHS"/>
            </h5>

            <div className={reviewDynamicStyle.legend_wrapper}>
                <p className={reviewDynamicStyle.legend_item__full}>
                    <Locale stringKey="CARD__HEADER__TOTAL_REVIEWS"/>
                </p>

                <p className={reviewDynamicStyle.legend_item__with_answer}>
                    <Locale stringKey="CARD__HEADER__REVIEWS_WITH_COMPANY_RESPONSES"/>
                </p>
            </div>

            <LoadComponent>
                {async (): Promise<React$Node> => {
                    const {Chart} = await import(/* webpackChunkName: 'async-chart' */ '../chart/c-chart');

                    return <Chart chartData={chartData}/>;
                }}
            </LoadComponent>
        </div>
    );
}
