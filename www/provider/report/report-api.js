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
