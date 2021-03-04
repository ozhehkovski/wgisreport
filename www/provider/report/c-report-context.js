// @flow

import React, {useCallback, useMemo, useState} from 'react';

import {defaultReportContext} from './report-const';
import type {FetchReportType, GetReportBodyType, ReportContextType, ReportType} from './report-type';
import {fetchReport} from './report-api';

export const ReportContext: React$Context<ReportContextType> = React.createContext<ReportContextType>(
    defaultReportContext
);

type PropsType = {|
    +children: React$Node,
|};

export function ReportProvider(props: PropsType): React$Node {
    const {children} = props;
    const [isInProgress, setIsInProgress] = useState<boolean>(false);
    const [fetchingError, setFetchingError] = useState<Error | null>(null);
    const [report, setReport] = useState<ReportType | null>(null);

    const fetchReportMemoized = useCallback<FetchReportType>(function fetchReportOuter(
        getReportBody: GetReportBodyType
    ): Promise<Error | null> {
        setIsInProgress(true);
        setFetchingError(null);
        setReport(null);

        return fetchReport(getReportBody)
            .then((result: ReportType | Error): Error | null => {
                if (result instanceof Error) {
                    setFetchingError(result);
                    return result;
                }

                setReport(result);

                console.log('---- report ----');
                console.log(result);

                return null;
            })
            .finally(() => {
                setIsInProgress(false);
            });
    },
    []);

    const providedData: ReportContextType = useMemo((): ReportContextType => {
        return {
            fetchReport: fetchReportMemoized,
            report,
            fetchingError,
            isInProgress,
        };
    }, [fetchReportMemoized, report, fetchingError, isInProgress]);

    return <ReportContext.Provider value={providedData}>{children}</ReportContext.Provider>;
}
