// @flow

declare module 'chart.js' {
    declare export type ChartJsDataTypeType = 'bar' | 'line';
    declare export type ChartJsDataOptionsLegendPositionType = 'top';

    declare export type ChartJsDataBarDataDatasetType = {|
        label: string | null,
        backgroundColor?: string,
        pointBackgroundColor?: string,
        borderColor: string,
        borderWidth: number,
        data: Array<number>,
        type?: ChartJsDataTypeType,
        lineTension?: number,
        radius?: number,
    |};

    declare export type ChartJsDataBarDataType = {|
        +labels: Array<string>,
        +datasets: Array<ChartJsDataBarDataDatasetType>,
    |};

    declare export type ChartJsDataOptionsLegendType = {|
        +position: ChartJsDataOptionsLegendPositionType,
    |};

    declare export type ChartJsDataOptionsTitleType = {|
        +display: boolean,
        +text: string,
    |};

    declare export type ChartJsDataOptionsType = {|
        +responsive?: boolean,
        +legend?: ChartJsDataOptionsLegendType | null,
        +title?: ChartJsDataOptionsTitleType,
    |};

    declare export type ChartJsDataType = {|
        type: ChartJsDataTypeType,
        data: ChartJsDataBarDataType,
        options?: ChartJsDataOptionsType,
    |};

    declare export default class ChartJs {
        constructor(context: CanvasRenderingContext2D, data: ChartJsDataType): ChartJs,
    }
}
