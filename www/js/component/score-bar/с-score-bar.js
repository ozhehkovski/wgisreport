// @flow

import React, {useContext} from 'react';

import {Card} from '../card/с-card';
import {Locale} from '../../../provider/locale/c-locale';
import type {LocaleContextType} from '../../../provider/locale/locale-context-type';
import {LocaleContext} from '../../../provider/locale/c-locale-context';
import type {ReportContextType} from '../../../provider/report/report-type';
import {ReportContext} from '../../../provider/report/c-report-context';
import {getFormattedNumber} from '../card/card-helper';

import scoreBarStyle from './score-bar.scss';

type PropsType = {};

export function ScoreBar(props: PropsType): React$Node {
    const localeContextData = useContext<LocaleContextType>(LocaleContext);
    const {localeName} = localeContextData;
    const reportContextData = useContext<ReportContextType>(ReportContext);
    const {report} = reportContextData;

    if (!report) {
        return null;
    }

    const {reviews} = report;
    const {basic_diff: reviewsBasicDiff} = reviews;
    const {avg_rating: avgRatingDiff, count: countDiff, no_answer_count: noAnswerCountDiff} = reviewsBasicDiff;

    return (
        <div className={scoreBarStyle.score_bar}>
            <Card
                className={scoreBarStyle.card}
                description={
                    <Locale
                        stringKey="CARD__HEADER__BEFORE_CONNECTING__SUB_TEXT"
                        valueMap={{value: getFormattedNumber(Number.parseFloat(avgRatingDiff.past), localeName)}}
                    />
                }
                percent={Number.parseInt(avgRatingDiff.increase, 10)}
                title={<Locale stringKey="CARD__HEADER__AVERAGE_RATING"/>}
                value={getFormattedNumber(Number.parseFloat(avgRatingDiff.current), localeName)}
            />

            <Card
                className={scoreBarStyle.card}
                description={
                    <Locale
                        stringKey="CARD__HEADER__BEFORE_CONNECTING__SUB_TEXT"
                        valueMap={{value: getFormattedNumber(countDiff.past, localeName)}}
                    />
                }
                percent={Math.round(countDiff.increase)}
                title={<Locale stringKey="CARD__HEADER__TOTAL_REVIEWS"/>}
                value={getFormattedNumber(countDiff.current, localeName)}
            />

            <Card
                className={scoreBarStyle.card}
                description={
                    <Locale
                        stringKey="CARD__HEADER__BEFORE_CONNECTING__SUB_TEXT"
                        valueMap={{value: getFormattedNumber(countDiff.past - noAnswerCountDiff.past, localeName)}}
                    />
                }
                percent={-101}
                title={<Locale stringKey="CARD__HEADER__REVIEWS_WITH_COMPANY_RESPONSES"/>}
                value={getFormattedNumber(countDiff.current - noAnswerCountDiff.current, localeName)}
            />
        </div>
    );
}
