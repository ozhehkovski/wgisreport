// @flow

import React from 'react';

import {LocaleProvider} from '../../../provider/locale/c-locale-context';
import {ReportProvider} from '../../../provider/report/c-report-context';

import {AppContent} from './c-app-content';

export function App(): React$Node {
    return (
        <ReportProvider>
            <LocaleProvider>
                <AppContent/>
            </LocaleProvider>
        </ReportProvider>
    );
}
