// @flow

import React, {useContext} from 'react';

import {classNames} from '../../../lib/css';
import {Locale} from '../../../../provider/locale/c-locale';
import {getLocalePositionNumeric} from '../../../../provider/locale/locale-context-helper-number';
import type {LocaleContextType} from '../../../../provider/locale/locale-context-type';
import {LocaleContext} from '../../../../provider/locale/c-locale-context';
import type {ReportContextType} from '../../../../provider/report/report-type';
import {ReportContext} from '../../../../provider/report/c-report-context';
import {IsRender} from '../../layout/is-render/c-is-render';

import {getAveragePosition} from './rating-card-helper';
import whiteGreenArrowUpImage from './image/white-green-arrow-up.png';
import ratingCardStyle from './rating-card.scss';

type PropsType = {
    +className?: string,
};

export function RatingCard(props: PropsType): React$Node {
    const {className} = props;
    const fullClassName = classNames(ratingCardStyle.rating_card, className);

    const localeContextData = useContext<LocaleContextType>(LocaleContext);
    const {localeName} = localeContextData;
    const reportContextData = useContext<ReportContextType>(ReportContext);
    const {report} = reportContextData;

    if (!report) {
        return null;
    }

    const averageRating = getAveragePosition([
        report.double_gis.average_position,
        report.yandex.average_position,
        report.gmb.average_position,
    ]);

    if (!averageRating) {
        return null;
    }

    const current = Math.round(averageRating.current);
    const past = Math.round(averageRating.past);
    const increasePosition = past - current;

    return (
        <div className={fullClassName}>
            <p className={ratingCardStyle.value}>{current}</p>

            <p className={ratingCardStyle.title}>
                <Locale stringKey="CARD__HEADER__AVERAGE_DISPENSING_POSITION"/>
            </p>

            <p className={ratingCardStyle.description}>
                <Locale
                    stringKey="CARD__HEADER__BEFORE_CONNECTING__SUB_TEXT"
                    valueMap={{value: getLocalePositionNumeric(past, localeName)}}
                />
            </p>

            <IsRender isRender={increasePosition > 0}>
                <p className={ratingCardStyle.delta}>
                    <img alt="" className={ratingCardStyle.delta_arrow} src={whiteGreenArrowUpImage}/>

                    <span>{increasePosition}</span>
                </p>
            </IsRender>
        </div>
    );
}
