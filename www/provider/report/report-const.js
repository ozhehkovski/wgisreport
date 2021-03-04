// @flow

import type {GetReportBodyType, ReportCompanySocialServiceNameType, ReportContextType} from './report-type';

export const defaultReportContext: ReportContextType = {
    fetchReport: (getReportBody: GetReportBodyType): Promise<Error | null> => Promise.resolve<null>(null),
    report: null,
    fetchingError: null,
    isInProgress: false,
};

export const reportCompanySocialServiceNameMap: {[key: string]: ReportCompanySocialServiceNameType} = {
    vKontakte: 'VK',
    facebook: 'Facebook',
    instagram: 'Instagram',
    youtube: 'Youtube',
};
