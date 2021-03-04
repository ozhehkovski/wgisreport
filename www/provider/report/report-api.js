// @flow

/* global fetch */

import type {GetReportBodyType, ReportType} from './report-type';

export async function fetchReport(getReportBody: GetReportBodyType): Promise<ReportType | Error> {
    try {
        const response = await fetch('https://api.rocketdata.io/reports/2gis/', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                // TODO: separate authorization token
                Authorization: 'Token 69a5d364294d452165b29805115a8b3a59e84314',
            },
            body: JSON.stringify(getReportBody),
        });

        const result = await response.json();

        return response.ok ? result : new Error(JSON.stringify(result));
    } catch (error) {
        console.error(error.message);
        return error;
    }
}
