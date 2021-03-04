/* eslint react/jsx-max-depth: [1, { "max": 7 }] */

// @flow

import React, {useContext} from 'react';

import {Wrapper} from '../layout/wrapper/c-wrapper';
import {Container} from '../layout/container/c-container';
import {Locale} from '../../../provider/locale/c-locale';
import type {ReportContextType} from '../../../provider/report/report-type';
import {ReportContext} from '../../../provider/report/c-report-context';
import {getCompanyAsRecommendationCheckList} from '../../../provider/report/report-helper';
import {IsRender} from '../layout/is-render/c-is-render';

import {RecommendationItem} from './recommendation-item/c-recommendation-item';
import recommendationStyle from './recommendation.scss';

type PropsType = {};

export function Recommendation(props: PropsType): React$Node {
    const reportContextData = useContext<ReportContextType>(ReportContext);
    const {report} = reportContextData;

    if (!report) {
        return null;
    }

    const checkData = getCompanyAsRecommendationCheckList(report);

    const {
        isNeedDescription,
        isNeedLogoAndCover,
        isNeedGallery,
        isNeedAddCategories,
        isNeedAlternativePhones,
        isNeedAnswerToClient,
        isNeedAttentionToReviews,
        isNeedGoodAndServices,
    } = checkData;

    return (
        <div className={recommendationStyle.recommendation}>
            <Wrapper>
                <IsRender isRender={isNeedDescription}>
                    <Container part={6}>
                        <RecommendationItem
                            actionLink={<Locale stringKey="RECOMMENDATION_ITEM__LINK__1"/>}
                            text={<Locale stringKey="RECOMMENDATION_ITEM__TEXT__1"/>}
                            title={<Locale stringKey="RECOMMENDATION_ITEM__HEADER__1"/>}
                        />
                    </Container>
                </IsRender>

                <IsRender isRender={isNeedLogoAndCover}>
                    <Container part={6}>
                        <RecommendationItem
                            actionLink={<Locale stringKey="RECOMMENDATION_ITEM__LINK__2"/>}
                            text={<Locale stringKey="RECOMMENDATION_ITEM__TEXT__2"/>}
                            title={<Locale stringKey="RECOMMENDATION_ITEM__HEADER__2"/>}
                        />
                    </Container>
                </IsRender>

                <IsRender isRender={isNeedGallery}>
                    <Container part={6}>
                        <RecommendationItem
                            actionLink={<Locale stringKey="RECOMMENDATION_ITEM__LINK__3"/>}
                            text={<Locale stringKey="RECOMMENDATION_ITEM__TEXT__3"/>}
                            title={<Locale stringKey="RECOMMENDATION_ITEM__HEADER__3"/>}
                        />
                    </Container>
                </IsRender>

                <IsRender isRender={isNeedAddCategories}>
                    <Container part={6}>
                        <RecommendationItem
                            actionLink={<Locale stringKey="RECOMMENDATION_ITEM__LINK__4"/>}
                            text={<Locale stringKey="RECOMMENDATION_ITEM__TEXT__4"/>}
                            title={<Locale stringKey="RECOMMENDATION_ITEM__HEADER__4"/>}
                        />
                    </Container>
                </IsRender>

                <IsRender isRender={isNeedAlternativePhones}>
                    <Container part={6}>
                        <RecommendationItem
                            actionLink={<Locale stringKey="RECOMMENDATION_ITEM__LINK__5"/>}
                            text={<Locale stringKey="RECOMMENDATION_ITEM__TEXT__5"/>}
                            title={<Locale stringKey="RECOMMENDATION_ITEM__HEADER__5"/>}
                        />
                    </Container>
                </IsRender>

                <IsRender isRender={isNeedAnswerToClient}>
                    <Container part={6}>
                        <RecommendationItem
                            actionLink={<Locale stringKey="RECOMMENDATION_ITEM__LINK__7"/>}
                            text={<Locale stringKey="RECOMMENDATION_ITEM__TEXT__7"/>}
                            title={<Locale stringKey="RECOMMENDATION_ITEM__HEADER__7"/>}
                        />
                    </Container>
                </IsRender>

                <IsRender isRender={isNeedAttentionToReviews}>
                    <Container part={6}>
                        <RecommendationItem
                            actionLink={<Locale stringKey="RECOMMENDATION_ITEM__LINK__6"/>}
                            text={<Locale stringKey="RECOMMENDATION_ITEM__TEXT__6"/>}
                            title={<Locale stringKey="RECOMMENDATION_ITEM__HEADER__6"/>}
                        />
                    </Container>
                </IsRender>

                <IsRender isRender={isNeedGoodAndServices}>
                    <Container part={6}>
                        <RecommendationItem
                            actionLink={<Locale stringKey="RECOMMENDATION_ITEM__LINK__8"/>}
                            text={<Locale stringKey="RECOMMENDATION_ITEM__TEXT__8"/>}
                            title={<Locale stringKey="RECOMMENDATION_ITEM__HEADER__8"/>}
                        />
                    </Container>
                </IsRender>
            </Wrapper>
        </div>
    );
}
