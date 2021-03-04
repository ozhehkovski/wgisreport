/* eslint react/jsx-max-depth: [1, { "max": 7 }] */

// @flow

/* global location */

import React, {useContext, useEffect, useState} from 'react';

import serviceStyle from '../../../css/service.scss';
import {LocaleContext} from '../../../provider/locale/c-locale-context';
import type {LocaleContextType} from '../../../provider/locale/locale-context-type';
import {Header} from '../header/с-header';
import {HeadLine} from '../head-line/с-head-line';
import {SectionHeader} from '../section-header/c-section-header';
import {Container} from '../layout/container/c-container';
import {Wrapper} from '../layout/wrapper/c-wrapper';
import {ShortInfoTable} from '../short-info-table/c-short-info-table';
import {ShortInfoBeforeAfter} from '../short-info-before-after/c-short-info-before-after';
import {Section} from '../layout/section/с-section';
import {Recommendation} from '../recommendation/c-recommendation';
import {InfoAsCheck} from '../info-as-check/c-info-as-check';
import {ScoreBar} from '../score-bar/с-score-bar';
import {ReviewDynamic} from '../review-dynamic/c-review-dynamic';
import {ReviewByPlace} from '../review-by-place/c-review-by-place';
import {CardFilling} from '../card-filling/c-card-filling';
import {Spinner} from '../layout/spinner/c-spinner';
import {Locale} from '../../../provider/locale/c-locale';
import {ReportContext} from '../../../provider/report/c-report-context';
import type {ReportContextType} from '../../../provider/report/report-type';
import {UserActivity} from '../user-activity/c-user-activity';
import {getReportRequestBodyFromURL} from '../../../provider/report/report-helper';
import {localeNameReference} from '../../../provider/locale/locale-context-const';
import {getReportExampleUrl} from '../../../provider/report/report-const-example';
import {SmthWrong} from '../smth-wrong/smth-wrong';

import appContentStyle from './app-content.scss';

export function AppContent(): React$Node {
    const localeContextData = useContext<LocaleContextType>(LocaleContext);
    const {setLocaleName} = localeContextData;
    const reportContextData = useContext<ReportContextType>(ReportContext);
    const {fetchReport, fetchingError, isInProgress, report} = reportContextData;
    const [requestBodyError, setRequestBodyError] = useState<Error | null>(null);

    useEffect(() => {
        const requestBody = getReportRequestBodyFromURL(location.href);

        console.log('example url:');
        console.log(getReportExampleUrl);

        if (requestBody instanceof Error) {
            setRequestBodyError(requestBody);
            return;
        }

        setLocaleName(requestBody.language === 'en' ? localeNameReference.enUs : localeNameReference.ruRu);
        fetchReport(requestBody);
    }, [fetchReport, setLocaleName]);

    if (requestBodyError) {
        return (
            <div className={serviceStyle.width_limiter}>
                <Header key="header"/>

                <SmthWrong/>

                {/* <h1>{requestBodyError.message}</h1>*/}
            </div>
        );
    }

    if (fetchingError) {
        return (
            <div className={serviceStyle.width_limiter}>
                <Header key="header"/>

                <SmthWrong/>

                {/* <h1>{fetchingError.message}</h1>*/}
            </div>
        );
    }

    if (isInProgress || !report) {
        return (
            <div className={serviceStyle.width_limiter}>
                <Header key="header"/>

                <Spinner size={66} wrapperPadding={50}/>
            </div>
        );
    }

    return (
        <div className={serviceStyle.width_limiter}>
            <Header key="header"/>

            <HeadLine/>

            <Section>
                <SectionHeader
                    subTitle={<Locale stringKey="SECTION_HEADER__COMPANY_DETAILS__SUB_TEXT"/>}
                    title={<Locale stringKey="SECTION_HEADER__COMPANY_DETAILS"/>}
                />

                <Wrapper>
                    <Container part={8}>
                        <ShortInfoTable/>
                    </Container>

                    <Container className={appContentStyle.short_info_container} part={4}>
                        <ShortInfoBeforeAfter/>
                    </Container>
                </Wrapper>
            </Section>

            <Section>
                <SectionHeader
                    subTitle={<Locale stringKey="SECTION_HEADER__USER_ACTIVITY__SUB_TEXT"/>}
                    title={<Locale stringKey="SECTION_HEADER__USER_ACTIVITY"/>}
                />

                <UserActivity/>
            </Section>

            <Section>
                <SectionHeader
                    subTitle={<Locale stringKey="SECTION_HEADER__REPUTATION_AND_REVIEWS__SUB_TEXT"/>}
                    title={<Locale stringKey="SECTION_HEADER__REPUTATION_AND_REVIEWS"/>}
                />

                <Wrapper>
                    <Container part={8}>
                        <ReviewDynamic/>
                    </Container>

                    <Container part={4}>
                        <ReviewByPlace/>
                    </Container>
                </Wrapper>

                <Wrapper>
                    <Container part={12}>
                        <ScoreBar/>
                    </Container>
                </Wrapper>
            </Section>

            <Section>
                <SectionHeader
                    subTitle={<Locale stringKey="SECTION_HEADER__COMPANY_CARD_FILLING__SUB_TEXT"/>}
                    title={<Locale stringKey="SECTION_HEADER__COMPANY_CARD_FILLING"/>}
                />

                <CardFilling/>

                <Wrapper>
                    <Container part={12}>
                        <InfoAsCheck/>
                    </Container>
                </Wrapper>
            </Section>

            <Section>
                <SectionHeader
                    subTitle={<Locale stringKey="SECTION_HEADER__RECOMMENDATION__SUB_TEXT"/>}
                    title={<Locale stringKey="SECTION_HEADER__RECOMMENDATION"/>}
                />

                <Recommendation/>
            </Section>
        </div>
    );
}
