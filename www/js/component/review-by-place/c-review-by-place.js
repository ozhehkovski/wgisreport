/* eslint react/jsx-max-depth: [1, { "max": 5 }] */

// @flow

import React, {useContext} from 'react';

import {Locale} from '../../../provider/locale/c-locale';
import type {ReportContextType} from '../../../provider/report/report-type';
import {type ReportReviewsCatalogsItemType} from '../../../provider/report/report-type';
import {ReportContext} from '../../../provider/report/c-report-context';

import reviewByPlaceStyle from './review-by-place.scss';

type PropsType = {};

export function ReviewByPlace(props: PropsType): React$Node {
    const reportContextData = useContext<ReportContextType>(ReportContext);
    const {report} = reportContextData;

    if (!report) {
        return null;
    }

    const {reviews} = report;
    const {catalogs} = reviews;

    return (
        <div className={reviewByPlaceStyle.review_by_place}>
            <h5 className={reviewByPlaceStyle.title}>
                <Locale stringKey="CARD__HEADER__NUMBER_OF_REVIEWS_BY_SITE"/>
            </h5>

            <div className={reviewByPlaceStyle.info_wrapper}>
                {catalogs
                    .sort(
                        (
                            catalogDataA: ReportReviewsCatalogsItemType,
                            catalogDataB: ReportReviewsCatalogsItemType
                        ): number => catalogDataB.count - catalogDataA.count
                    )
                    .slice(0, 5)
                    .map<React$Node>((catalogData: ReportReviewsCatalogsItemType): React$Node => {
                        const {count, id, name, logo} = catalogData;

                        return (
                            <div className={reviewByPlaceStyle.info_item} key={id}>
                                <img alt={name} className={reviewByPlaceStyle.info_image} src={logo}/>

                                <p className={reviewByPlaceStyle.info_title}>{name}</p>

                                <p className={reviewByPlaceStyle.info_count}>{count}</p>
                            </div>
                        );
                    })}
            </div>

            {/*
            <p className={reviewByPlaceStyle.sub_text}>
                <Locale
                    stringKey="CARD__NUMBER_OF_REVIEWS_BY_SITE_INFORMATION_FOR"
                    valueMap={{month: <Locale stringKey={monthLangKeyList[2]}/>, year: 2020}}
                />
            </p>
*/}
        </div>
    );
}
