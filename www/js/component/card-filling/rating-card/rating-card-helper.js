// @flow

import type {ReportPositionDiffType} from '../../../../provider/report/report-type';

export function getAveragePosition(dataListFull: Array<ReportPositionDiffType>): ReportPositionDiffType | null {
    const dataList: Array<ReportPositionDiffType> = dataListFull.filter(
        (dataPosition: ReportPositionDiffType): boolean => {
            return dataPosition.current !== 0 || dataPosition.past !== 0;
        }
    );

    const size = dataList.length;

    if (size === 0) {
        return null;
    }

    const accum: ReportPositionDiffType = {
        current: 0,
        increase: 0,
        past: 0,
    };

    return dataList.reduce<ReportPositionDiffType>(
        (previousValue: ReportPositionDiffType, currentValue: ReportPositionDiffType): ReportPositionDiffType => {
            return {
                current: previousValue.current + currentValue.current / size,
                increase: previousValue.increase + currentValue.increase / size,
                past: previousValue.past + currentValue.past / size,
            };
        },
        accum
    );
}
