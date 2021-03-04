// @flow

import type {ChartJsDataBarDataDatasetType} from 'chart.js';

export type BarChartReviewDynamicDataType = {|
    +labelList: Array<string>,
    +datasetList: Array<ChartJsDataBarDataDatasetType>,
|};
