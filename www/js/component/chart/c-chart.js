// @flow

import React, {useEffect, useRef} from 'react';
import ChartJS, {type ChartJsDataType} from 'chart.js';

import {classNames} from '../../lib/css';

import chartStyle from './chart.scss';

type PropsType = {|
    +chartData: ChartJsDataType,
    +className?: string,
|};

export type ChartPropsType = PropsType;

export function Chart(props: PropsType): React$Node {
    const {chartData, className} = props;
    const canvasRef = useRef<?HTMLCanvasElement>();

    useEffect(() => {
        const canvasNode = canvasRef.current;

        if (!canvasNode) {
            return;
        }

        const context = canvasNode.getContext('2d');

        const chartJs = new ChartJS(context, chartData);

        console.log('chartJs is ready', chartJs);
    }, [canvasRef, chartData]);

    return (
        <div className={classNames(chartStyle.chart, className)}>
            <canvas className={chartStyle.canvas} ref={canvasRef}/>
        </div>
    );
}
