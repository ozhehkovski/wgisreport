// @flow

import type {GetReportBodyType} from './report-type';

export const getReportBodyTypeExample: GetReportBodyType = {
    /* eslint-disable camelcase, id-match */
    // company_id: 139345,
    company_id: 6237,
    language: 'ru',
    ccl_date: '2020-11-01T00:00',
    report_date_range: {
        from_dt: '2020-09-01T00:00',
        to_dt: '2020-09-30T00:00',
    },
    compare_date_range: {
        from_dt: '2019-07-01T00:00',
        to_dt: '2019-07-30T00:00',
    },
    /* eslint-enable camelcase, id-match */
};

export const getReportExampleUrl
    = 'http://localhost:9090?company-id=6237&locale=ru-RU&ccl-date=2020-11-01T00:00&report-date-from=2020-09-01T00:00&report-date-to=2020-09-30T00:00&compare-date-from=2019-07-01T00:00&compare-date-to=2019-07-30T00:00';
